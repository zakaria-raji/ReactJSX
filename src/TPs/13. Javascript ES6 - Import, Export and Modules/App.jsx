import React from "react";
//first
//import pi, {doublePi, triplePi} from "./Math"
//second
import * as pi from "./Math"
//discourage to use import * because it is going to load everything (matter of time == performance)
console.log(pi);
//pi is a module 
function App(){
    return <ul>
    <li>{pi.default}</li>
    <li>{pi.triplePi()}</li>
    <li>{pi.doublePi()}</li>
    </ul>
}


export default App;