function Modal(props) {

    function cancelHandler() {
        props.onCancel();
    }

    function confirmHandler() {
        props.onConfirm();
    }

    return(
        <div className="modal">
            <p>Oled kindel?</p>
            <button className="btn" onClick={confirmHandler}>Jah</button>
            <button className="btn btn--alt" onClick={cancelHandler}>Ei</button>
        </div>
    )

}

export default Modal;