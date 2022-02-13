function Todo(props) {

    function deleteHandler() {
        console.log('Vajutatud!');
        console.log(props.text);
    }

    return(
        <div className="card">
        <h1>{props.text}</h1>
        <div className="actions">
          <button className="btn" onClick={deleteHandler} >Kustuta</button>
        </div>
      </div>
    );
}

export default Todo;