/* eslint-disable no-undef */
const userModel = require("../Model/userModel")
const bcrypt = require('bcrypt')
const asyncErrorHandler = require("../utils/asyncErrorHandler")
const ApplicationError = require("../utils/error")

const changePassword = asyncErrorHandler(async (req, res, next) => {
    try {
        const encryptPssword = await bcrypt.hash(req.body.password, 12)
        const updateBody = {
            password: encryptPssword,
            changedPasswordAt: Date.now()
        }
        const response = await userModel.findByIdAndUpdate(req.currentUser._id, updateBody, {
            new: true
        })
        res.status(200).json({
            status: 'Success',
            message: 'Password updasted successfully',
            data: response
        })
    } catch (err) {
        next(new ApplicationError(`An error occured " ${err}`, 400))
    }
})

const getUserData = asyncErrorHandler(async (req, res, next) => {
    try {
        // const result = await userModel.findById(req.currentUser.id).populate('userTasks')
        const result = await userModel.aggregate([
            {
              $lookup: {
                from: "Tasks",
                let: { user_id: { $toString: '$_id' } }, // Convert _id to string
                pipeline: [
                  {
                    $match: {
                      $expr: {
                        $eq: ["$userId", "$$user_id"] // Compare userId to string _id
                      }
                    }
                  }
                ],
                as: "tasks"
              }
            }
          ]);
        res.status(200).json({
            status: 'Success',
            data: result
        })
    } catch (err) {
        next(new ApplicationError(`An error occured " ${err}`, 400))
    }
})

module.exports = {
    changePassword,
    getUserData
}