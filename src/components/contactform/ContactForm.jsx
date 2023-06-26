import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { useState } from 'react';
import "./contactform.css";
import Button from 'react-bootstrap/Button';

const ContactForm = () => {
  const [range, setRange] = useState(0);
  const [dmenu, setDmenu] = useState({
    localidad: "Localidad",
    localidadtype: "Tipo de Salon",
  });
  const [consulta, setConsulta] = useState({
    name: "",
    mail: "",
    cellphone: "",
    quantity: "",
    location: "",
    locationtype: "",
    question: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setConsulta({
      name: "",
      mail: "",
      cellphone: "",
      quantity: "",
      location: "",
      locationtype: "",
      question: "",
    });

    setRange(0);
  };

  const handleRangequantity = (e) => {
    setRange(e.target.value);
    setConsulta((prev) => ({ ...prev, quantity: e.target.value }));
  };

  const handleDropdownChange = (e, DDTYPE) => {
    if (DDTYPE === "location") {
      setDmenu((prev) => ({ ...prev, localidad: e.target.textContent }));
      setConsulta((prev) => ({ ...prev, location: e.target.textContent }));
    }
    if (DDTYPE === "locationtype") {
      setDmenu((prev) => ({ ...prev, localidadtype: e.target.textContent }));
      setConsulta((prev) => ({ ...prev, locationtype: e.target.textContent }));
    }
  };

  return (
    <div id='Contact-Div'>
      <form onSubmit={handleSubmit} className='d-flex flex-column align-items-center'>
        <div id='InputDiv'>
          <input type="text" id="name" placeholder="Nombre" value={consulta.name} onChange={(e) => setConsulta((prev) => ({ ...prev, name: e.target.value }))} />
          <input type="mail" id="mail" placeholder="Email" value={consulta.mail} onChange={(e) => setConsulta((prev) => ({ ...prev, mail: e.target.value }))} />
          <input type="number" id="cellnumber" placeholder='Numero de telefono' value={consulta.cellphone} onChange={(e) => setConsulta((prev) => ({ ...prev, cellphone: e.target.value }))} />
          <h6>Cantidad de invitados</h6>
          <input type='range' max={1000} min={0} step={1} value={range} onChange={handleRangequantity} className='range-contact' />
          <h6>Cantidad Seleccionada: {range}</h6>
        </div>
        <div id='Dropdown-Contact'>
          <Dropdown id='dropdown'>
            <Dropdown.Toggle>
              {dmenu.localidad}
            </Dropdown.Toggle>
            <Dropdown.Menu onClick={(e) => handleDropdownChange(e, "location")}>
              <Dropdown.Item>CABA</Dropdown.Item>
              <Dropdown.Item>GBA</Dropdown.Item>
              <Dropdown.Item>Gran Buenos Aires</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle>
              {dmenu.localidadtype}
            </Dropdown.Toggle>
            <Dropdown.Menu onClick={(e) => handleDropdownChange(e, "locationtype")}>
              <Dropdown.Item>Salon Cubierto</Dropdown.Item>
              <Dropdown.Item>Aire Libre</Dropdown.Item>
              <Dropdown.Item>Casa Particular</Dropdown.Item>
              <Dropdown.Item>Barrio Cerrado</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className='container'>
          <textarea name="question" id="question" cols="30" rows="10" value={consulta.question} placeholder='Consultas' onChange={(e) => setConsulta((prev) => ({ ...prev, question: e.target.value }))}></textarea>
        </div>
        <Button type='submit' onClick={handleSubmit} className='mt-3'>Enviar</Button>
      </form>
    </div>
  );
};

export { ContactForm };
