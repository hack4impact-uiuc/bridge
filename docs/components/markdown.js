import { MDXProvider } from '@mdx-js/react';
import components from './mdx-components';


const Markdown = ({ children }) => (
  <MDXProvider components={components}>
    {children}
  </MDXProvider>
);

export default Markdown;
