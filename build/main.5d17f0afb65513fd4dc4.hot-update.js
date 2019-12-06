webpackHotUpdateumd("main",{

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
const Container_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js"));
const Header_1 = __importDefault(__webpack_require__(/*! ./components/layout/Header */ "./src/components/layout/Header.tsx"));
const Footer_1 = __importDefault(__webpack_require__(/*! ./components/layout/Footer */ "./src/components/layout/Footer.tsx"));
const About_1 = __importDefault(__webpack_require__(/*! ./components/pages/About */ "./src/components/pages/About.tsx"));
const Grid_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js"));
const Register_1 = __importDefault(__webpack_require__(/*! ./components/pages/Register */ "./src/components/pages/Register.tsx"));
const Index_1 = __importDefault(__webpack_require__(/*! ./components/pages/Index */ "./src/components/pages/Index.tsx"));
const Contact_1 = __importDefault(__webpack_require__(/*! ./components/pages/Contact */ "./src/components/pages/Contact.tsx"));
const Account_1 = __importDefault(__webpack_require__(/*! ./components/pages/Account */ "./src/components/pages/Account.tsx"));
const Projects_1 = __importDefault(__webpack_require__(/*! ./components/pages/Projects */ "./src/components/pages/Projects.tsx"));
const Support_1 = __importDefault(__webpack_require__(/*! ./components/pages/Support */ "./src/components/pages/Support.tsx"));
const Forum_1 = __importDefault(__webpack_require__(/*! ./components/pages/Forum */ "./src/components/pages/Forum.tsx"));
const axios_1 = __webpack_require__(/*! ./components/static/axios */ "./src/components/static/axios.ts");
const Post_1 = __importDefault(__webpack_require__(/*! ./components/pages/Post */ "./src/components/pages/Post.tsx"));
const Login_1 = __importDefault(__webpack_require__(/*! ./components/pages/Login */ "./src/components/pages/Login.tsx"));
const styles_1 = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
const useStyles = styles_1.makeStyles((theme) => styles_1.createStyles({
    paragraph: {
        color: "white",
        paddingLeft: "20px"
    },
    main: {
        maxWidth: "1140px",
        backgroundColor: "white",
        minHeight: "100vh",
        padding: "90px 30px 0px 30px"
    },
    mainContainer: {
        backgroundImage: "url(http://localhost:8080/upload/files/background.jpg)",
        minHeight: "100vh",
        padding: "0px",
        margin: "0px"
    }
}));
function App() {
    const classes = useStyles();
    const [authenticated, setAuthenticated] = react_1.default.useState(false);
    const [username, setUsername] = react_1.default.useState(null);
    const [password, setPassword] = react_1.default.useState(null);
    function authenticate_user() {
        const token = localStorage.getItem('token');
        console.log("Authenticating user at top layer");
        if (token) {
            const u = token.split("?")[0];
            setUsername(u);
            const p = token.split("?")[1];
            setPassword(p);
            const response = axios_1.post("/users/login", JSON.stringify({ username: username, email: username, password: password }), true);
            response.onload = () => {
                if (response.responseText.includes("Success")) {
                    console.log("Successfully authenticated user");
                    setAuth(true);
                }
            };
        }
    }
    function setAuth(val) {
        setAuthenticated(val);
    }
    authenticate_user();
    return (react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
        react_1.default.createElement(Grid_1.default, { container: true, xs: 12, className: classes.mainContainer },
            react_1.default.createElement(Header_1.default, { auth: authenticated }),
            react_1.default.createElement(Grid_1.default, { item: true, container: true, xs: 12, justify: "center", alignItems: "center" },
                react_1.default.createElement(Container_1.default, { className: classes.main },
                    react_1.default.createElement(react_router_dom_1.Switch, null,
                        react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: '/', render: (props) => (react_1.default.createElement(Index_1.default, null)) }),
                        react_1.default.createElement(react_router_dom_1.Route, { path: '/Forum', render: (props) => (react_1.default.createElement(Forum_1.default, { authenticated: authenticated, my_username: username, my_password: password })) }),
                        react_1.default.createElement(react_router_dom_1.Route, { path: '/Login', render: (props) => (react_1.default.createElement(Login_1.default, { authenticate: authenticate_user })) }),
                        react_1.default.createElement(react_router_dom_1.Route, { path: '/Register', component: Register_1.default }),
                        react_1.default.createElement(react_router_dom_1.Route, { path: '/About us', component: About_1.default }),
                        react_1.default.createElement(react_router_dom_1.Route, { path: '/Account', render: (props) => (react_1.default.createElement(Account_1.default, { removeAuth: setAuth, username: username, password: password })) }),
                        react_1.default.createElement(react_router_dom_1.Route, { path: '/Forum/Post', render: (props) => (react_1.default.createElement(Post_1.default, { authenticated: authenticated, username: username, password: password })) }),
                        react_1.default.createElement(react_router_dom_1.Route, { path: '/Contact', component: Contact_1.default }),
                        react_1.default.createElement(react_router_dom_1.Route, { path: '/Projects', component: Projects_1.default }),
                        react_1.default.createElement(react_router_dom_1.Route, { path: '/Support', component: Support_1.default })))),
            react_1.default.createElement(Footer_1.default, null))));
}
exports.default = App;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91bWQvLi9zcmMvQXBwLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtR0FBMEI7QUFFMUIsa0lBQTBFO0FBQzFFLHVKQUFvRDtBQUVwRCw4SEFBZ0Q7QUFDaEQsOEhBQWdEO0FBQ2hELHlIQUE2QztBQUM3Qyx3SUFBMEM7QUFDMUMsa0lBQW1EO0FBQ25ELHlIQUE2QztBQUM3QywrSEFBaUQ7QUFDakQsK0hBQWlEO0FBQ2pELGtJQUFtRDtBQUNuRCwrSEFBaUQ7QUFDakQseUhBQTZDO0FBQzdDLHlHQUErQztBQUMvQyxzSEFBMkM7QUFDM0MseUhBQTZDO0FBRTdDLDZIQUEyRTtBQUczRSxNQUFNLFNBQVMsR0FBRyxtQkFBVSxDQUFDLENBQUMsS0FBWSxFQUFFLEVBQUUsQ0FDN0MscUJBQVksQ0FBQztJQUNaLFNBQVMsRUFBRTtRQUNWLEtBQUssRUFBRSxPQUFPO1FBQ2QsV0FBVyxFQUFFLE1BQU07S0FDbkI7SUFDRCxJQUFJLEVBQUU7UUFDTCxRQUFRLEVBQUUsUUFBUTtRQUNsQixlQUFlLEVBQUUsT0FBTztRQUN4QixTQUFTLEVBQUUsT0FBTztRQUNsQixPQUFPLEVBQUUsb0JBQW9CO0tBQzdCO0lBQ0QsYUFBYSxFQUFFO1FBQ2QsZUFBZSxFQUFFLHdEQUF3RDtRQUN6RSxTQUFTLEVBQUUsT0FBTztRQUNsQixPQUFPLEVBQUUsS0FBSztRQUNkLE1BQU0sRUFBRSxLQUFLO0tBQ2I7Q0FDRCxDQUFDLENBRUYsQ0FBQztBQUVGLFNBQXdCLEdBQUc7SUFDMUIsTUFBTSxPQUFPLEdBQUcsU0FBUyxFQUFFLENBQUM7SUFFNUIsTUFBTSxDQUFDLGFBQWEsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLGVBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEUsTUFBTSxDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUMsR0FBRyxlQUFLLENBQUMsUUFBUSxDQUFnQixJQUFJLENBQUMsQ0FBQztJQUNwRSxN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LElBQUMsVUFBVSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEdBQUcsQ0FBQyxHQUFHO3dCQUN0SCw4QkFBQyx3QkFBSyxJQUFDLElBQUksRUFBQyxhQUFhLEVBQUMsTUFBTSxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLDhCQUFDLGNBQUksSUFBQyxhQUFhLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsR0FBRyxDQUFDLEdBQUc7d0JBQy9ILDhCQUFDLHdCQUFLLElBQUMsSUFBSSxFQUFDLFVBQVUsRUFBQyxTQUFTLEVBQUUsaUJBQU8sR0FBSTt3QkFDN0MsOEJBQUMsd0JBQUssSUFBQyxJQUFJLEVBQUMsV0FBVyxFQUFDLFNBQVMsRUFBRSxrQkFBUSxHQUFJO3dCQUMvQyw4QkFBQyx3QkFBSyxJQUFDLElBQUksRUFBQyxVQUFVLEVBQUMsU0FBUyxFQUFFLGlCQUFPLEdBQUksQ0FDckMsQ0FDRSxDQUNOO1lBQ1AsOEJBQUMsZ0JBQU0sT0FBRSxDQUNILENBQ0MsQ0FDVCxDQUFDO0FBQ0gsQ0FBQztBQW5ERCxzQkFtREMiLCJmaWxlIjoibWFpbi41ZDE3ZjBhZmI2NTUxM2ZkNGRjNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIsIFJvdXRlLCBTd2l0Y2ggfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyJztcblxuaW1wb3J0IEhlYWRlciBmcm9tICcuL2NvbXBvbmVudHMvbGF5b3V0L0hlYWRlcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vY29tcG9uZW50cy9sYXlvdXQvRm9vdGVyJztcbmltcG9ydCBBYm91dCBmcm9tICcuL2NvbXBvbmVudHMvcGFnZXMvQWJvdXQnO1xuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XG5pbXBvcnQgUmVnaXN0ZXIgZnJvbSAnLi9jb21wb25lbnRzL3BhZ2VzL1JlZ2lzdGVyJztcbmltcG9ydCBJbmRleCBmcm9tICcuL2NvbXBvbmVudHMvcGFnZXMvSW5kZXgnO1xuaW1wb3J0IENvbnRhY3QgZnJvbSAnLi9jb21wb25lbnRzL3BhZ2VzL0NvbnRhY3QnO1xuaW1wb3J0IEFjY291bnQgZnJvbSAnLi9jb21wb25lbnRzL3BhZ2VzL0FjY291bnQnO1xuaW1wb3J0IFByb2plY3RzIGZyb20gJy4vY29tcG9uZW50cy9wYWdlcy9Qcm9qZWN0cyc7XG5pbXBvcnQgU3VwcG9ydCBmcm9tICcuL2NvbXBvbmVudHMvcGFnZXMvU3VwcG9ydCc7XG5pbXBvcnQgRm9ydW0gZnJvbSAnLi9jb21wb25lbnRzL3BhZ2VzL0ZvcnVtJztcbmltcG9ydCB7cG9zdH0gZnJvbSAnLi9jb21wb25lbnRzL3N0YXRpYy9heGlvcyc7XG5pbXBvcnQgUG9zdCBmcm9tICcuL2NvbXBvbmVudHMvcGFnZXMvUG9zdCc7XG5pbXBvcnQgTG9naW4gZnJvbSAnLi9jb21wb25lbnRzL3BhZ2VzL0xvZ2luJztcblxuaW1wb3J0IHsgbWFrZVN0eWxlcywgVGhlbWUsIGNyZWF0ZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5cblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PlxuXHRjcmVhdGVTdHlsZXMoe1xuXHRcdHBhcmFncmFwaDoge1xuXHRcdFx0Y29sb3I6IFwid2hpdGVcIixcblx0XHRcdHBhZGRpbmdMZWZ0OiBcIjIwcHhcIlxuXHRcdH0sXG5cdFx0bWFpbjoge1xuXHRcdFx0bWF4V2lkdGg6IFwiMTE0MHB4XCIsXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIixcblx0XHRcdG1pbkhlaWdodDogXCIxMDB2aFwiLFxuXHRcdFx0cGFkZGluZzogXCI5MHB4IDMwcHggMHB4IDMwcHhcIlxuXHRcdH0sXG5cdFx0bWFpbkNvbnRhaW5lcjoge1xuXHRcdFx0YmFja2dyb3VuZEltYWdlOiBcInVybChodHRwOi8vbG9jYWxob3N0OjgwODAvdXBsb2FkL2ZpbGVzL2JhY2tncm91bmQuanBnKVwiLFxuXHRcdFx0bWluSGVpZ2h0OiBcIjEwMHZoXCIsXG5cdFx0XHRwYWRkaW5nOiBcIjBweFwiLFxuXHRcdFx0bWFyZ2luOiBcIjBweFwiXG5cdFx0fVxuXHR9KSxcblx0XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAgKCkge1xuXHRjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG5cdFxuXHRjb25zdCBbYXV0aGVudGljYXRlZCwgc2V0QXV0aGVudGljYXRlZF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG5cdGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG5cdGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG5cdFxuXHRmdW5jdGlvbiBhdXRoZW50aWNhdGVfdXNlcigpe1xuXHRcdGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XG5cdFx0Y29uc29sZS5sb2coXCJBdXRoZW50aWNhdGluZyB1c2VyIGF0IHRvcCBsYXllclwiKVxuXHRcdGlmICh0b2tlbikge1xuXHRcdFx0Y29uc3QgdTpudWxsIHwgc3RyaW5nID0gdG9rZW4uc3BsaXQoXCI/XCIpWzBdOyBzZXRVc2VybmFtZSh1KTtcblx0XHRcdGNvbnN0IHA6bnVsbCB8IHN0cmluZyA9IHRva2VuLnNwbGl0KFwiP1wiKVsxXTsgc2V0UGFzc3dvcmQocCk7XG5cdFx0XHRjb25zdCByZXNwb25zZSA9IHBvc3QoXCIvdXNlcnMvbG9naW5cIiwgSlNPTi5zdHJpbmdpZnkoe3VzZXJuYW1lOnVzZXJuYW1lLCBlbWFpbDp1c2VybmFtZSwgcGFzc3dvcmQ6cGFzc3dvcmR9KSwgdHJ1ZSk7XG5cdFx0XHRyZXNwb25zZS5vbmxvYWQgPSAoKSA9PiB7XG5cdFx0XHRcdGlmIChyZXNwb25zZS5yZXNwb25zZVRleHQuaW5jbHVkZXMoXCJTdWNjZXNzXCIpKXtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIlN1Y2Nlc3NmdWxseSBhdXRoZW50aWNhdGVkIHVzZXJcIilcblx0XHRcdFx0XHRzZXRBdXRoKHRydWUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdFxuXHRmdW5jdGlvbiBzZXRBdXRoKHZhbDogYm9vbGVhbil7XG5cdFx0c2V0QXV0aGVudGljYXRlZCh2YWwpO1xuXHR9XG5cdGF1dGhlbnRpY2F0ZV91c2VyKCk7XG5cdHJldHVybiAoXG5cdFx0PFJvdXRlcj5cblx0XHRcdDxHcmlkIGNvbnRhaW5lciB4cz17MTJ9IGNsYXNzTmFtZT17Y2xhc3Nlcy5tYWluQ29udGFpbmVyfT5cblx0XHRcdFx0PEhlYWRlciBhdXRoPXthdXRoZW50aWNhdGVkfS8+XG5cdFx0XHRcdDxHcmlkIGl0ZW0gY29udGFpbmVyIHhzPXsxMn0ganVzdGlmeT1cImNlbnRlclwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIiA+XG5cdFx0XHRcdFx0PENvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMubWFpbn0+XG5cdFx0XHRcdFx0XHQ8U3dpdGNoPlxuXHRcdFx0XHRcdFx0XHQ8Um91dGUgZXhhY3QgcGF0aD0nLycgcmVuZGVyPXsocHJvcHMpID0+ICg8SW5kZXgvPil9Lz5cblx0XHRcdFx0XHRcdFx0PFJvdXRlIHBhdGg9Jy9Gb3J1bScgcmVuZGVyPXsocHJvcHMpID0+ICg8Rm9ydW0gYXV0aGVudGljYXRlZD17YXV0aGVudGljYXRlZH0gbXlfdXNlcm5hbWU9e3VzZXJuYW1lfSBteV9wYXNzd29yZD17cGFzc3dvcmR9IC8+KX0vPlxuXHRcdFx0XHRcdFx0XHQ8Um91dGUgcGF0aD0nL0xvZ2luJyByZW5kZXI9eyhwcm9wcykgPT4gKDxMb2dpbiBhdXRoZW50aWNhdGU9e2F1dGhlbnRpY2F0ZV91c2VyfSAvPil9Lz5cblx0XHRcdFx0XHRcdFx0PFJvdXRlIHBhdGg9Jy9SZWdpc3RlcicgY29tcG9uZW50PXtSZWdpc3Rlcn0gLz5cblx0XHRcdFx0XHRcdFx0PFJvdXRlIHBhdGg9Jy9BYm91dCB1cycgY29tcG9uZW50PXtBYm91dH0gLz5cblx0XHRcdFx0XHRcdFx0PFJvdXRlIHBhdGg9Jy9BY2NvdW50JyByZW5kZXI9eyhwcm9wcykgPT4gKDxBY2NvdW50IHJlbW92ZUF1dGg9e3NldEF1dGh9IHVzZXJuYW1lPXt1c2VybmFtZX0gcGFzc3dvcmQ9e3Bhc3N3b3JkfS8+KX0vPlxuXHRcdFx0XHRcdFx0XHQ8Um91dGUgcGF0aD0nL0ZvcnVtL1Bvc3QnIHJlbmRlcj17KHByb3BzKSA9PiAoPFBvc3QgYXV0aGVudGljYXRlZD17YXV0aGVudGljYXRlZH0gdXNlcm5hbWU9e3VzZXJuYW1lfSBwYXNzd29yZD17cGFzc3dvcmR9Lz4pfS8+XG5cdFx0XHRcdFx0XHRcdDxSb3V0ZSBwYXRoPScvQ29udGFjdCcgY29tcG9uZW50PXtDb250YWN0fSAvPlxuXHRcdFx0XHRcdFx0XHQ8Um91dGUgcGF0aD0nL1Byb2plY3RzJyBjb21wb25lbnQ9e1Byb2plY3RzfSAvPlxuXHRcdFx0XHRcdFx0XHQ8Um91dGUgcGF0aD0nL1N1cHBvcnQnIGNvbXBvbmVudD17U3VwcG9ydH0gLz5cblx0XHRcdFx0XHRcdDwvU3dpdGNoPlxuXHRcdFx0XHRcdDwvQ29udGFpbmVyPlxuXHRcdFx0XHQ8L0dyaWQ+XG5cdFx0XHRcdDxGb290ZXIvPlxuXHRcdFx0PC9HcmlkPlxuXHRcdDwvUm91dGVyPlxuXHQpO1xufVxuXG4iXSwic291cmNlUm9vdCI6IiJ9