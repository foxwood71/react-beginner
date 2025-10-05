// 컴포넌트
// 프런트엔드 개발에서 컴포넌트(Component)는 웹 애플리케이션의 UI를 구성하는 독립적이고
// 재사용 가능한 코드 조각(모음)을 의미합니다.

// 보통 HTML, CSS, 자바스크립트를 포함하며, 특정 기능이나 디자인을 담당합니다.
// 컴포넌트를 사용해서 애플리케이션의 복잡성을 줄이고, 쉽게 유지보수 할 수 있으므로
// 현대 웹 개발에서는 필수적인 개념입니다.

// 컴포넌트 장점

// 1. 코드의 재사용성(재활용성)
// 같은 컴포넌트를 여러 영역에서 활용할 수 있으므로 코드 중복을 줄이고, 효율성을 높일 수 있습니다.
// 특히 전통적인 MPA(Multi Page Application) 구조에서는
// 각 페이지가 독립적으로 동작하기 때문에, 공통되는 레이아웃이나 UI 코드를 반복해서 작성하는 경우가 많았습니다.
// 반면, 컴포넌트 기반 개발 방식에서는 이러한 공통 요소를 하나의 컴포넌트로 만들어 재사용할 수 있으므로
// 유지보수가 쉬워지고 개발 속도도 빨라집니다.

// 2. 상태 관리
// 컴포넌트 내부의 상태(state)와 로직은 외부에 노출되지 않습니다. 그렇기 때문에 독립성이 유지됩니다.
// HTML이나 CSS는 고정된 틀이지만, 그 안에서 다루는 데이터는 동적으로 변할 수 있습니다.
// 컴포넌트는 이런 변화를 유연하게 처리할 수 있도록 설계되어 있으며,
// 주로 내부의 상태(state)를 활용하거나, 상위 컴포넌트로부터 전달받은 값(props)을 통해 동작합니다.

// 3. 확장성
// 여러 개의 컴포넌트를 조합해 더 복잡한 UI를 구성할 수 있습니다.
// 예를 들어, 버튼(Button), 입력 필드(Input Field), 카드(Card) 등 작은 단위의 컴포넌트를 조합해
// 폼, 레이아웃, 페이지 등을 만들 수 있습니다. 쉽게 말해, 컴포넌트 + 컴포넌트 = 새로운 컴포넌트 라고 이해하시면 됩니다.

// Props
// Props는 React에서 부모 컴포넌트(상위 컴포넌트)에서 자식 컴포넌트(하위 컴포넌트)로, 데이터를 전달하는 매커니즘입니다.
// 부모 컴포넌트가 정의한 데이터를 자식 컴포넌트에게 전달하여, 컴포넌트 간 데이터 흐름을 효율적으로 관리할 수 있습니다.

// Props는 2가지 규칙을 따릅니다.
// 1. 단방향 데이터 흐름(one-way data flow): 데이터는 항상 부모 컴포넌트에서 자식 컴포넌트로 즉, 부모에서 자식 방향으로만 전달되며
// 자식 컴포넌트는 전달받은 데이터를 직접 수정할 수 없습니다.
// 2. 읽기 전용(Readonly): props는 자식 컴포넌트에서 수정할 수 없고, 조회와 출력에만 사용됩니다.

// 이러한 규칙 덕분에 데이터 흐름을 예측할 수 있고, 애플리케이션의 구조가 명확해져 유지보수가 쉬워집니다.
// 단, Props의 깊이(Depth)가 깊어지면, 데이터 추적이 어려울 수 있습니다.

// 위와 같은 문제 때문에, 중앙 집중식 상태 관리 라이브러리인 Redux, Redux Toolkit, Recoil, Jotai, Zustand 등이 탄생이 되었습니다.
// 공통적으로 사용되는 즉, 전역적으로 사용되는 상태(state), 액션(action)의 묶음 관리하거나 혹은 개별적으로 관리할 수 있습니다.

// 리액트 라우터란 무엇인가?
// React Router는 리액트(React) 애플리케이션에서 URL 경로에 따라 컴포넌트를 매핑해주는 라우팅 라이브러리(프레임워크) 입니다. 즉,
// SPA(Single Page Application) 환경에서 사용자가 URL을 바꿀 때 페이지 전체를 새로고침 하지 않고도 해당 경로에 맞는 컴포넌트만 렌더링하도록 해줍니다.
// 리액트 라우터는 다양한 아키텍쳐(SPA, SSR, SSG 등)와 배포 전략에 유연하게 대응할 수 있는 다중 전략(Multi-strategy) 라우터 입니다.

// 리액트 라우터를 사용하는 이유
// React Router를 사용하면 다음과 같은 이점이 있습니다.

// 클라이언트 측 네비게이션 : 전체 페이지가 아닌 필요한 부분만 렌더링하며 빠른 사용자 경험 제공
// URL 기반 UI 구성 : URL 경로와 UI 상태를 연동함으로써 웹 표준에 충실한 라우팅 로직을 구현
// 데이터 로딩 및 폼 처리 : Data 모드, Framework 모드에서는 loader, action 등을 통해 경로와 데이터 요청 및 응답을 연동 가능
// SSR / SSG 지원 : Framework 모드에서는 서버 사이드 렌더링이나 정적 생선 지원, SEO 및 초기 로등 속도가 향상

