import styled from "styled-components";
import {
  Stack
} from "@mui/material";

export const StackSC = styled(Stack)`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap !important;
  width: clamp(420px, 420px, 420px) !important;
  margin-bottom: 24px;

  @media only screen and (max-width: 600px) {
    width: clamp(100%, 100%, 100%) !important;
  }
`;