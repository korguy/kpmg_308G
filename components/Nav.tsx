import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";
import { Login } from "../components/Login";

const Navi = styled.nav`
  display: flex;
  height: 100vh * 21/1080;
  height: 100%;
  width: 68.75%;
  margin: 7.22vh 15.625% 0 15.625%;
  justify-content: space-between;
  align-items: center;

  .left {
    a {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .right {
    div {
      margin-left: 20px;
    }

    img {
      margin-right: 6px;
    }
  }

  p {
    font-size: 15px;
    white-space: nowrap;
  }

  div {
    display: flex;
    height: 100%;
    align-items: center;
  }

  a:link,
  a:visited,
  a:hover,
  a:active {
    color: black;
    text-decoration: none;
  }

  #dropdown {
    display: flex;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;
    position: relative;
    margin-left: 15px;
    text-align: center;

    div {
      width: 100px;
      height: 27px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 2px 7px;
    }

    #dropdown-content {
      display: none;
      position: absolute;
      z-index: 50;
      top: 100%;
      border: 1px solid #999999;
      border-top: 0;
      color: #505050;
      font-size: 14px;
    }

    #dropdown-contet:hover {
      display: flex;
    }
  }

  #dropdown:hover {
    #main {
      background-color: #5378c6;
      color: white;
      border: 1px solid #999999;
      border-bottom: 0;

      img {
        display: none;
      }
    }

    #dropdown-content {
      display: flex;
    }
  }
`;

export const Nav = () => {
  const [lang, setLang] = useState<string>("ko-KR");
  const [toggleSignIn, setToggleSignIn] = useState<boolean>(false);

  //localstorage 불러오는 코드 짜고 데이터 있으면 없애고 없으면 있애고

  if(typeof window !== 'undefined'){
    const user = localStorage.getItem('user')
    const loginInfo = JSON.parse(user);

    if(loginInfo == null){
      console.log("nothing in localStorage")
    }
    else {
      console.log('this is local storage : ' + loginInfo);
    }
  }

  return (
    <>
      {toggleSignIn && <Login setToggleSignIn={setToggleSignIn} />}
      <Navi>
        <div className="left">
          <Link href="/">
            <a style={{ height: "100%" }}>
              <img
                src="/images/logo.svg"
                alt="logo"
                width="88px"
                height="15px"
              />
            </a>
          </Link>
          <div id="dropdown">
            <div id="main">
              <p>한국어 / KR &nbsp;</p>
              <img
                src="/images/down.svg"
                alt="down"
                width="7.79px"
                height="3.9px"
                style={{ marginLeft: "0px" }}
              />
            </div>
            <div
              id="dropdown-content"
              onClick={() => {
                alert("페이지 준비중입니다.");
              }}
            >
              <p>ENGLISH / EN &nbsp;</p>
            </div>
          </div>
        </div>
        <div className="right">
          <div
            style={{ cursor: "pointer" }}
            onClick={() => setToggleSignIn(true)}
          >
            <img src="/images/login.svg" alt="login" />
            <p>로그인</p>
          </div>
          <div>
            <Link href="/signup">
              <a>
                <img src="/images/signup.svg" alt="login" />
                <p>회원가입</p>
              </a>
            </Link>
          </div>
          <a
            style={{ cursor: "pointer" }}
            onClick={() => alert("서비스 준비중입니다.")}
          >
            <div>
              <img src="/images/mypage.svg" alt="login" />
              <p>마이페이지</p>
            </div>
          </a>
        </div>
      </Navi>
    </>
  );
};
