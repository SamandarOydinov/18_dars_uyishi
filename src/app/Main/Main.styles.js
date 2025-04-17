import styled from 'styled-components';
import { colors } from '@/styles/theme';
import { SwiperSlide } from 'swiper/react';

export const SliderWrapper = styled.div`
  margin-bottom: 100px;

  .swiper-pagination {
    right: 100px !important;
    left: auto;
    bottom: 40px !important;
    width: fit-content;
  }

  .my-bullet {
    background-color: red;
  }
`;

export const SwiperItemWrapper = styled.div`
  background-color: ${colors.light};
  border-radius: 50px;
  width: 100%;
  max-width: 1700px;
  margin: 0 auto;

  .flex {
    @media (max-width: 768px) {
      flex-direction: column-reverse;
      gap: 32px;
      padding: 0 20px;
      & > img {
        max-width: 275px;
      }
    }

    display: flex;
    align-items: center;
    justify-content: space-between;

    .swiper-main-title {
      max-width: 500px;
    }
  }
`;

export const SwiperSlideCustom = styled(SwiperSlide)`
  padding: 0 20px;
`;

export const SectionCatalog = styled.section``;

export const CatalogContainer = styled.div`
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  max-width: 72rem;
  margin-left: auto;
  margin-right: auto;
  font-family: sans-serif;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2rem;
  gap: 1rem;

  @media (min-width: 640px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const Title = styled.h2`
  font-size: 2.25rem;
  line-height: 2.5rem;
  font-weight: 700;
  color: ${colors.gray800};

  @media (min-width: 768px) {
    font-size: 3rem;
    line-height: 1;
  }
`;

export const ViewAllButton = styled.button`
  display: inline-flex;
  align-items: center;
  padding: 0.625rem 1.5rem;
  border: 1px solid ${colors.gray300};
  border-radius: 9999px;
  background-color: ${colors.white};
  color: ${colors.gray800};
  font-size: 1rem;
  transition: background-color 200ms ease-in-out;
  cursor: pointer;
  align-self: flex-start;

  &:hover {
    background-color: ${colors.gray100};
  }

  @media (min-width: 640px) {
    align-self: auto;
  }

  svg {
    margin-left: 0.5rem;
    width: 1em;
    height: 1em;
  }
`;

export const CatalogSwiperWrapper = styled.div`
  .swiper {
    padding-bottom: 40px;
  }

  .swiper-pagination {
    bottom: 10px !important;
  }

  .swiper-pagination-bullet {
    background-color: ${colors.gray300};
    opacity: 0.5;
  }

  .swiper-pagination-bullet-active {
    background-color: ${colors.gray600};
    opacity: 1;
  }

  .flex {
    display: flex;
    gap: 16px;
  }
`;

export const Grid = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Card = styled.div`
  position: relative;
  background-color: ${colors.gray100};
  border-radius: 1rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 200px;
  overflow: hidden;
  transition:
    transform 200ms ease-in-out,
    box-shadow 200ms ease-in-out;
  cursor: pointer;
  background-color: ${colors.light};
  flex: 1;

  &:hover {
    transform: translateY(-4px);
    box-shadow:
      0 4px 6px -1px rgb(0 0 0 / 0.1),
      0 2px 4px -2px rgb(0 0 0 / 0.1);
  }
`;

export const CardTextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-grow: 1;
  margin-bottom: 1rem;
  position: relative;
  z-index: 10;
`;

export const CardTitle = styled.h3`
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 600;
  color: ${colors.gray800};
  margin-bottom: 0.5rem;
`;

export const CardPrice = styled.span`
  font-size: 1rem;
  color: ${colors.gray600};
  display: flex;
  align-items: center;
  margin-top: auto;

  svg {
    margin-left: 0.375rem;
    width: 0.8em;
    height: 0.8em;
    opacity: 0.7;
  }
`;

export const CardImageWrapper = styled.div`
  position: absolute;
  right: 1rem;
  bottom: 1rem;
  width: 50%;
  max-width: 150px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  z-index: 0;
`;

export const CardImage = styled.img`
  max-width: 100%;
  max-height: 120px;
  height: auto;
  object-fit: contain;
`;
