import React from "react"
import { useField } from "../hooks"

const CreateNew = ({ addNew }) => {
  const { reset: resetContent, ...content } = useField("text")
  const { reset: resetAuthor, ...author } = useField("text")
  const { reset: resetInfo, ...info } = useField("text")

  const handleSubmit = (e) => {
    e.preventDefault()
    addNew({
      content: content.value,
      author: author.value,
      info: info.value,
      votes: 0,
    })
  }

  const reset = (e) => {
    e.preventDefault()
    resetContent()
    resetAuthor()
    resetInfo()
  }

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          content
          <input name="content" {...content} />
        </div>
        <div>
          author
          <input name="author" {...author} />
        </div>
        <div>
          url for more info
          <input name="info" {...info} />
        </div>
        <button>create</button>
        <button onClick={reset}>reset</button>
      </form>
    </div>
  )
}

export default CreateNew
