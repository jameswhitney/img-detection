import React from "react";

const Navigation = ({ onRouteChange, isSignedIn }) => {
  return isSignedIn ? (
    <React.Fragment>
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        <p
          onClick={() => onRouteChange("signOut")}
          className="f4 fa2 link dim black underline pa3 pointer"
        >
          Sign Out
        </p>
      </nav>
    </React.Fragment>
  ) : (
    <React.Fragment>
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        <p
          onClick={() => onRouteChange("signIn")}
          className="f4 fa2 link dim black underline pa3 pointer"
        >
          Sign In
        </p>
        <p
          onClick={() => onRouteChange("register")}
          className="f4 fa2 link dim black underline pa3 pointer"
        >
          Register
        </p>
      </nav>
    </React.Fragment>
  );
};

export default Navigation;
