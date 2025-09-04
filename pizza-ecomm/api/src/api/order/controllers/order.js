("use strict");

const stripe = require("stripe")(process.env.REACT_APP_STRIPE_KEY);
const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::order.order", ({ strapi }) => ({
  async create(ctx) {
    console.log("Incoming body:", ctx.request.body);

    const { StoreCart } = ctx.request.body;

    strapi.log.info("Debug info:", StoreCart);

    if (!StoreCart || !Array.isArray(StoreCart)) {
      return ctx.badRequest("Invalid cart payload");
    }

    try {
      const lineItems = await Promise.all(
        StoreCart.map(async (product) => {
          const item = await strapi.entityService.findOne(
            "api::product.product",
            product.id
          );

          const CartPrice = () => {
            if (product.type === "pizza") {
              if (`${product.size}` === "standard,thick") return item?.price_1;
              if (`${product.size}` === "standard,thin") return item?.price_2;
              if (`${product.size}` === "standard,cheesy") return item?.price_3;
              if (`${product.size}` === "standard,hot-dog")
                return item?.price_4;
              if (`${product.size}` === "large,thick") return item?.price_5;
              if (`${product.size}` === "large,thin") return item?.price_6;
              if (`${product.size}` === "large,cheesy") return item?.price_7;
              if (`${product.size}` === "large,hot-dog") return item?.price_8;
              if (`${product.size}` === "extra,thick") return item?.price_9;
              if (`${product.size}` === "extra,thin") return item?.price_10;
              if (`${product.size}` === "extra,cheesy") return item?.price_11;
              if (`${product.size}` === "extra,hot-dog") return item?.price_12;
              if (`${product.size}` === "xxl,thick") return item?.price_13;
              if (`${product.size}` === "xxl,thin") return item?.price_14;
              if (`${product.size}` === "xxl,cheesy") return item?.price_15;
              if (`${product.size}` === "xxl,hot-dog") return item?.price_16;
            } else {
              if (product.size === item.size_1) return item?.price_1;
              if (product.size === item.size_2) return item?.price_2;
              if (product.size === item.size_3) return item?.price_3;
              if (product.size === item.size_4) return item?.price_4;
            }
          };

          const finalPrice = Math.round(CartPrice() * 100);

          console.log(CartPrice());

          return {
            price_data: {
              currency: "uah",
              product_data: {
                name: item.title,
              },
              unit_amount: finalPrice,
            },
            quantity: product.quantity,
          };
        })
      );

      const session = await stripe.checkout.sessions.create({
        shipping_address_collection: { allowed_countries: ["US", "CA"] },
        payment_method_types: ["card"],
        mode: "payment",
        success_url: process.env.REACT_APP_CLIENT_URL + "?success=true",
        cancel_url: process.env.REACT_APP_CLIENT_URL + "?success=false",
        line_items: lineItems,
      });

      await strapi.db.query("api::order.order").create({
        data: {
          StoreCart,
          stripeId: session.id,
        },
      });

      return { stripeSession: session.id };
    } catch (error) {
      console.error("Order create error:", error);
      ctx.response.status = 500;
      return { error: error.message };
    }
  },
}));
