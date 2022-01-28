import { connectToDatabase } from "../../../util/mongodb";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  const {
    method,
    query: { id },
    body,
  } = req;

  const { db } = await connectToDatabase();
  const toUpdate = body.toUpdate;
  const exactBody = body.data;

  if (method === "PUT") {
    try {
      const user = await db
        .collection("users")
        .updateOne(
          { _id: ObjectId(id) },
          { $set: { [`metadata.${toUpdate}`]: exactBody } }
        );
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  } else if (method === "GET") {
    try {
      const user = await db.collection("users").findOne({ _id: ObjectId(id) });
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
