import NextImage from 'next/image'
import { Image } from '@/interfaces'

export default function Item({ src, alt }: Image) {
  return (
    <NextImage src={src} alt={alt} width={600} height={400} />
  )
}