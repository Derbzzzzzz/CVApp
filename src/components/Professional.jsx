import "../styles/Professional.css"

function Professional() {

  return (
    <>
      <div className="container">
        <h2 className="form-title">Professional Experience</h2>
        <form>
            <div className="form-group">
                <h4><label htmlFor="company">Company</label></h4>
                <input type="text" className="form-control" id="company" placeholder="Company Name" autoComplete="off" required/>
            </div>
            <div className="form-group">
                <h4><label htmlFor="position">Position</label></h4>
                <input type="text" className="form-control" id="position" placeholder="Position Title" autoComplete="off" required/>
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
            <div className="form-group">
                <h4><label htmlFor="responsibilities">Responsibilities</label></h4>
                <textarea className="form-control" id="responsibilities" rows="3" required></textarea>
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </>
  )
}

export default Professional