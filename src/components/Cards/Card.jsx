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
              
              <input className="card-title" name="title" defaultValue={title} />
           
              <textarea className="card-body" name="card-body" defaultValue={body} />
            
              <button className="done-btn" onSubmit={ handleOnEditSubmit}> Done
              </button>
            </form>
          ) : (
            <div className="card" >
              <Title title={title} />
              <Body body={body} />
              

            </div>
          ) }
    </>
  );
};

export default Card;
