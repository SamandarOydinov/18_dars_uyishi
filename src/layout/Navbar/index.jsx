import React from 'react';
import {
    NavbarWrapper,
    TopInfoWrapper,
    NavbarContentWrapper,
    MenuItems,
    ContactsWrapper,
    MobNavbarWrapper,
} from './Navbar.styles';
import { Link } from 'react-router';
import LogoSvg from '@/assets/images/logo.svg';
import { Button, Input } from '@/components';
import { CartIcon, HeartIcon, NetworkIcon, MenuTogglerIcon, TogglerIcon } from '@/assets/icons';

function Navbar() {
    return (
        <>
            <NavbarWrapper className='container'>
                <TopInfoWrapper>
                    <MenuItems>
                        <Link to="/" className='link'>О компании</Link>
                        <Link className='link'>Доставка и оплата</Link>
                        <Link className='link'>Возврат</Link>
                        <Link className='link'>Гарантии</Link>
                        <Link className='link'>Контакты</Link>
                        <Link className='link'>Блог</Link>
                    </MenuItems>
                    <ContactsWrapper>
                        <a href='tel:88008904656'>8 (800) 890-46-56</a>
                        <button>Заказать звонок</button>
                    </ContactsWrapper>
                </TopInfoWrapper>
                <NavbarContentWrapper>
                    <Link to='/'>
                        <img className='logo' src={LogoSvg} alt="Logo" />
                    </Link>
                    <div className='mid-wrapper'>
                        <Button>
                            <TogglerIcon /> Каталог
                        </Button>
                        <Input type="search" placeholder="Поиск по товарам" />
                    </div>
                    <div className='action-bar'>
                        <div>
                            <HeartIcon />
                            <p>Избранное</p>
                        </div>
                        <div>
                            <NetworkIcon />
                            <p>Сравнение</p>
                        </div>
                        <div>
                            <CartIcon />
                            <p>Корзина</p>
                        </div>
                    </div>
                </NavbarContentWrapper>
            </NavbarWrapper>
            <MobNavbarWrapper>
                <div className="navbar-content">
                    <div className='logo-menu-toggler'>
                        <MenuTogglerIcon />
                        <Link to='/'>
                            <img src={LogoSvg} alt="Logo" />
                        </Link>
                    </div>
                    <div className='actions-side'>
                        <Link to="/">
                            <HeartIcon />
                        </Link>
                        <Link to="/">
                            <CartIcon />
                        </Link>
                    </div>
                </div>
                <Input type="search" placeholder="Поиск по товарам" />
            </MobNavbarWrapper>
        </>
    );
}

export default Navbar;