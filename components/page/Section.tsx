import React from "react";
import { Section } from "../../types/models"

type SectionProps = {
    children: React.ReactChildren,
    template: string,
    section: Section
}

export default function Section({ children, template, section }: SectionProps) {
    switch (template) {
        case "light":
            return <div>test</div>;

        default:
            return defaultTemplate(children, section);
    }
}

const defaultTemplate = (children: React.ReactChildren, section: Section) => {
    return (
        <div className="command_list">
            <h2 className="command_heading">{section.title}</h2>
            {children}
        </div>
    );
};
