const addTodo = (data) => {
    return {
        type: "ADD_TODO",
        payload: {
            id: new Date().getTime().toString(),
            data: data
        }
    };
};

const deleteTodo = (id) => {
    return {
        type: "DELETE_TODO",
        payload: id
    };
};

const removeAllTodo = () => {
    return {
        type: "REMOVE_ALL_TODO"
    };
};

export { addTodo, deleteTodo, removeAllTodo };