import React, { useReducer } from "react";
import { TOUR_APP_TYPES } from "../utils/constants/generals";
import styled from "styled-components";
import { reducer } from "../utils/constants/reducer";
import { toast } from "react-toastify";
import { axiosInstance } from "../config/axiosInstance";
const initialState = {
  title: "",
  url: "",
  price: "",
  date: "",
  description: "",
};

export const TourForm = ({ refreshTours }) => {
  console.log("refreshTours in App: ", refreshTours);
  const [state, dispatch] = useReducer(reducer, initialState);
  const { title, url, price, date, description } = state;
  const handleSubmitTour = async (e) => {
    e.preventDefault();
    console.log(state);

    if (!title || !url || !price || !date || !description) {
      alert("Заполните все поля");
    } else {
      dispatch({ type: TOUR_APP_TYPES.RESET });
      try {
        const response = await axiosInstance.post("/tour_item", state);
        toast.success("Тур успешно создан");
        refreshTours();
        console.log(response.data);
      } catch (error) {
        console.error(error);
        toast.error("Не удалось создать новый тур!");
      }
    }
  };
  return (
    <StyledWrapper>
      <StyledForm onSubmit={handleSubmitTour}>
        <StyledInput
          type="text"
          placeholder="Enter the name of the tour"
          value={state.title}
          onChange={(e) =>
            dispatch({
              type: TOUR_APP_TYPES.TITLE,
              payload: e.target.value,
            })
          }
        />
        <StyledInput
          type="url"
          placeholder="Enter url"
          value={state.url}
          onChange={(e) =>
            dispatch({ type: TOUR_APP_TYPES.URL, payload: e.target.value })
          }
        />
        <StyledInput
          type="number"
          placeholder="Enter price"
          value={state.price}
          onChange={(e) =>
            dispatch({ type: TOUR_APP_TYPES.PRICE, payload: e.target.value })
          }
        />
        <StyledInput
          type="date"
          value={state.date}
          onChange={(e) =>
            dispatch({ type: TOUR_APP_TYPES.DATE, payload: e.target.value })
          }
        />
        <StyledInput
          type="text"
          placeholder="Enter description"
          value={state.description}
          onChange={(e) =>
            dispatch({
              type: TOUR_APP_TYPES.DESCRIPTION,
              payload: e.target.value,
            })
          }
        />
        <StyledButton type="submit">add-tour</StyledButton>
      </StyledForm>
    </StyledWrapper>
  );
};
const StyledWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
`;
const StyledForm = styled.form`
  width: 350px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  border-radius: 8px;
  padding: 30px 25px;
  box-shadow: 0 5px 30px 0 rgba(0, 0, 0, 0.2);
`;
const StyledInput = styled.input`
  width: 100%;
  height: 35px;
  border: 1px solid gray;
  border-radius: 8px;
  padding: 0px 15px;
`;
const StyledButton = styled.button`
  width: 100%;
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
