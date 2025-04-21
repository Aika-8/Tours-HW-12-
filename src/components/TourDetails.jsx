import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { useTours } from "../hooks/useTours";

export const TourDetails = () => {
  const { id } = useParams();
  const [tour, setTour] = useState(null);
  const { getTourById } = useTours();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchTour = async () => {
      const data = await getTourById(id);
      if (data) setTour(data);
    };
    fetchTour();
  }, [id, getTourById]);
  if (!tour) return <p>Загрузка...</p>;
  return (
    <>
      <StyledBlockDetails>
        <StyledImageBlock>
          <StyledImage src={tour.url} alt={tour.title} />
        </StyledImageBlock>
        <p>
          <StyledSpan>Title: </StyledSpan>
          {tour.title}
        </p>
        <p>
          <StyledSpan>Price: </StyledSpan>
          {tour.price}$
        </p>
        <StyledDescription>
          <StyledSpan>Description: </StyledSpan>
          {tour.description}
        </StyledDescription>
        <p>
          <StyledSpan>Date: </StyledSpan>
          {new Date(tour.date).toLocaleDateString("ru-RU")}
        </p>
      </StyledBlockDetails>
      <StyledBackBtn onClick={() => navigate("/")}>← Назад</StyledBackBtn>
    </>
  );
};
const StyledBlockDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
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
const StyledSpan = styled.span`
  font-size: 14px;
  font-style: italic;
  color: gray;
`;
const StyledDescription = styled.p`
  width: 295px;
  height: fit-content;
  text-align: justify;
`;
const StyledBackBtn = styled.button`
 width: 100px;
  height: 30px;
  position: fixed;
  bottom: 20px;
  border: none;
  border-radius: 20px;
  background-color: #e0e0e0;
  color: #333;
`;
