// "use strict";
// const stripe = require("stripe")(process.env.STRIPE_KEY);

// const { createCoreController } = require("@strapi/strapi").factories;

// module.exports = createCoreController("api::order.order", ({ strapi }) => ({
//   async create(ctx) {
//     const { products } = ctx.request.body;
//     try {
//       const lineItems = await Promise.all(
//         products.map(async (product) => {
//           const item = await strapi
//             .service("api::product.product")
//             .findOne(product.id);

//           return {
//             price_data: {
//               currency: "usd",
//               product_data: {
//                 name: item.title,
//               },
//               unit_amount: item.price * 100,
//             },
//             quantity: product.quantity || 1,
//           };
//         })
//       );

//       const session = await stripe.checkout.sessions.create({
//         shipping_address_collection: { allowed_countries: ["UA", "US"] },
//         payment_method_types: ["card"],
//         mode: "payment",
//         success_url: `${process.env.CLIENT_URL}/?success=true`,
//         cancel_url: `${process.env.CLIENT_URL}/?success=false`,
//         line_items: lineItems,
//       });

//       await strapi
//         .service("api::order.order")
//         .create({ data: { products, stripeId: session.id } });

//       return { stripeSession: session };
//     } catch (error) {
//       console.error("Order creation error:", error);
//       ctx.response.status = 500;
//       return {
//         error: true,
//         message: error.message || "Failed to create order",
//         details: error.toString(),
//       };
//     }
//   },
// }));

// "use strict";
// const stripe = require("stripe")(process.env.STRIPE_KEY);

// const { createCoreController } = require("@strapi/strapi").factories;

// module.exports = createCoreController("api::order.order", ({ strapi }) => ({
//   async create(ctx) {
//     console.log("==== FULL REQUEST BODY ====");
//     console.log(JSON.stringify(ctx.request.body, null, 2));

//     const { products } = ctx.request.body;

//     console.log("==== PRODUCTS RECEIVED ====");
//     console.log(JSON.stringify(products, null, 2));

//     try {
//       if (!products || !Array.isArray(products)) {
//         throw new Error("Invalid products data");
//       }

//       const lineItems = await Promise.all(
//         products.map(async (product) => {
//           console.log("Processing product:", JSON.stringify(product, null, 2));

//           if (!product.id) {
//             throw new Error("Product is missing ID");
//           }

//           const item = await strapi
//             .service("api::product.product")
//             .findOne(product.id);

//           console.log("Found item:", JSON.stringify(item, null, 2));

//           if (!item) {
//             throw new Error(`Product with ID ${product.id} not found`);
//           }

//           return {
//             price_data: {
//               currency: "usd",
//               product_data: {
//                 name: item.title,
//               },
//               unit_amount: Math.round(item.price * 100),
//             },
//             quantity: product.quantity || 1,
//           };
//         })
//       );

//       console.log("==== LINE ITEMS ====");
//       console.log(JSON.stringify(lineItems, null, 2));

//       const session = await stripe.checkout.sessions.create({
//         shipping_address_collection: { allowed_countries: ["UA", "US"] },
//         payment_method_types: ["card"],
//         mode: "payment",
//         success_url: `${process.env.CLIENT_URL}/?success=true`,
//         cancel_url: `${process.env.CLIENT_URL}/?success=false`,
//         line_items: lineItems,
//       });

//       console.log("==== STRIPE SESSION ====");
//       console.log(JSON.stringify(session, null, 2));

//       await strapi
//         .service("api::order.order")
//         .create({ data: { products, stripeId: session.id } });

//       return { stripeSession: session };
//     } catch (error) {
//       console.error("==== FULL ERROR ====");
//       console.error("Error Name:", error.name);
//       console.error("Error Message:", error.message);
//       console.error("Error Stack:", error.stack);

//       if (error.response) {
//         console.error(
//           "Stripe Response Error:",
//           JSON.stringify(error.response, null, 2)
//         );
//       }

//       ctx.response.status = 500;
//       return {
//         error: true,
//         message: error.message || "Failed to create order",
//         name: error.name,
//         details: error.toString(),
//       };
//     }
//   },
// }));

// "use strict";
// const stripe = require("stripe")(process.env.STRIPE_KEY);

// const { createCoreController } = require("@strapi/strapi").factories;

// module.exports = createCoreController("api::order.order", ({ strapi }) => ({
//   async create(ctx) {
//     const { products } = ctx.request.body;

//     console.log("Received products:", JSON.stringify(products, null, 2));

//     try {
//       if (!products || !Array.isArray(products) || products.length === 0) {
//         throw new Error("No products provided");
//       }

