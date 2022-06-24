import { useState } from "react";

import "./Card.css";

const Card = ({
  onDelete = () => {},
  onEdit = () => {},
  id = 0,
  title = "",
  body = "",
}) => {
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleOnEditSubmit = (e) => {
    setIsEdit(!isEdit);
  };

  const handleTitleChange = (e) => {
    e.preventDefault();
    onEdit(id, e.target.value, body);
  };

  const handleBodyChange = (e) => {
    e.preventDefault();
    onEdit(id, title, e.target.value);
  };

  return (
    <>
      {isEdit ? (
        <div className="card">
          <input
            className="card-title"
            name="title"
            defaultValue={title}
            onChange={handleTitleChange}
          />
          <div className="textarea-container">
            <textarea
              className="card-body"
              name="card-body"
              defaultValue={body}
              onChange={handleBodyChange}
            />
          </div>
          <span
            onClick={() => handleOnEditSubmit(id)}
            id={id}
            role="button"
            className="btn"
          >
            Save
          </span>
        </div>
      ) : (
        <div className="card">
          <span className="card-title">{title}</span>
          <div className="card-body">{body}</div>
          <div className="button-container">
            <span
              onClick={() => onDelete(id)}
              id={id}
              className="btn"
              role="button"
            >
              Delete
            </span>
            <span onClick={handleEdit} id={id} className="btn" role="button">
              Edit
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
