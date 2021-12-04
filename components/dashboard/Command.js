export default function EditCommand({ command }) {
    return (
        <div key={command.id}>
            <input type="text" value={command.name} />
            <input type="text" value={command.description} />
        </div>
    );
}
