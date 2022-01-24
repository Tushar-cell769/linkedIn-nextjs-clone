import { connectToDatabase } from "../../../../util/mongodb";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  const {
    method,
    query: { id, type },
    body,
  } = req;

  const { db } = await connectToDatabase();
  let options;

  if (method === "PUT") {
    if (type === "add") {
      (options = { _id: ObjectId(id) }), { $push: { likes: body } };
    } else if (type === "remove") {
      (options = { _id: ObjectId(id) }),
        { $pull: { likes: { userId: body.userId } } };
    }
  } else if (method === "GET") {
    try {
      const post = await db.collection("posts").find({});
      res.status(200).json(post);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  try {
    const updatedPost = await db.collection("posts").updateOne(options);
    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(500).json(error);
  }
}
