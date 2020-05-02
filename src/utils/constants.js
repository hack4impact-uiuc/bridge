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

// for easier access
export const TYPOGRAPHY = styledSystem.typography;
export const LAYOUT = styledSystem.layout;
export const POSITION = styledSystem.position;
export const FLEX = styledSystem.flexbox;
export const GRID = styledSystem.grid;

TYPOGRAPHY.propTypes = systemPropTypes.typography;
LAYOUT.propTypes = systemPropTypes.layout;
POSITION.propTypes = systemPropTypes.position;
FLEX.propTypes = systemPropTypes.flexbox;
GRID.propTypes = systemPropTypes.grid;
