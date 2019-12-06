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

/***/ "./src/components/pages/Index.tsx":
/*!****************************************!*\
  !*** ./src/components/pages/Index.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const axios_1 = __webpack_require__(/*! ../static/axios */ "./src/components/static/axios.ts");
const Container_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js"));
const Button_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js"));
const Grid_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js"));
const styles_1 = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
const Modal_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Modal */ "./node_modules/@material-ui/core/esm/Modal/index.js"));
const Backdrop_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Backdrop */ "./node_modules/@material-ui/core/esm/Backdrop/index.js"));
const Fade_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Fade */ "./node_modules/@material-ui/core/esm/Fade/index.js"));
const LinearProgress_1 = __importDefault(__webpack_require__(/*! @material-ui/core/LinearProgress */ "./node_modules/@material-ui/core/esm/LinearProgress/index.js"));
const Paper_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js"));
const FormGroup_1 = __importDefault(__webpack_require__(/*! @material-ui/core/FormGroup */ "./node_modules/@material-ui/core/esm/FormGroup/index.js"));
const FormControl_1 = __importDefault(__webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js"));
const Radio_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Radio */ "./node_modules/@material-ui/core/esm/Radio/index.js"));
const RadioGroup_1 = __importDefault(__webpack_require__(/*! @material-ui/core/RadioGroup */ "./node_modules/@material-ui/core/esm/RadioGroup/index.js"));
const FormControlLabel_1 = __importDefault(__webpack_require__(/*! @material-ui/core/FormControlLabel */ "./node_modules/@material-ui/core/esm/FormControlLabel/index.js"));
const FormLabel_1 = __importDefault(__webpack_require__(/*! @material-ui/core/FormLabel */ "./node_modules/@material-ui/core/esm/FormLabel/index.js"));
const TextField_1 = __importDefault(__webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js"));
const Typography_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js"));
const Snack_1 = __importDefault(__webpack_require__(/*! ../static/Snack */ "./src/components/static/Snack.tsx"));
const useStyles = styles_1.makeStyles((theme) => styles_1.createStyles({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: "100%"
    },
    formControl: {
        margin: theme.spacing(3),
    },
    inputForm: {
        textAlign: "center",
        padding: "30px 0 0 0",
        width: "100vw",
        margin: "0px auto 50px auto",
    },
    form: {
        margin: "0px auto 10px auto",
        width: "100%"
    },
    inputFormInput: {
        width: "85%",
        display: "inline-block",
    },
    inputFormButton: {
        height: "100%",
        margin: "0px",
    }
}));
function ProgressBar(props) {
    const classes = useStyles();
    const [completed, setCompleted] = react_1.default.useState(0);
    react_1.default.useEffect(() => {
        function progress() {
            setCompleted(oldCompleted => {
                if (oldCompleted === 100) {
                    return 0;
                }
                return Math.min(props.progressValue, 100);
            });
        }
        const timer = setInterval(progress, 500);
        return () => {
            clearInterval(timer);
        };
    }, []);
    return (react_1.default.createElement("div", { className: classes.root },
        react_1.default.createElement(LinearProgress_1.default, { variant: "determinate", value: completed })));
}
function LoadingModal(props) {
    const classes = useStyles();
    const [open, setOpen] = react_1.default.useState(false);
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(Modal_1.default, { "aria-labelledby": "transition-modal-title", "aria-describedby": "transition-modal-description", className: classes.modal, open: props.show, onClose: props.onHide, closeAfterTransition: true, BackdropComponent: Backdrop_1.default, BackdropProps: {
                timeout: 500,
            } },
            react_1.default.createElement(Fade_1.default, { in: open },
                react_1.default.createElement("div", { className: classes.paper },
                    react_1.default.createElement("h2", { id: "transition-modal-title" }, "Downloading your file"),
                    react_1.default.createElement("span", { className: "sr-only" }, "Loading"),
                    react_1.default.createElement(ProgressBar, { progressValue: parseInt(props.progress) }),
                    react_1.default.createElement("h4", null,
                        "Downloading... ",
                        props.progress,
                        " %"),
                    react_1.default.createElement("p", null,
                        "Please wait while your file is being downloaded. Feel free to use this service as many times as you want.",
                        react_1.default.createElement("br", null),
                        "A button link will be provided shortly...."),
                    react_1.default.createElement(Button_1.default, { onClick: props.onHide }, "Close"))))));
}
function SubmitForm() {
    const containerRef = react_1.default.createRef();
    const getRef = react_1.default.createRef();
    const downloadBtnRef = react_1.default.createRef();
    const [ext, setExt] = react_1.default.useState("mp4");
    const [type, setType] = react_1.default.useState("Audio");
    const [showLoading, setShowLoading] = react_1.default.useState(false);
    const [loadingProgress, setLoadingProgress] = react_1.default.useState("0");
    const [open, setOpen] = react_1.default.useState(false);
    const [message, setMessage] = react_1.default.useState("");
    const [varient, setVarient] = react_1.default.useState("info");
    const classes = useStyles();
    const handleChangeType = (event) => {
        setType(event.target.value);
    };
    const handleChangeExt = (event) => {
        setExt(event.target.value);
    };
    function handleChangeAlertShow(event, show) {
        setOpen(show);
    }
    function openHandler(val) {
        setOpen(val);
    }
    function get(e) {
        e.preventDefault();
        setOpen(false);
        var URLinput = getRef.current.value.split("=")[1];
        console.log("as " + URLinput + ", " + type + ", " + ext);
        if (URLinput === undefined || null) {
            setVarient("warning");
            setMessage("Invalid url try another or look carefully to correct it.");
            setOpen(true);
        }
        else {
            const response = axios_1.post("/download", JSON.stringify({ url: URLinput, type: type, extension: ext }), true);
            response.onload = () => {
                var sse = new EventSource("http://localhost:8080/download/sse");
                sse.onopen = () => {
                    setShowLoading(true);
                    sse.onmessage = evt => {
                        setLoadingProgress(evt.data);
                        if (evt.data === "100") {
                            setShowLoading(false);
                            var url = "http://localhost:8080/download/video/" + URLinput;
                            downloadBtnRef.current.value = url;
                            containerRef.current.style.display = "block";
                            sse.close();
                        }
                    };
                };
                sse.onerror = () => {
                    console.log("EventSource failed.");
                    setShowLoading(false);
                    console.log("Closing connecton...");
                    sse.close();
                };
            };
        }
    }
    function downloadFromServer() {
        var url = downloadBtnRef.current.value;
        window.location.href = url;
    }
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Snack_1.default, { openHandler: openHandler, open: open, varient: varient, message: message }),
        react_1.default.createElement(Grid_1.default, { container: true, xs: 12 },
            react_1.default.createElement(LoadingModal, { progress: loadingProgress, show: showLoading, onHide: () => setShowLoading(false) }),
            react_1.default.createElement(Container_1.default, { className: classes.inputForm },
                react_1.default.createElement("form", { className: classes.form },
                    react_1.default.createElement(FormGroup_1.default, null,
                        react_1.default.createElement(Grid_1.default, { container: true, xs: 12 },
                            react_1.default.createElement(Grid_1.default, { item: true, xs: 10 },
                                react_1.default.createElement(TextField_1.default, { inputRef: getRef, id: "standard-basic", className: classes.textField, label: "https://www.youtube.com", variant: "outlined" })),
                            react_1.default.createElement(Grid_1.default, { container: true, xs: 2, justify: "flex-start", alignItems: "flex-start" },
                                react_1.default.createElement(Button_1.default, { onClick: get, className: classes.inputFormButton, variant: "contained", color: "primary" }, "GET")))),
                    react_1.default.createElement(FormGroup_1.default, null,
                        react_1.default.createElement(Grid_1.default, { container: true, xs: 12 },
                            react_1.default.createElement(Grid_1.default, { item: true, xs: 4 },
                                react_1.default.createElement(FormControl_1.default, { component: "fieldset", className: classes.formControl },
                                    react_1.default.createElement(FormLabel_1.default, { component: "legend" }, "Data Type"),
                                    react_1.default.createElement(RadioGroup_1.default, { "aria-label": "gender", name: "gender1", value: type, onChange: handleChangeType, row: true },
                                        react_1.default.createElement(FormControlLabel_1.default, { value: "Audio", control: react_1.default.createElement(Radio_1.default, { color: "primary" }), label: "Audio", labelPlacement: "start" }),
                                        react_1.default.createElement(FormControlLabel_1.default, { value: "Video", control: react_1.default.createElement(Radio_1.default, { color: "primary" }), label: "Video", labelPlacement: "start" })))),
                            react_1.default.createElement(Grid_1.default, { item: true, xs: 6 },
                                react_1.default.createElement(FormControl_1.default, { component: "fieldset", className: classes.formControl },
                                    react_1.default.createElement(FormLabel_1.default, { component: "legend" }, "File Type"),
                                    react_1.default.createElement(RadioGroup_1.default, { "aria-label": "gender", name: "gender2", value: ext, onChange: handleChangeExt, row: true },
                                        react_1.default.createElement(FormControlLabel_1.default, { value: "mp4", control: react_1.default.createElement(Radio_1.default, null), label: "mp4", labelPlacement: "start" }),
                                        react_1.default.createElement(FormControlLabel_1.default, { value: "mp3", control: react_1.default.createElement(Radio_1.default, null), label: "mp3", labelPlacement: "start" }),
                                        react_1.default.createElement(FormControlLabel_1.default, { value: "wav", control: react_1.default.createElement(Radio_1.default, null), label: "wav", labelPlacement: "start" }),
                                        react_1.default.createElement(FormControlLabel_1.default, { value: "webm", control: react_1.default.createElement(Radio_1.default, null), label: "webm", labelPlacement: "start" }),
                                        react_1.default.createElement(FormControlLabel_1.default, { value: "flv", control: react_1.default.createElement(Radio_1.default, null), label: "flv", labelPlacement: "start" }),
                                        react_1.default.createElement(FormControlLabel_1.default, { value: "hls", control: react_1.default.createElement(Radio_1.default, null), label: "hls", labelPlacement: "start" }))))))),
                react_1.default.createElement(Grid_1.default, { container: true, xs: 12 },
                    react_1.default.createElement(Grid_1.default, { xs: 4 },
                        react_1.default.createElement(Container_1.default, { style: { display: "none" }, className: "container-fluid", ref: containerRef },
                            react_1.default.createElement(Button_1.default, { color: "secondary", ref: downloadBtnRef, onClick: downloadFromServer }, "Download"))))))));
}
class InfoPanel extends react_1.default.Component {
    render() {
        return (react_1.default.createElement(Paper_1.default, null,
            react_1.default.createElement(Container_1.default, null,
                react_1.default.createElement(Typography_1.default, { variant: "h5", component: "h3" },
                    react_1.default.createElement("i", null, "This site is under construction.")),
                react_1.default.createElement(Typography_1.default, { component: "p" },
                    "The main reason for this site is to download audio files from youtube/ soon will support more sites and possibly the ability to download the whole video including visual and audio. depending on what people want",
                    react_1.default.createElement("br", null),
                    react_1.default.createElement("br", null),
                    react_1.default.createElement("br", null),
                    "Testing URL: https://www.youtube.com/watch?v=pcPi4jPAR2c"))));
    }
}
class Index extends react_1.default.Component {
    render() {
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(SubmitForm, null),
            react_1.default.createElement(InfoPanel, null)));
    }
}
exports.default = Index;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91bWQvLi9zcmMvQXBwLnRzeCIsIndlYnBhY2s6Ly91bWQvLi9zcmMvY29tcG9uZW50cy9wYWdlcy9JbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUdBQTBCO0FBRTFCLGtJQUEwRTtBQUMxRSx1SkFBb0Q7QUFFcEQsOEhBQWdEO0FBQ2hELDhIQUFnRDtBQUNoRCx5SEFBNkM7QUFDN0Msd0lBQTBDO0FBQzFDLGtJQUFtRDtBQUNuRCx5SEFBNkM7QUFDN0MsK0hBQWlEO0FBQ2pELCtIQUFpRDtBQUNqRCxrSUFBbUQ7QUFDbkQsK0hBQWlEO0FBQ2pELHlIQUE2QztBQUM3Qyx5R0FBK0M7QUFDL0Msc0hBQTJDO0FBQzNDLHlIQUE2QztBQUU3Qyw2SEFBMkU7QUFHM0UsTUFBTSxTQUFTLEdBQUcsbUJBQVUsQ0FBQyxDQUFDLEtBQVksRUFBRSxFQUFFLENBQzdDLHFCQUFZLENBQUM7SUFDWixTQUFTLEVBQUU7UUFDVixLQUFLLEVBQUUsT0FBTztRQUNkLFdBQVcsRUFBRSxNQUFNO0tBQ25CO0lBQ0QsSUFBSSxFQUFFO1FBQ0wsUUFBUSxFQUFFLFFBQVE7UUFDbEIsZUFBZSxFQUFFLE9BQU87UUFDeEIsU0FBUyxFQUFFLE9BQU87UUFDbEIsT0FBTyxFQUFFLG9CQUFvQjtLQUM3QjtJQUNELGFBQWEsRUFBRTtRQUNkLGVBQWUsRUFBRSx3REFBd0Q7UUFDekUsU0FBUyxFQUFFLE9BQU87UUFDbEIsT0FBTyxFQUFFLEtBQUs7UUFDZCxNQUFNLEVBQUUsS0FBSztLQUNiO0NBQ0QsQ0FBQyxDQUVGLENBQUM7QUFFRixTQUF3QixHQUFHO0lBQzFCLE1BQU0sT0FBTyxHQUFHLFNBQVMsRUFBRSxDQUFDO0lBRTVCLE1BQU0sQ0FBQyxhQUFhLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxlQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hFLE1BQU0sQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFD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MjkzMDEwNjJmYmY0NDEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyLCBSb3V0ZSwgU3dpdGNoIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lcic7XG5cbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9jb21wb25lbnRzL2xheW91dC9IZWFkZXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuL2NvbXBvbmVudHMvbGF5b3V0L0Zvb3Rlcic7XG5pbXBvcnQgQWJvdXQgZnJvbSAnLi9jb21wb25lbnRzL3BhZ2VzL0Fib3V0JztcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xuaW1wb3J0IFJlZ2lzdGVyIGZyb20gJy4vY29tcG9uZW50cy9wYWdlcy9SZWdpc3Rlcic7XG5pbXBvcnQgSW5kZXggZnJvbSAnLi9jb21wb25lbnRzL3BhZ2VzL0luZGV4JztcbmltcG9ydCBDb250YWN0IGZyb20gJy4vY29tcG9uZW50cy9wYWdlcy9Db250YWN0JztcbmltcG9ydCBBY2NvdW50IGZyb20gJy4vY29tcG9uZW50cy9wYWdlcy9BY2NvdW50JztcbmltcG9ydCBQcm9qZWN0cyBmcm9tICcuL2NvbXBvbmVudHMvcGFnZXMvUHJvamVjdHMnO1xuaW1wb3J0IFN1cHBvcnQgZnJvbSAnLi9jb21wb25lbnRzL3BhZ2VzL1N1cHBvcnQnO1xuaW1wb3J0IEZvcnVtIGZyb20gJy4vY29tcG9uZW50cy9wYWdlcy9Gb3J1bSc7XG5pbXBvcnQge3Bvc3R9IGZyb20gJy4vY29tcG9uZW50cy9zdGF0aWMvYXhpb3MnO1xuaW1wb3J0IFBvc3QgZnJvbSAnLi9jb21wb25lbnRzL3BhZ2VzL1Bvc3QnO1xuaW1wb3J0IExvZ2luIGZyb20gJy4vY29tcG9uZW50cy9wYWdlcy9Mb2dpbic7XG5cbmltcG9ydCB7IG1ha2VTdHlsZXMsIFRoZW1lLCBjcmVhdGVTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuXG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lOiBUaGVtZSkgPT5cblx0Y3JlYXRlU3R5bGVzKHtcblx0XHRwYXJhZ3JhcGg6IHtcblx0XHRcdGNvbG9yOiBcIndoaXRlXCIsXG5cdFx0XHRwYWRkaW5nTGVmdDogXCIyMHB4XCJcblx0XHR9LFxuXHRcdG1haW46IHtcblx0XHRcdG1heFdpZHRoOiBcIjExNDBweFwiLFxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCIsXG5cdFx0XHRtaW5IZWlnaHQ6IFwiMTAwdmhcIixcblx0XHRcdHBhZGRpbmc6IFwiOTBweCAzMHB4IDBweCAzMHB4XCJcblx0XHR9LFxuXHRcdG1haW5Db250YWluZXI6IHtcblx0XHRcdGJhY2tncm91bmRJbWFnZTogXCJ1cmwoaHR0cDovL2xvY2FsaG9zdDo4MDgwL3VwbG9hZC9maWxlcy9iYWNrZ3JvdW5kLmpwZylcIixcblx0XHRcdG1pbkhlaWdodDogXCIxMDB2aFwiLFxuXHRcdFx0cGFkZGluZzogXCIwcHhcIixcblx0XHRcdG1hcmdpbjogXCIwcHhcIlxuXHRcdH1cblx0fSksXG5cdFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwICgpIHtcblx0Y29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXHRcblx0Y29uc3QgW2F1dGhlbnRpY2F0ZWQsIHNldEF1dGhlbnRpY2F0ZWRdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuXHRjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuXHRjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuXHRcblx0ZnVuY3Rpb24gYXV0aGVudGljYXRlX3VzZXIoKXtcblx0XHRjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xuXHRcdGNvbnNvbGUubG9nKFwiQXV0aGVudGljYXRpbmcgdXNlciBhdCB0b3AgbGF5ZXJcIilcblx0XHRpZiAodG9rZW4pIHtcblx0XHRcdGNvbnN0IHU6bnVsbCB8IHN0cmluZyA9IHRva2VuLnNwbGl0KFwiP1wiKVswXTsgc2V0VXNlcm5hbWUodSk7XG5cdFx0XHRjb25zdCBwOm51bGwgfCBzdHJpbmcgPSB0b2tlbi5zcGxpdChcIj9cIilbMV07IHNldFBhc3N3b3JkKHApO1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBwb3N0KFwiL3VzZXJzL2xvZ2luXCIsIEpTT04uc3RyaW5naWZ5KHt1c2VybmFtZTp1c2VybmFtZSwgZW1haWw6dXNlcm5hbWUsIHBhc3N3b3JkOnBhc3N3b3JkfSksIHRydWUpO1xuXHRcdFx0cmVzcG9uc2Uub25sb2FkID0gKCkgPT4ge1xuXHRcdFx0XHRpZiAocmVzcG9uc2UucmVzcG9uc2VUZXh0LmluY2x1ZGVzKFwiU3VjY2Vzc1wiKSl7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCJTdWNjZXNzZnVsbHkgYXV0aGVudGljYXRlZCB1c2VyXCIpXG5cdFx0XHRcdFx0c2V0QXV0aCh0cnVlKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRcblx0ZnVuY3Rpb24gc2V0QXV0aCh2YWw6IGJvb2xlYW4pe1xuXHRcdHNldEF1dGhlbnRpY2F0ZWQodmFsKTtcblx0fVxuXHRhdXRoZW50aWNhdGVfdXNlcigpO1xuXHRyZXR1cm4gKFxuXHRcdDxSb3V0ZXI+XG5cdFx0XHQ8R3JpZCBjb250YWluZXIgeHM9ezEyfSBjbGFzc05hbWU9e2NsYXNzZXMubWFpbkNvbnRhaW5lcn0+XG5cdFx0XHRcdDxIZWFkZXIgYXV0aD17YXV0aGVudGljYXRlZH0vPlxuXHRcdFx0XHQ8R3JpZCBpdGVtIGNvbnRhaW5lciB4cz17MTJ9IGp1c3RpZnk9XCJjZW50ZXJcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgPlxuXHRcdFx0XHRcdDxDb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc2VzLm1haW59PlxuXHRcdFx0XHRcdFx0PFN3aXRjaD5cblx0XHRcdFx0XHRcdFx0PFJvdXRlIGV4YWN0IHBhdGg9Jy8nIHJlbmRlcj17KHByb3BzKSA9PiAoPEluZGV4Lz4pfS8+XG5cdFx0XHRcdFx0XHRcdDxSb3V0ZSBwYXRoPScvRm9ydW0nIHJlbmRlcj17KHByb3BzKSA9PiAoPEZvcnVtIGF1dGhlbnRpY2F0ZWQ9e2F1dGhlbnRpY2F0ZWR9IG15X3VzZXJuYW1lPXt1c2VybmFtZX0gbXlfcGFzc3dvcmQ9e3Bhc3N3b3JkfSAvPil9Lz5cblx0XHRcdFx0XHRcdFx0PFJvdXRlIHBhdGg9Jy9Mb2dpbicgcmVuZGVyPXsocHJvcHMpID0+ICg8TG9naW4gYXV0aGVudGljYXRlPXthdXRoZW50aWNhdGVfdXNlcn0gLz4pfS8+XG5cdFx0XHRcdFx0XHRcdDxSb3V0ZSBwYXRoPScvUmVnaXN0ZXInIGNvbXBvbmVudD17UmVnaXN0ZXJ9IC8+XG5cdFx0XHRcdFx0XHRcdDxSb3V0ZSBwYXRoPScvQWJvdXQgdXMnIGNvbXBvbmVudD17QWJvdXR9IC8+XG5cdFx0XHRcdFx0XHRcdDxSb3V0ZSBwYXRoPScvQWNjb3VudCcgcmVuZGVyPXsocHJvcHMpID0+ICg8QWNjb3VudCByZW1vdmVBdXRoPXtzZXRBdXRofSB1c2VybmFtZT17dXNlcm5hbWV9IHBhc3N3b3JkPXtwYXNzd29yZH0vPil9Lz5cblx0XHRcdFx0XHRcdFx0PFJvdXRlIHBhdGg9Jy9Gb3J1bS9Qb3N0JyByZW5kZXI9eyhwcm9wcykgPT4gKDxQb3N0IGF1dGhlbnRpY2F0ZWQ9e2F1dGhlbnRpY2F0ZWR9IHVzZXJuYW1lPXt1c2VybmFtZX0gcGFzc3dvcmQ9e3Bhc3N3b3JkfS8+KX0vPlxuXHRcdFx0XHRcdFx0XHQ8Um91dGUgcGF0aD0nL0NvbnRhY3QnIGNvbXBvbmVudD17Q29udGFjdH0gLz5cblx0XHRcdFx0XHRcdFx0PFJvdXRlIHBhdGg9Jy9Qcm9qZWN0cycgY29tcG9uZW50PXtQcm9qZWN0c30gLz5cblx0XHRcdFx0XHRcdFx0PFJvdXRlIHBhdGg9Jy9TdXBwb3J0JyBjb21wb25lbnQ9e1N1cHBvcnR9IC8+XG5cdFx0XHRcdFx0XHQ8L1N3aXRjaD5cblx0XHRcdFx0XHQ8L0NvbnRhaW5lcj5cblx0XHRcdFx0PC9HcmlkPlxuXHRcdFx0XHQ8Rm9vdGVyLz5cblx0XHRcdDwvR3JpZD5cblx0XHQ8L1JvdXRlcj5cblx0KTtcbn1cblxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0IHsgcG9zdCwgZ2V0fSBmcm9tICcuLi9zdGF0aWMvYXhpb3MnO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lcic7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMsIFRoZW1lLCBjcmVhdGVTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTW9kYWwnO1xyXG5pbXBvcnQgQmFja2Ryb3AgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQmFja2Ryb3AnO1xyXG5pbXBvcnQgRmFkZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9GYWRlJztcclxuaW1wb3J0IExpbmVhclByb2dyZXNzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmVhclByb2dyZXNzJztcclxuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcclxuaW1wb3J0IEZvcm1Hcm91cCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtR3JvdXAnO1xyXG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2wnO1xyXG5pbXBvcnQgUmFkaW8gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUmFkaW8nO1xyXG5pbXBvcnQgUmFkaW9Hcm91cCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9SYWRpb0dyb3VwJztcclxuaW1wb3J0IEZvcm1IZWxwZXJUZXh0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1IZWxwZXJUZXh0JztcclxuaW1wb3J0IEZvcm1Db250cm9sTGFiZWwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2xMYWJlbCc7XHJcbmltcG9ydCBGb3JtTGFiZWwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUxhYmVsJztcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IFNuYWNrIGZyb20gJy4uL3N0YXRpYy9TbmFjayc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+XHJcblx0Y3JlYXRlU3R5bGVzKHtcclxuXHRcdG1vZGFsOiB7XHJcblx0XHRcdGRpc3BsYXk6ICdmbGV4JyxcclxuXHRcdFx0YWxpZ25JdGVtczogJ2NlbnRlcicsXHJcblx0XHRcdGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuXHRcdH0sXHJcblx0XHRwYXBlcjoge1xyXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcclxuXHRcdFx0Ym9yZGVyOiAnMnB4IHNvbGlkICMwMDAnLFxyXG5cdFx0XHRib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbNV0sXHJcblx0XHRcdHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiwgNCwgMyksXHJcblx0XHR9LFxyXG5cdFx0cm9vdDoge1xyXG5cdFx0XHR3aWR0aDogJzEwMCUnLFxyXG5cdFx0XHQnJiA+ICogKyAqJzoge1xyXG5cdFx0XHRcdG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygyKSxcclxuXHRcdFx0fSxcclxuXHRcdH0sXHJcblx0XHR0ZXh0RmllbGQ6IHtcclxuXHRcdFx0bWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygxKSxcclxuXHRcdFx0bWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMSksXHJcblx0XHRcdHdpZHRoOiBcIjEwMCVcIlxyXG5cdFx0fSxcclxuXHRcdGZvcm1Db250cm9sOiB7XHJcblx0XHRcdG1hcmdpbjogdGhlbWUuc3BhY2luZygzKSxcclxuXHRcdH0sXHJcblx0XHRpbnB1dEZvcm06IHtcclxuXHRcdFx0dGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG5cdFx0XHRwYWRkaW5nOiBcIjMwcHggMCAwIDBcIixcclxuXHRcdFx0d2lkdGg6IFwiMTAwdndcIixcclxuXHRcdFx0bWFyZ2luOiBcIjBweCBhdXRvIDUwcHggYXV0b1wiLFxyXG5cdFx0fSxcclxuXHRcdGZvcm06IHtcclxuXHRcdFx0bWFyZ2luOiBcIjBweCBhdXRvIDEwcHggYXV0b1wiLFxyXG5cdFx0XHR3aWR0aDogXCIxMDAlXCJcclxuXHRcdH0sXHJcblx0XHRpbnB1dEZvcm1JbnB1dDoge1xyXG5cdFx0XHR3aWR0aDogXCI4NSVcIixcclxuXHRcdFx0ZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcclxuXHRcdH0sXHJcblx0XHRpbnB1dEZvcm1CdXR0b246IHtcclxuXHRcdFx0aGVpZ2h0OiBcIjEwMCVcIixcclxuXHRcdFx0bWFyZ2luOiBcIjBweFwiLFxyXG5cdFx0fVxyXG5cdH0pLFxyXG4pO1xyXG5cclxuaW50ZXJmYWNlIFByb2dyZXNzUHJvcHMge1xyXG5cdHByb2dyZXNzVmFsdWU6IG51bWJlcjtcclxufVxyXG5mdW5jdGlvbiBQcm9ncmVzc0Jhcihwcm9wczogUHJvZ3Jlc3NQcm9wcykge1xyXG5cdGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHRjb25zdCBbY29tcGxldGVkLCBzZXRDb21wbGV0ZWRdID0gUmVhY3QudXNlU3RhdGUoMCk7XHJcblxyXG5cdFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRmdW5jdGlvbiBwcm9ncmVzcygpIHtcclxuXHRcdFx0c2V0Q29tcGxldGVkKG9sZENvbXBsZXRlZCA9PiB7XHJcblx0XHRcdFx0aWYgKG9sZENvbXBsZXRlZCA9PT0gMTAwKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gMDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIE1hdGgubWluKHByb3BzLnByb2dyZXNzVmFsdWUsIDEwMCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IHRpbWVyID0gc2V0SW50ZXJ2YWwocHJvZ3Jlc3MsIDUwMCk7XHJcblx0XHRyZXR1cm4gKCkgPT4ge1xyXG4gICAgICBjbGVhckludGVydmFsKHRpbWVyKTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgIDxMaW5lYXJQcm9ncmVzcyB2YXJpYW50PVwiZGV0ZXJtaW5hdGVcIiB2YWx1ZT17Y29tcGxldGVkfSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuXHJcbmludGVyZmFjZSBsb2FkaW5nTW9kYWxQcm9wcyB7XHJcblx0cHJvZ3Jlc3M6IHN0cmluZztcclxuXHRvbkhpZGU6ICgpID0+IHZvaWQ7XHJcblx0c2hvdzogYm9vbGVhbjtcclxufVxyXG5cclxuZnVuY3Rpb24gTG9hZGluZ01vZGFsKHByb3BzOiBsb2FkaW5nTW9kYWxQcm9wcykge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJ0cmFuc2l0aW9uLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwidHJhbnNpdGlvbi1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1vZGFsfVxyXG4gICAgICAgIG9wZW49e3Byb3BzLnNob3d9XHJcbiAgICAgICAgb25DbG9zZT17cHJvcHMub25IaWRlfVxyXG4gICAgICAgIGNsb3NlQWZ0ZXJUcmFuc2l0aW9uXHJcbiAgICAgICAgQmFja2Ryb3BDb21wb25lbnQ9e0JhY2tkcm9wfVxyXG4gICAgICAgIEJhY2tkcm9wUHJvcHM9e3tcclxuICAgICAgICAgIHRpbWVvdXQ6IDUwMCxcclxuICAgICAgICB9fT5cclxuICAgICAgICA8RmFkZSBpbj17b3Blbn0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XHJcbiAgICAgICAgICAgIDxoMiBpZD1cInRyYW5zaXRpb24tbW9kYWwtdGl0bGVcIj5Eb3dubG9hZGluZyB5b3VyIGZpbGU8L2gyPlxyXG5cdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+TG9hZGluZzwvc3Bhbj5cclxuXHRcdFx0PFByb2dyZXNzQmFyIHByb2dyZXNzVmFsdWU9e3BhcnNlSW50KHByb3BzLnByb2dyZXNzKX0vPlxyXG4gICAgICAgIDxoND5Eb3dubG9hZGluZy4uLiB7cHJvcHMucHJvZ3Jlc3N9ICU8L2g0PlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgUGxlYXNlIHdhaXQgd2hpbGUgeW91ciBmaWxlIGlzIGJlaW5nIGRvd25sb2FkZWQuIEZlZWwgZnJlZSB0byB1c2UgdGhpcyBzZXJ2aWNlIGFzIG1hbnlcclxuICAgICAgICAgIHRpbWVzIGFzIHlvdSB3YW50Ljxici8+XHJcblxyXG4gICAgICAgICAgQSBidXR0b24gbGluayB3aWxsIGJlIHByb3ZpZGVkIHNob3J0bHkuLi4uXHJcbiAgICAgICAgPC9wPlxyXG5cdFx0PEJ1dHRvbiBvbkNsaWNrPXtwcm9wcy5vbkhpZGV9PkNsb3NlPC9CdXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0ZhZGU+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gU3VibWl0Rm9ybSgpIHtcclxuXHRjb25zdCBjb250YWluZXJSZWY6YW55ID0gUmVhY3QuY3JlYXRlUmVmKCk7XHJcblx0Y29uc3QgZ2V0UmVmOiBhbnkgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuXHRjb25zdCBkb3dubG9hZEJ0blJlZjogYW55ID0gUmVhY3QuY3JlYXRlUmVmKCk7XHJcblx0XHJcblx0Y29uc3QgW2V4dCwgc2V0RXh0XSA9IFJlYWN0LnVzZVN0YXRlKFwibXA0XCIpO1xyXG5cdGNvbnN0IFt0eXBlLCBzZXRUeXBlXSA9IFJlYWN0LnVzZVN0YXRlKFwiQXVkaW9cIik7XHJcblx0Y29uc3QgW3Nob3dMb2FkaW5nLCBzZXRTaG93TG9hZGluZ10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgW2xvYWRpbmdQcm9ncmVzcywgc2V0TG9hZGluZ1Byb2dyZXNzXSA9IFJlYWN0LnVzZVN0YXRlKFwiMFwiKTtcclxuXHRjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuXHRjb25zdCBbdmFyaWVudCwgc2V0VmFyaWVudF0gPSBSZWFjdC51c2VTdGF0ZTxcInN1Y2Nlc3NcIiB8IFwiZXJyb3JcIiB8IFwid2FybmluZ1wiIHwgXCJpbmZvXCI+KFwiaW5mb1wiKTtcclxuXHRjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2VUeXBlID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xyXG4gICAgc2V0VHlwZSgoZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlKTtcclxuICB9O1xyXG5cdGNvbnN0IGhhbmRsZUNoYW5nZUV4dCA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcclxuICAgIHNldEV4dCgoZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlKTtcclxuICB9O1x0XHJcblx0XHJcblx0IGZ1bmN0aW9uIGhhbmRsZUNoYW5nZUFsZXJ0U2hvdyAoZXZlbnQ6IGFueSwgc2hvdzogYm9vbGVhbikge1xyXG5cdFx0c2V0T3BlbihzaG93KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG9wZW5IYW5kbGVyKHZhbDogYm9vbGVhbikge1xyXG4gICAgICAgIHNldE9wZW4odmFsKTtcclxuICAgIH1cclxuXHRmdW5jdGlvbiBnZXQgKGU6IGFueSkge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0c2V0T3BlbihmYWxzZSk7XHJcbiAgICAgICAgdmFyIFVSTGlucHV0ID0gZ2V0UmVmLmN1cnJlbnQudmFsdWUuc3BsaXQoXCI9XCIpWzFdO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcImFzIFwiICsgVVJMaW5wdXQgKyBcIiwgXCIgKyB0eXBlICsgXCIsIFwiICsgZXh0KVxyXG5cdFx0aWYgKFVSTGlucHV0ID09PSB1bmRlZmluZWQgfHwgbnVsbCl7XHJcblx0XHRcdHNldFZhcmllbnQoXCJ3YXJuaW5nXCIpO1xyXG5cdFx0XHRzZXRNZXNzYWdlKFwiSW52YWxpZCB1cmwgdHJ5IGFub3RoZXIgb3IgbG9vayBjYXJlZnVsbHkgdG8gY29ycmVjdCBpdC5cIik7XHJcblx0XHRcdHNldE9wZW4odHJ1ZSk7XHJcblx0ICBcdH0gZWxzZSB7XHJcbiAgICAgICAgICAgIFxyXG5cdFx0XHRjb25zdCByZXNwb25zZSA9IHBvc3QoXCIvZG93bmxvYWRcIiwgSlNPTi5zdHJpbmdpZnkoe3VybDpVUkxpbnB1dCwgdHlwZTp0eXBlLCBleHRlbnNpb246ZXh0fSksIHRydWUpO1xyXG5cdFx0XHRyZXNwb25zZS5vbmxvYWQgPSAoKSA9PiB7XHJcblx0XHRcdFx0dmFyIHNzZTpFdmVudFNvdXJjZSA9IG5ldyBFdmVudFNvdXJjZShcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9kb3dubG9hZC9zc2VcIik7XHJcblx0XHQgIFx0XHRzc2Uub25vcGVuID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFNob3dMb2FkaW5nKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNzZS5vbm1lc3NhZ2UgPSBldnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRMb2FkaW5nUHJvZ3Jlc3MoZXZ0LmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZ0LmRhdGEgPT09IFwiMTAwXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNob3dMb2FkaW5nKGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHVybDogc3RyaW5nID0gXCJodHRwOi8vbG9jYWxob3N0OjgwODAvZG93bmxvYWQvdmlkZW8vXCIgKyBVUkxpbnB1dDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvd25sb2FkQnRuUmVmLmN1cnJlbnQudmFsdWUgPSB1cmw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXJSZWYuY3VycmVudC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3NlLmNsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblx0XHQgIFx0XHR9XHJcblx0ICBcdFx0XHRcclxuXHRcdFx0XHRzc2Uub25lcnJvciA9ICgpID0+IHtcclxuICBcdFx0XHRcdFx0Y29uc29sZS5sb2coXCJFdmVudFNvdXJjZSBmYWlsZWQuXCIpO1xyXG5cdFx0XHRcdFx0c2V0U2hvd0xvYWRpbmcoZmFsc2UpO1xyXG4gIFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIkNsb3NpbmcgY29ubmVjdG9uLi4uXCIpO1xyXG4gIFx0XHRcdFx0XHRzc2UuY2xvc2UoKTtcclxuICBcdFx0XHRcdH1cclxuXHRcdFx0fVxyXG4gIFx0XHR9XHJcbiAgXHR9XHJcbiAgXHRmdW5jdGlvbiBkb3dubG9hZEZyb21TZXJ2ZXIgKCkge1xyXG4gICAgXHR2YXIgdXJsOnN0cmluZyA9IGRvd25sb2FkQnRuUmVmLmN1cnJlbnQudmFsdWU7XHJcbiAgICBcdHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xyXG5cdH1cclxuXHRyZXR1cm4gKFxyXG5cdFx0PFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICA8U25hY2sgb3BlbkhhbmRsZXI9e29wZW5IYW5kbGVyfSBvcGVuPXtvcGVufSB2YXJpZW50PXt2YXJpZW50fSBtZXNzYWdlPXttZXNzYWdlfS8+XHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciB4cz17MTJ9ID5cclxuICAgICAgICAgICAgICAgIDxMb2FkaW5nTW9kYWwgcHJvZ3Jlc3M9e2xvYWRpbmdQcm9ncmVzc30gc2hvdz17c2hvd0xvYWRpbmd9IG9uSGlkZT17KCkgPT4gc2V0U2hvd0xvYWRpbmcoZmFsc2UpfS8+XHJcbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnB1dEZvcm19PlxyXG5cdFx0XHRcdCAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybX0+XHJcblx0XHRcdFx0XHQgICAgPEZvcm1Hcm91cD5cclxuXHRcdFx0XHRcdFx0ICAgIDxHcmlkIGNvbnRhaW5lciB4cz17MTJ9PlxyXG5cdFx0XHRcdFx0XHRcdCAgICA8R3JpZCBpdGVtIHhzPXsxMH0+XHJcblx0XHRcdFx0XHRcdFx0XHQgICAgPFRleHRGaWVsZFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQgICAgaW5wdXRSZWY9e2dldFJlZn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgIGlkPVwic3RhbmRhcmQtYmFzaWNcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgIGxhYmVsPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb21cIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuXHRcdFx0XHRcdFx0XHRcdCAgICAvPlxyXG5cdFx0XHRcdFx0XHRcdCAgICA8L0dyaWQ+XHJcblx0XHRcdFx0XHRcdFx0ICAgIDxHcmlkIGNvbnRhaW5lciB4cz17Mn0gIGp1c3RpZnk9XCJmbGV4LXN0YXJ0XCIgYWxpZ25JdGVtcz1cImZsZXgtc3RhcnRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdCAgICA8QnV0dG9uIG9uQ2xpY2s9e2dldH0gY2xhc3NOYW1lPXtjbGFzc2VzLmlucHV0Rm9ybUJ1dHRvbn0gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwicHJpbWFyeVwiPkdFVDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdCAgICA8L0dyaWQ+XHJcblx0XHRcdFx0XHRcdCAgICA8L0dyaWQ+XHJcblx0XHRcdFx0XHQgICAgPC9Gb3JtR3JvdXA+XHJcblx0XHRcdFx0XHQgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciB4cz17MTJ9PlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fT5cclxuXHRcdFx0XHRcdFx0ICAgICAgICAgICAgPEZvcm1Db250cm9sIGNvbXBvbmVudD1cImZpZWxkc2V0XCIgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1Db250cm9sfT5cclxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgPEZvcm1MYWJlbCBjb21wb25lbnQ9XCJsZWdlbmRcIj5EYXRhIFR5cGU8L0Zvcm1MYWJlbD5cclxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgPFJhZGlvR3JvdXAgYXJpYS1sYWJlbD1cImdlbmRlclwiIG5hbWU9XCJnZW5kZXIxXCIgdmFsdWU9e3R5cGV9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VUeXBlfSByb3c+XHJcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWwgdmFsdWU9XCJBdWRpb1wiIGNvbnRyb2w9ezxSYWRpbyAgY29sb3I9XCJwcmltYXJ5XCIgLz59IGxhYmVsPVwiQXVkaW9cIiBsYWJlbFBsYWNlbWVudD1cInN0YXJ0XCIvPlxyXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsIHZhbHVlPVwiVmlkZW9cIiBjb250cm9sPXs8UmFkaW8gIGNvbG9yPVwicHJpbWFyeVwiIC8+fSBsYWJlbD1cIlZpZGVvXCIgbGFiZWxQbGFjZW1lbnQ9XCJzdGFydFwiLz5cclxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgPC9SYWRpb0dyb3VwPlxyXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuXHRcdFx0XHRcdFx0ICAgICAgICAgICAgPEZvcm1Db250cm9sIGNvbXBvbmVudD1cImZpZWxkc2V0XCIgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1Db250cm9sfT5cclxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgPEZvcm1MYWJlbCBjb21wb25lbnQ9XCJsZWdlbmRcIj5GaWxlIFR5cGU8L0Zvcm1MYWJlbD5cclxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgPFJhZGlvR3JvdXAgYXJpYS1sYWJlbD1cImdlbmRlclwiIG5hbWU9XCJnZW5kZXIyXCIgdmFsdWU9e2V4dH0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZUV4dH0gcm93PlxyXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsIHZhbHVlPVwibXA0XCIgY29udHJvbD17PFJhZGlvIC8+fSBsYWJlbD1cIm1wNFwiIGxhYmVsUGxhY2VtZW50PVwic3RhcnRcIi8+XHJcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWwgdmFsdWU9XCJtcDNcIiBjb250cm9sPXs8UmFkaW8gLz59IGxhYmVsPVwibXAzXCIgbGFiZWxQbGFjZW1lbnQ9XCJzdGFydFwiLz5cclxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbCB2YWx1ZT1cIndhdlwiIGNvbnRyb2w9ezxSYWRpbyAvPn0gbGFiZWw9XCJ3YXZcIiBsYWJlbFBsYWNlbWVudD1cInN0YXJ0XCIvPlxyXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsIHZhbHVlPVwid2VibVwiIGNvbnRyb2w9ezxSYWRpbyAvPn0gbGFiZWw9XCJ3ZWJtXCIgbGFiZWxQbGFjZW1lbnQ9XCJzdGFydFwiLz5cclxuXHRcdFx0XHRcdFx0XHRcdCAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsIHZhbHVlPVwiZmx2XCIgY29udHJvbD17PFJhZGlvIC8+fSBsYWJlbD1cImZsdlwiIGxhYmVsUGxhY2VtZW50PVwic3RhcnRcIi8+XHJcblx0XHRcdFx0XHRcdFx0XHQgICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbCB2YWx1ZT1cImhsc1wiIGNvbnRyb2w9ezxSYWRpbyAvPn0gbGFiZWw9XCJobHNcIiBsYWJlbFBsYWNlbWVudD1cInN0YXJ0XCIvPlxyXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICA8L1JhZGlvR3JvdXA+XHJcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcblx0ICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgeHM9ezEyfT5cclxuXHQgICAgICAgICAgICAgICAgICAgIDxHcmlkIHhzPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb250YWluZXIgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCJ9fSBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIiByZWY9e2NvbnRhaW5lclJlZn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInNlY29uZGFyeVwiIHJlZj17ZG93bmxvYWRCdG5SZWZ9IG9uQ2xpY2s9e2Rvd25sb2FkRnJvbVNlcnZlcn0+RG93bmxvYWQ8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHQgICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuXHRcdFx0PC9HcmlkPlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcblx0KTtcclxufVxyXG5jbGFzcyBJbmZvUGFuZWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cdHJlbmRlcigpe1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PFBhcGVyPlxyXG5cdFx0XHRcdDxDb250YWluZXI+XHJcblx0XHRcdFx0XHQ8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIiBjb21wb25lbnQ9XCJoM1wiPlxyXG5cdFx0XHRcdFx0XHQ8aT5UaGlzIHNpdGUgaXMgdW5kZXIgY29uc3RydWN0aW9uLjwvaT5cclxuXHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cclxuXHRcdFx0XHRcdDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cInBcIj5cclxuXHRcdFx0XHRcdFx0VGhlIG1haW4gcmVhc29uIGZvciB0aGlzIHNpdGUgaXMgdG8gZG93bmxvYWQgYXVkaW8gZmlsZXMgZnJvbSB5b3V0dWJlLyBzb29uIHdpbGwgc3VwcG9ydCBtb3JlXHJcblx0XHRcdFx0XHRcdHNpdGVzIGFuZCBwb3NzaWJseSB0aGUgYWJpbGl0eSB0byBkb3dubG9hZCB0aGUgd2hvbGUgdmlkZW8gaW5jbHVkaW5nIHZpc3VhbCBhbmQgYXVkaW8uIGRlcGVuZGluZyBvblxyXG5cdFx0XHRcdFx0XHR3aGF0IHBlb3BsZSB3YW50PGJyLz48YnIvPjxici8+XHJcblx0XHRcdFx0XHRcdFRlc3RpbmcgVVJMOiBodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PXBjUGk0alBBUjJjXHJcblx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XHJcblx0XHRcdFx0PC9Db250YWluZXI+XHJcblx0XHRcdDwvUGFwZXI+XHJcblx0XHQpXHJcblx0fVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHRyZW5kZXIoKXtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxSZWFjdC5GcmFnbWVudD5cclxuXHRcdFx0XHQ8U3VibWl0Rm9ybS8+XHJcblx0XHRcdFx0PEluZm9QYW5lbC8+XHJcblx0XHRcdDwvUmVhY3QuRnJhZ21lbnQ+XHJcblx0XHQpO1xyXG5cdH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9