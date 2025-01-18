import React, { useEffect } from "react";
import "../styles/pages/SubscriptionBoxPage.scss";
import ProductCard from "../components/ProductCard";
import CategoryLabel from "../components/CategoryLabel";
import { useNavigate, useParams } from "react-router-dom";
import { ISubscriptionBox, mockBackendData } from "../misc/testData";
import ButtonWithIcon from "../components/ButtonWithIcon";
import { useCart } from "../store/cart";

const SubscriptionBoxPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const subscriptionBoxesFromCart = useCart((state) => state.subscriptionBoxes);
  const addBox = useCart((state) => state.addBox);
  const allSubscriptionBoxes = mockBackendData.flatMap(
    (provider) => provider.providerSubscriptionboxes
  );

  const providerData = mockBackendData.find((provider) =>
    provider.providerSubscriptionboxes.some((box) => box.boxId === id)
  );
  const boxData = allSubscriptionBoxes.find((box) => box.boxId === id);
  const handleAddToCart = (boxData: ISubscriptionBox) => {
    if (subscriptionBoxesFromCart.some((box) => box.boxId === boxData?.boxId))
      return;
    else addBox(boxData);
  };

  return (
    <>
      {boxData ? (
        <>
          <div className="subscriptionbox-page-image-container">
            <img src={boxData.boxImgUrl} alt="subscription box" />
          </div>
          <p className="subscriptionbox-page-provider-info">
            Provider:{" "}
            <span
              className="subscriptionbox-page-provider-link"
              onClick={() => navigate(`/providers/${providerData?.providerId}`)}
            >
              {providerData?.providerName}
            </span>
          </p>
          <div className="subscriptionbox-content-container">
            <h2 className="subscriptionbox-content-title">{boxData.boxName}</h2>
            <p className="subscriptionbox-content-price">
              {boxData.boxPrice}{" "}
              <span className="subscriptionbox-content-price-tag">€</span>
            </p>
            <p className="list-of-products-title">Category</p>
            <div className="subscriptionbox-categories-container">
              <CategoryLabel
                text={boxData.boxCategory}
                onClick={() => console.log("a")}
                isSelected={false}
              />
            </div>
            <p className="list-of-products-title">Products included</p>
            <div className="subscriptionbox-products-container ">
              {boxData.boxProducts.map((product) => (
                <ProductCard
                  key={product.produtctId}
                  name={product.productName}
                  imgUrl={product.productImgUrl}
                />
              ))}
            </div>
            <p className="description-text">
              Lettuce is an annual plant of the daisy family, Asteraceae. It is
              most often grown as a leaf vegetable, but sometimes for its stem
              and seeds. Lettuce is most often used for salads, although it is
              also seen in other kinds of food, such as soups, sandwiches and
              wraps; it can also be grilled.
            </p>
            <div className="add-to-cart-button-container">
              <ButtonWithIcon
                buttonText="Add to cart"
                leftIconSrc="/icons/shopping-cart.svg"
                onClick={() => handleAddToCart(boxData)}
              />
            </div>
          </div>
        </>
      ) : (
        <div>aaa</div>
      )}
    </>
  );
};

export default SubscriptionBoxPage;
