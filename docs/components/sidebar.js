import { Flex, Text, Link } from '@hack4impact-uiuc/bridge';
import ComponentDocsList from '../lib/data/components';
import DesignDocsList from '../lib/data/design';

const sidebarSection = (section, title) => (
  <>
    <Text type="body" fontWeight="700" as="p" m="24px 0 8px 0">{section.name}</Text>
    {
        section.routes.map((elm) => (
          <Text key={elm.title} as="p" m="5px 0" fontWeight={title === elm.title ? '700' : '500'}><Link href={elm.href}>{elm.title}</Link></Text>
        ))
      }
  </>
);

const getSidebarRoutes = (type, title) => {
  if (type === 'components') {
    return ComponentDocsList.map((section) => (
      sidebarSection(section, title)
    ));
  }
  if (type === 'design') {
    return DesignDocsList.map((section) => (
      sidebarSection(section, title)
    ));
  }

  return null;
};

const Sidebar = ({
  children, innerRef, type, title,
}) => (
  <Flex
    flexShrink="0"
    height="100%"
    flexDirection="column"
    ref={innerRef}
    width="280px"
    pb="md"
    pr="sm"
    pl="sm"
  >
    {children}
    {getSidebarRoutes(type, title)}
  </Flex>
);

export default Sidebar;
