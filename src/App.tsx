import { useState } from "react";
// [삭제 - 불필요] import reactLogo from "./assets/react.svg";
// [삭제 - 불필요] import viteLogo from "/vite.svg";
// [삭제 - 불필요] import './App.css'

import { Button } from "@/components/ui/button";

function App() {
  return (
    <>
      <div>App.tsx 파일 입니다.</div>
      <div className="flex min-h-svh flex-col items-center justify-center">
        <Button>Click me</Button>
      </div>
    </>
  );
}

export default App;
