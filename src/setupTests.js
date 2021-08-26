// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

const locationMock = {
    id: "1",
    createdAt: "2021-03-05T09:10:35.462Z",
    name: "McGlynnview",
    userCount: "6221",
    description: "Investment Account"
}

global.locationMock = locationMock