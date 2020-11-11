import React, { Fragment, useState } from "react"
import { useForm } from "react-hook-form"
import axios from "axios"
import { Link, useI18next, useTranslation } from "gatsby-plugin-react-i18next"
import Checkmark from "../icons/checkmark.svg"

const Form = props => {
  const { t } = useTranslation()
  const { languages, changeLanguage, language } = useI18next()

  const { register, handleSubmit, errors, reset } = useForm()
  const [message, setMessage] = useState("")

  const onSubmit = data => {
    // Creates new FormData object and adds keys

    const formObj = new FormData()
    Object.keys(data).forEach(key => formObj.append(key, data[key]))
    try {
      axios({
        method: "post",
        url:
          "https://script.google.com/macros/s/AKfycby4B9swblgUkD4bFNuRDDibPKnOFWPLh8GSFosN1Xl7A8sKT_U/exec",
        data: formObj,
        headers: { "Content-Type": "multipart/form-data" },
      })
      console.log("submit success")
      if (language === "en") {
        setMessage(
          `${data.songTitle} by ${data.artist}? Of course we know that one. We'll get to it as soon as we can.`
        )
      } else {
        setMessage(
          `${data.artist} 的 ${data.songTitle}？我們當然會那首歌。我們經快為您表演。`
        )
      }

      reset()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Fragment>
      {message && (
        <div className="align-center alert">
          <Checkmark style={{ width: "30px", height: "30px" }} />
          <h2 style={{ padding: "5px 0 10px" }}>{t("FORM.SUBMITTED")}</h2>
          <p>{message}</p>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        <label for="songTitle">
          {t("FORM.SONG_TITLE")}
          <input
            type="text"
            name="songTitle"
            placeholder="Isn't She Lovely"
            ref={register}
            required
          />
        </label>
        <label>{t("FORM.ARTIST")}</label>
        <input
          type="text"
          name="artist"
          placeholder="Stevie Wonder"
          ref={register}
          required
        />
        <label>{t("FORM.YOUR_NAME")}</label>
        <input
          type="text"
          name="name"
          placeholder={t("FORM.OPTIONAL")}
          ref={register}
        />
        <label for="message">{t("FORM.ADD_A_MESSAGE")}</label>
        <textarea
          id="message"
          name="message"
          placeholder={t("FORM.OPTIONAL")}
          ref={register}
        ></textarea>
        <div className="align-center">
          <button type="submit">{t("FORM.SUBMIT")}</button>
        </div>
      </form>
    </Fragment>
  )
}

export default Form
