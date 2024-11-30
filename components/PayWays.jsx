import { FaCreditCard } from "react-icons/fa6";
import { BsFillPeopleFill } from "react-icons/bs";
import { MdPhoneInTalk } from "react-icons/md";

const PayWays = () => {
  return ( 
    <section className='w-screen bg-logo-color flex flex-col font-bold gap-10 py-4 justify-evenly text-white '>
      
      <div className='flex flex-col font-2xl text-center w-64 mx-auto'>
        <MdPhoneInTalk className='text-4xl mx-auto' />
        <p>
        Fale conosco pelo Instagram, WhatsApp ou telefone e tenha suporte rápido e direto
        </p>
      </div>

      <div className='flex flex-col font-2xl text-center w-64 mx-auto'>
      <FaCreditCard  className='text-4xl mx-auto'/>
      <p>
      Aceitamos as principais formas de pagamento: débito, crédito e Pix.
      </p>
      </div>
      <div className='flex flex-col font-2xl text-center w-64 mx-auto'>
      <BsFillPeopleFill className='text-4xl text-center mx-auto' />
      <p>
      Dúvidas? Nossa equipe está aqui para esclarecer e ajudar você.

      </p>
      </div>
    </section>
  )
}

export default PayWays
