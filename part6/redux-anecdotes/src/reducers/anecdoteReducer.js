import anecdoteService from "../services/anecdotes"

const getId = () => (100000 * Math.random()).toFixed(0)

const reducer = (state = [], action) => {
  switch (action.type) {
    case "init":
      return action.payload.sort((a, b) => b.votes - a.votes)
    case "vote":
      const { votedAnecdote } = action.payload
      return [
        ...state.map((anecdote) =>
          anecdote.id === votedAnecdote.id ? votedAnecdote : anecdote
        ),
      ].sort((a, b) => b.votes - a.votes)
    case "add":
      const { anecdote } = action.payload
      return state.concat(anecdote)
  }

  return state
}

export const createAnecdote = (content) => {
  return async (dispatch) => {
    const anecdote = await anecdoteService.add({
      content,
      id: getId(),
      votes: 0,
    })
    dispatch({
      type: "add",
      payload: { anecdote },
    })
  }
}
export const vote = (anecdote) => {
  return async (dispatch) => {
    const votedAnecdote = await anecdoteService.put({
      ...anecdote,
      votes: anecdote.votes + 1,
    })
    dispatch({ type: "vote", payload: { votedAnecdote } })
  }
}

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: "init",
      payload: anecdotes,
    })
  }
}

export default reducer
