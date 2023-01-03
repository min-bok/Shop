import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ButtonComponent from "../../components/Button";
import axios from "axios";
import UpdataBtn from "./components/UpdataBtn";
import PostCode from "react-daum-postcode";

const Cont = styled.div`
  position: absolute;
  width: 350px;
  height: 50vh;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  /* background-color: pink; */
`;

const Inner = styled.div`
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* background-color: bisque; */
`;

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Input = styled.input`
  width: ${(props) => props.width || "100%"};
  height: 40px;
  border: none;
`;

export default function Mypage() {
  // 사용자 고유 id
  const userId = window.sessionStorage.getItem("userId");
  // 사용자 정보 state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [detail, setDetail] = useState("");
  const [postCode, setPostCode] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    getInitUserData();
  }, []);

  // 초기에 db에 저장된 사용자 정보를 불러오는 함수
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
      setDetail(data.detail_address);
      setPostCode(data.post_code);
    } catch (err) {
      console.log(err);
    }
  };

  // 이름 onChange 함수
  const handleName = (e) => {
    setName(e.target.value);
  };

  // 이메일 onChange 함수
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  // 휴대폰 번호 onChange 함수
  const handlePhone = (e) => {
    // 자동 하이픈 삽입
    const autoHyphen = e.target.value
      .replace(/[^0-9]/g, "")
      .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3")
      .replace(/(\-{1,2})$/g, "");

    setPhone(autoHyphen);
  };

  // 도로명주소 onChange 함수
  const handleAddress = (e) => {
    setAddress(e.target.value);
  };

  // 상세주소 onChange 함수
  const handleDetail = (e) => {
    setDetail(e.target.value);
  };

  // 우편번호 onChange 함수
  const handlePostCode = (e) => {
    setPostCode(e.target.value);
  };

  const Button = (props) => {
    return (
      <ButtonComponent
        name={props.name}
        width={props.width}
        height={props.height}
        bgColor={props.bgColor}
        color={props.color}
        fontSize={props.fontSize}
      />
    );
  };

  return (
    <Cont>
      <Inner>
        <Input
          placeholder="이름"
          value={name ? name : ""}
          onChange={handleName}
        />
        <Input placeholder="이메일" value={email} onChange={handleEmail} />
        <Wrap>
          <Input
            placeholder="비밀번호"
            value="12345678"
            type="password"
            width="70%"
            disabled
          />
          <Button
            name="비밀번호 변경"
            width="90px"
            bgColor="#f2f2f2"
            fontSize="10px"
          />
        </Wrap>
        <Input
          placeholder="전화번호"
          value={phone ? phone : ""}
          onChange={handlePhone}
          maxLength="13"
        />
        <Input
          value={address ? address : ""}
          placeholder="도로명주소"
          onChange={handleAddress}
        />
        <Input
          placeholder="상세주소"
          value={detail ? detail : ""}
          onChange={handleDetail}
        />
        <Wrap>
          <Input
            placeholder="우편번호"
            value={postCode ? postCode : ""}
            onChange={handlePostCode}
            width="70%"
          />
          <Button
            name="주소 검색"
            width="90px"
            bgColor="#f2f2f2"
            fontSize="10px"
          />
        </Wrap>
        <UpdataBtn
          name={name}
          userId={userId}
          address={address}
          detail={detail}
          postCode={postCode}
          phone={phone}
        />
        {/* <PostCode
        // onComplete={handle.selectAddress} // 값을 선택할 경우 실행되는 이벤트
        autoClose={false} // 값을 선택할 경우 사용되는 DOM을 제거하여 자동 닫힘 설정
        defaultQuery="판교역로 235" // 팝업을 열때 기본적으로 입력되는 검색어
      /> */}
      </Inner>
    </Cont>
  );
}
