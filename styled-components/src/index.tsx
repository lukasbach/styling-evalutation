import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import styled from 'styled-components';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const Card = styled.div`
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

const Header = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
`

const Body = styled.p`
  flex-grow: 1;
`

const Button = styled.button`
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
    <Card>
      <Header>Card Header</Header>
      <Body>Lorem Ipsum</Body>
      <Button>Button!</Button>
    </Card>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
