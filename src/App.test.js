import { render, screen } from '@testing-library/react';
import Home from './rotas/Home';

test('renders home search section', () => {
  render(<Home />);
  const headingElement = screen.getByText(/já sabe por onde começar\?/i);
  expect(headingElement).toBeInTheDocument();
});
