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
        <div className="px-96 py-80">
            <h2 className="text-center text-4xl p-11">{title}</h2>
            {children}
        </div>
    )
}