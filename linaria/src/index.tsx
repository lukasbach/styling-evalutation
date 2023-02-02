import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { css } from '@linaria/core';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root')!
);

const card = css`
  margin: 1rem;
  width: 24rem;
  height: 14rem;
  background-color: white;
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  &:hover {
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
    transform: translateY(-0.25rem);
  }
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  display: flex;
  flex-direction: column;
`

const header = css`
  font-size: 1.5rem;
  font-weight: bold;
`

const body = css`
  flex-grow: 1;
`

const button = css`
  width: fit-content;
  background-color: #3182ce;
  color: white;
  padding: .5rem;
  border-radius: .4rem;
  border: none;
  &:hover {
    background-color: #2c5282;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  }
`

root.render(
  <React.StrictMode>
    <div className={card}>
      <h1 className={header}>Card Header</h1>
      <p className={body}>Lorem Ipsum</p>
      <button className={button}>Button!</button>
    </div>
  </React.StrictMode>
);

