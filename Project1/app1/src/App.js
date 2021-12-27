import React from "react"
import Card from "./Components/Card";
import Data from "../src/data.json"
function App(){
    console.log(Data)
    console.log("Sajal Debnath.")

    let items = [];
  //  for (let x=0; x<Data.length; x++)
  //  {
  //      items.push( <Card titleText={Data[x].title} descText={Data[x].desc}/>)
  // }

    items = Data.map( (item,index ) => <Card key={index} titleText={item.title} descText={item.desc}/>)

    return <div>
        <h1 className="headingStyle">Cart Names</h1>
    {/*  <Card titleText="Title one for cart" descText="Description1 Description1 Description1"/> 
        <Card titleText="Title two for cart" descText="Description2 Description2 Description2"/>
        <Card titleText="Title three" descText="This product can be used for different purpose. It is essential for a humans life."/>
        <Card titleText={Data[3].title} descText={Data[3].desc}/>
        */}  
        {items}

        </div>;

}

export default App;

