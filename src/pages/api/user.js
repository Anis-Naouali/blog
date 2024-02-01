import {connectToDb} from "@/lib/utils";
import { User } from "@/lib/models";
import { Bai_Jamjuree } from "next/font/google";

export default async function handler(req, res) {
    await connectToDb();
    res.json(await User.find().exec());
}

