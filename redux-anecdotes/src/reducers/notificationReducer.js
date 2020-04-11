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

export const setNotification = (notification, seconds) => {
  return async (dispatch) => {
    dispatch(show(notification))
    setTimeout(() => dispatch(hide()), seconds * 1000)
  }
}

export default reducer
