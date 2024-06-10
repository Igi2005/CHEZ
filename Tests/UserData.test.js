import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import UserData from '../src/Pages/UserData';
import { BrowserRouter as Router } from 'react-router-dom';
import { describe, test, expect, afterEach, beforeEach } from '@jest/globals';
import '@testing-library/jest-dom'

jest.mock('axios');


jest.mock('../src/Components/Header', () => ({
    Header: () => <div data-testid="header">Header</div>,
  }));
  jest.mock('../src/Components/Footer', () => ({
    Footer: () => <div data-testid="footer">Footer</div>,
  }));

describe('UserData', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  beforeEach(() => {
    axios.get.mockResolvedValue({ data: [] }); // Mock the response from axios.get
  });


  test('renders page', () => {
    render(
      <Router>
        <UserData />
      </Router>
    );
  });
  
  test('fetches and displays user data', async () => {
    const mockUserData = [
      { id: 1, name: 'Item 1', cena: 10, img: 'item1.jpg' },
      { id: 2, name: 'Item 2', cena: 20, img: 'item2.jpg' },
    ];
    axios.get.mockResolvedValueOnce({ data: { data: mockUserData, id: 123 } });
  
    render(
      <Router>
        <UserData />
      </Router>
    );
  
    await waitFor(() => {
      expect(screen.getAllByRole('listitem')).toHaveLength(mockUserData.length);
      mockUserData.forEach((item) => {
        const itemContainer = screen.getByText(`Nazwa: ${item.name}, Cena: ${item.cena}`).closest('div');
        expect(itemContainer).toBeInTheDocument();
        expect(itemContainer.querySelector('img')).toHaveAttribute('src', item.img);
      });
    });
  });
  
  test('displays a message when there are no user items', async () => {
    axios.get.mockResolvedValueOnce({ data: { data: [], id: 123 } });

    render(
      <Router>
        <UserData />
      </Router>
    );

    await waitFor(() => {
      expect(screen.getByText(/Nie masz itemow stary\/stara musisz isc otwierac skrzynie/i)).toBeInTheDocument();
    });
  });
  
  test('displays a message when the user is not logged in', async () => {
    axios.get.mockResolvedValueOnce({ data: { data: [], id: null } });

    render(
      <Router>
        <UserData />
      </Router>
    );

    await waitFor(() => {
      expect(screen.getByText(/Zaloguj się!/i)).toBeInTheDocument();
    });
  });
  
  
  
});
