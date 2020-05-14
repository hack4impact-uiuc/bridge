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
  viewBox, type, ...props
}) => (
  <IconBase
    viewBox={icons[type] ? icons[type].viewBox : '0 0 30 30'}
    {...props}
  >
    {icons[type] && icons[type].path}
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
  ...COMMON.propTypes,
};

Icon.defaultProps = {
  type: 'infoAlert',
  fill: 'none',
  width: '20px',
};

export default Icon;
