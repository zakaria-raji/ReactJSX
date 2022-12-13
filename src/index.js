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
// const show_more = "more...";
// var els = (
//   <ul>
//     <li>React Js</li>
//     <li>Laravel Php</li>
//     <li>Entity C#</li>
//     <li>{show_more}</li>
//   </ul>
// );

// ReactDOM.render(
//   <div>
//     <h1>My Favorites Frameworks:</h1>
//     {els}
//   </div>,
//   document.getElementById("root")
// );
// //==========================================================
// //==========================================================
// // show results of operations
// const fName = "Zakaria";
// const lName = "Raji";

// const currentDate = new Date();
// const year = currentDate.getFullYear();

// ReactDOM.render(
//   <div>
//     <h1>TP2 - operations</h1>
//     <p>
//       we can show any type of data stored inside a variable or constant in other
//       elements using curly braces {"{value_of_variable}"}, more over we can get
//       result of operations {"{2+2}"}=4 or use expressions such as Math random
//       function {"Math.floor(Math.random() * 10)"} look bellow, but we can't
//       write javascript statements EX : if(nana) then tata else coco then toto...
//     </p>
//     <p>
//       random number {Math.floor(Math.random() * 10)} =====&gt; 2+2 = {2 + 2}
//     </p>
//     <h2>concat two strings : </h2>
//     <p>
//       {'{fName +" "+ lName}'} result ==&gt; {fName + " " + lName}
//     </p>
//     <p>
//       {"{fName} {lName}"} result ==&gt; {fName + " " + lName}
//     </p>
//     <p className="red">
//       using backticks of Es6 template literals : {"{`${fName} ${lName}`}"}{" "}
//       result ==&gt; {fName + " " + lName}
//     </p>
//     <pre>Man... React is soooo coool</pre>
//     <big>little challenge copyright bar (name and current year)</big>
//     <p className="red">Created By {`${fName}, Copyright ${year}`}</p>
//   </div>,
//   document.getElementById("TP2")
// );


// 8. JSX Attributes & Styling React Elements

var ul = (
  <ul>
    <li>React Js</li>
    <li>Vue JS</li>
    <li>Angular JS</li>
  </ul>
);


//to add style to any element you should use js expression syntaxe instead of html naming properties
// for example ==> class="" not accepted instead you must use className=""
//this a javascript convention. JS uses CamelCase not like Html


var images = [
  "https://image.shutterstock.com/image-photo/delicious-breakfast-moroccan-style-served-600w-353791604.jpg", 
  "https://media.istockphoto.com/photos/traditional-moroccan-chicken-tagine-with-olives-and-salted-lemons-picture-id1143191816", 
  "https://www.saq.com/media/catalog/product/t/a/tajine-de-legumes-1_1602084929.jpg?quality=80&fit=bounds&height=&width="];
//you can use https://picsum.photos/ to get images 


ReactDOM.render( 
  <div>
    <h1 className="red" spellCheck="false">I am falling in love with :</h1>
    {ul}
    <div >
   {
      images.map(function(imgLink, index) {
        return <img className="img" key={index.toString()} src={imgLink} alt="testing"/>
      })
   }
    </div>
  </div>
  ,document.getElementById("TP2"));


  // 9. Inline Styling for React Elements

  //sometimes you may wish to  use inline style ==> style="color:red;"
  //in React it is not allowed to use html syntaxe  you have to use js object\
  // style={{color:"red", background-color:"green"}}
  //it is not recommended to over-use inline style unless if you are in the following case
  const h1_style = {
    color : "red",
    fontSize : "20px",
    border : "1px solid black"
  } 
  //updating element color h1
  h1_style.color="green";
  
  ReactDOM.render( 
    <div> 
      <h1 style={h1_style}>
        hello world
      </h1>
    </div>
    ,document.getElementById("TP2"));



    /// challenge
    //

const date = new Date();
const hour = date.getHours();
const messages = ["Good morning", "Good Afternoon", "Good evening"];
const messages_color = ["red", "green", "blue"];
 
var message_index = 0;
switch (hour) {
    case (hour >= 0 && hour < 12):
       message_index = 0;
        break;

    case (hour >= 12 && hour < 18):
        message_index = 1;
        break; 
    default:
        message_index = 2;
        break;
}

 
ReactDOM.render(
  <div>
    <h1 style={{color : messages_color[message_index]}}>{messages[message_index]}<br />  time is : {date.toTimeString()}</h1> 
  </div>,
  document.getElementById("challenge")
);
