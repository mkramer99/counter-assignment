// import necessary react testing library helpers here
// import the Counter component here
import {render, screen, fireEvent } from '@testing-library/react';
import { cleanup } from '@testing-library/react'
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component here
});



test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
    render(<Counter/>);
    const c = screen.getByText(/Counter/i);
    expect(c).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
    const { getByTestId } = render(<Counter/>);
    expect(getByTestId('count')).toHaveTextContent(0)
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
    const { getAllByRole } = render(<Counter/>);
    fireEvent.click(getAllByRole('button', { name: '+' })[0])
    const { getAllByTestId } = render(<Counter/>);
    expect(getAllByTestId('count')[0]).toHaveTextContent(1)
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
    const { getAllByRole } = render(<Counter/>);
    fireEvent.click(getAllByRole('button', { name: '-' })[0])
    const { getAllByTestId } = render(<Counter/>);
    expect(getAllByTestId('count')[1]).toHaveTextContent(0)
});


