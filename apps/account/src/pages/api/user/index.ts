/*
  /api/user endpoint for account actions
*/

// Handle incoming requests
import { NextApiRequest, NextApiResponse } from "next";
import { unstable_getServerSession } from "next-auth";

import { deleteUser, loginUser, registerUser } from "../../../services/user";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // As per the Next-Auth docs, unstable_getServerSession must be used for performance reasons
  // https://next-auth.js.org/getting-started/client#getsession
  const session = await unstable_getServerSession(req, res, authOptions);

  if (req.method === "POST") {
    return await loginUser(req.body.email);
  } else if (req.method === "PUT") {
    return await registerUser(req.body.email);
  } else if (req.method === "DELETE") {
    return await deleteUser(req.body.userId);
  } else {
    return res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
}
