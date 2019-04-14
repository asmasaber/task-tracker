import React from "react";
import {Login} from "../components/auth/login";
import {Signup} from "../components/auth/signup";
import Board  from "../components/taskBoard/board";

export  const routes = [
  {
    path: "/login",
    requiresAuth: false,
    component: <Login />
  },
  {
    path: "/signup",
    requiresAuth: false,
    component: <Signup />
  },
  {
    path: "/board",
    requiresAuth: true,
    component: <Board />
  }
];

export const defualtRout ={
  path: "defualtPath",
  requiresAuth: true,
  component: <Board />
};

export const authRout ={
  path: "/login",
  component: <Login />
};