// MainPage.test.js
import React from 'react';
import { render } from '@testing-library/react';
import { MainPage } from '../src/Pages/MainPage';
import { describe, test, expect } from '@jest/globals';
import '@testing-library/jest-dom/';


// Mock the imported components
jest.mock('../src/Components/Header', () => ({
  Header: () => <div data-testid="header">Header</div>,
}));
jest.mock('../src/Components/Footer', () => ({
  Footer: () => <div data-testid="footer">Footer</div>,
}));
jest.mock('../src/Components/Main', () => ({
  Main: () => <div data-testid="main">Main</div>,
}));

describe('MainPage', () => {
  test('renders the Header component', () => {
    const { getByTestId } = render(<MainPage />);
    expect(getByTestId('header')).toBeInTheDocument();
  });

  test('renders the Main component', () => {
    const { getByTestId } = render(<MainPage />);
    expect(getByTestId('main')).toBeInTheDocument();
  });

  test('renders the Footer component', () => {
    const { getByTestId } = render(<MainPage />);
    expect(getByTestId('footer')).toBeInTheDocument();
  });

  test('renders the main container div', () => {
    const { getByTestId } = render(<MainPage />);
    expect(getByTestId('main-container')).toBeInTheDocument();
  });
});
