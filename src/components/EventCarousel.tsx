// src/components/EventCarousel.tsx
import triathlon1 from '../assets/images/triathlon1.jpg';
import triathlon2 from '../assets/images/triathlon2.jpg';
import triathlon3 from '../assets/images/triathlon3.jpg';
import triathlon4 from '../assets/images/triathlon4.jpg';

function EventCarousel() {
  return (
    <div id="eventCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#eventCarousel" data-bs-slide-to="0" className="active" aria-current="true"></button>
        <button type="button" data-bs-target="#eventCarousel" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#eventCarousel" data-bs-slide-to="2"></button>
        <button type="button" data-bs-target="#eventCarousel" data-bs-slide-to="3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={triathlon1} className="d-block w-100" alt="Triathlon" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Triathlon Challenge 2025</h5>
            <p>Desafie seus limites no maior evento de triathlon da região</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={triathlon2} className="d-block w-100" alt="Natação" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Etapa de Natação</h5>
            <p>1.5km em águas abertas no Lago das Três Ilhas</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={triathlon3} className="d-block w-100" alt="Ciclismo" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Etapa de Ciclismo</h5>
            <p>40km de paisagens deslumbrantes</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={triathlon4} className="d-block w-100" alt="Corrida" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Etapa da Corrida</h5>
            <p>10km de puro desafio</p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#eventCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#eventCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default EventCarousel;