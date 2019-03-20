import React, { useState } from 'react';
import { graphql, navigate } from 'gatsby';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';

import { Grommet, Anchor, Layer, Box, Button, Heading, ResponsiveContext } from 'grommet';
import { Menu, LinkPrevious, EmptyCircle } from 'grommet-icons';
import styled from 'styled-components';

const FixedButton = styled(Button)`
  position: fixed;
  bottom: 5vh;
  left: 20px;
  z-index: 100;
`;

const SiteHeading = styled(Button)`
  font-family: 'Rajdhani';
`;

const TitleHeading = styled(Heading)`
  font-family: 'Shadows Into Light';
`;

export default props => {
  const pageInfo = props.data.mdx;
  const subPages = props.data.allMdx.edges;
  const siteTitle = props.data.site.siteMetadata.title;

  const [menu, setMenu] = useState(false);

  return (
    <Grommet>
      <ResponsiveContext.Consumer>
        {size => (
          <Box>
            <Box direction="row" pad={size}>
              <Button basis="auto" plain label="back" icon={<LinkPrevious />} onClick={() => navigate('/projects')} />
              <Box align="end" jusify="end" margin="xsmall" fill>
                <SiteHeading plain label={siteTitle} onClick={() => navigate(`/`)} />
                <TitleHeading level="1" size="small" margin="small">
                  {pageInfo.frontmatter.title}
                </TitleHeading>
              </Box>
            </Box>
            <Box>
              <Box pad={size} alignSelf="center" animation="fadeIn">
                <MDXRenderer>{pageInfo.code.body}</MDXRenderer>
                {subPages.map(page => (
                  <Box id={page.node.id}>
                    <MDXRenderer>{page.node.code.body}</MDXRenderer>
                  </Box>
                ))}
              </Box>
            </Box>
            {menu ? (
              <Layer
                full="vertical"
                position="left"
                margin="10px"
                onClickOutside={() => setMenu(false)}
                onEsc={() => setMenu(false)}
              >
                <Box as="header" direction="row" elevation="medium" align="center" justify="center">
                  <Heading level={3} margin="small">
                    {pageInfo.frontmatter.title}
                  </Heading>
                </Box>
                <Box flex overflow="auto" pad="xsmall">
                  {subPages.map(page => (
                    <Anchor
                      href={`#${page.node.id}`}
                      label={
                        <Box direction="row" gap="medium" pad={{ vertical: 'medium', horizontal: 'xsmall' }}>
                          <EmptyCircle />
                          {page.node.frontmatter.title}
                        </Box>
                      }
                    />
                  ))}
                </Box>
                <Box as="footer" border={{ side: 'top' }} pad="small" align="center">
                  <FixedButton primary label="Close" onClick={() => setMenu(false)} />
                </Box>
              </Layer>
            ) : (
              <Box animation="fadeIn" alignSelf="center">
                <FixedButton
                  icon={<Menu style={{ verticalAlign: 'bottom' }} />}
                  primary
                  color="accent-4"
                  justify="stretch"
                  onClick={() => setMenu(true)}
                />
              </Box>
            )}
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
};

export const PostStackBySlugQuery = graphql`
  query PostsStackBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    allFile(filter: { relativePath: { regex: $slug }, extension: { eq: "json" } }) {
      totalCount
      edges {
        node {
          childJson {
            product
            details
            generalLink
            amazonShortLink
            amazonFullLink
            amazonImage
          }
        }
      }
    }
    allMdx(
      filter: { fileAbsolutePath: { regex: $slug }, fields: { slug: { ne: $slug } } }
      sort: { fields: frontmatter___order, order: ASC }
    ) {
      edges {
        node {
          id
          code {
            body
          }
          frontmatter {
            title
            description
            order
            image {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      frontmatter {
        title
        description
        purchase
        date(formatString: "MMMM DD, YYYY")
        image {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      code {
        body
      }
    }
  }
`;
