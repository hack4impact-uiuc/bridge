import { theme, Box, Text } from '@hack4impact-uiuc/bridge';

const ColorPalette = (props) => (
  <Box>
    {
      Object.entries(theme.colors.bluePalette).map(([key, value]) => (
        <Box color="white" width="100%" height="30px" bg={value}>
          <Text type="body" verticalAlign="middle">{key}</Text>
        </Box>
      ))
    }
  </Box>
);

export default ColorPalette;
