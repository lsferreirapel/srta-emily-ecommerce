/* React imports */
import React from 'react';

/* APIs import */
import { FiCreditCard } from 'react-icons/fi';

/* Styles */
import { Container, LinkUtils, Payment, PaymentIcons, Copy } from './styles';

/* Payment Icons */
import AmericanExpress from '../../../assets/images/icons/payment/logo-american-express-1024.png';
import DinersClubInternational from '../../../assets/images/icons/payment/logo-diners-club-international-1024.png';
import MasterCard from '../../../assets/images/icons/payment/logo-mastercard-1024.png';
import Pagseguro from '../../../assets/images/icons/payment/logo-pagseguro-1024.png';
import Boleto from '../../../assets/images/icons/payment/logo-boleto.png';
import Hipercard from '../../../assets/images/icons/payment/logo-hipercard-1024.png';
import Visa from '../../../assets/images/icons/payment/logo-visa-1024.png';
import Elo from '../../../assets/images/icons/payment/logo-cartao-elo-1024.png';

const Information: React.FC = () => (
  <Container>
    <LinkUtils>
      <div>
        <h3>SOCIAL</h3>
        <a href="/">Facebook</a>
        <a href="/">Instagram</a>
        <a href="/">Twitter</a>
        <a href="/">Youtube</a>
      </div>
      <div>
        <h3>AJUDA</h3>
        <a href="/">Dúvidas Frequentes</a>
        <a href="/">Atendimento</a>
        <a href="/">Trocas e devoluções</a>
      </div>
      <div>
        <h3>LOCALIZAÇÃO</h3>
        <a href="/">Santa Rita 121/402 - Floresta 90220-220 Porto Alegre RS</a>
      </div>
      <div>
        <h3>POLÍTICAS</h3>
        <a href="/">Regulamentos</a>
        <a href="/">Política de Trocas</a>
        <a href="/">Política de Privacidade</a>
      </div>
      <div>
        <h3>CONTATO</h3>
        <button type="button">ENTRE EM CONTATO</button>
      </div>
    </LinkUtils>
    <div className="line" />
    <Payment>
      <h2>
        <FiCreditCard size={50} color="5b5b5f" />
        Formas de pagamento
      </h2>
      <PaymentIcons>
        <img src={AmericanExpress} alt="American Express flag" />
        <img
          src={DinersClubInternational}
          alt="Diners Club International flag"
          className="img-G"
        />
        <img src={MasterCard} alt="MasterCard flag" />
        <img src={Pagseguro} alt="Pagseguro flag" className="img-G" />
        <img src={Boleto} alt="Boleto flag" className="img-P" />
        <img src={Hipercard} alt="Hipercard flag" className="img-M" />
        <img src={Visa} alt="Visa flag" className="img-M" />
        <img src={Elo} alt="Elo flag" className="img-M" />
      </PaymentIcons>
    </Payment>
    <div className="line" />
    <Copy>
      <p>Contato : ola@srtaemily.com.br | CNPJ: 35799375/0001-48</p>
      <p>
        Copyright © Srta Emily Atelie de Costura - Todos os direitos reservados
      </p>
      <p>
        Desenvolvido por
        <a
          href="https://github.com/lsferreirapel"
          target="_blank"
          rel="noreferrer"
        >
          {' '}
          Lucas Ferreira
        </a>
      </p>
    </Copy>
  </Container>
);

export default Information;
