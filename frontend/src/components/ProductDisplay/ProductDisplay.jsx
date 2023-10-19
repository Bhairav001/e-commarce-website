import React from 'react'
import "./ProductDisplay.css";
import star_icon from "../Assests/star_icon.png"
import star_dull_icon from "../Assests/star_dull_icon.png";

const ProductDisplay = (props) => {
    const {product}= props
  return (
    <div className='productdisplay'>
        <div className='productdisplay-left'>
            <div className="productdisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="productdisplay-img">
                <img src={product.image} alt="" className="productdisplay-main-img" />
            </div>
        </div>
        <div className='productdisplay-right'>
            <h1>{product.name}</h1>
            <div className="productdisplay-right-star">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className='productdisplay-right-price-old'>
                    ${product.old_price}
                </div>
                <div className='productdisplay-right-price-new'>
                    ${product.new_price}
                </div>

            </div>
            <div className="productdisplay-right-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta atque earum impedit? Quia eaque maxime molestiae doloremque. Quae alias impedit sapiente iure suscipit, expedita doloribus totam repellendus praesentium ea neque!
                Sapiente, perferendis! Doloribus ratione ut rerum vel quo sequi enim laboriosam hic. Eligendi, laudantium aperiam. Iure placeat esse repellat commodi, amet consectetur illo optio cumque vero repellendus aliquid voluptas quod!
                Ab, laborum quasi. Laudantium earum, excepturi repudiandae dolor ullam provident? Accusamus voluptatum vel quasi qui recusandae, quidem, nam voluptatibus possimus dignissimos placeat culpa laboriosam tenetur. Quis, consequuntur dolores. Nihil, labore!
                Earum magni nisi error omnis quaerat, excepturi libero dignissimos, tempore hic natus at voluptates! Tempora sunt, quod nulla magnam odit error, perspiciatis ipsa possimus aspernatur natus aperiam dolor libero commodi?
                Tempora ipsa nobis sunt velit, reiciendis modi enim neque consequatur atque voluptatum, iusto, fugit vitae exercitationem voluptatibus voluptates amet ea saepe? Dolorum tempora eaque sapiente et, facere suscipit nesciunt aliquid.
            </div>
            <div className="productdisplay-right-size">
                <h1>Select Size</h1>
                <div className="productdisplay-right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button>ADD TO CART</button>
            <p className="productdisplay-right-category">
                <span>Category:</span>
                Women, T-shirt, Crop TOp
            </p>
            <p className="productdisplay-right-category">
                <span>Category:</span>
                Women, T-shirt, Crop TOp
            </p>
        </div>
    </div>
  )
}

export default ProductDisplay