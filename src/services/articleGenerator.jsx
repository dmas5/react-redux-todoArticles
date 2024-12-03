import { generateId } from "./idgenerator"

export const generateArticle = (task,description) => {

    let article = {
        id: generateId(),
        task: task,
        description: description,
        edit: false
      };

    return article
};