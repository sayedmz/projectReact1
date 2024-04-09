// import { Route, Routes } from "react-router-dom";
// import Home from "./src/pages/Home/Home";
// import NotFound from "./src/pages/NotFound/NotFound";
// import RootLayout from "./src/layout/rootLayout/RootLayout";
// import Header from "./src/layout/Header/Header";

// const MainRoutes = () => {
//   return (
//     <Routes>
//       <Route element={<RootLayout />}>
//         <Route path="" element={<Home />} />
//         <Route path="*" element={<NotFound />} />
//       </Route>
//     </Routes>
//   );
// };

// export default MainRoutes;

import { Outlet, Route, Routes } from "react-router-dom";
import Home from "./src/pages/Home/Home";
import NotFound from "./src/pages/NotFound/NotFound";
import RootLayout from "./src/layout/rootLayout/RootLayout";
import Header from "./src/layout/Header/Header";

const MainRoutes = () => {
  return (
    <Routes>
      {/* <Route
        path="mh"
        element={
          <>
            hello mouhamad <Outlet />
          </>
        }
      >
        <Route path="lastName" element={<>zakaria</>} />
      </Route> */}

      <Route element={<RootLayout />}>
        <Route path="" element={<Home />} />
        <Route path="react-essentials" element={<Home />}>
          <Route path=":concept" element={<Home />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
