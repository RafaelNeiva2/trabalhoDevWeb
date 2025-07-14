// src/pages/PercursoPage.tsx
import  { useEffect, useRef } from 'react';
import * as bootstrap from 'bootstrap';

function PercursoPage() {
  const popoverRef = useRef(null);

  useEffect(() => {
    if (popoverRef.current) {
      new bootstrap.Popover(popoverRef.current);
    }
  }, []); 

  return (
    <div className="container" style={{ paddingTop: '100px' }}>
      <h1 className="text-center mb-4">Percurso do Triathlon</h1>

      {/* Tabs de Navegação */}
      <ul className="nav nav-tabs mb-4" id="percursoTabs" role="tablist">
        <li className="nav-item" role="presentation">
            <button className="nav-link active" id="natacao-tab" data-bs-toggle="tab" data-bs-target="#natacao" type="button" role="tab">
                Natação (1.5km)
            </button>
        </li>
        <li className="nav-item" role="presentation">
            <button className="nav-link" id="ciclismo-tab" data-bs-toggle="tab" data-bs-target="#ciclismo" type="button" role="tab">
                Ciclismo (40km)
            </button>
        </li>
        <li className="nav-item" role="presentation">
            <button className="nav-link" id="corrida-tab" data-bs-toggle="tab" data-bs-target="#corrida" type="button" role="tab">
                Corrida (10km)
            </button>
        </li>
      </ul>
      
      {/* Conteúdo das Tabs */}
      <div className="tab-content" id="percursoTabsContent">
        <div className="tab-pane fade show active" id="natacao" role="tabpanel">
            <div className="row">
                <div className="col-md-6">
                    <div className="etapa">
                        <h3>Etapa de Natação</h3>
                        <p><strong>Distância:</strong> 1.5km em águas abertas</p>
                        <p><strong>Local:</strong> Praia de Icaraí</p>
                        <p><strong>Temperatura da água:</strong> ~22°C (prevista)</p>
                        <p><strong>Trajeto:</strong> Percurso triangular marcado por boias</p>
                        
                        <h5 className="mt-4">Dicas de Segurança</h5>
                        <ul>
                            <li>Uso de touca de natação obrigatório (fornecida pela organização)</li>
                            <li>Colete salva-vidas opcional (disponível para retirada)</li>
                            <li>Área demarcada com barcos de apoio e salva-vidas</li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="map-container mb-4">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.218524623154!2d-43.12558568503449!3d-22.90535298501238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9981e136315fab%3A0x2967639a68676646!2sPraia%20de%20Icara%C3%AD!5e0!3m2!1spt-BR!2sbr!4v1677614214227!5m2!1spt-BR!2sbr" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="card mb-3">
                        <div className="card-body">
                            <h5 className="card-title">Vídeo do Percurso</h5>
                            <div className="placeholder-glow">
                                <div className="placeholder col-12" style={{ height: '150px' }}></div>
                                <span className="placeholder col-6"></span>
                                <span className="placeholder col-4"></span>
                            </div>
                            <p className="text-muted mt-2">Vídeo demonstrativo será disponibilizado em breve</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="tab-pane fade" id="ciclismo" role="tabpanel">
            <div className="row">
                <div className="col-md-6">
                    <div className="etapa">
                        <h3>Etapa de Ciclismo</h3>
                        <p><strong>Distância:</strong> 40km</p>
                        <p><strong>Tipo de terreno:</strong> Asfalto (90%), Estrada de terra (10%)</p>
                        <p><strong>Altitude:</strong> Variação de 200m</p>
                        <p><strong>Postos de apoio:</strong> 3 postos (km 10, km 25, km 35)</p>
                        
                        <h5 className="mt-4">Requisitos de Equipamento</h5>
                        <ul>
                            <li>Capacete obrigatório</li>
                            <li>Bicicleta em boas condições mecânicas</li>
                            <li>Número de peito e da bike visíveis</li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="map-container mb-4">
                         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117599.3559385312!2d-43.20509464335938!3d-22.90943399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9981e09a06c559%3A0x7d142a72b4f9828c!2sParque%20da%20Cidade%2C%20Niter%C3%B3i%20-%20RJ!5e0!3m2!1spt-BR!2sbr!4v1677614352189!5m2!1spt-BR!2sbr" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <button ref={popoverRef} type="button" className="btn btn-secondary" data-bs-toggle="popover" data-bs-placement="top" title="Dica Rápida" data-bs-content="O percurso de ciclismo passa por áreas rurais com belas paisagens. Atenção às curvas fechadas entre os km 15 e 20.">
                        Dica sobre o percurso
                    </button>
                </div>
            </div>
        </div>
        
        <div className="tab-pane fade" id="corrida" role="tabpanel">
            <div className="row">
                <div className="col-md-6">
                    <div className="etapa">
                        <h3>Etapa de Corrida</h3>
                        <p><strong>Distância:</strong> 10km</p>
                        <p><strong>Tipo de terreno:</strong> Asfalto (70%), Trilha (30%)</p>
                        <p><strong>Postos de hidratação:</strong> A cada 2.5km</p>
                        <p><strong>Altitude:</strong> Variação de 100m</p>
                        
                        <h5 className="mt-4">Pontos de Destaque</h5>
                        <ul>
                            <li>Início no Parque da Cidade</li>
                            <li>Trecho final na orla de São Francisco com vista panorâmica</li>
                            <li>Chegada na Praia de Icaraí</li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="map-container mb-4">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14700.89319859207!2d-43.10286804334717!3d-22.905148000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9981e749767889%3A0x86c24f52e3995f5!2sPraia%20de%20S%C3%A3o%20Francisco%2C%20Niter%C3%B3i%20-%20RJ!5e0!3m2!1spt-BR!2sbr!4v1677614401567!5m2!1spt-BR!2sbr" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="card">
                        <div className="card-body text-center">
                            <h5 className="card-title">Elevação do Percurso</h5>
                            <div className="spinner-border text-primary" role="status">
                                <span className="visually-hidden">Carregando...</span>
                            </div>
                            <p className="mt-2">Gerando gráfico de elevação...</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
}

export default PercursoPage;