// import React from 'react';
// import { useHistory } from 'react-router-dom';
// import { InputText } from 'primereact/inputtext';
// import { Password } from 'primereact/password';
// import { Button } from 'primereact/button';

// export const Login = () => {
//     const history = useHistory();

//     return (
//         <div className="login-body">
//             <div className="login-image"></div>
//             <div className="card login-panel p-fluid">
//                 <div className="login-panel-content">
//                     <div className="p-grid">
//                         <div className="p-col-3" style={{ textAlign: 'left' }}>
//                             <img src="assets/layout/images/login/icon-login.svg" alt="avalon-layout" />
//                         </div>
//                         <div className="p-col-9" style={{ textAlign: 'left' }}>
//                             <h2 className="welcome-text">Welcome Guest</h2>
//                             <span className="guest-sign-in">Sign in to Avalon Network</span>
//                         </div>
//                         <div className="p-col-12" style={{ textAlign: 'left' }}>
//                             <label className="login-label">Username</label>
//                             <div className="login-input">
//                                 <InputText placeholder="Username" />
//                             </div>
//                         </div>
//                         <div className="p-col-12" style={{ textAlign: 'left' }}>
//                             <label className="login-label">Password</label>
//                             <div className="login-input">
//                                 <Password placeholder="Password" />
//                             </div>
//                         </div>
//                         <div className="p-col-12 p-md-6 button-pane">
//                             <Button label="Sign In" onClick={() => history.push('/')} />
//                         </div>
//                         <div className="p-col-12 p-md-6 link-pane">
//                             <button className="p-link">Forget Password?</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
