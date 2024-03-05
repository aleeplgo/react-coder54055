function ItemListContainer(props) {
console.log(props);
    return(
<div className="dropdown">
      <ul>
        <li>{props.product} - ${props.price}</li>
        <li>{props.product} - ${props.price}</li>
        <li>{props.product} - ${props.price}</li>
    </ul>
</div>
    )
}

export default ItemListContainer;
