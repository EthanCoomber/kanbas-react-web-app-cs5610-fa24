export default function TodoItem({ todo, deleteTodo, setTodo }: { todo: { id: string; title: string }; deleteTodo: (id: string) => void; setTodo: (todo: { id: string; title: string }) => void }) {
  return (
    <li key={todo.id} className="list-group-item d-flex justify-content-between">
      <div>{todo.title}</div>
      <div>
        <button onClick={() => setTodo(todo)} id="wd-set-todo-click" className="btn btn-primary ms-2" style={{ marginLeft: 2 }}>
          Edit
        </button>
        <button onClick={() => deleteTodo(todo.id)} id="wd-delete-todo-click" className="btn btn-danger" style={{ marginLeft: 5 }}>
          Delete
        </button>
      </div>
    </li>
  );
}
