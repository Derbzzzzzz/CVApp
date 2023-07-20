import "../styles/General.css"

function General() {

  return (
    <>
      <div className="container">
        <h2 className="form-title">General Info</h2>
        <form>
            <h4><label>Name</label></h4>
            <div className="row">
                <div className="col">
                    <input type="text" className="form-control" placeholder="First name" autoComplete="off" required/>
                </div>
                <div className="col">
                    <input type="text" className="form-control" placeholder="Last name" autoComplete="off" required/>
                </div>
            </div>
            <div className="form-group">
                <h4><label htmlFor="email">Email Address</label></h4>
                <input type="email" className="form-control" id="email" placeholder="Email Address" autoComplete="off" required/>
            </div>
            <div className="form-group">
                <h4><label htmlFor="phone">Phone Number</label></h4>
                <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" className="form-control" id="email" placeholder="Phone Number" autoComplete="off" required/>
                <small id="emailHelp" className="form-text text-muted">Format: XXX-XXX-XXXX</small>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </>
  )
}

export default General