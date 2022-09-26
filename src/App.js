import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import {  Home, ScrollToTop } from "./pages"
import Invoice from "./components/App"
import { Header, Footer, Error } from "./pages"


export default function App() {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <React.Fragment>
                <Invoice />
                <React.Fragment>
                  <Home />
                  <Footer />
                </React.Fragment>
            </React.Fragment>
          }
        ></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
