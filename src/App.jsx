import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StudentManager from './components/StudentManager'
import TodoItem from './components/TodoItem'

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function App() {
  // NEVER CHANGE STATE VARIABLES DIRECTLY -> always use the set function

  // modal state variable
  const [show, setShow] = useState(false);

  // state variable that contains the index of the task we are editing
  const [taskInd, setTaskInd] = useState(-1);

  // state variable that is linked to the input
  const [taskInput, setTaskInput] = useState('');

  // list of tasks, this will be a string array
  const [taskList, setTaskList] = useState([]);


  /**
   * Handlers
   * 
   * AKA
   * 
   * Functions that will do something
   * 
   */


  // function that closes the modal
  const handleClose = () => setShow(false);

  const handleShow = (taskIndex) => {
    
    setShow(true)
  };


  // this function will add the task in the input to the tasklist
  /**
   * This function adds a task to the state array
   * 
   * @returns nothing
   */
  const handleAddTask = () => {
    // make sure no empty tasks are filled
    if (taskInput == '') {
      alert('Please fill out a task');
      return;
    }

    // #1- copiar/clonar

    // create a copy of taskList
    // we do this because we cant directly change it
    let taskAux = [...taskList];

    // #2- alterar

    // we make the changes we need to the copy of the state array
    taskAux.push(taskInput);

    // #3- atualizar

    // we update the state array with the copy of itself, 
    // now with a new task
    setTaskList(taskAux);

    // clean the input
    setTaskInput("");
  }

  /**
   * This function deletes an element of the array given an index
   * 
   * @param {*} index - the index of the element in the array 
   * @returns nothing, it just alters the state array
   */
  const handleDeleteTask = (index) => {
    if (index < 0 || index >= taskList.length) {
      alert("Estás a inserir um indice invalido");
      return;
    }

    // fazer a alteração no array

    // #1-copiar
    let taskAux = [...taskList];

    // #2-alterar

    // array.splice recebe:
    // - o indice onde começa a apagar elementos,
    // - e recebe o numero de elementos a apagar
    taskAux.splice(index, 1);


    // #3-atualizar
    setTaskList(taskAux);
  }
  // START PARSING HTML OUTPUT
  //
  // parse the state array of tasks, to html elements
  const taskListHtml = taskList.map((task, ind) => {
    return <TodoItem task={task} ind={ind}
      handleDeleteTask={handleDeleteTask} handleShow={handleShow} />
  });

  return (
    <>
      <div style={{ minHeight: '100vh' }} className='container p-2 bg-secondary-subtle rounded'>
        <div className='row'>
          <div className='col-md-3 col-xs-12'>
            Please insert your task &nbsp;
          </div>

          <div className='col-md-6 col-xs-12'>

            <input className='form-control' value={taskInput}
              onChange={(evt) => { setTaskInput(evt.target.value) }} />
          </div>
        </div>


        <div className='row mt-2'>
          <div className='col-md-3 col-sm-6 col-xs-12'>
            <button className='form-control' onClick={() => {
              handleAddTask();
            }}>
              Add task
            </button>
          </div>

        </div>

        <div className='row mt-4'>
          <div>
            <ul className='list-group'>
              {taskListHtml}
            </ul>
          </div>

        </div>

        <>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Task Edit</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className='row'>
                <div className='col-sm-3 col-xs-12'>
                  Task
                </div>
                <div className='col-sm-9 col-xs-12'>
                  <input className='form-control'></input>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Discard
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </>

        {/**<StudentManager></StudentManager> */}
      </div>
    </>
  )
}

export default App
