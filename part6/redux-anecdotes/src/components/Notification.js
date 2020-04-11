import React from "react"
import { connect } from "react-redux"

const Notification = ({ notification }) => {
  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1,
  }
  return notification.id ? (
    <div style={style}>{notification.notification}</div>
  ) : null
}

const mapStateToProps = ({ notification }) => ({ notification })

export default connect(mapStateToProps)(Notification)
