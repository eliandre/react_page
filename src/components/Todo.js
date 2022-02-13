import Modal from './Modal';
import Backdrop from './Backdrop';
import { useState } from 'react';

function Todo(props) {

    const [ modalIsOpen, setModalIsOpen ] = useState(false);

    function deleteHandler() {
        setModalIsOpen(true);
    }

    function closeModalHandler() {
        setModalIsOpen(false);
    }
    
    return(
        <div className="card">
        <h1>{props.text}</h1>
        <div className="actions">
          <button className="btn" onClick={deleteHandler} >Kustuta</button>
        </div>
        
        {/* kui modalIsOpen ja Modal on tõesed */}
        {modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />}
        {modalIsOpen && <Backdrop onCancel={closeModalHandler}/>}
      </div>
    );
}

export default Todo;