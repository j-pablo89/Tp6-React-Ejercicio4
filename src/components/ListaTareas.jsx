import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";


const ListaTareas = ({tareas}) => {
  return (
    <ListGroup>
      {
        tareas.map((itemTarea, indiceTarea)=> <ItemTarea tarea={itemTarea} key={indiceTarea}></ItemTarea>)
      }
      
    </ListGroup>
  );
};

export default ListaTareas;
