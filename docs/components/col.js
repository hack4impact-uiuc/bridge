import { Flex } from '@hack4impact-uiuc/bridge';

const Col = ({ children, ...props }) => (
  <Flex flex={['0 0 100%', 1]} {...props}>{children}</Flex>
);

export default Col;
