import styled from "styled-components";

export const ModalContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
`;

export const ImgThumb = styled.div`
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    /* object-fit: cover; */
  }
`;