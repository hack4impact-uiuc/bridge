/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React from 'react';
import { Flex, Link } from '@hack4impact-uiuc/design';
import FeedbackContext from './feedback-context';
import Markdown from './markdown';
import Sidebar from './sidebar';
import ComponentDocsList from '../lib/data/components';
import DesignDocsList from '../lib/data/designs';

const getSidebarRoutes = (type) => {
  if (type === 'components') {
    return ComponentDocsList.map((elm) => (
      <li><Link href={elm.href}>{elm.title}</Link></li>
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
    <Flex flexWrap="wrap">
      <Sidebar>
        <ul>
          {getSidebarRoutes(meta.type)}
        </ul>
      </Sidebar>
      <Flex
        height="100%"
        paddingBottom="lg"
        flexDirection="column"
        width={{ sm: '100%', md: 'calc(100% - 280px)' }}
      >
        <Markdown>
          <h1>{meta.title}</h1>
          <main>{children}</main>
        </Markdown>
      </Flex>
    </Flex>

  </FeedbackContext.Provider>
);

export default WithDoc;
