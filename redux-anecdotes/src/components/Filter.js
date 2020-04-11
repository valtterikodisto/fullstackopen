import React from "react"
import { useDispatch } from "react-redux"
import { filter } from "../reducers/filterReducer"

export const Filter = () => {
  const dispatch = useDispatch()
  const [filterValue, setFilterValue] = React.useState("")

  const handleChange = (event) => {
    setFilterValue(event.target.value)
    dispatch(filter(event.target.value))
  }

  return <input value={filterValue} onChange={handleChange} />
}
