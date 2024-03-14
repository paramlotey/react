import React from "react";
import Practice from "./Components/Practice";
import Card from "./Components/Card";

const app = () => {

  let imgarray = [
    "https://images.unsplash.com/photo-1710237103624-77e1c5b612a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1710104434504-0261d06fa832?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8" ,
    "https://images.unsplash.com/photo-1709828593321-48973262f23e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1706883376540-b21e5559fc45?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8"
  ]

  return (
    <div className="d-flex ">
      {/* <Practice/> */}
      <Card title="Card Title 1" img ={imgarray[0]}></Card>
      {/* 1st card */}
      <Card  age={1} boolean={true} array={[1,2,"hello"]} obj={{name:"param"}} img ={imgarray[1]}></Card>
      {/* 2nd card */}
      <Card title="Title of card 3"img ={imgarray[2]} ></Card>
      {/* 3rd Card */}
      <Card img ={imgarray[3]}></Card>
      {/* 4th card */}
      <Card/>
    </div>
  );
};

export default app;
