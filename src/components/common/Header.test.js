import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import Header from './Header';
import { act } from "react-dom/test-utils";
import { screen } from '@testing-library/react';

let container = null;

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it('renders without crashing', () => {
    render(<Header />, container);
});

test('renders header elements', () => {
    act(() => {
        render(<Header />, container);
    })
    const sectionTitle = screen.getByText(/All Locations/i);
    const headerName = screen.getByText(/Company locations/i);

    expect(sectionTitle).toBeInTheDocument();
    expect(headerName).toBeInTheDocument();
});
  
