import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import axios from "axios";

const Form = styled.form`
  width: 100%;
`;

const Alert = styled.p`
  font-size: 12px;
  line-height: 20px;
  font-weight: 700;
  color: #6d94cc;
`;

const Wrap = styled.div`
  position: relative;
  height: 60px;
  margin: 0 0 10px 0;
`;

export default function SubmitVal() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("password");
  const [passwordConfirm, setPasswordConfirm] = useState("passwordConfirm");
  const [emailMsg, setEmailMsg] = useState("");
  const [passwordMsg, setPasswordMsg] = useState("");
  const [passwordCheckMsg, setPasswordCheckMsg] = useState("");
  const [verifiedEmail, setVerifiedEmail] = useState(false);
  const [verifiedPassword, setVerifiedPassword] = useState(false);
  const [duplication, setDuplication] = useState(true);

  useEffect(() => {
    duplicationCheck();
  }, [email]);

  useEffect(() => {
    activeBtn();
  }, [verifiedEmail, verifiedPassword, password]);

  const handleEmail = (e) => {
    const input = e.target.value;
    const regex = new RegExp(
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
    );
    if (regex.test(input)) {
      setEmail(input);
    } else if (input.length < 1) {
      setEmailMsg("");
      setVerifiedEmail(false);
    } else {
      setEmailMsg("올바른 이메일 형식을 입력해주세요.");
      setVerifiedEmail(false);
    }
  };

  const handlePassword = (e) => {
    const input = e.target.value;
    const regex = new RegExp(
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/
    );
    if (regex.test(input)) {
      setPassword(input);
      setPasswordMsg("안전한 비밀번호 입니다 :)");
    } else if (input.length < 1) {
      setPasswordMsg("");
    } else if (password.length !== passwordConfirm.length) {
      setPassword("");
    } else {
      setPasswordMsg("숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요.");
    }
  };

  const checkPassword = (e) => {
    const input = e.target.value;
    if (password == input) {
      setPasswordConfirm(input);
      setPasswordCheckMsg("비밀번호가 일치합니다 :)");
      setVerifiedPassword(true);
    } else if (input.length < 1) {
      setPasswordCheckMsg("");
      setVerifiedPassword(false);
    } else {
      setPasswordCheckMsg("비밀번호가 일치하지않습니다.");
      setVerifiedPassword(false);
    }
  };

  const duplicationCheck = async () => {
    const url = "/api/auth/duplicationCheck";
    if (email) {
      try {
        const result = await axios.post(url, { val: email });
        setEmailMsg(result.data.msg);
        setVerifiedEmail(true);
      } catch (err) {
        setEmailMsg(err.response.data.msg);
        setVerifiedEmail(false);
      }
    }
  };

  const SubmitData = async (e) => {
    e.preventDefault();
    const url = "/api/auth/signup";
    const val = [email, password];
    try {
      const result = await axios.post(url, {
        val,
      });
      console.log(result);
      alert(result.data.msg);
      window.location.href = "/login";
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  const activeBtn = async () => {
    verifiedEmail && verifiedPassword && passwordConfirm === password
      ? setDuplication(false)
      : setDuplication(true);
  };

  return (
    <Form method="post" onSubmit={SubmitData}>
      <Wrap>
        <Input
          method={handleEmail}
          type="email"
          value={email}
          width="100%"
          height="40px"
          border="none"
          placeholder="이메일"
          focus="2px solid #6D94CC"
        />
        <Alert>{emailMsg}</Alert>
      </Wrap>
      <Wrap>
        <Input
          method={handlePassword}
          type="password"
          width="100%"
          height="40px"
          border="none"
          placeholder="비밀번호"
          focus="2px solid #6D94CC"
        />
        <Alert>{passwordMsg}</Alert>
      </Wrap>
      <Wrap>
        <Input
          method={checkPassword}
          type="password"
          width="100%"
          height="40px"
          border="none"
          focus="2px solid #6D94CC"
          placeholder="비밀번호 확인"
        />
        <Alert>{passwordCheckMsg}</Alert>
      </Wrap>
      <Button
        name="회원가입"
        color="#fdfdfd"
        width="100%"
        height="40px"
        margin="30px 0 0 0"
        disabled={duplication}
      />
    </Form>
  );
}

// 이메일 중복체크, 비밀번호 다 통과해야 버튼 활성화되게
