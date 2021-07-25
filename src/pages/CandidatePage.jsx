import React from "react";
import UserConsumer from "../utilities/context";

export default function CandidatePage() {
  return (
    <UserConsumer>
      {(value) => {
        const { users } = value;
        return (
          <div>
            {users.map((user) => {
              return (
                <div>
                  <h1>{user.id}</h1>
                  <h1>{user.name}</h1>
                </div>
              );
            })}
          </div>
        );
      }}
    </UserConsumer>
  );
}
