import {
  theme, Flex, Box, Text, Heading,
} from '@hack4impact-uiuc/bridge';

const PaletteShade = ({ palette }) => (
  Object.entries(palette).map(([key, value]) => {
    let color = 'white';
    let bg = value;
    if (key === 'lighter' || key === 'text') {
      color = palette.text;
    }
    if (key === 'text') {
      bg = '#ECECEC';
    }

    return (
      <Box width="100%" height="40px" bg={bg}>
        <Text mt="8px" ml="16px" className="name" style={{ float: 'left' }} color={color} type="body" verticalAlign="middle">{key}</Text>
        <Text mt="8px" mr="16px" className="value" style={{ float: 'right' }} color={color} type="body" verticalAlign="middle">{value}</Text>
      </Box>
    );
  })
);

const ColorPalette = (props) => (
  <Box mt="30px">
    <Heading type="h4" as="h4">Base Colors</Heading>
    <Flex flexWrap="wrap">
      <Box flexGrow={1} width="30%" pr={['0', '30px']}>
        <PaletteShade palette={theme.colors.bluePalette} />
      </Box>
      <Box flexGrow={1} width="30%" pr={['0', '30px']}>
        <PaletteShade palette={theme.colors.indigoPalette} />
      </Box>
      <Box flexGrow={1} width="30%">
        <PaletteShade palette={theme.colors.greyPalette} />
      </Box>

    </Flex>
    <Heading type="h4" as="h4">Secondary Colors</Heading>
    <Flex mt="30px" flexWrap="wrap">
      <Box flexGrow={1} width="30%" pr={['0', '30px']}>
        <PaletteShade palette={theme.colors.redPalette} />
      </Box>
      <Box flexGrow={1} width="30%" pr={['0', '30px']}>
        <PaletteShade palette={theme.colors.greenPalette} />
      </Box>
      <Box flexGrow={1} width="30%">
        <PaletteShade palette={theme.colors.yellowPalette} />
      </Box>
    </Flex>
  </Box>
);

export default ColorPalette;
