import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import SectionAbout from './SectionAbout';
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
    render(<SectionAbout location={global.locationMock}/>, container);
});

it("renders location data", async () => {
    act(() => {
        render(<SectionAbout location={global.locationMock} />, container);
    })
    const views = screen.getByText(/Views/i);

    expect(container.querySelector(".users").textContent).toBe(global.locationMock.userCount + " Users");
  
    expect(views).toBeInTheDocument();
  });

test('renders icons', () => {
    act(() => {
        render(<SectionAbout location={global.locationMock}/>, container);
    })
    const iconUser = container.querySelector(".icon-users")
    const iconCreatedAt = container.querySelector(".icon-createdAt")
    const iconViews = container.querySelector(".icon-views")

    expect(iconUser).toBeInTheDocument();
    expect(iconCreatedAt).toBeInTheDocument();
    expect(iconViews).toBeInTheDocument();
});