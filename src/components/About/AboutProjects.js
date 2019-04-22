import React from 'react';

import { Box, Heading, Paragraph, ResponsiveContext } from 'grommet';
import { Clear, Info, Currency, Bike, Test, Cycle, ChatOption } from 'grommet-icons';
import styled from 'styled-components';

import IconText from '../IconText';

const TextBlock = styled(Paragraph)`
  font-family: 'Fira Sans';
  font-size: 2rem;
  line-height: 1.2;
`;

// const SpecialText = styled(Text)`
//   color: #92e600;
//   font-size: 2.5rem;
// `;

export default () => (
  <ResponsiveContext.Consumer>
    {size => (
      <Box gap="small" align="center" fill>
        <Box align="center" fill>
          <TextBlock textAlign="center" size="large">
            Our projects show others that you don't have to have some big fancy degree in order to tackle learning
            something new, just an open mind and willingness to try new things.{' '}
          </TextBlock>
        </Box>
        <Box direction={size === 'small' ? 'column' : 'row-responsive'} gap="small" pad="small">
          <Box width={size !== 'small' ? '50vw' : '100vw'} align="center" justify="center">
            <Heading margin="small" textAlign="center">
              Our Projects ARE NOT
            </Heading>
            <Box gap="medium" margin="medium">
              <IconText icon={<Clear size="large" />} text="So complex you need a college degree to understand" />
              <IconText icon={<Clear size="large" />} text="A blast of information intended to drive web traffic" />
              <IconText icon={<Clear size="large" />} text="Packed with ads to the point you can't find the content" />
              <IconText icon={<Clear size="large" />} text="One hit wonders that are never given a second look" />
            </Box>
          </Box>
          <Box
            background="light-1"
            border={{ side: 'all', size: 'large', style: 'double', color: 'accent-1' }}
            round
            elevation="medium"
            width={size !== 'small' ? '50vw' : '100vw'}
            align="center"
            justify="center"
          >
            <Heading margin="small" textAlign="center">
              What They ARE
            </Heading>
            <Box gap="medium" margin="medium">
              <IconText icon={<Bike size="large" />} text="Simple enough anyone can do it" />
              <IconText icon={<Info size="large" />} text="Designed to identify learning interests" />
              <IconText
                icon={<Test size="large" />}
                text="Intentionally NOT perfect. We experiment, fail, refine ... it's a lab"
              />
              <IconText icon={<Cycle size="large" />} text="Living content that evolves as we learn" />
              <IconText
                icon={<ChatOption size="large" />}
                text="Open to community-based feedback so all can learn together"
              />
              <IconText
                icon={<Currency size="large" />}
                text="Free to use! (but we need your help to keep it that way)"
              />
            </Box>
          </Box>
        </Box>

        {/* <ResponsiveContext.Consumer>
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
                <Box direction="row" gap="medium"  align="center" justify="center">
                  <Dislike size="large" />
                  <Paragraph>{i.dontParagraph}</Paragraph>
                </Box>
              </Box>
              <Box background="accent-1" elevation="large" align="center" justify="center" pad="medium" margin="small">
                <Box direction="row" gap="medium" justify="center" align="center">
                  <Paragraph size="large" textAlign="end">{i.doParagraph}</Paragraph>
                  <Like size="large" />
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      )}
    </ResponsiveContext.Consumer> */}
      </Box>
    )}
  </ResponsiveContext.Consumer>
);
