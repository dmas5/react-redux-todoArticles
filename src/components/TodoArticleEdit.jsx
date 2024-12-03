import { useState } from "react";
import { useDispatch } from 'react-redux'
import { toggleArticleEdit, saveEditedArticle } from "../reducers/todoReducer"

export const TodoArticleEdit = ({article}) => {

    const dispatch = useDispatch();

    const [task,setTask] = useState(article.task);
    const [description,setDescription] = useState(article.description);

    const onSave = () => {
  
        let articleToSave = {
          id: article.id,
          task: task,
          description: description,
          edit: !article.edit
        };
    
        dispatch(saveEditedArticle(articleToSave));
    
      };

    return (
        <tr>
        <td><input value={task} onChange={e => setTask(e.target.value)} /></td>
        <td><input value={description} onChange={e => setDescription(e.target.value)} /></td>
        <td><button onClick={() => dispatch(toggleArticleEdit(article.id))}>cancel</button></td>
        <td><button onClick={onSave}>save</button></td>
      </tr>
    )
}