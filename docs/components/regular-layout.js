// layout for any other mdx page that doesn't need a sidebar
import { Box } from '@hack4impact-uiuc/bridge';
import Markdown from './markdown';
import Header from './header';
import NavBar from './home/navbar';

const RegularLayout = (meta) => ({ children }) => (
  <>
    <Header
      title={meta.title}
    />
    <NavBar />
    <Box m="10px auto" maxWidth="820px">
      <Markdown>
        <main>{children}</main>
      </Markdown>
    </Box>
  </>
);

export default RegularLayout;
