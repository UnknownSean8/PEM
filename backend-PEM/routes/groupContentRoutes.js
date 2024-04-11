import express from "express";
import { GroupContent } from "../controllers/groupContentController.js";

const router = express.Router();

/**
 * @swagger
 * components:
 *  schemas:
 *      groupContents:
 *          type: object
 *          properties:
 *              title:
 *                  type: string
 *                  description: Group title
 *                  example: Demographic Information
 *              description:
 *                  type: string
 *                  description: Group description
 *                  example: "The following questionnaires are designed to gain information about your background (e.g., age, gender, nationality), your personality traits, and your emotional and cognitive states. "
 *              content:
 *                  type: array
 *                  items:
 *                      type: string
 *                      example: Demographic Questionnaire
 *              users:
 *                  type: object
 *                  properties:
 *              video_url:
 *                  type: string
 *                  description: Video Url
 *                  example: "www.google.com"
 *              results:
 *                  type: object
 *                  properties:
 */

/**
 * @swagger
 * /api/groupContent/{quizGroupTitle}:
 *  get:
 *      summary: Retrieve a list of block contents
 *      description: Retrieve a list of block contents
 *      parameters:
 *          - in: path
 *            name: quizGroupTitle
 *            required: true
 *            description: Quiz Group Title
 *            schema:
 *              type: string
 *      responses:
 *          200:
 *              description: A list of block contents
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              title:
 *                                  type: string
 *                                  description: Group title
 *                                  example: Demographic Information
 *                              description:
 *                                  type: string
 *                                  description: Group description
 *                                  example: "The following questionnaires are designed to gain information about your background (e.g., age, gender, nationality), your personality traits, and your emotional and cognitive states. "
 *                              content:
 *                                  type: array
 *                                  items:
 *                                      type: string
 *                                      example: Demographic Questionnaire
 *                              users:
 *                                  type: object
 *                                  properties:
 *                              video_url:
 *                                  type: string
 *                                  description: Video Url
 *                                  example: "www.google.com"
 *                              results:
 *                                  type: object
 *                                  properties:
 */
router.get("/:quizGroupTitle", GroupContent);

export default router;
