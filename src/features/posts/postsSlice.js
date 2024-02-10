import { createSlice, nanoid } from "@reduxjs/toolkit"
import { sub } from "date-fns"
const initialState = [
    {
        id: '1',
        title: 'Learning Redux Toolkit',
        content: "I've heard good things.",
        date:sub(new Date(),{minutes:10}).toISOString(),
       
    },
    {
        id: '2',
        title: 'Slices...',
        content: "The more I say slice, the more I want pizza.",
        date:sub(new Date(),{minutes:5}).toISOString(),
    }
]

// const postsSlice = createSlice({
//     name: 'posts',
//     initialState,
//     reducers: {
//         postAdded:{
//             reducer(state,action){
//              state.push(action.payload)
//            },
//         //for the above reducer : The reducer function takes the current state and an action object. 
//         //It pushes the action.payload (a new post) into the state array.
//         prepare(title,content,userId){
//             return{
//                 payload:{
//                     id:nanoid(),
//                     title,
//                     content,
//                     userId
//                 }
//             }
//         }
//         //Prepares the action payload for the postAdded action creator. 
//         //It returns an object with a payload property containing a new post object 
//         //with a unique ID generated using nanoid().
//     }
//     }
// })

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(title, content, userId) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,

                        date: new Date().toISOString(), // here we are passing current timestamp
                        userId,
                        // reactions: {
                        //     thumbsUp: 0,
                        //     wow: 0,
                        //     heart: 0,
                        //     rocket: 0,
                        //     coffee: 0
                        // }
                    }
                }
            }
        },
        // reactionAdded(state, action) {
        //     const { postId, reaction } = action.payload
        //     const existingPost = state.find(post => post.id === postId)
        //     if (existingPost) {
        //         existingPost.reactions[reaction]++
        //     }
        // }
    }
})

export const selectAllPosts = (state) => state.posts;

export const {postAdded} = postsSlice.actions;
// when we created a postAdded function in postSlice, the createSlice created a action with same name ,
//which we can export and use it to modify the state and dispatch the changes to store
// action creator function postAdded is automatically created by createSlice



export default postsSlice.reducer