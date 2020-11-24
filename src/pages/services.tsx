import React from 'react'
import { useStaticQuery, Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

import SEO from '../components/seo'
import Layout from '../components/layout'
import ServiceCard from '../components/service-card'
import Contact from '../components/contact'
import IconText from '../components/icon-text'

import { Box, Button, Heading, Text, Tabs, Tab } from 'grommet'
import { CatalogOption, Cpu } from 'grommet-icons'

const ServicesPage = () => {
  const image = useStaticQuery(graphql`
    query {
      tools: file(relativePath: { eq: "tools-original.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      services: file(relativePath: { eq: "services.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <>
      <SEO title="Our Services" description="asdf" lang="us" meta="something" />

      <Layout>
        {/* <HeroStack
          image={image.services.childImageSharp.fluid}
          text={
            <Box align="center" gap="small" pad="small">
              <Heading level={1} margin="none" size="large">
                Our Services
              </Heading>
              <Text>Some more informaiton</Text>
              <Link to="/contact">
                <Button
                  primary
                  size="large"
                  label="Contact Us"
                  color="accent-1"
                ></Button>
              </Link>
            </Box>
          }
        /> */}
        <Box
          background="black"
          round="small"
          pad="medium"
          margin="medium"
          align="center"
          justify="center"
          direction="row"
          wrap
        >
          <Heading>we make it simple</Heading>
          <Box width="medium">
            <Img
              fluid={image.tools.childImageSharp.fluid}
              imgStyle={{ objectFit: 'contain' }}
            />
          </Box>
        </Box>
        <Box
          direction="row-responsive"
          wrap
          align="center"
          justify="center"
          pad={{ vertical: 'large' }}
          background="white"
          fill
        >
          <ServiceCard
            title="Educational Services"
            text={`Our passion is rooted deeply in educating others. 
            By combining our knowledge and experience with our "Simplexology" 
            approach we can help you and those you are educating.`}
            cards={
              <Box align="left" justify="center">
                <IconText icon={<Cpu />} text="STEM/STEAM Curriculm" />
                <IconText icon={<Cpu />} text="Teaching Code" />
                <IconText icon={<Cpu />} text="Program Development" />
                <IconText icon={<Cpu />} text="Teaching Resources" />
              </Box>
            }
          />
          <ServiceCard
            title="Business Services"
            text={`Our unique industry experience combined with our "Simplexology" approach allow us to provide
            valuable consulting services across a broad range to help your business succeed`}
            cards={
              <Box align="left" justify="center">
                <IconText icon={<Cpu />} text="Operational Efficiencies" />
                <IconText icon={<Cpu />} text="Product Development" />
                <IconText icon={<Cpu />} text="Project Management" />
                <IconText icon={<Cpu />} text="Team Culture" />
              </Box>
            }
          />
          <ServiceCard
            title="Web Development Services"
            text={`We love all things web! We are all over the latest trends in tech and want to help you expand
            your web presence by picking the right tool for the job.`}
            cards={
              <Box align="left" justify="center">
                <IconText icon={<Cpu />} text="Website/Application Development" />
                <IconText icon={<Cpu />} text="Deployment Management" />
                <IconText icon={<Cpu />} text="Domain Management" />
                <IconText icon={<Cpu />} text="Tech Stack Selection" />
              </Box>
            }
          />
          <ServiceCard
            title="Idea Services"
            text={`Need help exploring a new idea? We're always open to exploring ideas, even if they seem
            crazy 🤪. One of our favorite activities is watching something go from Idea > Reality.
            `}
            cards={
              <Box align="left" justify="center">
                <IconText icon={<Cpu />} text="Brainstorming" />
                <IconText icon={<Cpu />} text="Second Opinion (Or Third)" />
                <IconText icon={<Cpu />} text="Domain Management" />
                <IconText icon={<Cpu />} text="Technology Advisory Services" />
              </Box>
            }
          />
        </Box>
        <Box
          pad="medium"
          margin={{ vertical: 'large' }}
          align="center"
          width="large"
          gap="xsmall"
        >
          <Heading>It all starts here</Heading>
          <Text>
            {`If you think we can help or even if you're not sure, 
            by all means let us know and we'll be in touch. We offer free sessions
            to explore your needs to see if we're a match.`}
          </Text>
          <Link to="/contact">
            <Button primary hoverIndicator label="Contact Us" />
          </Link>
        </Box>
        {/* <Box fill background="white" pad="medium">
          <Tabs>
            <Tab title="Edu">
              <Box direction="row-responsive" justify="center">
                <Box width="medium" direction="row">
                  <CatalogOption />
                  <Text>sadasd asdasdfasdf</Text>
                </Box>
              </Box>
            </Tab>
            <Tab title="Pro"></Tab>
          </Tabs>
        </Box> */}
        <Box fill background="white">
          <Contact />
        </Box>
      </Layout>
    </>
  )
}

export default ServicesPage
