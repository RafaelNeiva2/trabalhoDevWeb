import sapatilhaImg from '../assets/images/sapatilha.jpg';
import bicicletaImg from '../assets/images/bicicleta.jpg';
import relogioImg from '../assets/images/relogio.jpg';

const produtos = [
  {
    id: 1,
    nome: 'Sapatilha de Corrida Profissional',
    preco: 799.90,
    imagem: sapatilhaImg,
    descricao: 'Leveza e performance para a etapa de corrida.',
  },
  {
    id: 2,
    nome: 'Bicicleta de Triathlon Aerodinâmica',
    preco: 14500.00,
    imagem: bicicletaImg,
    descricao: 'Quadro de carbono para máxima velocidade e eficiência.',
  },
  {
    id: 3,
    nome: 'Relógio GPS Multiesporte',
    preco: 2100.50,
    imagem: relogioImg,
    descricao: 'Monitore natação, ciclismo e corrida com precisão.',
  },

];

function LojaPage() {
  return (
    <div className="container" style={{ paddingTop: '100px', paddingBottom: '50px' }}>
      <div className="row mb-4">
        <div className="col text-center">
          <h1>Loja Oficial</h1>
          <p className="lead">Equipamentos e acessórios para o atleta de triathlon</p>
        </div>
      </div>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {produtos.map(produto => (
          <div className="col" key={produto.id}>
            <div className="card h-100 shadow-sm">
              <img src={produto.imagem} className="card-img-top" alt={produto.nome} style={{ height: '300px', objectFit: 'cover' }} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{produto.nome}</h5>
                <p className="card-text text-muted">{produto.descricao}</p>
                <h4 className="card-text mt-auto">R$ {produto.preco.toFixed(2).replace('.', ',')}</h4>
                <div className="d-grid mt-2">
                  <button className="btn btn-primary">
                    <i className="bi bi-cart-plus me-2"></i>
                    Adicionar ao Carrinho
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LojaPage;