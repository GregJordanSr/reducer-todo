


export const initialState = {
    todoList: [
        {
            item: 'Learn about Hooks',
            completed: false,
            id: 3892987589
        }
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


export default reducer = (state , action) => {
    switch (action.type) {
        case Action:
            return {
                ...state,
                ...action.payload
            };
        default: return state;
    }
};