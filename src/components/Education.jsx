import "../styles/Education.css"

function Education() {

  return (
    <>
      <div className="container">
        <h2 className="form-title">Education</h2>
        <form>
            <div className="form-group">
                <h4><label htmlFor="college">College</label></h4>
                <input type="text" className="form-control" id="college" placeholder="College Name" autoComplete="off" required/>
            </div>
            <div className="form-group">
                <h4><label htmlFor="degreeType">Degree Type</label></h4>
                <select id="degreeType" className="form-control">
                    <option label="-- Select An Option --" style={{display: 'none'}}></option>
                    <option>{'Bachelor of Science (BS)'}</option>
                    <option>{'Bachelor of Arts (BA)'}</option>
                    <option>{'Master (MS)'}</option>
                </select>
            </div>
            <div className="form-group">
                <h4><label htmlFor="degreeField">Degree Field</label></h4>
                <input type="text" className="form-control" id="degreeField" placeholder="Degree Field" autoComplete="off" required/>
            </div>
            <div className="row">
                <div className="form-group col-md-6">
                    <h4><label htmlFor="startDate">Start Date</label></h4>
                    <input type="date" className="form-control" id="startDate" required/>
                </div>
                <div className="form-group col-md-6">
                    <h4><label htmlFor="endDate">End Date</label></h4>
                    <input type="date" className="form-control" id="endDate"/>
                </div>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </>
  )
}

export default Education