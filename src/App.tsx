import { useEffect, useState } from "react";

function Time() {
  const [count, setCount] = useState(0);
  // 언마운트 - 뒤정리
  useEffect(() => {
    // 기능시작
    const id = setInterval(() => {
      console.log("⏰Interval 실행됨");
      setCount((c) => c + 1);
    }, 1000);

    return () => {
      // 기능 종료 로직
      console.log("🧹clean up: 이전 타이머가 제거됨");
      clearInterval(id);
    };
  }, []);
  return <div>카운트: {count}</div>;
}

function App() {
  // useEffect => Hooks
  // useEffect는 React 컴포넌트가 렌더링 될 때마다 특정 작업을 수행하도록 설정할 수 있는 Hook 입니다.
  //  - 마운트가 될 때, 실행하고 싶을 때
  //    마운트란, 리액트 DOM에 우리가 retrun 키워드 하단에 작성한 HTML, CSS 영역 즉, UI가 붙었을 때
  //       => 우리가 HTML을 자바스크립트로 통제 가능할때 useEffect에서 설정한 함수를 컴포넌트가 화면에 맨 처음 렌더링 될 때만 실행하고,
  //          업데이트 될 때는 실행하지 않으려면 두 번째 파라미터(매개변수)로 빈 배열을 넣어주면 됩니다.
  //
  //  - 특정 값이 업데이트 될 때만 실해하고 싶을 때
  //    useEffect를 사용할 때, 특정 값이 변경될 때만 호출하고 싶을 경우도 있습니다.
  //    useEffect의 두 번째 파라미터(매개변수)로 전달되는 배열 안에 검사하고 싶은 값을 넣어주면 됩니다. 생략하면 전체 상태를 대상으로 감시

  const [name, setName] = useState<string>("");
  const [nickname, setNickname] = useState<string>("");
  const [visible, setVisible] = useState<boolean>(true);

  useEffect(() => {
    // 해당 컴포넌트가 최초 랜더링이 될 때 useEffect가 실행이 되고,
    // 우리가 선언한 state 측, 상태 값이 변화하더라도 useEffect가 실해되는 것으로 보아
    // state 즉, 상태 값이 변화하면 해당 컴포넌트는 재 렌더링이 된다는 것을 알 수 있습니다.
    // 전체 상태 변화를 감지
    console.log("컴포넌트가 렌더린 될 때마다 특정 작업을 수행합니다.");
    console.log("name", name);
    console.log("nickname", nickname);
  });

  useEffect(() => {
    // 최초 1회만 실행
    console.log("마운트가 될 때만 수행합니다. - 최초 1회만 실행");
    console.log("name", name);
    console.log("nickname", nickname);
  }, []);

  useEffect(() => {
    // 최초 + 값이 변경될때만 실행
    console.log("name이라는 상태 값이 변할때만 수행 합니다.");
    console.log("name", name);
    console.log("nickname", nickname);
  }, [name]);

  const onChangeName = (event: React.ChangeEvent<HTMLInputElement>) =>
    setName(event.target.value);

  const onChangeNickname = (event: React.ChangeEvent<HTMLInputElement>) =>
    setNickname(event.target.value);

  return (
    <div>
      <input type="text" value={name} onChange={onChangeName} />
      <input type="text" value={nickname} onChange={onChangeNickname} />
      <div>
        <b>이름 {name}</b>
        <b>별명 {nickname}</b>
      </div>
      <div>
        {visible && <Time />}
        <button onClick={() => setVisible(!visible)}>
          {visible ? "숨기기" : "보이기"}
        </button>
      </div>
    </div>
  );
}

export default App;
