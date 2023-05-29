import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ProtectedRoutes(props) {
  const { Component } = props;

  const naviagte = useNavigate();
  useEffect(() => {
    let login = localStorage.getItem("isAdmin");
    if (!login) {
      naviagte("/login");
    }
  });

  return <Component />;
}
