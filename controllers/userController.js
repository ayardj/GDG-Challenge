const User = require("../models/user");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");

const getAllUsers = async (req, res) => {
  console.log(req.user);
  const users = await User.find({ role: "user" }).select("email name _id");
  res.status(StatusCodes.OK).json({ count: users.length, users });
};
const getSingleUser = async (req, res) => {
  const id = req.params.id;
  const user = await User.findOne({ _id: id }).select("email name _id");
  if (!user) {
    throw new CustomError.NotFoundError(`No user with id ${id}`);
  }
  res.status(StatusCodes.OK).json({ user });
};
const showCurrentUser = async (req, res) => {
  res.status(StatusCodes.OK).json({ user: req.user });
};



module.exports = {
  getAllUsers,
  getSingleUser,
  showCurrentUser
};