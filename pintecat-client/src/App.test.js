import { render, screen } from '@testing-library/react';
import App from './App';

test('Header and buttons are rendering on screen', () => {
  render(<App />);
  
  const logoImage = screen.getByRole('button', {name: "logo-button"});
  expect(logoImage).toBeInTheDocument();
});
