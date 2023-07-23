import "../styles/ExpMenu.css"

function formSubmit(e, props){
    e.preventDefault();
  
    let state = props.state
  
    let stateClone = JSON.parse(JSON.stringify(state));
  
    if(newData.firstName == null){
      stateClone.page = 0
    } else if(newData.college == null){
      stateClone.page = 1
    } else{
      stateClone.page = 3
    }
  
    props.stateChanger(stateClone)
  
}

function back(event, props){
  
    let state = props.state
  
    let stateClone = JSON.parse(JSON.stringify(state));
  
    stateClone.page = 1
  
    props.stateChanger(stateClone)
  }

function ExpMenu(props) {

  let data = props.state.data

  let i = -1

  return (
    <>
        <div className="container">
            
            <button type="submit" className="btn btn-primary">Submit Application</button>
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

export default ExpMenu