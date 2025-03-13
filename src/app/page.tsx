import Image from 'next/image';
import Banner from '@/components/Banner'
import Card from '@/components/Card'
import styles from './page.module.css'

export default function Home(){
  return(
    <main>
      <Banner/>
      <div style = {{margin:"20px", display: "flex", flexDirection: "row",
        flexWrap: "wrap", justifyContent: "space-around", alignContent: "space-around"}}>
          <Card venueName = 'The Bloom Pavilion' imgSrc = '/images/bloom.jpg'/>
          <Card venueName = 'Spark Space' imgSrc = '/images/sparkspace.jpg'/>
          <Card venueName = 'The Grand Table' imgSrc = '/images/grandtable.jpg'/>
      </div>      
    </main>
  )
}