import React, { useEffect, useState } from "react";
import styled from "styled-components";
import InputComponent from "../../components/Input";
import ButtonComponent from "../../components/Button";
import axios from "axios";
import PostCode from "react-daum-postcode";

const Cont = styled.div`
  position: absolute;
  width: 350px;
  height: 300px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  background-color: pink;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
`;

export default function Mypage() {
  const userId = window.sessionStorage.getItem("userId");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    getInitUserData();
  }, []);

  const getInitUserData = async () => {
    const url = `/api/product/getUserData`;
    try {
      const result = await axios.get(url, {
        params: {
          val: userId,
        },
      });

      const data = result.data[0][0];

      setName(data.name);
      setEmail(data.email);
      setPassword(data.password);
      setAddress(data.address);
      setPhone(data.phone_number);
    } catch (err) {
      console.log(err);
    }
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  //   const Input = (props) => {
  //     return (
  //       <InputComponent
  //         method={props.method}
  //         width="100%"
  //         height="40px"
  //         border="none"
  //         type={props.type}
  //         value={props.value}
  //         placeholder={props.placeholder}
  //         focus="2px solid #6D94CC"
  //       />
  //     );
  //   };

  const Button = (props) => {
    return (
      <ButtonComponent
        name={props.name}
        bgColor={props.bgColor}
        color={props.color}
      />
    );
  };

  return (
    <Cont>
      <Input
        placeholder="이름"
        value={name ? name : ""}
        onChange={handleName}
      />
      <Input placeholder="이메일" value={email} onChange={handleEmail} />
      <Input placeholder="비밀번호" type="password" />
      <Button name="비밀번호 변경하기" bgColor="#f2f2f2" />
      <Input
        type="tel"
        placeholder="전화번호"
        value={phone ? phone : ""}
        onChange={handlePhone}
      />
      <Input placeholder="도로명주소" />
      <Input placeholder="상세주소" />
      <Input placeholder="우편번호" />
      <Button name="주소 검색" bgColor="#f2f2f2" />
      <Button name="수정완료" color="#fdfdfd" />
      {/* <PostCode
        // onComplete={handle.selectAddress} // 값을 선택할 경우 실행되는 이벤트
        autoClose={false} // 값을 선택할 경우 사용되는 DOM을 제거하여 자동 닫힘 설정
        defaultQuery="판교역로 235" // 팝업을 열때 기본적으로 입력되는 검색어
      /> */}
    </Cont>
  );
}
