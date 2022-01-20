import { Command } from "../../types/models";

type CommandProps = {
    template: string,
    command: Command
}

export default function Command({ template, command }: CommandProps) {
    switch (template) {
        case "light":
            return <div>test</div>;

        default:
            return defaultTemplate(command);
    }
}

const defaultTemplate = (command: Command) => {
    return (
        <div className="">
            <p className="">
                <strong>{command.name}</strong>
            </p>
            <span className="">{command.description}</span>
        </div>
    );
};
