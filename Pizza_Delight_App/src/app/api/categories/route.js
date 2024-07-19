import {isAdmin} from "@/app/api/auth/[...nextauth]/route";
import {Category} from "@/models/Category";
import mongoose from "mongoose";

const MONGO_URL="mongodb+srv://food-ordering-app:K8qo42UW0ZwT3fEA@cluster0.dioszpb.mongodb.net/";

export async function POST(req) {
  mongoose.connect(MONGO_URL);
  const {name} = await req.json();
  if (await isAdmin()) {
    const categoryDoc = await Category.create({name});
    return Response.json(categoryDoc);
  } else {
    return Response.json({});
  }
}

export async function PUT(req) {
  mongoose.connect(MONGO_URL);
  const {_id, name} = await req.json();
  if (await isAdmin()) {
    await Category.updateOne({_id}, {name});
  }
  return Response.json(true);
}

export async function GET() {
  mongoose.connect(MONGO_URL);
  return Response.json(
    await Category.find()
  );
}

export async function DELETE(req) {
  mongoose.connect(MONGO_URL);
  const url = new URL(req.url);
  const _id = url.searchParams.get('_id');
  if (await isAdmin()) {
    await Category.deleteOne({_id});
  }
  return Response.json(true);
}