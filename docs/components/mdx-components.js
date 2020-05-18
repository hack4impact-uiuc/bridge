/* eslint-disable jsx-a11y/control-has-associated-label */
import {
  Link, Heading, Text,
} from '@hack4impact-uiuc/bridge';
import GithubSlugger from 'github-slugger';
import CodeBlock from './CodeBlock';


const PermalinkIcon = (props) => (
  <svg viewBox="0 0 16 16" width={12} height={12} aria-hidden="true" {...props}>
    <path fillRule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" />
    <style jsx>
      {`
        display: inline-block;
        text-align: text-bottom;
    `}
    </style>
  </svg>
);

const InlineCode = ({ children }) => (
  <code>
    {children}
    <style jsx>
      {`
      code {
        color: rgb(235, 139, 86);
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
const PermalinkHeading = ({ children, type, ...props }) => {
  const slugger = new GithubSlugger();

  let text = children || '';

  // If there are sub components, convert them to text
  if (Array.isArray(children)) {
    text = children
      .map((child) => (typeof child === 'object' ? child.props.children : child))
      .join('');
  }

  const id = slugger.slug(text);

  return (
    <Heading id={id} {...hSpacing} type={type} {...props}>
      <a href={`#${id}`}>
        {children}
      </a>
      <span className="permalink"><PermalinkIcon /></span>

      <style jsx>
        {`
          a {
            text-decoration: none;
            color: inherit;
            cursor: pointer;
          }
          .permalink {
            visibility: hidden;
            text-align: center;
            vertical-align: middle;

            float: left;
            padding-right: 4px;
            margin-left: -20px;
            line-height: 1;
          }
          a:hover + .permalink {
            visibility: visible;
          }
          a:hover {
            text-decoration: underline;
          }
      `}

      </style>
    </Heading>
  );
};

const components = {
  p: (props) => <Text as="p" type="body" {...props} />,
  h1: (props) => <PermalinkHeading type="h1" {...props} />,
  h2: (props) => <PermalinkHeading type="h2" {...props} />,
  h3: (props) => <PermalinkHeading type="h3" {...props} />,
  h4: (props) => <PermalinkHeading type="h4" {...props} />,
  // don't have styling for h5 or h6, use h4
  h5: (props) => <PermalinkHeading type="h4" {...props} />,
  h6: (props) => <PermalinkHeading type="h4" {...props} />,
  blockquote: Blockquote,
  ul: ({ children, ...props }) => <ul style={{ paddingInlineStart: '24px' }} {...props}>{children}</ul>,
  ol: ({ children, ...props }) => <ol style={{ paddingInlineStart: '24px' }} {...props}>{children}</ol>,
  a: (props) => <Link {...props} />,
  code: CodeBlock,
  inlineCode: InlineCode,
};

export default components;
