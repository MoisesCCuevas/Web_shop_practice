import { useContext } from 'react';
import { ShoppingCartContext } from '../Context';

const useAppContext = () => {
  const context = useContext(ShoppingCartContext);
  return context;
};

export default useAppContext;
