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
        <div className="px-96 py-80">
            <h2 className="text-center text-4xl p-11">{section.title}</h2>
            {children}
        </div>
    )
}