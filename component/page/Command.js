export default function Command({ template, command }) {
    switch (template) {
        case 'light':
            return (<div>test</div>)

        default:
            return defaultTemplate(command)
    }
}

const defaultTemplate = (command) => {
    return (
        <div className="flex p-5 m-2 border-b-2 border-lightgray">
            <p className="w-60 text-2xl">
                <strong>{command.title}</strong>
            </p>
            <span className="text-lightgray">{command.description}</span>
        </div>
    )
}