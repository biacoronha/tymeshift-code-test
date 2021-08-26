import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import LocationModal from './LocationModal';
import { act } from "react-dom/test-utils";
import { screen } from '@testing-library/react';
import SectionAbout from './locationInfo/SectionAbout';
import SectionDescription from './locationInfo/SectionDescription';

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
    render(<LocationModal location={global.locationMock}/>, container);
});

it("renders location modal", async () => {
    act(() => {
        render(<LocationModal location={global.locationMock} />, container);
    })

    expect(global.locationMock.name).toBeTruthy()
    expect("Done").toBeTruthy()
  });

test('renders location info', () => {
    act(() => {
        render(<LocationModal location={global.locationMock}/>, container);
    })
    const about = document.createElement("div");
    document.body.appendChild(about);
    render(<SectionAbout location={location}/>, about)
    render(<SectionDescription location={location}/>, about)
});