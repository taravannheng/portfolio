import styled from "styled-components";
import {
  Tab,
  Tabs,
} from "@mui/material";

export const TabsSC = styled(Tabs)`
  padding-top: 80px !important;
  padding-bottom: 40px !important;
  background-color: transparent !important;
`;

export const TabSC = styled(Tab)`
  border-radius: 1000px !important;
  background-color: #262626 !important;
  color: #FFFFFF !important;
  margin: 0px !important;
  padding: 8px 40px !important;
  margin-right: 16px !important;
  text-transform: none !important;
  font-family: 'Inter', sans-serif !important;
  font-weight: 400 !important;
  font-size: 14px !important;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #3076FF !important;
  }

  & > * {
    margin: 0 !important;
    padding: 0 !important;
  }
`;