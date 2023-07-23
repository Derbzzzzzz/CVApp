import "../styles/General.css"

function formSubmit(e, props){
  e.preventDefault();

  let state = props.state

  let stateClone = JSON.parse(JSON.stringify(state));

  let fNameInput = document.getElementById("firstName")
  let lNameInput = document.getElementById("lastName")
  let email = document.getElementById("email")
  let phoneNumber = document.getElementById("phoneNumber")

  let newData = stateClone.data
  newData.firstName = fNameInput.value
  newData.lastName = lNameInput.value
  newData.name = fNameInput.value + " " + lNameInput.value
  newData.email = email.value
  newData.phoneNumber = phoneNumber.value

  stateClone.page = 1

  props.stateChanger(stateClone)

}

function General(props) {

  let data = props.state.data

  return (
    <>
      <div className="container">
        <h2 className="form-title">General Info</h2>
        <form onSubmit={(e) => formSubmit(e, props)}>
            <h4><label className="required">Name</label></h4>
            <div className="row">
                <div className="col">
                    <input type="text" id="firstName" className="form-control" placeholder="First name" defaultValue={data.firstName} autoComplete="off" required/>
                </div>
                <div className="col">
                    <input type="text" id="lastName" className="form-control" placeholder="Last name" defaultValue={data.lastName} autoComplete="off" required/>
                </div>
            </div>
            <div className="form-group">
                <h4><label className="required" htmlFor="email">Email Address</label></h4>
                <input type="email" className="form-control" id="email" placeholder="Email Address" defaultValue={data.email} autoComplete="off" required/>
            </div>
            <div className="form-group">
                <h4><label className="required" htmlFor="phone">Phone Number</label></h4>
                <input type="text" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" className="form-control" id="phoneNumber" placeholder="Phone Number" defaultValue={data.phoneNumber} autoComplete="off" required/>
                <small id="emailHelp" className="form-text text-muted">Format: XXX-XXX-XXXX</small>
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </>
  )
}

export default General