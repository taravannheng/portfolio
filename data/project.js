import {
  ShoppingBagOutlined,
  ImageSearchOutlined,
  ShoppingCartOutlined,
  PaymentOutlined,
  ArrowCircleRightOutlined,
  FormatListBulletedOutlined,
} from "@mui/icons-material";

const projectData = {
  marketsquare: [
    {
      type: "summary",
      imgUrl: "/images/projects/project-1.png",
      title: "Marketsquare",
      description:
        `Marketsquare is an innovative ecommerce platform designed to provide users with a seamless shopping experience. With a wide range of product catalogs, shoppers can easily browse through an extensive collection of items, ranging from fashion and electronics to home decor and more. Each product listing provides comprehensive details, enabling customers to make informed decisions. From product descriptions and specifications to customer reviews, Marketsquare ensures that users have all the information they need to confidently choose the perfect product. \nWhen it's time to make a purchase, the checkout process is smooth and secure. Marketsquare integrates with Stripe, a leading online payment gateway, allowing customers to securely complete transactions using their preferred payment methods. With advanced encryption and fraud prevention measures, users can trust that their payment information is safe and protected. \nTo enhance the shopping experience, Marketsquare incorporates a user-friendly cart system. Customers can easily add items to their cart, review their selections, and make adjustments as needed. The cart provides a convenient overview of the chosen products, quantities, and prices. \nBefore finalizing a purchase, users can view an order summary that includes a breakdown of the total cost, including taxes and shipping fees. This ensures transparency and eliminates any surprises during the checkout process. \nMarketsquare strives to create a user-centric platform that prioritizes simplicity, security, and convenience. Whether you're a frequent online shopper or looking to explore new products, Marketsquare offers a comprehensive solution for all your ecommerce needs.`,
      isFeatured: true
    },
    {
      type: "functionality",
      imgUrl: "/images/projects/project-2.png",
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
      imgUrl: "/images/projects/project-3.png",
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
          icon: "/images/languages/tailwind.svg",
          text: "TailwindCSS",
        },
        {
          icon: "/images/languages/materialui.svg",
          text: "MaterialUI",
        },
        {
          icon: "/images/languages/sass.svg",
          text: "Sass",
        },
      ],
    },
    {
      type: "technology",
      imgUrl: "/images/projects/project-4.png",
      title: "Backend Technologies",
      items: [
        {
          icon: "/images/languages/nextjs.svg",
          text: "NextJS",
        },
        {
          icon: "/images/languages/python.svg",
          text: "Python",
        },
        {
          icon: "/images/languages/aws.svg",
          text: "AWS",
        },
      ],
    },
    {
      type: "socials",
      imgUrl: "/images/projects/project-5.png",
      title: "Check It Out 👇",
      items: [
        {
          icon: "/images/social/new-window.svg",
          text: "Demo",
          href: "https://www.google.com"
        },
        {
          icon: "/images/social/github.svg",
          text: "GitHub",
          href: "https://www.google.com"
        },
        {
          icon: "/images/social/dribbble.svg",
          text: "Dribbble",
          href: "https://www.google.com"
        },
      ],
    },
  ],
};

export default projectData;
