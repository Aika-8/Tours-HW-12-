import { useCallback, useEffect, useState } from "react";
import { axiosInstance } from "../config/axiosInstance";
import { toast } from "react-toastify";

export const useTours = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const getTours = useCallback(async () => {
    try {
      const { data } = await axiosInstance.get("tour_item");
      setTours(data);
    } catch (error) {
      toast.error("Не удалось получить данные!", error);
    } finally {
      setLoading(false);
    }
  }, []);
  useEffect(() => {
    getTours();
  }, [getTours]);
  const handleDelete = async (id) => {
    try {
      await axiosInstance.delete(`tour_item/${id}`);
      toast.success("Тур успешно удален!");
      getTours();
    } catch (error) {
      toast.error("Ошибка при удалении тура", error);
    }
  };
  const getTourById = async (id) => {
    try {
      const { data } = await axiosInstance.get(`tour_item/${id}`);
      return data;
    } catch (error) {
      toast.error("Ошибка при получении тура", error);
      return null;
    }
  };
  return {
    tours,
    loading,
    refreshTours: getTours,
    onDelete: handleDelete,
    getTourById: getTourById,
  };
};
