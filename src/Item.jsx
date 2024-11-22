



const Item = ({ item, onDelete }) => {
  return (
    <div>
      <p className='items'>{item}</p>
      <button className='btn' onClick={onDelete}>Delete</button>
    </div>
  );
};

export default Item;