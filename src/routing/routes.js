import React from 'react';
import Home from '../pages/Home/Home';
import Tasks from '../pages/Tasks/Tasks';
import Email from '../pages/Email/Email';
import Contacts from '../pages/Contacts/Contacts';
import Chat from '../pages/Chat/Chat';
import Deals from '../pages/Deals/Deals';
import Settings from '../pages/Settings/Settings'
import Personal from '../pages/Personal/Personal';

const ROUTES = [
    {
        path: "/",
        key: "ROOT",
        exact: true,
        component: () => <Home />,
    },
    {
        path: "/personal",
        key: "personal",
        exact: true,
        component: () => <Personal />,
    },
    {
        path: "/tasks",
        key: "TASKS",
        exact: true,
        component: () => <Tasks />,
    },
    {
        path: "/email",
        key: "EMAIL",
        exact: true,
        component: () => <Email />,
    },
    {
        path: "/contacts",
        key: "CONTACTS",
        exact: true,
        component: () => <Contacts />,
    },
    {
        path: "/chat",
        key: "CHAT",
        exact: true,
        component: () => <Chat />,
    },
    {
        path: "/deals",
        key: "DEALS",
        exact: true,
        component: () => <Deals />,
    },
    {
        path: "/settings",
        key: "SETTINGS  ",
        exact: true,
        component: () => <Settings />,
    },
];

export default ROUTES;