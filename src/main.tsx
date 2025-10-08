import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { ThemeProvider } from "@/components/theme-provider";

import RootLayout from "./pages/layout.tsx"; // 전역 레이아웃 컴포넌트
import App from "./pages"; // 메인페이지
import SignUp from "./pages/sign-up"; // 회원가입 페이지
import SignIn from "./pages/sign-in"; // 로그인 페이지
import CreateTopic from "./pages/topics/create.tsx"; // 토픽생성 페이지
import About from "./pages/about.tsx"; // 사이트 안내

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          {/* Layout routing */}
          <Route element={<RootLayout />}>
            <Route index element={<App />} />
            {/* <Route path="/" element={<App />} /> */}
            <Route path="sign-up" element={<SignUp />} />
            <Route path="sign-in" element={<SignIn />} />
            <Route path="topics/create" element={<CreateTopic />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
