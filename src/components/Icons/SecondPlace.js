import React from 'react';
import PropTypes from 'prop-types';
import silverMedal from '../../assets/secondPlace.svg';

const SecondPlace = ({ width }) => {
   return <img src={silverMedal} width={width} alt="second-place-icon" />
}

SecondPlace.propTypes = {
    width: PropTypes.number
}

SecondPlace.defaultProps = {
    width: 20
}

export { SecondPlace };