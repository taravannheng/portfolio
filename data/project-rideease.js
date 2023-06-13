import {
  AccountBoxOutlined,
  SpaceDashboardOutlined,
  CreditCardOutlined,
  EditCalendarOutlined  
} from "@mui/icons-material";

const rideease = {
  id: 'rideease',
  imgUrl: "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-d2496.appspot.com/o/rideease-logo.json?alt=media&token=511b72bb-3ad9-486d-9540-84db2dc38bee&_gl=1*176s3qu*_ga*NTk4OTU5MDExLjE2ODY1NjE3NjQ.*_ga_CW55HF8NVT*MTY4NjU2MTc2NC4xLjEuMTY4NjU2MTkxMy4wLjAuMA..",
  previewImgUrl: "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-d2496.appspot.com/o/rideease-preview.json?alt=media&token=a4ec1466-c238-4945-ac9a-023825650ef1&_gl=1*10trw7*_ga*NTk4OTU5MDExLjE2ODY1NjE3NjQ.*_ga_CW55HF8NVT*MTY4NjU2NTEzNy4yLjEuMTY4NjU2NTI1Ny4wLjAuMA..",
  shortDescription: 'A car rental website',
  slides: [
    {
      id: 'rideease',
      type: "summary",
      imgUrl: "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-d2496.appspot.com/o/rideease-1.json?alt=media&token=a05e2346-3cfb-40bd-8ffc-b09dc398b29d&_gl=1*wig16z*_ga*MTgxMDE4NjgxMi4xNjg2NjU2NzU5*_ga_CW55HF8NVT*MTY4NjY3NjU1NC4zLjEuMTY4NjY3Nzg3NS4wLjAuMA..",
      mediaBackgroundColor: '#0071FF',
      title: "RideEase",
      description:
        `RideEase is a user-friendly car rental website that offers a seamless experience for users to find, book, and rent cars. With a hassle-free sign-in process, users can quickly create an account using their email and password or sign up with their Google account. \n The website provides a wide range of car catalogs, allowing users to browse and choose the perfect vehicle for their needs. Once a car is selected, the intuitive booking system makes it easy to reserve the car for the desired dates and times. \n RideEase also offers secure payment options through Stripe, ensuring a smooth and reliable transaction process. Whether it's for a weekend getaway or a business trip, RideEase is the go-to platform for convenient and reliable car rentals.`,
      isFeatured: false
    },
    {
      type: "functionality",
      imgUrl: "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-d2496.appspot.com/o/rideease-2.json?alt=media&token=3e80b65c-0468-4b8d-81ba-8ae522fa1583&_gl=1*19u0c77*_ga*MTgxMDE4NjgxMi4xNjg2NjU2NzU5*_ga_CW55HF8NVT*MTY4NjY3NjU1NC4zLjEuMTY4NjY3Nzg5NS4wLjAuMA..",
      mediaBackgroundColor: '#0071FF',
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
      imgUrl: "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-d2496.appspot.com/o/rideease-2.json?alt=media&token=3e80b65c-0468-4b8d-81ba-8ae522fa1583&_gl=1*19u0c77*_ga*MTgxMDE4NjgxMi4xNjg2NjU2NzU5*_ga_CW55HF8NVT*MTY4NjY3NjU1NC4zLjEuMTY4NjY3Nzg5NS4wLjAuMA..",
      mediaBackgroundColor: '#0071FF',
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
      imgUrl: "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-d2496.appspot.com/o/rideease-2.json?alt=media&token=3e80b65c-0468-4b8d-81ba-8ae522fa1583&_gl=1*19u0c77*_ga*MTgxMDE4NjgxMi4xNjg2NjU2NzU5*_ga_CW55HF8NVT*MTY4NjY3NjU1NC4zLjEuMTY4NjY3Nzg5NS4wLjAuMA..",
      mediaBackgroundColor: '#0071FF',
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