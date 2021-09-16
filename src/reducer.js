export default (state = [], { type, payload }) => {
    switch (type) {
        case  "bugAdded":
            return [
                ...state,
                {
                    id: ++lastIndexOf,
                    description: payload.description,
                    resolved: false
                }
            ];

        case  "bugRemoved":
            return state.filter(bug => bug.id !== payload.id);

        default:
            return state
    }
}
