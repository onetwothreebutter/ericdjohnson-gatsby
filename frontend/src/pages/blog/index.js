import React, { useEffect } from 'react'
import AnimatedHeading from '../../page-assets/global/components/animated-heading/loadable-animated-heading'
import PhotoCredit from '../../page-assets/global/components/photo-credit'
import BlogPost from '../../components/blog/blog-post'

//styles
import '../../page-assets/blog/styles/blog.sass'

import Layout from '../../components/layout'
import { graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import GatsbyLink from "gatsby-link";




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

    const renderPosts = (posts) => {
        return posts.map(({node}) => {
            return <BlogPost postData={node}/>;
        });
    };
//CONJECTURE JUNCTION
    //BRAIN TAP
    //BRAIN DUMP
    //NEXUS
    //EJ NEXUS
    //ERIC WIDE WEB (EWW Blog)

    return (
        <Layout>
            <BackgroundImage Tag='section' className="blog-banner" fluid={imageSources}>
                <div className="blog-banner__page-width">
                    <AnimatedHeading
                        headingText="EJ Blog"
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
