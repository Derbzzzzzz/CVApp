import "../styles/Professional.css";

function formSubmit(e, props) {
  e.preventDefault();

  let state = props.state;

  let stateClone = JSON.parse(JSON.stringify(state));

  let org = document.getElementById("org");
  let position = document.getElementById("position");
  let workStartDate = document.getElementById("workStartDate");
  let workEndDate = document.getElementById("workEndDate");
  let responsibilities = document.getElementById("responsibilities");

  let newData = stateClone.data;
  newData.addExp(org, position, startDate, endDate, responsibilities);

  if (newData.firstName == null) {
    stateClone.page = 0;
  } else if (newData.college == null) {
    stateClone.page = 1;
  } else {
    stateClone.page = 3;
  }

  props.stateChanger(stateClone);
}

function Professional(props) {

  console.log(props)
  let data = props.state.data;

  let i = props.currExp

  return (
    <>
      <div className="container">
        <h2 className="form-title">Professional Experience</h2>
        <form onSubmit={(e) => formSubmit(e, props)}>
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
          <div className="form-group">
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
                <label htmlFor="endDate">End Date</label>
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
                Responsibilities
              </label>
            </h4>
            <textarea
              className="form-control"
              id="responsibilities"
              rows="2"
              defaultValue={i >= 0 ? data.experiences[i].org : null}
              required
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit Application
          </button>
        </form>
        <button
          onClick={(event) => props.setExp(-1)}
          className="back btn btn-secondary"
        >
          Back
        </button>
      </div>
    </>
  );
}

export default Professional;
