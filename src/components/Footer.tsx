import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-dark text-white mt-5 py-4">
        <div className="container">
            <div className="row">
                <div className="col-md-4 mb-3">
                    <h5>Triathlon Challenge</h5>
                    <p>O maior evento de triathlon da região, promovendo esporte, saúde e superação desde 2010.</p>
                </div>
                <div className="col-md-4 mb-3">
                    <h5>Links Rápidos</h5>
                    <ul className="list-unstyled">
                        <li><Link to="/" className="text-white">Home</Link></li>
                        <li><Link to="/inscricoes" className="text-white">Inscrições</Link></li>
                        <li><Link to="/percurso" className="text-white">Percurso</Link></li>
                        <li><Link to="/contato" className="text-white">Contato</Link></li>
                    </ul>
                </div>
                <div className="col-md-4 mb-3">
                    <h5>Newsletter</h5>
                    <form className="mb-2">
                        <div className="input-group">
                            <input type="email" className="form-control" placeholder="Seu e-mail" />
                            <button className="btn btn-primary" type="button">Assinar</button>
                        </div>
                    </form>
                    <small>Receba novidades sobre o evento</small>
                </div>
            </div>
            <hr />
            <div className="text-center">
                <p className="mb-0">© 2025 Triathlon Challenge. Todos os direitos reservados.</p>
            </div>
        </div>
    </footer>
  );
}

export default Footer;