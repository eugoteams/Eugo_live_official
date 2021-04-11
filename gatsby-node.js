/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

// called after every page is created.
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  // Only update the `/app` page.
  if (page.path.match(/^\/app/)) {
    // page.matchPath is a special key that's used for matching pages
    // with corresponding routes only on the client.
    page.matchPath = "/app/*"

    // Update the page.
    createPage(page)
  }
}


/**
 * The bleow code allows to create 
 * Pages for each blog 
 */
 const { createFilePath } = require("gatsby-source-filesystem")
 const path = require(`path`)
 
 exports.onCreateNode = ({ node, actions, getNode }) => { // create a page for every time Upload an article
   const { createNodeField } = actions
   if (node.internal.type === `MarkdownRemark`) {
     const value = createFilePath({ node, getNode })
     createNodeField({
       name: `slug`,
       node,
       value,
     })
   }
 }
 
 exports.createPages = async ({ graphql, actions }) => {
   const { data } = await getPageData(graphql)
   data.blogPosts.edges.forEach(({ node }) => {
     const { slug } = node.fields
     actions.createPage({
       path: `/blog${slug}`,
       component: path.resolve("./src/components/template/BlogPost.js"),
       context: { slug: slug },
     })
   })
 }
 
 async function getPageData(graphql) {
   return await graphql(`
     {
       blogPosts: allMarkdownRemark {
         edges {
           node {
             fields {
               slug
             }
           }
         }
       }
     }
   `)
 }