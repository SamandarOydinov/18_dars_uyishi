import styled from 'styled-components'
import { colors } from '../../styles/theme';

export const FooterWrapper = styled.div`
    background-color: ${colors.light};
    padding: 80px 0 75px 0;

    .flex {
        display: flex;
        width: 100%;
    }
`;

export const FirstContent = styled.div`
    width: 100%;

    .info-side {
        display: flex;
        flex-direction: column;
        gap: 35px;

        .phone-number {
            font-size: 24px;
            font-weight: 600;
            color: ${colors.main};
            text-decoration: none;
        }

        .confidential-links {
            display: flex;
            flex-direction: column;
            gap: 30px;

            & > * {
                font-size: 16px;
                    font-weight:600;
                    color: ${colors.main}50;
            }
        }

        .social-media-links {
            display: flex;
            gap: 12px;
            
            .social-media-logo {
                height: 36px;
                width: 36px;
            }
        }

    }

    .logo {
        width: 286px;
        height: 48px;
        margin-bottom: 50px;
    }

    .payment-logos {
        width: 222px;
        height: 40px;
    }
`;

export const SecondContent= styled.div`
    width: 100%;

    .footer-headline {
        font-size: 24px;
        font-weight: 700;
        margin-bottom: 32px;
    }

    .menu-items {
        display: grid;
        gap: 27px;
        grid-template-columns: 1fr;
        font-size: 16px;
        font-weight: 600;

        & > * {
            text-decoration: none;
            color: ${colors.main}50;
        }
    }

    .menu-items-multiple {
        grid-template-columns: 1fr 1fr;
    }
`;