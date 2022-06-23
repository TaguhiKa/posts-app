import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Button = ({onClick, id, icon}) => {
    const handleDelete= (id) => {
        onClick(id);
    }
    return ( 
        <div className="btn" onClick={()=>handleDelete(id)}>Edit Delete</div>
     );
}

export default Button;