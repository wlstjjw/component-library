
// //Emotion 테스트
// import styled from "@emotion/styled";
// import TestSidebar from "./TestSidebar";
// import TestTopbar from "./TestTopbar";
// import TestPageTitle from "./TestPageTitle";
// import TestContent from "./TestContent";

// const Layout = styled.div`
//     position: relative;
//     width: 100vw;
//     height: 100vh;
//     display: flex;
//     overflow: hidden;
// `;

// const MainLayout = styled.div`
//     width: calc(100% - 250px);
//     height: 100vh;
//     position: relative;
//     transition: 0.3s;
// `;

// const Page = styled.div`
//     width: 100%;
//     height: calc(100% - 56px);
//     background-color: #F1F5F9;
//     overflow: auto;
// `;

// export default function TestLayout(){
//     return(
//         <Layout>
//             <TestSidebar/>
//             <MainLayout>
//                 <TestTopbar/>
//                 <Page>
//                     <TestPageTitle />
//                     <TestContent />
//                 </Page>
//             </MainLayout>
//         </Layout>
//     )
// }

//--------------------------
//tailwind 테스트
import TestSidebar from "./TestSidebar";
import TestTopbar from "./TestTopbar";
import TestPageTitle from "./TestPageTitle";
import TestContent from "./TestContent";

export default function TestLayout() {
  return (
    <div className="relative flex w-screen h-screen overflow-hidden">
      <TestSidebar />
      <div className="relative flex h-screen flex-1 flex-col transition-[width] duration-300">
        <TestTopbar />
        <div className="w-full flex-1 overflow-auto bg-slate-100">
          <TestPageTitle />
          <TestContent />
        </div>
      </div>
    </div>
  );
}