import "../styles/ExpMenu.css"
import { useState, useEffect } from 'react'
import Professional from "./Professional";

function formSubmit(e, props){
    e.preventDefault();
  
    let state = props.state
  
    let stateClone = JSON.parse(JSON.stringify(state));

    let newData = stateClone.data

    newData.addExp = state.data.addExp
  
    if(newData.firstName == null){
      stateClone.page = 0
    } else if(newData.school == null){
      stateClone.page = 1
    } else{
      stateClone.page = 3
    }
  
    props.stateChanger(stateClone)
  
}

function back(event, props){
  
    let state = props.state
  
    let stateClone = JSON.parse(JSON.stringify(state));

    let newData = stateClone.data

    newData.addExp = state.data.addExp
  
    stateClone.page = 1
  
    props.stateChanger(stateClone)
}

function deleteExp(index, props){
    let state = props.state
  
    let stateClone = JSON.parse(JSON.stringify(state));

    let newData = stateClone.data

    newData.addExp = state.data.addExp

    newData.experiences.splice(index, 1)
  
    props.stateChanger(stateClone)
}

function createEditExpCards(props, setExp){

    let experiences = props.state.data.experiences

    const expItems = experiences.map((exp, index) => 
            <div key={index} className="card">
                <h5 key={index + "card-header"} className="card-header">{exp.expType + " Experience"}</h5>
                <div key={index + "card-body"} className="card-body">
                    <h5 key={index + "card-title"} className="card-title">{exp.position + ": " + exp.org}</h5>
                    <div className="btn-container">
                        <a key={index + "card-btn1"} onClick={() => setExp(index)} href="#" className="btn btn-light">Edit</a>
                        <a key={index + "card-btn2"} onClick={() => deleteExp(index, props)} href="#" className="btn btn-danger">Delete</a>
                    </div>
                </div>
            </div>
    )

    return expItems
}



function ExpMenu(props) {

    let [currExp, setExp] = useState(-1)

    useEffect(()=>{
        setExp(-1);
      },[props.state])

    if(currExp === -1){
        return (
            <>
                <div className="container">
                    <div className="card-container">
                        {createEditExpCards(props, setExp)}
                    </div>
                    <div className="addExpContainer"><button onClick={() => setExp(-2)} className="btn btn-success">Add Experience</button></div>
                    <button type="submit" onClick={(e) => formSubmit(e, props)} className="btn btn-primary">Submit Application</button>
                    <button
                      onClick={(event) => back(event, props)}
                      className="back btn btn-secondary"
                    >
                      Back
                  </button>
                </div>
            </>
          )
    }

    else{
        return(
            <>
                <Professional state={props.state} stateChanger={props.stateChanger} currExp = {currExp} setExp = {setExp}/>
            </>
        )
    }


}

export default ExpMenu