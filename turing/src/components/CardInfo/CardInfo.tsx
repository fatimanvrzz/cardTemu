import React from 'react'

interface ProductCardProps {
    imagePath: string,
    button: string,
    description: string,
    oldPrice: string,
    newPrice: string,
}



const CardInfo: React.FC<ProductCardProps> = ({ imagePath, button, description, oldPrice, newPrice }) => {

    return (
        <div className="shadow-lg p-4 w-40">
            <div className="flex flex-col">
                <img src={imagePath} alt={description} className="h-40 object-cover " />
                <button className='bg-red-600 text-white mt-2 p-1 rounded-md'>{button}</button>
                <div className="flex gap-2">
                    <h1 className='font-bold text-2xl text-red-700'>{newPrice}</h1>
                    <h2 className='line-through'>{oldPrice}</h2>
                </div>
            </div>
        </div>
    );
};

export default CardInfo