// Declarative Mode
// 가장 기본적인 React Router 사용 방식입니다. BrowserRouter, Routes, Route 등의 선언형 방식으로 라우팅 합니다.
// 사용하기에 가장 간단하며, SPA에서 UI 중심의 경로 관리에 적합니다. 구현하기 쉽고, 러닝커브가 비교적 낮습니다.

// <BrowserRouter>
//   <Routes>
//     <Route path="/" element={<Home />} />
//     <Route path="about" element={<About />} />
//   </Routes>
// </BrowserRouter>

// Data Mode
// createBrowserRouter, RouterProvider 등을 사용해 라우트 구성을 외부에서 진행합니다.
// 데이터 로딩(loading), 액션(action), 오류 처리등을 함께 지정 가능합니다.
// 데이터 로딩과 라우팅이 자연스럽게 통합되었습니다, pending 상태, 에러 처리, 폼 액션 지원 등 SPA에서 필요한 고급 흐름 구성이 가능해졌습니다.
//  그러나 라우트 선언 방식이 다소 복잡하고, 초기 설정이 번거로울 수 있습니다.

// 데이터 로직이 복잡해지면, 구조적인 고민이 필요합니다.

// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router";

// let router = createBrowserRouter([
//   {
//     path: "/",
//     Component: Root,
//     loader: loadRootData,
//   },
// ]);

// ReactDOM.createRoot(root).render(
//   <RouterProvider router={router} />,
// );

// // 1. 내가 만든 loader 함수 (데이터 불러오기 로직)
// async function productLoader() {
//   const res = await fetch("/api/products"); // 👉 여기서 GET 호출
//   return res.json(); // 예: [{id:1, name:"상품1"}, {id:2, name:"상품2"}]
// }

// // 2. 라우터 설정
// const router = createBrowserRouter([
//   {
//     path: "products",
//     element: <ProductList />,
//     loader: productLoader, // 라우트 진입할 때 실행됨
//   },
// ]);

// // 3. 컴포넌트에서 loader 결과 꺼내기
// function ProductList() {
//   const products = useLoaderData(); // 👈 productLoader의 반환값을 가져옴
//   return (
//     <ul>
//       {products.map(p => (
//         <li key={p.id}>{p.name}</li>
//       ))}
//     </ul>
//   );
// }

// Framework Mode
// React Router 공식문서에서는 Framework 모드를 다음과 같이 설명합니다.
// Framework Mode는 Vite 플러그인으로 Data Mode를 래핑하여 다음과 같은 전체 React Router 환경을 추가합니다.
// 즉, Data 모드의 기능을 그대로 쓰되, 개발에 필요한 그리고 편리한 플러그인들을 통해 확장한 모드라고 생각하면 됩니다.
// Vite는 빌드 / 번들러 역할을 하면서 파일 시스템을 읽고, Data 모드를 감싸
// 👉🏻 파일 기반 라우팅, 타입 자동 생성, SSR / SSG 등과 같은 프레임워크 수준의 기능을 얹어주었다 이해하시면 됩니다.

// [routes.ts]
// import { index, route } from "@react-router/dev/routes";
// export default [
//   index("./home.tsx"),
//   route("products/:pid", "./product.tsx"),
// ];

// @react-router/dev/routes 패키지를 이용해 파일 기반 라우팅을 선언하는 부분입니다.
// index("./home.tsx") 👉🏻 / 경로(홈 화면)와 home.tsx 파일을 연결합니다.
// route("products/:pid", "./product.tsx") 👉🏻 /products/:pid 경로와 product.tsx 파일을 연결합니다. :pid는 URL 파라미터 (예: /products/123)
// 즉, routes.ts 같은 라우트 설정 파일에서 URL → 컴포넌트 파일 매핑을 선언형으로 정리하는 단계입니다.

// [product.tsx]
// import { Route } from "+./types/product.tsx";
// export async function loader({ params }: Route.LoaderArgs) {
//   let product = await getProduct(params.pid);
//   return { product };
// }

// export default function Product({
//   loaderData,
// }: Route.ComponentProps) {
//   return <div>{loaderData.product.name}</div>;
// }

// 라우트 파일(product.tsx)을 만들고, export async function loader()와 export default function Component를 정의
// 파일 이름과 디렉터리 구조로 URL 경로 자동 매핑
// loader에서 API 호출 등 데이터 반환
// 반환값은 자동으로 props.loaderData로 컴포넌트에 전달
// Data Mode처럼 useLoaderData() 훅 불필요
// 타입 안전
// Vite 플러그인이 자동으로 타입 파일(+./types/...) 생성
// Route.ComponentProps로 loaderData 구조를 안전하게 보장
// Framework Mode = “Data Mode + 파일 기반 라우팅 + 자동 타입 안전 + props 전달”을 한 번에 제공하는 확장 모드
