/* React imports */
import React from 'react';

/* Styles */
import { Container, SendOffers, SocialShare, Icons, EmailForm } from './styles';

/* Assets */
import circleLogo from '../../assets/images/logos/srt-emily-circle-logo.png';
import facebookIcon from '../../assets/images/icons/social/049-facebook.svg';
import instagramIcon from '../../assets/images/icons/social/060-instagram.svg';
import twitterIcon from '../../assets/images/icons/social/027-twitter.svg';
import youtubeIcon from '../../assets/images/icons/social/038-youtube.svg';

const NewsLetter: React.FC = () => (
  <Container>
    <SendOffers>
      <h2>
        Receba nossas <strong>OFERTAS!</strong>
      </h2>
      <p>veja mais informações</p>
      <EmailForm>
        <input type="email" placeholder="Digite seu e-mail" />
        <button type="button">Enviar</button>
      </EmailForm>
    </SendOffers>

    <img src={circleLogo} alt="Logo" />

    <SocialShare>
      <h3>Aproveite e compartilhe a srta. Emily nas Redes Sociais</h3>
      <Icons>
        <img src={facebookIcon} alt="Facebook icon" />
        <img src={instagramIcon} alt="Instagram icon" />
        <img src={twitterIcon} alt="Twitter icon" />
        <img src={youtubeIcon} alt="Youtube icon" />
      </Icons>
      <p>
        Ícones feitos por Freepik from www.flaticon.com link:
        https://www.flaticon.com/br/autores/freepik
      </p>
    </SocialShare>
  </Container>
);

export default NewsLetter;
