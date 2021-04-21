import React from 'react';
import { useQuery } from 'react-query';

import { getUsers as useUsers } from './services/user';
import { Header, Loading, Spacing } from '@cornershop/cornponents';
import Dashboard from './pages/Dashboard'

import * as st from './styles';

function App() {
  const { data, isLoading } = useQuery('users', useUsers);
  
  return (
    <st.Container>
      <Header appName="Testing App" />
      {isLoading ? <Spacing p="large"><Loading data-testid="loader" /></Spacing> : 
        <Dashboard users={data}/>}
    </st.Container>
  )
}

export default App;
