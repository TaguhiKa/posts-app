import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const Button = ({onClick, id, icon}) => {
    const handleDelete= (id) => {
        onClick(id);
    }
    return ( 
        <span className="btn" onClick={()=>handleDelete(id)}>< FontAwesomeIcon icon={icon} /></span>
     );
}

export default Button;