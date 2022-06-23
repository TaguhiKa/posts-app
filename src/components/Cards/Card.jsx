import { useState } from "react";
import Title from "../Title/Title";
import Body from "../Body/Body";
import Button from "../Button/Button";
import { faTrashCan, faPencil, faCheck } from "@fortawesome/free-solid-svg-icons";

import "./Card.css";

const Card = ({
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
    <>
       { isEdit ? (
            <form onSubmit={handleOnEditSubmit} key={id} className='card'>
              <div className="card-title" name="title" defaultValue={title} />
              <div className="card-body" name="card-body" defaultValue={body} />
              <button className="btn" onSubmit={ handleOnEditSubmit}> 
              <Button onClick={handleOnEditSubmit} id={id} icon={faCheck} /></button>
            </form>
          ) : (
            <div className="card" >
              <Title title={title} />
              <Body body={body} />
              <Button onClick={onDelete} id={id} icon={faTrashCan} />
              <Button onClick={handleEdit} id={id} icon={faPencil} />
            </div>
          ) }
    </>
  );
};

export default Card;
