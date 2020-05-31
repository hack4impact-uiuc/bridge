/* eslint-disable react/no-array-index-key */
/* eslint react/jsx-key: 0 */

import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwlLight';
import { mdx } from '@mdx-js/react';
import * as bridgeComp from '@hack4impact-uiuc/bridge';

import {
  LiveProvider, LiveEditor, LiveError, LivePreview,
} from 'react-live';
import CodeExampleBox from './CodeExampleBox';


const Pre = ({ children, ...props }) => (
  <pre {...props}>
    {children}
    <style jsx>
      {`
          pre {
            border: 1px solid #eaeaea;
            color: #f8f8f2;
            white-space: pre;
            overflow: auto;
            margin: 32px 0;
            border-radius: 8px;
            -webkit-overflow-scrolling: touch;
            font-size: 16px;
            letter-spacing: 0.5px;
            line-height: 20px;
            padding: 20px;
            
            font-family: 'Ubuntu Mono', monospace;
          }
        `}
    </style>
  </pre>
);

export default ({
  children, className, live,
}) => {
  const language = className ? className.replace(/language-/, '') : null;
  const { Box, Text } = bridgeComp;

  if (live) {
    return (
      <Box style={{ marginTop: '24px' }}>
        <CodeExampleBox>
          <LiveProvider
            code={children.trim()}
            transformCode={(code) => `/** @jsx mdx */\n <Box> ${code} </Box>`}
            scope={{ ...bridgeComp, mdx }}
            theme={theme}
          >
            <LivePreview
              style={{
                padding: '20px',
              }}
            />
            <LiveEditor
              padding="20px"
              style={{
                fontFamily: "'Ubuntu Mono', monospace",
                fontSize: '16px',
                letterSpacing: '0.5px',
                lineHeight: '20px',
                borderTop: '1px solid #eaeaea',
                borderBottomLeftRadius: '8px',
                borderBottomRightRadius: '8px',
              }}
            />
            <Text
              as={LiveError}
              m={0}
              p="20px"
              type="body"
              color="white"
              bg="red.2"
            />
          </LiveProvider>
        </CodeExampleBox>
      </Box>
    );
  }

  return (
    <Highlight {...defaultProps} theme={theme} code={children.trim()} language={language}>
      {({
        className, style, tokens, getLineProps, getTokenProps,
      }) => (
        <Pre className={className} style={{ ...style }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </Pre>
      )}
    </Highlight>
  );
};
