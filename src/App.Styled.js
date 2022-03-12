import styled from "styled-components";
import { devices } from "./components/devices";

export const HeaderContainer = styled.header`
  padding: 10px 0 10px 60px;
  width: 100%;
  font-weight: 800;
  @media ${devices.lg} {
    padding: 20px 0px 10px 100px;
  }
`;
