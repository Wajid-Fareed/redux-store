'use client';
import { useEffect, useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';
import { generateSlug, productData } from '@/data/data';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { IProduct } from '@/types/types';
import { useRouter } from 'next/navigation';
import Button from '../re-usable/button/Button';
import { addToCart } from '@/redux/slice/AddToCardSlice';
import { useDispatch } from 'react-redux';

const HeroSlider = () => {
    const [products, setProducts] = useState<IProduct[]>([]);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const swiperRef = useRef<any>(null);
    const router = useRouter();
    const dispatch = useDispatch();

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
    const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement> , product: IProduct) => {
        e.stopPropagation();
        dispatch(addToCart(product));
    };
    return (
        <section
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            {products.length === 0 ? (
                <SkeletonTheme baseColor="#e0e0e0" highlightColor="#f5f5f5">
                    <Skeleton className="w-full h-[200px] xsm:h-[250px] xs:h-[300px] sm:h-[400px] md:h-[500px] xl:h-[600px] rounded-sm" />
                </SkeletonTheme>
            ) : (
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
                    className="heroSwiper"
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                >
                    {products.map((product: IProduct) => (
                        <SwiperSlide key={product.id}>
                            <div className="slide-content relative group cursor-pointer" onClick={() => router.push(`/shop/${generateSlug(product.name)}`)}>
                                <div>
                                    {product.posterImageUrl && (
                                        <Image
                                            src={product.posterImageUrl.imageUrl}
                                            alt={product.posterImageUrl.altText}
                                            width={1550}
                                            height={600}
                                            className="w-full h-[200px] xsm:h-[250px] xs:h-[300px] sm:h-[400px] md:h-[500px] xl:h-[600px] object-cover rounded-sm"
                                        />
                                    )}
                                </div>
                                <div className="group-hover:opacity-100 opacity-0 transition-opacity duration-500 flex items-end absolute left-0 top-0 w-full h-full inset-0 z-10">
                                    <div className="z-10 p-3 md:p-5 xl:p-10 mb-10 w-[80%] xsm:w-3/4 mx-auto bg-[rgba(0,0,0,.7)] shadow-lg rounded-md">
                                        <h2 className="text-11 xs:text-sm sm:text-base xl:text-xl font-bold text-white uppercase">
                                            {product.name}
                                        </h2>
                                        {product.description && (
                                            <p className="text-10 xs:text-11 sm:text-12 xl:text-sm mt-1 md:mt-2 text-white text-nowrap text-ellipsis overflow-hidden">
                                                {product.description}
                                            </p>
                                        )}

                                        <div className="flex items-center gap-3 mt-2">
                                            <Button variant="secondary" onClick={(e) => handleAddToCart(e , product)} className="text-11 sm:text-sm md:text-base lg:text-lg font-medium md:mt-4 w-20 sm:w-28 md:w-32 lg:w-40 h-7 sm:h-8 md:h-10 lg:h-12 shadow-md">
                                                Add to Cart
                                            </Button>
                                            <Button className="text-11 sm:text-sm md:text-base lg:text-lg font-medium md:mt-4 w-20 sm:w-28 md:w-32 lg:w-40 h-7 sm:h-8 md:h-10 lg:h-12 shadow-md">
                                                View Now
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </section>
    );
};

export default HeroSlider;
