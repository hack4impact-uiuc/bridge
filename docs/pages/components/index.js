import React from 'react';
import { Flex } from '@hack4impact-uiuc/bridge';
import Sidebar from '../../components/sidebar';

// Component Documention Page
// name is from route `/component/{name}`
const ComponentPage = () => (
  <Flex flexWrap="wrap" m="10px auto" maxWidth="1200px">
    <Sidebar type="components" />
    <p>Hello</p>
  </Flex>
);

export default ComponentPage;
