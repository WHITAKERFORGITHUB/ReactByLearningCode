import { Suspense, lazy } from "react";
import todoRouter from "./todoRouter";

// 아래 2개는 서로 동일??
const { createBrowserRouter } = require("react-router-dom");
// import {createBrowserRouter} from 'react-router-dom'

const Loading = <div>Loading....</div>

const Main = lazy(() => import("../pages/MainPage"))
const About = lazy(() => import("../pages/AboutPage"))
const TodoIndex = lazy(() => import("../pages/todo/IndexPage"))
//const TodoList =  lazy(() => import("../pages/todo/ListPage"))

const root = createBrowserRouter([

  {
    path: "",
    element: <Suspense fallback={Loading}><Main/></Suspense>
  }
  ,
  {
    path: "about",
    element: <Suspense fallback={Loading}><About/></Suspense>
  }
  ,
  {
    path: "todo",
    element: <Suspense fallback={Loading}><TodoIndex/></Suspense>,
    children: todoRouter()
  }
])

export default root;