export const task = [
    {
        item: 'Git add',
        completed: false,
        id: 123
    },
    {
        item: 'Git commit ',
        completed: false,
        id: 234
    },
    {
        item: 'Git push origin',
        completed: false,
        id: 345
    }
]

export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TASK":
            return [
                ...state,
                {
                    item: action.payload,
                    completed: false,
                    id: new Date()
                }
            ]

            case "TOGGLE_COMPLETED":
                let Clicktoggle = state.map(item => {
                    if (item.id === action.payload) {
                        return {
                            ...item,
                            completed: !item.completed
                        }
                    } else {
                      return item
                    }
                })
                return Clicktoggle;
            
            case "CLEAR_COMPLETED":
                let Subtract = state.filter(item => {
                    if (item.completed === true) {
                        return !item.completed
                    } else {
                      return item
                    }
                })
                return Subtract

            default:
                return state

    }
}