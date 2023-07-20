import "../styles/Submission.css"

function Submission() {

  return (
    <>
      <div className="submission">
          <h1 className="submissionMessage">Thanks for Submitting!</h1>
          <h5>We will get back to you shortly</h5>
          <button onClick = {() => window.location.reload()} className="redo btn btn-primary btn-lg">Apply Again?</button>
      </div>
    </>
  )
}

export default Submission