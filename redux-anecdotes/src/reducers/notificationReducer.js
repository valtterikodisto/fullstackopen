const reducer = (state = "", action) => {
  switch (action.type) {
    case "show":
      return action.payload.notification
    case "hide":
      return ""
  }
  return state
}

export const show = (notification) => ({
  type: "show",
  payload: { notification },
})
export const hide = () => ({ type: "hide" })

export default reducer
