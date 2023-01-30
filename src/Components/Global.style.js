import { createGlobalStyle} from "styled-components";
import img from "../Images/Bubble.png"

export const GlobalStyle = createGlobalStyle`
html{
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: cover
}
`