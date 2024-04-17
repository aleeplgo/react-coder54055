import { useState } from 'react';
import Swal from 'sweetalert2';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar campos del formulario
    const newErrors = {};
    if (formData.name.trim() === '') {
      newErrors.name = 'El nombre es requerido';
    }
    if (formData.email.trim() === '') {
      newErrors.email = 'El correo electrónico es requerido';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'El correo electrónico no es válido';
    }
    if (formData.message.trim() === '') {
      newErrors.message = 'El mensaje es requerido';
    }

    // Si hay errores, mostrarlos
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Si no hay errores, mostrar Sweet Alert de mensaje enviado
      Swal.fire({
        icon: 'success',
        title: 'Mensaje enviado correctamente',
        showConfirmButton: false,
        timer: 1500
      });
      // Limpiar el formulario
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      // Limpiar los errores
      setErrors({});
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-black uppercase mb-8 text-center">Contacto</h1>
      <div className="flex flex-wrap -mx-4">
        <div className="w-full lg:w-1/2 px-4 mb-8">
          <h2 className="text-xl font-semibold mb-3">Información de contacto</h2>
          <p className="mb-3"><strong>Dirección:</strong> 123 Calle Principal, Ciudad</p>
          <p className="mb-3"><strong>Teléfono:</strong> (123) 456-7890</p>
          <p className="mb-3"><strong>Correo Electrónico:</strong> info@m4estudio.com</p>
        </div>
        <div className="w-full lg:w-1/2 px-4">
          <h2 className="text-xl font-semibold mb-3">Formulario de contacto</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-1" htmlFor="name">Nombre</label>
              <input type="text" id="name" name="name" className="border-gray-300 border rounded-md px-3 py-2 w-full" placeholder="Nombre completo" value={formData.name} onChange={handleChange} />
              {errors.name && <p className="text-red-500 mt-1">{errors.name}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-1" htmlFor="email">Correo Electrónico</label>
              <input type="email" id="email" name="email" className="border-gray-300 border rounded-md px-3 py-2 w-full" placeholder="correo@ejemplo.com" value={formData.email} onChange={handleChange} />
              {errors.email && <p className="text-red-500 mt-1">{errors.email}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-1" htmlFor="message">Mensaje</label>
              <textarea id="message" name="message" className="border-gray-300 border rounded-md px-3 py-2 w-full h-32 resize-none" placeholder="Escribe aquí tu mensaje" value={formData.message} onChange={handleChange}></textarea>
              {errors.message && <p className="text-red-500 mt-1">{errors.message}</p>}
            </div>
            <button type="submit" className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-md">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
