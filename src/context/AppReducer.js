
export default (state,action) => {
    switch(action.type){
        case "FETCH_SUCCESS":
            return {
                ...state,
                countryData : action.payload
            }
    }
}