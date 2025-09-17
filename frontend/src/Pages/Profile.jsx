import React, { useEffect, useState } from "react";
import Service from "../utils/http";

const Profile = () => {
  const service = new Service();
  const [user, setUser] = useState(null);

  const getData = async () => {
      const response = await service.get("user/me");
      console.log("User Data:", response);
      setUser(response);
    
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h2>User Profile</h2>
      {user ? (
        <div>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>User ID:</strong> {user._id}
          </p>
          <p>
            <strong>Created At:</strong>{" "}
            {new Date(user.createdAt).toLocaleDateString()}
          </p>
        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
};

export default Profile;