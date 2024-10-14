import { useSelector, useDispatch } from 'react-redux';
import { addTodo, updateTodo, setTodo } from './todosReducer';

export default function TodoForm() {
  const { todo } = useSelector((state: any) => state.todosReducer);
  const dispatch = useDispatch();
  return (
    <li className="list-group-item d-flex justify-content-between">
      <input value={todo.title} className="form-control w-50" onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))} />

      <div>
        <button onClick={() => dispatch(updateTodo(todo))} id="wd-update-todo-click" className="btn btn-warning">
          {' '}
          Update{' '}
        </button>
        <button onClick={() => dispatch(addTodo(todo))} id="wd-add-todo-click" className="btn btn-success" style={{ marginLeft: 5 }}>
          {' '}
          Add{' '}
        </button>
      </div>
    </li>
  );
}
