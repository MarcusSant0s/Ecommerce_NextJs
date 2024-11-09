 
 

import {Navbar, HeroBanner, CategoryList, Footer, Features} from "@/components";
export default function Home() {
  
  
 
  




  return (
    <main className="flex overflow-x-hidden min-h-screen flex-col items-center justify-between">
      <HeroBanner/>

      <Features/>
      {/* <CallToAction/> */}
      <CategoryList/>

      <Footer />
    </main>
  );
}





