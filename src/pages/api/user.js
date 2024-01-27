import {connectToDb} from "@/lib/utils";
import { User } from "@/lib/models";

export default async function handler(req, res) {
    await connectToDb();
    res.json(await User.find().exec());
}
