const reducer = (state = "", action) => {
  switch (action.type) {
    case "filter":
      return action.payload.filter
  }

  return state
}

export const filter = (filter) => ({ type: "filter", payload: { filter } })

export default reducer
