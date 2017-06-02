

const AnimeReducer = (state=[],action)=>{
    switch(action.type){
        case 'EDIT':
        break;
        case 'DELETE':
        break;
        case "INIT":
        console.log('Masuk Reducer2')
        state = action.payload
        break;
        default: return state
    }
    return state
}

export default AnimeReducer