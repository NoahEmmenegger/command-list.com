export default function Section({ children, template, section }) {
    switch (template) {
        case 'light':
            return (<div>test</div>)

        default:
            return defaultTemplate(children, section)
    }
}

const defaultTemplate = (children, section) => {
    return (
        <div className="command_list">
            <h2 className="command_heading">{section.title}</h2>
            {children}
        </div>
    )
}