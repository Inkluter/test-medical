import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import makeResult from './utils/makeResult'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

const defaultValues = {
  d: 12,
  e: 3,
  f: 4.2,
}

const testM = {
  a: true,
  b: true,
  c: false,
  ...defaultValues,
}

const testP = {
  a: true,
  b: true,
  c: true,
  ...defaultValues,
}

const testT = {
  a: false,
  b: true,
  c: true,
  ...defaultValues,
}

const testCustom1P = {
  a: true,
  b: true,
  c: true,
  custom1: true,
  ...defaultValues,
}

const testCustom2T = {
  a: true,
  b: true,
  c: false,
  custom2: true,
  ...defaultValues,
}

const testCustom2M = {
  a: true,
  b: false,
  c: true,
  custom2: true,
  ...defaultValues,
}

it('m function is ok', () => {
  expect(makeResult(testM)).toEqual(15.6);
});

it('p function is ok', () => {
  expect(makeResult(testP)).toEqual(11.43);
});

it('t function is ok', () => {
  expect(makeResult(testT)).toEqual(10.32);
});

it('custom 1 p is ok', () => {
  expect(makeResult(testCustom1P)).toEqual(24.36);
});

it('custom 2 t is ok', () => {
  expect(makeResult(testCustom2T)).toEqual(10.32);
});

it('custom 2 m is ok', () => {
  expect(makeResult(testCustom2M)).toEqual(16.55);
});