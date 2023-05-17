import React, { useEffect, useState } from 'react';
import { BsFillCartCheckFill, BsFillCartPlusFill } from 'react-icons/bs';
import { getItem, setItem } from '../services/localStorageFuncs';
import { Link } from 'react-router-dom';
import { ProductsArea } from '../css/style';
import Header from '../components/Header';

const Store = () => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState(getItem('carrinhoYt') || []);

  useEffect(() => {
    const fetchApi = async () => {
      const url = 'https://api.mercadolibre.com/sites/MLB/search?q=Padel';
      const response = await fetch(url);
      const objJson = await response.json();
      setData(objJson.results);
    };
    fetchApi();
  }, []);

  function handleClick(objeto) {
    const element = cart.find((e) => e.id === objeto.id);
    if (element) {
      const arrFilter = cart.filter((e) => e.id !== objeto.id);
      setCart(arrFilter);
      setItem('carrinhoYt', arrFilter);
    } else {
      setCart([...cart, objeto]);
      setItem('carrinhoYt', [...cart, objeto]);
    }
  }

  return (
    <div>
      <Header />
      <ProductsArea>
        {data &&
          data.map((e) => (
            <div key={e.id}>
              <h4>{e.title}</h4>
              <img src={e.thumbnail} alt="" />
              <h4>R$ {e.price}</h4>
              <button onClick={() => handleClick(e)}>
                {cart.some((item) => item.id == e.id) ? (
                  <BsFillCartCheckFill />
                ) : (
                  <BsFillCartPlusFill />
                )}
              </button>
            </div>
          ))}
      </ProductsArea>
    </div>
  );
};

export default Store;
