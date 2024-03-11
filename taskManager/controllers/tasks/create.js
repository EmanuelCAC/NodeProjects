import Task from "../../models/task.js"
import asyncWrapper from "../../middleware/async.js"

const create = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body)
  res.status(201).json({ task })
})

export default create