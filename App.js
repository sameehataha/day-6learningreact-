import React from "react"; 
import "./styles.css"
import circlesData from "./Circles"
import Circle from "./Circle";
export default function App(props) {
  const [circles, setCircles] = React.useState(circlesData)

  function toggle(id){
      setCircles(prevCircles => {
            return prevCircles.map((circle) =>{
               return circle.id === id ? {...circle, on: !circle.on} : circle
            })
      })
  }
  const circlesElements = circles.map(circle => <Circle  key={circle.id}  on={circle.on} toggle= {() => toggle(circle.id)}/>
  )
  
  return (
    <main>
       {circlesElements}
    </main>
  );
}

