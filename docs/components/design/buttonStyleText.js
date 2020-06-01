import { Text } from '@hack4impact-uiuc/bridge';

const ButtonStyleText = ({ children, order, ...props }) => (
  <Text type="tags" as="p" mt={order === 1 ? '24px' : '4px'} mb="4px" {...props}>
    {children}
  </Text>
);

export default ButtonStyleText;
