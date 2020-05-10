import React from 'react';
import styled from 'styled-components';
import { variant } from 'styled-system';
import PropTypes from 'prop-types';
import theme from '../../theme';
import { get } from '../../utils/utils';
import { TYPOGRAPHY, COMMON } from '../../utils/constants';

const style = `
color: ${get('colors.text.coolTone.main')};

// based on the prop 'type', we look at the
// theme.typography for the correct styling
${variant({
    prop: 'type',
    scale: 'typography',
  })}

${TYPOGRAPHY};
${COMMON};
`;

const HeadingBase1 = styled.h1`${style}`;
const HeadingBase2 = styled.h2`${style}`;
const HeadingBase3 = styled.h3`${style}`;
const HeadingBase4 = styled.h4`${style}`;

const Heading = ({
  type, ...props
}) => {
  switch (type) {
    case 'h1':
      return <HeadingBase1 type={type} {...props} />;
    case 'h2':
    default:
      return <HeadingBase2 type={type} {...props} />;
    case 'h3':
      return <HeadingBase3 type={type} {...props} />;
    case 'h4':
      return <HeadingBase4 type={type} {...props} />;
  }
};

Heading.defaultProps = {
  theme,
  type: 'h2',
};

Heading.propTypes = {
  ...TYPOGRAPHY.propTypes,
  ...COMMON.propTypes,
  theme: PropTypes.object,
  type: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4']),
};

export default Heading;
