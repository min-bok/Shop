import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import axios from "axios";

const Form = styled.form`
  width: 100%;
`;

export default function LoginVal() {
  // input values
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disabled, setDisable] = useState(true); // 버튼 활성화 여부 관리

  useEffect(() => {
    aCtiveBtn();
  }, [email, password]);

  //   이메일 입력 값 받아오는 함수
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  // 비밀번호 입력 값 받아오는 함수
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  // 버튼 활성화 시키는 버튼
  const aCtiveBtn = async () => {
    const regex = new RegExp(
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
    );
    // 올바른 이메일 형식 및 비밀번호가 8자리 이상 입력되었을때 버튼을 활성화
    if (regex.test(email) && password.length >= 8) {
      setDisable(false);
    } else {
      // 버튼 비활성화
      setDisable(true);
    }
  };

  //   로그인 데이터 전송하는 함수
  const SubmitLoginData = async (e) => {
    e.preventDefault();
    const url = "/api/auth/login";
    const val = [email, password];

    try {
      // 로그인 성공시
      const result = await axios.post(url, {
        data: {
          val,
        },
      });

      // 유저 아이디 값과 type을 세션스토리지에 저장
      sessionStorage.setItem("userId", result.data.id);
      sessionStorage.setItem("type", result.data.type); // type 1-user / 2-seller

      // 메인화면으로 이동
      window.location.href = "/";
    } catch (err) {
      // 로그인 실패시 에러메시지를 띄우고 입력창을 초기화함
      alert(err.response.data.msg);
      setEmail("");
      setPassword("");
    }
  };

  return (
    <Form method="post" onSubmit={SubmitLoginData}>
      {/* method={handleEmail} 은 onChange={handleEmail}와 동일함 */}
      <Input
        method={handleEmail}
        type="email"
        width="100%"
        height="40px"
        border="none"
        placeholder="이메일"
        focus="2px solid #6D94CC"
        value={email}
      />
      <Input
        method={handlePassword}
        type="password"
        width="100%"
        height="40px"
        border="none"
        placeholder="비밀번호"
        focus="2px solid #6D94CC"
        margin="40px 0 0 0"
        value={password}
      />
      <Button
        name="로그인"
        color="#fdfdfd"
        width="100%"
        height="40px"
        margin="40px 0 0 0"
        disabled={disabled}
      />
    </Form>
  );
}
