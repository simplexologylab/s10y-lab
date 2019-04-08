import React from 'react';
import Img from 'gatsby-image';

import { Box, Stack, Heading, Paragraph, Tabs, Tab, Text, ResponsiveContext } from 'grommet';
import { Dislike, Like } from 'grommet-icons';
import styled from 'styled-components';

const TextBlock = styled(Paragraph)`
  font-family: 'Fira Sans';
  font-size: 2rem;
`;

const SpecialText = styled(Text)`
  color: #92e600;
  font-size: 2.5rem;
`;

const Info = [
  {
    dontTitle: `OUR PROJECTS ARE NOT`,
    dontParagraph: `Packed with advertisements. There are too many sites out there trying to monetize every square inch their content by plastering themselves with every add they can find.`,
    doTitle: `INSTEAD`,
    doParagraph: `That's not us. The last thing we want is for an ad to take away from our content.`,
  },
  {
    dontTitle: `WE DON'T`,
    dontParagraph: `Pack our content with advertisements to the point you don't know what's safe to click on. or can't even find`,
    doTitle: `WE'D RATHER`,
    doParagraph: `The links you find in our site will often be to some of our affiliates who have agreed to return a small portion of the sale made on their site to us. They are all companies we buy and trust ourselves. We are not an e-commerce site and don't have intentions to be. So we'll leave that to the experts, but this is one of the ways that allows us to provide this content to you for free.`,
  },
  {
    dontTitle: `WE DON'T`,
    dontParagraph: `Pack our content with advertisements to the point you don't know what's safe to click on. or can't even find`,
    doTitle: `WE'D RATHER`,
    doParagraph: `The links you find in our site will often be to some of our affiliates who have agreed to return a small portion of the sale made on their site to us. They are all companies we buy and trust ourselves. We are not an e-commerce site and don't have intentions to be. So we'll leave that to the experts, but this is one of the ways that allows us to provide this content to you for free.`,
  },
];

export default () => (
  <Box gap="large" align="center">
    <Box pad="medium">
      <TextBlock>
        Our projects show others that you don't have to have some big fancy degree in order to tackle learning something
        new, just an open mind and willingness to try new things.{' '}
      </TextBlock>
    </Box>
    <ResponsiveContext.Consumer>
      {size => (
        <Box
          direction={size === 'small' ? 'column' : 'row-responsive'}
          justify="center"
          align="center"
          gap="medium"
          wrap="true"
        >
          {Info.map(i => (
            <Box>
              <Box align="center">
                <Heading margin="small">{i.dontTitle}</Heading>
                <Box direction="row" gap="medium" justify="center">
                  <Dislike size="large" />
                  <Paragraph>{i.dontParagraph}</Paragraph>
                </Box>
              </Box>
              <Box background="accent-1" elevation="large" align="center" justify="center" pad="medium" margin="small">
                {/* <Heading margin={size}>{i.doTitle}</Heading> */}
                <Box direction="row" gap="medium" justify="center">
                  <Paragraph size="large" textAlign="end">{i.doParagraph}</Paragraph>
                  <Like size="large" />
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      )}
    </ResponsiveContext.Consumer>
  </Box>
);
