import { doesPageExists } from "../../utils/pages";

export default async function handler(req, res) {
    const { pageName } = req.body;
    res.status(200).json({ status: await doesPageExists(pageName) });
}
