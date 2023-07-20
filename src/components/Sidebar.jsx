import "../styles/Sidebar.css"

function addSections(items, state, stateChanger){
    console.log(state.page)
    const elements = items.map((item, index) =>
    <li key={item} className={state.page === index ? "list-group-item active" : "list-group-item"} onClick={() => stateChanger(createInitialState(index))}>{item}</li>
    );

    return elements
}

function createInitialState(page){
    return{
      page: page,
    }
}

function SideBar(props) {
    const items = ["General Info", "Educational Experience", "Professional Experience"]

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