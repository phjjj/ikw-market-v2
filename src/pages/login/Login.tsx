import styled from "styled-components";
import Title from "../../components/common/atoms/Title";
import logo from "../../assets/logo/logo.png";
import kakaoButton from "../../assets/button/kakao_login_medium_narrow.png";

function LoginPage() {
  const kakaoLink = `${process.env.REACT_APP_KAKAO_OAUTH_URL}?client_id=${process.env.REACT_APP_KAKAO_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URI}&response_type=code`;

  const kakaoLoginHandler = () => {
    window.location.href = kakaoLink;
  };
  return (
    <>
      <Header>
        <img src={logo} alt="경운마켓 로고" />
        <Title className="xl">경운마켓</Title>
      </Header>
      <main>
        <LoginWrapper>
          <div
            onClick={kakaoLoginHandler}
            onKeyDown={kakaoLoginHandler}
            role="button"
            tabIndex={0}
          >
            <img src={kakaoButton} alt="카카오 로그인 버튼" />
          </div>
        </LoginWrapper>
      </main>
    </>
  );
}

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: end;
  & h1 {
    padding: 0;
    margin: 0;
  }
  @media (max-width: 520px) {
    & img {
      height: 70px;
    }
  }
`;

const LoginWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  & img {
    cursor: pointer;
  }
  width: 300px;
  border: 1px solid #c6c6c6;
  border-radius: 10px;
  padding: 3rem 1rem;
  margin: 1.5rem auto;
`;

export default LoginPage;
