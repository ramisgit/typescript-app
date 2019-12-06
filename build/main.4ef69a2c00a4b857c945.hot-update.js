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
    const handleClose = () => {
        setOpen(false);
    };
    if (props.show) {
        setOpen(true);
    }
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(Modal_1.default, { "aria-labelledby": "transition-modal-title", "aria-describedby": "transition-modal-description", className: classes.modal, open: open, onClose: handleClose, closeAfterTransition: true, BackdropComponent: Backdrop_1.default, BackdropProps: {
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
    const warningRef = react_1.default.createRef();
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
        var warning = warningRef.current;
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
                };
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
                sse.onerror = () => {
                    console.log("EventSource failed.");
                    setShowLoading(false);
                    warning.innerHTML = "Failed to establish connection to server";
                    warning.style.display = "block";
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
                                react_1.default.createElement(Button_1.default, { ref: getRef, onClick: get, className: classes.inputFormButton, variant: "contained", color: "primary" }, "GET")))),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91bWQvLi9zcmMvQXBwLnRzeCIsIndlYnBhY2s6Ly91bWQvLi9zcmMvY29tcG9uZW50cy9wYWdlcy9JbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUdBQTBCO0FBRTFCLGtJQUEwRTtBQUMxRSx1SkFBb0Q7QUFFcEQsOEhBQWdEO0FBQ2hELDhIQUFnRDtBQUNoRCx5SEFBNkM7QUFDN0Msd0lBQTBDO0FBQzFDLGtJQUFtRDtBQUNuRCx5SEFBNkM7QUFDN0MsK0hBQWlEO0FBQ2pELCtIQUFpRDtBQUNqRCxrSUFBbUQ7QUFDbkQsK0hBQWlEO0FBQ2pELHlIQUE2QztBQUM3Qyx5R0FBK0M7QUFDL0Msc0hBQTJDO0FBQzNDLHlIQUE2QztBQUU3Qyw2SEFBMkU7QUFHM0UsTUFBTSxTQUFTLEdBQUcsbUJBQVUsQ0FBQyxDQUFDLEtBQVksRUFBRSxFQUFFLENBQzdDLHFCQUFZLENBQUM7SUFDWixTQUFTLEVBQUU7UUFDVixLQUFLLEVBQUUsT0FBTztRQUNkLFdBQVcsRUFBRSxNQUFNO0tBQ25CO0lBQ0QsSUFBSSxFQUFFO1FBQ0wsUUFBUSxFQUFFLFFBQVE7UUFDbEIsZUFBZSxFQUFFLE9BQU87UUFDeEIsU0FBUyxFQUFFLE9BQU87UUFDbEIsT0FBTyxFQUFFLG9CQUFvQjtLQUM3QjtJQUNELGFBQWEsRUFBRTtRQUNkLGVBQWUsRUFBRSx3REFBd0Q7UUFDekUsU0FBUyxFQUFFLE9BQU87UUFDbEIsT0FBTyxFQUFFLEtBQUs7UUFDZCxNQUFNLEVBQUUsS0FBSztLQUNiO0NBQ0QsQ0FBQyxDQUVGLENBQUM7QUFFRixTQUF3QixHQUFHO0lBQzFCLE1BQU0sT0FBTyxHQUFHLFNBQVMsRUFBRSxDQUFDO0lBRTVCLE1BQU0sQ0FBQyxhQUFhLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxlQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hFLE1BQU0sQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFD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dEMsNEVBQXVDLENBQzNCO2dCQUNiLDhCQUFDLG9CQUFVLElBQUMsU0FBUyxFQUFDLEdBQUc7O29CQUdSLHlDQUFLO29CQUFBLHlDQUFLO29CQUFBLHlDQUFLOytFQUVuQixDQUNGLENBQ0wsQ0FDUjtJQUNGLENBQUM7Q0FDRDtBQUNELE1BQXFCLEtBQU0sU0FBUSxlQUFLLENBQUMsU0FBUztJQUNqRCxNQUFNO1FBQ0wsT0FBTyxDQUNOLDhCQUFDLGVBQUssQ0FBQyxRQUFRO1lBQ2QsOEJBQUMsVUFBVSxPQUFFO1lBQ2IsOEJBQUMsU0FBUyxPQUFFLENBQ0ksQ0FDakIsQ0FBQztJQUNILENBQUM7Q0FDRDtBQVRELHdCQVNDIiwiZmlsZSI6Im1haW4uNGVmNjlhMmMwMGE0Yjg1N2M5NDUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyLCBSb3V0ZSwgU3dpdGNoIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lcic7XG5cbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9jb21wb25lbnRzL2xheW91dC9IZWFkZXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuL2NvbXBvbmVudHMvbGF5b3V0L0Zvb3Rlcic7XG5pbXBvcnQgQWJvdXQgZnJvbSAnLi9jb21wb25lbnRzL3BhZ2VzL0Fib3V0JztcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xuaW1wb3J0IFJlZ2lzdGVyIGZyb20gJy4vY29tcG9uZW50cy9wYWdlcy9SZWdpc3Rlcic7XG5pbXBvcnQgSW5kZXggZnJvbSAnLi9jb21wb25lbnRzL3BhZ2VzL0luZGV4JztcbmltcG9ydCBDb250YWN0IGZyb20gJy4vY29tcG9uZW50cy9wYWdlcy9Db250YWN0JztcbmltcG9ydCBBY2NvdW50IGZyb20gJy4vY29tcG9uZW50cy9wYWdlcy9BY2NvdW50JztcbmltcG9ydCBQcm9qZWN0cyBmcm9tICcuL2NvbXBvbmVudHMvcGFnZXMvUHJvamVjdHMnO1xuaW1wb3J0IFN1cHBvcnQgZnJvbSAnLi9jb21wb25lbnRzL3BhZ2VzL1N1cHBvcnQnO1xuaW1wb3J0IEZvcnVtIGZyb20gJy4vY29tcG9uZW50cy9wYWdlcy9Gb3J1bSc7XG5pbXBvcnQge3Bvc3R9IGZyb20gJy4vY29tcG9uZW50cy9zdGF0aWMvYXhpb3MnO1xuaW1wb3J0IFBvc3QgZnJvbSAnLi9jb21wb25lbnRzL3BhZ2VzL1Bvc3QnO1xuaW1wb3J0IExvZ2luIGZyb20gJy4vY29tcG9uZW50cy9wYWdlcy9Mb2dpbic7XG5cbmltcG9ydCB7IG1ha2VTdHlsZXMsIFRoZW1lLCBjcmVhdGVTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuXG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lOiBUaGVtZSkgPT5cblx0Y3JlYXRlU3R5bGVzKHtcblx0XHRwYXJhZ3JhcGg6IHtcblx0XHRcdGNvbG9yOiBcIndoaXRlXCIsXG5cdFx0XHRwYWRkaW5nTGVmdDogXCIyMHB4XCJcblx0XHR9LFxuXHRcdG1haW46IHtcblx0XHRcdG1heFdpZHRoOiBcIjExNDBweFwiLFxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCIsXG5cdFx0XHRtaW5IZWlnaHQ6IFwiMTAwdmhcIixcblx0XHRcdHBhZGRpbmc6IFwiOTBweCAzMHB4IDBweCAzMHB4XCJcblx0XHR9LFxuXHRcdG1haW5Db250YWluZXI6IHtcblx0XHRcdGJhY2tncm91bmRJbWFnZTogXCJ1cmwoaHR0cDovL2xvY2FsaG9zdDo4MDgwL3VwbG9hZC9maWxlcy9iYWNrZ3JvdW5kLmpwZylcIixcblx0XHRcdG1pbkhlaWdodDogXCIxMDB2aFwiLFxuXHRcdFx0cGFkZGluZzogXCIwcHhcIixcblx0XHRcdG1hcmdpbjogXCIwcHhcIlxuXHRcdH1cblx0fSksXG5cdFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwICgpIHtcblx0Y29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXHRcblx0Y29uc3QgW2F1dGhlbnRpY2F0ZWQsIHNldEF1dGhlbnRpY2F0ZWRdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuXHRjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuXHRjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuXHRcblx0ZnVuY3Rpb24gYXV0aGVudGljYXRlX3VzZXIoKXtcblx0XHRjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xuXHRcdGNvbnNvbGUubG9nKFwiQXV0aGVudGljYXRpbmcgdXNlciBhdCB0b3AgbGF5ZXJcIilcblx0XHRpZiAodG9rZW4pIHtcblx0XHRcdGNvbnN0IHU6bnVsbCB8IHN0cmluZyA9IHRva2VuLnNwbGl0KFwiP1wiKVswXTsgc2V0VXNlcm5hbWUodSk7XG5cdFx0XHRjb25zdCBwOm51bGwgfCBzdHJpbmcgPSB0b2tlbi5zcGxpdChcIj9cIilbMV07IHNldFBhc3N3b3JkKHApO1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBwb3N0KFwiL3VzZXJzL2xvZ2luXCIsIEpTT04uc3RyaW5naWZ5KHt1c2VybmFtZTp1c2VybmFtZSwgZW1haWw6dXNlcm5hbWUsIHBhc3N3b3JkOnBhc3N3b3JkfSksIHRydWUpO1xuXHRcdFx0cmVzcG9uc2Uub25sb2FkID0gKCkgPT4ge1xuXHRcdFx0XHRpZiAocmVzcG9uc2UucmVzcG9uc2VUZXh0LmluY2x1ZGVzKFwiU3VjY2Vzc1wiKSl7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCJTdWNjZXNzZnVsbHkgYXV0aGVudGljYXRlZCB1c2VyXCIpXG5cdFx0XHRcdFx0c2V0QXV0aCh0cnVlKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRcblx0ZnVuY3Rpb24gc2V0QXV0aCh2YWw6IGJvb2xlYW4pe1xuXHRcdHNldEF1dGhlbnRpY2F0ZWQodmFsKTtcblx0fVxuXHRhdXRoZW50aWNhdGVfdXNlcigpO1xuXHRyZXR1cm4gKFxuXHRcdDxSb3V0ZXI+XG5cdFx0XHQ8R3JpZCBjb250YWluZXIgeHM9ezEyfSBjbGFzc05hbWU9e2NsYXNzZXMubWFpbkNvbnRhaW5lcn0+XG5cdFx0XHRcdDxIZWFkZXIgYXV0aD17YXV0aGVudGljYXRlZH0vPlxuXHRcdFx0XHQ8R3JpZCBpdGVtIGNvbnRhaW5lciB4cz17MTJ9IGp1c3RpZnk9XCJjZW50ZXJcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgPlxuXHRcdFx0XHRcdDxDb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc2VzLm1haW59PlxuXHRcdFx0XHRcdFx0PFN3aXRjaD5cblx0XHRcdFx0XHRcdFx0PFJvdXRlIGV4YWN0IHBhdGg9Jy8nIHJlbmRlcj17KHByb3BzKSA9PiAoPEluZGV4Lz4pfS8+XG5cdFx0XHRcdFx0XHRcdDxSb3V0ZSBwYXRoPScvRm9ydW0nIHJlbmRlcj17KHByb3BzKSA9PiAoPEZvcnVtIGF1dGhlbnRpY2F0ZWQ9e2F1dGhlbnRpY2F0ZWR9IG15X3VzZXJuYW1lPXt1c2VybmFtZX0gbXlfcGFzc3dvcmQ9e3Bhc3N3b3JkfSAvPil9Lz5cblx0XHRcdFx0XHRcdFx0PFJvdXRlIHBhdGg9Jy9Mb2dpbicgcmVuZGVyPXsocHJvcHMpID0+ICg8TG9naW4gYXV0aGVudGljYXRlPXthdXRoZW50aWNhdGVfdXNlcn0gLz4pfS8+XG5cdFx0XHRcdFx0XHRcdDxSb3V0ZSBwYXRoPScvUmVnaXN0ZXInIGNvbXBvbmVudD17UmVnaXN0ZXJ9IC8+XG5cdFx0XHRcdFx0XHRcdDxSb3V0ZSBwYXRoPScvQWJvdXQgdXMnIGNvbXBvbmVudD17QWJvdXR9IC8+XG5cdFx0XHRcdFx0XHRcdDxSb3V0ZSBwYXRoPScvQWNjb3VudCcgcmVuZGVyPXsocHJvcHMpID0+ICg8QWNjb3VudCByZW1vdmVBdXRoPXtzZXRBdXRofSB1c2VybmFtZT17dXNlcm5hbWV9IHBhc3N3b3JkPXtwYXNzd29yZH0vPil9Lz5cblx0XHRcdFx0XHRcdFx0PFJvdXRlIHBhdGg9Jy9Gb3J1bS9Qb3N0JyByZW5kZXI9eyhwcm9wcykgPT4gKDxQb3N0IGF1dGhlbnRpY2F0ZWQ9e2F1dGhlbnRpY2F0ZWR9IHVzZXJuYW1lPXt1c2VybmFtZX0gcGFzc3dvcmQ9e3Bhc3N3b3JkfS8+KX0vPlxuXHRcdFx0XHRcdFx0XHQ8Um91dGUgcGF0aD0nL0NvbnRhY3QnIGNvbXBvbmVudD17Q29udGFjdH0gLz5cblx0XHRcdFx0XHRcdFx0PFJvdXRlIHBhdGg9Jy9Qcm9qZWN0cycgY29tcG9uZW50PXtQcm9qZWN0c30gLz5cblx0XHRcdFx0XHRcdFx0PFJvdXRlIHBhdGg9Jy9TdXBwb3J0JyBjb21wb25lbnQ9e1N1cHBvcnR9IC8+XG5cdFx0XHRcdFx0XHQ8L1N3aXRjaD5cblx0XHRcdFx0XHQ8L0NvbnRhaW5lcj5cblx0XHRcdFx0PC9HcmlkPlxuXHRcdFx0XHQ8Rm9vdGVyLz5cblx0XHRcdDwvR3JpZD5cblx0XHQ8L1JvdXRlcj5cblx0KTtcbn1cblxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0IHsgcG9zdCwgZ2V0IH0gZnJvbSAnLi4vc3RhdGljL2F4aW9zJztcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXInO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzLCBUaGVtZSwgY3JlYXRlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IE1vZGFsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01vZGFsJztcclxuaW1wb3J0IEJhY2tkcm9wIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0JhY2tkcm9wJztcclxuaW1wb3J0IEZhZGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRmFkZSc7XHJcbmltcG9ydCBMaW5lYXJQcm9ncmVzcyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaW5lYXJQcm9ncmVzcyc7XHJcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XHJcbmltcG9ydCBGb3JtR3JvdXAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUdyb3VwJztcclxuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sJztcclxuaW1wb3J0IFJhZGlvIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1JhZGlvJztcclxuaW1wb3J0IFJhZGlvR3JvdXAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUmFkaW9Hcm91cCc7XHJcbmltcG9ydCBGb3JtSGVscGVyVGV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtSGVscGVyVGV4dCc7XHJcbmltcG9ydCBGb3JtQ29udHJvbExhYmVsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sTGFiZWwnO1xyXG5pbXBvcnQgRm9ybUxhYmVsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1MYWJlbCc7XHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCBTbmFjayBmcm9tICcuLi9zdGF0aWMvU25hY2snO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PlxyXG5cdGNyZWF0ZVN0eWxlcyh7XHJcblx0XHRtb2RhbDoge1xyXG5cdFx0XHRkaXNwbGF5OiAnZmxleCcsXHJcblx0XHRcdGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG5cdFx0XHRqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcblx0XHR9LFxyXG5cdFx0cGFwZXI6IHtcclxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXHJcblx0XHRcdGJvcmRlcjogJzJweCBzb2xpZCAjMDAwJyxcclxuXHRcdFx0Ym94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzVdLFxyXG5cdFx0XHRwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIsIDQsIDMpLFxyXG5cdFx0fSxcclxuXHRcdHJvb3Q6IHtcclxuXHRcdFx0d2lkdGg6ICcxMDAlJyxcclxuXHRcdFx0JyYgPiAqICsgKic6IHtcclxuXHRcdFx0XHRtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMiksXHJcblx0XHRcdH0sXHJcblx0XHR9LFxyXG5cdFx0dGV4dEZpZWxkOiB7XHJcblx0XHRcdG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMSksXHJcblx0XHRcdG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDEpLFxyXG5cdFx0XHR3aWR0aDogXCIxMDAlXCJcclxuXHRcdH0sXHJcblx0XHRmb3JtQ29udHJvbDoge1xyXG5cdFx0XHRtYXJnaW46IHRoZW1lLnNwYWNpbmcoMyksXHJcblx0XHR9LFxyXG5cdFx0aW5wdXRGb3JtOiB7XHJcblx0XHRcdHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuXHRcdFx0cGFkZGluZzogXCIzMHB4IDAgMCAwXCIsXHJcblx0XHRcdHdpZHRoOiBcIjEwMHZ3XCIsXHJcblx0XHRcdG1hcmdpbjogXCIwcHggYXV0byA1MHB4IGF1dG9cIixcclxuXHRcdH0sXHJcblx0XHRmb3JtOiB7XHJcblx0XHRcdG1hcmdpbjogXCIwcHggYXV0byAxMHB4IGF1dG9cIixcclxuXHRcdFx0d2lkdGg6IFwiMTAwJVwiXHJcblx0XHR9LFxyXG5cdFx0aW5wdXRGb3JtSW5wdXQ6IHtcclxuXHRcdFx0d2lkdGg6IFwiODUlXCIsXHJcblx0XHRcdGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXHJcblx0XHR9LFxyXG5cdFx0aW5wdXRGb3JtQnV0dG9uOiB7XHJcblx0XHRcdGhlaWdodDogXCIxMDAlXCIsXHJcblx0XHRcdG1hcmdpbjogXCIwcHhcIixcclxuXHRcdH1cclxuXHR9KSxcclxuKTtcclxuXHJcbmludGVyZmFjZSBQcm9ncmVzc1Byb3BzIHtcclxuXHRwcm9ncmVzc1ZhbHVlOiBudW1iZXI7XHJcbn1cclxuZnVuY3Rpb24gUHJvZ3Jlc3NCYXIocHJvcHM6IFByb2dyZXNzUHJvcHMpIHtcclxuXHRjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblx0Y29uc3QgW2NvbXBsZXRlZCwgc2V0Q29tcGxldGVkXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xyXG5cclxuXHRSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0ZnVuY3Rpb24gcHJvZ3Jlc3MoKSB7XHJcblx0XHRcdHNldENvbXBsZXRlZChvbGRDb21wbGV0ZWQgPT4ge1xyXG5cdFx0XHRcdGlmIChvbGRDb21wbGV0ZWQgPT09IDEwMCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIDA7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHJldHVybiBNYXRoLm1pbihwcm9wcy5wcm9ncmVzc1ZhbHVlLCAxMDApO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCB0aW1lciA9IHNldEludGVydmFsKHByb2dyZXNzLCA1MDApO1xyXG5cdFx0cmV0dXJuICgpID0+IHtcclxuICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcik7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICA8TGluZWFyUHJvZ3Jlc3MgdmFyaWFudD1cImRldGVybWluYXRlXCIgdmFsdWU9e2NvbXBsZXRlZH0gLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcblxyXG5pbnRlcmZhY2UgbG9hZGluZ01vZGFsUHJvcHMge1xyXG5cdHByb2dyZXNzOiBzdHJpbmc7XHJcblx0b25IaWRlOiAoKSA9PiB2b2lkO1xyXG5cdHNob3c6IGJvb2xlYW47XHJcbn1cclxuXHJcbmZ1bmN0aW9uIExvYWRpbmdNb2RhbChwcm9wczogbG9hZGluZ01vZGFsUHJvcHMpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuIFxyXG5cclxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcclxuICAgIHNldE9wZW4oZmFsc2UpO1xyXG4gIH07XHJcblx0aWYgKHByb3BzLnNob3cpe1xyXG5cdFx0c2V0T3Blbih0cnVlKTtcclxuXHR9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cInRyYW5zaXRpb24tbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJ0cmFuc2l0aW9uLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubW9kYWx9XHJcbiAgICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICBjbG9zZUFmdGVyVHJhbnNpdGlvblxyXG4gICAgICAgIEJhY2tkcm9wQ29tcG9uZW50PXtCYWNrZHJvcH1cclxuICAgICAgICBCYWNrZHJvcFByb3BzPXt7XHJcbiAgICAgICAgICB0aW1lb3V0OiA1MDAsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxGYWRlIGluPXtvcGVufT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfT5cclxuICAgICAgICAgICAgPGgyIGlkPVwidHJhbnNpdGlvbi1tb2RhbC10aXRsZVwiPkRvd25sb2FkaW5nIHlvdXIgZmlsZTwvaDI+XHJcblx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5Mb2FkaW5nPC9zcGFuPlxyXG5cdFx0XHQ8UHJvZ3Jlc3NCYXIgcHJvZ3Jlc3NWYWx1ZT17cGFyc2VJbnQocHJvcHMucHJvZ3Jlc3MpfS8+XHJcbiAgICAgICAgPGg0PkRvd25sb2FkaW5nLi4uIHtwcm9wcy5wcm9ncmVzc30gJTwvaDQ+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICBQbGVhc2Ugd2FpdCB3aGlsZSB5b3VyIGZpbGUgaXMgYmVpbmcgZG93bmxvYWRlZC4gRmVlbCBmcmVlIHRvIHVzZSB0aGlzIHNlcnZpY2UgYXMgbWFueVxyXG4gICAgICAgICAgdGltZXMgYXMgeW91IHdhbnQuPGJyLz5cclxuXHJcbiAgICAgICAgICBBIGJ1dHRvbiBsaW5rIHdpbGwgYmUgcHJvdmlkZWQgc2hvcnRseS4uLi5cclxuICAgICAgICA8L3A+XHJcblx0XHQ8QnV0dG9uIG9uQ2xpY2s9e3Byb3BzLm9uSGlkZX0+Q2xvc2U8L0J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvRmFkZT5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBTdWJtaXRGb3JtKCkge1xyXG5cdGNvbnN0IGNvbnRhaW5lclJlZjphbnkgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuXHRjb25zdCBnZXRSZWY6IGFueSA9IFJlYWN0LmNyZWF0ZVJlZigpO1xyXG5cdGNvbnN0IHdhcm5pbmdSZWY6IGFueSA9IFJlYWN0LmNyZWF0ZVJlZigpO1xyXG5cdGNvbnN0IGRvd25sb2FkQnRuUmVmOiBhbnkgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuXHRcclxuXHRjb25zdCBbZXh0LCBzZXRFeHRdID0gUmVhY3QudXNlU3RhdGUoXCJtcDRcIik7XHJcblx0Y29uc3QgW3R5cGUsIHNldFR5cGVdID0gUmVhY3QudXNlU3RhdGUoXCJBdWRpb1wiKTtcclxuXHRjb25zdCBbc2hvd0xvYWRpbmcsIHNldFNob3dMb2FkaW5nXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBbbG9hZGluZ1Byb2dyZXNzLCBzZXRMb2FkaW5nUHJvZ3Jlc3NdID0gUmVhY3QudXNlU3RhdGUoXCIwXCIpO1xyXG5cdGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG5cdGNvbnN0IFt2YXJpZW50LCBzZXRWYXJpZW50XSA9IFJlYWN0LnVzZVN0YXRlPFwic3VjY2Vzc1wiIHwgXCJlcnJvclwiIHwgXCJ3YXJuaW5nXCIgfCBcImluZm9cIj4oXCJpbmZvXCIpO1xyXG5cdGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZVR5cGUgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XHJcbiAgICBzZXRUeXBlKChldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUpO1xyXG4gIH07XHJcblx0Y29uc3QgaGFuZGxlQ2hhbmdlRXh0ID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xyXG4gICAgc2V0RXh0KChldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUpO1xyXG4gIH07XHRcclxuXHRcclxuXHQgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlQWxlcnRTaG93IChldmVudDogYW55LCBzaG93OiBib29sZWFuKSB7XHJcblx0XHRzZXRPcGVuKHNob3cpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gb3BlbkhhbmRsZXIodmFsOiBib29sZWFuKSB7XHJcbiAgICAgICAgc2V0T3Blbih2YWwpO1xyXG4gICAgfVxyXG5cdGZ1bmN0aW9uIGdldCAoZTogYW55KSB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRzZXRPcGVuKGZhbHNlKTtcclxuXHRcdHZhciB3YXJuaW5nID0gd2FybmluZ1JlZi5jdXJyZW50O1xyXG4gICAgICAgIHZhciBVUkxpbnB1dCA9IGdldFJlZi5jdXJyZW50LnZhbHVlLnNwbGl0KFwiPVwiKVsxXTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImFzIFwiICsgVVJMaW5wdXQgKyBcIiwgXCIgKyB0eXBlICsgXCIsIFwiICsgZXh0KVxyXG5cdFx0aWYgKFVSTGlucHV0ID09PSB1bmRlZmluZWQgfHwgbnVsbCl7XHJcblx0XHRcdHNldFZhcmllbnQoXCJ3YXJuaW5nXCIpO1xyXG5cdFx0XHRzZXRNZXNzYWdlKFwiSW52YWxpZCB1cmwgdHJ5IGFub3RoZXIgb3IgbG9vayBjYXJlZnVsbHkgdG8gY29ycmVjdCBpdC5cIik7XHJcblx0XHRcdHNldE9wZW4odHJ1ZSk7XHJcblx0ICBcdH0gZWxzZSB7XHJcbiAgICAgICAgICAgIFxyXG5cdFx0XHRjb25zdCByZXNwb25zZSA9IHBvc3QoXCIvZG93bmxvYWRcIiwgSlNPTi5zdHJpbmdpZnkoe3VybDpVUkxpbnB1dCwgdHlwZTp0eXBlLCBleHRlbnNpb246ZXh0fSksIHRydWUpO1xyXG5cdFx0XHRyZXNwb25zZS5vbmxvYWQgPSAoKSA9PiB7XHJcblx0XHRcdFx0dmFyIHNzZTpFdmVudFNvdXJjZSA9IG5ldyBFdmVudFNvdXJjZShcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9kb3dubG9hZC9zc2VcIik7XHJcblx0XHQgIFx0XHRzc2Uub25vcGVuID0gKCkgPT4ge1xyXG5cdFx0XHRcdFx0c2V0U2hvd0xvYWRpbmcodHJ1ZSk7XHJcblx0XHQgIFx0XHR9XHJcblx0ICBcdFx0XHRzc2Uub25tZXNzYWdlID0gZXZ0ID0+IHtcclxuXHRcdFx0XHRcdHNldExvYWRpbmdQcm9ncmVzcyhldnQuZGF0YSk7XHJcblx0ICAgICAgICBcdFx0aWYgKGV2dC5kYXRhID09PSBcIjEwMFwiKXtcclxuXHRcdFx0XHRcdFx0c2V0U2hvd0xvYWRpbmcoZmFsc2UpXHJcblx0ICAgICAgICAgIFx0XHRcdHZhciB1cmw6c3RyaW5nID0gXCJodHRwOi8vbG9jYWxob3N0OjgwODAvZG93bmxvYWQvdmlkZW8vXCIgKyBVUkxpbnB1dDtcclxuXHQgICAgICAgICAgXHRcdFx0ZG93bmxvYWRCdG5SZWYuY3VycmVudC52YWx1ZSA9IHVybDtcclxuXHQgICAgICAgICAgXHRcdFx0Y29udGFpbmVyUmVmLmN1cnJlbnQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuXHQgICAgICAgICAgXHRcdFx0c3NlLmNsb3NlKCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHNzZS5vbmVycm9yID0gKCkgPT4ge1xyXG4gIFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIkV2ZW50U291cmNlIGZhaWxlZC5cIik7XHJcblx0XHRcdFx0XHRzZXRTaG93TG9hZGluZyhmYWxzZSk7XHJcblx0XHRcdFx0XHR3YXJuaW5nLmlubmVySFRNTCA9IFwiRmFpbGVkIHRvIGVzdGFibGlzaCBjb25uZWN0aW9uIHRvIHNlcnZlclwiO1xyXG4gIFx0XHRcdFx0XHR3YXJuaW5nLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgXHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiQ2xvc2luZyBjb25uZWN0b24uLi5cIik7XHJcbiAgXHRcdFx0XHRcdHNzZS5jbG9zZSgpO1xyXG4gIFx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcbiAgXHRcdH1cclxuICBcdH1cclxuICBcdGZ1bmN0aW9uIGRvd25sb2FkRnJvbVNlcnZlciAoKSB7XHJcbiAgICBcdHZhciB1cmw6c3RyaW5nID0gZG93bmxvYWRCdG5SZWYuY3VycmVudC52YWx1ZTtcclxuICAgIFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XHJcblx0fVxyXG5cdHJldHVybiAoXHJcblx0XHQ8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDxTbmFjayBvcGVuSGFuZGxlcj17b3BlbkhhbmRsZXJ9IG9wZW49e29wZW59IHZhcmllbnQ9e3ZhcmllbnR9IG1lc3NhZ2U9e21lc3NhZ2V9Lz5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHhzPXsxMn0gPlxyXG4gICAgICAgICAgICAgICAgPExvYWRpbmdNb2RhbCBwcm9ncmVzcz17bG9hZGluZ1Byb2dyZXNzfSBzaG93PXtzaG93TG9hZGluZ30gb25IaWRlPXsoKSA9PiBzZXRTaG93TG9hZGluZyhmYWxzZSl9Lz5cclxuICAgICAgICAgICAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmlucHV0Rm9ybX0+XHJcblx0XHRcdFx0ICAgIDxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtfT5cclxuXHRcdFx0XHRcdCAgICA8Rm9ybUdyb3VwPlxyXG5cdFx0XHRcdFx0XHQgICAgPEdyaWQgY29udGFpbmVyIHhzPXsxMn0+XHJcblx0XHRcdFx0XHRcdFx0ICAgIDxHcmlkIGl0ZW0geHM9ezEwfT5cclxuXHRcdFx0XHRcdFx0XHRcdCAgICA8VGV4dEZpZWxkXHJcblx0XHRcdFx0XHRcdFx0XHRcdCAgICBpbnB1dFJlZj17Z2V0UmVmfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQgICAgaWQ9XCJzdGFuZGFyZC1iYXNpY1wiXHJcblx0XHRcdFx0XHRcdFx0XHRcdCAgICBjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQgICAgbGFiZWw9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdCAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG5cdFx0XHRcdFx0XHRcdFx0ICAgIC8+XHJcblx0XHRcdFx0XHRcdFx0ICAgIDwvR3JpZD5cclxuXHRcdFx0XHRcdFx0XHQgICAgPEdyaWQgY29udGFpbmVyIHhzPXsyfSAganVzdGlmeT1cImZsZXgtc3RhcnRcIiBhbGlnbkl0ZW1zPVwiZmxleC1zdGFydFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0ICAgIDxCdXR0b24gcmVmPXtnZXRSZWZ9IG9uQ2xpY2s9e2dldH0gY2xhc3NOYW1lPXtjbGFzc2VzLmlucHV0Rm9ybUJ1dHRvbn0gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwicHJpbWFyeVwiPkdFVDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdCAgICA8L0dyaWQ+XHJcblx0XHRcdFx0XHRcdCAgICA8L0dyaWQ+XHJcblx0XHRcdFx0XHQgICAgPC9Gb3JtR3JvdXA+XHJcblx0XHRcdFx0XHQgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciB4cz17MTJ9PlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fT5cclxuXHRcdFx0XHRcdFx0ICAgICAgICAgICAgPEZvcm1Db250cm9sIGNvbXBvbmVudD1cImZpZWxkc2V0XCIgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1Db250cm9sfT5cclxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgPEZvcm1MYWJlbCBjb21wb25lbnQ9XCJsZWdlbmRcIj5EYXRhIFR5cGU8L0Zvcm1MYWJlbD5cclxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgPFJhZGlvR3JvdXAgYXJpYS1sYWJlbD1cImdlbmRlclwiIG5hbWU9XCJnZW5kZXIxXCIgdmFsdWU9e3R5cGV9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VUeXBlfSByb3c+XHJcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWwgdmFsdWU9XCJBdWRpb1wiIGNvbnRyb2w9ezxSYWRpbyAgY29sb3I9XCJwcmltYXJ5XCIgLz59IGxhYmVsPVwiQXVkaW9cIiBsYWJlbFBsYWNlbWVudD1cInN0YXJ0XCIvPlxyXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsIHZhbHVlPVwiVmlkZW9cIiBjb250cm9sPXs8UmFkaW8gIGNvbG9yPVwicHJpbWFyeVwiIC8+fSBsYWJlbD1cIlZpZGVvXCIgbGFiZWxQbGFjZW1lbnQ9XCJzdGFydFwiLz5cclxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgPC9SYWRpb0dyb3VwPlxyXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuXHRcdFx0XHRcdFx0ICAgICAgICAgICAgPEZvcm1Db250cm9sIGNvbXBvbmVudD1cImZpZWxkc2V0XCIgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1Db250cm9sfT5cclxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgPEZvcm1MYWJlbCBjb21wb25lbnQ9XCJsZWdlbmRcIj5GaWxlIFR5cGU8L0Zvcm1MYWJlbD5cclxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgPFJhZGlvR3JvdXAgYXJpYS1sYWJlbD1cImdlbmRlclwiIG5hbWU9XCJnZW5kZXIyXCIgdmFsdWU9e2V4dH0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZUV4dH0gcm93PlxyXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsIHZhbHVlPVwibXA0XCIgY29udHJvbD17PFJhZGlvIC8+fSBsYWJlbD1cIm1wNFwiIGxhYmVsUGxhY2VtZW50PVwic3RhcnRcIi8+XHJcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWwgdmFsdWU9XCJtcDNcIiBjb250cm9sPXs8UmFkaW8gLz59IGxhYmVsPVwibXAzXCIgbGFiZWxQbGFjZW1lbnQ9XCJzdGFydFwiLz5cclxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbCB2YWx1ZT1cIndhdlwiIGNvbnRyb2w9ezxSYWRpbyAvPn0gbGFiZWw9XCJ3YXZcIiBsYWJlbFBsYWNlbWVudD1cInN0YXJ0XCIvPlxyXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsIHZhbHVlPVwid2VibVwiIGNvbnRyb2w9ezxSYWRpbyAvPn0gbGFiZWw9XCJ3ZWJtXCIgbGFiZWxQbGFjZW1lbnQ9XCJzdGFydFwiLz5cclxuXHRcdFx0XHRcdFx0XHRcdCAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsIHZhbHVlPVwiZmx2XCIgY29udHJvbD17PFJhZGlvIC8+fSBsYWJlbD1cImZsdlwiIGxhYmVsUGxhY2VtZW50PVwic3RhcnRcIi8+XHJcblx0XHRcdFx0XHRcdFx0XHQgICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbCB2YWx1ZT1cImhsc1wiIGNvbnRyb2w9ezxSYWRpbyAvPn0gbGFiZWw9XCJobHNcIiBsYWJlbFBsYWNlbWVudD1cInN0YXJ0XCIvPlxyXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICA8L1JhZGlvR3JvdXA+XHJcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcblx0ICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgeHM9ezEyfT5cclxuXHQgICAgICAgICAgICAgICAgICAgIDxHcmlkIHhzPXs0fT5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgPENvbnRhaW5lciBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIn19IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiIHJlZj17Y29udGFpbmVyUmVmfT5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwic2Vjb25kYXJ5XCIgcmVmPXtkb3dubG9hZEJ0blJlZn0gb25DbGljaz17ZG93bmxvYWRGcm9tU2VydmVyfT5Eb3dubG9hZDwvQnV0dG9uPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuXHQgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblx0ICAgICAgICAgICAgPC9Db250YWluZXI+XHJcblx0XHRcdDwvR3JpZD5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG5cdCk7XHJcbn1cclxuY2xhc3MgSW5mb1BhbmVsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHRyZW5kZXIoKXtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxQYXBlcj5cclxuXHRcdFx0XHQ8Q29udGFpbmVyPlxyXG5cdFx0XHRcdFx0PFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCIgY29tcG9uZW50PVwiaDNcIj5cclxuXHRcdFx0XHRcdFx0PGk+VGhpcyBzaXRlIGlzIHVuZGVyIGNvbnN0cnVjdGlvbi48L2k+XHJcblx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XHJcblx0XHRcdFx0XHQ8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJwXCI+XHJcblx0XHRcdFx0XHRcdFRoZSBtYWluIHJlYXNvbiBmb3IgdGhpcyBzaXRlIGlzIHRvIGRvd25sb2FkIGF1ZGlvIGZpbGVzIGZyb20geW91dHViZS8gc29vbiB3aWxsIHN1cHBvcnQgbW9yZVxyXG5cdFx0XHRcdFx0XHRzaXRlcyBhbmQgcG9zc2libHkgdGhlIGFiaWxpdHkgdG8gZG93bmxvYWQgdGhlIHdob2xlIHZpZGVvIGluY2x1ZGluZyB2aXN1YWwgYW5kIGF1ZGlvLiBkZXBlbmRpbmcgb25cclxuXHRcdFx0XHRcdFx0d2hhdCBwZW9wbGUgd2FudDxici8+PGJyLz48YnIvPlxyXG5cdFx0XHRcdFx0XHRUZXN0aW5nIFVSTDogaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1wY1BpNGpQQVIyY1xyXG5cdFx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxyXG5cdFx0XHRcdDwvQ29udGFpbmVyPlxyXG5cdFx0XHQ8L1BhcGVyPlxyXG5cdFx0KVxyXG5cdH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblx0cmVuZGVyKCl7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8UmVhY3QuRnJhZ21lbnQ+XHJcblx0XHRcdFx0PFN1Ym1pdEZvcm0vPlxyXG5cdFx0XHRcdDxJbmZvUGFuZWwvPlxyXG5cdFx0XHQ8L1JlYWN0LkZyYWdtZW50PlxyXG5cdFx0KTtcclxuXHR9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==