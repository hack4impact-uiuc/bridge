import { Flex } from '@hack4impact-uiuc/bridge';

const Row = ({ children, ...props }) => (
  <Flex flexWrap="wrap" {...props}>{children}</Flex>
);

export default Row;
