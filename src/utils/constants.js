import * as styledSystem from 'styled-system';
import systemPropTypes from '@styled-system/prop-types';

const { compose } = styledSystem;

// common style props to be passed into components
export const COMMON = compose(styledSystem.space, styledSystem.color, styledSystem.layout);
COMMON.propTypes = {
  ...systemPropTypes.space,
  ...systemPropTypes.color,
  ...systemPropTypes.layout,
};
