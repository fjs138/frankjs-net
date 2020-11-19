const path = require("path") // nodejs
// path.basename('/foo/bar/baz/asdf/quux.html');
//returns 'quux.html'
// path.basename('/foo/bar/baz/asdf/quux.html', '.html');
//returns 'quux'

// node js config for gatsby
module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    // only need to target markdown files
    const slug = path.basename(node.fileAbsolutePath, ".md")
    // remove file path and extension; just the filename
    // console.log(JSON.stringify(node, undefined, 4)) // testing
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
    // 1 node we're trying to create the node field on
    // 2 name of the field we are creating
    // 3 where the value of the value field comes from
  }
}

// generate pages
module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions // deconstruct from actions
  // 1 get path to template
  const blogTemplate = path.resolve("./src/templates/blog.js")

  // 2 get markdown data
  const res = await graphql(`
    query {
      allMarkdownRemark {
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

  res.data.allMarkdownRemark.edges.forEach(edge => {  // 3 create new pages
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.fields.slug}`,
      context: {
        //things we can pass down to the template
        slug: edge.node.fields.slug,
      },
    })
  })

}
