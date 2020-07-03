import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COMMON, TYPOGRAPHY } from '../../utils/constants';
import { get } from '../../utils/utils';
import theme from '../../theme';


const DropdownMenu = styled.ul`
  background-clip: padding-box;
  background-color: ${get('colors.white')};
  border-radius: 2px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
  left: 0;
  list-style: none;
  margin-top: 0px;
  padding: 0 !important;
  position: absolute;
  top: 100%;
  width: 100%;
  z-index: 100;

  &::before {
    position: absolute;
    display: inline-block;
    content: '';
  }
  &::after {
    position: absolute;
    display: inline-block;
    content: '';
  }
  // stylelint-disable-next-line selector-max-type
  > ul {
    list-style: none;
  }

  &::before {
    top: -16px;
    left: 9px;
  }
  &::after {
    top: -14px;
    left: 10px;
  }

  ${COMMON};
  ${TYPOGRAPHY};
`;


DropdownMenu.propTypes = {
  theme: PropTypes.object,
  ...COMMON.propTypes,
  ...TYPOGRAPHY.propTypes,
};

DropdownMenu.defaultProps = {
  theme,
};
DropdownMenu.displayName = 'Dropdown.Menu';

export default DropdownMenu;