//       const lineItems = await Promise.all(
//         products.map(async (product) => {
//           // Validate product has necessary fields
//           if (!product.id || !product.title || !product.price) {
//             throw new Error(`Invalid product data: ${JSON.stringify(product)}`);
//           }

//           return {
//             price_data: {
//               currency: "usd",
//               product_data: {
//                 name: product.title,
//                 description: product.description,
//                 images: product.img ? [product.img] : undefined,
//               },
//               unit_amount: Math.round(product.price * 100), // Convert to cents
//             },
//             quantity: product.quantity || 1,
//           };
//         })
//       );

//       const session = await stripe.checkout.sessions.create({
//         shipping_address_collection: {
//           allowed_countries: ["UA", "US"],
//         },
//         payment_method_types: ["card"],
//         mode: "payment",
//         success_url: `${process.env.CLIENT_URL}/?success=true`,
//         cancel_url: `${process.env.CLIENT_URL}/?success=false`,
//         line_items: lineItems,
//       });

//       // Create order in Strapi
//       await strapi.service("api::order.order").create({
//         data: {
//           products,
//           stripeId: session.id,
//         },
//       });

//       return { stripeSession: session };
//     } catch (error) {
//       console.error("Order creation error:", error);
//       ctx.response.status = 500;
//       return {
//         error: true,
//         message: error.message || "Failed to create order",
//         details: error.toString(),
//       };
//     }
//   },
// }));

"use strict";
const stripe = require("stripe")(process.env.STRIPE_KEY);

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::order.order", ({ strapi }) => ({
  async create(ctx) {
    console.log("==== STRIPE CONFIGURATION ====");
    console.log("Stripe Key Present:", !!process.env.STRIPE_KEY);
    console.log("Client URL:", process.env.CLIENT_URL);

    console.log("==== REQUEST HEADERS ====");
    console.log(JSON.stringify(ctx.request.headers, null, 2));

    console.log("==== REQUEST BODY ====");
    const { products } = ctx.request.body;
    console.log(JSON.stringify(ctx.request.body, null, 2));

    try {
      // Extremely strict validation
      if (!products) {
        console.error("NO PRODUCTS RECEIVED");
        throw new Error("No products provided in the request");
      }

      if (!Array.isArray(products)) {
        console.error("PRODUCTS IS NOT AN ARRAY");
        throw new Error("Products must be an array");
      }

      if (products.length === 0) {
        console.error("EMPTY PRODUCTS ARRAY");
        throw new Error("Product array is empty");
      }

      // Extensive logging for each product
      products.forEach((product, index) => {
        console.log(`Product ${index + 1}:`, JSON.stringify(product, null, 2));

        // Validate each product
        if (!product.id) {
          console.error(`MISSING ID FOR PRODUCT ${index + 1}`);
          throw new Error(`Product at index ${index} is missing an ID`);
        }
        if (!product.title) {
          console.error(`MISSING TITLE FOR PRODUCT ${index + 1}`);
          throw new Error(`Product at index ${index} is missing a title`);
        }
        if (!product.price) {
          console.error(`MISSING PRICE FOR PRODUCT ${index + 1}`);
          throw new Error(`Product at index ${index} is missing a price`);
        }
      });

      const lineItems = products.map((product) => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: product.title,
            description: product.description || "",
          },
          unit_amount: Math.round(product.price * 100),
        },
        quantity: product.quantity || 1,
      }));

      console.log("==== LINE ITEMS ====");
      console.log(JSON.stringify(lineItems, null, 2));

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        mode: "payment",
        success_url: `${process.env.CLIENT_URL}?success=true`,
        cancel_url: `${process.env.CLIENT_URL}?success=false`,
        line_items: lineItems,
      });

      console.log("==== STRIPE SESSION ====");
      console.log(JSON.stringify(session, null, 2));

      // Create order in Strapi
      await strapi.service("api::order.order").create({
        data: {
          products,
          stripeId: session.id,
        },
      });

      return { stripeSession: session };
    } catch (error) {
      console.error("==== FULL ERROR DETAILS ====");
      console.error("Error Name:", error.name);
      console.error("Error Message:", error.message);
      console.error("Error Stack:", error.stack);

      // If it's a Stripe error, log additional details
      if (error.type === "StripeError") {
        console.error("Stripe Error Type:", error.type);
        console.error("Stripe Error Code:", error.code);
        console.error("Stripe Detailed Error:", JSON.stringify(error, null, 2));
      }

      ctx.response.status = 500;
      return {
        error: true,
        message: error.message || "Failed to create order",
        name: error.name,
        details: error.toString(),
      };
    }
  },
}));
