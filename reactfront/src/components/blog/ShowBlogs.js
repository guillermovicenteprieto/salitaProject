import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//import { getAllBlogs } from "../../../node/controllers/blogController";

const URI = "http://localhost:8000/blogs";

const ShowBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    getAllBlogs();
  }, []);

  //procedimiento para mostrar todos los blogs
  const getAllBlogs = async () => {
    const response = await axios.get(URI);
    setBlogs(response.data);
  };

  //procedimiento para eliminar un blog
  const deleteBlog = async (id) => {
    await axios.delete(`${URI}/${id}`);
    getAllBlogs();
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1>Listado de blogs</h1>
            <Link to="/create" className="btn btn-primary mt-2 mb-2">
                <i className="fas fa-plus"></i>
                {/* Nuevo blog */}
            </Link>
          <table className="table table-striped">
            <thead className="table-primary">
              <tr>
                <th>ID</th>
                <th>Titulo</th>
                <th>Contenido</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog) => (
                <tr key={blog.id}>
                  <td>{blog.id}</td>
                  <td>{blog.title}</td>
                  <td>{blog.content}</td>
                  <td>
                    <Link to={`/edit/${blog.id}`}>
                      <button className="btn btn-info"><i className="fas fa-edit"></i></button>
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteBlog(blog.id)}
                    >
                      <i className="fas fa-trash-alt"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ShowBlogs;
