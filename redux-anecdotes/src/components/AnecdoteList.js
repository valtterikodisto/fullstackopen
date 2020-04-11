import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { vote } from "../reducers/anecdoteReducer"
import { show, hide } from "../reducers/notificationReducer"

const AnecdoteList = () => {
  const anecdotes = useSelector((state) =>
    state.anecdotes.filter((a) =>
      a.content.toLowerCase().includes(state.filter.toLowerCase())
    )
  )
  const dispatch = useDispatch()

  const flash = (notification) => {
    dispatch(show(notification))
    setTimeout(() => dispatch(hide()), 5000)
  }

  const voteAnecdote = (anecdote) => {
    dispatch(vote(anecdote.id))
    flash(`you voted '${anecdote.content}'`)
  }

  return (
    <>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => voteAnecdote(anecdote)}>vote</button>
          </div>
        </div>
      ))}
    </>
  )
}

export default AnecdoteList
