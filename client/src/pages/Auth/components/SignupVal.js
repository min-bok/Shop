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

export default function SignupVal() {
  // input values
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("password");
  const [passwordConfirm, setPasswordConfirm] = useState("passwordConfirm");

  // message
  const [emailMsg, setEmailMsg] = useState("");
  const [passwordMsg, setPasswordMsg] = useState("");
  const [passwordConfirmMsg, setPasswordConfirmMsg] = useState("");

  const [verifiedEmail, setVerifiedEmail] = useState(false); // 이메일 중복검사 통과 여부 관리
  const [verifiedPassword, setVerifiedPassword] = useState(false); // 비밀번호와 비밀번호 확인창의 입력값 일치여부 관리
  const [disabled, setDisabled] = useState(true); // 버튼 활성화 여부 관리

  // useState의 비동기 문제 해결을 위해 useEffect안에서 함수를 실행함
  useEffect(() => {
    duplicationCheck();
  }, [email]);

  useEffect(() => {
    activeBtn();
  }, [verifiedEmail, verifiedPassword, password]);

  // 이메일 유효성 검증 및 상황에 맞는 안내메시지를 출력하는 함수
  const handleEmail = (e) => {
    const input = e.target.value;
    const regex = new RegExp(
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
    );
    // 입력된 값이 이메일 유효성 검증을 통과한 경우
    if (regex.test(input)) {
      setEmail(input);
      // 사용자가 모든 입력값을 제거한 경우
    } else if (input.length < 1) {
      setEmailMsg("");
      setVerifiedEmail(false);
      // 입력된 값이 이메일 유효성 검증을 통과하지 못한 경우
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
    // 입력된 값이 비밀번호 유효성 검증을 통과한 경우
    if (regex.test(input)) {
      setPassword(input);
      setPasswordMsg("안전한 비밀번호 입니다 :)");
    } else if (input.length < 1) {
      // 사용자가 모든 입력값을 제거한 경우
      setPasswordMsg("");
    } else if (password.length !== passwordConfirm.length) {
      // 비밀번호 입력값과 비밀번호 확인의 입력값이 다를 때 -- 밑이랑 합쳐보자
      setPassword("");
      setPasswordMsg("숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요.");
    } else {
      // 입력된 값이 비밀번호 유효성 검증을 통과하지 못한 경우
      setPasswordMsg("숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요.");
    }
  };

  // 비밀번호와 비밀번호 확인창의 입력값이 동일한지 확인하는 함수
  const confirmPassword = (e) => {
    const input = e.target.value;
    // 비밀번호와 비밀번호 확인창의 입력값이 일치
    if (password == input) {
      setPasswordConfirm(input);
      setPasswordConfirmMsg("비밀번호가 일치합니다 :)");
      setVerifiedPassword(true);
    } else if (input.length < 1) {
      // 사용자가 모든 입력값을 제거한 경우
      setPasswordConfirmMsg("");
      setVerifiedPassword(false);
    } else {
      // 비밀번호와 비밀번호 확인창의 입력값이 불일치
      setPasswordConfirmMsg("비밀번호가 일치하지않습니다.");
      setVerifiedPassword(false);
    }
  };

  // 이메일 중복 검증하는 함수
  const duplicationCheck = async () => {
    const url = "/api/auth/duplicationCheck";
    if (email) {
      try {
        const result = await axios.post(url, { val: email });
        setEmailMsg(result.data.msg);
        // 이메일이 중복검사를 통과한 경우
        setVerifiedEmail(true);
      } catch (err) {
        setEmailMsg(err.response.data.msg);
        // 이메일이 중복검사를 통과하지 못한 경우
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
      // 회원가입 성공 시, 성공 alert을 띄우고 로그인 페이지로 이동
      // alert(result.data.msg);
      alert("회원가입이 완료되었습니다.");

      // window.location.href = "/login";
    } catch (err) {
      // 회원가입 과정에서 에러가 발생한 경우
      alert(err.response.data.msg);
      // 회원가입 실패시 입력창 비워주기 구현하기
    }
  };

  // 버튼 활성화 및 비활성화 시키는 함수
  const activeBtn = async () => {
    // 이메일 중복 통과, 비밀번호와 비밀번호 입력창이 입력값이 동일할때만 버튼을 활성화
    verifiedEmail && verifiedPassword && passwordConfirm === password
      ? setDisabled(false)
      : setDisabled(true);
  };

  return (
    <Form method="post" onSubmit={SubmitData}>
      <Wrap>
        {/* method={handleEmail} 은 onChange={handleEmail}와 동일함 */}
        <Input
          method={handleEmail}
          type="email"
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
          method={confirmPassword}
          type="password"
          width="100%"
          height="40px"
          border="none"
          focus="2px solid #6D94CC"
          placeholder="비밀번호 확인"
        />
        <Alert>{passwordConfirmMsg}</Alert>
      </Wrap>
      <Button
        name="회원가입"
        color="#fdfdfd"
        width="100%"
        height="40px"
        margin="30px 0 0 0"
        disabled={disabled}
      />
    </Form>
  );
}
