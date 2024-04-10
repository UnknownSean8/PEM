import asyncHandler from "express-async-handler";

import { db } from "../config/firebase.js";
import { collection, getDocs } from "firebase/firestore/lite";

const GroupContent = asyncHandler(async (req, res) => {
  const quizGroupTitle = req.params.quizGroupTitle;

  console.log(quizGroupTitle);
  const groupContentCol = collection(db, "quizGroups");
  const groupContentSnapshot = await getDocs(groupContentCol);
  const groupContentList = {};

  groupContentSnapshot.docs.map(
    (doc) => (groupContentList[doc.id] = doc.data())
  );

  const groupContentRes = groupContentList[quizGroupTitle];

  return res.status(200).json(groupContentRes);
});

export { GroupContent };
