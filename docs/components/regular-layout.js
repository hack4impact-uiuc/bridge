// layout for any other mdx page that doesn't need a sidebar
import { Box, Flex, Link } from '@hack4impact-uiuc/bridge';
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
    <footer className="footer">
      <Flex style={{ boxSizing: 'border-box' }} alignItem="center" bg="indigoPalette.dark" padding={['24px 0 20px 32px', '24px 0 20px 72px']} width="100%">
        <Box>
          <Link href="https://uiuc.hack4impact.org"><img src="/homepage/white_h4i_logo.png" width="150px" alt="hack4impact uiuc logo" /></Link>
        </Box>
      </Flex>
    </footer>
  </>
);

export default RegularLayout;
