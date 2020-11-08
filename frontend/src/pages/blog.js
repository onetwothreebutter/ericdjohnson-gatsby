import React, { useEffect } from 'react'
import AnimatedHeading from '../page-assets/global/components/animated-heading/loadable-animated-heading'
import PhotoCredit from '../page-assets/global/components/photo-credit'
import BlockContent from '@sanity/block-content-to-react'
import sanityClient from '@sanity/client'
import sanityJson from '../../../backend/sanity.json'
import imageUrlBuilder from '@sanity/image-url'
import { formatDistance, differenceInDays, format } from 'date-fns'

//styles
import '../page-assets/blog/styles/blog.sass'

import Layout from '../components/layout'
import { graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

const client = sanityClient({
    projectId: sanityJson.api.projectId,
    dataset: sanityJson.api.dataset,
    useCdn: true // `false` if you want to ensure fresh data
});
const builder = imageUrlBuilder(client)

function urlFor(source) {
    return builder.image(source)
}



export const blogIndexPageQuery = graphql`
    
    query allBlogPostsQueryAndBlogIndexBgImageQuery {
    desktopBgImage: file(relativePath: { eq: "blog/images/jess-bailey-l3N9Q27zULw-unsplash.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    mobileBgImage: file(relativePath: { eq: "blog/images/jess-bailey-l3N9Q27zULw-unsplash.jpg"  }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 400) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    allSanityPost(sort: {order: DESC, fields: publishedAt}) {
        edges {
          node {
            title
            publishedAt
            _rawMainImage(resolveReferences: {maxDepth: 10})
            _rawSlug(resolveReferences: {maxDepth: 10})
            _rawBody(resolveReferences: {maxDepth: 10})
            _rawCategories(resolveReferences: {maxDepth: 10})
            _rawAuthor(resolveReferences: {maxDepth: 10})
          }
        }
      }
    }`;

const BlogIndexPage = ({data, ...props}) => {

console.log(data, props);

    const { desktopBgImage, mobileBgImage, allSanityPost} = data;

    const imageSources = [
        mobileBgImage.childImageSharp.fluid,
        {
            ...desktopBgImage.childImageSharp.fluid,
            media: `(min-width: 400px)`,
        }
    ];

    console.log('allSanityPost',allSanityPost);



    const renderPosts = (posts) => {
        return posts.map(({node}) => {
            const {title, _rawSlug, _rawBody, _rawMainImage, publishedAt} = node;
            console.log("_rawBody", _rawBody);
            const formattedPublish = differenceInDays(new Date(), new Date(publishedAt)) >= 1 ?
                 format(new Date(publishedAt), 'MMM dd, y') : formatDistance(new Date(publishedAt), new Date());
            return (
                <div className="blog-post">

                    <div>
                        <h2 className="blog-post__title">{title}</h2>
                        <div>{formattedPublish}</div>
                        <img className="blog-post__image" srcSet={
                            `${urlFor(_rawMainImage).width(600).dpr(1).url()} 1x,
                        ${urlFor(_rawMainImage).width(600).dpr(2).url()} 2x`
                        }
                             src={urlFor(_rawMainImage).width(300).url()}/>
                        <BlockContent className="blog-post__content" blocks={_rawBody}/>
                    </div>

                </div>
            )
        })
    }

    return (
        <Layout>
            <BackgroundImage Tag='section' className="blog-banner" fluid={imageSources}>
                <div className="blog-banner__page-width">
                    <AnimatedHeading
                        headingText="Blog"
                        headingClassName="blog__heading"
                    />
                    <PhotoCredit
                        name="Jess Bailey"
                        image_url="http://unsplash.com/@jessbaileydesigns?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge"
                    />
                </div>
                <div className="blog-banner__background"></div>
            </BackgroundImage>

            <section className="site__section">
                <div className="site__page-width">
                    { renderPosts(allSanityPost.edges) }
                </div>
            </section>
        </Layout>
    );

}

export default BlogIndexPage
