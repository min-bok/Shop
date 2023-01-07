import React from "react";
import axios from "axios";
import ButtonComponent from "../../components/Button";
import { useState } from "react";
import { useEffect } from "react";

export default function UpdatePassword(props) {
  // 버튼 disabled를 관리
  const [disabled, setDisabled] = useState(true);
  // 비밀번호 변경 여부를 관리
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    checkPassword();
  }, [props.newPassword]);

  // 새로운 비밀번호가 유효성 검증을 통과해야 버튼 disabled를 해제
  const checkPassword = () => {
    if (props.newPassword) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  // 버튼 공통 설정
  const Button = (props) => {
    return (
      <ButtonComponent
        name={props.name}
        method={props.method}
        width={props.width}
        height="40px"
        color={props.color}
        bgColor={props.bgColor}
        fontSize="10px"
        disabled={props.disabled}
      />
    );
  };
  // 비밀번호 input disable 및 버튼 name 변경하는 함수
  const inputDisable = () => {
    props.setDisabled(!props.disabled);
  };

  const updatePassword = async () => {
    const url = `/api/auth/updateUserPassword`;
    const val = [props.initPassword, props.newPassword, props.userId];

    try {
      const result = await axios.put(url, { val });
      alert("비밀번호가 변경되었습니다 :)");
      setIsUpdate(true);
      // window.location.reload();
    } catch (err) {
      console.log(err);
      if (err.request.status === 400) {
        alert(err.response.data.msg);
      }
    }
    inputDisable();
  };

  return (
    <>
      {props.disabled ? (
        isUpdate ? (
          <Button name="✓" width="50px" bgColor="#FFAF93" color="#fdfdfd" />
        ) : (
          <Button
            name="비밀번호 변경"
            method={inputDisable}
            width="90px"
            bgColor="#f2f2f2"
          />
        )
      ) : (
        <Button
          name="변경 완료"
          method={updatePassword}
          disabled={disabled}
          width="90px"
          bgColor="#f2f2f2"
        />
      )}
    </>
  );
}
