import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { variant as styledVariant } from 'styled-system';
import theme from '../../theme';
import { get } from '../../utils/utils';
import { COMMON, COLOR } from '../../utils/constants';

const HelperText = styled.div`
  ${get('typography.body')};
  color: ${get('colors.bluePalette.primary')};
  font-style: italic;

  margin-top: 8px;
`;

const TextFieldBase = styled.input`
  ${get('typography.forms')}
  color: ${get('colors.text.coolTone.main')};

  display: block;
  height: 44px;
  width: 100%;
  
  border: 1px solid ${get('colors.greyPalette.lighter')};
  border-radius: 4px;

  padding: 0px 9px;

  &:focus {
    outline: none;
    border: 2px solid ${get('colors.bluePalette.primary')};
  }

  &:disabled {
    background-color: ${get('colors.greyPalette.lighter')};
    border: 1px solid ${get('colors.greyPalette.light')};
    color: ${get('colors.greyPalette.light')};
  }
`;

const TextField = ({
  id, required, label, helperText, ...props
}) => (
  <>
    <TextFieldBase {...props} />
  </>
);

TextField.propTypes = {
  disabled: PropTypes.bool, // good
  error: PropTypes.string,
  placeholder: PropTypes.string, // good
  className: PropTypes.string, // good
  theme: PropTypes.object, // good
  type: PropTypes.oneOf(['text', 'time', 'url', 'password', 'number', 'email']),
  autoComplete: PropTypes.string, // sure
  onChange: PropTypes.func, // sure
  value: PropTypes.any, // sure
  id: PropTypes.string, // sure
  name: PropTypes.string, // sure
  maxLength: PropTypes.string, // good
  // color
  // icon
  ...COMMON.propTypes,
  ...COLOR.propTypes,
};

TextField.defaultProps = {
  type: 'medium',
  theme,
};

export default TextField;
