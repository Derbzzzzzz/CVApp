import "../styles/Submission.css";
import generateWordDocument from "./Word.jsx"

function Submission(props) {
  // Default export is a4 paper, portrait, using millimeters for units
  return (
    <>
      <div className="submission">
        <h1 className="submissionMessage">Thanks for Submitting!</h1>
        <h5>We will get back to you shortly</h5>
        <button
          onClick={() => window.location.reload()}
          className="redo btn btn-primary btn-lg"
        >
          Apply Again?
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
