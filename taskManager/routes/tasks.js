import express from "express"
import { getAll, getOne, create, update, remove } from "../controllers/tasks/index.js"

const router = express.Router()

router.route('/').get(getAll).post(create)
router.route('/:id').get(getOne).patch(update).delete(remove)

export default router