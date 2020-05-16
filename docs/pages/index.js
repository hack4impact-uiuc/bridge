import React from 'react';
import Link from 'next/link';
import {
  Flex, Box, Heading, Text, Button,
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
    <Flex mb="30px" flexDirection="row">
      <Flex>
        <Box flex={1} mr="30px">
          <img src="/temp1.png" alt="description of design" width="100%" />
        </Box>
        <Box flex={1}>
          <Heading type="h3">Our Interface Guidelines</Heading>
          <Button as="a" href="/design">Design Principles</Button>

        </Box>
      </Flex>
    </Flex>
    <Flex mt="30px" flexDirection="row">
      <Box flex={1}>
        <Heading type="h3">Our React Component library</Heading>
        <Button as="a" href="/components">Components</Button>
      </Box>
      <Box flex={1} ml="30px">
        <img src="/temp2.png" alt="description of react component library" width="100%" />
      </Box>

    </Flex>
  </Box>
);

export default HomePage;
