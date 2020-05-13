import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../theme';

const CardImage = styled.img`
    width: 100%;
`;

CardImage.defaultProps = { theme };

CardImage.PropTypes = {
  theme: PropTypes.object,
};

export default CardImage;
