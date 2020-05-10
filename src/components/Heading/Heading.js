import React from 'react';
import styled from 'styled-components';
import { variant } from 'styled-system';
import PropTypes from 'prop-types';
import theme from '../../theme';
import { get } from '../../utils/utils';
import { TYPOGRAPHY, COMMON } from '../../utils/constants';

const HeadingBase = styled.h2`
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

const Heading = ({ type, ...props }) => {
  switch (type) {
    case 'h1':
      return <HeadingBase as="h1" type={type} {...props} />;
    case 'h2':
    default:
      return <HeadingBase type={type} {...props} />;
    case 'h3':
      return <HeadingBase as="h3" type={type} {...props} />;
    case 'h4':
      return <HeadingBase as="h4" type={type} {...props} />;
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
