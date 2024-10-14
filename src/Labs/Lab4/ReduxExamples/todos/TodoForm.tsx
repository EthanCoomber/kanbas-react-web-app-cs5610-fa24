export default function TodoForm({ todo, setTodo, addTodo, updateTodo }: { todo: { id: string; title: string }; setTodo: (todo: { id: string; title: string }) => void; addTodo: (todo: { id: string; title: string }) => void; updateTodo: (todo: { id: string; title: string }) => void }) {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <input value={todo.title} className="form-control w-50" onChange={(e) => setTodo({ ...todo, title: e.target.value })} />
      <div>
        <button onClick={() => updateTodo(todo)} id="wd-update-todo-click" className="btn btn-warning">
          {' '}
          Update{' '}
        </button>
        <button onClick={() => addTodo(todo)} id="wd-add-todo-click" className="btn btn-success" style={{ marginLeft: 5 }}>
          {' '}
          Add{' '}
        </button>
      </div>
    </li>
  );
}
