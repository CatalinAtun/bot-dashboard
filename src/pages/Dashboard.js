import React from 'react';
import PropTypes from 'prop-types';
import { Spacing, Text, Tiles } from '@cornershop/cornponents';
import ModuleCard from '../modules'

const Dashboard = ({user}) => {
   return (
   <Spacing py="large" px="xxlarge">
        <Text size="2xl">Team 🤝</Text>
        <Tiles columns="5-col">
            {(user ?? []).map(el => <ModuleCard {...el} key={el.id}/>)}
        </Tiles>
    </Spacing>
    )
};

Dashboard.propTypes = {
    user: PropTypes.arrayOf()
}
Dashboard.defaultProps = {
    user: []
}

export default Dashboard;