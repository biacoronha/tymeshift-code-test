import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import HomePage from './HomePage';
import { act } from "react-dom/test-utils";
import { screen } from '@testing-library/react';
import SectionAbout from '../components/locationInfo/SectionAbout';
import SectionDescription from '../components/locationInfo/SectionDescription';

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
    render(<HomePage />, container);
});

test('renders page elements', () => {
    act(() => {
        render(<HomePage />, container);
    })
    const about = document.createElement("div");
    document.body.appendChild(about);
    render(<SectionAbout location={global.locationMock}/>, about)
    render(<SectionDescription location={global.locationMock}/>, about)

});
  
