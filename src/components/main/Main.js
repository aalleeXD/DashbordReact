import Chart from '../charts/Chart';
import'./Main.css';

const Main =() => {
    return(
        <Main>
            <div className="main__container">
                <div className="main__title">
                    
                    <div className="main__greeting">
                        <h1>Ola alexandre</h1>
                        <p>Bem vindo ao seu primeiro painel</p>
                    </div>
                </div>

                <div className="main__cards">
                    <div className="cards">
                        <i className="fa fa-file-text fa-2x text-lightblue"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Numero de pedidos</p>
                            <span className="font-bold text-title">578</span>
                        </div>
                    </div>

                    <div className="card">
                        <i className="fa fa-money fa-2x text-red"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">pagamentos</p>
                            <span className="font-bold text-title">R$2.467</span>
                    </div>
                  </div>

                  <div className="card">
                    <div className="cards">
                        <i className="fa fa-bars fa-2x text-green"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">categorias</p>
                            <span className="font-bold text-title">40</span>
                        </div>
                    </div>

                    <div className="charts">
                        <div className="charts__left">
                            <div className="charts__left__title">
                            </div>
                            <h1>Daily Reports</h1>
                            <p>Ubatuba, Sao Paulo, Br</p>
                        </div>
                        <i className="fa fa-usd"></i>
                    </div>
                    <chart/>

                </div>
                <div className="charts_rigth">
                        <div className="charts__right">
                            <div className="charts__left__title">
                            </div>
                            <h1>Daily Reports</h1>
                            <p>Ubatuba, Sao Paulo, Br</p>
                        </div>
                        <i className="fa fa-chart"></i>
                        </div>
                    <div className="charts__right__cards">
                        <div className="card1">
                            <h1>Lucro</h1>
                            <p>R$2500</p>
                        </div>

                        <div className="card2">
                            <h1>Pagamento</h1>
                            <p>R$250</p>
                        </div>

                        <div className="card3">
                            <h1>Custo de hospedagem</h1>
                            <p>R$150</p>
                        </div>

                        <div className="card4">
                            <h1>Banco de dados</h1>
                            <p>R$180,00</p>
                        </div>
                    </div>
                </div>
            </div>
        </Main>
    )
}
export default Main;

