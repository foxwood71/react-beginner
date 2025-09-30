// useMemo

import { useMemo, useState } from "react";

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

  const onInsert = () => {
    // concat: Array 인스턴스의 concat 함수는 두 개 이상의 배열을 병합하는 데 사용됩니다. 이 메서드는 기존 배열을 변경하지 않고, 새 배열을 반환합니다.
    // parseInt: 문자열 인자를 파싱하여 특정 진수(수의 진법 체계에서 기준이 되는 값)의 정수를 반환 합니다.
    const newList = list.concat(parseInt(number));
    setList(newList); // number []
    setNumber("");
  };

  // useMemo(calculateValue, dependencies)
  // 평균값 계산을 list가 갱신될때마다 계산한다
  const avarage = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input
        type="text"
        value={number}
        onChange={(event) => setNumber(event.target.value)}
      />
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
