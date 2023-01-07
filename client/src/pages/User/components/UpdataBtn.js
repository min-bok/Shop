import React from "react";
import axios from "axios";
import Button from "../../../components/Button";

export default function UpdataBtn(props) {
  const updataUserData = async (e) => {
    e.preventDefault();
    const url = `/api/user/updateUserData`;
    try {
      const val = [
        props.name,
        props.address,
        props.detail,
        props.postCode,
        props.phone,
        props.userId,
      ];

      const result = axios.put(url, {
        val,
      });
      alert("수정이 완료되었습니다.");
      window.location.reload();
    } catch (err) {
      alert(err.response.data.err);
    }
  };
  return (
    <Button
      name="수정완료"
      method={updataUserData}
      color="#fdfdfd"
      fontSize="12px"
      height="40px"
    />
  );
}
