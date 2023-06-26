import React from 'react'
import "./pages.css"
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import  Button  from 'react-bootstrap/Button';
import {AiOutlineMail} from "react-icons/ai"
import { About } from './About';
import { ImageGallery,PageFooter } from '../components';


const Home = () => {
  return (
    <>
      <div className='home-container'>
        <Card className="card-home">

          <Card.Body>
            <Card.Text>
              <p>DJ´S ESPECIALIZADOS EN ENVENTOS SOCIALES Y COORPORATIVOS</p>
            </Card.Text>
            <Card.Title style={{ fontSize: "3.5rem" }}>DJ´S +SOLUCIONES PARA EVENTOS</Card.Title>

          </Card.Body>
          <ListGroup className="list-group-flush" style={{margin:"20px"}}>
            <h4>Servicios Audiovisuales profesionales de alta calidad
              para una amplia variedad de eventos.</h4>

          </ListGroup>
          <Card.Body style={{ marginRight: "10px"}}>
            <Button className='Button-Card'> Nosotros</Button>
            <Button className='Button-Contact'>Contacto 
            <span style={{margin:"5px"}}><AiOutlineMail/></span>   
             
            </Button>
            
          
          </Card.Body>
        </Card>
      </div>

      <div>
       <About/>
      </div>
      <div className='container'>
        
      <ImageGallery/>
      </div>
     <footer>
     <PageFooter/>
     </footer>

  

    </>
  )
}

export { Home }
