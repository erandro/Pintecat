import { render, screen } from '@testing-library/react';
import App from './App';

test("Header's buttons are rendering on screen", () => {
  render(<App />);
  
  const logoImage = screen.getByRole('button', {name: "logo-button"});
  expect(logoImage).toBeInTheDocument();
  const sortButton = screen.getByRole('button', {name: "sort-button"});
  expect(sortButton).toBeInTheDocument();
  const favocatsButton = screen.getByRole('button', {name: "favocats-button"});
  expect(favocatsButton).toBeInTheDocument();
  const SingleCardDisplayButton = screen.getByRole('button', {name: "single-display-button"});
  expect(SingleCardDisplayButton).toBeInTheDocument();
});
