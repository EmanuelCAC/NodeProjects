import Task from "../../models/task.js"

const create = async (req, res) => {
  const task = await Task.create(req.body)
  res.status(200).json({ task })
}

export default create