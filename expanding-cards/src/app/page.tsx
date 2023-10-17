import Image from 'next/image'
import { Box } from '@mui/material'
import styles from '@/styles/page.module.css'

export type Image = {
  src: string;
  alt: string;
}

export const images: Image[] = [
  {
    src: '/assets/images/superheroes/black-panther-marvel-characters.webp',
    alt: 'Black Panther'
  },
  {
    src: '/assets/images/superheroes/captain-america-marvel-characters.webp',
    alt: 'Captain America'
  },
  {
    src: '/assets/images/superheroes/iron-man-marvel-character.webp',
    alt: 'Iron Man'
  },
  {
    src: '/assets/images/superheroes/killmonger-marvel-character.webp',
    alt: 'Killmonger'
  },
  {
    src: '/assets/images/superheroes/spider-man-marvel-character.webp',
    alt: 'Spider Man'
  }
]

export function Item({src, alt}: Image) {
  return (
    <Image src={src} alt={alt} width={600} height={400} />
  )
}

export default function Home() {
  return (
    <Box component={'main'} className={styles.main}>
      <h1></h1>
      <Box component={'section'}>
        {
          images.map(image => (
            <Item {...image} key={image.src} />
          ))
        }
      </Box>
    </Box>
  )
}
