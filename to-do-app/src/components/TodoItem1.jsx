function TodoItem1({ todoItems }) {

  return (
    <div className="container">
      <div className="row kg-row">
        {todoItems.map(todoItem => {
          return (
            <>
              <div className="col-6">"milk"</div>
              <div className="col-4">"2024"</div>
              <div className="col-2">
                <button type="button" className="btn btn-danger kg-button">
                  Delete
                </button>
              </div>
            </>
          )
        })}

      </div>
    </div>
  );
}

export default TodoItem1;