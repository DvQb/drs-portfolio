import React, { useState } from 'react';

function Form() {
  // Definir el estado inicial para cada campo del formulario
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Manejar cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica de envío, como enviar los datos a un servidor o mostrar una alerta
    alert(`Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
    // Opcional: limpiar el formulario después del envío
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="w-1/3 m-auto font-semibold ">
        <h2 className="text-center font-bold text-5xl mb-10">CONTACT ME!</h2>
      <form onSubmit={handleSubmit} className="grid">
        <div className="">
          <label htmlFor="name" className='block mb-3'>Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 text-base rounded-lg mb-8"
          />
        </div>
        <div >
          <label htmlFor="email" className="block mb-3">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 rounded-lg mb-8"
          />
        </div>
        <div >
          <label htmlFor="message" className="block mb-3">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="w-full p-2 rounded-lg mb-8 "
          ></textarea>
        </div>
        <button type="submit" className="buttonBlue m-auto">Submit</button>
      </form>
    </div>
  );
}

export default Form;
