import React, { Fragment, useState } from "react"
import { useForm } from "react-hook-form"
import axios from "axios"
import { Link, useTranslation } from "gatsby-plugin-react-i18next"

const Form = props => {
  const { t } = useTranslation()
  const { register, handleSubmit, errors, reset } = useForm()

  const onSubmit = data => {
    console.log(data)
    // Creates new FormData object and adds keys

    try {
      axios({
        method: "post",
        url:
          "https://script.google.com/macros/s/AKfycby4B9swblgUkD4bFNuRDDibPKnOFWPLh8GSFosN1Xl7A8sKT_U/exec",
        data: data,
        headers: { "Content-Type": "multipart/form-data" },
      })
      console.log("submit success")
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Fragment>
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
