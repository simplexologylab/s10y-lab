import React, { useState } from 'react';
import { graphql, navigate } from 'gatsby';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';

import { Grommet, Box, Button, Heading, ResponsiveContext, DropButton } from 'grommet';
import { Navigate, LinkPrevious, Apps, CircleQuestion, Inspect, Cart, Close } from 'grommet-icons';
import styled from 'styled-components';

import NavList from '../components/PostMenu/NavList';
import Faqs from '../components/PostMenu/Faqs';
import Questions from '../components/PostMenu/Questions';
import Items from '../components/PostMenu/Items';

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

  const [menu, setMenu] = useState(<NavList pages={subPages} />);
  const [menuOpen, setMenuOpen] = useState(true);

  return (
    <Grommet>
      <ResponsiveContext.Consumer>
        {size => (
          <Box direction="row">
            {size !== 'small' && (
              <Box height="100vh" overflow="auto" flex="grow">
                <Box margin="xsmall" direction="row">
                  <Box alignSelf="center"><Button
                    basis="auto"
                    margin="small"
                    plain
                    label="all projects"
                    icon={<LinkPrevious />}
                    onClick={() => navigate('/projects')}
                    alignSelf="start"
                  /></Box>
                  <Box align="end" justify="end" flex="grow" margin="small">
                    <SiteHeading plain label={siteTitle} onClick={() => navigate(`/`)} />
                    <TitleHeading level="1" size="small" margin="small">
                      {pageInfo.frontmatter.title}
                    </TitleHeading>
                  </Box>
                </Box>
                <Box justify="center" direction="row" gap="medium" margin="small" width="medium">
                  <Button onClick={() => setMenu(<NavList pages={subPages} />)}>
                    <Box background="accent-1" pad="small" round elevation="medium">
                      <Navigate />
                    </Box>
                  </Button>
                  <Button onClick={() => setMenu(<Questions />)}>
                    <Box background="accent-1" pad="small" round elevation="medium">
                      <CircleQuestion />
                    </Box>
                  </Button>
                  <Button onClick={() => setMenu(<Faqs />)}>
                    <Box background="accent-1" pad="small" round elevation="medium">
                      <Inspect />
                    </Box>
                  </Button>
                  <Button onClick={() => setMenu(<Items />)}>
                    <Box background="accent-1" pad="small" round elevation="medium">
                      <Cart />
                    </Box>
                  </Button>
                </Box>
                <Box>{menu}</Box>
              </Box>
            )}
            <Box pad={size} alignSelf="center" animation="fadeIn" height="100vh" overflow="auto" elevation="large">
              {size === 'small' && (
                <Box direction="row" height="small">
                  <DropButton
                    icon={<Apps />}
                    dropContent={
                      <Box height="75vh" overflow="auto" flex="grow">
                        <Button
                          basis="auto"
                          margin="small"
                          plain
                          label="all projects"
                          icon={<LinkPrevious />}
                          onClick={() => navigate('/projects')}
                        />
                        <Box direction="row" gap="medium" margin="small" width="medium" justify="center">
                          <Button onClick={() => setMenu(<NavList pages={subPages} />)}>
                            <Box background="accent-1" pad="small" round elevation="medium">
                              <Navigate />
                            </Box>
                          </Button>
                          <Button onClick={() => setMenu(<Questions />)}>
                            <Box background="accent-1" pad="small" round elevation="medium">
                              <CircleQuestion />
                            </Box>
                          </Button>
                          <Button onClick={() => setMenu(<Faqs />)}>
                            <Box background="accent-1" pad="small" round elevation="medium">
                              <Inspect />
                            </Box>
                          </Button>
                          <Button onClick={() => setMenu(<Items />)}>
                            <Box background="accent-1" pad="small" round elevation="medium">
                              <Cart />
                            </Box>
                          </Button>
                        </Box>
                        <Box>{menu}</Box>
                      </Box>
                    }
                  />
                  <Box align="end" jusify="end" margin="xsmall" flex="grow">
                    <SiteHeading plain label={siteTitle} onClick={() => navigate(`/`)} />
                    <TitleHeading level="1" size="small" margin="small">
                      {pageInfo.frontmatter.title}
                    </TitleHeading>
                  </Box>
                </Box>
              )}
              <Box>
                <MDXRenderer>{pageInfo.code.body}</MDXRenderer>
                {subPages.map(page => (
                  <Box id={page.node.id} flex="grow">
                    <MDXRenderer>{page.node.code.body}</MDXRenderer>
                  </Box>
                ))}
              </Box>
            </Box>
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
