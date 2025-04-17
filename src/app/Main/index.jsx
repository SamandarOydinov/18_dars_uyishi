import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import SliderImage1 from '@/assets/images/main-slider/1.png';
import {
  SwiperItemWrapper,
  SliderWrapper,
  SectionCatalog,
  CatalogContainer,
  Header,
  Title,
  ViewAllButton,
  Card,
  CardTextContent,
  CardTitle,
  CardPrice,
  CardImageWrapper,
  CardImage,
  Grid,
  CatalogSwiperWrapper,
} from './Main.styles';
import { ArrowIcon } from '@/assets/icons';

const catalogItems = [
  { id: 1, title: 'Люстры', price: '540Р', image: '/catalog/cat1.png' },
  { id: 2, title: 'Светильники', price: '540Р', image: '/catalog/cat2.png' },
  { id: 3, title: 'Бра', price: '540Р', image: '/catalog/cat3.png' },
  { id: 4, title: 'Торшеры', price: '540Р', image: '/catalog/cat4.png' },
  {
    id: 5,
    title: 'Настольные лампы',
    price: '540Р',
    image: '/catalog/cat5.png',
  },
  { id: 6, title: 'Споты', price: '540Р', image: '/catalog/cat6.png' },
];

const slides = [
  {
    id: 1,
    title: 'Скидка 15% на все подвесные светильники',
    date: 'до 5 февраля',
    image: SliderImage1,
  },
  {
    id: 2,
    title: 'Скидка 15% на все подвесные светильники',
    date: 'до 5 февраля',
    image: SliderImage1,
  },
  {
    id: 3,
    title: 'Скидка 15% на все подвесные светильники',
    date: 'до 5 февраля',
    image: SliderImage1,
  },
  {
    id: 4,
    title: 'Скидка 15% на все подвесные светильники',
    date: 'до 5 февраля',
    image: SliderImage1,
  },
  {
    id: 5,
    title: 'Скидка 15% на все подвесные светильники',
    date: 'до 5 февраля',
    image: SliderImage1,
  },
  {
    id: 6,
    title: 'Скидка 15% на все подвесные светильники',
    date: 'до 5 февраля',
    image: SliderImage1,
  },
];

function Main() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Har bir slaydda 2 ta element joylashishi uchun massivni juftlarga bo‘lamiz
  const pairedCatalogItems = [];
  for (let i = 0; i < catalogItems.length; i += 2) {
    pairedCatalogItems.push(catalogItems.slice(i, i + 2));
  }

  return (
    <>
      <SliderWrapper>
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true, bulletActiveClass: 'my-bullet' }}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <SwiperItemWrapper>
                <div className="container flex">
                  <div>
                    <h1 className="swiper-main-title">
                      {slide.title} <span>{slide.date}</span>
                    </h1>
                  </div>
                  <div>
                    <img src={slide.image} alt="Lamps" />
                  </div>
                </div>
              </SwiperItemWrapper>
            </SwiperSlide>
          ))}
        </Swiper>
      </SliderWrapper>

      <SectionCatalog>
        <CatalogContainer>
          <Header>
            <Title>Каталог</Title>
            <ViewAllButton>
              Весь каталог <ArrowIcon />
            </ViewAllButton>
          </Header>

          {isMobile ? (
            <CatalogSwiperWrapper>
              <Swiper
                modules={[Pagination]}
                pagination={{ clickable: true }}
                spaceBetween={20}
                slidesPerView={1}
              >
                {pairedCatalogItems.map((pair, index) => (
                  <SwiperSlide key={index}>
                    <div className="flex gap-4">
                      {pair.map((item) => (
                        <Card key={item.id}>
                          <CardTextContent>
                            <CardTitle>{item.title}</CardTitle>
                            <CardPrice>
                              От {item.price} <ArrowIcon />
                            </CardPrice>
                          </CardTextContent>
                          <CardImageWrapper>
                            <CardImage
                              src={item.image}
                              alt={item.title}
                              loading="lazy"
                            />
                          </CardImageWrapper>
                        </Card>
                      ))}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </CatalogSwiperWrapper>
          ) : (
            <Grid>
              {catalogItems.map((item) => (
                <Card key={item.id}>
                  <CardTextContent>
                    <CardTitle>{item.title}</CardTitle>
                    <CardPrice>
                      От {item.price} <ArrowIcon />
                    </CardPrice>
                  </CardTextContent>
                  <CardImageWrapper>
                    <CardImage
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                    />
                  </CardImageWrapper>
                </Card>
              ))}
            </Grid>
          )}
        </CatalogContainer>
      </SectionCatalog>
    </>
  );
}

export default Main;
