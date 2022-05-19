import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import Navbar from '../../components/nav'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const BlogPost = ({ data }) => {
  const image = getImage(data.mdx.frontmatter.hero_image)

  return (
    <>
      <Navbar>
      </Navbar>
      <Layout pageTitle={data.mdx.frontmatter.title}>
        <p>Posted:{data.mdx.frontmatter.date}</p>
        <GatsbyImage
          image={image}
          alt={data.mdx.frontmatter.hero_image_alt}
        />
        <MDXRenderer>
          {data.mdx.body}
        </MDXRenderer>
      </Layout>
    </>
  )
}


export const query = graphql`
query ($id: String) {
  mdx(id: {eq: $id}) {
    frontmatter {
      title
      date(formatString: "MMMM D, YYYY")
      hero_image_alt
      hero_image_credit_link
      hero_image_credit_text
      hero_image {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
    body
    id
  }
}
`

export default BlogPost

console.log(BlogPost)