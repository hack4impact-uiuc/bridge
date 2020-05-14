import React from 'react';
import Link from 'next/link';
import { Flex, Box } from '@hack4impact-uiuc/bridge';
import BridgeLogo from '../public/bridge_full_logo.svg';

// Home Page linking to
// 1) component documentation
// 2) design system documentation
const HomePage = () => (
  <Flex>
    <Flex margin="auto" maxWidth="1200px" flexDirection="row" flexWrap="wrap">
      <Box>
        <h1 className="h1">Hack4Impact Design system</h1>
      </Box>
      <BridgeLogo width="300px" />
    </Flex>
    <Link href="/components">Components</Link>
    <br />
    <Link href="/design">Design Principles</Link>
  </Flex>
);

export default HomePage;
