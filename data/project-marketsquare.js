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
  imgUrl: "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-d2496.appspot.com/o/marketsquare-logo.gif?alt=media&token=4753ad40-d338-4f48-97c4-ee3c38e50989&_gl=1*c4g1yq*_ga*MTA3MDYzMzc5Ni4xNjg1OTYxNzE3*_ga_CW55HF8NVT*MTY4NjI5NzQwMC4xMS4xLjE2ODYzMDAxODcuMC4wLjA.",
  previewImgUrl: "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-d2496.appspot.com/o/marketsquare-preview.gif?alt=media&token=b442f043-dcd2-4fcd-b24e-603d8026be8a&_gl=1*1nhjl2q*_ga*ODg2ODY0MDE0LjE2ODYzODc1NDk.*_ga_CW55HF8NVT*MTY4NjQwMTgyOS4yLjEuMTY4NjQwMTg1Mi4wLjAuMA..",
  shortDescription: 'A full stack and fully responsive e-commerce website',
  slides: [
    {
      id: 'marketsquare',
      type: "summary",
      imgUrl: "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-d2496.appspot.com/o/marketsquare-1-min.gif?alt=media&token=002bca65-2c13-417a-ac26-ec43028f2781&_gl=1*if4ws1*_ga*MTA3MDYzMzc5Ni4xNjg1OTYxNzE3*_ga_CW55HF8NVT*MTY4NjI5NzQwMC4xMS4xLjE2ODYzMDAyMDIuMC4wLjA.",
      title: "Marketsquare",
      description:
        `Marketsquare is an innovative ecommerce platform designed to provide users with a seamless shopping experience. With a wide range of product catalogs, shoppers can easily browse through an extensive collection of items, ranging from fashion and electronics to home decor and more. Each product listing provides comprehensive details, enabling customers to make informed decisions. From product descriptions and specifications to customer reviews, Marketsquare ensures that users have all the information they need to confidently choose the perfect product. \nWhen it's time to make a purchase, the checkout process is smooth and secure. Marketsquare integrates with Stripe, a leading online payment gateway, allowing customers to securely complete transactions using their preferred payment methods. With advanced encryption and fraud prevention measures, users can trust that their payment information is safe and protected. \nTo enhance the shopping experience, Marketsquare incorporates a user-friendly cart system. Customers can easily add items to their cart, review their selections, and make adjustments as needed. The cart provides a convenient overview of the chosen products, quantities, and prices. \nBefore finalizing a purchase, users can view an order summary that includes a breakdown of the total cost, including taxes and shipping fees. This ensures transparency and eliminates any surprises during the checkout process. \nMarketsquare strives to create a user-centric platform that prioritizes simplicity, security, and convenience. Whether you're a frequent online shopper or looking to explore new products, Marketsquare offers a comprehensive solution for all your ecommerce needs.`,
      isFeatured: true
    },
    {
      type: "functionality",
      imgUrl: "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-d2496.appspot.com/o/marketsquare-2-min.gif?alt=media&token=38ee5174-6b6d-4183-ac7b-a6df6cbf241e&_gl=1*sieuta*_ga*MTA3MDYzMzc5Ni4xNjg1OTYxNzE3*_ga_CW55HF8NVT*MTY4NjI5NzQwMC4xMS4xLjE2ODYzMDA2MTEuMC4wLjA.",
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
      imgUrl: "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-d2496.appspot.com/o/marketsquare-3-min.gif?alt=media&token=7e06a113-74d2-4bcc-b900-a45cd0c968a2&_gl=1*15rooio*_ga*MTA3MDYzMzc5Ni4xNjg1OTYxNzE3*_ga_CW55HF8NVT*MTY4NjI5NzQwMC4xMS4xLjE2ODYzMDAyMjIuMC4wLjA.",
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
      imgUrl: "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-d2496.appspot.com/o/marketsquare-4-min.gif?alt=media&token=1c67eada-d1a0-4813-aa7c-e95ad87b8d58&_gl=1*1n7ij1*_ga*MTA3MDYzMzc5Ni4xNjg1OTYxNzE3*_ga_CW55HF8NVT*MTY4NjI5NzQwMC4xMS4xLjE2ODYzMDAyMzUuMC4wLjA.",
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
      imgUrl: "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-d2496.appspot.com/o/marketsquare-5-min.gif?alt=media&token=6eb68317-b668-4d64-ad41-0c29a58372ea&_gl=1*10jzzmt*_ga*MTA3MDYzMzc5Ni4xNjg1OTYxNzE3*_ga_CW55HF8NVT*MTY4NjI5NzQwMC4xMS4xLjE2ODYzMDAyNDguMC4wLjA.",
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