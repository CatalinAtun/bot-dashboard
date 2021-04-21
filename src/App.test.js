/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
import { render, screen, waitFor } from '@testing-library/react';
import {
    QueryClient,
    QueryClientProvider,
  } from 'react-query'
import { CornponentsTheme } from '@cornershop/cornponents';

import App from './App';

const queryClient = new QueryClient()

const defaultProps = [
    {
        id: 1,
        avatar: 'https://ca.slack-edge.com/T04DMF037-UJBDD2ZRV-e4961aa8b753-512',
        first_name: 'Rafael',
        second_name: 'Poveda',
        full_name: 'Rafael Poveda',
        score: 2,
        first_place: 0,
        second_place: 2
    }
];

const renderThemed = (props) => render(<CornponentsTheme><QueryClientProvider client={queryClient}><App {...props}/></QueryClientProvider></CornponentsTheme>)

test('loader is removed from app', async () => {
    renderThemed(...defaultProps)
    
    await waitFor(() => expect(screen.queryByTestId('loader')).not.toBeInTheDocument());
})
