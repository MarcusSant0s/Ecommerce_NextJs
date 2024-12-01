import Link from 'next/link';
import {Navbar, Footer} from "@/components";
import { AiOutlineEnvironment } from 'react-icons/ai'; // Ícone de localização

const Store = () => {
  return (
    <>
    <Navbar />
    <div className="flex items-center justify-center h-screen  ">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-lg w-full">
        <div className="flex justify-center text-pink-600 mb-4">
          <AiOutlineEnvironment className="text-6xl" />
        </div>
        <h2 className="text-center text-3xl font-semibold text-gray-800 mb-4">
          Nosso Endereço
        </h2>
        <p className="text-center text-lg text-gray-600 mb-6">
          Venha nos visitar e aproveite nossos serviços com entrega no mesmo dia.
        </p>
        <div className="text-center mb-6">
          <p className="text-lg font-medium">R. Sete de Setembro, 127 - Sala 01</p>
          <p className="text-lg font-medium">Centro, Caçapava - SP, 12281-620</p>
          <p className="text-lg text-gray-600 mt-2">Horário de Funcionamento: Fechado ⋅ Abre às 13h na segunda-feira</p>
          <p className="text-lg text-gray-600">Telefone: (12) 98161-4235</p>
        </div>
        <div className="flex justify-center">
          <Link
            href="/"
            className="bg-pink-600 text-white px-6 py-3 rounded-lg hover:pink-500 transition duration-300"
          >
            Voltar para a loja
          </Link>
        </div>
      </div>
    </div>
    <Footer />
</>
  );
};

export default Store;
