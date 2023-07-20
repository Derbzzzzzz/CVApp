import "../styles/Sidebar.css"

function addSections(items, active){
    const elements = items.map((item, index) =>
    <li className={active === index ? "list-group-item active" : "list-group-item"}>{item}</li>
    );

    return elements
}

function SideBar(props) {
    const items = ["General Info", "Educational Experience", "Professional Experience"]

    return (
        <>
            <div className="sidebar">
            <ul className="list-group list-group-flush">
                {addSections(items, props.state)}
            </ul>
            </div>
        </>
    )
}

export default SideBar