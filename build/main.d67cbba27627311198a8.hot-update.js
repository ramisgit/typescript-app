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
    function openHandler(val) {
        setOpen(val);
    }
    return (react_1.default.createElement(Container_1.default, { component: "main", maxWidth: "xs" },
        react_1.default.createElement(Snack_1.default, { openHandler: openHandler, open: open, varient: varient, message: response }),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91bWQvLi9zcmMvQXBwLnRzeCIsIndlYnBhY2s6Ly91bWQvLi9zcmMvY29tcG9uZW50cy9wYWdlcy9Mb2dpbi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUdBQTBCO0FBRTFCLGtJQUEwRTtBQUMxRSx1SkFBb0Q7QUFFcEQsOEhBQWdEO0FBQ2hELDhIQUFnRDtBQUNoRCx5SEFBNkM7QUFDN0Msd0lBQTBDO0FBQzFDLGtJQUFtRDtBQUNuRCx5SEFBNkM7QUFDN0MsK0hBQWlEO0FBQ2pELCtIQUFpRDtBQUNqRCxrSUFBbUQ7QUFDbkQsK0hBQWlEO0FBQ2pELHlIQUE2QztBQUM3Qyx5R0FBK0M7QUFDL0Msc0hBQTJDO0FBQzNDLHlIQUE2QztBQUU3Qyw2SEFBMkU7QUFHM0UsTUFBTSxTQUFTLEdBQUcsbUJBQVUsQ0FBQyxDQUFDLEtBQVksRUFBRSxFQUFFLENBQzdDLHFCQUFZLENBQUM7SUFDWixTQUFTLEVBQUU7UUFDVixLQUFLLEVBQUUsT0FBTztRQUNkLFdBQVcsRUFBRSxNQUFNO0tBQ25CO0lBQ0QsSUFBSSxFQUFFO1FBQ0wsUUFBUSxFQUFFLFFBQVE7UUFDbEIsZUFBZSxFQUFFLE9BQU87UUFDeEIsU0FBUyxFQUFFLE9BQU87UUFDbEIsT0FBTyxFQUFFLG9CQUFvQjtLQUM3QjtJQUNELGFBQWEsRUFBRTtRQUNkLGVBQWUsRUFBRSx3REFBd0Q7UUFDekUsU0FBUyxFQUFFLE9BQU87UUFDbEIsT0FBTyxFQUFFLEtBQUs7UUFDZCxNQUFNLEVBQUUsS0FBSztLQUNiO0NBQ0QsQ0FBQyxDQUVGLENBQUM7QUFFRixTQUF3QixHQUFHO0lBQzFCLE1BQU0sT0FBTyxHQUFHLFNBQVMsRUFBRSxDQUFDO0lBRTVCLE1BQU0sQ0FBQyxhQUFhLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxlQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hFLE1BQU0sQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFD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bGUiOiJtYWluLmQ2N2NiYmEyNzYyNzMxMTE5OGE4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIGFzIFJvdXRlciwgUm91dGUsIFN3aXRjaCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXInO1xuXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vY29tcG9uZW50cy9sYXlvdXQvSGVhZGVyJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9jb21wb25lbnRzL2xheW91dC9Gb290ZXInO1xuaW1wb3J0IEFib3V0IGZyb20gJy4vY29tcG9uZW50cy9wYWdlcy9BYm91dCc7XG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcbmltcG9ydCBSZWdpc3RlciBmcm9tICcuL2NvbXBvbmVudHMvcGFnZXMvUmVnaXN0ZXInO1xuaW1wb3J0IEluZGV4IGZyb20gJy4vY29tcG9uZW50cy9wYWdlcy9JbmRleCc7XG5pbXBvcnQgQ29udGFjdCBmcm9tICcuL2NvbXBvbmVudHMvcGFnZXMvQ29udGFjdCc7XG5pbXBvcnQgQWNjb3VudCBmcm9tICcuL2NvbXBvbmVudHMvcGFnZXMvQWNjb3VudCc7XG5pbXBvcnQgUHJvamVjdHMgZnJvbSAnLi9jb21wb25lbnRzL3BhZ2VzL1Byb2plY3RzJztcbmltcG9ydCBTdXBwb3J0IGZyb20gJy4vY29tcG9uZW50cy9wYWdlcy9TdXBwb3J0JztcbmltcG9ydCBGb3J1bSBmcm9tICcuL2NvbXBvbmVudHMvcGFnZXMvRm9ydW0nO1xuaW1wb3J0IHtwb3N0fSBmcm9tICcuL2NvbXBvbmVudHMvc3RhdGljL2F4aW9zJztcbmltcG9ydCBQb3N0IGZyb20gJy4vY29tcG9uZW50cy9wYWdlcy9Qb3N0JztcbmltcG9ydCBMb2dpbiBmcm9tICcuL2NvbXBvbmVudHMvcGFnZXMvTG9naW4nO1xuXG5pbXBvcnQgeyBtYWtlU3R5bGVzLCBUaGVtZSwgY3JlYXRlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcblxuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+XG5cdGNyZWF0ZVN0eWxlcyh7XG5cdFx0cGFyYWdyYXBoOiB7XG5cdFx0XHRjb2xvcjogXCJ3aGl0ZVwiLFxuXHRcdFx0cGFkZGluZ0xlZnQ6IFwiMjBweFwiXG5cdFx0fSxcblx0XHRtYWluOiB7XG5cdFx0XHRtYXhXaWR0aDogXCIxMTQwcHhcIixcblx0XHRcdGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiLFxuXHRcdFx0bWluSGVpZ2h0OiBcIjEwMHZoXCIsXG5cdFx0XHRwYWRkaW5nOiBcIjkwcHggMzBweCAwcHggMzBweFwiXG5cdFx0fSxcblx0XHRtYWluQ29udGFpbmVyOiB7XG5cdFx0XHRiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKGh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC91cGxvYWQvZmlsZXMvYmFja2dyb3VuZC5qcGcpXCIsXG5cdFx0XHRtaW5IZWlnaHQ6IFwiMTAwdmhcIixcblx0XHRcdHBhZGRpbmc6IFwiMHB4XCIsXG5cdFx0XHRtYXJnaW46IFwiMHB4XCJcblx0XHR9XG5cdH0pLFxuXHRcbik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCAoKSB7XG5cdGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblx0XG5cdGNvbnN0IFthdXRoZW50aWNhdGVkLCBzZXRBdXRoZW50aWNhdGVkXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcblx0Y29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcblx0Y29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcblx0XG5cdGZ1bmN0aW9uIGF1dGhlbnRpY2F0ZV91c2VyKCl7XG5cdFx0Y29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcblx0XHRjb25zb2xlLmxvZyhcIkF1dGhlbnRpY2F0aW5nIHVzZXIgYXQgdG9wIGxheWVyXCIpXG5cdFx0aWYgKHRva2VuKSB7XG5cdFx0XHRjb25zdCB1Om51bGwgfCBzdHJpbmcgPSB0b2tlbi5zcGxpdChcIj9cIilbMF07IHNldFVzZXJuYW1lKHUpO1xuXHRcdFx0Y29uc3QgcDpudWxsIHwgc3RyaW5nID0gdG9rZW4uc3BsaXQoXCI/XCIpWzFdOyBzZXRQYXNzd29yZChwKTtcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gcG9zdChcIi91c2Vycy9sb2dpblwiLCBKU09OLnN0cmluZ2lmeSh7dXNlcm5hbWU6dXNlcm5hbWUsIGVtYWlsOnVzZXJuYW1lLCBwYXNzd29yZDpwYXNzd29yZH0pLCB0cnVlKTtcblx0XHRcdHJlc3BvbnNlLm9ubG9hZCA9ICgpID0+IHtcblx0XHRcdFx0aWYgKHJlc3BvbnNlLnJlc3BvbnNlVGV4dC5pbmNsdWRlcyhcIlN1Y2Nlc3NcIikpe1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiU3VjY2Vzc2Z1bGx5IGF1dGhlbnRpY2F0ZWQgdXNlclwiKVxuXHRcdFx0XHRcdHNldEF1dGgodHJ1ZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblx0XG5cdGZ1bmN0aW9uIHNldEF1dGgodmFsOiBib29sZWFuKXtcblx0XHRzZXRBdXRoZW50aWNhdGVkKHZhbCk7XG5cdH1cblx0YXV0aGVudGljYXRlX3VzZXIoKTtcblx0cmV0dXJuIChcblx0XHQ8Um91dGVyPlxuXHRcdFx0PEdyaWQgY29udGFpbmVyIHhzPXsxMn0gY2xhc3NOYW1lPXtjbGFzc2VzLm1haW5Db250YWluZXJ9PlxuXHRcdFx0XHQ8SGVhZGVyIGF1dGg9e2F1dGhlbnRpY2F0ZWR9Lz5cblx0XHRcdFx0PEdyaWQgaXRlbSBjb250YWluZXIgeHM9ezEyfSBqdXN0aWZ5PVwiY2VudGVyXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiID5cblx0XHRcdFx0XHQ8Q29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5tYWlufT5cblx0XHRcdFx0XHRcdDxTd2l0Y2g+XG5cdFx0XHRcdFx0XHRcdDxSb3V0ZSBleGFjdCBwYXRoPScvJyByZW5kZXI9eyhwcm9wcykgPT4gKDxJbmRleC8+KX0vPlxuXHRcdFx0XHRcdFx0XHQ8Um91dGUgcGF0aD0nL0ZvcnVtJyByZW5kZXI9eyhwcm9wcykgPT4gKDxGb3J1bSBhdXRoZW50aWNhdGVkPXthdXRoZW50aWNhdGVkfSBteV91c2VybmFtZT17dXNlcm5hbWV9IG15X3Bhc3N3b3JkPXtwYXNzd29yZH0gLz4pfS8+XG5cdFx0XHRcdFx0XHRcdDxSb3V0ZSBwYXRoPScvTG9naW4nIHJlbmRlcj17KHByb3BzKSA9PiAoPExvZ2luIGF1dGhlbnRpY2F0ZT17YXV0aGVudGljYXRlX3VzZXJ9IC8+KX0vPlxuXHRcdFx0XHRcdFx0XHQ8Um91dGUgcGF0aD0nL1JlZ2lzdGVyJyBjb21wb25lbnQ9e1JlZ2lzdGVyfSAvPlxuXHRcdFx0XHRcdFx0XHQ8Um91dGUgcGF0aD0nL0Fib3V0IHVzJyBjb21wb25lbnQ9e0Fib3V0fSAvPlxuXHRcdFx0XHRcdFx0XHQ8Um91dGUgcGF0aD0nL0FjY291bnQnIHJlbmRlcj17KHByb3BzKSA9PiAoPEFjY291bnQgcmVtb3ZlQXV0aD17c2V0QXV0aH0gdXNlcm5hbWU9e3VzZXJuYW1lfSBwYXNzd29yZD17cGFzc3dvcmR9Lz4pfS8+XG5cdFx0XHRcdFx0XHRcdDxSb3V0ZSBwYXRoPScvRm9ydW0vUG9zdCcgcmVuZGVyPXsocHJvcHMpID0+ICg8UG9zdCBhdXRoZW50aWNhdGVkPXthdXRoZW50aWNhdGVkfSB1c2VybmFtZT17dXNlcm5hbWV9IHBhc3N3b3JkPXtwYXNzd29yZH0vPil9Lz5cblx0XHRcdFx0XHRcdFx0PFJvdXRlIHBhdGg9Jy9Db250YWN0JyBjb21wb25lbnQ9e0NvbnRhY3R9IC8+XG5cdFx0XHRcdFx0XHRcdDxSb3V0ZSBwYXRoPScvUHJvamVjdHMnIGNvbXBvbmVudD17UHJvamVjdHN9IC8+XG5cdFx0XHRcdFx0XHRcdDxSb3V0ZSBwYXRoPScvU3VwcG9ydCcgY29tcG9uZW50PXtTdXBwb3J0fSAvPlxuXHRcdFx0XHRcdFx0PC9Td2l0Y2g+XG5cdFx0XHRcdFx0PC9Db250YWluZXI+XG5cdFx0XHRcdDwvR3JpZD5cblx0XHRcdFx0PEZvb3Rlci8+XG5cdFx0XHQ8L0dyaWQ+XG5cdFx0PC9Sb3V0ZXI+XG5cdCk7XG59XG5cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBBdmF0YXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXZhdGFyJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmUnO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XHJcbmltcG9ydCBGb3JtQ29udHJvbExhYmVsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sTGFiZWwnO1xyXG5pbXBvcnQgQ2hlY2tib3ggZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2hlY2tib3gnO1xyXG5pbXBvcnQgTGluayBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaW5rJztcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XHJcbmltcG9ydCBCb3ggZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQm94JztcclxuaW1wb3J0IExvY2tPdXRsaW5lZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0xvY2tPdXRsaW5lZCc7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXInO1xyXG5pbXBvcnQge3Bvc3R9IGZyb20gJy4uL3N0YXRpYy9heGlvcyc7XHJcbmltcG9ydCBTbmFjayBmcm9tICcuLi9zdGF0aWMvU25hY2snO1xyXG5cclxuZnVuY3Rpb24gQ29weXJpZ2h0KCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cInRleHRTZWNvbmRhcnlcIiBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICB7J0NvcHlyaWdodCDvv70gJ31cclxuICAgICAgPExpbmsgY29sb3I9XCJpbmhlcml0XCIgaHJlZj1cImh0dHBzOi8vbWF0ZXJpYWwtdWkuY29tL1wiPlxyXG4gICAgICAgIFlvdXIgV2Vic2l0ZVxyXG4gICAgICA8L0xpbms+eycgJ31cclxuICAgICAge25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX1cclxuICAgICAgeycuJ31cclxuICAgIDwvVHlwb2dyYXBoeT5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgJ0BnbG9iYWwnOiB7XHJcbiAgICBib2R5OiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgcGFwZXI6IHtcclxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZyg4KSxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgfSxcclxuICBhdmF0YXI6IHtcclxuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcclxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubWFpbixcclxuICB9LFxyXG4gIGZvcm06IHtcclxuICAgIHdpZHRoOiAnMTAwJScsIC8vIEZpeCBJRSAxMSBpc3N1ZS5cclxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygxKSxcclxuICB9LFxyXG4gIHN1Ym1pdDoge1xyXG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDMsIDAsIDIpLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmludGVyZmFjZSBJUHJvcHMge1xyXG5cdGF1dGhlbnRpY2F0ZTogKCkgPT4gdm9pZDtcclxufVxyXG5cclxuaW50ZXJmYWNlIFdhcm5pbmdQcm9wcyB7XHJcblx0dmFsOiBzdHJpbmc7XHJcbn1cclxuY2xhc3MgV2FybmluZyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxXYXJuaW5nUHJvcHM+IHtcclxuXHRkZXRlcm1pbmVDbGFzcyA9ICgpID0+IHtcclxuXHRcdGlmICh0aGlzLnByb3BzLnZhbC5pbmNsdWRlcyhcIlN1Y2Nlc3NcIikpe1xyXG5cdFx0XHRyZXR1cm4gXCJhbGVydCBhbGVydC1zdWNjZXNzXCI7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gXCJhbGVydCBhbGVydC1kYW5nZXJcIjtcclxuXHRcdH1cclxuXHR9XHJcblx0cmVuZGVyKCl7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8ZGl2IHN0eWxlPXt7ZGlzcGxheTogdGhpcy5wcm9wcy52YWwgPT09IFwiXCIgPyBcIm5vbmVcIiA6IFwiYmxvY2tcIiB9fSBjbGFzc05hbWU9e3RoaXMuZGV0ZXJtaW5lQ2xhc3MoKX0gcm9sZT1cImFsZXJ0XCI+e3RoaXMucHJvcHMudmFsfTwvZGl2PlxyXG5cdFx0KTtcclxuXHR9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW4ocHJvcHM6IElQcm9wcykge1xyXG5cdGxldCB1c2VybmFtZUlucHV0OmFueSA9IFJlYWN0LmNyZWF0ZVJlZigpO1xyXG5cdGxldCBwYXNzd29yZElucHV0OmFueSA9IFJlYWN0LmNyZWF0ZVJlZigpO1xyXG4gIFx0Y29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cdGNvbnN0IFtyZXNwb25zZSwgc2V0UmVzcG9uc2UgXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG5cdGZ1bmN0aW9uIHN1Ym1pdExvZ2luKGU6IGFueSl7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRjb25zb2xlLmxvZyhcIlVzZXIgbG9nZ2luZyBpbi4uLi5cIik7XHJcblx0XHRsZXQgdXNlcm5hbWVWYWwgPSB1c2VybmFtZUlucHV0LmN1cnJlbnQudmFsdWU7XHJcblx0XHRsZXQgcGFzc3dvcmRWYWwgPSBwYXNzd29yZElucHV0LmN1cnJlbnQudmFsdWU7XHJcblxyXG5cdFx0Y29uc3QgcmVzcG9uc2UgPSBwb3N0KFwiL3VzZXJzL2xvZ2luXCIsIEpTT04uc3RyaW5naWZ5KHt1c2VybmFtZTp1c2VybmFtZVZhbCwgZW1haWw6dXNlcm5hbWVWYWwsIHBhc3N3b3JkOnBhc3N3b3JkVmFsfSksIHRydWUpO1xyXG5cdFx0cmVzcG9uc2Uub25sb2FkID0gKCkgPT4ge1xyXG5cdFx0XHRzZXRSZXNwb25zZShyZXNwb25zZS5yZXNwb25zZVRleHQpXHJcblx0XHRcdGlmIChyZXNwb25zZS5yZXNwb25zZVRleHQuaW5jbHVkZXMoXCJTdWNjZXNzXCIpKXtcclxuXHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRva2VuXCIsIHVzZXJuYW1lVmFsICsgXCI/XCIgKyBwYXNzd29yZFZhbCk7IC8vZW5jcnlwdCB0aGlzIGxhdGVyXHJcblx0XHRcdFx0cHJvcHMuYXV0aGVudGljYXRlKCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0XHJcblx0XHRcclxuXHR9XHJcbiAgICBmdW5jdGlvbiBvcGVuSGFuZGxlcih2YWw6IGJvb2xlYW4pIHtcclxuICAgICAgICBzZXRPcGVuKHZhbCk7XHJcbiAgICB9XHJcblx0cmV0dXJuIChcclxuXHRcclxuICAgICAgICA8Q29udGFpbmVyIGNvbXBvbmVudD1cIm1haW5cIiBtYXhXaWR0aD1cInhzXCI+XHJcbiAgICAgICAgICA8U25hY2sgb3BlbkhhbmRsZXI9e29wZW5IYW5kbGVyfSBvcGVuPXtvcGVufSB2YXJpZW50PXt2YXJpZW50fSBtZXNzYWdlPXtyZXNwb25zZX0gLz5cclxuICAgICAgPENzc0Jhc2VsaW5lIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfT5cclxuICAgICAgICA8QXZhdGFyIGNsYXNzTmFtZT17Y2xhc3Nlcy5hdmF0YXJ9PlxyXG4gICAgICAgICAgPExvY2tPdXRsaW5lZEljb24gLz5cclxuICAgICAgICA8L0F2YXRhcj5cclxuICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJoMVwiIHZhcmlhbnQ9XCJoNVwiPlxyXG4gICAgICAgICAgU2lnbiBpblxyXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybX0gbm9WYWxpZGF0ZT5cclxuICAgICAgICAgIDxUZXh0RmllbGRcclxuXHRcdFx0aW5wdXRSZWY9e3VzZXJuYW1lSW5wdXR9XHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICBpZD1cImVtYWlsXCJcclxuICAgICAgICAgICAgbGFiZWw9XCJFbWFpbCBBZGRyZXNzXCJcclxuICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICBhdXRvRm9jdXNcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8VGV4dEZpZWxkXHJcblx0XHRcdGlucHV0UmVmPXtwYXNzd29yZElucHV0fVxyXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgbGFiZWw9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJjdXJyZW50LXBhc3N3b3JkXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxyXG4gICAgICAgICAgICBjb250cm9sPXs8Q2hlY2tib3ggdmFsdWU9XCJyZW1lbWJlclwiIGNvbG9yPVwicHJpbWFyeVwiIC8+fVxyXG4gICAgICAgICAgICBsYWJlbD1cIlJlbWVtYmVyIG1lXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcblx0XHRcdG9uQ2xpY2s9eyhlOmFueSkgPT4gc3VibWl0TG9naW4oZSl9XHJcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnN1Ym1pdH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgU2lnbiBJblxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIiB2YXJpYW50PVwiYm9keTJcIj5cclxuICAgICAgICAgICAgICAgIEZvcmdvdCBwYXNzd29yZD9cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1JlZ2lzdGVyXCIgdmFyaWFudD1cImJvZHkyXCI+XHJcbiAgICAgICAgICAgICAgICB7XCJEb24ndCBoYXZlIGFuIGFjY291bnQ/IFNpZ24gVXBcIn1cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8Qm94IG10PXs4fT5cclxuICAgICAgICA8Q29weXJpZ2h0IC8+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=