import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COMMON, TYPOGRAPHY } from '../../utils/constants';
import { get } from '../../utils/utils';
import theme from '../../theme';

const DropdownItem = styled.li`
  display: block;
  padding: 12px 10px 12px 14px;
  overflow: hidden;
  color: ${get('colors.text.greyScale.main')};
  text-overflow: ellipsis;
  white-space: nowrap;

  a {
    color: ${get('colors.text.greyScale.main')};
    text-decoration: none;
    display: block;
    padding: 12px 10px 12px 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &:focus,
  a:focus {
    text-decoration: none;
    background-color: rgba(21, 93, 161, 0.05);
  }
  &:hover,
  &:hover a {
    text-decoration: none;
    background-color: rgba(21, 93, 161, 0.05);
    outline: none;
  }

  ${COMMON};
  ${TYPOGRAPHY}
`;

DropdownItem.propTypes = {
  theme: PropTypes.object,
  ...COMMON.propTypes,
  ...TYPOGRAPHY.propTypes,
};

DropdownItem.defaultProps = {
  theme,
};
DropdownItem.displayName = 'Dropdown.Item';

export default DropdownItem;
