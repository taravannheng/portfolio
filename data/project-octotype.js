import {
  KeyboardAltOutlined,
  ToggleOnOutlined,
  BarChartOutlined,
  EqualizerOutlined
} from "@mui/icons-material";

const octotype = {
  id: 'octotype',
  imgUrl: "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-d2496.appspot.com/o/octotype-logo.json?alt=media&token=d600530d-02c7-476f-aeb9-1d1a6462452f&_gl=1*xj2hzi*_ga*NTk4OTU5MDExLjE2ODY1NjE3NjQ.*_ga_CW55HF8NVT*MTY4NjU2MTc2NC4xLjEuMTY4NjU2MTk1Ni4wLjAuMA..",
  previewImgUrl: "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-d2496.appspot.com/o/octotype-preview.gif?alt=media&token=0653419d-fecd-400d-b23d-e1b4e53f5d13&_gl=1*wo1nr*_ga*ODg2ODY0MDE0LjE2ODYzODc1NDk.*_ga_CW55HF8NVT*MTY4NjQwMTgyOS4yLjEuMTY4NjQwMzgyOS4wLjAuMA..",
  shortDescription: 'A typing website',
  slides: [
    {
      id: 'octotype',
      type: "summary",
      imgUrl: "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-d2496.appspot.com/o/octotype-1.png?alt=media&token=2ae30a8d-06e5-4ce5-96ef-a93808074711&_gl=1*6ksypc*_ga*MTA3MDYzMzc5Ni4xNjg1OTYxNzE3*_ga_CW55HF8NVT*MTY4NjIzOTAyMi41LjEuMTY4NjIzOTU3My4wLjAuMA..",
      title: "Octotype",
      description:
        `Octotype is a versatile typing app designed to improve your typing skills. With a user-friendly interface, it offers a range of features to enhance your typing experience. Keep track of your progress with comprehensive statistics, including words per minute and typing accuracy, helping you identify areas for improvement. Octotype also offers a customizable theme, allowing you to switch effortlessly between light and dark modes to suit your preference.`,
      isFeatured: false
    },
    {
      type: "functionality",
      imgUrl: "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-d2496.appspot.com/o/octotype-2.png?alt=media&token=2ffadd8e-c25e-4cce-bcca-f804736a27a7&_gl=1*rhtkf4*_ga*MTA3MDYzMzc5Ni4xNjg1OTYxNzE3*_ga_CW55HF8NVT*MTY4NjIzOTAyMi41LjEuMTY4NjIzOTcwNC4wLjAuMA..",
      title: "Functionalities",
      items: [
        {
          icon: <KeyboardAltOutlined />,
          text: "Practice Typing",
        },
        {
          icon: <ToggleOnOutlined />,
          text: "Theme Toggle",
        },
        {
          icon: <BarChartOutlined />,
          text: "Word Per Minute Stat",
        },
        {
          icon: <EqualizerOutlined />,
          text: "Accuracy Stat",
        },
      ],
    },
    {
      type: "technology",
      imgUrl: "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-d2496.appspot.com/o/octotype-3.png?alt=media&token=8b317bab-95f4-4ada-a2ca-7b489dd7fd08&_gl=1*1m86cz*_ga*MTA3MDYzMzc5Ni4xNjg1OTYxNzE3*_ga_CW55HF8NVT*MTY4NjIzOTAyMi41LjEuMTY4NjIzOTc4Ny4wLjAuMA..",
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
      imgUrl: "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-d2496.appspot.com/o/octotype-4.png?alt=media&token=107ed1a2-b736-40fe-aad2-39c16041c96f&_gl=1*1o43jn3*_ga*MTA3MDYzMzc5Ni4xNjg1OTYxNzE3*_ga_CW55HF8NVT*MTY4NjIzOTAyMi41LjEuMTY4NjIzOTg2Ny4wLjAuMA..",
      title: "Check It Out 👇",
      items: [
        {
          icon: "/images/social/new-window.svg",
          text: "Demo",
          href: "https://octotype-ivory.vercel.app"
        },
        {
          icon: "/images/social/github.svg",
          text: "GitHub",
          href: "https://github.com/taravannheng/octotype"
        },
      ],
    },
  ]
};

export default octotype;