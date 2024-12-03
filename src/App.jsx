import { useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { createNewArticle } from "./reducers/todoReducer"
import { TodoArticle } from "./components/TodoArticle"
import { TodoArticleEdit } from "./components/TodoArticleEdit"
import { generateArticle } from "./services/articleGenerator"


function App() {

  const dispatch = useDispatch();
  const todoArticleList = useSelector(state => state);

  const [task,setTask] = useState("");
  const [description, setDescription] = useState("");

  const addNewTodoArticle = () => {

    const newTodoArticle = generateArticle(task,description);
    dispatch(createNewArticle(newTodoArticle));

  };

  return (
    <div>
      <input value={task} id="task" onChange={(e) => setTask(e.target.value)} />
      <input value={description} id="description" onChange={(e) => setDescription(e.target.value)} />
      <button onClick={addNewTodoArticle}>add</button>
      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Description</th>
            <th>edit</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            todoArticleList.map((article) => article.edit ? 
            <TodoArticleEdit key={article.id} article={article} />:
            <TodoArticle key={article.id} article={article} />)
          }
        </tbody>
      </table>
    </div>
  )
}

export default App
