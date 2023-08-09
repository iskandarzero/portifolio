import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function FormContact() {
  const form = useRef<HTMLFormElement>(null);

  const [values, setValues] = useState({
    name: "",
    email: "",
    message: ""
  });

  const clearForm = () => {
    setValues({name: "", email: "", message: ""});
  }

  const sendEmail = (e:any) => {
    e.preventDefault();
    const currentForm = form.current;
    
    if (values.name && values.email && values.message && currentForm) {
      emailjs.sendForm('service_5oxuwgi', 'template_hh35z6l', currentForm, 'XCvDESgIxLmpqo66H')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      clearForm()
    } else {
      alert('Preencha todos os campos!')
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="flex flex-col md:mr-[10%] md:m-0 mx-[7%] mt-[10vw] mb-[4vw]">
      <h1 className="text-3xl text-center md:text-start">Contato</h1>
      <label htmlFor="name">Nome:</label>
      <input
        className="my-[0.3vw] border-b-[1px] border-black bg-transparent"
        name="name"
        type="text"
        value={values.name} onChange={(e) => setValues({ ...values, name: e.target.value })}
      />

      <label htmlFor="email">E-mail:</label>
      <input
        className="my-[0.3vw] border-b-[1px] border-black bg-transparent"
        name="email"
        type="email"
        value={values.email} onChange={(e) => setValues({ ...values, email: e.target.value })}
      />

      <label htmlFor="message">Mensagem:</label>
      <textarea
        className="my-[0.3vw] border-b-[1px] border-black bg-transparent resize-none"
        name="message"
        rows={3}
        cols={30}
        value={values.message} onChange={(e) => setValues({ ...values, message: e.target.value })}
      />

      <button
        className="bg-nav p-[1vw] m-[10px] border-[1px] w-[35%] md:w-full rounded-sm text-white self-center"
        type="submit"
      >
        Enviar
      </button>
    </form>
  )
}