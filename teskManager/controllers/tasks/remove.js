import Task from "../../models/task.js"
import asyncWrapper from "../../middleware/async.js"
import { createCustomError } from "../../erros/customError.js"

const remove = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params
  const task = await Task.findOneAndDelete({ _id: taskID })
  if (!task) {
    return next(createCustomError(`no task with id : ${taskID}`, 404))
  }
  res.status(200).json({ task })
})
export default remove;