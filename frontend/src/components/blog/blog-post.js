import React from "react";
import BlockContent from "@sanity/block-content-to-react";
import { urlFor} from "../../utils/sanityUtils";
import { formatDistance, differenceInDays, format } from 'date-fns'
import GatsbyLink from "gatsby-link";


const BlogPost = ({postData}) => {
    const {title, _rawSlug, _rawBody, _rawMainImage, publishedAt} = postData;
    const formattedPublish = differenceInDays(new Date(), new Date(publishedAt)) >= 1 ?
        format(new Date(publishedAt), 'MMM dd, y') : formatDistance(new Date(publishedAt), new Date());
    return (
        <div className="blog-post">
                <h2 className="blog-post__title">{title}</h2>
                <div className="blog-post__date">{formattedPublish}</div>
                <img className="blog-post__image" srcSet={
                    `${urlFor(_rawMainImage).width(600).dpr(1).url()} 1x,
                        ${urlFor(_rawMainImage).width(600).dpr(2).url()} 2x`
                }
                     src={urlFor(_rawMainImage).width(300).url()}/>
                <BlockContent className="blog-post__content" blocks={_rawBody}/>

                <GatsbyLink to={_rawSlug.current}>Permalink</GatsbyLink>

        </div>
    )
}

export default BlogPost;