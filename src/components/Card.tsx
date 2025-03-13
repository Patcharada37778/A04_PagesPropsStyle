import Image from 'next/image';
import styles from './card.module.css';

export default function Card({venueName, imgSrc} : {venueName:string, imgSrc:string}) {
  return(
    <div className = 'w-1/2 h-[300px] rounded-lg shadow-lg p-2 relative'>
      <div className='w-full h-[70%] relative rounded-t-lg'>
          <Image src={imgSrc}
          alt = 'Product Picture'
          fill = {true}
          className='object-cover rounded-t-lg'/>
      </div>  
      <div className = 'w-full h-[30%] p-[10px]'>{venueName}</div> 
    </div>
  );
}