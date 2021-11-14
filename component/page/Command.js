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
        <div className="flex p-5 m-2 border-b-2 border-lightgray">
            <p className="w-60 text-2xl">
                <strong>{title}</strong>
            </p>
            <span className="text-lightgray">{description}</span>
        </div>
    )
}