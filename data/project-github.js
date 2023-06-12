import {
  SearchOutlined,
  GridViewOutlined,
  AccountCircleOutlined
} from "@mui/icons-material";

const github = {
  id: 'github',
  imgUrl: "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-d2496.appspot.com/o/github-logo.json?alt=media&token=fedbec75-7f8b-41d6-a68b-50381bb275ea&_gl=1*zv0wtb*_ga*NTk4OTU5MDExLjE2ODY1NjE3NjQ.*_ga_CW55HF8NVT*MTY4NjU2MTc2NC4xLjEuMTY4NjU2MTg5Mi4wLjAuMA..",
  previewImgUrl: "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-d2496.appspot.com/o/github-profiles---preview.json?alt=media&token=4b2b0b5e-b63e-43c7-9141-64b2e12f677b&_gl=1*ugxgvw*_ga*NTk4OTU5MDExLjE2ODY1NjE3NjQ.*_ga_CW55HF8NVT*MTY4NjU2NTEzNy4yLjEuMTY4NjU2NTE4NS4wLjAuMA..",
  shortDescription: 'A website for searching GitHub users',
  slides: [
    {
      type: "summary",
      imgUrl: "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-d2496.appspot.com/o/github-1.png?alt=media&token=edc3b551-3861-4f06-9ea4-322baa5a2dad&_gl=1*w78rqm*_ga*MTA3MDYzMzc5Ni4xNjg1OTYxNzE3*_ga_CW55HF8NVT*MTY4NjIxMjQwMi40LjEuMTY4NjIxMzAwNC4wLjAuMA..",
      title: "GitHub Profiles",
      description:
        `GitHub Profiles is a personal project that allows users to search for GitHub profiles, explore available users, and view profile summaries. It provides a seamless interface to search and discover GitHub users, enabling users to gather essential information and get a quick overview of a user's profile details.`,
      isFeatured: false
    },
    {
      type: "functionality",
      imgUrl: "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-d2496.appspot.com/o/github-2.png?alt=media&token=f34f6d11-651a-4265-a999-18e80a019b6c&_gl=1*1t5y07h*_ga*MTA3MDYzMzc5Ni4xNjg1OTYxNzE3*_ga_CW55HF8NVT*MTY4NjIxMjQwMi40LjEuMTY4NjIxMzAyNi4wLjAuMA..",
      title: "Functionalities",
      items: [
        {
          icon: <SearchOutlined />,
          text: "Search for users",
        },
        {
          icon: <GridViewOutlined />,
          text: "View available users",
        },
        {
          icon: <AccountCircleOutlined />,
          text: "Account Overview",
        },
      ],
    },
    {
      type: "technology",
      imgUrl: "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-d2496.appspot.com/o/github-3.png?alt=media&token=8299c985-8832-4251-bcb7-fcead56a8a22&_gl=1*1r431cu*_ga*MTA3MDYzMzc5Ni4xNjg1OTYxNzE3*_ga_CW55HF8NVT*MTY4NjIxMjQwMi40LjEuMTY4NjIxMjQ3Ny4wLjAuMA..",
      title: "Frontend Technologies",
      items: [
        {
          icon: "/images/languages/vuejs.svg",
          text: "Vue.js",
        },
        {
          icon: "/images/languages/typescript.svg",
          text: "TypeScript",
        },
        {
          icon: "/images/languages/sass.svg",
          text: "Sass",
        },
      ],
    },
    {
      type: "socials",
      imgUrl: "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-d2496.appspot.com/o/github-4.png?alt=media&token=f4a7c3f0-d120-4181-9a56-f2314852cc99&_gl=1*zywwft*_ga*MTA3MDYzMzc5Ni4xNjg1OTYxNzE3*_ga_CW55HF8NVT*MTY4NjIxMjQwMi40LjEuMTY4NjIxMzA0OS4wLjAuMA..",
      title: "Check It Out 👇",
      items: [
        {
          icon: "/images/social/new-window.svg",
          text: "Demo",
          href: "https://github-profiles-roan.vercel.app"
        },
        {
          icon: "/images/social/github.svg",
          text: "GitHub",
          href: "https://github.com/taravannheng/github-profiles"
        },
        {
          icon: "/images/social/dribbble.svg",
          text: "Dribbble",
          href: "https://dribbble.com/shots/21440950-github-profiles"
        },
      ],
    },
  ]
};

export default github;