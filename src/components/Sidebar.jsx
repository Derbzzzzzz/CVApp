import "../styles/Sidebar.css"

function addSections(items, state, stateChanger){
    const elements = items.map((item, index) =>
    <a key={item} className={state.page === index ? "list-group-item active list-group-item-action" : "list-group-item list-group-item-action"} onClick={() => stateChanger(updatePage(index, state))}>{item}</a>
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
            <div className="list-group list-group-flush">
                {addSections(items, props.state, props.stateChanger)}
            </div>
            </div>
        </>
    )
}

export default SideBar