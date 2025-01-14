'use client';
import { useEffect, useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { productData } from '@/data/data';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { IProduct } from '@/types/types';
import Card from '../re-usable/card/Card';

const ProductSlider = () => {
    const [products, setProducts] = useState<IProduct[]>([]);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const swiperRef = useRef<any>(null);

    useEffect(() => {
        const filteredProducts = productData.filter((product) => product.isHeroSlider === true);
        setProducts(filteredProducts);
    }, []);

    const handleMouseEnter = () => {
        if (swiperRef.current && swiperRef.current.autoplay) {
            swiperRef.current.autoplay.stop();
        }
    };

    const handleMouseLeave = () => {
        if (swiperRef.current && swiperRef.current.autoplay) {
            swiperRef.current.autoplay.start();
        }
    };

    return (
        <section className='mt-5'>
            {products.length === 0 ? (
                <SkeletonTheme baseColor="#e0e0e0" highlightColor="#f5f5f5">
                    <div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 h-[300px] overflow-hidden'>
                        <Skeleton className="w-full h-[300px]" />
                        <Skeleton className="w-full h-[300px]" />
                        <Skeleton className="w-full h-[300px]" />
                        <Skeleton className="w-full h-[300px]" />
                    </div>
                </SkeletonTheme>
            ) : (
                <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <Swiper
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                        }}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay, Pagination]}
                        className="heroSwiper productSwiper !pb-10"
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        breakpoints={{
                            300: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            480: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            },
                        }}
                    >
                        {products.map((product: IProduct) => (
                            <SwiperSlide key={product.id}>
                                <Card card={product} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            )}
        </section>
    );
};

export default ProductSlider;
