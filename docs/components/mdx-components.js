import { Link, Heading } from '@hack4impact-uiuc/bridge';
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

const components = {
  h1: (props) => <Heading type="h1" {...props} />,
  h2: (props) => <Heading type="h2" {...props} />,
  a: (props) => <Link {...props} />,
  code: CodeBlock,
  inlineCode: InlineCode,
};

export default components;
