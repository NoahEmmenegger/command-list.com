export type Page = {
    description: string,
    ownerUid: string,
    sections: Section[],
    title: string
}

export type Section = {
    title: string,
    commands: Command[]
}

export type Command = {
    name: string,
    description: string
}