import Task from "../../models/task.js"
import asyncWrapper from "../../middleware/async.js"
import { createCustomError } from "../../erros/customError.js"

const update = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params
  const data = req.body
  console.log(data)
  const task = await Task.findOneAndUpdate({ _id: taskID }, data, { new: true, runValidators: true })
  if (!task) {
    return next(createCustomError(`no task with id : ${taskID}`, 404))
  }
  res.status(200).json({ task })
})

export default update;