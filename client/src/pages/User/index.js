import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../../components/Button";
import axios from "axios";
import UpdataBtn from "./components/UpdataBtn";
import { Link } from "react-router-dom";
import DaumPostcode from "./components/DaumPostcode";
import UpdatePassword from "./UpdatePassword";

const Cont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  width: 350px;
  height: 55vh;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`;

const Logo = styled.div`
  font-size: 36px;
  font-weight: 700;
  color: #6d94cc;
`;

const Inner = styled.div`
  width: 100%;
  height: 85%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

const PasswordWrap = styled.div`
  position: relative;
  height: 60px;
  margin: 0 0 -10px 0;
`;

const Alert = styled.p`
  font-size: 10px;
  line-height: 20px;
  font-weight: 700;
  color: #6d94cc;
`;

export default function Mypage() {
  // 사용자 고유 id
  const userId = window.sessionStorage.getItem("userId");
  // 사용자 정보 state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  //  db에 존재하는 최초 비밀번호
  const [initPassword, setInitPassword] = useState("");
  //  value 및 유효성 검증을 위한 비밀번호
  const [password, setPassword] = useState("expassword");
  //  실제로 update를 실행할 비밀번호
  const [newPassword, setNewPassword] = useState("");

  const [address, setAddress] = useState("");
  const [detail, setDetail] = useState("");
  const [postCode, setPostCode] = useState("");
  const [phone, setPhone] = useState("");

  // 주소 검색 모달 제어
  const [active, setActive] = useState(false);
  // 비밀번호 input disable 제어
  const [disabled, setDisabled] = useState(true);
  // 비밀번호 유효성 검증 메시지
  const [passwordMsg, setPasswordMsg] = useState("");

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
      setInitPassword(data.password);
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

  // 비밀번호 onChange 함수
  const handlePassword = (e) => {
    // 비밀번호 유효성 검증
    const regex = new RegExp(
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/
    );

    setPassword(e.target.value);
    // 입력된 값이 비밀번호 유효성 검증을 통과한 경우
    if (regex.test(e.target.value)) {
      setPassword(e.target.value);
      setNewPassword(e.target.value); //  실제로 변경될 비밀번호
      setPasswordMsg("안전한 비밀번호 입니다 :)");
    } else if (e.target.value.length == 0) {
      // 입력값이 존재하지 않을 때
      setPasswordMsg("");
      setNewPassword("");
    } else {
      // 입력된 값이 비밀번호 유효성 검증을 통과하지 못한 경우
      setPassword(e.target.value);
      setNewPassword("");
      setPasswordMsg("숫자+영문자+특수문자 8자리 이상 입력해주세요.");
    }
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

  // 모달 창 열기
  const open = () => {
    setActive(true);
  };

  return (
    <Cont>
      <Link to="/">
        <Logo>Dimple</Logo>
      </Link>
      <Inner>
        <Input
          placeholder="이름"
          value={name ? name : ""}
          onChange={handleName}
        />
        <Input
          placeholder="이메일"
          value={email}
          onChange={handleEmail}
          disabled
        />
        <Wrap>
          <PasswordWrap>
            <Input
              placeholder="비밀번호"
              value={password}
              type="password"
              width="70%"
              margin="0 0 100px 0"
              onChange={handlePassword}
              disabled={disabled}
            />
            <Alert>{passwordMsg}</Alert>
          </PasswordWrap>
          <UpdatePassword
            userId={userId}
            initPassword={initPassword}
            newPassword={newPassword}
            setPassword={setPassword}
            disabled={disabled}
            setDisabled={setDisabled}
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
            method={open}
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
      </Inner>
      {active ? (
        <DaumPostcode setAddress={setAddress} setPostCode={setPostCode} />
      ) : null}
    </Cont>
  );
}
