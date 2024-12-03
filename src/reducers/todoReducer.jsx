export const todoReducer = (state = [], action) => {
    switch(action.type) {
        case 'NEW_TODO_ARTICLE':
          return state.concat(action.payload)
        case 'TOGGLE_EDIT': {
          const id = action.payload.id
          const articleToEdit = state.find(a => a.id === id)
          const edited = {...articleToEdit, edit: !articleToEdit.edit}
          return state.map(article => article.id !== id ? article: edited)
        }
        case 'REMOVE_ARTICLE':
            return state.filter(article => article.id !== action.payload.id)
        case 'SAVE_EDITED_ARTICLE':
            return state.map((article) => article.id !== action.payload.id ? article: action.payload)
        default:
          return state
      }
};

export const createNewArticle = (article) => {
    return {
      type: 'NEW_TODO_ARTICLE',
      payload: article
    }
  };
  
export const toggleArticleEdit = (id) => {
    return {
      type: 'TOGGLE_EDIT',
      payload: { id }
    }
  };

export const removeTodoArticle = (id) => {
    return {
      type: 'REMOVE_ARTICLE',
      payload: { id }
    }
  };

export const saveEditedArticle = (article) => {
    return {
      type: 'SAVE_EDITED_ARTICLE',
      payload : article
    }
  };