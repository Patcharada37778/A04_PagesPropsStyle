import Image from 'next/image';
import styles from './banner.module.css'

export default function Banner (){
  return(
    <div className = {styles.banner}>
      <Image src={'/images/banner.jpg'}
        alt = 'cover'
        fill = {true}
        priority
        objectFit = 'cover'
      />
      <div className={styles.bannerText}>
        <h1 className = 'text-4xl font-medium'>where every event finds its venue</h1>
        <h3 className = 'text-xl font-serif'>your special event, our priority</h3>
      </div>
    </div>
  )
}