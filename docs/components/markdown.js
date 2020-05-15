import { MDXProvider } from '@mdx-js/react';
import { Link } from '@hack4impact-uiuc/bridge';

export const H2 = ({ children }) => (
  <h2 style={{ color: '#155DA1' }}>
    {children}
    <style jsx>
      {`
      h2 {
        margin-top: 2rem;
        font-size: 1.25rem;
        color: #155DA1;
      }
    `}

    </style>
  </h2>
);

export const A = ({ children, ...props }) => (
  <Link {...props}>{`${children}`}</Link>
);

const Code = ({ children, syntax }) => (
  <pre className={syntax ? ` ${syntax}` : ''}>
    <code style={{ color: '#155DA1' }}>{children}</code>
    <style jsx>
      {`
          pre {
            border: 1px solid #eaeaea;
            color: #f8f8f2;
            white-space: pre;
            overflow: auto;
            padding: 1.5rem;
            margin: 40px 0;
            border-radius: 13px;
            -webkit-overflow-scrolling: touch;
          }
          code {
            font-size: 14px;
            line-height: 20px;
            color: #155DA1;
          }
        `}
    </style>
  </pre>
);

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

const components = {
  a: A,
  h2: H2,
  code: Code,
  inlineCode: InlineCode,
};

const Markdown = ({ children }) => (
  <MDXProvider components={components}>
    {children}
  </MDXProvider>
);

export default Markdown;
