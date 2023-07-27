import "../styles/Content.css"


import General from "./General"
import Education from "./Education"
import ExpMenu from "./ExpMenu"
import Submission from "./Submission"


function loadPage(state, setState){
    if(state.page === 0){
    return <General state={state} stateChanger={setState}/>
    }
    else if(state.page === 1){
    return <Education state={state} stateChanger={setState}/>
    }
    else if(state.page === 2){
    return <ExpMenu state={state} stateChanger={setState}/>
    }
    else if(state.page === 3){
    return <Submission state={state} stateChanger={setState}/>
    }
}

// Note, decided to use CSS Transition to fade container element,
// NOT pageContainer

function FadePage(props) {

    return (
        <>
            <div className="pageContainer">
                {loadPage(props.state, props.stateChanger)}
            </div>
        </>
    )
}

export default FadePage