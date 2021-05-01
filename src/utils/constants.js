import * as styledSystem from 'styled-system';
import systemPropTypes from '@styled-system/prop-types';
import PropTypes from 'prop-types';

const { compose, system } = styledSystem;

// Text Decoration Prop
export const textDecoration = system({
  prop: 'textDecoration',
  cssProperty: 'text-decoration',
});
textDecoration.propTypes = PropTypes.string;

// common style props to be passed into components
export const COMMON = compose(styledSystem.space, styledSystem.layout, styledSystem.color);
COMMON.propTypes = {
  ...systemPropTypes.space,
  ...systemPropTypes.layout,
  ...systemPropTypes.color,
};

// for easier access
export const TYPOGRAPHY = styledSystem.typography;
export const LAYOUT = styledSystem.layout;
export const POSITION = styledSystem.position;
export const FLEX = styledSystem.flexbox;
export const GRID = styledSystem.grid;
export const COLOR = styledSystem.color;
export const BORDER = styledSystem.border;

TYPOGRAPHY.propTypes = systemPropTypes.typography;
LAYOUT.propTypes = systemPropTypes.layout;
POSITION.propTypes = systemPropTypes.position;
FLEX.propTypes = systemPropTypes.flexbox;
GRID.propTypes = systemPropTypes.grid;
COLOR.propTypes = systemPropTypes.color;
BORDER.propTypes = systemPropTypes.border;
