import "../styles/Professional.css"

function formSubmit(e, props){
  e.preventDefault();

  let state = props.state

  let stateClone = JSON.parse(JSON.stringify(state));

  let company = document.getElementById("company")
  let position = document.getElementById("position")
  let workStartDate = document.getElementById("workStartDate")
  let workEndDate = document.getElementById("workEndDate")
  let responsibilities = document.getElementById("responsibilities")

  let newData = stateClone.data
  newData.company = company.value
  newData.position = position.value
  newData.workStartDate = workStartDate.value
  newData.workEndDate = workEndDate.value
  newData.responsibilities = responsibilities.value

  if(newData.firstName == null){
    stateClone.page = 0
  } else if(newData.college == null){
    stateClone.page = 1
  } else{
    stateClone.page = 3
  }

  props.stateChanger(stateClone)

}

function Professional(props) {

  let data = props.state.data

  return (
    <>
      <div className="container">
        <h2 className="form-title">Professional Experience</h2>
        <form onSubmit={(e) => formSubmit(e, props)}>
            <div className="form-group">
                <h4><label className="required" htmlFor="company">Company</label></h4>
                <input type="text" className="form-control" id="company" placeholder="Company Name" defaultValue={data.company} autoComplete="off" required/>
            </div>
            <div className="form-group">
                <h4><label className="required" htmlFor="position">Position</label></h4>
                <input type="text" className="form-control" id="position" placeholder="Position Title" defaultValue={data.position} autoComplete="off" required/>
            </div>
            <div className="row">
                <div className="form-group col-md-6">
                    <h4><label className="required" htmlFor="startDate">Start Date</label></h4>
                    <input type="date" className="form-control" id="workStartDate" defaultValue={data.workStartDate} required/>
                </div>
                <div className="form-group col-md-6">
                    <h4><label htmlFor="endDate">End Date</label></h4>
                    <input type="date" className="form-control" id="workEndDate" defaultValue={data.workEndDate}/>
                </div>
            </div>
            <div className="form-group">
                <h4><label className="required" htmlFor="responsibilities">Responsibilities</label></h4>
                <textarea className="form-control" id="responsibilities" rows="3" defaultValue={data.responsibilities} required></textarea>
            </div>

            <button type="submit" className="btn btn-primary">Submit Application</button>
        </form>
      </div>
    </>
  )
}

export default Professional