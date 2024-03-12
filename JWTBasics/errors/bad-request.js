import CustomAPIError from "./custom-error.js"
import { StatusCodes } from 'http-status-codes'

class BadRequest extends CustomAPIError {
  constructor(message, statusCode) {
    super(message)
    this.statusCode = StatusCodes.BAD_REQUEST
  }
}

export default BadRequest