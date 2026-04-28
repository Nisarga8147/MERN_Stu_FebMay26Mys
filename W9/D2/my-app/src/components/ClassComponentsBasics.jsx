import React,{Component} from "react";
export class ClassComponentsBasics extends Component{
    // 1.class extends React.Component
    // state, lifecycle methoda, props, setState()
    render(){
        // render():Returns JSX describing what to show
        //called whenever component needs to update
        return(
            <>
              <h2>Class Components</h2>
              <p>Class Components ue render() and support lifecycle methods.</p>
            </>
        )
    }
}