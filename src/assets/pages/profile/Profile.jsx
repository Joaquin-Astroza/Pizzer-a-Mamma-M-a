import React from "react";

export default function Profile() {
  const email = "user@example.com";

  return (
    <div>
      <h1>Profile</h1>
      <p>Email: {email}</p>
      <button>Logout</button>
    </div>
  );
}
