// src/pages/ContatoPage.tsx
import React, { useState } from 'react';

function ContatoPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitted(true);

    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
   
    e.currentTarget.reset();
  };

  return (
    <>
      <div className="container" style={{ paddingTop: '100px' }}>
        <h1 className="text-center mb-4">Contato</h1>
        
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="contact-info h-100">
              <h3 className="mb-4">Informações de Contato</h3>
              
              <div className="d-flex align-items-start mb-3">
                <div className="me-3"><i className="bi bi-geo-alt-fill social-icon"></i></div>
                <div>
                  <h5>Endereço</h5>
                  <p>Rua Otavio Carneiro, 1234<br />Icaraí<br />CEP 11500-000</p>
                </div>
              </div>
              
              <div className="d-flex align-items-start mb-3">
                <div className="me-3"><i className="bi bi-telephone-fill social-icon"></i></div>
                <div>
                  <h5>Telefone</h5>
                  <p>(21) 1234-5678<br />(21) 98765-4321 (WhatsApp)</p>
                </div>
              </div>
              
              <div className="d-flex align-items-start mb-3">
                <div className="me-3"><i className="bi bi-envelope-fill social-icon"></i></div>
                <div>
                  <h5>E-mail</h5>
                  <p>contato@triathlonchallenge.com.br</p>
                </div>
              </div>
              
              <div className="d-flex align-items-start">
                <div className="me-3"><i className="bi bi-clock-fill social-icon"></i></div>
                <div>
                  <h5>Horário de Atendimento</h5>
                  <p>Segunda a Sexta: 9h às 18h<br />Sábado: 9h às 13h</p>
                </div>
              </div>
              
              <hr />
              
              <h5 className="mt-4">Redes Sociais</h5>
              <div className="d-flex">
                <a href="#" className="text-decoration-none me-3"><i className="bi bi-facebook social-icon"></i></a>
                <a href="#" className="text-decoration-none me-3"><i className="bi bi-instagram social-icon"></i></a>
                <a href="#" className="text-decoration-none me-3"><i className="bi bi-youtube social-icon"></i></a>
                <a href="#" className="text-decoration-none"><i className="bi bi-twitter social-icon"></i></a>
              </div>
            </div>
          </div>
          
          
          <div className="col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-header bg-primary text-white"><h4>Envie sua Dúvida</h4></div>
              <div className="card-body">
                <form onSubmit={handleContactSubmit}>
                  <div className="mb-3">
                    <label htmlFor="nomeContato" className="form-label">Nome</label>
                    <input type="text" className="form-control" id="nomeContato" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="emailContato" className="form-label">E-mail</label>
                    <input type="email" className="form-control" id="emailContato" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="assunto" className="form-label">Assunto</label>
                    <select className="form-select" id="assunto" required>
                      <option value="" disabled>Selecione um assunto</option>
                      <option value="inscricao">Inscrição</option>
                      <option value="percurso">Percurso</option>
                      <option value="patrocinio">Patrocínio</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="mensagem" className="form-label">Mensagem</label>
                    <textarea className="form-control" id="mensagem" rows={5} required></textarea>
                  </div>
                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary">Enviar Mensagem</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        
        <div className="row mt-4">
            <div className="col-12">
                <div className="card">
                    <div className="card-header bg-primary text-white">
                        <h4>Dúvidas Frequentes e Mensagens</h4>
                    </div>
                    <div className="card-body">
                        <div className="mb-4">
                            <h5>Dúvidas Frequentes</h5>
                            <div className="accordion" id="faqAccordion">
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                                            Qual o equipamento necessário para a prova?
                                        </button>
                                    </h2>
                                    <div id="faq1" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body">
                                            Para a natação: touca e óculos. Ciclismo: bicicleta em boas condições e capacete. Corrida: tênis apropriado.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                                            Posso transferir minha inscrição?
                                        </button>
                                    </h2>
                                    <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body">
                                            Sim, é possível transferir até 15 dias antes da prova mediante taxa administrativa.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <h5 className="mb-3">Últimas Mensagens da Comunidade</h5>
                        
                        <div className="message-box">
                            <div className="d-flex justify-content-between mb-2">
                                <span className="message-author">Carlos Silva</span>
                                <span className="message-date">15/05/2025</span>
                            </div>
                            <p>Alguém sabe se haverá estacionamento para bicicletas no local?</p>
                        </div>
                        <div className="message-box">
                            <div className="d-flex justify-content-between mb-2">
                                <span className="message-author">Organização</span>
                                <span className="message-date">16/05/2025</span>
                            </div>
                            <p>Sim, teremos um bicicletário vigiado durante todo o evento.</p>
                        </div>
                        <div className="message-box">
                            <div className="d-flex justify-content-between mb-2">
                                <span className="message-author">Ana Paula</span>
                                <span className="message-date">10/05/2025</span>
                            </div>
                            <p>Qual o horário de abertura do credenciamento?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Mapa */}
        <div className="row mt-4">
          <div className="col-12">
            <div className="card">
              <div className="card-header bg-primary text-white">
                <h4>Localização</h4>
              </div>
              <div className="card-body p-0">
                <div className="ratio ratio-16x9">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.188330157013!2d-43.13490868503433!3d-22.906479785012236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99817e452968ed%3A0x9e6c214d49a21e7a!2sPraia%20de%20Icara%C3%AD!5e0!3m2!1spt-BR!2sbr!4v1673890351234!5m2!1spt-BR!2sbr" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Toast de sucesso*/}
      {formSubmitted && (
        <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 11 }}>
          <div className="toast show align-items-center text-white bg-success border-0" role="alert" aria-live="assertive" aria-atomic="true">
            <div className="d-flex">
              <div className="toast-body">
                Mensagem enviada com sucesso! Responderemos em breve.
              </div>
              <button type="button" className="btn-close btn-close-white me-2 m-auto" onClick={() => setFormSubmitted(false)}></button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ContatoPage;