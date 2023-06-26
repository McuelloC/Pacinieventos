import React from 'react';
import "./pagefooter.css";
import PaciniLogo from "../../assets/images/PaciniEntero.png";

const PageFooter = () => {
  return (
    <div className='div-PageFooter' id='div-PageFooter'>
      <div className='col-6' id='leftdiv-PageFooter'>
        <img src={PaciniLogo} alt="PaciniLogo" id='PaciniLogoFooter' />
      </div>
      <div className='col-6' id='rightdiv-PageFooter'>
        <div className='Links-DIV'>
          <h4>Menu</h4>
          <li>Contacto</li>
          <li>Home</li>
          <li>About</li>
        </div>
        <div className="Social-DIV">
          <i class="bi bi-facebook" id='LogoRedSocial'></i>

          <i class="bi bi-instagram" id='LogoRedSocial'></i>
        </div>
        <div className='Contact-DIV'>
          <i class="bi bi-envelope-at" id='contact' >  DJALEJANDROPACINI@GMAIL.COM</i>
          <br></br>
          <i class="bi bi-telephone-fill" id='contact' > 11 6286 - 9812</i>
        </div>
      </div>
    </div>
  );
}

export { PageFooter };
