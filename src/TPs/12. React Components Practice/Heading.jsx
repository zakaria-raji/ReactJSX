import React from "react"; 


function Heading(){
    
    const date = new Date();
    const hour = date.getHours(); 
    
    let message = "";
    //even if message_color is a constant we can still change the value of its properties as we wish.
    const message_color = {
    color : ""
    }
    
    var shoosed_message_index = 0;
    switch (hour) {
        case (hour >= 0 && hour < 12):
            message = "Good morning";
            message_color.color = "red";
            break;

        case (hour >= 12 && hour < 18): 
            message = "Good Afternoon";
            message_color.color = "green";
            break; 
        default: 
            message = "Good evening";
            message_color.color = "yellow";
            break;
    }




    return <h1 style={message_color}>
        {message}<br />  time is : {date.toTimeString()}</h1>
}

export default Heading;