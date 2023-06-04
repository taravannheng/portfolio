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
`;