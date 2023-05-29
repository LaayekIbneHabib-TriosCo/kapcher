import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ProtectedRoutes(props) {
  const { Component } = props;

  const navigate = useNavigate();
  useEffect(() => {
    let userType = localStorage.getItem("userType");

    if (!userType) {
      navigate("/login");
    }
  }, [navigate]);

  return <Component />;
}
