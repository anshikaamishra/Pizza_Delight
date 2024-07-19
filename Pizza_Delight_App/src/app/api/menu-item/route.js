import mongoose from "mongoose";
import { MenuItems } from "../../../models/MenuItems";
import {isAdmin} from "@/app/api/auth/[...nextauth]/route";

const MONGO_URL="mongodb+srv://food-ordering-app:K8qo42UW0ZwT3fEA@cluster0.dioszpb.mongodb.net/";

export async function POST(req) {
    mongoose.connect(MONGO_URL);
    const data = await req.json();
    const menuItemDocs = await MenuItems.create(data);
    return Response.json(menuItemDocs);
}

export async function PUT(req) {
    mongoose.connect(MONGO_URL);
    const {_id, ...data} = await req.json();
    await MenuItems.findByIdAndUpdate(_id, data);
    return Response.json(true);
}

export async function GET() {
    mongoose.connect(MONGO_URL);
    return Response.json(
        await MenuItems.find()
    )
}

export async function DELETE(req) {
    mongoose.connect(MONGO_URL);
    const url = new URL(req.url);
    const _id = url.searchParams.get('_id');
    if (await isAdmin()) {
      await MenuItems.deleteOne({_id});
    }
    return Response.json(true);
  }