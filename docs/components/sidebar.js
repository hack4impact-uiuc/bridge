import { Flex, Text, Link } from '@hack4impact-uiuc/bridge';
import ComponentDocsList from '../lib/data/components';
import DesignDocsList from '../lib/data/designs';

const getSidebarRoutes = (type) => {
  if (type === 'components') {
    return ComponentDocsList.map((elm) => (
      <Text as="p"><Link href={elm.href}>{elm.title}</Link></Text>
    ));
  }
  if (type === 'designs') {
    return DesignDocsList.map((elm) => (
      <Text as="p"><Link href={elm.href}>{elm.title}</Link></Text>
    ));
  }
  return null;
};

const Sidebar = ({ children, innerRef, type }) => (
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
    <ul>
      {getSidebarRoutes(type)}
    </ul>
  </Flex>
);

export default Sidebar;
