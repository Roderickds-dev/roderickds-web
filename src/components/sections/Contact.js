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
    <div className="flex flex-col gap-2 justify-center my-4 md:my-0 ">
      <h1 className="text-4xl text-reactBlack dark:text-white font-medium inline-block relative after:content[''] after:inline-block sm:after:w-[380px] md:after:w-[450px] after:w-[130px] after:flex-wrap after:h-[2px] after:bg-clearBlue md:after:ml-[70px] after:ml-12 [vertical-align:middle] after:shadow-sm after:shadow-reactBlack/45 after:dark:bg-reactBlack after:dark:shadow-white/45 mx-6 md:mt-10">
        Contacto
      </h1>
      <div className="flex flex-col gap-4 justify-center items-center">
        <div className="flex justify-center items-center w-full  gap-4 m-6 flex-wrap">
          <div className=" text-white flex gap-4 justify-center items-center">
            <i className="bi bi-envelope bg-clearBlue text-reactBlack dark:bg-reactBlack dark:text-white h-12 w-12 flex justify-center items-center text-2xl rounded-full"></i>
            <div className="text-reactBlack dark:text-white">
              <p className="font-barlow text-xl font-semibold">Correo</p>
              <p>roderickds.dev@gmail.com</p>
            </div>
          </div>
          <div className=" text-white flex gap-2 justify-center items-center">
            <i className="bi bi-telephone bg-clearBlue text-reactBlack dark:bg-reactBlack dark:text-white h-12 w-12 flex justify-center items-center text-2xl rounded-full"></i>
            <div className="text-reactBlack dark:text-white">
              <p className="font-barlow text-xl font-semibold">Celular</p>
              <p>+911 22 5852 74 </p>
            </div>
          </div>
          <div className="text-white flex gap-4 justify-center items-center">
            <Link
              href="https://www.linkedin.com/in/roderickds-dev/"
              target="_blank"
              className="flex gap-4 items-center justify-center group"
            >
              <i className="bi bi-linkedin group-hover:scale-125 bg-clearBlue text-reactBlack dark:bg-reactBlack dark:text-white h-12 w-12 flex justify-center items-center text-2xl rounded-full hover:bg-reactBlue dark:hover:bg-white dark:hover:text-reactBlack transition-all"></i>
            </Link>
            <div className="text-reactBlack dark:text-white">
              <p className="font-barlow text-xl font-semibold">LinkedIn</p>
              <p>Roderick Díaz</p>
            </div>
          </div>
        </div>
        {!message ? (
          <div className="flex flex-col justify-center items-center bg-clearBlue dark:bg-reactBlack text-reactBlack dark:text-white rounded-md p-2 w-3/4">
            <h1 className="text-center m-4 font-ruluko text-xl font-semibold">
              ¡Trabajemos juntos!
            </h1>
            <p className="text-center">
              Soy FrontEnd Web Developer en constante crecimiento. Estoy
              buscando oportunidades para aplicar mis conocimientos y habilidades para seguir
              creciendo profesionalmente en el mundo del desarrollo web. No
              dudes en contactarme.
            </p>
            {loading && (
              <div className="flex items-center p-4">
                <span className="loading loading-dots loading-lg"></span>
              </div>
            )}
            <form
              ref={formRef}
              className="flex flex-col gap-2 m-6"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                name="name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={form.name}
                className="border-2 rounded-xl p-1 bg-transparent dark:bg-white border-reactBlack focus:border-mediumBlue dark:focus:border-reactBlue  bg-opacity-30 outline-none w-60 focus:scale-105 transition-all peer z-10 text-reactBlack"
              />
              {errors.name && <Message msj={errors.name} />}
              <label
                htmlFor="name"
                className="font-barlow text-xl [align-self:start]"
              >
                Nombre *
              </label>
              <input
                type="text"
                name="email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={form.email}
                className="border-2 rounded-xl p-1 bg-transparent dark:bg-white border-reactBlack focus:border-mediumBlue dark:focus:border-reactBlue  bg-opacity-30 outline-none w-60 focus:scale-105 transition-all peer z-10 text-reactBlack"
              />
              {errors.email && <Message msj={errors.email} />}
              <label
                htmlFor="email"
                className="font-barlow text-xl [align-self:start]"
              >
                Correo Electronico *
              </label>
              <textarea
                name="subject"
                rows={2}
                cols={18}
                onBlur={handleBlur}
                onChange={handleChange}
                value={form.subject}
                className="border-2 rounded-xl p-1 bg-transparent dark:bg-white border-reactBlack focus:border-mediumBlue dark:focus:border-reactBlue  bg-opacity-30 outline-none w-60 focus:scale-105 transition-all peer z-10 text-reactBlack resize-none"
              ></textarea>
              {errors.subject && <Message msj={errors.subject} />}
              <label
                htmlFor="message"
                className="font-barlow text-xl [align-self:start]"
              >
                Mensaje *
              </label>

              <input
                type="submit"
                value="Enviar"
                className="flex btn p-4 rounded-lg bg-mediumBlue text-reactBlack hover:bg-reactBlue dark:bg-white dark:text-reactBlack dark:hover:bg-reactBlue dark:hover:text-white w-20 border-none ml-40"
              />

              <input type="hidden" name="_next" value="http://localhost:3000" />
              <input type="hidden" name="_captcha" value="false" />
            </form>
          </div>
        ) : (
          <div className="flex flex-col w-full m-20 justify-center items-center dark:text-white">
            <p className="font-barlow text-4xl m-4 gap-4 text-center">
              ¡Gracias por su mensaje!
            </p>
            <p className="font-barlow text-2xl m-4 gap-4 text-center">
              Aprecio mucho que se haya tomado el tiempo para ponerte en
              contacto conmigo. Revisaré su mensaje lo antes posible y muy
              pronto tendra una respuesta de mi parte.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
