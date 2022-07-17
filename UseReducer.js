import React, { useReducer, useState } from 'react'

export const UseReducer = () => {
    
    const booksdata = [
        {
            'id': 1,
            'name': 'adnan'
        },
        {
            'id': 2,
            'name': 'rafa'
        },
        {
            'id': 3,
            'name': 'tasnim'
        }
    ]

const reducer=(state,action)=>{
    if(action.type==="ADD"){
        const allboooks=[...state.mybook,action.payload]
        return {
            ...state,
            mybook:allboooks,
            message:true
        }

    }
   if (action.type==="REMOVE"){
    const filteredbooks=[...state.mybook].filter((book)=>book.id !== action.payload)
    return({
        ...state,
        mybook:filteredbooks
    })

   }


}


    // const [mybook,setMybook]=useState(books)
    const [bookname,setBookname]=useState('')
    // const [message,setMessage]=useState(false)
     const [bookState,dispatch]=useReducer(reducer,{
        mybook:booksdata,
        message:false,

     })
    const handelsub=(e)=>{
        const allbooks={id:new Date().getTime().toString(),name:bookname}
        e.preventDefault()
        dispatch({type:"ADD",payload:allbooks})
     
    }

    const removeclick=(id)=>{
        dispatch({type:"REMOVE",payload:id})

    }
    return (<div>
        <form onSubmit={handelsub}>

        <input type="text" value={bookname} onChange={(e)=>{setBookname(e.target.value)}} ></input>
        <button type='submit'>Submit</button>
        </form>
     {bookState.message && <h1>add successfully</h1>}

        {bookState.mybook && bookState.mybook.map((all)=>(
            <>
            <h1>{all.name}</h1> <button onClick={()=>{removeclick(all.id)}}>Remove</button>
            </>
            
        ))}
    </div>)
}
