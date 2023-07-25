import "../styles/Sidebar.css"

function addSections(items, state, stateChanger){
    const elements = items.map((item, index) =>
    <li key={item} className={state.page === index ? "list-group-item active" : "list-group-item"} onClick={() => stateChanger(updatePage(index, state))}>{item}</li>
    );

    return elements
}

function updatePage(page, state){
    let stateClone = JSON.parse(JSON.stringify(state));
    stateClone.page = page

    let newData = stateClone.data

    newData.addExp = state.data.addExp



    return stateClone
}

function SideBar(props) {
    const items = ["General Info", "Education", "Additional Experiences"]

    return (
        <>
            <div className="sidebar">
            <ul className="list-group list-group-flush">
                {addSections(items, props.state, props.stateChanger)}
            </ul>
            </div>
        </>
    )
}

export default SideBar