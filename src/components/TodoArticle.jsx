import { toggleArticleEdit, removeTodoArticle } from "../reducers/todoReducer"
import { useDispatch } from 'react-redux'

export const TodoArticle = ({article}) => {

    const dispatch = useDispatch();

    return (
        <tr>
            <td>{article.task}</td>
            <td>{article.description}</td>
            <td>{article.edit.toString()}</td>
            <td><button onClick={() => dispatch(toggleArticleEdit(article.id))}>edit</button></td>
            <td><button onClick={() => dispatch(removeTodoArticle(article.id))}>remove</button></td>
        </tr>
    )
}