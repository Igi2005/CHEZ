import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import axios from 'axios';
import SignUp from '../src/Pages/SingUpPage';
import { describe, test, expect, afterEach } from '@jest/globals';
import '@testing-library/jest-dom'


jest.mock('axios');

describe('SignUp', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should display error messages when fields are empty', () => {
    render(<SignUp />);

    fireEvent.submit(screen.getByRole('form'));

    expect(screen.getByText('Pole z imieniem nie może być puste!')).toBeInTheDocument();
    expect(screen.getByText('Pole z nazwiskiem nie może być puste!')).toBeInTheDocument();
    expect(screen.getByText('Pole z nickiem nie może być puste')).toBeInTheDocument();
    expect(screen.getByText('Podano zły adres email!')).toBeInTheDocument();
    expect(screen.getByText('Hasło nie może być puste!')).toBeInTheDocument();
  });
  
  test('should display error message when email already exists', async () => {
    const mockResponse = {
      data: {
        msg: 'Podany adres email istnieje w bazie danych!',
      },
    };
    axios.post.mockResolvedValueOnce(mockResponse);

    render(<SignUp />);

    fireEvent.change(screen.getByPlaceholderText('Imie'), { target: { value: 'John' } });
    fireEvent.change(screen.getByPlaceholderText('Nazwisko'), { target: { value: 'Doe' } });
    fireEvent.change(screen.getByPlaceholderText('wpisz nickname'), { target: { value: 'johndoe' } });
    fireEvent.change(screen.getByPlaceholderText('Adres email'), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByPlaceholderText('Podaj hasło'), { target: { value: 'password' } });

    fireEvent.submit(screen.getByRole('form'));

    await waitFor(() => {
      expect(screen.getByText('Podany adres email istnieje w bazie danych nie można stworzyć konta')).toBeInTheDocument();
    });
  });
  
  test('should redirect to home page when signup is successful', async () => {
    const mockResponse = {
      data: {
        msg: 'Pomyślnie dodano do bazy danych!',
      },
    };
    axios.post.mockResolvedValueOnce(mockResponse);

    render(<SignUp />);

    fireEvent.change(screen.getByPlaceholderText('Imie'), { target: { value: 'John' } });
    fireEvent.change(screen.getByPlaceholderText('Nazwisko'), { target: { value: 'Doe' } });
    fireEvent.change(screen.getByPlaceholderText('wpisz nickname'), { target: { value: 'johndoe' } });
    fireEvent.change(screen.getByPlaceholderText('Adres email'), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByPlaceholderText('Podaj hasło'), { target: { value: 'password' } });

    fireEvent.submit(screen.getByRole('form'));

    await waitFor(() => {
      expect(window.location.href).toBe('http://localhost/');
    });
  });
  
});
