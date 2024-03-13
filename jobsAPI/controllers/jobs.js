import Job from '../models/Job.js'
import { StatusCodes } from 'http-status-codes'
import { BadRequestError, UnauthenticatedError } from '../errors/index.js'

const getAllJobs = async (req, res) => {
  const jobs = await Job.find({ createdBy: req.user.userId }).sort('createdAt')
  res.status(StatusCodes.OK).json({ jobs, count: jobs.length })
}
const getJob = async (req, res) => {
  res.send('register user')
}
const createJob = async (req, res) => {
  console.log(req.body);
  req.body.createdBy = req.user.userId
  const job = await Job.create(req.body)
  res.status(StatusCodes.CREATED).json({ job })

}
const updateJob = async (req, res) => {
  res.send('register user')
}
const deleteJob = async (req, res) => {
  res.send('register user')
}

export {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob
}