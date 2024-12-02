import { generateSlug } from '@/data/data';
import { IProduct } from '@/types/types'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react'

interface CardProps {
    card: IProduct;
}

const Card: React.FC<CardProps> = ({card}) => {
const router = useRouter();
  return (
    <div onClick={() => router.push(`/shop/${generateSlug(card.name)}`)}>
        <div>
            <Image src={card.posterImageUrl.imageUrl} alt={card.posterImageUrl.altText} width={500} height={500} className='object-cover' />
        </div>
        <div className='mt-5 space-y-3 text-center'>
            <h2 className='text-xl font-semibold'>{card.name}</h2>
            <p className='text-sm'>{card.shortDescription}</p>
            <p>Sale Price: ${card.salePrice}</p>
            <p>Purchase Price: ${card.purchasePrice}</p>
            <p>Discount Price: ${card.discountPrice}</p>
            <p>Colors: {card.colors.map(color => color.colorName).join(', ')}</p>
        </div>
    </div>
  )
}

export default Card