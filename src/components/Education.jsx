import "../styles/Education.css"

function formSubmit(e, props){
  e.preventDefault();

  let state = props.state

  let stateClone = JSON.parse(JSON.stringify(state));

  let college = document.getElementById("college")
  let degreeType = document.getElementById("degreeType")
  let degreeField = document.getElementById("degreeField")
  let startDate = document.getElementById("startDate")
  let endDate = document.getElementById("endDate")

  let newData = stateClone.data
  newData.college = college.value
  newData.degreeType = degreeType.value
  newData.degreeField = degreeField.value
  newData.collegeStartDate = startDate.value
  newData.collegeEndDate = endDate.value

  stateClone.page = 2

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
                <h4><label className="required" htmlFor="college">College</label></h4>
                <input type="text" className="form-control" id="college" placeholder="College Name" defaultValue={data.college} autoComplete="off" required/>
            </div>
            <div className="form-group">
                <h4><label className="required" htmlFor="degreeType">Degree Type</label></h4>
                <select id="degreeType" className="form-control" defaultValue={data.degreeType} required>
                    <option label="-- Select An Option --" style={{display: 'none'}}></option>
                    <option>{'Bachelor of Science (BS)'}</option>
                    <option>{'Bachelor of Arts (BA)'}</option>
                    <option>{'Master (MS)'}</option>
                </select>
            </div>
            <div className="form-group">
                <h4><label className="required" htmlFor="degreeField">Degree Field</label></h4>
                <input type="text" className="form-control" id="degreeField" placeholder="Degree Field" defaultValue={data.degreeField} autoComplete="off" required/>
            </div>
            <div className="row">
                <div className="form-group col-md-6">
                    <h4><label className="required" htmlFor="startDate">Start Date</label></h4>
                    <input type="date" className="form-control" id="startDate" defaultValue={data.collegeStartDate} required/>
                </div>
                <div className="form-group col-md-6">
                    <h4><label htmlFor="endDate">End Date</label></h4>
                    <input type="date" className="form-control" id="endDate" defaultValue={data.collegeEndDate}/>
                </div>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </>
  )
}

export default Education