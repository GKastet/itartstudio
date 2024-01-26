import styled from "styled-components";
import accent from "../../../images/accent.png"

export const StyledSecondaryTitle = styled.h2`
    font-family: "700-Montserrat";
    font-size: 50px;

    span{
        display: inline-block;
        height: 72px;
        background-image: url(${accent});
        background-size: 100% 68px;
        background-repeat: no-repeat;
    }
`;