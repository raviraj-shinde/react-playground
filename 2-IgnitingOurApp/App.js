import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = (<h1>Hi from JSX to ReactEle to HTMLEle</h1>,
    <h1>This is JSX Multi line tags</h1>
); //() - for multi Line

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);   