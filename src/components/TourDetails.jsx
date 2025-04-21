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
        <BlockDataTour>
          <div>
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
          </div>
        </BlockDataTour>
      </StyledBlockDetails>
      <StyledBackBtn onClick={() => navigate("/")}>← Назад</StyledBackBtn>
    </>
  );
};
const StyledBlockDetails = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  padding: 0px 30px;
`;
const StyledImageBlock = styled.div`
  width: 300px;
  height: auto;
  flex-grow: 1.5;
`;
const BlockDataTour = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  border-radius: 10px;
  margin-top: 50px;
  padding: 10px 0px;
  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.1);
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
