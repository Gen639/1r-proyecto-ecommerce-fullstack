import { useContext, useEffect } from "react";
import { UserContext } from "../../../context/user/UserState";

const Profile = () => {
  const { getUserInfo, user } = useContext(UserContext);

  useEffect(() => {
    getUserInfo();
  }, []);

  if (!user) {
    return <span>Loading...</span>;
  }

  return (
    <>
      <div>Profile {user.name}</div>
      <div>Email {user.email}</div>
    </>
  );
};

export default Profile;
