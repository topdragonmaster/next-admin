import axios from "axios";
import { initiateStockCode } from "@/store/actions/stockCodeAction";

export const getStockCode = async (dispatch) => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/stockCode`,
    );
    const data = res.data;
    console.log(data)
    return data.success && dispatch(initiateStockCode(data.stockCodes));
  } catch (error) {
    console.log("Error fetching data:", error);
  }
};

export const deleteStockCode = async (_id) => {
  try {
    const res = await axios.delete(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/stockCode/delete/${_id}`);
    const data = res.data;
    return data;
  } catch (error) {
    console.log("error in update (service) => ", error);
  }
};

export const createStockCode = async (formData) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/stockCode/create`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );
    const data = res.json();
    return data;
  } catch (error) {
    console.log("error in register (service) => ", error);
  }
};