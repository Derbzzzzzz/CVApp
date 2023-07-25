import "../styles/Professional.css";

function formSubmit(e, props) {
  e.preventDefault();

  let state = props.state;

  let stateClone = JSON.parse(JSON.stringify(state));

  let expType = document.getElementById("expType")
  let org = document.getElementById("org");
  let position = document.getElementById("position");
  let location = document.getElementById("location")
  let startDate = document.getElementById("workStartDate");
  let endDate = document.getElementById("workEndDate");
  let responsibilities = document.getElementById("responsibilities");

  let newData = stateClone.data;

  console.log(state.data)

  newData.addExp = state.data.addExp

  newData.addExp(expType.value, org.value, position.value, location.value, startDate.value, endDate.value, responsibilities.value, props.currExp);

  // if (newData.firstName == null) {
  //   stateClone.page = 0;
  // } else if (newData.college == null) {
  //   stateClone.page = 1;
  // } else {
  //   stateClone.page = 3;
  // }

  props.stateChanger(stateClone);
}

function Professional(props) {

  let data = props.state.data;

  let i = props.currExp


  return (
    <>
      <div className="container">
        <h2 className="form-title">Professional Experience</h2>
        <form onSubmit={(e) => formSubmit(e, props)}>
        <div className="form-group">
                <h4><label className="required" htmlFor="expType">Experience Type</label></h4>
                <select id="expType" className="form-control" defaultValue={i >= 0 ? data.experiences[i].expType : null} required>
                    <option label="-- Select An Option --" style={{display: 'none'}}></option>
                    <option>{'Work'}</option>
                    <option>{'Volunteering/Service'}</option>
                    <option>{'Extracurricular'}</option>
                </select>
            </div>
          <div className="form-group">
            <h4>
              <label className="required" htmlFor="org">
                Company/Organization
              </label>
            </h4>
            <input
              type="text"
              className="form-control"
              id="org"
              placeholder="Company/Organization Name"
              defaultValue={i >= 0 ? data.experiences[i].org : null}
              autoComplete="off"
              required
            />
          </div>
          <div className="row">
            <div className="form-group col-md-6">
              <h4>
                <label className="required" htmlFor="position">
                  Position
                </label>
              </h4>
              <input
                type="text"
                className="form-control"
                id="position"
                placeholder="Position Title"
                defaultValue={i >= 0 ? data.experiences[i].position : null}
                autoComplete="off"
                required
              />
            </div>
            <div className="form-group col-md-6">
              <h4>
                <label className="required" htmlFor="location">
                  Location
                </label>
              </h4>
              <input
                type="text"
                className="form-control"
                id="location"
                placeholder="Ex: Saint Louis, MO"
                defaultValue={i >= 0 ? data.experiences[i].location : null}
                autoComplete="off"
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-md-6">
              <h4>
                <label className="required" htmlFor="startDate">
                  Start Date
                </label>
              </h4>
              <input
                type="date"
                className="form-control"
                id="workStartDate"
                defaultValue={i >= 0 ? data.experiences[i].startDate : null}
                required
              />
            </div>
            <div className="form-group col-md-6">
              <h4>
                <label htmlFor="endDate">End Date (Optional)</label>
              </h4>
              <input
                type="date"
                className="form-control"
                id="workEndDate"
                defaultValue={i >= 0 ? data.experiences[i].org : null}
              />
            </div>
          </div>
          <div className="form-group">
            <h4>
              <label className="required" htmlFor="responsibilities">
                Responsibilities (Hit ENTER after each one)
              </label>
            </h4>
            <textarea
              className="form-control"
              id="responsibilities"
              rows="2"
              placeholder='Responsibility #1&#10;Responsibility #2&#10;Responsibility #3'
              defaultValue={i >= 0 ? data.experiences[i].responsibilities : null}
              required
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </form>
        <button
          onClick={(event) => props.setExp(-1)}
          className="back btn btn-secondary"
        >
          Back
        </button>
        <div className="spacer"></div>
      </div>
    </>
  );
}

export default Professional;
