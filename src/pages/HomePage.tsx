import { GoogleLogin } from "react-google-login";
import CreateMemberForm from "../components/CreateMemberForm";
import MemberList from "../components/MemberList";
import { useQuery } from "../router/useQuery";
import MemebersContextProvider from "../store/members/MembersContext";

const HomePage = () => {
  // eslint-disable-next-line camelcase
  const par = useQuery();
  console.log(par);
  const googleOAuth2 = (param: any) => {
    console.log(par);
    localStorage.setItem("accessToken", param.tokenId);
    console.log(param);
  };
  return (
    <MemebersContextProvider>
      <GoogleLogin
        clientId="817921738258-jfbapkf5tsqmbgjrn672ua2udsuta7vt.apps.googleusercontent.com"
        buttonText="Sign in with Google"
        cookiePolicy="single_host_origin"
        onSuccess={googleOAuth2}
        uxMode="redirect"
        redirectUri="http://localhost:3000"
      />
      <CreateMemberForm />
      <MemberList />
    </MemebersContextProvider>
  );
};

export default HomePage;
