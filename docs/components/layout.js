/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React from 'react';
import {
  Flex, Link, Heading, Text,
} from '@hack4impact-uiuc/bridge';
import FeedbackContext from './feedback-context';
import Markdown from './markdown';
import Sidebar from './sidebar';
import ComponentDocsList from '../lib/data/components';
import DesignDocsList from '../lib/data/designs';
import Header from './header';


const getSidebarRoutes = (type) => {
  if (type === 'components') {
    return ComponentDocsList.map((elm) => (
      <Text as="p"><Link href={elm.href}>{elm.title}</Link></Text>
    ));
  }
  if (type === 'designs') {
    return DesignDocsList.map((elm) => (
      <li><Link href={elm.href}>{elm.title}</Link></li>
    ));
  }
  return null;
};


// TODO: use theme spacing
const WithDoc = (meta) => ({ children }) => (
  <FeedbackContext.Provider value={{ label: `${meta.type}` }}>
    <Header
      title={meta.title}
    />
    <Flex flexWrap="wrap" m="10px auto" maxWidth="1200px">
      <Sidebar>
        <ul>
          {getSidebarRoutes(meta.type)}
        </ul>
      </Sidebar>
      <Flex
        height="100%"
        paddingBottom="lg"
        flexDirection="column"
        width={['100%', 'calc(100% - 300px)']}
        maxWidth="800px"
      >
        <Markdown>
          <Heading mb="0px" type="h2">{meta.title}</Heading>
          <main>{children}</main>
        </Markdown>
      </Flex>
    </Flex>

  </FeedbackContext.Provider>
);

export default WithDoc;
