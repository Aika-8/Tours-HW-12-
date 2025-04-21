import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const TourItem = ({ id, title, url, onDelete }) => {
  return (
    <StyledLi>
      <StyledImageBlock>
        <StyledImage src={url} alt={title} />
      </StyledImageBlock>
      <h2>{title}</h2>
      <ContainerBtn>
        <StyledShowMore to={`/tour/${id}`}>Show more</StyledShowMore>
        <StyledButton onClick={() => onDelete(id)}>delete</StyledButton>
      </ContainerBtn>
    </StyledLi>
  );
};
const StyledLi = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  padding-bottom: 20px;
  box-shadow: 0 5px 30px 0 rgba(0, 0, 0, 0.2);
`;
const StyledImageBlock = styled.div`
  width: 300px;
  height: 200px;
`;
const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  image-rendering: pixelated;
`;
const ContainerBtn = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20%
`;
const StyledButton = styled.button`
  width: 100px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0b4ed3;
  color: #ffffff;
  text-transform: uppercase;
  border-radius: 8px;
  cursor: pointer;
  border: none;
  transition: transform 0.4s ease-in-out;
  &:active {
    transform: scale(1.1);
  }
  &:hover {
    box-shadow: 4px 4px 8px 0px #0b4ed3;
  }
`;
const StyledShowMore = styled(Link)`
  width: 100px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #0b4ed3;
  border-radius: 8px;
  text-decoration: none;
  color: black;
`;
