const TodoItems = ( items ) =>
{
     return(`
         
           <input type="checkbox" ${items.done ? 'checked': ' '} />  
          <li>Title : ${items.title}</li>
          <li>Status: ${items.status}</li>
           `
    );
}

export default TodoItems;