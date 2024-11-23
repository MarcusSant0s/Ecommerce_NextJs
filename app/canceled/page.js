import Link from 'next/link';
import { AiOutlineCloseCircle } from 'react-icons/ai'; // Ícone de erro
const canceled = () => {
  return ( 

    <div className="flex items-center justify-center h-screen bg-gray-100">
    <div className="bg-white p-8 rounded-xl shadow-lg max-w-lg w-full">
      <div className="flex justify-center text-red-600 mb-4">
        <AiOutlineCloseCircle className="text-6xl" />
      </div>
      <h2 className="text-center text-3xl font-semibold text-gray-800 mb-4">
        Oops! Seu pedido foi cancelado
      </h2>
      <p className="text-center text-lg text-gray-600 mb-6">
        Parece que algo deu errado com o seu pedido. Não se preocupe! Estamos aqui para ajudar.
      </p>
      <div className="flex justify-center">
        <Link href='/' className="bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-500 transition duration-300"
        >
          Voltar para a loja
        </Link>
      </div>
    </div>
  </div>
  )
}

export default canceled
