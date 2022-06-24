import { useState } from "react";
import Title from "../Title/Title";
import Body from "../Body/Body";
import Button from "../Button/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
       { isEdit ? (
            <section className='card'>
              <input className="card-title" name="title" defaultValue={title} onChange={handleTitleChange}/>
              <textarea className="card-body" name="card-body" defaultValue={body} onChange={handleBodyChange}/>
                <span onClick={() => handleOnEditSubmit(id)} id={id} role="button" className="btn"> 
                  <FontAwesomeIcon icon={faCheck} />
                </span>
            </section>
          ) : (
            <div className="card" >
              <Title title={title} />
              <Body body={body} />
                <span  onClick={() => onDelete(id)} id={id} className="btn" role="button"> 
                  <FontAwesomeIcon icon={faTrashCan} />
                </span>
                <span onClick={handleEdit} id={id} className="btn" role="button"> 
                  <FontAwesomeIcon icon={faPencil} />
                </span>
            </div>
          ) }
    </>
  );
};

export default Card;
