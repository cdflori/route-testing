// // import logo from './logo.svg';
// import "./App.css";
// import HomeNavbar from "./elements/Navbar/Navbar";
// import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import axios from "axios";
// import useAuth from "./hooks/auth";
// import Home from "./importedComponents/Home";
// import Signup from "./importedComponents/SignUp/Signup";
// import Login from "./importedComponents/Login/Login";
// // import Content from './importedComponents/Content';
// import Incidents from "./importedComponents/Incidents/Incidents";
// import AppFooter from "./elements/Footer/Footer";
// import DashboardApp from "./DashboardApp";
// import { CrudDemo } from "./pages/CrudDemo";
// // import { CrudDemo } from "./pages/CrudDemo";

// function App() {
//     // Pull auth token from storage, in case you refresh the page
//     const { getToken, logout } = useAuth();
//     axios.defaults.headers.common.Authorization = `Bearer ${getToken()}`;

//     // A nice trick that if we EVER get back a 401, will pop the token off
//     axios.interceptors.response.use(
//         (response) => {
//             // Any status code that lie within the range of 2xx cause this function to trigger
//             // Do something with response data
//             return response;
//         },
//         (error) => {
//             const { message } = error.toJSON();
//             // If we had time, we could write our own custom method to the auth middleware
//             // However, we are just gonna use their message.
//             if (message === "Request failed with status code 401") {
//                 logout();
//             }
//             // Any status codes that falls outside the range of 2xx cause this function to trigger
//             // Do something with response error
//             return Promise.reject(error);
//         }
//     );

//     return (
//         <Router>
//                 <Route path="/">
//                     <DashboardApp/>
//                 </Route>
                
//                 <div>
//                     {/* <HomeNavbar /> */}
//                     {/* <Route path="/home">
//                         <Home />
//                     </Route> */}
//                     <Route path="/signup">
//                         <Signup />
//                     </Route>
//                     <Route path="/login">
//                         <Login />
//                     </Route>
//                     <Route path="/incidents">
//                         <Incidents />
//                     </Route>
//                     {/* <AppFooter /> */}
//                 </div>
//                 {/* <PrivateRoute exact path='/content'>
//                     <Content />
//                 </PrivateRoute> */}
//         </Router>
//     );
// }

// // Yanked straight from the react-router docs for redirects
// function PrivateRoute({ children, ...rest }) {
//     const { isLoggedIn } = useAuth();
//     return (
//         <Route
//             {...rest}
//             render={({ location }) =>
//                 isLoggedIn() ? (
//                     children
//                 ) : (
//                     <Redirect
//                         to={{
//                             pathname: "/login",
//                             state: { from: location },
//                         }}
//                     />
//                 )
//             }
//         />
//     );
// }

// export default App;
