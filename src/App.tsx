//  useRef
//  useRef Hook은 함수 컴포넌트에서 ref라는 속성을 쉽게 사용할 수 있도록 도와주는 도구입니다.
//  React의 useRef는 컴포넌트 내에서 변화기 않는 값을 유지하거나 DOM요소에 직접 접근할 때 사용하는 Hook 입니다.
//  다른 React의 Hook과는 목적이 다릅니다.

//  useRef는 값을 저장하거나 DOM에 접근하기 위해 사용하는 객체(참조값)을 생성하는 Hook입니다.
//  지정된 값은 컴포넌트가 리렌더링되어도 유지되며, 값이 바뀌어도 리렌더링을 일으키지 않습니다.

// ref속성은 JSX, TSX에서 요소나 컴포넌트에 참조를 연결하는 역활
// App 컴포넌트에서 등록 버튼을 눌렀을 때, 포커스가 인풋 태그 쪽으로 넘어가도록 코드를 작성해 보도록 하겠습니다.

import { useRef } from "react";

function App() {
  const textInputRef = useRef<HTMLInputElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const textHandleClick = () => {
    //usrRef 동작
    textInputRef.current?.focus();
  };

  const fileHandleClick = () => {
    //usrRef 동작
    fileInputRef.current?.click();
  };

  return (
    <div>
      <input id="text" type="text" ref={textInputRef} />
      <button onClick={textHandleClick}>Text등록</button>

      <input id="file" type="file" ref={fileInputRef} />
      <button onClick={fileHandleClick}>파일등록</button>
    </div>
  );
}

export default App;
