import {isAdmin} from "@/app/api/auth/[...nextauth]/route";
import {MenuItem} from "@/models/MenuItem";
import mongoose from "mongoose";

const MONGO_URL="mongodb+srv://food-ordering-app:K8qo42UW0ZwT3fEA@cluster0.dioszpb.mongodb.net/";

export async function POST(req) {
  mongoose.connect(MONGO_URL);
  const data = await req.json();
  const menuItemDoc = await MenuItem.create(data);
  return Response.json(menuItemDoc);
}

export async function PUT(req) {
  mongoose.connect(MONGO_URL);
  const {_id, ...data} = await req.json();
  await MenuItem.findByIdAndUpdate(_id, data);
  return Response.json(true);
}

export async function GET() {
  mongoose.connect(MONGO_URL);
  return Response.json(
    await MenuItem.find()
  );
}

export async function DELETE(req) {
  mongoose.connect(MONGO_URL);
  const url = new URL(req.url);
  const _id = url.searchParams.get('_id');
  if (await isAdmin()) {
    await MenuItem.deleteOne({_id});
  }
  return Response.json(true);
}