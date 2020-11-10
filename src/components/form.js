import React, { Fragment, useState } from "react"
import useForm from "react-hook-form"
import axios from "axios"
import { Link, useTranslation } from "gatsby-plugin-react-i18next"

const Form = props => {
  const { t } = useTranslation()
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
      <form className="gform" onSubmit={e => onSubmit(e)}>
        <label for="songTitle">
          {t("FORM.SONG_TITLE")}
          <input
            type="text"
            name="songTitle"
            placeholder="Isn't She Lovely"
            value={songTitle}
            onChange={e => onChange(e)}
            required
          />
        </label>
        <label>{t("FORM.ARTIST")}</label>
        <input
          type="text"
          name="artist"
          placeholder="Stevie Wonder"
          value={artist}
          onChange={e => onChange(e)}
          required
        />
        <label>{t("FORM.YOUR_NAME")}</label>
        <input
          type="text"
          name="name"
          placeholder={t("FORM.OPTIONAL")}
          value={name}
          onChange={e => onChange(e)}
        />
        <label for="message">{t("FORM.ADD_A_MESSAGE")}</label>
        <textarea
          id="message"
          name="message"
          placeholder={t("FORM.OPTIONAL")}
          value={message}
          onChange={e => onChange(e)}
        ></textarea>
        <div className="align-center">
          <button type="submit">{t("FORM.SUBMIT")}</button>
        </div>
      </form>
    </Fragment>
  )
}

export default Form
