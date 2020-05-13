import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../theme';
import { get } from '../../utils/utils';
import { COMMON } from '../../utils/constants';

import CardImage from './CardImage';
import CardContent from './CardContent';
import CardOverline from './CardOverline';
import CardTitle from './CardTitle';
import CardSubtitle from './CardSubtitle';
import CardBody from './CardBody';
import CardFooter from './CardFooter';

const Card = styled.div`
  display: inline-block;
  vertical-align: top;

  width: 504px;

  background-color: ${get('colors.white')};
  border-radius: 8px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.24);

  &:hover {
    box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.24);
  }

  ${COMMON};
`;

Card.defaultProps = { theme };

Card.PropTypes = {
  theme: PropTypes.object,
  ...COMMON.propTypes,
};

Card.Image = CardImage;
Card.Content = CardContent;
Card.Overline = CardOverline;
Card.Title = CardTitle;
Card.Subtitle = CardSubtitle;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;
