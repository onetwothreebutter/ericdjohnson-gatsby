const path = require(`path`)

exports.createPages = async ({ actions, graphql }) => {
    const { createPage } = actions;



    const result = await graphql(`
      {
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
      }
    `);

    if (result.errors) {
        throw result.errors;
    }

    console.log(result.data.allSanityPost.edges);

    result.data.allSanityPost.edges.forEach(({node}) => {
        createPage({
            path: node._rawSlug.current,
            component: path.resolve('src/components/blog/blog-post-page.js'),
            context: {
                postData: node
            }
        });
    });
};