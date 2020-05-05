import { Box, Flex } from '@hack4impact-uiuc/design';

const Sidebar = ({ children, innerRef }) => (
  <Flex
    flexShrink="0"
    height="100%"
    flexDirection="column"
    ref={innerRef}
    width="280px"
    pb="md"
    pr="sm"
  >
    {children}
  </Flex>
);

export default Sidebar;
