import React, { useEffect } from "react";
import "../styles/pages/SubscriptionBoxPage.scss";
import { testCardUrls } from "../misc/testData";
import ProductCard from "../components/ProductCard";
import CategoryLabel from "../components/CategoryLabel";
import { useParams } from "react-router-dom";
import { mockBackendData } from "../misc/testData";

const SubscriptionBoxPage = () => {
  const { id } = useParams();

  const allSubscriptionBoxes = mockBackendData.flatMap(
    (provider) => provider.providerSubscriptionboxes
  );

  const boxData = allSubscriptionBoxes.find((box) => box.boxId === id);
  useEffect(() => {
    console.log("ID", id);
  }, []);

  return (
    <>
      {boxData ? (
        <>
          <div className="subscriptionbox-page-image-container">
            <img src={boxData.boxImgUrl} />
          </div>
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
          </div>
        </>
      ) : (
        <div>aaa</div>
      )}
    </>
  );
};

export default SubscriptionBoxPage;
