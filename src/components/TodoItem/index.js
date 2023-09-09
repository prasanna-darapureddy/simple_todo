// Write your code here
import './index.css'

const TodoItem = props => {
  const {eachTodoItemDetails, deleteTodoItem} = props
  const {id, title} = eachTodoItemDetails

  const onDeleteButton = () => {
    deleteTodoItem(id)
  }

  return (
    <>
      <li className="todo-item">
        <p className="todo-title">{title}</p>
        <button
          type="button"
          className="delete-button"
          onClick={onDeleteButton}
        >
          Delete
        </button>
      </li>
    </>
  )
}
export default TodoItem
