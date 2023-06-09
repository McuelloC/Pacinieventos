import React from 'react';
import './pages.css';
import Triangle from "../assets/images/Pages/About/TriangleAbout.png"
import { CarouselClient } from '../components';
const About = () => {
  return (
    <>
    <div className='About-Div'>
      <div className='About-Section' >
        <div className='About-Content' style={{ marginTop: "50px" }}>
          <h1>Que Hacemos?</h1>
          <p>
            Proporcionamos un servicio integral de sonido e iluminación de alta calidad, con un equipo altamente capacitado y una amplia variedad de opciones para crear el ambiente perfecto en cada evento. Nos esforzamos por entender las necesidades de nuestros clientes y trabajamos incansablemente para garantizar su satisfacción en cada detalle.</p>
        </div>
        <div className='About-Content'>
          <img src={Triangle} alt="Circle" style={{
            width: "60%", marginLeft: "10%"
          }} />
        </div>
      </div>
      <div className='About-Section' >
        <div className='About-Content' >
          <h1>¿Cómo trabajamos?</h1>
          <p>
            En  primera instancia, nos dedicamos a armar una propuesta de servicio personalizada teniendo en cuenta factores como la cantidad de invitados, si el evento se llevará a cabo en un lugar al aire libre o cubierto, la ubicación y el tipo de evento. Una vez que el presupuesto es aprobado, nos reunimos con el cliente para conocer la locación, definir los detalles finales y comprender sus preferencias musicales. Nuestro objetivo es brindar un servicio adaptado a sus necesidades y asegurarnos de que cada aspecto sea perfecto para su evento.</p>


        </div>
        <div className='About-Content'>
          <h1>¿Por qué elegirnos?</h1>
          <p>
            Con más de 30 años de experiencia en eventos sociales y corporativos, nos posicionamos como el proveedor ideal de servicios de sonido e iluminación de alta calidad. Nuestro equipo técnico altamente experimentado y nuestras amplias opciones nos permiten ofrecerte un servicio personalizado que se adapte a tus necesidades específicas. Si buscas excelencia y profesionalismo en cada detalle, no busques más, ¡somos tu mejor elección!</p>
        </div>
      </div>
      <div id='Client-Div'>
         <h1>Quienes nos eligen</h1>
         
         <CarouselClient className="carousel-about"/>
         
      </div>
    </div>
     

    </>
  );
}

export { About };
