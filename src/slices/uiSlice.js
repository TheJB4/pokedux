import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    loading: false
}

let uiSlice = createSlice({
    name: 'UI',
    initialState,
    reducers: {
        /*SET_LOADING*/
        setLoading: (state,action) => {
            state.loading = action.payload
        }
    }
})

export const {setLoading} = uiSlice.actions
export default uiSlice.reducer