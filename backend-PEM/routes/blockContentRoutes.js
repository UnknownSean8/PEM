import express from "express";
import { blockGroups } from "../controllers/blockContentController.js";

const router = express.Router();

/**
 * @swagger
 * components:
 *  schemas:
 *      videoDetails:
 *          type: object
 *          properties:
 *              video_name:
 *                  type: string
 *                  description: Video name
 *                  example: 2022 Test Video
 *              video_url:
 *                  type: string
 *                  description: Video url
 *                  example: 2022 Test Video Url
 *
 *      blockList:
 *          type: array
 *          items:
 *              type: object
 *              properties:
 *                  title:
 *                      type: string
 *                      description: Block title
 *                      example: "1: Mood"
 *                  content:
 *                      type: array
 *                      items:
 *                          type: string
 *                          description: Block Content
 *                          example: Mood Measurement Questionnaires
 *                  random:
 *                      type: boolean
 *                      description: Block Randomization
 *                      example: false
 */

/**
 * @swagger
 * /api/blockContent:
 *  get:
 *      summary: Retrieve a list of block contents
 *      description: Retrieve a list of block contents
 *      responses:
 *          200:
 *              description: A list of block contents
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              blockGroupsList:
 *                                  type: array
 *                                  items:
 *                                      type: object
 *                                      properties:
 *                                          title:
 *                                              type: string
 *                                              description: The block title
 *                                              example: 2022_test
 *                                          originalTitle:
 *                                              type: string
 *                                              description: The block title
 *                                              example: 2022_test
 *                                          description:
 *                                              type: string
 *                                              description: The block description
 *                                              example: Full 2022 test
 *                                          recording:
 *                                              type: boolean
 *                                              description: Recording
 *                                              example: false
 *                                          videoDetails:
 *                                              type: object
 *                                              properties:
 *                                                  video_name:
 *                                                      type: string
 *                                                      description: Video name
 *                                                      example: 2022 Test Video
 *                                                  video_url:
 *                                                      type: string
 *                                                      description: Video url
 *                                                      example: 2022 Test Video Url
 *                                          blockList:
 *                                              type: array
 *                                              items:
 *                                                  type: object
 *                                                  properties:
 *                                                      title:
 *                                                          type: string
 *                                                          description: Block title
 *                                                          example: "1: Mood"
 *                                                      content:
 *                                                          type: array
 *                                                          items:
 *                                                              type: string
 *                                                              description: Block Content
 *                                                              example: Mood Measurement Questionnaires
 *                                                      random:
 *                                                          type: boolean
 *                                                          description: Block Randomization
 *                                                          example: false
 */
router.get("/", blockGroups);

export default router;
