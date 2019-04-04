import React from 'react'

import { Login } from '../components/auth/login'
import { Signup } from '../components/auth/signup'

import Board  from '../components/taskBoard/board'

export  const routes = [
    {
        path: '/login',
        component: <Login />
    },
    {
        path: '/signup',
        component: <Signup />
    },
    {
        path: '/board',
        component: <Board />
    },
    {
        path: 'defualtPath',
        component: <Board />
    },
]