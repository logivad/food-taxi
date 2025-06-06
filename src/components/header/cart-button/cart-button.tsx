import { type FC } from 'react';
import { Button } from '../../ui-kit/button/button';
import CartIcon from '../../../icons/cart.svg?react';
import { useSelector } from 'react-redux';
import { selectTotalCartItems } from '../../../redux/entities/cart/slice';
import type { RootState } from '../../../redux/store';
import styles from './cart-button.module.css';

export const CartButton: FC = () => {
  const totalCartItems = useSelector((state: RootState) =>
    selectTotalCartItems(state),
  );

  return (
    <div className="relative">
      <Button>
        <CartIcon />
        {!!totalCartItems && (
          <span className={styles.count}>{totalCartItems}</span>
        )}
      </Button>
    </div>
  );
};
