function InfoCards() {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Data do Evento</h5>
              <p className="card-text">16 de Outubro de 2025</p>
              <div className="progress">
                <div 
                  className="progress-bar progress-bar-striped progress-bar-animated" 
                  role="progressbar" 
                  style={{ width: '75%' }} 
                  aria-valuenow={75} 
                  aria-valuemin={0} 
                  aria-valuemax={100}>
                </div>
              </div>
              <p className="mt-2">Vagas preenchidas: 75%</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Localização</h5>
              <p className="card-text">Niterói - Rio de Janeiro</p>
              <button className="btn btn-primary" data-bs-toggle="offcanvas" data-bs-target="#mapCanvas">
                Ver Mapa
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Premiação</h5>
              <p className="card-text">R$ 12.000 em prêmios para os melhores colocados</p>
              <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#premiacaoModal">
                Detalhes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCards;