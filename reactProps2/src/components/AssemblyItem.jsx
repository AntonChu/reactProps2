import PropTypes from 'prop-types';

const AssemblyItem = (props) => {
    const listig_id = props.listig_id;
    const url = props.url;
    const MainImage = props.url_570xN;
    const title = props.title;
    const currency_code = props.currency_code;
    const price = props.price;
    const quantity = props.quantity;

  return (
    <div class="item" key={listig_id}>
      <div class="item-image">
        <a href={url}>
          <img src={MainImage} />
        </a>
      </div>
      <div class="item-details">
        <p class="item-title">{title.length > 50 ? title.slice(0, 5) + '...' : title}</p>
        <p class="item-price">{currency_code === 'USD' ? '$' :currency_code === 'EUR' ? '€' : currency_code}{price}</p>
        <p class={`tem-quantity ${quantity > 20 ? 'level-high' : quantity > 10 ? 'level-medium' : 'level-low'}`}>{quantity} left</p>
      </div>
    </div>
    )
}

AssemblyItem.propTypes = {
  listig_id: PropTypes.number,
  url: PropTypes.string,
  MainImage: PropTypes.object,
  title: PropTypes.string,
  currency_code: PropTypes.string,
  price: PropTypes.string,
  quantity: PropTypes.number,
};

export default AssemblyItem;