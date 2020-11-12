import React from 'react';
import Layout from "../layout";
import BlogPost from "./blog-post";

const BlogPostPage = ({pageContext}) => {
    return (
        <Layout>
            <div className="blog-post-page">
                <BlogPost postData={pageContext.postData} />
            </div>
        </Layout>
    );
}

export default BlogPostPage;