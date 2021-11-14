export default function Command({ template, title, description }) {
    switch (template) {
        case 'light':
            return (<div>test</div>)

        default:
            return defaultTemplate(title, description)
    }
}

const defaultTemplate = (title, description) => {
    return (
        <div>
            <p><strong>{title}</strong></p>
            <span>{description}</span>
        </div>
    )
}