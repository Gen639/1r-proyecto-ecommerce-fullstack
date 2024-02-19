import { useContext, useEffect } from "react";
import { UserContext } from "../../../context/user/UserState";
import { Avatar, Card } from "antd";

import { Spin } from "antd";
const { Meta } = Card;

const Profile = () => {
  const { getUserInfo, user } = useContext(UserContext);

  useEffect(() => {
    getUserInfo();
  }, []);

  if (!user) {
    return (
      <>
        <span>Loading...</span>;
        <Spin />
      </>
    );
  }

  return (
    <>
      {" "}
      <div>
        <h2>User Profile Info</h2>
        <Card
          style={{ width: 300 }}
          cover={
            <img
              alt="example"
              src="https://images.emojiterra.com/google/noto-emoji/unicode-15.1/color/svg/1f35f.svg"
            />
          }
        >
          <Meta
            avatar={
              <Avatar src="https://images.emojiterra.com/google/android-11/512px/1f954.png" />
            }
            title={user.name}
            description={user.email}
          />
        </Card>
      </div>
    </>
  );
};

export default Profile;
