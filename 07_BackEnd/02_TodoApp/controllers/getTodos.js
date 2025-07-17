const Todo = require("../models/Todo");

exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.find({});
    res.status(200).json({
      success: true,
      data: todos,
      message: "All Todos Fetched Successfully!",
    });
  } catch (error) {
    console.error(error);
    console.log(error);
    res.status(500).json({
      success: false,
      data: "Internal Server Error!",
      message: error.message,
    });
  }
};

exports.getTodoById = async (req, res) => {
  try {
    const id = req.params.id;
    const todo = await Todo.find({ _id: id });

    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "No Data Found!",
      });
    }

    res.status(200).json({
      success: true,
      data: todo,
      message: `Todo ${id} Fetched Successfully!`,
    });
  } catch (error) {
    console.error(error);
    console.log(error);
    res.status(500).json({
      success: false,
      data: "Internal Server Error!",
      message: error.message,
    });
  }
};
