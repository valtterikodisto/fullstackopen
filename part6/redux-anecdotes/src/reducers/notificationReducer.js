const initialState = { id: null, notification: "" }

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "show":
      return action.payload
    case "hide":
      return initialState
  }
  return state
}

export const show = (id, notification) => ({
  type: "show",
  payload: { id, notification },
})
export const hide = () => ({ type: "hide" })

export const setNotification = (notification, seconds) => {
  return async (dispatch, getState) => {
    const { notification: prevNotification } = getState()
    if (prevNotification.id) {
      clearTimeout(prevNotification.id)
    }

    const id = setTimeout(() => dispatch(hide()), seconds * 1000)
    dispatch(show(id, notification))
  }
}

export default reducer
