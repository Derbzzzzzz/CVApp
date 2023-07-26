import "../styles/Education.css"

function formSubmit(e, props){
  e.preventDefault();

  let state = props.state

  let stateClone = JSON.parse(JSON.stringify(state));

  let school = document.getElementById("school")
  let degreeType = document.getElementById("degreeType")
  let degreeField = document.getElementById("degreeField")
  let endDate = document.getElementById("endDate")
  let gpa = document.getElementById("gpa")

  let newData = stateClone.data

  newData.addExp = state.data.addExp

  newData.school = school.value
  newData.degreeType = degreeType.value
  newData.degreeField = degreeField.value
  newData.schoolEndDate = endDate.value
  newData.gpa = gpa.value

  stateClone.page = 2

  props.stateChanger(stateClone)

}

function back(event, props){
  
  let state = props.state

  let stateClone = JSON.parse(JSON.stringify(state));

  let newData = stateClone.data

  newData.addExp = state.data.addExp

  stateClone.page = 0

  props.stateChanger(stateClone)
}

function Education(props) {

  let data = props.state.data

  return (
    <>
      <div className="container">
        <h2 className="form-title">Education</h2>
        <form onSubmit={(e) => formSubmit(e, props)}>
            <div className="form-group">
                <h4><label className="required" htmlFor="school">School</label></h4>
                <input type="text" className="form-control" id="school" placeholder="School Name" defaultValue={data.school} autoComplete="off" required/>
            </div>
            <div className="row">
              <div className="form-group col-md-6">
                  <h4><label className="required" htmlFor="degreeType">Degree Type</label></h4>
                  <select id="degreeType" className="form-control" defaultValue={data.degreeType} required>
                      <option label="-- Select An Option --" style={{display: 'none'}}></option>
                      <option>{'High School Diploma'}</option>
                      <option>{'Associate of Arts'}</option>
                      <option>{'Associate of Science'}</option>
                      <option>{'Bachelor of Arts'}</option>
                      <option>{'Bachelor of Science'}</option>
                      <option>{'Bachelor of Fine Arts'}</option>
                      <option>{'Bachelor of Architecture'}</option>
                      <option>{'Master of Arts'}</option>
                      <option>{'Master of Science'}</option>
                      <option>{'Master of Fine Arts'}</option>
                      <option>{'Master of Business Administration'}</option>
                      <option>{'Doctorate'}</option>
                  </select>
              </div>
              <div className="form-group col-md-6">
                  <h4><label htmlFor="degreeField">Degree Field (Optional)</label></h4>
                  <input type="text" className="form-control" id="degreeField" placeholder="Ex: Computer Science" defaultValue={data.degreeField} autoComplete="off"/>
              </div>
            </div>
            <div className="form-group">
                <h4><label htmlFor="gpa">GPA (Optional)</label></h4>
                <input type="text" className="form-control" id="gpa" placeholder="Ex: 3.2/4.0" defaultValue={data.gpa} autoComplete="off"/>
            </div>
              <div className="form-group">
                  <h4><label className="required" htmlFor="endDate">End Date (Expected)</label></h4>
                  <input type="date" className="form-control" id="endDate" defaultValue={data.schoolEndDate} required/>
              </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <button
              onClick={(event) => back(event, props)}
              className="back btn btn-secondary"
            >
              Back
        </button>
        <div className="spacer"></div>
      </div>
    </>
  )
}

export default Education