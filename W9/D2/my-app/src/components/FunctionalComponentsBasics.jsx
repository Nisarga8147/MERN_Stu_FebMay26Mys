import React from "react";
function Welcome(props){
    //chid component:reusable UI
    return(
        <p>Hello, {props.name}</p>
    );
}

export function FunctionalComponentsBasics(){
    return(
        <div>
            <h2>Functional Components Basics</h2>
            {/* We are passing 'Nisarga' as prop Welcome function receives is as {name:"Nisarga"} */}
            <Welcome name="Nisarga" />
            {/* We are passing 'Developer' as prop Welcome function receives is as {name:"Developer"} */}
            <Welcome name="Developer" />
        </div>
    )
}