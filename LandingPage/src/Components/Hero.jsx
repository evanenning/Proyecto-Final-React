import React from 'react'
import './Hero.css';

const handleButtonClick = () => {
  const targetSection = document.getElementById('nosotros');
  if (targetSection) {
    window.scrollTo({
      top: targetSection.offsetTop,
      behavior: 'smooth', 
    });
  }
}; 

const handleUrgentContactClick = () => {
  // Abrir la URL en una nueva pestaña
  window.open('https://www.argentina.gob.ar/andis/lineas-de-acompanamiento-apoyo-y-orientacion-en-salud-mental-en-contextos-de-cuarentena#:~:text=Acompa%C3%B1amiento%2C%20asistencia%20y%20contenci%C3%B3n%20psicol%C3%B3gica,Guardia%2024%20horas.');
};


function Hero() {
  return (
  
      <div class="conteiner">
        <p class="SectionTitle">Podemos ayudarte</p>
        <p class="SectionSubtitle">Contamos con una amplia red de especialistas</p>
       <div class="buttons">
          <button class="btn1" onClick={handleButtonClick} >Mas información</button>
          <button class="btnAlert" onClick={handleUrgentContactClick}>Contacto urgente</button>
        </div>


    <div id="nosotros">
      <div class="card">
          <h1>Nosotros</h1> 
           <p>En nuestra asociación, creemos en el poder de la psicología para transformar vidas.
      Nos enorgullece ofrecer un servicio de apoyo y orientación psicológica completamente gratuito, 
      comprometidos a brindar ayuda a aquellos que buscan comprensión, alivio y crecimiento personal. </p>

           <h3>¿Quiénes somos?</h3>
            <p>Somos un grupo apasionado de psicólogos comprometidos con la misión de hacer que la 
              ayuda psicológica sea accesible para todos. Creemos que la salud mental es un derecho fundamental, y trabajamos 
              incansablemente para ofrecer un espacio seguro y acogedor para aquellos que buscan apoyo emocional.</p>

            <h1>Nuestros Servicios:</h1>

            <h3>Asesoramiento Individual:</h3>
            <p>Ofrecemos sesiones individuales con psicólogos capacitados 
              para abordar una variedad de desafíos emocionales y de vida.</p>

              <h3>Grupos de Apoyo:</h3>

              <p>Facilitamos grupos de apoyo donde los participantes pueden compartir experiencias, recibir apoyo mutuo y aprender estrategias para afrontar el estrés y la ansiedad. </p>
              <h3>Recursos Educativos:</h3>

              <p>Proporcionamos recursos educativos y materiales informativos para promover la comprensión de la salud mental y fomentar prácticas saludables.</p>

              <h3>¿Cómo Puedes Participar?</h3>

              <p>Si estás buscando apoyo emocional, no dudes en contactarnos para programar una sesión gratuita con uno de nuestros psicólogos. </p>

              <p>Ayúdanos a llegar a aquellos que puedan necesitar nuestros servicios. Comparte nuestra asociación y los recursos disponibles en tus redes sociales. </p>

             <p>En nuestra asociación, creemos que todos merecen apoyo y comprensión. Estamos aquí para caminar contigo en tu viaje hacia el bienestar emocional. ¡Únete a nosotros y descubre el poder de la psicología para transformar vidas! </p>

              <p>Para obtener más información o para solicitar una sesión, visita nuestro sitio web o contáctanos directamente. ¡Estamos aquí para ti!</p>         
            </div>
      </div>

      <div id="contacto">
        <div class="card2">
          <h1>Contacto</h1>
          <p>Telefono: 0800 - 3333   
          Mail: soportepsi@help.com</p>

        </div>
</div>








      </div>
               
     
   
  )
}


export default Hero;
