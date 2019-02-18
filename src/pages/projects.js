import React from "react"
import { Link, graphql } from "gatsby"
import Img from 'gatsby-image';
import styled from 'styled-components';

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const Image = styled(Img)`
  height: 25vh;
  border-radius: 10px;
`;

class Projects extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const projects = data.allMdx.edges
    const groups = projects.filter(project => project.node.fields.slug.split("/").length === 3);

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="All projects"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        {groups.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div key={node.fields.slug}>
              <h3
                style={{
                  marginBottom: rhythm
                  (1 / 4),
                }}
              >
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                <Image 
                  key={node.frontmatter.title} 
                  fluid={node.frontmatter.image.childImageSharp.fluid} 
                />
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
              <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div>
          )
        })}
      </Layout>
    )
  }
}

export default Projects

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            image {
              childImageSharp {
                  fluid(maxWidth:600) {
                      ...GatsbyImageSharpFluid
                  }
              }
            } 
          }
        }
      }
    }
  }
`
