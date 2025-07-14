// src/pages/InscricoesPage.tsx

import React, { useState } from 'react';

function InscricoesPage() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    cpf: '',
    telefone: '',
    fxetaria: '',
    categoria: '',
    modalidade: 'completo',
    kit: 'basic',
    tamanhoCamiseta: '',
    termos: false,
  });

  
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value, type } = e.target;
    
    if (type === 'checkbox' && e.target instanceof HTMLInputElement) {
        setFormData(prev => ({ ...prev, [id]: e.target }));
    } else {
        setFormData(prev => ({ ...prev, [id]: value }));
    }
  };

  
  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setShowAlert(false);

    
    setTimeout(() => {
      setIsLoading(false);
      setShowAlert(true);
      console.log('Dados do formulário:', formData);
      
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 2000);
  };

  return (
    <>
      <div className="container" style={{ paddingTop: '100px', paddingBottom: '50px' }}>
        <h1 className="text-center mb-4">Inscrições</h1>

        {showAlert && (
          <div className="alert alert-success alert-dismissible fade show" role="alert">
            <strong>Inscrição realizada com sucesso!</strong> Em breve enviaremos os detalhes para seu e-mail.
            <button type="button" className="btn-close" onClick={() => setShowAlert(false)} aria-label="Close"></button>
          </div>
        )}

        <div className="row justify-content-center">
          <div className="col-lg-8 mb-4">
            <div className="card shadow">
              <div className="card-header bg-primary text-white">
                <h4>Formulário de Inscrição</h4>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="row mb-4">
                        <div className="col-md-6">
                            <label htmlFor="nome" className="form-label">Nome Completo</label>
                            <input type="text" className="form-control" id="nome" required onChange={handleChange} value={formData.nome}/>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="email" className="form-label">E-mail</label>
                            <input type="email" className="form-control" id="email" required onChange={handleChange} value={formData.email}/>
                        </div>
                    </div>
                    
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label htmlFor="cpf" className="form-label">CPF</label>
                            <input type="text" className="form-control" id="cpf" required onChange={handleChange} value={formData.cpf}/>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="telefone" className="form-label">Telefone</label>
                            <input type="tel" className="form-control" id="telefone" required onChange={handleChange} value={formData.telefone}/>
                        </div>
                    </div>
                    
                    <div className="mb-3">
                        <label htmlFor="fxetaria" className="form-label">Faixa Etária</label>
                        <select className="form-select" id="fxetaria" required onChange={handleChange} value={formData.fxetaria}>
                            <option value="" disabled>Selecione sua faixa etária</option>
                            <option value="18-24">18-24</option>
                            <option value="25-30">25-30</option>
                            <option value="30-39">30-39</option>
                            <option value="40-49">40-49</option>
                            <option value="50-59">50-59</option>
                            <option value="60-69">60-69</option>
                            <option value="70+">70+</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="categoria" className="form-label">Categoria</label>
                        <select className="form-select" id="categoria" required onChange={handleChange} value={formData.categoria}>
                            <option value="" disabled>Selecione sua categoria</option>
                            <option value="profissional">Profissional</option>
                            <option value="amador">Amador</option>
                            <option value="iniciante">Iniciante</option>
                        </select>
                    </div>
                    
                    <div className="mb-3">
                        <label className="form-label">Modalidade</label>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="modalidade" id="completo" value="completo" checked={formData.modalidade === 'completo'} onChange={handleRadioChange}/>
                            <label className="form-check-label" htmlFor="completo">
                               Standard Solo (1.5km natação + 40km ciclismo + 10km corrida)
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="modalidade" id="revezamento" value="revezamento" checked={formData.modalidade === 'revezamento'} onChange={handleRadioChange}/>
                            <label className="form-check-label" htmlFor="revezamento">
                                Standard Revezamento - 3 pessoas (1.5km natação + 40km ciclismo + 10km corrida)
                            </label>
                        </div>
                    </div>
                    
                    <div className="mb-3">
                        <label className="form-label">Kit</label>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="kit" id="kit-basic" value="basic" checked={formData.kit === 'basic'} onChange={handleRadioChange} />
                            <label className="form-check-label" htmlFor="kit-basic">
                                Kit BASIC (camisa + toca de natação) - R$ 429,90
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="kit" id="kit-basicplus" value="basicplus" checked={formData.kit === 'basicplus'} onChange={handleRadioChange} />
                            <label className="form-check-label" htmlFor="kit-basicplus">
                                Kit BASIC+ (camisa + toca de natação + viseira) - R$ 499,90
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="kit" id="kit-plus" value="plus" checked={formData.kit === 'plus'} onChange={handleRadioChange} />
                            <label className="form-check-label" htmlFor="kit-plus">
                                Kit PLUS (camisa + toca de natação + viseira + garrafinha + sacochila) - R$ 519,90
                            </label>
                        </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="tamanhoCamiseta" className="form-label">Tamanho da Camiseta</label>
                        <select className="form-select" id="tamanhoCamiseta" required onChange={handleChange} value={formData.tamanhoCamiseta}>
                            <option value="" disabled>Selecione o tamanho</option>
                            <option value="P">P</option>
                            <option value="M">M</option>
                            <option value="G">G</option>
                            <option value="GG">GG</option>
                        </select>
                    </div>
                    
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="termos" required onChange={handleChange} checked={formData.termos} />
                        <label className="form-check-label" htmlFor="termos">
                          Li e concordo com os <a href="#" data-bs-toggle="modal" data-bs-target="#termosModal">termos e condições</a>
                        </label>
                    </div>
                  
                    <div className="d-grid gap-2">
                        <button type="submit" className="btn btn-primary btn-lg" disabled={isLoading}>
                        {isLoading && <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>}
                        {isLoading ? 'Enviando...' : 'Finalizar Inscrição'}
                        </button>
                    </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de Termos */}
      <div className="modal fade" id="termosModal" tabIndex={-1} aria-labelledby="termosModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="termosModalLabel">Termos e Condições</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="accordion" id="termosAccordion">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#termo1" aria-expanded="true" aria-controls="termo1">
                      Responsabilidade do Atleta
                    </button>
                  </h2>
                  <div id="termo1" className="accordion-collapse collapse show" data-bs-parent="#termosAccordion">
                    <div className="accordion-body">
                      <p>O atleta declara estar em boas condições de saúde e apto a participar do evento. É de total responsabilidade do atleta a realização de exames médicos que atestem sua aptidão para a prática de atividades físicas intensas.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#termo2" aria-expanded="false" aria-controls="termo2">
                      Política de Cancelamento
                    </button>
                  </h2>
                  <div id="termo2" className="accordion-collapse collapse" data-bs-parent="#termosAccordion">
                    <div className="accordion-body">
                      <p>Cancelamentos até 30 dias antes do evento terão 80% do valor devolvido. Entre 30 e 15 dias antes, 50% do valor será devolvido. Cancelamentos com menos de 15 dias de antecedência não terão direito a reembolso.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#termo3" aria-expanded="false" aria-controls="termo3">
                      Uso de Imagem
                    </button>
                  </h2>
                  <div id="termo3" className="accordion-collapse collapse" data-bs-parent="#termosAccordion">
                    <div className="accordion-body">
                      <p>O atleta autoriza o uso de sua imagem em fotos, vídeos e outras mídias captadas durante o evento para fins promocionais e de divulgação, sem qualquer ônus para a organização.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InscricoesPage;