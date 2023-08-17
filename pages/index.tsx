

import Header from '@/components/Header'
import Main from '@/components/Main'
import Footer from '@/components/Footer'

export default function Home() {

  console.log("EMAIL_USER:", process.env.EMAIL_USER);

    return (
      <>
      
        <Header />

      
      
        <Main />
        
        
      
     

      
        <Footer />
      
    </>
    )
  }
  