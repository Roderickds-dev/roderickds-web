"use client";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import React, { useState, useRef } from "react";
import { Message } from "../helpers/Message";

const initialForm = {
  name: "",
  email: "",
  subject: "",
};

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(false);

  const serviceId = "service_qefx6ol",
    templtateId = "template_j9d2z1q",
    apiKey = "oM9-RH2unOE9SgtcU",
    formRef = useRef();

  const validationsForm = (form) => {
    let errors = {},
      regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/,
      regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/,
      regexSubject = /^.{1,255}$/;

    if (!form.name.trim()) {
      errors.name = "Debes ingresar tu 'Nombre'";
    } else if (!regexName.test(form.name.trim())) {
      errors.name = "El campo nombre solo aceptas letras y espacios en blancos";
    }
    if (!form.email.trim()) {
      errors.email = "Debes ingresar tu 'Correo electrónico'";
    } else if (!regexEmail.test(form.email.trim())) {
      errors.email = "debes ingresar un Corrreo Electrónico Valido";
    }
    if (!form.subject.trim()) {
      errors.subject = "Debes ingresar el motivo de tu contacto";
    } else if (!regexSubject.test(form.subject.trim())) {
      errors.subject =
        "El motivo de contacto no debe exceder los 255 caracteres";
    }
    return errors;
  };

  const handleChange = (e) => {
      const { name, value } = e.target;
      setForm({
        ...form,
        [name]: value,
      });
    },
    handleBlur = (e) => {
      const { name, value } = e.target;
      handleChange(e);
      if (errors[name] || value.trim()) {
        setErrors(validationsForm(form));
      }
    },
    handleSubmit = (e) => {
      e.preventDefault();
      setErrors(validationsForm(form));

      if (Object.keys(errors).length === 0) {
        setLoading(true);
        emailjs
          .sendForm(serviceId, templtateId, formRef.current, apiKey)
          .then((res) => {
            console.log(res.text);
            setLoading(false);
            setMessage(true);
            setTimeout(() => {
              setMessage(false);
            }, 5000);
            setForm(initialForm);
          })
          .catch((err) => {
            console.log(err);
          });
      } else return;
    };

  return (
    <div
      className={`${
        message ? "justify-start" : "justify-center"
      } flex flex-col items-center dark:bg-reactBlack dark:text-white font-barlow font-light p-4 w-full h-full text-2xl gap-4`}
    >
      <h1 className="text-4xl p-2 border-b-4 border-clearPurple">Contacto</h1>
      <div className="flex flex-col gap-4 justify-center items-center">
        {/*DIV DE LAS ICONOS DE CONTACTO */}
        <div className="flex justify-around items-center w-full flex-wrap">
          <div id="contacto-mail" className="flex">
            <a href="mailto:roderickds.dev@gmail.com" target="_blank">
              <i className="bi bi-envelope text-reactBlack hover:text-clearPurple dark:hover:text-clearPurple dark:text-white flex justify-center items-center gap-2">
                Contáctame!
              </i>
            </a>
          </div>
          <div id="contacto-git-hub">
            <Link href="https://github.com/Roderickds-dev" target="_blank">
              <i className="bi bi-github text-reactBlack hover:text-clearPurple dark:hover:text-clearPurple dark:text-white flex justify-center items-center gap-2">
                GitHub
              </i>
            </Link>
          </div>
          <div id="contacto-linkedin">
            <Link
              href="https://www.linkedin.com/in/roderickds-dev/"
              target="_blank"
            >
              <i className="bi bi-linkedin text-reactBlack hover:text-clearPurple dark:hover:text-clearPurple dark:text-white flex justify-center items-center gap-2">
                LinkedIn
              </i>
            </Link>
          </div>
        </div>
        {!message ? (
          <div className="flex flex-col justify-center items-center dark:bg-reactBlack text-reactBlack dark:text-white rounded-md p-2">
            <h1 className="text-center p-2 font-ruluko text-xl font-semibold">
              ¡Trabajemos juntos!
            </h1>
            <p className="text-center p-2">
              Soy FrontEnd Web Developer en constante crecimiento. Estoy
              buscando oportunidades para aplicar mis conocimientos y
              habilidades para seguir creciendo profesionalmente en el mundo del
              desarrollo web. No dudes en contactarme.
            </p>
            {loading && (
              <div className="flex items-center p-4">
                <span className="loading loading-dots loading-lg"></span>
              </div>
            )}
            <form
              ref={formRef}
              className="flex flex-col gap-2 p-4"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                name="name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={form.name}
                className="border-2 rounded-xl p-1 bg-transparent dark:bg-white border-reactBlack focus:border-clearPurple dark:focus:border-clearPurple  bg-opacity-30 outline-none focus:scale-105 transition-all peer z-10 text-reactBlack"
              />
              {errors.name && <Message msj={errors.name} />}
              <label htmlFor="name" className="text-xl place-self-start">
                Nombre *
              </label>
              <input
                type="text"
                name="email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={form.email}
                className="border-2 rounded-xl p-1 bg-transparent dark:bg-white border-reactBlack focus:border-clearPurple dark:focus:border-clearPurple  bg-opacity-30 outline-none w-60 focus:scale-105 transition-all peer z-10 text-reactBlack"
              />
              {errors.email && <Message msj={errors.email} />}
              <label htmlFor="email" className="text-xl place-self-start">
                Correo Electronico *
              </label>
              <textarea
                name="subject"
                rows={2}
                cols={18}
                onBlur={handleBlur}
                onChange={handleChange}
                value={form.subject}
                className="border-2 rounded-xl p-1 bg-transparent dark:bg-white border-reactBlack focus:border-clearPurple dark:focus:border-clearPurple  bg-opacity-30 outline-none w-60 focus:scale-105 transition-all peer z-10 text-reactBlack resize-none"
              ></textarea>
              {errors.subject && <Message msj={errors.subject} />}
              <label htmlFor="message" className="text-xl place-self-start">
                Mensaje *
              </label>

              <input
                type="submit"
                value="Enviar"
                className="flex text-white bg-clearPurple gap-2 text-xl rounded-md p-2.5 place-self-end cursor-pointer"
              />

              <input type="hidden" name="_next" value="http://localhost:3000" />
              <input type="hidden" name="_captcha" value="false" />
            </form>
          </div>
        ) : (
          <div className="flex flex-col w-full m-4 justify-center items-center dark:text-white">
            <p className="text-4xl m-4 gap-4 text-center">
              ¡Gracias por su mensaje!
            </p>
            <p className="text-2xl p-4 gap-4 text-center">
              Aprecio mucho que se haya tomado el tiempo para ponerte en
              contacto conmigo. Revisaré su mensaje lo antes posible y muy
              pronto recibirá una respuesta de mi parte.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
