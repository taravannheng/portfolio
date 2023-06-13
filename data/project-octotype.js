import {
  KeyboardAltOutlined,
  ToggleOnOutlined,
  BarChartOutlined,
  EqualizerOutlined
} from "@mui/icons-material";

const octotype = {
  id: 'octotype',
  imgUrl: "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-d2496.appspot.com/o/octotype-logo.json?alt=media&token=d600530d-02c7-476f-aeb9-1d1a6462452f&_gl=1*xj2hzi*_ga*NTk4OTU5MDExLjE2ODY1NjE3NjQ.*_ga_CW55HF8NVT*MTY4NjU2MTc2NC4xLjEuMTY4NjU2MTk1Ni4wLjAuMA..",
  previewImgUrl: "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-d2496.appspot.com/o/octotype-preview.json?alt=media&token=d23fe567-071c-42c7-98b0-ed23b2985af5&_gl=1*1wk0ksd*_ga*NTk4OTU5MDExLjE2ODY1NjE3NjQ.*_ga_CW55HF8NVT*MTY4NjU2NTEzNy4yLjEuMTY4NjU2NTIzNC4wLjAuMA..",
  shortDescription: 'A typing website',
  slides: [
    {
      id: 'octotype',
      type: "summary",
      imgUrl: "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-d2496.appspot.com/o/octotype-1.json?alt=media&token=17e3ab8e-78bd-4a8e-b400-b12c60662a22&_gl=1*d1gpbw*_ga*MTgxMDE4NjgxMi4xNjg2NjU2NzU5*_ga_CW55HF8NVT*MTY4NjY3NjU1NC4zLjEuMTY4NjY3NjcwNS4wLjAuMA..",
      mediaBackgroundColor: '#0071FF',
      title: "Octotype",
      description:
        `Octotype is a versatile typing app designed to improve your typing skills. With a user-friendly interface, it offers a range of features to enhance your typing experience. Keep track of your progress with comprehensive statistics, including words per minute and typing accuracy, helping you identify areas for improvement. Octotype also offers a customizable theme, allowing you to switch effortlessly between light and dark modes to suit your preference.`,
      isFeatured: false
    },
    {
      type: "functionality",
      imgUrl: "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-d2496.appspot.com/o/octotype-2.json?alt=media&token=4e2eb078-45da-4479-a5d6-836260bcb4c5&_gl=1*3qait3*_ga*MTgxMDE4NjgxMi4xNjg2NjU2NzU5*_ga_CW55HF8NVT*MTY4NjY3NjU1NC4zLjEuMTY4NjY3NjcyMC4wLjAuMA..",
      mediaBackgroundColor: '#0071FF',
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
      imgUrl: "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-d2496.appspot.com/o/octotype-3.json?alt=media&token=c7e40ae9-0e1a-45ac-a7b8-f774a25d95e8&_gl=1*3ulyxd*_ga*MTgxMDE4NjgxMi4xNjg2NjU2NzU5*_ga_CW55HF8NVT*MTY4NjY3NjU1NC4zLjEuMTY4NjY3NjczNy4wLjAuMA..",
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
      imgUrl: "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-d2496.appspot.com/o/octotype-4.json?alt=media&token=5efa2f64-3873-413a-80ee-73c38449b3ce&_gl=1*obt09c*_ga*MTgxMDE4NjgxMi4xNjg2NjU2NzU5*_ga_CW55HF8NVT*MTY4NjY3NjU1NC4zLjEuMTY4NjY3Njc1NS4wLjAuMA..",
      mediaBackgroundColor: '#0071FF',
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