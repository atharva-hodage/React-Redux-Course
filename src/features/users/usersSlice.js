import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '0', name: 'Alejandro Garnacho' },
    { id: '1', name: 'Rasmus Hojlund' },
    { id: '2', name: 'Kobbie Mainoo' },
    { id :'3', name: 'Jude Bellingham'}
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer