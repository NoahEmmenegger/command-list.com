export default function Section({ children, title, template }) {
    switch (template) {
        case 'light':
            return (<div>test</div>)

        default:
            return defaultTemplate(children, title)
    }
}

const defaultTemplate = (children, title) => {
    return (
        <div>
            <p>{title}</p>
            {children}
        </div>
    )
}