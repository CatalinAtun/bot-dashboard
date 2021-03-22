import React from 'react';
import PropTypes from 'prop-types';
import goldMedal from '../../assets/firstPlace.svg';

const FirstPlace = ({ width }) => {
   return <img src={goldMedal} width={width} className="App-logo" alt="logo" />
}

FirstPlace.propTypes = {
    width: PropTypes.number
}

FirstPlace.defaultProps = {
    width: 20
}

export { FirstPlace };