import React from 'react';
import { Flex } from '@hack4impact-uiuc/bridge';
import Sidebar from '../../components/sidebar';

// Pages explaining design system
// name prop is from route `/design/{name}`
// examples of types of names: color, spacing, etc
const DesignPage = () => (
  <Flex flexWrap="wrap" m="10px auto" maxWidth="1200px">
    <Sidebar type="design" />
    <p>Hello</p>
  </Flex>
);

export default DesignPage;
