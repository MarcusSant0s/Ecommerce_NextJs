
import { Product } from '../components';
import chunk from 'lodash/chunk'
import React from 'react'
import { useRouter } from 'next/router'




const ProductsHandle = ({ productsInfo }) => {
  const router = useRouter()
  var { page, limit } = router.query;
  console.log();

  var QueryPage = Number(router.query.page);
  let Products = chunk(productsInfo, limit); 
 

  const changePage = (direction) => {
    // Atualiza a URL para a próxima ou anterior página, mantendo o limite igual
    const currentPage = QueryPage;
    const newPage = direction === 'next' ? currentPage + 1 : currentPage - 1;
    router.push({
      pathname: router.pathname,
      query: { ...router.query, page: newPage.toString() },
    });
  };

  const HandleLimit = (event) => {
    const selectedValue = event.target.value;
    router.push({
      pathname: router.pathname,
      query: { ...router.query, limit: selectedValue.toString() },
    });
  }

  

  return (
    <div className='products-section'>
      <div className='products-heading'>
        <h2>Melhores Produtos do Mercado</h2>
        <p> Seja você</p>
      </div>

      <div className='products-container'>
        {router.query.categoryParam == "*" ? Products[page]?.map((product) => <Product key={product._id} product={product} />)  :Products[page]?.filter((product) => product.category == `${router.query.categoryParam}`).map((product) => <Product key={product._id} product={product} />) 
         }
      </div>



      <nav className="pagination-outer" aria-label="Page navigation">
        <ul className="pagination">


          {QueryPage >= 1 && ( 
                      <li className="page-item">
                      <a href="#" className="page-link" onClick={() => changePage('previous')} aria-label="Previous">
                        <span aria-hidden="true">«</span>
                      </a>
                    </li>
          )}
    


          <li className="page-item"><a className="page-link" href="#">1</a></li>
 


          {QueryPage < Products.length - 1 && ( 
            <li className="page-item">
            <a href="#" className="page-link" aria-label="Next" onClick={() => changePage('next')}>
              <span aria-hidden="true">»</span>
            </a>
          </li>
          )}



          <li className="page-item ">
            <select onChange={HandleLimit}> 
              <option value="20">20</option> 
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </li>
        </ul>

      </nav>


    </div>
  )

};


export default ProductsHandle
