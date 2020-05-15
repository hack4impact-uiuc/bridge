import React from 'react';
import Link from 'next/link';
import {
  Flex, Box, Heading, Text,
} from '@hack4impact-uiuc/bridge';
import BridgeLogo from '../public/bridge-logo.svg';

// Home Page linking to
// 1) component documentation
// 2) design system documentation
const HomePage = () => (
  <Box m="5px auto" maxWidth="1200px">
    <Flex margin="30px auto" flexDirection="row" flexWrap="wrap">
      <Box mr={[0, '20px']} flex={1}>
        <Heading fontSize={[60, 84]} type="h1">Bridge</Heading>
        <Text type="subtitle">A Hack4Impact UIUC Design System - simple and flexible</Text>
      </Box>
      <Box ml={[0, '40px']} flex={1}>
        <Box minWidth="100px" maxWidth="250px">
          <BridgeLogo />
        </Box>
      </Box>
    </Flex>
    <Flex>
      <Link href="/components">Components</Link>
      <hr />
      <Link href="/design">Design Principles</Link>
    </Flex>
  </Box>
);

export default HomePage;
