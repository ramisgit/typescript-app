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
        react_1.default.createElement(Modal_1.default, { "aria-labelledby": "transition-modal-title", "aria-describedby": "transition-modal-description", className: classes.modal, open: props.show, onClose: handleClose, closeAfterTransition: true, BackdropComponent: Backdrop_1.default, BackdropProps: {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91bWQvLi9zcmMvQXBwLnRzeCIsIndlYnBhY2s6Ly91bWQvLi9zcmMvY29tcG9uZW50cy9wYWdlcy9JbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUdBQTBCO0FBRTFCLGtJQUEwRTtBQUMxRSx1SkFBb0Q7QUFFcEQsOEhBQWdEO0FBQ2hELDhIQUFnRDtBQUNoRCx5SEFBNkM7QUFDN0Msd0lBQTBDO0FBQzFDLGtJQUFtRDtBQUNuRCx5SEFBNkM7QUFDN0MsK0hBQWlEO0FBQ2pELCtIQUFpRDtBQUNqRCxrSUFBbUQ7QUFDbkQsK0hBQWlEO0FBQ2pELHlIQUE2QztBQUM3Qyx5R0FBK0M7QUFDL0Msc0hBQTJDO0FBQzNDLHlIQUE2QztBQUU3Qyw2SEFBMkU7QUFHM0UsTUFBTSxTQUFTLEdBQUcsbUJBQVUsQ0FBQyxDQUFDLEtBQVksRUFBRSxFQUFFLENBQzdDLHFCQUFZLENBQUM7SUFDWixTQUFTLEVBQUU7UUFDVixLQUFLLEVBQUUsT0FBTztRQUNkLFdBQVcsRUFBRSxNQUFNO0tBQ25CO0lBQ0QsSUFBSSxFQUFFO1FBQ0wsUUFBUSxFQUFFLFFBQVE7UUFDbEIsZUFBZSxFQUFFLE9BQU87UUFDeEIsU0FBUyxFQUFFLE9BQU87UUFDbEIsT0FBTyxFQUFFLG9CQUFvQjtLQUM3QjtJQUNELGFBQWEsRUFBRTtRQUNkLGVBQWUsRUFBRSx3REFBd0Q7UUFDekUsU0FBUyxFQUFFLE9BQU87UUFDbEIsT0FBTyxFQUFFLEtBQUs7UUFDZCxNQUFNLEVBQUUsS0FBSztLQUNiO0NBQ0QsQ0FBQyxDQUVGLENBQUM7QUFFRixTQUF3QixHQUFHO0lBQzFCLE1BQU0sT0FBTyxHQUFHLFNBQVMsRUFBRSxDQUFDO0lBRTVCLE1BQU0sQ0FBQyxhQUFhLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxlQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hFLE1BQU0sQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFD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YmY2YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIsIFJvdXRlLCBTd2l0Y2ggfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyJztcblxuaW1wb3J0IEhlYWRlciBmcm9tICcuL2NvbXBvbmVudHMvbGF5b3V0L0hlYWRlcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vY29tcG9uZW50cy9sYXlvdXQvRm9vdGVyJztcbmltcG9ydCBBYm91dCBmcm9tICcuL2NvbXBvbmVudHMvcGFnZXMvQWJvdXQnO1xuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XG5pbXBvcnQgUmVnaXN0ZXIgZnJvbSAnLi9jb21wb25lbnRzL3BhZ2VzL1JlZ2lzdGVyJztcbmltcG9ydCBJbmRleCBmcm9tICcuL2NvbXBvbmVudHMvcGFnZXMvSW5kZXgnO1xuaW1wb3J0IENvbnRhY3QgZnJvbSAnLi9jb21wb25lbnRzL3BhZ2VzL0NvbnRhY3QnO1xuaW1wb3J0IEFjY291bnQgZnJvbSAnLi9jb21wb25lbnRzL3BhZ2VzL0FjY291bnQnO1xuaW1wb3J0IFByb2plY3RzIGZyb20gJy4vY29tcG9uZW50cy9wYWdlcy9Qcm9qZWN0cyc7XG5pbXBvcnQgU3VwcG9ydCBmcm9tICcuL2NvbXBvbmVudHMvcGFnZXMvU3VwcG9ydCc7XG5pbXBvcnQgRm9ydW0gZnJvbSAnLi9jb21wb25lbnRzL3BhZ2VzL0ZvcnVtJztcbmltcG9ydCB7cG9zdH0gZnJvbSAnLi9jb21wb25lbnRzL3N0YXRpYy9heGlvcyc7XG5pbXBvcnQgUG9zdCBmcm9tICcuL2NvbXBvbmVudHMvcGFnZXMvUG9zdCc7XG5pbXBvcnQgTG9naW4gZnJvbSAnLi9jb21wb25lbnRzL3BhZ2VzL0xvZ2luJztcblxuaW1wb3J0IHsgbWFrZVN0eWxlcywgVGhlbWUsIGNyZWF0ZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5cblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PlxuXHRjcmVhdGVTdHlsZXMoe1xuXHRcdHBhcmFncmFwaDoge1xuXHRcdFx0Y29sb3I6IFwid2hpdGVcIixcblx0XHRcdHBhZGRpbmdMZWZ0OiBcIjIwcHhcIlxuXHRcdH0sXG5cdFx0bWFpbjoge1xuXHRcdFx0bWF4V2lkdGg6IFwiMTE0MHB4XCIsXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIixcblx0XHRcdG1pbkhlaWdodDogXCIxMDB2aFwiLFxuXHRcdFx0cGFkZGluZzogXCI5MHB4IDMwcHggMHB4IDMwcHhcIlxuXHRcdH0sXG5cdFx0bWFpbkNvbnRhaW5lcjoge1xuXHRcdFx0YmFja2dyb3VuZEltYWdlOiBcInVybChodHRwOi8vbG9jYWxob3N0OjgwODAvdXBsb2FkL2ZpbGVzL2JhY2tncm91bmQuanBnKVwiLFxuXHRcdFx0bWluSGVpZ2h0OiBcIjEwMHZoXCIsXG5cdFx0XHRwYWRkaW5nOiBcIjBweFwiLFxuXHRcdFx0bWFyZ2luOiBcIjBweFwiXG5cdFx0fVxuXHR9KSxcblx0XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAgKCkge1xuXHRjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG5cdFxuXHRjb25zdCBbYXV0aGVudGljYXRlZCwgc2V0QXV0aGVudGljYXRlZF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG5cdGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG5cdGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG5cdFxuXHRmdW5jdGlvbiBhdXRoZW50aWNhdGVfdXNlcigpe1xuXHRcdGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XG5cdFx0Y29uc29sZS5sb2coXCJBdXRoZW50aWNhdGluZyB1c2VyIGF0IHRvcCBsYXllclwiKVxuXHRcdGlmICh0b2tlbikge1xuXHRcdFx0Y29uc3QgdTpudWxsIHwgc3RyaW5nID0gdG9rZW4uc3BsaXQoXCI/XCIpWzBdOyBzZXRVc2VybmFtZSh1KTtcblx0XHRcdGNvbnN0IHA6bnVsbCB8IHN0cmluZyA9IHRva2VuLnNwbGl0KFwiP1wiKVsxXTsgc2V0UGFzc3dvcmQocCk7XG5cdFx0XHRjb25zdCByZXNwb25zZSA9IHBvc3QoXCIvdXNlcnMvbG9naW5cIiwgSlNPTi5zdHJpbmdpZnkoe3VzZXJuYW1lOnVzZXJuYW1lLCBlbWFpbDp1c2VybmFtZSwgcGFzc3dvcmQ6cGFzc3dvcmR9KSwgdHJ1ZSk7XG5cdFx0XHRyZXNwb25zZS5vbmxvYWQgPSAoKSA9PiB7XG5cdFx0XHRcdGlmIChyZXNwb25zZS5yZXNwb25zZVRleHQuaW5jbHVkZXMoXCJTdWNjZXNzXCIpKXtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIlN1Y2Nlc3NmdWxseSBhdXRoZW50aWNhdGVkIHVzZXJcIilcblx0XHRcdFx0XHRzZXRBdXRoKHRydWUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdFxuXHRmdW5jdGlvbiBzZXRBdXRoKHZhbDogYm9vbGVhbil7XG5cdFx0c2V0QXV0aGVudGljYXRlZCh2YWwpO1xuXHR9XG5cdGF1dGhlbnRpY2F0ZV91c2VyKCk7XG5cdHJldHVybiAoXG5cdFx0PFJvdXRlcj5cblx0XHRcdDxHcmlkIGNvbnRhaW5lciB4cz17MTJ9IGNsYXNzTmFtZT17Y2xhc3Nlcy5tYWluQ29udGFpbmVyfT5cblx0XHRcdFx0PEhlYWRlciBhdXRoPXthdXRoZW50aWNhdGVkfS8+XG5cdFx0XHRcdDxHcmlkIGl0ZW0gY29udGFpbmVyIHhzPXsxMn0ganVzdGlmeT1cImNlbnRlclwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIiA+XG5cdFx0XHRcdFx0PENvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMubWFpbn0+XG5cdFx0XHRcdFx0XHQ8U3dpdGNoPlxuXHRcdFx0XHRcdFx0XHQ8Um91dGUgZXhhY3QgcGF0aD0nLycgcmVuZGVyPXsocHJvcHMpID0+ICg8SW5kZXgvPil9Lz5cblx0XHRcdFx0XHRcdFx0PFJvdXRlIHBhdGg9Jy9Gb3J1bScgcmVuZGVyPXsocHJvcHMpID0+ICg8Rm9ydW0gYXV0aGVudGljYXRlZD17YXV0aGVudGljYXRlZH0gbXlfdXNlcm5hbWU9e3VzZXJuYW1lfSBteV9wYXNzd29yZD17cGFzc3dvcmR9IC8+KX0vPlxuXHRcdFx0XHRcdFx0XHQ8Um91dGUgcGF0aD0nL0xvZ2luJyByZW5kZXI9eyhwcm9wcykgPT4gKDxMb2dpbiBhdXRoZW50aWNhdGU9e2F1dGhlbnRpY2F0ZV91c2VyfSAvPil9Lz5cblx0XHRcdFx0XHRcdFx0PFJvdXRlIHBhdGg9Jy9SZWdpc3RlcicgY29tcG9uZW50PXtSZWdpc3Rlcn0gLz5cblx0XHRcdFx0XHRcdFx0PFJvdXRlIHBhdGg9Jy9BYm91dCB1cycgY29tcG9uZW50PXtBYm91dH0gLz5cblx0XHRcdFx0XHRcdFx0PFJvdXRlIHBhdGg9Jy9BY2NvdW50JyByZW5kZXI9eyhwcm9wcykgPT4gKDxBY2NvdW50IHJlbW92ZUF1dGg9e3NldEF1dGh9IHVzZXJuYW1lPXt1c2VybmFtZX0gcGFzc3dvcmQ9e3Bhc3N3b3JkfS8+KX0vPlxuXHRcdFx0XHRcdFx0XHQ8Um91dGUgcGF0aD0nL0ZvcnVtL1Bvc3QnIHJlbmRlcj17KHByb3BzKSA9PiAoPFBvc3QgYXV0aGVudGljYXRlZD17YXV0aGVudGljYXRlZH0gdXNlcm5hbWU9e3VzZXJuYW1lfSBwYXNzd29yZD17cGFzc3dvcmR9Lz4pfS8+XG5cdFx0XHRcdFx0XHRcdDxSb3V0ZSBwYXRoPScvQ29udGFjdCcgY29tcG9uZW50PXtDb250YWN0fSAvPlxuXHRcdFx0XHRcdFx0XHQ8Um91dGUgcGF0aD0nL1Byb2plY3RzJyBjb21wb25lbnQ9e1Byb2plY3RzfSAvPlxuXHRcdFx0XHRcdFx0XHQ8Um91dGUgcGF0aD0nL1N1cHBvcnQnIGNvbXBvbmVudD17U3VwcG9ydH0gLz5cblx0XHRcdFx0XHRcdDwvU3dpdGNoPlxuXHRcdFx0XHRcdDwvQ29udGFpbmVyPlxuXHRcdFx0XHQ8L0dyaWQ+XG5cdFx0XHRcdDxGb290ZXIvPlxuXHRcdFx0PC9HcmlkPlxuXHRcdDwvUm91dGVyPlxuXHQpO1xufVxuXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQgeyBwb3N0LCBnZXR9IGZyb20gJy4uL3N0YXRpYy9heGlvcyc7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcywgVGhlbWUsIGNyZWF0ZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBNb2RhbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Nb2RhbCc7XHJcbmltcG9ydCBCYWNrZHJvcCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CYWNrZHJvcCc7XHJcbmltcG9ydCBGYWRlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ZhZGUnO1xyXG5pbXBvcnQgTGluZWFyUHJvZ3Jlc3MgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGluZWFyUHJvZ3Jlc3MnO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xyXG5pbXBvcnQgRm9ybUdyb3VwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1Hcm91cCc7XHJcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbCc7XHJcbmltcG9ydCBSYWRpbyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9SYWRpbyc7XHJcbmltcG9ydCBSYWRpb0dyb3VwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1JhZGlvR3JvdXAnO1xyXG5pbXBvcnQgRm9ybUhlbHBlclRleHQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUhlbHBlclRleHQnO1xyXG5pbXBvcnQgRm9ybUNvbnRyb2xMYWJlbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbExhYmVsJztcclxuaW1wb3J0IEZvcm1MYWJlbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtTGFiZWwnO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgU25hY2sgZnJvbSAnLi4vc3RhdGljL1NuYWNrJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lOiBUaGVtZSkgPT5cclxuXHRjcmVhdGVTdHlsZXMoe1xyXG5cdFx0bW9kYWw6IHtcclxuXHRcdFx0ZGlzcGxheTogJ2ZsZXgnLFxyXG5cdFx0XHRhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuXHRcdFx0anVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG5cdFx0fSxcclxuXHRcdHBhcGVyOiB7XHJcblx0XHRcdGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxyXG5cdFx0XHRib3JkZXI6ICcycHggc29saWQgIzAwMCcsXHJcblx0XHRcdGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1s1XSxcclxuXHRcdFx0cGFkZGluZzogdGhlbWUuc3BhY2luZygyLCA0LCAzKSxcclxuXHRcdH0sXHJcblx0XHRyb290OiB7XHJcblx0XHRcdHdpZHRoOiAnMTAwJScsXHJcblx0XHRcdCcmID4gKiArIConOiB7XHJcblx0XHRcdFx0bWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHRcdHRleHRGaWVsZDoge1xyXG5cdFx0XHRtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDEpLFxyXG5cdFx0XHRtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygxKSxcclxuXHRcdFx0d2lkdGg6IFwiMTAwJVwiXHJcblx0XHR9LFxyXG5cdFx0Zm9ybUNvbnRyb2w6IHtcclxuXHRcdFx0bWFyZ2luOiB0aGVtZS5zcGFjaW5nKDMpLFxyXG5cdFx0fSxcclxuXHRcdGlucHV0Rm9ybToge1xyXG5cdFx0XHR0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcblx0XHRcdHBhZGRpbmc6IFwiMzBweCAwIDAgMFwiLFxyXG5cdFx0XHR3aWR0aDogXCIxMDB2d1wiLFxyXG5cdFx0XHRtYXJnaW46IFwiMHB4IGF1dG8gNTBweCBhdXRvXCIsXHJcblx0XHR9LFxyXG5cdFx0Zm9ybToge1xyXG5cdFx0XHRtYXJnaW46IFwiMHB4IGF1dG8gMTBweCBhdXRvXCIsXHJcblx0XHRcdHdpZHRoOiBcIjEwMCVcIlxyXG5cdFx0fSxcclxuXHRcdGlucHV0Rm9ybUlucHV0OiB7XHJcblx0XHRcdHdpZHRoOiBcIjg1JVwiLFxyXG5cdFx0XHRkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxyXG5cdFx0fSxcclxuXHRcdGlucHV0Rm9ybUJ1dHRvbjoge1xyXG5cdFx0XHRoZWlnaHQ6IFwiMTAwJVwiLFxyXG5cdFx0XHRtYXJnaW46IFwiMHB4XCIsXHJcblx0XHR9XHJcblx0fSksXHJcbik7XHJcblxyXG5pbnRlcmZhY2UgUHJvZ3Jlc3NQcm9wcyB7XHJcblx0cHJvZ3Jlc3NWYWx1ZTogbnVtYmVyO1xyXG59XHJcbmZ1bmN0aW9uIFByb2dyZXNzQmFyKHByb3BzOiBQcm9ncmVzc1Byb3BzKSB7XHJcblx0Y29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cdGNvbnN0IFtjb21wbGV0ZWQsIHNldENvbXBsZXRlZF0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcclxuXHJcblx0UmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGZ1bmN0aW9uIHByb2dyZXNzKCkge1xyXG5cdFx0XHRzZXRDb21wbGV0ZWQob2xkQ29tcGxldGVkID0+IHtcclxuXHRcdFx0XHRpZiAob2xkQ29tcGxldGVkID09PSAxMDApIHtcclxuXHRcdFx0XHRcdHJldHVybiAwO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gTWF0aC5taW4ocHJvcHMucHJvZ3Jlc3NWYWx1ZSwgMTAwKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgdGltZXIgPSBzZXRJbnRlcnZhbChwcm9ncmVzcywgNTAwKTtcclxuXHRcdHJldHVybiAoKSA9PiB7XHJcbiAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgPExpbmVhclByb2dyZXNzIHZhcmlhbnQ9XCJkZXRlcm1pbmF0ZVwiIHZhbHVlPXtjb21wbGV0ZWR9IC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5cclxuaW50ZXJmYWNlIGxvYWRpbmdNb2RhbFByb3BzIHtcclxuXHRwcm9ncmVzczogc3RyaW5nO1xyXG5cdG9uSGlkZTogKCkgPT4gdm9pZDtcclxuXHRzaG93OiBib29sZWFuO1xyXG59XHJcblxyXG5mdW5jdGlvbiBMb2FkaW5nTW9kYWwocHJvcHM6IGxvYWRpbmdNb2RhbFByb3BzKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cInRyYW5zaXRpb24tbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJ0cmFuc2l0aW9uLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubW9kYWx9XHJcbiAgICAgICAgb3Blbj17cHJvcHMuc2hvd31cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICBjbG9zZUFmdGVyVHJhbnNpdGlvblxyXG4gICAgICAgIEJhY2tkcm9wQ29tcG9uZW50PXtCYWNrZHJvcH1cclxuICAgICAgICBCYWNrZHJvcFByb3BzPXt7XHJcbiAgICAgICAgICB0aW1lb3V0OiA1MDAsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxGYWRlIGluPXtvcGVufT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfT5cclxuICAgICAgICAgICAgPGgyIGlkPVwidHJhbnNpdGlvbi1tb2RhbC10aXRsZVwiPkRvd25sb2FkaW5nIHlvdXIgZmlsZTwvaDI+XHJcblx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5Mb2FkaW5nPC9zcGFuPlxyXG5cdFx0XHQ8UHJvZ3Jlc3NCYXIgcHJvZ3Jlc3NWYWx1ZT17cGFyc2VJbnQocHJvcHMucHJvZ3Jlc3MpfS8+XHJcbiAgICAgICAgPGg0PkRvd25sb2FkaW5nLi4uIHtwcm9wcy5wcm9ncmVzc30gJTwvaDQ+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICBQbGVhc2Ugd2FpdCB3aGlsZSB5b3VyIGZpbGUgaXMgYmVpbmcgZG93bmxvYWRlZC4gRmVlbCBmcmVlIHRvIHVzZSB0aGlzIHNlcnZpY2UgYXMgbWFueVxyXG4gICAgICAgICAgdGltZXMgYXMgeW91IHdhbnQuPGJyLz5cclxuXHJcbiAgICAgICAgICBBIGJ1dHRvbiBsaW5rIHdpbGwgYmUgcHJvdmlkZWQgc2hvcnRseS4uLi5cclxuICAgICAgICA8L3A+XHJcblx0XHQ8QnV0dG9uIG9uQ2xpY2s9e3Byb3BzLm9uSGlkZX0+Q2xvc2U8L0J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvRmFkZT5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBTdWJtaXRGb3JtKCkge1xyXG5cdGNvbnN0IGNvbnRhaW5lclJlZjphbnkgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuXHRjb25zdCBnZXRSZWY6IGFueSA9IFJlYWN0LmNyZWF0ZVJlZigpO1xyXG5cdGNvbnN0IGRvd25sb2FkQnRuUmVmOiBhbnkgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuXHRcclxuXHRjb25zdCBbZXh0LCBzZXRFeHRdID0gUmVhY3QudXNlU3RhdGUoXCJtcDRcIik7XHJcblx0Y29uc3QgW3R5cGUsIHNldFR5cGVdID0gUmVhY3QudXNlU3RhdGUoXCJBdWRpb1wiKTtcclxuXHRjb25zdCBbc2hvd0xvYWRpbmcsIHNldFNob3dMb2FkaW5nXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBbbG9hZGluZ1Byb2dyZXNzLCBzZXRMb2FkaW5nUHJvZ3Jlc3NdID0gUmVhY3QudXNlU3RhdGUoXCIwXCIpO1xyXG5cdGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG5cdGNvbnN0IFt2YXJpZW50LCBzZXRWYXJpZW50XSA9IFJlYWN0LnVzZVN0YXRlPFwic3VjY2Vzc1wiIHwgXCJlcnJvclwiIHwgXCJ3YXJuaW5nXCIgfCBcImluZm9cIj4oXCJpbmZvXCIpO1xyXG5cdGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZVR5cGUgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XHJcbiAgICBzZXRUeXBlKChldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUpO1xyXG4gIH07XHJcblx0Y29uc3QgaGFuZGxlQ2hhbmdlRXh0ID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xyXG4gICAgc2V0RXh0KChldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUpO1xyXG4gIH07XHRcclxuXHRcclxuXHQgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlQWxlcnRTaG93IChldmVudDogYW55LCBzaG93OiBib29sZWFuKSB7XHJcblx0XHRzZXRPcGVuKHNob3cpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gb3BlbkhhbmRsZXIodmFsOiBib29sZWFuKSB7XHJcbiAgICAgICAgc2V0T3Blbih2YWwpO1xyXG4gICAgfVxyXG5cdGZ1bmN0aW9uIGdldCAoZTogYW55KSB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRzZXRPcGVuKGZhbHNlKTtcclxuICAgICAgICB2YXIgVVJMaW5wdXQgPSBnZXRSZWYuY3VycmVudC52YWx1ZS5zcGxpdChcIj1cIilbMV07XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiYXMgXCIgKyBVUkxpbnB1dCArIFwiLCBcIiArIHR5cGUgKyBcIiwgXCIgKyBleHQpXHJcblx0XHRpZiAoVVJMaW5wdXQgPT09IHVuZGVmaW5lZCB8fCBudWxsKXtcclxuXHRcdFx0c2V0VmFyaWVudChcIndhcm5pbmdcIik7XHJcblx0XHRcdHNldE1lc3NhZ2UoXCJJbnZhbGlkIHVybCB0cnkgYW5vdGhlciBvciBsb29rIGNhcmVmdWxseSB0byBjb3JyZWN0IGl0LlwiKTtcclxuXHRcdFx0c2V0T3Blbih0cnVlKTtcclxuXHQgIFx0fSBlbHNlIHtcclxuICAgICAgICAgICAgXHJcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gcG9zdChcIi9kb3dubG9hZFwiLCBKU09OLnN0cmluZ2lmeSh7dXJsOlVSTGlucHV0LCB0eXBlOnR5cGUsIGV4dGVuc2lvbjpleHR9KSwgdHJ1ZSk7XHJcblx0XHRcdHJlc3BvbnNlLm9ubG9hZCA9ICgpID0+IHtcclxuXHRcdFx0XHR2YXIgc3NlOkV2ZW50U291cmNlID0gbmV3IEV2ZW50U291cmNlKFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2Rvd25sb2FkL3NzZVwiKTtcclxuXHRcdCAgXHRcdHNzZS5vbm9wZW4gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U2hvd0xvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3NlLm9ubWVzc2FnZSA9IGV2dCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldExvYWRpbmdQcm9ncmVzcyhldnQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldnQuZGF0YSA9PT0gXCIxMDBcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2hvd0xvYWRpbmcoZmFsc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdXJsOiBzdHJpbmcgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9kb3dubG9hZC92aWRlby9cIiArIFVSTGlucHV0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG93bmxvYWRCdG5SZWYuY3VycmVudC52YWx1ZSA9IHVybDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lclJlZi5jdXJyZW50LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzc2UuY2xvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHRcdCAgXHRcdH1cclxuXHQgIFx0XHRcdFxyXG5cdFx0XHRcdHNzZS5vbmVycm9yID0gKCkgPT4ge1xyXG4gIFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIkV2ZW50U291cmNlIGZhaWxlZC5cIik7XHJcblx0XHRcdFx0XHRzZXRTaG93TG9hZGluZyhmYWxzZSk7XHJcbiAgXHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiQ2xvc2luZyBjb25uZWN0b24uLi5cIik7XHJcbiAgXHRcdFx0XHRcdHNzZS5jbG9zZSgpO1xyXG4gIFx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcbiAgXHRcdH1cclxuICBcdH1cclxuICBcdGZ1bmN0aW9uIGRvd25sb2FkRnJvbVNlcnZlciAoKSB7XHJcbiAgICBcdHZhciB1cmw6c3RyaW5nID0gZG93bmxvYWRCdG5SZWYuY3VycmVudC52YWx1ZTtcclxuICAgIFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XHJcblx0fVxyXG5cdHJldHVybiAoXHJcblx0XHQ8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDxTbmFjayBvcGVuSGFuZGxlcj17b3BlbkhhbmRsZXJ9IG9wZW49e29wZW59IHZhcmllbnQ9e3ZhcmllbnR9IG1lc3NhZ2U9e21lc3NhZ2V9Lz5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHhzPXsxMn0gPlxyXG4gICAgICAgICAgICAgICAgPExvYWRpbmdNb2RhbCBwcm9ncmVzcz17bG9hZGluZ1Byb2dyZXNzfSBzaG93PXtzaG93TG9hZGluZ30gb25IaWRlPXsoKSA9PiBzZXRTaG93TG9hZGluZyhmYWxzZSl9Lz5cclxuICAgICAgICAgICAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmlucHV0Rm9ybX0+XHJcblx0XHRcdFx0ICAgIDxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtfT5cclxuXHRcdFx0XHRcdCAgICA8Rm9ybUdyb3VwPlxyXG5cdFx0XHRcdFx0XHQgICAgPEdyaWQgY29udGFpbmVyIHhzPXsxMn0+XHJcblx0XHRcdFx0XHRcdFx0ICAgIDxHcmlkIGl0ZW0geHM9ezEwfT5cclxuXHRcdFx0XHRcdFx0XHRcdCAgICA8VGV4dEZpZWxkXHJcblx0XHRcdFx0XHRcdFx0XHRcdCAgICBpbnB1dFJlZj17Z2V0UmVmfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQgICAgaWQ9XCJzdGFuZGFyZC1iYXNpY1wiXHJcblx0XHRcdFx0XHRcdFx0XHRcdCAgICBjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQgICAgbGFiZWw9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdCAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG5cdFx0XHRcdFx0XHRcdFx0ICAgIC8+XHJcblx0XHRcdFx0XHRcdFx0ICAgIDwvR3JpZD5cclxuXHRcdFx0XHRcdFx0XHQgICAgPEdyaWQgY29udGFpbmVyIHhzPXsyfSAganVzdGlmeT1cImZsZXgtc3RhcnRcIiBhbGlnbkl0ZW1zPVwiZmxleC1zdGFydFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0ICAgIDxCdXR0b24gb25DbGljaz17Z2V0fSBjbGFzc05hbWU9e2NsYXNzZXMuaW5wdXRGb3JtQnV0dG9ufSB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJwcmltYXJ5XCI+R0VUPC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdFx0ICAgIDwvR3JpZD5cclxuXHRcdFx0XHRcdFx0ICAgIDwvR3JpZD5cclxuXHRcdFx0XHRcdCAgICA8L0Zvcm1Hcm91cD5cclxuXHRcdFx0XHRcdCAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHhzPXsxMn0+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9PlxyXG5cdFx0XHRcdFx0XHQgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgY29tcG9uZW50PVwiZmllbGRzZXRcIiBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybUNvbnRyb2x9PlxyXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICA8Rm9ybUxhYmVsIGNvbXBvbmVudD1cImxlZ2VuZFwiPkRhdGEgVHlwZTwvRm9ybUxhYmVsPlxyXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICA8UmFkaW9Hcm91cCBhcmlhLWxhYmVsPVwiZ2VuZGVyXCIgbmFtZT1cImdlbmRlcjFcIiB2YWx1ZT17dHlwZX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZVR5cGV9IHJvdz5cclxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbCB2YWx1ZT1cIkF1ZGlvXCIgY29udHJvbD17PFJhZGlvICBjb2xvcj1cInByaW1hcnlcIiAvPn0gbGFiZWw9XCJBdWRpb1wiIGxhYmVsUGxhY2VtZW50PVwic3RhcnRcIi8+XHJcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWwgdmFsdWU9XCJWaWRlb1wiIGNvbnRyb2w9ezxSYWRpbyAgY29sb3I9XCJwcmltYXJ5XCIgLz59IGxhYmVsPVwiVmlkZW9cIiBsYWJlbFBsYWNlbWVudD1cInN0YXJ0XCIvPlxyXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICA8L1JhZGlvR3JvdXA+XHJcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxyXG5cdFx0XHRcdFx0XHQgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgY29tcG9uZW50PVwiZmllbGRzZXRcIiBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybUNvbnRyb2x9PlxyXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICA8Rm9ybUxhYmVsIGNvbXBvbmVudD1cImxlZ2VuZFwiPkZpbGUgVHlwZTwvRm9ybUxhYmVsPlxyXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICA8UmFkaW9Hcm91cCBhcmlhLWxhYmVsPVwiZ2VuZGVyXCIgbmFtZT1cImdlbmRlcjJcIiB2YWx1ZT17ZXh0fSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlRXh0fSByb3c+XHJcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWwgdmFsdWU9XCJtcDRcIiBjb250cm9sPXs8UmFkaW8gLz59IGxhYmVsPVwibXA0XCIgbGFiZWxQbGFjZW1lbnQ9XCJzdGFydFwiLz5cclxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbCB2YWx1ZT1cIm1wM1wiIGNvbnRyb2w9ezxSYWRpbyAvPn0gbGFiZWw9XCJtcDNcIiBsYWJlbFBsYWNlbWVudD1cInN0YXJ0XCIvPlxyXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsIHZhbHVlPVwid2F2XCIgY29udHJvbD17PFJhZGlvIC8+fSBsYWJlbD1cIndhdlwiIGxhYmVsUGxhY2VtZW50PVwic3RhcnRcIi8+XHJcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWwgdmFsdWU9XCJ3ZWJtXCIgY29udHJvbD17PFJhZGlvIC8+fSBsYWJlbD1cIndlYm1cIiBsYWJlbFBsYWNlbWVudD1cInN0YXJ0XCIvPlxyXG5cdFx0XHRcdFx0XHRcdFx0ICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWwgdmFsdWU9XCJmbHZcIiBjb250cm9sPXs8UmFkaW8gLz59IGxhYmVsPVwiZmx2XCIgbGFiZWxQbGFjZW1lbnQ9XCJzdGFydFwiLz5cclxuXHRcdFx0XHRcdFx0XHRcdCAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsIHZhbHVlPVwiaGxzXCIgY29udHJvbD17PFJhZGlvIC8+fSBsYWJlbD1cImhsc1wiIGxhYmVsUGxhY2VtZW50PVwic3RhcnRcIi8+XHJcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgIDwvUmFkaW9Hcm91cD5cclxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblx0ICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuXHQgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciB4cz17MTJ9PlxyXG5cdCAgICAgICAgICAgICAgICAgICAgPEdyaWQgeHM9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRhaW5lciBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIn19IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiIHJlZj17Y29udGFpbmVyUmVmfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwic2Vjb25kYXJ5XCIgcmVmPXtkb3dubG9hZEJ0blJlZn0gb25DbGljaz17ZG93bmxvYWRGcm9tU2VydmVyfT5Eb3dubG9hZDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db250YWluZXI+XHJcblx0ICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cdCAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG5cdFx0XHQ8L0dyaWQ+XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuXHQpO1xyXG59XHJcbmNsYXNzIEluZm9QYW5lbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblx0cmVuZGVyKCl7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8UGFwZXI+XHJcblx0XHRcdFx0PENvbnRhaW5lcj5cclxuXHRcdFx0XHRcdDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiIGNvbXBvbmVudD1cImgzXCI+XHJcblx0XHRcdFx0XHRcdDxpPlRoaXMgc2l0ZSBpcyB1bmRlciBjb25zdHJ1Y3Rpb24uPC9pPlxyXG5cdFx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxyXG5cdFx0XHRcdFx0PFR5cG9ncmFwaHkgY29tcG9uZW50PVwicFwiPlxyXG5cdFx0XHRcdFx0XHRUaGUgbWFpbiByZWFzb24gZm9yIHRoaXMgc2l0ZSBpcyB0byBkb3dubG9hZCBhdWRpbyBmaWxlcyBmcm9tIHlvdXR1YmUvIHNvb24gd2lsbCBzdXBwb3J0IG1vcmVcclxuXHRcdFx0XHRcdFx0c2l0ZXMgYW5kIHBvc3NpYmx5IHRoZSBhYmlsaXR5IHRvIGRvd25sb2FkIHRoZSB3aG9sZSB2aWRlbyBpbmNsdWRpbmcgdmlzdWFsIGFuZCBhdWRpby4gZGVwZW5kaW5nIG9uXHJcblx0XHRcdFx0XHRcdHdoYXQgcGVvcGxlIHdhbnQ8YnIvPjxici8+PGJyLz5cclxuXHRcdFx0XHRcdFx0VGVzdGluZyBVUkw6IGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9cGNQaTRqUEFSMmNcclxuXHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cclxuXHRcdFx0XHQ8L0NvbnRhaW5lcj5cclxuXHRcdFx0PC9QYXBlcj5cclxuXHRcdClcclxuXHR9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cdHJlbmRlcigpe1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PFJlYWN0LkZyYWdtZW50PlxyXG5cdFx0XHRcdDxTdWJtaXRGb3JtLz5cclxuXHRcdFx0XHQ8SW5mb1BhbmVsLz5cclxuXHRcdFx0PC9SZWFjdC5GcmFnbWVudD5cclxuXHRcdCk7XHJcblx0fVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=