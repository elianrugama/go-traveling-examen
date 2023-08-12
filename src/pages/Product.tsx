import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { Title } from '../components/Title';
interface ProductoTipos {
    id: number;
    thumbnail: string;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    name: string;
    rating: number;
}
export const Product = () => {
    const { id } = useParams();
    const [hotel, setHotel] = useState<ProductoTipos>();
    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setHotel(data);
                console.log(data);
            });
    }, [id]);
    if (!hotel) {
        return <p>Cargando...</p>; 
    }
    return (
        <div >
        <Title texto="Busca un hotel cerca de ti" />
         <div className="">
           
             <div key={hotel.name} className="overflow-hidden bg-white rounded-lg shadow-md hover:cursor-pointer">
               <img src={hotel.thumbnail} alt={hotel.title} className="object-cover object-center w-full h-56" />
               <div className="py-4">
                 <h3 className="flex justify-between 
                 mb-1 text-xs tracking-widest text-gray-500 title-font">{hotel.title}
                 <span>{hotel.rating} estrellas</span>
                 </h3>
                 <p className="mt-1">${hotel.price}</p>
                 <div className="flex items-center">
                   
                   <span className="flex items-center py-1 pr-3 text-sm 
                   leading-none text-gray-400">
                     
                   </span>
                   </div>
               </div>
             </div>
           
           </div>
     </div>
    )
}
