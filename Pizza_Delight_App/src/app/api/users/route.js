import {isAdmin} from "@/app/api/auth/[...nextauth]/route";
import {User} from "@/models/User";
import mongoose from "mongoose";

const MONGO_URL="mongodb+srv://food-ordering-app:K8qo42UW0ZwT3fEA@cluster0.dioszpb.mongodb.net/";

export async function GET() {
  mongoose.connect(MONGO_URL);
  if (await isAdmin()) {
    const users = await User.find();
    return Response.json(users);
  } else {
    return Response.json([]);
  }
}