const { useState } = React;

const GroceryList = (props) => (
  <ul>
    {props.itemList.map((groItem) => (
      <GroceryListItem item={groItem} />
    ))}
  </ul>
);

const GroceryListItem = (props) => {
  const [isDone, setIsDone] = useState(false);
  const [hover, setHover] = useState(false);

  const style = {
    textDecoration: isDone ? 'line-through' : 'none',
    fontWeight : hover ? 'bold' : ''
  };

  // const hoverEffect = () => (
  //   setHover(true);
  //   // e.target.style.fontWeight = 'bold';
  // );

  return (
    <li style={style} onClick={() => setIsDone(!isDone)} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>{props.item}
    </li>
  );
};

  ReactDOM.render(<GroceryList itemList={['coffee', 'tea']} />, document.getElementById('app'));
