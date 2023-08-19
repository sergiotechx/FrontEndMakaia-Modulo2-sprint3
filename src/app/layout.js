
import './layout.scss'
import Footer from '../components/footer/Footer';
import { Balsamiq_Sans } from 'next/font/google'
import StoreProvider from './../store/StoreProvider';
import AuthValidation from '@/components/AuthValidation/AuthValidation';



const balsamiq_Sans = Balsamiq_Sans({
  subsets: ['latin'],
  weight: ['400', '700']

})




export const metadata = {
  title: 'Findy',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={balsamiq_Sans.className}>
        <StoreProvider>
          <AuthValidation />
          {children}
          <Footer />
        </StoreProvider>
        
      </body>
    </html> 
  )
}
