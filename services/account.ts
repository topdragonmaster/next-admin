import { initiateAccount } from "@/store/actions/accountAction";
import axios from "axios";

export const getAccount = async (dispatch) => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/account`,
    );
    const data = res.data;
    console.log(data)
    return data.success && dispatch(initiateAccount(data.accounts));
  } catch (error) {
    console.log("Error fetching data:", error);
  }
};

export const deleteAccount = async (_id) => {
  try {
    const res = await axios.delete(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/account/delete/${_id}`);
    const data = res.data;
    return data;
  } catch (error) {
    console.log("error in update (service) => ", error);
  }
};

export const createAccount = async (formData) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/account/create`,
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