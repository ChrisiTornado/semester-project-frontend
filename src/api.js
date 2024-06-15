import axios from "axios";

const readTodos = async () => {
  let res = await axios.get('http://34.203.27.226:3000/todos');

  return res.data;
}

const createTodo = async (name) => {
    let res = await axios.post(
        'http://34.203.27.226:3000/todos',
        {
            'name': name
        }
    );

    return res.data;
}

const doneTodo = async (id) => {
    let res = await axios.put(
        `http://34.203.27.226:3000/todos/${id}/done`
    );

    return res.data;
}

const undoneTodo = async (id) => {
    let res = await axios.delete(
        `http://34.203.27.226:3000/todos/${id}/done`
    );

    return res.data;
}

export {
    readTodos,
    createTodo,
    doneTodo,
    undoneTodo
}
