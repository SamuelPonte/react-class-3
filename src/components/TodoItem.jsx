import Button from 'react-bootstrap/Button';

function TodoItem({ task, ind, handleDeleteTask, handleShow }) {
    return <>
        <li className='d-flex justify-content-between list-group-item'>
            {task}

            <div>
                <Button className='me-1' variant="primary" 
                    onClick={()=>{handleShow(ind)}}>
                    Editar
                </Button>
                <button onClick={() => { handleDeleteTask(ind) }} className='btn btn-danger'>
                    Apagar 
                </button>
            </div>
        </li>
    </>;
}

export default TodoItem;