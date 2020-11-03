import React, { Fragment, useState } from "react"
import axios from "axios"

const Form = props => {
  const [formData, setFormData] = useState({
    songTitle: "",
    artist: "",
    name: "",
    message: "",
  })

  const { songTitle, artist, name, message } = formData

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = async e => {
    e.preventDefault()
    // Creates new FormData object and adds keys
    const formObj = new FormData()
    Object.keys(formData).forEach(key => formObj.append(key, formData[key]))

    try {
      axios({
        method: "post",
        url:
          "https://script.google.com/macros/s/AKfycby4B9swblgUkD4bFNuRDDibPKnOFWPLh8GSFosN1Xl7A8sKT_U/exec",
        data: formObj,
        headers: { "Content-Type": "multipart/form-data" },
      })
      console.log("submit success")
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Fragment>
      <form onSubmit={e => onSubmit(e)}>
        <label for="songTitle">
          Song Title
          <input
            type="text"
            name="songTitle"
            placeholder="Isn't She Lovely"
            value={songTitle}
            onChange={e => onChange(e)}
            required
          />
        </label>
        <label>Artist</label>
        <input
          type="text"
          name="artist"
          placeholder="Stevie Wonder"
          value={artist}
          onChange={e => onChange(e)}
          required
        />
        <label>Your Name</label>
        <input
          type="text"
          name="name"
          placeholder="(optional)"
          value={name}
          onChange={e => onChange(e)}
        />
        <label for="message">Add a message</label>
        <textarea
          id="message"
          name="message"
          placeholder="(optional)"
          value={message}
          onChange={e => onChange(e)}
        ></textarea>
        <div className="center">
          <button type="submit">Submit</button>
        </div>
      </form>
    </Fragment>
  )
}

export default Form
