import { Swiper, SwiperSlide } from 'swiper/react';
// @ts-expect-error should not be error
import 'swiper/scss';
import s from './index.module.scss';

interface IProps<T> {
  spaceBetween?: number;
  slidesPerView?: number;
  list: T[];
  slide: (item: T, index: number) => JSX.Element;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const CustomSwiper: React.FC<IProps<any>> = props => {
  return (
    <Swiper
      spaceBetween={props.spaceBetween || 16}
      slidesPerView={props.slidesPerView || 8}
      onSlideChange={() => console.log('slide change')}
      onSwiper={swiper => console.log(swiper)}
      className={s.root}
    >
      {props.list.map((item, idx) => (
        <SwiperSlide>{props.slide(item, idx)}</SwiperSlide>
      ))}
    </Swiper>
  );
};
