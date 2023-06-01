import { Form, Button } from "react-bootstrap";
import ListaTareas from "./ListaTareas";
import { useState } from "react";

const FormularioTarea = () => {
const [tarea,setTarea] = useState('');
const [tareas,setTareas] = useState([]);

const handleSubmit = (e)=>{
  e.preventDefault();
  setTareas([...tareas, tarea]);
  // limpiar el input
  setTarea('');
}

  return (
    <>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3 d-flex" controlId="tarea">
        <Form.Control type="text" placeholder="ingrese una tarea" onChange={(e)=> setTarea(e.target.value)} value={tarea} />
        <Button variant="primary" type="submit">Agregar</Button>
      </Form.Group>
    </Form>
    <ListaTareas tareas={tareas}></ListaTareas>
    </>
  );
};

export default FormularioTarea;
