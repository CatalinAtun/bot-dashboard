/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
import { render, screen } from '@testing-library/react';
import { CornponentsTheme } from '@cornershop/cornponents';

import ModuleCard from './ModuleCard';

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
    },
];

const emptyProps = [];
const renderThemed = (props) => render(<CornponentsTheme><ModuleCard {...props}/></CornponentsTheme>)

describe('basic behaviour of module', () => {
  test('exports the component', () => {
    expect(renderThemed()).toBeDefined();
  });
  
  test('render with default props', () => {
    expect(renderThemed(...defaultProps)).toBeDefined();
  });
  
  test('render with empty props', () => {
    expect(renderThemed(...emptyProps)).toBeDefined();
  });
})

describe('should render card content', () => {
  test('shows card information', async () => {
    renderThemed(...defaultProps);
  
    expect(screen.getByAltText('profile-photo')).toBeInTheDocument()
    expect(screen.getByText('Rafael Poveda')).toBeInTheDocument();
    expect(screen.getByTestId('score')).toHaveTextContent('2');
    expect(screen.getByTestId('first-place')).toHaveTextContent('0');
    expect(screen.getByTestId('second-place')).toHaveTextContent('2');
  })
  
  test('score behaviour', () => {
      renderThemed(...defaultProps);
  
      expect(screen.getByTestId('positive-score')).toHaveStyle({color: 'green'})
  })
})

