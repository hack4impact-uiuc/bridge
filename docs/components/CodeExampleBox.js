import { Box } from '@hack4impact-uiuc/bridge';

const CodeExampleBox = ({ children, ...props }) => (
  <>
    <Box className="code-box" mb="0" p="20px" style={{ borderRadius: 10, border: '1px solid #eaeaea' }} {...props}>
      {children}
    </Box>
  </>

);

export default CodeExampleBox;
