import asyncHandler from "express-async-handler";

import { db } from "../config/firebase.js";
import { collection, getDocs } from "firebase/firestore/lite";

const blockGroups = asyncHandler(async (req, res) => {
  const blockGroupsCol = collection(db, "blockGroups");
  const blockGroupsSnapshot = await getDocs(blockGroupsCol);
  const blockGroupsList = blockGroupsSnapshot.docs.map((doc) => doc.data());

  return res.status(200).json({ blockGroupsList });
});

export { blockGroups };