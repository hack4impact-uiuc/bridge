import { Flex, Box } from '@hack4impact-uiuc/bridge';

const DoDont = ({ doPath, dontPath }) => (
  <Flex flexDirection="row">
    <Box flexGrow={1} flexBasis="40%" width="30%" m={['20px 10px', '0 10px']}>
      <img src={doPath} width="100%" />
    </Box>
    <Box flexGrow={1} flexBasis="40%" width="30%">
      <img src={dontPath} width="100%" />
    </Box>
  </Flex>
);

export default DoDont;
