import { generateSlug } from '@/data/data';
import { IProduct } from '@/types/types'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react'
import Button from '../button/Button';
import { CiHeart } from 'react-icons/ci';
import { useDispatch } from 'react-redux';
import { addtocart } from '@/redux/slice/AddToCardSlice';

interface CardProps {
  card: IProduct;
}

const Card: React.FC<CardProps> = ({ card }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    dispatch(addtocart(card));
  };
  return (
    <div onClick={() => router.push(`/shop/${generateSlug(card.name)}`)} className='cursor-pointer group'>
      <div className='relative'>
        <span className='w-9 h-9 flex justify-center items-center rounded-lg bg-white group-hover:opacity-100 opacity-0 absolute top-4 right-4'><CiHeart size={30} /></span>
        <Image src={card.posterImageUrl.imageUrl} alt={card.posterImageUrl.altText} width={500} height={500} className='object-cover' />
      </div>
      <div className='mt-5 space-y-3 text-center'>
        <h2 className='text-xl font-semibold'>{card.name}</h2>
        <p className='text-sm h-11 overflow-y-hidden'>{card.shortDescription}</p>
        <div className='flex justify-center space-x-2'>
          {card.discountPrice ? (
            <>
              <p className='font-semibold'>${card.discountPrice}</p>
              <p className='line-through text-slate-400'>${card.salePrice}</p>
            </>
          ) : (<p className='font-semibold'>${card.salePrice}</p>)}
        </div>
        <div className="flex justify-center items-center gap-3">
          <Button variant="secondary" onClick={(e) =>handleAddToCart(e)} className="text-11 sm:text-sm md:text-base lg:text-lg font-medium md:mt-4 w-20 sm:w-28 md:w-32 lg:w-40 h-7 sm:h-8 md:h-10 lg:h-12 shadow-md hover:border">
            Add to Cart
          </Button>
          <Button className="text-11 sm:text-sm md:text-base lg:text-lg font-medium md:mt-4 w-20 sm:w-28 md:w-32 lg:w-40 h-7 sm:h-8 md:h-10 lg:h-12 shadow-md border">
            View Now
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Card