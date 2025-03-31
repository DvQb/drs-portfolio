import React, { useState } from 'react';

function FormularioContacto() {
  // Definir el estado inicial para cada campo del formulario
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
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
    alert(`Nombre: ${formData.nombre}\nEmail: ${formData.email}\nMensaje: ${formData.mensaje}`);
    // Opcional: limpiar el formulario después del envío
    setFormData({
      nombre: '',
      email: '',
      mensaje: ''
    });
  };

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto' }}>
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="nombre" style={{ display: 'block', marginBottom: '.5rem' }}>Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '.5rem', fontSize: '1rem' }}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '.5rem' }}>Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '.5rem', fontSize: '1rem' }}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="mensaje" style={{ display: 'block', marginBottom: '.5rem' }}>Mensaje:</label>
          <textarea
            id="mensaje"
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            required
            rows="4"
            style={{ width: '100%', padding: '.5rem', fontSize: '1rem' }}
          ></textarea>
        </div>
        <button type="submit" style={{ padding: '.5rem 1rem', fontSize: '1rem', cursor: 'pointer' }}>Enviar</button>
      </form>
    </div>
  );
}

export default FormularioContacto;
