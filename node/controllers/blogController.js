import BlogModel from "../models/BlogModel.js";

//métodos para CRUD

export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await BlogModel.findAll();
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getBlog = async (req, res) => {
  try {
    const blog = await BlogModel.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(blog[0]);
    //otra forma de hacerlo:
    //const blog = await BlogModel.findByPk(req.params.id);
    //res.json(blog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createBlog = async (req, res) => {
  try {
    const blog = await BlogModel.create(req.body);
    res.json({ message: "Blog created successfully", blog });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateBlog = async (req, res) => {
  try {
    const blog = await BlogModel.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({ mesagge: "Blog updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteBlog = async (req, res) => {
  try {
    const blog = await BlogModel.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({ mesagge: "Blog deleted successfully"});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
