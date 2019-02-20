import React, { Component } from "react";
import Helmet from "react-helmet";
import { Grommet, Box, Heading, Paragraph } from 'grommet';

import Menu from '../components/Menu';
import Sitemap from '../components/Sitemap';

import config from "../../static/site-config";

class PrivacyPage extends Component {
  render() {
    return (
      <Grommet>
        <Helmet title={`Privacy Policy | ${config.siteTitle}`} />
        <Box elevation="small" fill>
          <Menu />
          <Heading>Privacy Policy</Heading>
          <Paragraph>This would be the policy</Paragraph>
          <Paragraph>Testing from Develope</Paragraph>
        </Box>
        <Sitemap />
      </Grommet>
    );
  }
}

export default PrivacyPage;
