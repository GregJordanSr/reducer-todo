


export const initialState = {
    todoList: [
        {
            item: 'Learn about Hooks',
            completed: false,
            id: 3892987589
        },
        {
            item: 'Build many small projects',
            completed: false,
            id: 8452987589
        },
        {
            item: 'Study for 2 hours before class daily',
            completed: false,
            id: 6892987870
        },
        {
            item: 'Practice JavaScript',
            completed: false,
            id: 4892981876
        },
        {
            item: 'Do code challenges everyday',
            completed: false,
            id: 8652982786
        }
    ]
};


export const reducer = (state , action) => {
    
    switch (action.type) {
        case 'ADD_TODO' :
            const addTodo = {
                item: action.payload,
                completed: false,
                id: Date.now()
            };
            // console.log(state)
            return {
                ...state,
                todoList: [...state.todoList, addTodo]
            };

        case 'TOGGLE_TODO' :
            return {
                ...state,
                todoList: state.todoList.map(data => {
                    if (action.payload === data.id) {
                        return {
                            ...data, completed: !data.completed
                        };
                    }
                    return data;
                })
            }

        case 'CLEAR_TODO': 
            return {
                ...state,
                todoList: state.todoList.filter(item => !item.completed)
            };
        default:
            return state;
    }
};