import { Link, Heading, Text } from '@hack4impact-uiuc/bridge';
import CodeBlock from './CodeBlock';


const InlineCode = ({ children }) => (
  <code>
    {children}
    <style jsx>
      {`
      code {
        color: rgb(212, 0, 255);
        font-size: 0.875em;
        white-space: pre-wrap;
      }
      code::before {
        content: '\`';
      }
      code::after {
        content: '\`';
      }
      :global(a) code {
        color: inherit;
      }
    `}

    </style>
  </code>
);

const Blockquote = ({ children, ...props }) => (
  <blockquote {...props}>
    {children}
    <style jsx>
      {`
        blockquote {
          color: #6a737d;
          border-left: .25em solid #dfe2e5;
          padding: 0 1em;
          margin: 0 0 12px 0;
        }
    
    `}

    </style>
  </blockquote>
);

const hSpacing = { mb: '24px', mt: '16px' };

const components = {
  p: (props) => <Text as="p" type="body" {...props} />,
  h1: (props) => <Heading {...hSpacing} type="h1" {...props} />,
  h2: (props) => <Heading {...hSpacing} type="h2" {...props} />,
  h3: (props) => <Heading {...hSpacing} type="h3" {...props} />,
  h4: (props) => <Heading {...hSpacing} type="h4" {...props} />,
  // don't have styling for h5 or h6, use h4
  h5: (props) => <Heading {...hSpacing} type="h4" {...props} />,
  h6: (props) => <Heading {...hSpacing} type="h4" {...props} />,
  blockquote: Blockquote,
  ul: ({ children, ...props }) => <ul style={{ paddingInlineStart: '24px' }} {...props}>{children}</ul>,
  ol: ({ children, ...props }) => <ol style={{ paddingInlineStart: '24px' }} {...props}>{children}</ol>,
  a: (props) => <Link {...props} />,
  code: CodeBlock,
  inlineCode: InlineCode,
};

export default components;
