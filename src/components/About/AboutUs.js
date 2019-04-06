import React from 'react';
import Img from 'gatsby-image';

import { Box, Stack, Heading, Paragraph, Tabs, Tab, ResponsiveContext } from 'grommet';
import styled from 'styled-components';

import Typer from '../Typer';
import Split from '../Text/Split';

const TypeHeading = styled(Heading)`
  font-family: 'VT323';
  color: #3ee905;
`;

const TabInfo = [
  {
    tab: 'for parents',
    text: `We are here to support parents who have an active role in their child's education and who understand
    that learning shouldn't end in the classroom. Each of our projects are designed to showcase specific
    interest areas so that you as a parent know what possible education paths are for your child to know
    where to dig deeper and spark an interest. You can learn from our mistakes and we're always here to help
    answer questions, so that you don't have to worry. Who knows, maybe your kids will think you're some
    kind of super hero.`,
  },
  {
    tab: 'for teachers',
    text: `We are here to support teachers looking for interesting ways to inspire their students. It is hard
    enough to keep up with kids today and when compounded with the rate at which technology changes, it is
    almost impossible. Our projects are designed to be simple enough any teach can pick them up to create
    opporunties for learning in their classroom, we'll work out the bugs and provide support to ensure you
    look like a rock star.`,
  },
  {
    tab: 'for individuals',
    text: `We are here to support any individual who is looking to find a new hobby, change a career, or who just
    wants to learn something new. All of our projects are designed so that you can dive right in knowing
    that we've already worked out the bugs and wil be there to support you when you have quetions.`,
  },
];

export default ({ stackImage, splitImage }) => (
  <ResponsiveContext.Consumer>
    {size => (
      <Box fill>
        <Heading margin="small">About Us</Heading>
        <Stack anchor="right">
          {size !== 'small' && <Img fluid={stackImage} />}
          <Tabs>
            {TabInfo.map(tab => (
              <Tab title={tab.tab}>
                <Box
                  background="accent-1"
                  margin="small"
                  pad="medium"
                  align="center"
                  animation="fadeIn"
                  round="small"
                  elevation="medium"
                  width={size !== 'small' && '45vw'}
                  justify="center"
                >
                  {tab.text}
                </Box>
              </Tab>
            ))}
          </Tabs>
        </Stack>
        <Box
          background="dark-1"
          pad="medium"
          margin="large"
          elevation="medium"
          round
          align="center"
          alignSelf="center"
          justify="center"
          width={size !== 'small' && '60vw'}
        >
          <TypeHeading level="2" size="xlarge" margin={{ vertical: 'small' }}>
            <Typer text="hello, world!" duration="300" delay="3000" />
          </TypeHeading>
          <Paragraph size="large" alignSelf="center">
            We all remember the moment in the time that inspired us to pursue a hobby, passion, and/or career. One of
            the most common for us was seeing "hello, world!" display on a computer screen.
          </Paragraph>
        </Box>
        <Split
          text="Here in the lab we refer to those moments as sparks
              and our inspiration lives in generating as many sparks 
              as possible."
          textSize="medium"
          image={splitImage}
        />
      </Box>
    )}
  </ResponsiveContext.Consumer>
);
