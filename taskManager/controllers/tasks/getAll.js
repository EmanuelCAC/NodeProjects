import Task from "../../models/task.js"
import asyncWrapper from "../../middleware/async.js"

const getAll = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({})
  res.status(200).json({ tasks })
})

export default getAll;