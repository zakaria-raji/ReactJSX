//JSX tutoriel
/* 
What is JSX in React?
JSX stands for JavaScript XML. It is simply a syntax extension of JavaScript. 
It allows us to directly write HTML in React (within JavaScript code). ... 
Instead of separating the markup and logic in separated files, React uses components for this purpose.
*/

//requiring dependencies after installation

//var React = require("react");
//var ReactDOM = require("react-dom");
//best method is to use import instead of require
//why ? because with imports, we can selectively load only the pieces we need.
//That can save memory.
import React from "react";
import ReactDOM from "react-dom";

//ReactDOM.render(What to show, Where to show it)
//render can take a single html element
//as a result we can't render (Ex : paragraph beside the headding1)
//EX : result error
//ReactDOM.render(<h1>hellooo</h1><p>helloo</p>, document.getElementById("root"));

//the solution is to create wrap the h1 and p inside a div
// ReactDOM.render(
//   <div>
//     <h1>hellooo</h1>
//     <p>lorem</p>
//   </div>,
//   document.getElementById("root")
// );

//declaring an unordered list of elements
const show_more = "more...";
var els = (
  <ul>
    <li>React Js</li>
    <li>Laravel Php</li>
    <li>Entity C#</li>
    <li>{show_more}</li>
  </ul>
);

ReactDOM.render(
  <div>
    <h1>My Favorites Frameworks:</h1>
    {els}
  </div>,
  document.getElementById("root")
);
//==========================================================
//==========================================================
// show results of operations
const fName = "Zakaria";
const lName = "Raji";

const currentDate = new Date();
const year = currentDate.getFullYear();

ReactDOM.render(
  <div>
    <h1>TP2 - operations</h1>
    <p>
      we can show any type of data stored inside a variable or constant in other
      elements using curly braces {"{value_of_variable}"}, more over we can get
      result of operations {"{2+2}"}=4 or use expressions such as Math random
      function {"Math.floor(Math.random() * 10)"} look bellow, but we can't
      write javascript statements EX : if(nana) then tata else coco then toto...
    </p>
    <p>
      random number {Math.floor(Math.random() * 10)} =====&gt; 2+2 = {2 + 2}
    </p>
    <h2>concat two strings : </h2>
    <p>
      {'{fName +" "+ lName}'} result ==&gt; {fName + " " + lName}
    </p>
    <p>
      {"{fName} {lName}"} result ==&gt; {fName + " " + lName}
    </p>
    <p>
      using backticks of Es6 template literals : {"{`${fName} ${lName}`}"}{" "}
      result ==&gt; {fName + " " + lName}
    </p>
    <pre>Man... React is soooo coool</pre>
    <big>little challenge copyright bar (name and current year)</big>
    <p>Created By {`${fName}, Copyright ${year}`}</p>
  </div>,
  document.getElementById("TP2")
);
