import "../styles/Sidebar.css"

function addSections(items, active, stateChanger){
    const elements = items.map((item, index) =>
    <li key={item} className={active === index ? "list-group-item active" : "list-group-item"} onClick={() => stateChanger(index)}>{item}</li>
    );

    return elements
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