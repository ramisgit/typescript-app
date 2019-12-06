webpackHotUpdateumd("main",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91bWQvLi9zcmMvY29tcG9uZW50cy9wYWdlcy9Mb2dpbi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUdBQTBCO0FBQzFCLDhJQUE4QztBQUM5Qyw4SUFBOEM7QUFDOUMsNkpBQXdEO0FBQ3hELHVKQUFvRDtBQUNwRCw0S0FBa0U7QUFDbEUsb0pBQWtEO0FBQ2xELHdJQUEwQztBQUMxQyx3SUFBMEM7QUFDMUMscUlBQXdDO0FBQ3hDLHdKQUErRDtBQUMvRCwwSkFBc0Q7QUFDdEQsNkhBQXNEO0FBQ3RELHVKQUFvRDtBQUNwRCwrRkFBcUM7QUFHckMsU0FBUyxTQUFTO0lBQ2hCLE9BQU8sQ0FDTCw4QkFBQyxvQkFBVSxJQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsS0FBSyxFQUFDLGVBQWUsRUFBQyxLQUFLLEVBQUMsUUFBUTtRQUM3RCxjQUFjO1FBQ2YsOEJBQUMsY0FBSSxJQUFDLEtBQUssRUFBQyxTQUFTLEVBQUMsSUFBSSxFQUFDLDBCQUEwQixtQkFFOUM7UUFBQyxHQUFHO1FBQ1YsSUFBSSxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUU7UUFDeEIsR0FBRyxDQUNPLENBQ2QsQ0FBQztBQUNKLENBQUM7QUFFRCxNQUFNLFNBQVMsR0FBRyxtQkFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNyQyxTQUFTLEVBQUU7UUFDVCxJQUFJLEVBQUU7WUFDSixlQUFlLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSztTQUM1QztLQUNGO0lBQ0QsS0FBSyxFQUFFO1FBQ0wsU0FBUyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQzNCLE9BQU8sRUFBRSxNQUFNO1FBQ2YsYUFBYSxFQUFFLFFBQVE7UUFDdkIsVUFBVSxFQUFFLFFBQVE7S0FDckI7SUFDRCxNQUFNLEVBQUU7UUFDTixNQUFNLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENB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QUFJLElBQUMsSUFBSSxFQUFDLEdBQUcsRUFBQyxPQUFPLEVBQUMsT0FBTyx1QkFFdkIsQ0FDRjtvQkFDUCw4QkFBQyxjQUFJLElBQUMsSUFBSTt3QkFDUiw4QkFBQyxjQUFJLElBQUMsSUFBSSxFQUFDLFdBQVcsRUFBQyxPQUFPLEVBQUMsT0FBTyxJQUNuQyxnQ0FBZ0MsQ0FDNUIsQ0FDRixDQUNGLENBQ0YsQ0FDSDtRQUNOLDhCQUFDLGFBQUcsSUFBQyxFQUFFLEVBQUUsQ0FBQztZQUNSLDhCQUFDLFNBQVMsT0FBRyxDQUNULENBQ0ksQ0FDYixDQUFDO0FBQ0osQ0FBQztBQTdGRCx3QkE2RkMiLCJmaWxlIjoibWFpbi5jNWI1MzM3NjYxNThlMjVhZmM5ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEF2YXRhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BdmF0YXInO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZSc7XHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcclxuaW1wb3J0IEZvcm1Db250cm9sTGFiZWwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2xMYWJlbCc7XHJcbmltcG9ydCBDaGVja2JveCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DaGVja2JveCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmsnO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuaW1wb3J0IEJveCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Cb3gnO1xyXG5pbXBvcnQgTG9ja091dGxpbmVkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTG9ja091dGxpbmVkJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lcic7XHJcbmltcG9ydCB7cG9zdH0gZnJvbSAnLi4vc3RhdGljL2F4aW9zJztcclxuaW1wb3J0IFNuYWNrIGZyb20gJy4uL3N0YXRpYy9TbmFjayc7XHJcblxyXG5mdW5jdGlvbiBDb3B5cmlnaHQoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgIHsnQ29weXJpZ2h0IO+/vSAnfVxyXG4gICAgICA8TGluayBjb2xvcj1cImluaGVyaXRcIiBocmVmPVwiaHR0cHM6Ly9tYXRlcmlhbC11aS5jb20vXCI+XHJcbiAgICAgICAgWW91ciBXZWJzaXRlXHJcbiAgICAgIDwvTGluaz57JyAnfVxyXG4gICAgICB7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfVxyXG4gICAgICB7Jy4nfVxyXG4gICAgPC9UeXBvZ3JhcGh5PlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICAnQGdsb2JhbCc6IHtcclxuICAgIGJvZHk6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBwYXBlcjoge1xyXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDgpLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICB9LFxyXG4gIGF2YXRhcjoge1xyXG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluLFxyXG4gIH0sXHJcbiAgZm9ybToge1xyXG4gICAgd2lkdGg6ICcxMDAlJywgLy8gRml4IElFIDExIGlzc3VlLlxyXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gIH0sXHJcbiAgc3VibWl0OiB7XHJcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMywgMCwgMiksXHJcbiAgfSxcclxufSkpO1xyXG5cclxuaW50ZXJmYWNlIElQcm9wcyB7XHJcblx0YXV0aGVudGljYXRlOiAoKSA9PiB2b2lkO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgV2FybmluZ1Byb3BzIHtcclxuXHR2YWw6IHN0cmluZztcclxufVxyXG5jbGFzcyBXYXJuaW5nIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFdhcm5pbmdQcm9wcz4ge1xyXG5cdGRldGVybWluZUNsYXNzID0gKCkgPT4ge1xyXG5cdFx0aWYgKHRoaXMucHJvcHMudmFsLmluY2x1ZGVzKFwiU3VjY2Vzc1wiKSl7XHJcblx0XHRcdHJldHVybiBcImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIjtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiBcImFsZXJ0IGFsZXJ0LWRhbmdlclwiO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRyZW5kZXIoKXtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxkaXYgc3R5bGU9e3tkaXNwbGF5OiB0aGlzLnByb3BzLnZhbCA9PT0gXCJcIiA/IFwibm9uZVwiIDogXCJibG9ja1wiIH19IGNsYXNzTmFtZT17dGhpcy5kZXRlcm1pbmVDbGFzcygpfSByb2xlPVwiYWxlcnRcIj57dGhpcy5wcm9wcy52YWx9PC9kaXY+XHJcblx0XHQpO1xyXG5cdH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbihwcm9wczogSVByb3BzKSB7XHJcblx0bGV0IHVzZXJuYW1lSW5wdXQ6YW55ID0gUmVhY3QuY3JlYXRlUmVmKCk7XHJcblx0bGV0IHBhc3N3b3JkSW5wdXQ6YW55ID0gUmVhY3QuY3JlYXRlUmVmKCk7XHJcbiAgXHRjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblx0Y29uc3QgW3Jlc3BvbnNlLCBzZXRSZXNwb25zZSBdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcblx0ZnVuY3Rpb24gc3VibWl0TG9naW4oZTogYW55KXtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGNvbnNvbGUubG9nKFwiVXNlciBsb2dnaW5nIGluLi4uLlwiKTtcclxuXHRcdGxldCB1c2VybmFtZVZhbCA9IHVzZXJuYW1lSW5wdXQuY3VycmVudC52YWx1ZTtcclxuXHRcdGxldCBwYXNzd29yZFZhbCA9IHBhc3N3b3JkSW5wdXQuY3VycmVudC52YWx1ZTtcclxuXHJcblx0XHRjb25zdCByZXNwb25zZSA9IHBvc3QoXCIvdXNlcnMvbG9naW5cIiwgSlNPTi5zdHJpbmdpZnkoe3VzZXJuYW1lOnVzZXJuYW1lVmFsLCBlbWFpbDp1c2VybmFtZVZhbCwgcGFzc3dvcmQ6cGFzc3dvcmRWYWx9KSwgdHJ1ZSk7XHJcblx0XHRyZXNwb25zZS5vbmxvYWQgPSAoKSA9PiB7XHJcblx0XHRcdHNldFJlc3BvbnNlKHJlc3BvbnNlLnJlc3BvbnNlVGV4dClcclxuXHRcdFx0aWYgKHJlc3BvbnNlLnJlc3BvbnNlVGV4dC5pbmNsdWRlcyhcIlN1Y2Nlc3NcIikpe1xyXG5cdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9rZW5cIiwgdXNlcm5hbWVWYWwgKyBcIj9cIiArIHBhc3N3b3JkVmFsKTsgLy9lbmNyeXB0IHRoaXMgbGF0ZXJcclxuXHRcdFx0XHRwcm9wcy5hdXRoZW50aWNhdGUoKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRcclxuXHRcdFxyXG5cdH1cclxuXHJcblx0cmV0dXJuIChcclxuXHRcclxuICAgIDxDb250YWluZXIgY29tcG9uZW50PVwibWFpblwiIG1heFdpZHRoPVwieHNcIj5cclxuXHRcdDxXYXJuaW5nIHZhbD17cmVzcG9uc2V9Lz5cclxuICAgICAgPENzc0Jhc2VsaW5lIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfT5cclxuICAgICAgICA8QXZhdGFyIGNsYXNzTmFtZT17Y2xhc3Nlcy5hdmF0YXJ9PlxyXG4gICAgICAgICAgPExvY2tPdXRsaW5lZEljb24gLz5cclxuICAgICAgICA8L0F2YXRhcj5cclxuICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJoMVwiIHZhcmlhbnQ9XCJoNVwiPlxyXG4gICAgICAgICAgU2lnbiBpblxyXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybX0gbm9WYWxpZGF0ZT5cclxuICAgICAgICAgIDxUZXh0RmllbGRcclxuXHRcdFx0aW5wdXRSZWY9e3VzZXJuYW1lSW5wdXR9XHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICBpZD1cImVtYWlsXCJcclxuICAgICAgICAgICAgbGFiZWw9XCJFbWFpbCBBZGRyZXNzXCJcclxuICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICBhdXRvRm9jdXNcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8VGV4dEZpZWxkXHJcblx0XHRcdGlucHV0UmVmPXtwYXNzd29yZElucHV0fVxyXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgbGFiZWw9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJjdXJyZW50LXBhc3N3b3JkXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxyXG4gICAgICAgICAgICBjb250cm9sPXs8Q2hlY2tib3ggdmFsdWU9XCJyZW1lbWJlclwiIGNvbG9yPVwicHJpbWFyeVwiIC8+fVxyXG4gICAgICAgICAgICBsYWJlbD1cIlJlbWVtYmVyIG1lXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcblx0XHRcdG9uQ2xpY2s9eyhlOmFueSkgPT4gc3VibWl0TG9naW4oZSl9XHJcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnN1Ym1pdH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgU2lnbiBJblxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIiB2YXJpYW50PVwiYm9keTJcIj5cclxuICAgICAgICAgICAgICAgIEZvcmdvdCBwYXNzd29yZD9cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1JlZ2lzdGVyXCIgdmFyaWFudD1cImJvZHkyXCI+XHJcbiAgICAgICAgICAgICAgICB7XCJEb24ndCBoYXZlIGFuIGFjY291bnQ/IFNpZ24gVXBcIn1cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8Qm94IG10PXs4fT5cclxuICAgICAgICA8Q29weXJpZ2h0IC8+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=