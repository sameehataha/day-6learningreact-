import React from "react";
export default function Circle(props){
    
    const styles = {
        backgroundColor: props.on ? " #0066cc" : "transparent",
      }
      
    return (
        <div style= {styles}  className="circle" onClick={props.toggle}></div>
    )
}