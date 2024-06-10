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

  test('toggles the menu icon on click', () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );
    const dropdownToggle = screen.getByRole('button');
    const menuIcon = screen.getByTestId('menu-icon');
    const closeIcon = screen.getByTestId('close-icon');

    // Initially, the menu icon should be visible
    expect(menuIcon).toBeVisible();
    expect(closeIcon).not.toBeVisible();

    // Click the dropdown toggle
    fireEvent.click(dropdownToggle);

    // The close icon should now be visible, and the menu icon should be hidden
    expect(menuIcon).not.toBeVisible();
    expect(closeIcon).toBeVisible();
  });
});
