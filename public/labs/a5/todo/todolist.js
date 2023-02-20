import TodoItems from "./todoitem.js";
import Todos from "./todos.js";

const TodoList = () => {
    return(`
      <ul>
        ${
                Todos.map( todo => 
                           {
                            return(TodoItems(todo));
                            }).join('')
        }
      </ul>
   `);
}
export default TodoList;
/*

${TodoItems('buy Milk')}
${TodoItems('Buy salt')}*/
