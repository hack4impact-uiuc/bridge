import {
  theme, Flex, Box, Text,
} from '@hack4impact-uiuc/bridge';

const WhiteBorderStyling = {
  borderRadius: '4px',
  border: 'solid 1px #979797',
};


const PaletteShade = ({ palette, name }) => (
  Object.entries(palette).map(([key, value]) => {
    let color = 'white';
    let bg = value;
    let label = key;
    let borderStyling = {};
    if (label === 'lighter' || label === 'text') {
      color = palette.text;
    }
    if (label === 'white') {
      color = theme.colors.text.grayScale.main;
      borderStyling = WhiteBorderStyling;
    }
    if (label === 'primary') {
      label = name;
    }

    if (key === 'text') {
      bg = '#ECECEC';
    }

    return (
      <Box {...borderStyling} width="100%" height={key === 'primary' ? '80px' : '40px'} bg={bg}>
        <Text
          mt={key === 'primary' ? '28px' : '8px'}
          ml="16px"
          className="name"
          style={{ float: 'left' }}
          color={color}
          type="body"
          verticalAlign="middle"
        >
          {label}
        </Text>
        <Text
          mt={key === 'primary' ? '28px' : '8px'}
          mr="16px"
          className="value"
          style={{ float: 'right' }}
          color={color}
          type="body"
          verticalAlign="middle"
        >
          {value}
        </Text>
      </Box>
    );
  })
);

const ColorPalette = ({ palettes }) => (
  <Box m="30px 0">
    <Flex flexWrap="wrap" flexDirection="row">
      {palettes.map((palette) => (
        <Box
          flexGrow={1}
          flexBasis="30%"
          p={['0', '0 12px']}
          minWidth="240px"
          m={['20px 0', '0']}
        >
          <PaletteShade name={palette.name} palette={palette.palette} />
        </Box>
      ))}
    </Flex>
  </Box>
);

export default ColorPalette;
