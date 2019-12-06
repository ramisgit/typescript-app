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


/***/ }),

/***/ "./src/components/pages/Login.tsx":
/*!****************************************!*\
  !*** ./src/components/pages/Login.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const Avatar_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/esm/Avatar/index.js"));
const Button_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js"));
const CssBaseline_1 = __importDefault(__webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js"));
const TextField_1 = __importDefault(__webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js"));
const FormControlLabel_1 = __importDefault(__webpack_require__(/*! @material-ui/core/FormControlLabel */ "./node_modules/@material-ui/core/esm/FormControlLabel/index.js"));
const Checkbox_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Checkbox */ "./node_modules/@material-ui/core/esm/Checkbox/index.js"));
const Link_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Link */ "./node_modules/@material-ui/core/esm/Link/index.js"));
const Grid_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js"));
const Box_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js"));
const LockOutlined_1 = __importDefault(__webpack_require__(/*! @material-ui/icons/LockOutlined */ "./node_modules/@material-ui/icons/LockOutlined.js"));
const Typography_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js"));
const styles_1 = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
const Container_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js"));
const axios_1 = __webpack_require__(/*! ../static/axios */ "./src/components/static/axios.ts");
const Snack_1 = __importDefault(__webpack_require__(/*! ../static/Snack */ "./src/components/static/Snack.tsx"));
function Copyright() {
    return (react_1.default.createElement(Typography_1.default, { variant: "body2", color: "textSecondary", align: "center" },
        'Copyright � ',
        react_1.default.createElement(Link_1.default, { color: "inherit", href: "https://material-ui.com/" }, "Your Website"),
        ' ',
        new Date().getFullYear(),
        '.'));
}
const useStyles = styles_1.makeStyles(theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        },
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));
class Warning extends react_1.default.Component {
    constructor() {
        super(...arguments);
        this.determineClass = () => {
            if (this.props.val.includes("Success")) {
                return "alert alert-success";
            }
            else {
                return "alert alert-danger";
            }
        };
    }
    render() {
        return (react_1.default.createElement("div", { style: { display: this.props.val === "" ? "none" : "block" }, className: this.determineClass(), role: "alert" }, this.props.val));
    }
}
function Login(props) {
    let usernameInput = react_1.default.createRef();
    let passwordInput = react_1.default.createRef();
    const classes = useStyles();
    const [response, setResponse] = react_1.default.useState("");
    function submitLogin(e) {
        e.preventDefault();
        console.log("User logging in....");
        let usernameVal = usernameInput.current.value;
        let passwordVal = passwordInput.current.value;
        const response = axios_1.post("/users/login", JSON.stringify({ username: usernameVal, email: usernameVal, password: passwordVal }), true);
        response.onload = () => {
            setResponse(response.responseText);
            if (response.responseText.includes("Success")) {
                localStorage.setItem("token", usernameVal + "?" + passwordVal); //encrypt this later
                props.authenticate();
            }
        };
    }
    return (react_1.default.createElement(Container_1.default, { component: "main", maxWidth: "xs" },
        react_1.default.createElement(Snack_1.default, { openHandler: openHandler, open: open, varient: varient, message: response }),
        react_1.default.createElement(Warning, { val: response }),
        react_1.default.createElement(CssBaseline_1.default, null),
        react_1.default.createElement("div", { className: classes.paper },
            react_1.default.createElement(Avatar_1.default, { className: classes.avatar },
                react_1.default.createElement(LockOutlined_1.default, null)),
            react_1.default.createElement(Typography_1.default, { component: "h1", variant: "h5" }, "Sign in"),
            react_1.default.createElement("form", { className: classes.form, noValidate: true },
                react_1.default.createElement(TextField_1.default, { inputRef: usernameInput, variant: "outlined", margin: "normal", required: true, fullWidth: true, id: "email", label: "Email Address", name: "email", autoComplete: "email", autoFocus: true }),
                react_1.default.createElement(TextField_1.default, { inputRef: passwordInput, variant: "outlined", margin: "normal", required: true, fullWidth: true, name: "password", label: "Password", type: "password", id: "password", autoComplete: "current-password" }),
                react_1.default.createElement(FormControlLabel_1.default, { control: react_1.default.createElement(Checkbox_1.default, { value: "remember", color: "primary" }), label: "Remember me" }),
                react_1.default.createElement(Button_1.default, { onClick: (e) => submitLogin(e), fullWidth: true, variant: "contained", color: "primary", className: classes.submit }, "Sign In"),
                react_1.default.createElement(Grid_1.default, { container: true },
                    react_1.default.createElement(Grid_1.default, { item: true, xs: true },
                        react_1.default.createElement(Link_1.default, { href: "#", variant: "body2" }, "Forgot password?")),
                    react_1.default.createElement(Grid_1.default, { item: true },
                        react_1.default.createElement(Link_1.default, { href: "/Register", variant: "body2" }, "Don't have an account? Sign Up"))))),
        react_1.default.createElement(Box_1.default, { mt: 8 },
            react_1.default.createElement(Copyright, null))));
}
exports.default = Login;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91bWQvLi9zcmMvQXBwLnRzeCIsIndlYnBhY2s6Ly91bWQvLi9zcmMvY29tcG9uZW50cy9wYWdlcy9Mb2dpbi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUdBQTBCO0FBRTFCLGtJQUEwRTtBQUMxRSx1SkFBb0Q7QUFFcEQsOEhBQWdEO0FBQ2hELDhIQUFnRDtBQUNoRCx5SEFBNkM7QUFDN0Msd0lBQTBDO0FBQzFDLGtJQUFtRDtBQUNuRCx5SEFBNkM7QUFDN0MsK0hBQWlEO0FBQ2pELCtIQUFpRDtBQUNqRCxrSUFBbUQ7QUFDbkQsK0hBQWlEO0FBQ2pELHlIQUE2QztBQUM3Qyx5R0FBK0M7QUFDL0Msc0hBQTJDO0FBQzNDLHlIQUE2QztBQUU3Qyw2SEFBMkU7QUFHM0UsTUFBTSxTQUFTLEdBQUcsbUJBQVUsQ0FBQyxDQUFDLEtBQVksRUFBRSxFQUFFLENBQzdDLHFCQUFZLENBQUM7SUFDWixTQUFTLEVBQUU7UUFDVixLQUFLLEVBQUUsT0FBTztRQUNkLFdBQVcsRUFBRSxNQUFNO0tBQ25CO0lBQ0QsSUFBSSxFQUFFO1FBQ0wsUUFBUSxFQUFFLFFBQVE7UUFDbEIsZUFBZSxFQUFFLE9BQU87UUFDeEIsU0FBUyxFQUFFLE9BQU87UUFDbEIsT0FBTyxFQUFFLG9CQUFvQjtLQUM3QjtJQUNELGFBQWEsRUFBRTtRQUNkLGVBQWUsRUFBRSx3REFBd0Q7UUFDekUsU0FBUyxFQUFFLE9BQU87UUFDbEIsT0FBTyxFQUFFLEtBQUs7UUFDZCxNQUFNLEVBQUUsS0FBSztLQUNiO0NBQ0QsQ0FBQyxDQUVGLENBQUM7QUFFRixTQUF3QixHQUFHO0lBQzFCLE1BQU0sT0FBTyxHQUFHLFNBQVMsRUFBRSxDQUFDO0lBRTVCLE1BQU0sQ0FBQyxhQUFhLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxlQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hFLE1BQU0sQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFD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OWNjMTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyLCBSb3V0ZSwgU3dpdGNoIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lcic7XG5cbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9jb21wb25lbnRzL2xheW91dC9IZWFkZXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuL2NvbXBvbmVudHMvbGF5b3V0L0Zvb3Rlcic7XG5pbXBvcnQgQWJvdXQgZnJvbSAnLi9jb21wb25lbnRzL3BhZ2VzL0Fib3V0JztcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xuaW1wb3J0IFJlZ2lzdGVyIGZyb20gJy4vY29tcG9uZW50cy9wYWdlcy9SZWdpc3Rlcic7XG5pbXBvcnQgSW5kZXggZnJvbSAnLi9jb21wb25lbnRzL3BhZ2VzL0luZGV4JztcbmltcG9ydCBDb250YWN0IGZyb20gJy4vY29tcG9uZW50cy9wYWdlcy9Db250YWN0JztcbmltcG9ydCBBY2NvdW50IGZyb20gJy4vY29tcG9uZW50cy9wYWdlcy9BY2NvdW50JztcbmltcG9ydCBQcm9qZWN0cyBmcm9tICcuL2NvbXBvbmVudHMvcGFnZXMvUHJvamVjdHMnO1xuaW1wb3J0IFN1cHBvcnQgZnJvbSAnLi9jb21wb25lbnRzL3BhZ2VzL1N1cHBvcnQnO1xuaW1wb3J0IEZvcnVtIGZyb20gJy4vY29tcG9uZW50cy9wYWdlcy9Gb3J1bSc7XG5pbXBvcnQge3Bvc3R9IGZyb20gJy4vY29tcG9uZW50cy9zdGF0aWMvYXhpb3MnO1xuaW1wb3J0IFBvc3QgZnJvbSAnLi9jb21wb25lbnRzL3BhZ2VzL1Bvc3QnO1xuaW1wb3J0IExvZ2luIGZyb20gJy4vY29tcG9uZW50cy9wYWdlcy9Mb2dpbic7XG5cbmltcG9ydCB7IG1ha2VTdHlsZXMsIFRoZW1lLCBjcmVhdGVTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuXG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lOiBUaGVtZSkgPT5cblx0Y3JlYXRlU3R5bGVzKHtcblx0XHRwYXJhZ3JhcGg6IHtcblx0XHRcdGNvbG9yOiBcIndoaXRlXCIsXG5cdFx0XHRwYWRkaW5nTGVmdDogXCIyMHB4XCJcblx0XHR9LFxuXHRcdG1haW46IHtcblx0XHRcdG1heFdpZHRoOiBcIjExNDBweFwiLFxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCIsXG5cdFx0XHRtaW5IZWlnaHQ6IFwiMTAwdmhcIixcblx0XHRcdHBhZGRpbmc6IFwiOTBweCAzMHB4IDBweCAzMHB4XCJcblx0XHR9LFxuXHRcdG1haW5Db250YWluZXI6IHtcblx0XHRcdGJhY2tncm91bmRJbWFnZTogXCJ1cmwoaHR0cDovL2xvY2FsaG9zdDo4MDgwL3VwbG9hZC9maWxlcy9iYWNrZ3JvdW5kLmpwZylcIixcblx0XHRcdG1pbkhlaWdodDogXCIxMDB2aFwiLFxuXHRcdFx0cGFkZGluZzogXCIwcHhcIixcblx0XHRcdG1hcmdpbjogXCIwcHhcIlxuXHRcdH1cblx0fSksXG5cdFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwICgpIHtcblx0Y29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXHRcblx0Y29uc3QgW2F1dGhlbnRpY2F0ZWQsIHNldEF1dGhlbnRpY2F0ZWRdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuXHRjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuXHRjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuXHRcblx0ZnVuY3Rpb24gYXV0aGVudGljYXRlX3VzZXIoKXtcblx0XHRjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xuXHRcdGNvbnNvbGUubG9nKFwiQXV0aGVudGljYXRpbmcgdXNlciBhdCB0b3AgbGF5ZXJcIilcblx0XHRpZiAodG9rZW4pIHtcblx0XHRcdGNvbnN0IHU6bnVsbCB8IHN0cmluZyA9IHRva2VuLnNwbGl0KFwiP1wiKVswXTsgc2V0VXNlcm5hbWUodSk7XG5cdFx0XHRjb25zdCBwOm51bGwgfCBzdHJpbmcgPSB0b2tlbi5zcGxpdChcIj9cIilbMV07IHNldFBhc3N3b3JkKHApO1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBwb3N0KFwiL3VzZXJzL2xvZ2luXCIsIEpTT04uc3RyaW5naWZ5KHt1c2VybmFtZTp1c2VybmFtZSwgZW1haWw6dXNlcm5hbWUsIHBhc3N3b3JkOnBhc3N3b3JkfSksIHRydWUpO1xuXHRcdFx0cmVzcG9uc2Uub25sb2FkID0gKCkgPT4ge1xuXHRcdFx0XHRpZiAocmVzcG9uc2UucmVzcG9uc2VUZXh0LmluY2x1ZGVzKFwiU3VjY2Vzc1wiKSl7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCJTdWNjZXNzZnVsbHkgYXV0aGVudGljYXRlZCB1c2VyXCIpXG5cdFx0XHRcdFx0c2V0QXV0aCh0cnVlKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRcblx0ZnVuY3Rpb24gc2V0QXV0aCh2YWw6IGJvb2xlYW4pe1xuXHRcdHNldEF1dGhlbnRpY2F0ZWQodmFsKTtcblx0fVxuXHRhdXRoZW50aWNhdGVfdXNlcigpO1xuXHRyZXR1cm4gKFxuXHRcdDxSb3V0ZXI+XG5cdFx0XHQ8R3JpZCBjb250YWluZXIgeHM9ezEyfSBjbGFzc05hbWU9e2NsYXNzZXMubWFpbkNvbnRhaW5lcn0+XG5cdFx0XHRcdDxIZWFkZXIgYXV0aD17YXV0aGVudGljYXRlZH0vPlxuXHRcdFx0XHQ8R3JpZCBpdGVtIGNvbnRhaW5lciB4cz17MTJ9IGp1c3RpZnk9XCJjZW50ZXJcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgPlxuXHRcdFx0XHRcdDxDb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc2VzLm1haW59PlxuXHRcdFx0XHRcdFx0PFN3aXRjaD5cblx0XHRcdFx0XHRcdFx0PFJvdXRlIGV4YWN0IHBhdGg9Jy8nIHJlbmRlcj17KHByb3BzKSA9PiAoPEluZGV4Lz4pfS8+XG5cdFx0XHRcdFx0XHRcdDxSb3V0ZSBwYXRoPScvRm9ydW0nIHJlbmRlcj17KHByb3BzKSA9PiAoPEZvcnVtIGF1dGhlbnRpY2F0ZWQ9e2F1dGhlbnRpY2F0ZWR9IG15X3VzZXJuYW1lPXt1c2VybmFtZX0gbXlfcGFzc3dvcmQ9e3Bhc3N3b3JkfSAvPil9Lz5cblx0XHRcdFx0XHRcdFx0PFJvdXRlIHBhdGg9Jy9Mb2dpbicgcmVuZGVyPXsocHJvcHMpID0+ICg8TG9naW4gYXV0aGVudGljYXRlPXthdXRoZW50aWNhdGVfdXNlcn0gLz4pfS8+XG5cdFx0XHRcdFx0XHRcdDxSb3V0ZSBwYXRoPScvUmVnaXN0ZXInIGNvbXBvbmVudD17UmVnaXN0ZXJ9IC8+XG5cdFx0XHRcdFx0XHRcdDxSb3V0ZSBwYXRoPScvQWJvdXQgdXMnIGNvbXBvbmVudD17QWJvdXR9IC8+XG5cdFx0XHRcdFx0XHRcdDxSb3V0ZSBwYXRoPScvQWNjb3VudCcgcmVuZGVyPXsocHJvcHMpID0+ICg8QWNjb3VudCByZW1vdmVBdXRoPXtzZXRBdXRofSB1c2VybmFtZT17dXNlcm5hbWV9IHBhc3N3b3JkPXtwYXNzd29yZH0vPil9Lz5cblx0XHRcdFx0XHRcdFx0PFJvdXRlIHBhdGg9Jy9Gb3J1bS9Qb3N0JyByZW5kZXI9eyhwcm9wcykgPT4gKDxQb3N0IGF1dGhlbnRpY2F0ZWQ9e2F1dGhlbnRpY2F0ZWR9IHVzZXJuYW1lPXt1c2VybmFtZX0gcGFzc3dvcmQ9e3Bhc3N3b3JkfS8+KX0vPlxuXHRcdFx0XHRcdFx0XHQ8Um91dGUgcGF0aD0nL0NvbnRhY3QnIGNvbXBvbmVudD17Q29udGFjdH0gLz5cblx0XHRcdFx0XHRcdFx0PFJvdXRlIHBhdGg9Jy9Qcm9qZWN0cycgY29tcG9uZW50PXtQcm9qZWN0c30gLz5cblx0XHRcdFx0XHRcdFx0PFJvdXRlIHBhdGg9Jy9TdXBwb3J0JyBjb21wb25lbnQ9e1N1cHBvcnR9IC8+XG5cdFx0XHRcdFx0XHQ8L1N3aXRjaD5cblx0XHRcdFx0XHQ8L0NvbnRhaW5lcj5cblx0XHRcdFx0PC9HcmlkPlxuXHRcdFx0XHQ8Rm9vdGVyLz5cblx0XHRcdDwvR3JpZD5cblx0XHQ8L1JvdXRlcj5cblx0KTtcbn1cblxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEF2YXRhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BdmF0YXInO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZSc7XHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcclxuaW1wb3J0IEZvcm1Db250cm9sTGFiZWwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2xMYWJlbCc7XHJcbmltcG9ydCBDaGVja2JveCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DaGVja2JveCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmsnO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuaW1wb3J0IEJveCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Cb3gnO1xyXG5pbXBvcnQgTG9ja091dGxpbmVkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTG9ja091dGxpbmVkJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lcic7XHJcbmltcG9ydCB7cG9zdH0gZnJvbSAnLi4vc3RhdGljL2F4aW9zJztcclxuaW1wb3J0IFNuYWNrIGZyb20gJy4uL3N0YXRpYy9TbmFjayc7XHJcblxyXG5mdW5jdGlvbiBDb3B5cmlnaHQoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgIHsnQ29weXJpZ2h0IO+/vSAnfVxyXG4gICAgICA8TGluayBjb2xvcj1cImluaGVyaXRcIiBocmVmPVwiaHR0cHM6Ly9tYXRlcmlhbC11aS5jb20vXCI+XHJcbiAgICAgICAgWW91ciBXZWJzaXRlXHJcbiAgICAgIDwvTGluaz57JyAnfVxyXG4gICAgICB7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfVxyXG4gICAgICB7Jy4nfVxyXG4gICAgPC9UeXBvZ3JhcGh5PlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICAnQGdsb2JhbCc6IHtcclxuICAgIGJvZHk6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBwYXBlcjoge1xyXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDgpLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICB9LFxyXG4gIGF2YXRhcjoge1xyXG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluLFxyXG4gIH0sXHJcbiAgZm9ybToge1xyXG4gICAgd2lkdGg6ICcxMDAlJywgLy8gRml4IElFIDExIGlzc3VlLlxyXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gIH0sXHJcbiAgc3VibWl0OiB7XHJcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMywgMCwgMiksXHJcbiAgfSxcclxufSkpO1xyXG5cclxuaW50ZXJmYWNlIElQcm9wcyB7XHJcblx0YXV0aGVudGljYXRlOiAoKSA9PiB2b2lkO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgV2FybmluZ1Byb3BzIHtcclxuXHR2YWw6IHN0cmluZztcclxufVxyXG5jbGFzcyBXYXJuaW5nIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFdhcm5pbmdQcm9wcz4ge1xyXG5cdGRldGVybWluZUNsYXNzID0gKCkgPT4ge1xyXG5cdFx0aWYgKHRoaXMucHJvcHMudmFsLmluY2x1ZGVzKFwiU3VjY2Vzc1wiKSl7XHJcblx0XHRcdHJldHVybiBcImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIjtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiBcImFsZXJ0IGFsZXJ0LWRhbmdlclwiO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRyZW5kZXIoKXtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxkaXYgc3R5bGU9e3tkaXNwbGF5OiB0aGlzLnByb3BzLnZhbCA9PT0gXCJcIiA/IFwibm9uZVwiIDogXCJibG9ja1wiIH19IGNsYXNzTmFtZT17dGhpcy5kZXRlcm1pbmVDbGFzcygpfSByb2xlPVwiYWxlcnRcIj57dGhpcy5wcm9wcy52YWx9PC9kaXY+XHJcblx0XHQpO1xyXG5cdH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbihwcm9wczogSVByb3BzKSB7XHJcblx0bGV0IHVzZXJuYW1lSW5wdXQ6YW55ID0gUmVhY3QuY3JlYXRlUmVmKCk7XHJcblx0bGV0IHBhc3N3b3JkSW5wdXQ6YW55ID0gUmVhY3QuY3JlYXRlUmVmKCk7XHJcbiAgXHRjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblx0Y29uc3QgW3Jlc3BvbnNlLCBzZXRSZXNwb25zZSBdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcblx0ZnVuY3Rpb24gc3VibWl0TG9naW4oZTogYW55KXtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGNvbnNvbGUubG9nKFwiVXNlciBsb2dnaW5nIGluLi4uLlwiKTtcclxuXHRcdGxldCB1c2VybmFtZVZhbCA9IHVzZXJuYW1lSW5wdXQuY3VycmVudC52YWx1ZTtcclxuXHRcdGxldCBwYXNzd29yZFZhbCA9IHBhc3N3b3JkSW5wdXQuY3VycmVudC52YWx1ZTtcclxuXHJcblx0XHRjb25zdCByZXNwb25zZSA9IHBvc3QoXCIvdXNlcnMvbG9naW5cIiwgSlNPTi5zdHJpbmdpZnkoe3VzZXJuYW1lOnVzZXJuYW1lVmFsLCBlbWFpbDp1c2VybmFtZVZhbCwgcGFzc3dvcmQ6cGFzc3dvcmRWYWx9KSwgdHJ1ZSk7XHJcblx0XHRyZXNwb25zZS5vbmxvYWQgPSAoKSA9PiB7XHJcblx0XHRcdHNldFJlc3BvbnNlKHJlc3BvbnNlLnJlc3BvbnNlVGV4dClcclxuXHRcdFx0aWYgKHJlc3BvbnNlLnJlc3BvbnNlVGV4dC5pbmNsdWRlcyhcIlN1Y2Nlc3NcIikpe1xyXG5cdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9rZW5cIiwgdXNlcm5hbWVWYWwgKyBcIj9cIiArIHBhc3N3b3JkVmFsKTsgLy9lbmNyeXB0IHRoaXMgbGF0ZXJcclxuXHRcdFx0XHRwcm9wcy5hdXRoZW50aWNhdGUoKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRcclxuXHRcdFxyXG5cdH1cclxuXHJcblx0cmV0dXJuIChcclxuXHRcclxuICAgICAgICA8Q29udGFpbmVyIGNvbXBvbmVudD1cIm1haW5cIiBtYXhXaWR0aD1cInhzXCI+XHJcbiAgICAgICAgICA8U25hY2sgb3BlbkhhbmRsZXI9e29wZW5IYW5kbGVyfSBvcGVuPXtvcGVufSB2YXJpZW50PXt2YXJpZW50fSBtZXNzYWdlPXtyZXNwb25zZX0gLz5cclxuXHRcdDxXYXJuaW5nIHZhbD17cmVzcG9uc2V9Lz5cclxuICAgICAgPENzc0Jhc2VsaW5lIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfT5cclxuICAgICAgICA8QXZhdGFyIGNsYXNzTmFtZT17Y2xhc3Nlcy5hdmF0YXJ9PlxyXG4gICAgICAgICAgPExvY2tPdXRsaW5lZEljb24gLz5cclxuICAgICAgICA8L0F2YXRhcj5cclxuICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJoMVwiIHZhcmlhbnQ9XCJoNVwiPlxyXG4gICAgICAgICAgU2lnbiBpblxyXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybX0gbm9WYWxpZGF0ZT5cclxuICAgICAgICAgIDxUZXh0RmllbGRcclxuXHRcdFx0aW5wdXRSZWY9e3VzZXJuYW1lSW5wdXR9XHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICBpZD1cImVtYWlsXCJcclxuICAgICAgICAgICAgbGFiZWw9XCJFbWFpbCBBZGRyZXNzXCJcclxuICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICBhdXRvRm9jdXNcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8VGV4dEZpZWxkXHJcblx0XHRcdGlucHV0UmVmPXtwYXNzd29yZElucHV0fVxyXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgbGFiZWw9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJjdXJyZW50LXBhc3N3b3JkXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxyXG4gICAgICAgICAgICBjb250cm9sPXs8Q2hlY2tib3ggdmFsdWU9XCJyZW1lbWJlclwiIGNvbG9yPVwicHJpbWFyeVwiIC8+fVxyXG4gICAgICAgICAgICBsYWJlbD1cIlJlbWVtYmVyIG1lXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcblx0XHRcdG9uQ2xpY2s9eyhlOmFueSkgPT4gc3VibWl0TG9naW4oZSl9XHJcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnN1Ym1pdH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgU2lnbiBJblxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIiB2YXJpYW50PVwiYm9keTJcIj5cclxuICAgICAgICAgICAgICAgIEZvcmdvdCBwYXNzd29yZD9cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1JlZ2lzdGVyXCIgdmFyaWFudD1cImJvZHkyXCI+XHJcbiAgICAgICAgICAgICAgICB7XCJEb24ndCBoYXZlIGFuIGFjY291bnQ/IFNpZ24gVXBcIn1cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8Qm94IG10PXs4fT5cclxuICAgICAgICA8Q29weXJpZ2h0IC8+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=