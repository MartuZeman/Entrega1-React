import { useState } from "react";
import "./FormPayment.css";

export default function FormCheckout({ handleCheckout }) {
  const [formData, setFormData] = useState({
    username: "",
    mail: "",
    phone: "",
  });

  function handleSumbit(event) {
    event.preventDefault();
    handleCheckout(formData);
  }

  function handleInputChange(event) {
    const newFormData = { ...formData };
    newFormData[event.target.name] = event.target.value;
    setFormData(newFormData);
  }

  return (
    <form onSubmit={handleSumbit}>
      <div>
        <label>
          Nombre:
          <input
            onChange={handleInputChange}
            name="username"
            placeholder="Nombre"
            value={formData.username}
            type="text"
          />
        </label>
        <label>
          Email:
          <input
            onChange={handleInputChange}
            name="mail"
            placeholder="Email@outlook.com"
            value={formData.mail}
            type="email"
            pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$"
          />
        </label>
        <label>
          Telefono:
          <input
            onChange={handleInputChange}
            name="phone"
            placeholder="Telefono"
            value={formData.phone}
            type="tel"
          />
        </label>
      </div>
      <div className="botones-container">
        <button type="submit">Enviar</button>
        <button type="reset">Cancelar</button>
      </div>
    </form>
  );
}
