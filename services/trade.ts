import { initiateTrade } from "@/store/actions/tradeAction";
import axios from "axios";

export const getTrade = async (dispatch) => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/trade`,
    );
    const data = res.data;
    console.log(data)
    return data.success && dispatch(initiateTrade(data.trades));
  } catch (error) {
    console.log("Error fetching data:", error);
  }
};

export const deleteTrade = async (_id) => {
  try {
    const res = await axios.delete(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/trade/delete/${_id}`);
    const data = res.data;
    return data;
  } catch (error) {
    console.log("error in update (service) => ", error);
  }
};

export const createTrade = async (formData) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/trade/create`,
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
}
;
export const updateTrade = async (formData) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/trade/update`,
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