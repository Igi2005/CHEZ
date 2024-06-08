import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import axios from "axios";
import axiosMockAdapter from "axios-mock-adapter";
import { MemoryRouter } from "react-router-dom";
import { Main } from "../src/Components/Main";
import { describe, test, expect, beforeEach } from '@jest/globals';
import React from "react";


const axiosMock = new axiosMockAdapter(axios);

describe("Main Component", () => {
    beforeEach(() => {
        //axiosMock.reset();
        waitFor(() => {
            axios.post('/login', {
                firstName: 'xiega@wp.pl',
                lastName: 'qwerty'
              })
        });
    });

    test("renders loading state initially", () => {
        render(<Main />, { wrapper: MemoryRouter });
        expect(screen.getByText(/ładowanie/i)).toBeInTheDocument();
    });

    test("loads and displays data", async () => {
        const mockData = {
            data: [
                {
                    id_skrzynki: 1,
                    img: "https://example.com/image1.jpg",
                    nazwa: "Gun 1",
                    cena: 100
                },
                {
                    id_skrzynki: 2,
                    img: "https://example.com/image2.jpg",
                    nazwa: "Gun 2",
                    cena: 200
                }
            ]
        };

        axiosMock.onGet('http://localhost:3000/').reply(200, { data: mockData });
        axiosMock.onGet('https://bymykel.github.io/CSGO-API/api/en/skins_not_grouped.json').reply(200, []);

        render(<Main />, { wrapper: MemoryRouter });

        await waitFor(() => {
            expect(screen.getByText(/Gun 1/i)).toBeInTheDocument();
            expect(screen.getByText(/Gun 2/i)).toBeInTheDocument();
        });
    });

    test("sorts data ascending", async () => {
        const mockData = {
            data: [
                {
                    id_skrzynki: 1,
                    img: "https://example.com/image1.jpg",
                    nazwa: "Gun 1",
                    cena: 200
                },
                {
                    id_skrzynki: 2,
                    img: "https://example.com/image2.jpg",
                    nazwa: "Gun 2",
                    cena: 100
                }
            ]
        };

        axiosMock.onGet('http://localhost:3000/').reply(200, { data: mockData });
        axiosMock.onGet('https://bymykel.github.io/CSGO-API/api/en/skins_not_grouped.json').reply(200, []);

        render(<Main />, { wrapper: MemoryRouter });

        await waitFor(() => screen.getByText(/Gun 1/i));

        fireEvent.click(screen.getByText(/Od najdroższych/i));

        await waitFor(() => {
            const items = screen.getAllByRole('listitem');
            expect(items[0]).toHaveTextContent("Gun 1");
            expect(items[1]).toHaveTextContent("Gun 2");
        });
    });

    test("filters available items", async () => {
        const mockData = {
            data: [
                {
                    id_skrzynki: 1,
                    img: "https://example.com/image1.jpg",
                    nazwa: "Skrzynia Małpy",
                    cena: 100
                },
                {
                    id_skrzynki: 2,
                    img: "https://example.com/image2.jpg",
                    nazwa: "Skrzynia Bambi",
                    cena: 200
                }
            ]
        };

        axiosMock.onGet('http://localhost:3000/').reply(200, { data: mockData });
        axiosMock.onGet('https://bymykel.github.io/CSGO-API/api/en/skins_not_grouped.json').reply(200, []);
        axiosMock.onGet('http://localhost:3000/openbox').reply(200, { balans: 150 });

        render(<Main />, { wrapper: MemoryRouter });

        await waitFor(() => 
        screen.getByText(/Gun 1/i)
        );

        fireEvent.click(screen.getByText(/Dostępne do kupienia/i));

        await waitFor(() => {
            expect(screen.getByText(/Gun 1/i)).toBeInTheDocument();
            expect(screen.queryByText(/Gun 2/i)).not.toBeInTheDocument();
        });
    });
});
