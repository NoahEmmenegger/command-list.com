import { doesPageExists } from "../../utils/pages";
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { pageName } = req.body;
    res.status(200).json({ status: await doesPageExists(pageName) });
}
