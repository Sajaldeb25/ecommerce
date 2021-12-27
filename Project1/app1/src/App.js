import React from "react"
import Card from "./Components/Card";
function App(){
    console.log("Sajal Debnath.")
    return <div>
        <h1 className="headingStyle">Cart Names</h1>
        <Card titleText="Title one for cart" descText="Description1 Description1 Description1"/>
        <Card titleText="Title two for cart" descText="Description2 Description2 Description2"/>
        <Card titleText="Title three" descText="This product can be used for different purpose. It is essential for a humans life."/>


        </div>;

}

export default App;

