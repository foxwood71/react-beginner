// useCallback
//    useCallback은 useMemo와 상당히 비슷한 함수입니다. 주로 랜더링 성능을 최적화해야 하는 상황에서 사용합니다.
//    이 훅(Hook)을 사용하면 만들어 놓았던 함수를 재 사용할 수 있습니다.
//
//    useCallback의 첫 번째 파라미터에는 생성하고 싶은 함수를 넣고;
//    useCallback의 두 번째 파라미터에는 배열을 넣으면 됩니다, 이 배열에는 어떤 값이 바뀌었을 때,
//                  함수를 새로 생성해야 하는지 명시해야 합니다.
//
//    onChange처럼 비어 있는 배열을 넣게 되면 컴포넌트가 랜더링 될 때, 만들었던 함수를 계속해서 재사용하게 되면
//    onInsert처럼 배열 안에 number와 list를 넣게 되면, 인풋 내용이 바뀌거나 새로운 항목이 추가 되었을때
//                  새로 만들어진 함수를 사용하게 됩니다.
//

import React, { useMemo, useState, useCallback } from "react";

const getAverage = (numbers: number[]) => {
  console.log("평균값을 계산 중입니다.");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((acc, cur) => acc + cur);
  return sum / numbers.length;
};

function App() {
  const [list, setList] = useState<number[]>([]);
  const [number, setNumber] = useState<string>(""); // => 실제 input 태그에 입력된 숫자를 list 배열에 주입할 것이기 때문에
  // 상태 값 이름을 number로 지정했습니다. 단, input 태그에 입려된 값이기 때문에 데이터 타입은 string 입니다.

  // const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setNumber(event.target.value);
  // };

  const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(event.target.value);
  }, []); // 컴포넌트가 처음 랜더링 될 때만 함수를 생성한다. 함수의 입력에 변수가 존재하여 클로저가 되어도 입력을 계속 받음

  const onInsert = useCallback(() => {
    // concat: Array 인스턴스의 concat 함수는 두 개 이상의 배열을 병합하는 데 사용됩니다. 이 메서드는 기존 배열을 변경하지 않고, 새 배열을 반환합니다.
    // parseInt: 문자열 인자를 파싱하여 특정 진수(수의 진법 체계에서 기준이 되는 값)의 정수를 반환 합니다.
    const newList = list.concat(parseInt(number));
    setList(newList); // number []
    setNumber(""); // number 상태 값 초기화
  }, [number, list]);

  //  useCallback은 첫 렌더링 때 한 번만 한수 onInsert를 생성합니다. ([])
  //  onInsert 안에서 사용하는 list, number는 초기값의 복사본으로 함수 안에 "닫혀(Closed over)" 있습니다.
  //  이후 number나 list가 변경되도, onInsert는 옛날 값을 계속 사용합니다.
  //  이게 클로저(closure) 문제 입니다. 이유 - 감시 의존성 주입이 없는 경우 첫 랜더링에서만 생성하기에

  // useMemo(calculateValue, dependencies)
  // 평균값 계산을 list가 갱신될때마다 계산한다
  const avarage = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input type="text" value={number} onChange={onChange} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((item: number, index: number) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
      {/* input tag의 입력값이 변화되면서 한글자 한글자 입력되면 number useState 갱신되어 재랜더링시 getAverage 함수를 매번 1회(*2 stric mode) 실행 실행한다 
          그리고 등록을 Click시 list useState와 number useState가 갱신되어 2회(*2 stric mode) getAverage 함수를 실행한다 
          * StricMode : <StrictMode>와 </StrictMode> 사이에 react 컴포넌트를 작성하면, 개발환경에서만 오류 검사하기 위해 렌더링 단계에서 의도적으로 함수를 두 번 호출한다고 한다. 
      */}
      {/* <div>
        <b>{getAverage(list)}</b>
      </div> */}
      {/* useMemo를 사용하여 input tag의 입력값이 변경되도 avarage useMemo는 데이터가 갱신되지 않고, 
          등록을 Click시 list useState로 list를 갱신시만 useMemo에서만 Average 함수를 1회(*2 stric mode) 실행한다
       * StricMode : <StrictMode>와 </StrictMode> 사이에 react 컴포넌트를 작성하면, 개발환경에서만 오류 검사하기 위해 렌더링 단계에서 의도적으로 함수를 두 번 호출한다고 한다.
       */}
      <div>
        <b>평균 값: {avarage}</b>
      </div>
    </div>
  );
}

export default App;
