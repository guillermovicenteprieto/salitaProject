import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI = "http://localhost:8000/blogs";

const EditBlog = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  //procedimiento editar
  const update = async (e) => {
    e.preventDefault();
    await axios.put(`${URI}/${id}`, { title, content });
    navigate("/");
  };
  useEffect(() => {
    axios.get(`${URI}/${id}`).then((response) => {
      setTitle(response.data.title);
      setContent(response.data.content);
    });
  }, []);

  return (
    <div className="container">
      <h3> Editar Post </h3>
      <form onSubmit={update}>
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
        <button type="submit" className="btn btn-primary m-3">
          Editar
        </button>
      </form>
    </div>
  );
};

export default EditBlog;
