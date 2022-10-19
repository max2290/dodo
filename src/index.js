import './style.css'

 const  ul = document.querySelector('ul');
 const form = document.querySelector('form');
 const  input = document.querySelector("form > input")
console.log(form, input);
 form.addEventListener('submit', event => {
     event.preventDefault()
     const value = input.value;
     input.value = '';
     addTodo(value);
     displayTodo()
 });

const todos = [
    {
        text: 'je suis une todo ' ,
        done: false
    },
    {
        text: 'fair du Java script',
        donne: true
    }
] ;
const displayTodo = () => {
    const todosNode = todos.map((todo, index) => {
        return createTodoElement(todo, index);
    });
    ul.innerHTML = "";
    ul.append(...todosNode);
};
const  createTodoElement = (todo, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
    <span class="todos" ${ todo.done ? 'done': "" } "></span>
    <p> ${todo.text}<p> 
    <button>Supprimer</button>
    
`;
    return li ;
};
const  addTodo = text =>{
    todos.push({
        text,
        done: false
    });
}
displayTodo()