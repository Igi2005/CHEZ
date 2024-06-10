import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { OpenBox } from '../src/Pages/OpenBox';
import axios from 'axios';
import { BrowserRouter as Router } from 'react-router-dom';
import { describe, test, expect, beforeEach, afterEach } from '@jest/globals';
import '@testing-library/jest-dom/';

jest.mock('axios');


jest.mock('../src/Components/Header', () => ({
    Header: () => <div data-testid="header">Header</div>,
  }));
  jest.mock('../src/Components/Footer', () => ({
    Footer: () => <div data-testid="footer">Footer</div>,
  }));

describe('OpenBox', () => {
  beforeEach(() => {
    axios.get.mockResolvedValue({
      data: {
        img: { nazwa: 'Test Box', cena: 100, img: 'test.jpg' },
        data: [
          { name: 'Item 1', img: 'item1.jpg' },
          { name: 'Item 2', img: 'item2.jpg' },
          { name: 'Item 3', img: 'item3.jpg' },
        ],
      },
    });
    axios.post.mockResolvedValue({ data: 'Success' });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders box details correctly', async () => {
    render(
      <Router>
        <OpenBox />
      </Router>
    );

    await waitFor(() => {
      expect(screen.getByRole('nazwa')).toBeInTheDocument();
      expect(screen.getByRole('cena')).toBeInTheDocument();
      expect(screen.getAllByRole('img')[0]).toBeInTheDocument();
    });
  });

  test('opens the box and displays items', async () => {
    render(
      <Router>
        <OpenBox />
      </Router>
    );

    await waitFor(() => {
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    userEvent.click(screen.getByRole('button'));

    await waitFor(() => {
      expect(screen.getAllByAltText('Zdjęcie 1')[0]).toBeInTheDocument();
      expect(screen.getAllByAltText('Zdjęcie 2')[0]).toBeInTheDocument();
      expect(screen.getAllByAltText('Zdjęcie 3')[0]).toBeInTheDocument();
    });
  });
  
  test('displays items correctly', async () => {
    render(
      <Router>
        <OpenBox />
      </Router>
    );

    await waitFor(() => {
      expect(screen.getAllByText('Item 1')[0]).toBeInTheDocument();
      expect(screen.getAllByText('Item 2')[0]).toBeInTheDocument();
      expect(screen.getAllByText('Item 3')[0]).toBeInTheDocument();
    });
  });

});
