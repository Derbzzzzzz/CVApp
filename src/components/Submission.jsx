import "../styles/Submission.css";
import generateWordDocument from "./Word.jsx"

function back(e, props){
  e.preventDefault();

  let state = props.state;

  let stateClone = JSON.parse(JSON.stringify(state));

  let newData = stateClone.data

  newData.addExp = state.data.addExp

  stateClone.page = 0

  props.stateChanger(stateClone)

}

function Submission(props) {
  return (
    <>
      <div className="submission">
        <h1 className="submissionMessage">Application Complete</h1>
        <button
          onClick={(e) => back(e, props)}
          className="redo btn btn-primary btn-lg"
        >
          Edit Application
        </button>
        <button
          onClick={(event) => generateWordDocument(event, props)}
          className="redo btn btn-secondary btn-lg"
        >
          Download
        </button>
      </div>
    </>
  );
}

export default Submission;
