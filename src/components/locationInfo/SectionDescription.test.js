import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import SectionDescription from './SectionDescription';
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
    render(<SectionDescription location={global.locationMock}/>, container);
});

it("renders description title", async () => {
    act(() => {
        render(<SectionDescription location={global.locationMock} />, container);
    })
    const description = screen.getByText(/Description/i);
  
    expect(description).toBeInTheDocument();
  });

test('renders location description', () => {
    act(() => {
        render(<SectionDescription location={global.locationMock}/>, container);
    })

    expect(container.querySelector(".description").textContent).toBe(global.locationMock.description);
});