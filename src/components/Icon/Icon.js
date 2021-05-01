import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { COMMON } from '../../utils/constants';
import * as icons from './IconPaths';


const IconBase = styled.svg`
  display: inline-block;
  vertical-align: center;

  fill: ${(props) => props.fill};
  ${COMMON};
`;

const Icon = ({
  viewBox, type, path, ...props
}) => (
  <IconBase
    viewBox={viewBox ?? (icons[type]?.viewBox ?? '0 0 30 30')}
    {...props}
  >
    {path ?? icons[type]?.path}
  </IconBase>
);


Icon.propTypes = {
  type: PropTypes.oneOf([
    'errorAlert',
    'infoAlert',
    'successAlert',
    'warningAlert',
    'fileDragDrop',
    'formErrorAlert',
    'opacityUploadFile',
    'uploadFile',
  ]),
  viewBox: PropTypes.string,
  fill: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  viewBox: PropTypes.string,
  fill: PropTypes.string,
  path: PropTypes.element,
  stroke: PropTypes.stroke,
  ...COMMON.propTypes,
};

Icon.defaultProps = {
  type: 'infoAlert',
  fill: 'none',
  // COMMON includes width proptypes
  // eslint-disable-next-line react/default-props-match-prop-types
  width: '20px',
};

export default Icon;
