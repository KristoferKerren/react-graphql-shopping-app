import styled from 'styled-components';
import formatMoney from '../lib/formatMoney';
import RemoveFromCart from './RemoveFromCart';
import getImageUrl from '../lib/getImageUrl';

const CartItemStyles = styled.li`
  padding: 1rem 0;
  border-bottom: 1px solid var(--lightGrey);
  display: grid;
  grid-template-columns: auto 1fr auto;

  img {
    margin-right: 1rem;
  }

  h3,
  p {
    margin: 0;
  }
`;

export default function CartItem({ cartItem }) {
  const { product } = cartItem;
  if (!product) return null;

  return (
    <CartItemStyles>
      <img width="100" src={getImageUrl(product)} alt={product.name} />
      <div>
        <h3>{product.name}</h3>
        <p>
          {`${formatMoney(product.price * cartItem.quantity)} `}
          <em>
            ({cartItem.quantity} &times; {formatMoney(product.price)})
          </em>
        </p>
      </div>
      <RemoveFromCart id={cartItem.id} />
    </CartItemStyles>
  );
}
