

import Header from '@/components/Header'
import Main from '@/components/Main'
import Footer from '@/components/Footer'

 function Home() {

 

  console.log("EMAIL_USER-index:", process.env.EMAIL_USER);
    return (
      <>
      
        <Header />

      
        <Main />
        
        
      
     

      
        <Footer />
      
    </>
    )
  }

  export async function getServerSideProps() {
    const emailUser = process.env.EMAIL_USER;
  
    return {
      props: {
        emailUser,
      },
    };
  }
  
  export default Home;