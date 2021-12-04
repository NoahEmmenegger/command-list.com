export default function EditCommand({ command }) {
    return (
        <div key={command.id}>
            <input type="text" value={command.title} />
            <input type="text" value={command.description} />
        </div>
    );
}
