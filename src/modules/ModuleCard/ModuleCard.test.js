import { render, screen } from '@testing-library/react';
import { CornponentsTheme } from '@cornershop/cornponents';

import ModuleCard from './ModuleCard';

const defaultProps = [
    {
        id: 1,
        avatar: 'https://ca.slack-edge.com/T04DMF037-UJBDD2ZRV-e4961aa8b753-512',
        firstName: 'Rafael',
        secondName: 'Poveda',
        fullName: 'Rafael Poveda',
        score: 2,
        firstPlace: 0,
        secondPlace: 2
    }
];

const emptyProps = [];
const renderThemed = (props) => render(<CornponentsTheme><ModuleCard {...props}/></CornponentsTheme>)

test('exports the component', () => {
  expect(renderThemed()).toBeDefined();
});

test('render with default props', () => {
  expect(renderThemed(defaultProps)).toBeDefined();
});

test('render with empty props', () => {
  expect(renderThemed(emptyProps)).toBeDefined();
});

test('shows information', async () => {
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
