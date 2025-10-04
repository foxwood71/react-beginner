import { ThemeProvider } from "@/components/theme-provider";
import { AppFooter, AppHeader, AppSidebar } from "./components/common";
import { SkeletonHotTopic, SkeletonNewTopic } from "./components/skeleton";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {/* 1. 페이지 전체를 flex-col, min-h-screen으로 설정 */}
      {/* <div className="page"> */}
      <div className="page flex flex-col min-h-screen">
        <AppHeader />
        {/* 2. container가 남은 공간을 채우고(flex-1) 자체 스크롤(overflow-y-auto)을 갖도록 설정 */}
        {/* <div className="container"> */}
        <div className="container flex-1 overflow-hidden">
          {/* container 에는 overflow 제거 */}
          {/* main에 h-full과 overflow-hidden을 추가합니다.
            h-full: 부모(container)의 높이를 100% 채우도록 강제
            overflow-hidden: main 자체에서는 스크롤바가 생기지 않도록 방지
            main의 높이는 932px + p-6(24px*2=48px) = 980px로 page전체의 높이(954px)보다 커짐
            문제는 h-full(height:100%) 임 flex-1로 높이가 결정되는 컨테이너(div.container) 내부에 height: 100%를 가진 자식(main)이 있을 경우, 
            브라우저는 높이를 계산하는 과정에서 충돌을 일으켜 자식의 콘텐츠 크기를 우선하는 경우가 많습니다. 
            이 때문에 flex-1이 의도대로 동작하지 않고 레이아웃이 깨지게 됩니다.
             ==> container에 overflow-hidden 적용하여 높이를 확정
          */}
          {/* <main className="w-full h-full min-h-[720px] flex p-6 gap-6"> */}
          <main className="w-full h-full flex p-6 gap-6 overflow-hidden">
            {/* 카테고리 사이드바 */}
            <AppSidebar />
            {/* 토픽 콘텐츠 */}
            {/* 토픽 콘텐츠 section에 스크롤을 적용합니다.
              overflow-y-auto: 이 요소의 높이를 내용이 초과할 경우 세로 스크롤바 생성
            */}
            {/* <section className="flex-1 flex flex-col gap-12"> */}
            <section className="flex-1 flex flex-col gap-12 overflow-y-auto">
              {/* 핫 토픽 */}
              <div className="w-full flex flex-col gap-6">
                <div className="flex flex-col gap-1">
                  <div className="flex flex-col gap-2">
                    <img src="/assets/gifs/fire.gif" alt="@IMG" className="w-7 h-7" />
                    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">핫 토픽</h4>
                  </div>
                  <p className="md:text-base text-muted-foreground">
                    지금 가장 주목받는 주제들을 살펴보고, 다양한 관점의 인사이트를 얻어보세요
                  </p>
                </div>
                <div className="grid grid-cols-4 gap-6">
                  <SkeletonHotTopic />
                  <SkeletonHotTopic />
                  <SkeletonHotTopic />
                  <SkeletonHotTopic />
                </div>
              </div>
              {/* NEW 토픽 */}
              <div className="w-full flex flex-col gap-6">
                <div className="flex flex-col gap-1">
                  <div className="flex flex-col gap-2">
                    <img src="/assets/gifs/writing-hand.gif" alt="@IMG" className="w-7 h-7" />
                    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">NEW 토픽</h4>
                  </div>
                  <p className="md:text-base text-muted-foreground">
                    새로운 시선으로, 새로운 이야기를 시작하세요. 지금 바로 당신만의 토픽을 작성해 보세요
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <SkeletonNewTopic />
                  <SkeletonNewTopic />
                  <SkeletonNewTopic />
                  <SkeletonNewTopic />
                </div>
              </div>
            </section>
          </main>
        </div>
        <AppFooter />
      </div>
    </ThemeProvider>
  );
}

export default App;
