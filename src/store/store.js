const initialState = {
	list: []

}

const reducer = (state=initialState, action) => {

	switch(action.type){

		case 'addItem':
			return{
				...state,
				list: [...state.list, action.val.current.value],
			}

		case 'deleteItem':
			return{
				...state,
				list: state.list.filter((item,index)=>index!==action.val)
			}

		default:
			return state

	}

}

export default reducer