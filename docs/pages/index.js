/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {
  Flex, Box, Heading, Text, Button, Link,
} from '@hack4impact-uiuc/bridge';
import { useRouter } from 'next/router';

import Row from '../components/row';
import Col from '../components/col';
import NavBar from '../components/home/navbar';
import ComponentImage from '../public/homepage/components.svg';

// Home Page linking to
// 1) component documentation
// 2) design system documentation
const HomePage = () => {
  const router = useRouter();
  return (
    <Flex minHeight="100vh" flexDirection="column">
      <NavBar maxWidth="1000px" />
      <Box style={{ boxSizing: 'border-box' }} flex={1} m={['0px', '32px auto']} p={['0 16px', '0']} width="100%" maxWidth="1000px">
        <Flex margin="40px auto" flexDirection="row" flexWrap="wrap">
          <Box m={['0 8px', '0 20px 0 0']} flex={['0 0 100%', 1]} width="100%" order={[2, 1]}>
            <Heading fontSize={[60, 84]} m={['12px 0 8px', '80px 0 20px']} type="h1">Bridge</Heading>
            <Text maxWidth={['380px', '422px']} type="subtitle" as="p">
              A design system built for Hack4Impact UIUC
              to help us build great products for all kinds
              of nonprofits.
            </Text>
            <Text type="body" as="p">
              <Link href="/about">About</Link>
              ・
              <Link href="https://github.com/hack4impact-uiuc/bridge">Github</Link>
              ・
              <Link href="https://uiuc.hack4impact.org">Hack4Impact UIUC</Link>
            </Text>
          </Box>
          <Box ml={[0, '40px']} flex={['0 0 100%', 1]} width="100%" order={[1, 2]}>
            <Box minWidth="100px" maxWidth="400px" m="0 auto">
              <img src="/homepage/bridge-web-landing.svg" alt="bridge hero" width="100%" />
            </Box>
          </Box>
        </Flex>
        <Box m={['56px auto 12px auto', '56px auto']} p={['24px 0', '44px 0 56px']} maxWidth="800px">
          <Heading textAlign="center" type="h3">Design Resources</Heading>
          <Row>
            <Col m={['24px 0', '0 48px']}>
              <Box width="100%">
                <img src="/homepage/design.svg" alt="description of react component library" width="100%" />

                <Box m={['0 8px']}>
                  <Text type="overline" as="p">Design</Text>
                  <Text type="body" as="p">
                    Design principles, UI Patterns, and usage guidelines
                    for creating products with Bridge.
                  </Text>
                  <Link as="button" onClick={() => router.push('/design')}>View Design Principles</Link>
                </Box>
              </Box>
            </Col>
            <Col m={['24px 0', '0 48px']}>
              <Box width="100%">

                <ComponentImage />
                <Box m={['0 8px']}>
                  <Text type="overline" as="p">React Components</Text>
                  <Text type="body" as="p">
                    Quality components with theme-based props that serve
                    as building blocks for building products.
                  </Text>
                  <Link as="button" onClick={() => router.push('/components')}>Browse Components Library</Link>
                </Box>
              </Box>
            </Col>
          </Row>
        </Box>
      </Box>
      <footer className="footer">
        <Flex style={{ boxSizing: 'border-box' }} alignItem="center" bg="indigoPalette.dark" padding={['24px 0 20px 32px', '24px 0 20px 72px']} width="100%">
          <Box>
            <Link href="https://uiuc.hack4impact.org"><img src="/homepage/white_h4i_logo.png" width="150px" alt="hack4impact uiuc logo" /></Link>
          </Box>
        </Flex>
      </footer>
      <style jsx>
        {`
          .footer {
            margin-top: 52px;
          }
        `}
      </style>
    </Flex>
  );
};

export default HomePage;
