

import Item from './Item.jsx';

const ItemList = ({ items, onDelete }) => {
  return (
    <div className='list'>
      {items.map((item, index) => (
        <Item key={index} item={item} onDelete={() => onDelete(index)} />
      ))}
    </div>
  );
};

export default ItemList;