//
// exports.createPages = async ({ actions, graphql }) => {
//     const { createPage } = actions;
//
//     const createPagesFromSanity = ({ component = '', pages = [], type }) => {
//         forEachPage(pages, edge => {
//             try {
//                 createPage({
//                     path: `${edge.node.route.slug.current}`,
//                     component: path.resolve(component),
//                     context: {
//                         slug: edge.node.route.slug.current,
//                     },
//                 });
//             } catch (e) {
//                 console.error(`error with ${type} content`, e.message);
//             }
//         });
//     };
//
//     const queryParams = `
//     (filter: {route: {enabled: {eq: true}}}) {
//       edges {
//         node {
//           _type
//           route {
//             slug {
//               current
//             }
//           }
//         }
//       }
//     }
//   `;
//
//
//
//
//     const result = await graphql(`
//   {
//     allSanityHomepage ${queryParams}
//
//   }
// `);
//
//     if (result.errors) {
//         throw result.errors;
//     }
//
//
//     // Create generic pages
//     createPagesFromSanity({
//         pages: result.data.allSanityPage,
//         type: 'page',
//         component: 'src/components/templates/Page/Page.jsx',
//     });
// };