import React from "react";
//the names add/substract.. must match the names of the export (functions names)
import {add, substract, multiply, divide} from "./Calculator";


function App(){
    return <div>
        <ul>
            <li>{add(1,2)}</li>
            <li>{substract(1,2)}</li>
            <li>{multiply(1,2)}</li>
            <li>{divide(1,2)}</li>
        </ul>
    </div>
}


export default App;