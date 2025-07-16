const { response } = require("express");
const Todo = require("../models/Todo");

exports.createTodo = async (req, res) => {
  try {
    const { title, description } = req.body;

    const reponse = await Todo.create({ title, description });

    res.status(200).json({
      success: true,
      data: response,
      message: "Todo Created Successfully!",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      data: "Internal Server Error!",
      message: error.message,
    });
  }
};
