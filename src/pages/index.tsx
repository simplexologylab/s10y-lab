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
  font-size: 3em;
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
      tools: file(relativePath: { eq: "tools.jpg" }) {
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
        background="white"
        height="small"
        align="center"
        justify="center"
        gap="medium"
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
      <Box direction="row-responsive" gap="medium" justify="center">
        <Box
          pad="medium"
          height="medium"
          direction="row"
          align="center"
          justify="end"
          width="large"
          gap="medium"
          animation="slideRight"
        >
          <Box alignContent="center" width="medium">
            <Heading level={3} alignSelf="end">
              Our Ideas
            </Heading>
            <Text textAlign="end">
              {`We believe in leaving the world a better place than we found it by sharing our experiences (and failures) as we explore new technologies and ideas.`}
            </Text>
            <Button alignSelf="end">Link</Button>
          </Box>
          <Box height="small" width="small">
            <Img
              fluid={image.lightbulb.childImageSharp.fluid}
              imgStyle={{ objectFit: "contain" }}
            />
          </Box>
        </Box>
        <Box
          pad="medium"
          height="medium"
          width="large"
          direction="row"
          align="center"
          gap="medium"
          animation="slideDown"
        >
          <Box height="small" width="medium">
            <Img
              fluid={image.tools.childImageSharp.fluid}
              imgStyle={{ objectFit: "contain" }}
            />
          </Box>
          <Box>
            <Heading level={3}>Our Services</Heading>
            <Text>
              {`No two situations are the same. Let us help you navigate the seemingly complex technology driven world to reach your goals.`}
            </Text>
            <Button>Link</Button>
          </Box>
        </Box>
      </Box>
      <Box fill>
        <ProjectDisplay />
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
