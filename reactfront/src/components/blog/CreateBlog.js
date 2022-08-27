import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URI = "http://localhost:8000/blogs";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  //procedimiento guardar
  const store = async (e) => {
    e.preventDefault();
    await axios.post(URI, { title, content });
    navigate("/");
  };

  return (
    <div className="container">
      <h3> Crear un nuevo blog </h3>
      <form onSubmit={store}>
        <div className="form-group mb-3">
          <label className="form-label">Titulo</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group mb-3">
          <label className="form-label">Contenido</label>
          <textarea
            type="text"
            className="form-control"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
            Crear
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
