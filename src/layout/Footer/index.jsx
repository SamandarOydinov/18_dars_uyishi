import React from 'react';
import { FirstContent, FooterWrapper, SecondContent } from './Footer.styles';
import LogoSvg from '../../assets/images/logo.svg'
import PaymentLogos from '../../assets/images/payment-logos.png'
import VKLogoSvg from '../../assets/images/vk.svg'
import { Link } from 'react-router';

function Footer(props) {
    return (
        <FooterWrapper>
            <div className="container flex">
                <FirstContent>
                    <img className="logo" src={LogoSvg} alt='Logo Vector' />
                    <div className='info-side'>
                        <a className='phone-number' href="tel:88008904656">8 (800) 890-46-56</a>
                        <img className="payment-logos" src={PaymentLogos} alt='Logo Vector' />
                        <div className='confidential-links'>
                            <Link to="/">Политика конфидециальности</Link>
                            <Link to="/">Пользовательское соглашение</Link>
                        </div>
                        <div className='social-media-links'>
                            <Link to="/">
                                <img className='social-media-logo' src={VKLogoSvg} alt="VK logo" />
                            </Link>
                            <Link to="/">
                                <img className='social-media-logo' src={VKLogoSvg} alt="VK logo" />
                            </Link>
                            <Link to="/">
                                <img className='social-media-logo' src={VKLogoSvg} alt="VK logo" />
                            </Link>
                        </div>
                    </div>
                </FirstContent>
                <SecondContent>
                    <h3 className='footer-headline'>Покупателям</h3>
                    <div className='menu-items'>
                        <Link>О компании</Link>
                        <Link>Доставка и оплата</Link>
                        <Link>Возврат</Link>
                        <Link>Гарантии</Link>
                        <Link>Контакты</Link>
                        <Link>Блог</Link>
                    </div>
                </SecondContent>
                <SecondContent>
                    <h3 className='footer-headline'>Товары</h3>
                    <div className='menu-items menu-items-multiple'>
                        <Link to='/'>Люстры</Link>
                        <Link to='/'>Светильники</Link>
                        <Link to='/'>Бра</Link>
                        <Link to='/'>Торшеры</Link>
                        <Link to='/'>Комплектуюшие</Link>
                        <Link to='/'>Настольные лампы</Link>
                        <Link to='/'>Споты</Link>
                        <Link to='/'>Трековые светильники</Link>
                        <Link to='/'>Уличные светильники</Link>
                        <Link to='/'>Технические светильники</Link>
                        <Link to='/'>Светодиодные ленты</Link>
                    </div>
                </SecondContent>
            </div>
        </FooterWrapper>
    );
}

export default Footer;