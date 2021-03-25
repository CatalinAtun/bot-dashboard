import React from 'react';
import { Header } from '@cornershop/cornponents';
import userMock from './mocks/user.json';
import Dashboard from './pages/Dashboard'
import * as st from './styles';

function App() {
  return (
    <st.Container>
      <Header appName="Testing App" />
        <Dashboard user={userMock}/>
    </st.Container>
  );
}

export default App;
