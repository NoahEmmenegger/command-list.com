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
        <div className="">
            <p className="">
                <strong>{command.title}</strong>
            </p>
            <span className="">{command.description}</span>
        </div>
    )
}