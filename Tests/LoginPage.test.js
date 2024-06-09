import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';
import LoginPage from '../src/Pages/LoginPage';
import { describe, test, expect, beforeEach } from '@jest/globals';
import '@testing-library/jest-dom'


jest.mock('axios');

describe('LoginPage', () => {
  beforeEach(() => {
    axios.post.mockClear();
  });

  test('renders the login form', () => {
    render(
      <Router>
        <LoginPage />
      </Router>
    );

    expect(screen.getByTestId('zaloguj')).toBeInTheDocument();
    expect(screen.getByTestId('email')).toBeInTheDocument();
    expect(screen.getByTestId('passs')).toBeInTheDocument();
    expect(screen.getByTestId('reg')).toBeInTheDocument();
  });

  test('shows error messages for invalid inputs', async () => {
    render(
      <Router>
        <LoginPage />
      </Router>
    );


    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Podaj hasło');

    fireEvent.change(emailInput, { target: { value: 'xiegawp.pl' } });
    //fireEvent.change(passwordInput, { target: { value: 'qwerty' } });

    console.log(screen)

    fireEvent.submit(screen.getByTestId('zaloguj'));

    await waitFor(() => {
      expect(screen.getAllByRole('error')[0]).toBeInTheDocument();
      expect(screen.getByText('Podano złe haslo!')).toBeInTheDocument();
    });
  });

  test('sends a POST request with correct data', async () => {
    const mockResponse = {
      data: {
        msg: 'Pomyslnie zalogowano się!',
        user: {
          nick: 'testUser',
        },
      },
    };
    axios.post.mockResolvedValueOnce(mockResponse);

    render(
      <Router>
        <LoginPage />
      </Router>
    );

    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Podaj hasło');

    fireEvent.change(emailInput, { target: { value: 'xiega@wp.pl' } });
    fireEvent.change(passwordInput, { target: { value: 'qwerty' } });

    fireEvent.submit(screen.getByTestId('zaloguj'));

    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith('http://localhost:3000/login', {
        UserEmail: 'xiega@wp.pl',
        UserPass: 'qwerty',

      });
    });
  });
  
  test('shows error message for incorrect credentials', async () => {
    const mockResponse = {
      data: {
        msg: 'Niestety podane dane nie zgadzają się!',
      },
    };
    axios.post.mockResolvedValueOnce(mockResponse);

    render(
      <Router>
        <LoginPage />
      </Router>
    );

    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Podaj hasło');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });

    fireEvent.submit(screen.getByText('Zaloguj sie'));

    await waitFor(() => {
      expect(screen.getByTestId('error')).toBeInTheDocument();

    });
  });
  
});