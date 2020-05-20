/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React from 'react';
import {
  Flex, Link, Heading, Text,
} from '@hack4impact-uiuc/bridge';
import FeedbackContext from './feedback-context';
import Markdown from './markdown';
import Sidebar from './sidebar';
import Header from './header';


// TODO: use theme spacing
const WithDoc = (meta) => ({ children }) => (
  <FeedbackContext.Provider value={{ label: `${meta.type}` }}>
    <Header
      title={meta.title}
    />
    <Flex flexWrap="wrap" m="10px auto" maxWidth="1200px">
      <Sidebar type={meta.type} title={meta.title} />
      <Flex
        height="100%"
        paddingBottom="lg"
        flexDirection="column"
        width={['100%', 'calc(100% - 300px)']}
        maxWidth="800px"
        m="0 20px"
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
