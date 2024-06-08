import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import { Main } from '../src/Components/Main';
import { BrowserRouter as Router } from 'react-router-dom';
import { describe, test, expect, beforeEach } from '@jest/globals';
import '@testing-library/jest-dom/';

jest.mock('axios');

describe('Main', () => {
  beforeEach(() => {
    axios.get.mockResolvedValueOnce({
        data: {
          data: [
            { id_skrzynki: 1, img: 'image1.jpg', nazwa: 'Skin 1', cena: 10 },
            { id_skrzynki: 2, img: 'image2.jpg', nazwa: 'Skin 2', cena: 20 },
          ],
        },
      });
      axios.get.mockResolvedValueOnce({
        data: [
          { image: 'image1.jpg', name: 'Gun 1' },
          { image: 'image2.jpg', name: 'Gun 2' },
        ],
      });
  });

  test('renders loot boxes', async () => {
    render(
      <Router>
        <Main />
      </Router>
    );

    await waitFor(() => {
      expect(screen.getAllByRole('img')).toHaveLength(2);
      expect(screen.getByText('Skin 1 | 10')).toBeInTheDocument();
      expect(screen.getByText('Skin 2 | 20')).toBeInTheDocument();
    });
  });

  test('sorts loot boxes by price ascending', async () => {
    render(
      <Router>
        <Main />
      </Router>
    );

    await waitFor(() => {
      userEvent.click(screen.getByText('Od najtańszych'));
      const lootBoxes = screen.getAllByRole('listitem');
        expect(lootBoxes[0]).toHaveTextContent('Skin 1 | 10');
        expect(lootBoxes[1]).toHaveTextContent('Skin 2 | 20');
    });

    
  });

  test('sorts loot boxes by price descending', async () => {
    render(
      <Router>
        <Main />
      </Router>
    );

    await waitFor(() => {
      userEvent.click(screen.getByText('Od najdroższych'));
      const lootBoxes = screen.getAllByRole('listitem');
      expect(lootBoxes[0]).toHaveTextContent('Skin 2 | 20');
      expect(lootBoxes[1]).toHaveTextContent('Skin 1 | 10');
    });

    
  });
});