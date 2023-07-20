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
            <div class="row">
                <div class="form-group col-md-6">
                    <h4><label for="startDate">Start Date</label></h4>
                    <input type="date" class="form-control" id="startDate" required/>
                </div>
                <div class="form-group col-md-6">
                    <h4><label for="endDate">End Date</label></h4>
                    <input type="date" class="form-control" id="endDate"/>
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