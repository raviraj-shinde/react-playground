/*
    <div id="feature">
        <h1>Hello From React</h1>
        <h1>Nested Js</h1>
     </div>
*/

//React Object(js) but its hasn't created the html ele
const feature = React.createElement(
  "div",
  { id: "feature" },
  [
    React.createElement("h1", {}, "Hello From React"),
    React.createElement("h1", {}, "Nested Js")
  ]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(feature);  //created the Html ele from heading React Obj
