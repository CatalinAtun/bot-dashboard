import React from 'react';
import PropTypes from 'prop-types';

import { Spacing, Text, Tiles } from '@cornershop/cornponents';

import ModuleCard from '../modules'

const Dashboard = ({ users }) => {
   return (
   <Spacing py="large" px="xxlarge">
        <Text size="2xl">Team 🤝</Text>
        <Tiles columns="5-col">
            {(users ?? []).map(user => <ModuleCard {...user} key={user.id}/>)}
        </Tiles>
    </Spacing>
    )
};

Dashboard.propTypes = {
    users: PropTypes.array
}
Dashboard.defaultProps = {
    users: []
}

export default Dashboard;