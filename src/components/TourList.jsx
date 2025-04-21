import React, { useState } from "react";
import { TourItem } from "./TourItem";
import styled from "styled-components";

export const TourList = ({ tours = [], onDelete }) => {
  return (
    <StyledUl>
      {tours?.map((tour) => (
        <TourItem key={tour.id} {...tour} onDelete={onDelete} />
      ))}
    </StyledUl>
  );
};
const StyledUl = styled.ul`
  display: flex;
  /* flex-wrap: wrap; */
  align-items: flex-start;
  justify-content: center;
  gap: 50px;
  margin-top: 100px;
`;
