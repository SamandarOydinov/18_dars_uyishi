import styled from 'styled-components'
import { colors } from '../../styles/theme';

export const NavbarWrapper = styled.div`
    margin-bottom: 65px;

    @media (max-width: 768px) {
        display: none;
    }
`;

export const TopInfoWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 12px auto 20px auto;
`;

export const MenuItems = styled.div`
    display: flex;
    gap: 27px;

    & .link {
        text-decoration: none;
        font-size: 14px;
        font-weight: 600;
        color: ${colors.main}50;
    }
`;

export const ContactsWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;

    & > a {
        text-decoration: none;
        font-size: 14px;
        font-weight: 600;
        color: ${colors.main};
    }

    & > button {
        text-decoration: none;
        font-size: 14px;
        font-weight: 600;
        color: ${colors.main}50;
        cursor: pointer;
        background-color: transparent;
        border: none;
    }
`;

export const NavbarContentWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;

    .logo {
        width: 210px;
        height: 35px;
    }

    .mid-wrapper {
        width: 100%;
        display: flex;
        gap: 12px;
    }

    .action-bar {
        display: flex;
        align-items: center;
        gap: 30px;

        & > div {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 6px;
        }
    }
`;

export const MobNavbarWrapper = styled.div`
    padding: 10px 16px;
    display: none;

    @media (max-width: 768px) {
        display: block;
    }

    .navbar-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 20px;

        .logo-menu-toggler {
            display: flex;
            align-items: center;
            gap: 20px;
        }

        .actions-side {
            display: flex;
            align-items: center;
            gap: 26px;
        }
    }
`;