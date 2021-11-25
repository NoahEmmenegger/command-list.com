import EditCommand from "./Command"

export default function EditSection({section}) {
    return (
        <div className="card p-10">
            <input type="text" value={section.title} />
            {section.commands.map(command => {
                return <EditCommand key={command.id} command={command} />
            })}
        </div>
    )
}