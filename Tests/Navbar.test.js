import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar } from '../src/Components/Navbar';
import { describe, test, expect } from '@jest/globals';
import '@testing-library/jest-dom/';


describe('Navbar', () => {
  test('renders the navbar component', () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );
    const navbarElement = screen.getByTestId('navbarr');
    expect(navbarElement).toBeInTheDocument();
  });

  test('toggles the dropdown menu', () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );
  
    // Click the toggle button to open the menu
    const toggleButton = screen.getByTestId('close-icon');
    fireEvent.click(toggleButton);

    const menuIcon2 = screen.getByTestId('menu-icon-on');

    expect(menuIcon2).toBeInTheDocument(); // or expect(menuIcon).not.toBeNull();
  
    
  });

  test('renders navigation links', () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );
    const toggleButton = screen.getByTestId('close-icon');
    fireEvent.click(toggleButton); // Open the dropdown menu

    const navLinks = screen.getAllByRole('link');
    expect(navLinks.length).toBeGreaterThan(0); // Ensure there are navigation links

    // You can add more assertions to check the text or href of specific links
  });
});