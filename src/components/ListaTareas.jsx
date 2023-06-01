import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";


const ListaTareas = ({tareas, borrarTarea}) => {
  return (
    <ListGroup>
      {
        tareas.map((itemTarea, indiceTarea)=> <ItemTarea tarea={itemTarea} key={indiceTarea} borrarTarea={borrarTarea}></ItemTarea>)
      }
      
    </ListGroup>
  );
};

export default ListaTareas;
