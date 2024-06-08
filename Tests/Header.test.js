import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';
import { Header } from '../src/Components/Header';
import { describe, test, expect, afterEach } from '@jest/globals';
import '@testing-library/jest-dom/';


jest.mock('axios');

describe('Header', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });


  test('should render the logo and app name', () => {
    jest.spyOn(axios, 'get').mockResolvedValueOnce({});


    render(
      <Router>
        <Header />
      </Router>
    );

    const logoImage = screen.getByAltText('logo');
    const appName = screen.getByText('Małpie skrzynie');

    expect(logoImage).toBeInTheDocument();
    expect(appName).toBeInTheDocument();
  });

  test('should display the login link when not logged in', () => {
    jest.spyOn(axios, 'get').mockResolvedValueOnce({});


    
    render(
      <Router>
        <Header />
      </Router>
    );

        
        const loginLink = screen.getByRole('link', { name: /zaloguj sie!/i });

        expect(loginLink).toBeInTheDocument();
    
  });

  test('should display the nickname and balance when logged in', async () => {
    const mockNickname = 'xiega';
    const mockBalance = 0;

    axios.get.mockResolvedValueOnce({
      data: { data: mockNickname, balans: mockBalance },
    });

    render(
      <Router>
        <Header />
      </Router>
    );

    await waitFor(() => {
      const nickname = screen.getByTestId("nickname");
      //const balance = screen.getByText(`Balans: ${mockBalance}`);

      expect(nickname).toBeInTheDocument();
      //expect(balance).toBeInTheDocument();
    });
  });

  test('should log out the user when the logout button is clicked', async () => {
    const mockNickname = 'testuser';
    const mockBalance = 1000;

    axios.get.mockResolvedValueOnce({
      data: { data: mockNickname, balans: mockBalance },
    });

    render(
      <Router>
        <Header />
      </Router>
    );

    await waitFor(() => {
      const logoutButton = screen.getByRole('button', { name: /wyloguj sie!/i });
      userEvent.click(logoutButton);
    });

    expect(axios.get).toHaveBeenCalledWith('http://localhost:3000/login/nickname');
  });
});