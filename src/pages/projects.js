import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

class ProjectsPage extends React.Component {
    render() {
        const { data } = this.props;
        const projects = data.allMarkdownRemark.edges

        return (
            <Layout location={this.props.location} title="someTitle">
                <SEO title="All Projects" keywords={['project', 'simple', 'projects', 'technology']} />
                <Link to="/">Home</Link>
                <pre>{JSON.stringify(projects, 0, 2)}</pre>
            </Layout>
        )
    }
}
export default ProjectsPage

export const ProjectsQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
        allMarkdownRemark {
            edges {
                node {
                    excerpt
                    frontmatter {
                        title
                    }
                }
            }
        }
    }
`;