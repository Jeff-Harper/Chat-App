import { Contacts, Home } from "@mui/icons-material";
import { ChatArea } from "./Contacts/ChatArea/ChatArea";
import { Login } from "./Login/Login";
import { ErrorPage } from "./ErorPage/ErrorPage";
import { Groups } from "./Groups/Groups";
import { RouteObject } from "react-router";

const pagesData: RouteObject[] = [
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/contacts",
        element: <Contacts />,
        children: [
          {
            path: ":userId",
            element: <ChatArea />,
          },
        ],
      },
      {
        path: "/groups",
        element: <Groups />,
        children: [
          {
            path: ":groupId",
            element: <ChatArea />,
          },
        ],
      },
    ],
  },
];

export { pagesData };
