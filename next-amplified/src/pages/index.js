import Image from 'next/image'
import { Inter } from 'next/font/google'
import {
  Cover 
 } from '../ui-components';
const inter = Inter({ subsets: ['latin'] })

export default function home() {
  return (
    <>
    <Cover />
    </>
  )
}