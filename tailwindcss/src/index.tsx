import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <div className="m-4 w-96 h-60 bg-white rounded-lg p-4 shadow hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer flex flex-col">
      <h1 className="text-xl font-bold mb-2">Card Header</h1>
      <p className="flex-grow">Lorem Ipsum</p>
      <button className="w-fit bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 hover:shadow">Button!</button>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
