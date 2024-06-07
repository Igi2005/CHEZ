import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Navbar } from '../src/Components/Navbar';
import { describe, test, expect } from '@jest/globals';
import { BrowserRouter as Router } from 'react-router-dom';
import { UserProvider } from '../src/contexts/user';
import '@testing-library/jest-dom';


describe('Navbar Component', () => {
    test('renders Navbar component', () => {
    render(
    
        <UserProvider>
        <Router>
          <Navbar />
        </Router>
      </UserProvider>
);

    // Ensure Navbar renders without crashing
    const navbarElement = screen.getByTestId('navbarr');
    expect(navbarElement).toBeInTheDocument();
  });

  test('expands and collapses on click', () => {
    render(<UserProvider>
        <Router>
          <Navbar />
        </Router>
      </UserProvider>);

    // Ensure initial state is collapsed
    const collapsedContent = screen.queryByTestId('navbarr');
    console.log(collapsedContent);
    expect(collapsedContent).toHaveAttribute('aria-hidden', 'true');

    // Click on the navbar toggle
    const navbarToggle = screen.getByTestId('navbar_toggle');
    fireEvent.click(navbarToggle);

    // Ensure content is expanded after click
    const expandedContent = screen.queryByTestId('navbarr');
    expect(expandedContent).toHaveAttribute('aria-hidden', 'false');

    // Click again on the navbar toggle
    fireEvent.click(navbarToggle);

    // Ensure content is collapsed again
    expect(collapsedContent).toHaveAttribute('aria-hidden', 'true');

  });
});
