import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

import Layout from "../components/layout"
import IconTitleCard from "../components/icon-title-card"
import SEO from "../components/seo"

import Mission from "../components/mission"
import ProjectDisplay from "../components/project-display"

import { Box, Grid, Heading, Text, Button } from "grommet"
import Contact from "../components/contact"

import { Deploy } from "grommet-icons"

const SiteLink = styled(Link)`
  font-family: "Rokkitt";
  text-decoration: none;
  color: gray;

  &:hover {
    font-size: 2rem;
  }
`

const MainHeading = styled(Heading)`
  font-family: "Ubuntu";
`

const IndexPage = () => {
  const image = useStaticQuery(graphql`
    query {
      lightbulb: file(relativePath: { eq: "lightbulb-white.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      choice: file(relativePath: { eq: "choice.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <Box
        margin="small"
        background="white"
        align="center"
        justify="center"
        gap="medium"
        animation="fadeIn"
      >
        <MainHeading margin="none">we make it simple.</MainHeading>
        <Box width="large">
          <Text textAlign="center" size="large">
            Stop struggling with making the best technology for your business,
            classroom, or even personal hobbies. Leverage our years of
            experience implementing technology solutions to amplify your ideas
            into reality.{" "}
          </Text>
        </Box>
      </Box>
      {/* <Box
        align="center"
        height="medium"
        width="100vw"
        justify="center"
        background="white"
        animation="fadeIn"
      >
        <Mission />
        <SiteLink to="/about">More about us</SiteLink>
      </Box> */}
      <Box
        direction="row-responsive"
        gap="medium"
        justify="center"
        margin="medium"
      >
        <Box
          pad="small"
          height="medium"
          align="center"
          width="large"
          gap="medium"
          animation="slideRight"
          border={{ color: "dark-1", size: "large", side: "top" }}
        >
          <Heading level={2}>we make content</Heading>
          <Box direction="row" align="center">
            <Box
              alignContent="center"
              width="medium"
              pad="small"
              border={{ color: "accent-1", size: "medium", side: "right" }}
            >
              <Text textAlign="end">
                We believe in leaving the world a better place than we found it.
                To us that means as we explore new technologies and ideas we
                want to share our experiences (and failures) for anyone
                interested.
              </Text>
            </Box>
            <Box height="small" width="small">
              <Img
                fluid={image.lightbulb.childImageSharp.fluid}
                imgStyle={{ objectFit: "contain" }}
              />
            </Box>
          </Box>
        </Box>
        <Box
          pad="small"
          height="medium"
          align="center"
          width="large"
          gap="medium"
          animation="slideLeft"
          border={{ color: "dark-1", size: "large", side: "top" }}
        >
          <Heading level={2}>we help others</Heading>
          <Box direction="row" align="center">
            <Box height="small" width="small">
              <Img
                fluid={image.choice.childImageSharp.fluid}
                imgStyle={{ objectFit: "contain" }}
              />
            </Box>
            <Box alignContent="center" width="medium" pad="small" border={{ color: "accent-1", size: "medium", side: "left" }}>
              <Text textAlign="start">
                When it comes to technology there are so many options it is
                often overwhelming to make a choice. We want to help by offering
                our experience over a broad range of industries to ensure you're
                making the right decisions.
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* <Box
        fill
        background="white"
        direction="row-responsive"
        wrap
        justify="center"
        pad="medium"
        gap="large"
      >
        <Box width="medium" justify="center" gap="small" pad="small">
          <Heading level={5} margin="none">
            {`Simply put.`}
          </Heading>
          <Heading
            level={3}
            margin="none"
          >{`Helping you design, establish, and achieve your goals`}</Heading>
          <Text>
            {`You have a goal. We have a unique blend of industry and technical experience that will help get you there.`}
          </Text>
          <Button color="brand" label="See Our Services" />
        </Box>
        <Grid
          gap="small"
          pad="large"
          alignContent="start"
          columns={{ count: 2, size: "auto" }}
        >
          <IconTitleCard
            title="Education Services"
            text={`Never stop learning. Let us help you incorporate modern technologies into whatever you're teaching to inspire learning at all ages.`}
            icon={<Deploy />}
          />
          {/* <IconTitleCard
            title="Business Services"
            text={`Don't be stale. Man`}
            icon={<Deploy />}
          /> 
          <IconTitleCard
            title="Web Development Services"
            text={`Increase your web presense. We offer a custom fit approach to help you achieve your web needs.`}
            icon={<Deploy />}
          />
          <IconTitleCard
            title="Idea Generation"
            text={`We love new things. Leverage our unique experiences both technically and in a broad range of business markets to amplify your thoughts and ideas.`}
            icon={<Deploy />}
          />
        </Grid>
      </Box> */}
      <Box background="white" fill pad="small">
        <Contact />
      </Box>
    </Layout>
  )
}

export default IndexPage
