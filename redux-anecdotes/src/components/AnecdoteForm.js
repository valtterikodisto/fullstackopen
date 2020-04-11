import React from "react"
import { connect } from "react-redux"
import { createAnecdote } from "../reducers/anecdoteReducer"

const AnecdoteForm = ({ createAnecdote }) => {
  const [anecdote, setAnecdote] = React.useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    createAnecdote(anecdote)
    setAnecdote("")
  }

  return (
    <>
      <h2>create new</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            value={anecdote}
            onChange={(e) => setAnecdote(e.target.value)}
          />
        </div>
        <button>create</button>
      </form>
    </>
  )
}

export default connect(null, {
  createAnecdote,
})(AnecdoteForm)
