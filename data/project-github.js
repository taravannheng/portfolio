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
      imgUrl: "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-d2496.appspot.com/o/github-1.json?alt=media&token=c8416694-f74e-460a-923a-d18d6372f4f5&_gl=1*s0yds7*_ga*MTgxMDE4NjgxMi4xNjg2NjU2NzU5*_ga_CW55HF8NVT*MTY4NjY2MTY5My4yLjEuMTY4NjY2Mjg1OC4wLjAuMA..",
      title: "GitHub Profiles",
      mediaBackgroundColor: '#E6D9C3',
      description:
        `GitHub Profiles is a personal project that allows users to search for GitHub profiles, explore available users, and view profile summaries. It provides a seamless interface to search and discover GitHub users, enabling users to gather essential information and get a quick overview of a user's profile details.`,
      isFeatured: false
    },
    {
      type: "functionality",
      imgUrl: "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-d2496.appspot.com/o/github-2.json?alt=media&token=41e05d13-e15a-49fc-84f2-38b7d92d154e&_gl=1*ndhou3*_ga*MTgxMDE4NjgxMi4xNjg2NjU2NzU5*_ga_CW55HF8NVT*MTY4NjY2MTY5My4yLjEuMTY4NjY2Mjg3Ny4wLjAuMA..",
      mediaBackgroundColor: '#E6D9C3',
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
      imgUrl: "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-d2496.appspot.com/o/github-2.json?alt=media&token=41e05d13-e15a-49fc-84f2-38b7d92d154e&_gl=1*ndhou3*_ga*MTgxMDE4NjgxMi4xNjg2NjU2NzU5*_ga_CW55HF8NVT*MTY4NjY2MTY5My4yLjEuMTY4NjY2Mjg3Ny4wLjAuMA..",
      mediaBackgroundColor: '#E6D9C3',
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
      imgUrl: "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-d2496.appspot.com/o/github-2.json?alt=media&token=41e05d13-e15a-49fc-84f2-38b7d92d154e&_gl=1*ndhou3*_ga*MTgxMDE4NjgxMi4xNjg2NjU2NzU5*_ga_CW55HF8NVT*MTY4NjY2MTY5My4yLjEuMTY4NjY2Mjg3Ny4wLjAuMA..",
      mediaBackgroundColor: '#E6D9C3',
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