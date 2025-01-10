import React from "react";

const FAQ = () => {
  return (
    <div className="how-it-works-container">
      <h2 className="how-it-works-heading">How does it work?</h2>
      <p className="how-it-works-text">
        It's simple, all you need to do is find the box to your liking, add it
        to cart, fill out payment details and you're set to go! The box you
        subscribed to will be delivered to your address{" "}
        <span className="how-it-works-bold">once per month</span> and your
        credit card will be charged once per month automatically, so no need to
        repeat the process! You can subscribe to as many boxes as you want, and
        you can unsubscribe at any time!
      </p>
      <h2 className="how-it-works-heading">Didn't find the box you want?</h2>
      <p className="how-it-works-text">
        No problem, you can request your own box by clicking on 'Create your own
        box' button on providers page and as soon as your request is approved,
        the box will appear on that provider, and you can add it to your cart!
      </p>
    </div>
  );
};

export default FAQ;
