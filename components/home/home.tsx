import { useState, useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import HeaderSection from "../header/header";
import HeroSection from "../hero/hero";
import SkillsSection from "../skills/skills";
import ContactSection from "../contact/contact";
import FooterSection from "../footer/footer";
import Loader from "../loader/loader";
import classes from "./home.module.scss";
import { TabSC, TabsSC } from "./home.style";
import ProjectSection from "../project/project";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      className={classes.tabpanel}
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
          <Box>{children}</Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Home = () => {
  const [value, setValue] = useState(0);
  const [animationLoaded, setAnimationLoaded] = useState(false);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <div className={classes.home}>
        <HeaderSection />
        <Box sx={{ width: "100%" }}>
          <Box>
            <TabsSC
              centered
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              sx={{
                "& .MuiTabs-indicator": {
                  display: "none !important",
                },
                "& .Mui-selected": {
                  backgroundColor: "#3075FF !important",
                },
              }}
            >
              <TabSC label="Profile" {...a11yProps(0)} disableRipple />
              <TabSC label="Projects" {...a11yProps(1)} disableRipple />
              <TabSC label="Contact" {...a11yProps(2)} disableRipple />
            </TabsSC>
          </Box>
          <TabPanel value={value} index={0}>
            <HeroSection animationLoaded={animationLoaded} setAnimationLoaded={setAnimationLoaded} />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <ProjectSection />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <ContactSection />
          </TabPanel>
        </Box>
        <FooterSection />
      </div>
    </>
  );
};

export default Home;
