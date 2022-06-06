import { useState } from "react";
import Title from "../Title/Title";
import Body from "../Body/Body";
import Button from "../Button/Button";
import { faTrashCan, faPencil, faCheck } from "@fortawesome/free-solid-svg-icons";

import "./Box.css";

const Box = ({
    onDelete = () => {},
    onEdit = () => {} ,
    id = 0,
    title = "",
    body = "",
  }) => {
  const [isEdit, setIsEdit] = useState(false);
  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleOnEditSubmit = (e) => {
    e.preventDefault();
    onEdit(id, e.target.title.value, e.target.body.value);
    setIsEdit(!isEdit);
  };

  return (
    <div className="box-wrapper">
       { isEdit ? (
            <form onSubmit={handleOnEditSubmit} key={id} className='box'>
              <input className="input-title" name="title" defaultValue={title} />
              <textarea name="body" defaultValue={body} />
              <button className="btn" onSubmit={ handleOnEditSubmit}> 
              <Button onClick={handleOnEditSubmit} id={id} icon={faCheck} /></button>
            </form>
          ) : (
            <div className="box" >
              <Title title={title} />
              <Body body={body} />
              <Button onClick={onDelete} id={id} icon={faTrashCan} />
              <Button onClick={handleEdit} id={id} icon={faPencil} />
            </div>
          ) }
    </div>
  );
};

export default Box;
