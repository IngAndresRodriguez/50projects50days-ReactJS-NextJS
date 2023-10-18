import { Box } from '@mui/material'
import { superHeros } from '@/data'
import { SuperHeroItem } from '@/components'

import styles from '@/styles/page.module.css'

export default function Home() {
  return (
    <Box component={'main'} className={styles.main}>
      <Box component={'section'}>
        {
          superHeros.map(image => (
            <SuperHeroItem {...image} key={image.src} />
          ))
        }
      </Box>
    </Box>
  )
}
