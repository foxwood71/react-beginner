import React, { useState } from "react";
// [삭제 - 불필요] import reactLogo from "./assets/react.svg";
// [삭제 - 불필요] import viteLogo from "/vite.svg";
// [삭제 - 불필요] import './App.css'

function App() {
  // useState => Hooks
  // useState는 React에서 가장 기본적인 Hook이며, 함수 컴포넌트에서도 가변적인 상태를 지닐 수 있게 해준다.
  //  - 이 함수가 호출되면 배열을 반환한다
  //  - 반환된 배열의 첫 번째 요소는 상태 값, 두 번째 요소는 상태 값을 설정하는 함수
  //  - useState 함수의 파라미터(매개변수)에는 상태의 기본값 초기값을 넣어 줍니다.
  //

  const [value, setValue] = useState<number>(0);
  const [name, setName] = useState<string>(
    "빈 문자열로 할당하지 않은 name 상태 값입니다."
  );
  const [nickname, setNickname] = useState<string>(
    "빈 문자열로 할당하지 않은 nickname 상태 값입니다."
  );

  const increment = () => {
    setValue(value + 1);
  };

  const decrement = () => {
    setValue(value - 1);
  };

  const onChangeName = (event: React.ChangeEvent<HTMLInputElement>) =>
    setName(event.target.value);
  const onChangeNickname = (event: React.ChangeEvent<HTMLInputElement>) =>
    setNickname(event.target.value);
  return (
    <>
      <div>
        <p>
          현재 카운터 값은: <b>{value}</b>
        </p>
        <button onClick={increment}>1+</button>
        <button onClick={decrement}>1-</button>

        <div>
          <input type="text" value={name} onChange={onChangeName} />
          <input type="text" value={nickname} onChange={onChangeNickname} />
        </div>

        <div>
          <b>이름:{name}</b>
          <b>별명:{nickname}</b>
        </div>
      </div>
    </>
  );
}

export default App;
