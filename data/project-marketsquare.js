import {
  ShoppingBagOutlined,
  ImageSearchOutlined,
  ShoppingCartOutlined,
  PaymentOutlined,
  ArrowCircleRightOutlined,
  FormatListBulletedOutlined,
} from "@mui/icons-material";

const marketsquare = {
  id: 'marketsquare',
  imgUrl: "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-d2496.appspot.com/o/marketsquare-logo.json?alt=media&token=7d0e0901-5408-4289-b6c7-fd53254304bf&_gl=1*79p3s0*_ga*NTk4OTU5MDExLjE2ODY1NjE3NjQ.*_ga_CW55HF8NVT*MTY4NjU2MTc2NC4xLjEuMTY4NjU2MTk3Ny4wLjAuMA..",
  previewImgUrl: "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-d2496.appspot.com/o/marketsquare-preview.json?alt=media&token=fb889d4d-fb67-4abc-b0da-3f4fee03668f&_gl=1*110ousn*_ga*NTk4OTU5MDExLjE2ODY1NjE3NjQ.*_ga_CW55HF8NVT*MTY4NjU2NTEzNy4yLjEuMTY4NjU2NTIwOS4wLjAuMA..",
  shortDescription: 'A full stack and fully responsive e-commerce website',
  slides: [
    {
      id: 'marketsquare',
      type: "summary",
      imgUrl: "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-d2496.appspot.com/o/marketsquare-1.json?alt=media&token=858e1b36-383c-494e-af1f-dd3f1733b468&_gl=1*190hqh1*_ga*MTQyODA5ODEyNS4xNjg2NTc3NjQ4*_ga_CW55HF8NVT*MTY4NjU4MDMyMy4yLjEuMTY4NjU4MDk2Ny4wLjAuMA..",
      mediaBackgroundColor: '#FFC94D',
      title: "Marketsquare",
      description:
        `Marketsquare is an innovative ecommerce platform designed to provide users with a seamless shopping experience. With a wide range of product catalogs, shoppers can easily browse through an extensive collection of items, ranging from fashion and electronics to home decor and more. Each product listing provides comprehensive details, enabling customers to make informed decisions. From product descriptions and specifications to customer reviews, Marketsquare ensures that users have all the information they need to confidently choose the perfect product. \nWhen it's time to make a purchase, the checkout process is smooth and secure. Marketsquare integrates with Stripe, a leading online payment gateway, allowing customers to securely complete transactions using their preferred payment methods. With advanced encryption and fraud prevention measures, users can trust that their payment information is safe and protected. \nTo enhance the shopping experience, Marketsquare incorporates a user-friendly cart system. Customers can easily add items to their cart, review their selections, and make adjustments as needed. The cart provides a convenient overview of the chosen products, quantities, and prices. \nBefore finalizing a purchase, users can view an order summary that includes a breakdown of the total cost, including taxes and shipping fees. This ensures transparency and eliminates any surprises during the checkout process. \nMarketsquare strives to create a user-centric platform that prioritizes simplicity, security, and convenience. Whether you're a frequent online shopper or looking to explore new products, Marketsquare offers a comprehensive solution for all your ecommerce needs.`,
      isFeatured: true
    },
    {
      type: "functionality",
      imgUrl: "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-d2496.appspot.com/o/marketsquare-2.json?alt=media&token=d42df066-a2a8-486c-b5f9-2c8fe78ffd2e&_gl=1*1bpqf27*_ga*MTQyODA5ODEyNS4xNjg2NTc3NjQ4*_ga_CW55HF8NVT*MTY4NjU4MDMyMy4yLjEuMTY4NjU4MjQ3MC4wLjAuMA..",
      mediaBackgroundColor: '#FFC94D',
      title: "Functionalities",
      items: [
        {
          icon: <ShoppingBagOutlined />,
          text: "Product Catalog",
        },
        {
          icon: <ImageSearchOutlined />,
          text: "Product Details",
        },
        {
          icon: <ShoppingCartOutlined />,
          text: "Shopping Cart",
        },
        {
          icon: <ArrowCircleRightOutlined />,
          text: "Checkout",
        },
        {
          icon: <PaymentOutlined />,
          text: "Stripe Payment",
        },
        {
          icon: <FormatListBulletedOutlined />,
          text: "Order Summary",
        },
      ],
    },
    {
      type: "technology",
      imgUrl: "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-d2496.appspot.com/o/marketsquare-3.json?alt=media&token=1c619653-62f1-47bb-b499-9848068dda86&_gl=1*1m9j6yq*_ga*MTQyODA5ODEyNS4xNjg2NTc3NjQ4*_ga_CW55HF8NVT*MTY4NjU4MDMyMy4yLjEuMTY4NjU4MjQ4NC4wLjAuMA..",
      mediaBackgroundColor: '#FFC94D',
      title: "Frontend Technologies",
      items: [
        {
          icon: "/images/languages/react.svg",
          text: "ReactJS",
        },
        {
          icon: "/images/languages/typescript.svg",
          text: "TypeScript",
        },
        {
          icon: "/images/languages/redux.svg",
          text: "Redux",
        },
        {
          icon: "/images/languages/materialui.svg",
          text: "MaterialUI",
        },
      ],
    },
    {
      type: "technology",
      imgUrl: "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-d2496.appspot.com/o/marketsquare-4.json?alt=media&token=e1e762b7-8d90-4338-bf15-536876e7c518&_gl=1*4uq98n*_ga*MTQyODA5ODEyNS4xNjg2NTc3NjQ4*_ga_CW55HF8NVT*MTY4NjU4MDMyMy4yLjEuMTY4NjU4MjUwMS4wLjAuMA..",
      mediaBackgroundColor: '#FFC94D',
      title: "Backend Technologies",
      items: [
        {
          icon: "/images/languages/nodejs.svg",
          text: "NodeJS",
        },
        {
          icon: "/images/languages/expressjs.svg",
          text: "Express",
        },
        {
          icon: "/images/languages/mongodb.svg",
          text: "MongoDB",
        },
        {
          icon: "/images/languages/firebase.svg",
          text: "Firebase",
        },
        {
          icon: "/images/languages/stripe.svg",
          text: "Stripe",
        },
        {
          icon: "/images/languages/lambda.svg",
          text: "AWS Lambda",
        },
      ],
    },
    {
      type: "socials",
      imgUrl: "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-d2496.appspot.com/o/marketsquare-5.json?alt=media&token=ac141ed7-74be-4a12-8651-6e1f1deef75e&_gl=1*j9joe4*_ga*MTQyODA5ODEyNS4xNjg2NTc3NjQ4*_ga_CW55HF8NVT*MTY4NjU4MDMyMy4yLjEuMTY4NjU4MjUyMC4wLjAuMA..",
      mediaBackgroundColor: '#FFC94D',
      title: "Check It Out 👇",
      items: [
        {
          icon: "/images/social/new-window.svg",
          text: "Demo",
          href: "https://marketsquare.vercel.app"
        },
        {
          icon: "/images/social/github.svg",
          text: "GitHub",
          href: "https://github.com/taravannheng/marketsquare"
        },
        {
          icon: "/images/social/dribbble.svg",
          text: "Dribbble",
          href: "https://dribbble.com/shots/21591624-Marketsquare"
        },
      ],
    },
  ]
};

export default marketsquare;