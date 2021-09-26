// import { useRouteMatch } from "react-router";
// import MenuLink from "./MenuLink";
// import { Switch } from 'react-router-dom';
// import { Route } from 'react-router-dom';
// import ProductListPage from "../../pages/ProductList/ProductListPage";

// export default function NestingMenu() {
//   let { path, url } = useRouteMatch();
//   return (
//     <>
//       <div className="nav-link pe-3">
//         <MenuLink
//           className="nav-link pe-3"
//           to={`${url}/iphone`}
//           label="iPhone"
//         />
//       </div>
//       <div className="nav-link pe-3">
//         <MenuLink to={`${url}/ipad`} label="iPad" />
//       </div>
//       <div className="nav-link pe-3">
//         <MenuLink to={`${url}/mac`} label="Mac" />
//       </div>
//       <div className="nav-link pe-3">
//         <MenuLink to={`${url}/apple-watch`} label="Apple Watch" />
//       </div>
//       <div className="nav-link pe-3">
//         <MenuLink to={`${url}/airpods`} label="AirPods" />
//       </div>
//       <div className="nav-link pe-3">
//         <MenuLink to={`${url}/phu-kien`} label="Phụ kiện" />
//       </div>

//       <Switch>
//         <Route exact path={path}>
//         </Route>
//         <Route path={`${path}/:appleProduct`}>
//           <ProductListPage />
//         </Route>
//       </Switch>
//     </>
//   );
// }
