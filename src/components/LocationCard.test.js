import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import LocationCard from './LocationCard';
import { act } from "react-dom/test-utils";
import { screen } from '@testing-library/react';
import SectionAbout from './locationInfo/SectionAbout';

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
    render(<LocationCard location={global.locationMock}/>, container);
});

it("renders location name", async () => {
    act(() => {
        render(<LocationCard location={global.locationMock} />, container);
    })

    expect(container.querySelector(".name").textContent).toBe(global.locationMock.name);
  });

test('renders location info', () => {
    act(() => {
        render(<LocationCard location={global.locationMock}/>, container);
    })
    const about = document.createElement("div");
    document.body.appendChild(about);
    render(<SectionAbout location={location}/>, about)
});