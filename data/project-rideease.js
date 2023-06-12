import {
  AccountBoxOutlined,
  SpaceDashboardOutlined,
  CreditCardOutlined,
  EditCalendarOutlined  
} from "@mui/icons-material";

const rideease = {
  id: 'rideease',
  imgUrl: "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-d2496.appspot.com/o/rideease-logo.json?alt=media&token=511b72bb-3ad9-486d-9540-84db2dc38bee&_gl=1*176s3qu*_ga*NTk4OTU5MDExLjE2ODY1NjE3NjQ.*_ga_CW55HF8NVT*MTY4NjU2MTc2NC4xLjEuMTY4NjU2MTkxMy4wLjAuMA..",
  previewImgUrl: "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-d2496.appspot.com/o/rideease-preview-min.gif?alt=media&token=d2e99792-4157-42a0-81d2-7fd38207d335&_gl=1*jac2ta*_ga*ODg2ODY0MDE0LjE2ODYzODc1NDk.*_ga_CW55HF8NVT*MTY4NjQwNjU2OS4zLjEuMTY4NjQwNjU5Ni4wLjAuMA..",
  shortDescription: 'A car rental website',
  slides: [
    {
      id: 'rideease',
      type: "summary",
      imgUrl: "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-d2496.appspot.com/o/rideease-1.png?alt=media&token=87cbee7a-635d-49bf-8898-0e86758cc1d6&_gl=1*1gok4qh*_ga*MTA3MDYzMzc5Ni4xNjg1OTYxNzE3*_ga_CW55HF8NVT*MTY4NjI0NDIzNi42LjEuMTY4NjI0NDY3MS4wLjAuMA..",
      title: "RideEase",
      description:
        `RideEase is a user-friendly car rental website that offers a seamless experience for users to find, book, and rent cars. With a hassle-free sign-in process, users can quickly create an account using their email and password or sign up with their Google account. \n The website provides a wide range of car catalogs, allowing users to browse and choose the perfect vehicle for their needs. Once a car is selected, the intuitive booking system makes it easy to reserve the car for the desired dates and times. \n RideEase also offers secure payment options through Stripe, ensuring a smooth and reliable transaction process. Whether it's for a weekend getaway or a business trip, RideEase is the go-to platform for convenient and reliable car rentals.`,
      isFeatured: false
    },
    {
      type: "functionality",
      imgUrl: "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-d2496.appspot.com/o/rideease-2.png?alt=media&token=4a0e79d6-622e-44f5-8a44-af85b3507df3&_gl=1*1mycf6v*_ga*MTA3MDYzMzc5Ni4xNjg1OTYxNzE3*_ga_CW55HF8NVT*MTY4NjI0NDIzNi42LjEuMTY4NjI0NDY4My4wLjAuMA..",
      title: "Functionalities",
      items: [
        {
          icon: <AccountBoxOutlined />,
          text: "Sign In / Sign Up",
        },
        {
          icon: <SpaceDashboardOutlined />,
          text: "Car Catalogs",
        },
        {
          icon: <EditCalendarOutlined />,
          text: "Car Booking",
        },
        {
          icon: <CreditCardOutlined />,
          text: "Payment with Stripe",
        },
      ],
    },
    {
      type: "technology",
      imgUrl: "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-d2496.appspot.com/o/rideease-3.png?alt=media&token=e080f460-c344-4d83-81eb-2f448605ede7&_gl=1*1c8r0dp*_ga*MTA3MDYzMzc5Ni4xNjg1OTYxNzE3*_ga_CW55HF8NVT*MTY4NjI0NDIzNi42LjEuMTY4NjI0NDcwMy4wLjAuMA..",
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
          icon: "/images/languages/tailwind.svg",
          text: "TailwindCSS",
        },
        {
          icon: "/images/languages/framer.svg",
          text: "Framer Motion",
        },
      ],
    },
    {
      type: "socials",
      imgUrl: "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-d2496.appspot.com/o/rideease-4.png?alt=media&token=151b6d13-f7be-46f8-8414-a1bc0f2bfcec&_gl=1*17u2e11*_ga*MTA3MDYzMzc5Ni4xNjg1OTYxNzE3*_ga_CW55HF8NVT*MTY4NjI0NDIzNi42LjEuMTY4NjI0NDcyMC4wLjAuMA..",
      title: "Check It Out 👇",
      items: [
        {
          icon: "/images/social/new-window.svg",
          text: "Demo",
          href: "https://car-rental-eight.vercel.app"
        },
        {
          icon: "/images/social/github.svg",
          text: "GitHub",
          href: "https://github.com/taravannheng/rideease"
        },
      ],
    },
  ]
};

export default rideease;