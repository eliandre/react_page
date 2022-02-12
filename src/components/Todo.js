function Todo(props) {
    return(
        <div className="card">
        <h1>{props.text}</h1>
        <div className="actions">
          <button className="btn">Kustuta</button>
        </div>
      </div>
    );
}

export default Todo;