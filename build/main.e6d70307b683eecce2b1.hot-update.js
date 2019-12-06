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
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(Modal_1.default, { "aria-labelledby": "transition-modal-title", "aria-describedby": "transition-modal-description", className: classes.modal, open: props.show, onClose: props.onHide, closeAfterTransition: true, BackdropComponent: Backdrop_1.default, BackdropProps: {
                timeout: 500,
            } },
            react_1.default.createElement(Fade_1.default, { in: props.show },
                react_1.default.createElement("div", { className: classes.paper },
                    react_1.default.createElement("h2", { id: "transition-modal-title" }, "Downloading your file"),
                    react_1.default.createElement(ProgressBar, { progressValue: parseInt(props.progress) }),
                    react_1.default.createElement("h4", null,
                        "Downloading... ",
                        props.progress,
                        " %"),
                    react_1.default.createElement("p", null,
                        "Please wait while your file is being downloaded. Feel free to use this service as many times as you want.",
                        react_1.default.createElement("br", null),
                        "A button link will be provided shortly...."),
                    react_1.default.createElement(Button_1.default, { variant: "contained", color: "secondary", onClick: props.onHide }, "Close"))))));
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
                        react_1.default.createElement(Input, { color: 'secondary', component: "Button" }),
                        "containerRef.current.innerHTML = `",
                        react_1.default.createElement(Button_1.default, Object.assign({ href: true, "$": true }, url, { onClick: downloadFromServer }), "Download"),
                        "`;",
                        react_1.default.createElement(Container_1.default, { component: "div", style: { display: "none" }, className: "container-fluid", forwardRef: containerRef })))))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91bWQvLi9zcmMvQXBwLnRzeCIsIndlYnBhY2s6Ly91bWQvLi9zcmMvY29tcG9uZW50cy9wYWdlcy9JbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUdBQTBCO0FBRTFCLGtJQUEwRTtBQUMxRSx1SkFBb0Q7QUFFcEQsOEhBQWdEO0FBQ2hELDhIQUFnRDtBQUNoRCx5SEFBNkM7QUFDN0Msd0lBQTBDO0FBQzFDLGtJQUFtRDtBQUNuRCx5SEFBNkM7QUFDN0MsK0hBQWlEO0FBQ2pELCtIQUFpRDtBQUNqRCxrSUFBbUQ7QUFDbkQsK0hBQWlEO0FBQ2pELHlIQUE2QztBQUM3Qyx5R0FBK0M7QUFDL0Msc0hBQTJDO0FBQzNDLHlIQUE2QztBQUU3Qyw2SEFBMkU7QUFHM0UsTUFBTSxTQUFTLEdBQUcsbUJBQVUsQ0FBQyxDQUFDLEtBQVksRUFBRSxFQUFFLENBQzdDLHFCQUFZLENBQUM7SUFDWixTQUFTLEVBQUU7UUFDVixLQUFLLEVBQUUsT0FBTztRQUNkLFdBQVcsRUFBRSxNQUFNO0tBQ25CO0lBQ0QsSUFBSSxFQUFFO1FBQ0wsUUFBUSxFQUFFLFFBQVE7UUFDbEIsZUFBZSxFQUFFLE9BQU87UUFDeEIsU0FBUyxFQUFFLE9BQU87UUFDbEIsT0FBTyxFQUFFLG9CQUFvQjtLQUM3QjtJQUNELGFBQWEsRUFBRTtRQUNkLGVBQWUsRUFBRSx3REFBd0Q7UUFDekUsU0FBUyxFQUFFLE9BQU87UUFDbEIsT0FBTyxFQUFFLEtBQUs7UUFDZCxNQUFNLEVBQUUsS0FBSztLQUNiO0NBQ0QsQ0FBQyxDQUVGLENBQUM7QUFFRixTQUF3QixHQUFHO0lBQzFCLE1BQU0sT0FBTyxHQUFHLFNBQVMsRUFBRSxDQUFDO0lBRTVCLE1BQU0sQ0FBQyxhQUFhLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxlQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hFLE1BQU0sQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFD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Q29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIGFzIFJvdXRlciwgUm91dGUsIFN3aXRjaCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXInO1xuXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vY29tcG9uZW50cy9sYXlvdXQvSGVhZGVyJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9jb21wb25lbnRzL2xheW91dC9Gb290ZXInO1xuaW1wb3J0IEFib3V0IGZyb20gJy4vY29tcG9uZW50cy9wYWdlcy9BYm91dCc7XG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcbmltcG9ydCBSZWdpc3RlciBmcm9tICcuL2NvbXBvbmVudHMvcGFnZXMvUmVnaXN0ZXInO1xuaW1wb3J0IEluZGV4IGZyb20gJy4vY29tcG9uZW50cy9wYWdlcy9JbmRleCc7XG5pbXBvcnQgQ29udGFjdCBmcm9tICcuL2NvbXBvbmVudHMvcGFnZXMvQ29udGFjdCc7XG5pbXBvcnQgQWNjb3VudCBmcm9tICcuL2NvbXBvbmVudHMvcGFnZXMvQWNjb3VudCc7XG5pbXBvcnQgUHJvamVjdHMgZnJvbSAnLi9jb21wb25lbnRzL3BhZ2VzL1Byb2plY3RzJztcbmltcG9ydCBTdXBwb3J0IGZyb20gJy4vY29tcG9uZW50cy9wYWdlcy9TdXBwb3J0JztcbmltcG9ydCBGb3J1bSBmcm9tICcuL2NvbXBvbmVudHMvcGFnZXMvRm9ydW0nO1xuaW1wb3J0IHtwb3N0fSBmcm9tICcuL2NvbXBvbmVudHMvc3RhdGljL2F4aW9zJztcbmltcG9ydCBQb3N0IGZyb20gJy4vY29tcG9uZW50cy9wYWdlcy9Qb3N0JztcbmltcG9ydCBMb2dpbiBmcm9tICcuL2NvbXBvbmVudHMvcGFnZXMvTG9naW4nO1xuXG5pbXBvcnQgeyBtYWtlU3R5bGVzLCBUaGVtZSwgY3JlYXRlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcblxuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+XG5cdGNyZWF0ZVN0eWxlcyh7XG5cdFx0cGFyYWdyYXBoOiB7XG5cdFx0XHRjb2xvcjogXCJ3aGl0ZVwiLFxuXHRcdFx0cGFkZGluZ0xlZnQ6IFwiMjBweFwiXG5cdFx0fSxcblx0XHRtYWluOiB7XG5cdFx0XHRtYXhXaWR0aDogXCIxMTQwcHhcIixcblx0XHRcdGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiLFxuXHRcdFx0bWluSGVpZ2h0OiBcIjEwMHZoXCIsXG5cdFx0XHRwYWRkaW5nOiBcIjkwcHggMzBweCAwcHggMzBweFwiXG5cdFx0fSxcblx0XHRtYWluQ29udGFpbmVyOiB7XG5cdFx0XHRiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKGh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC91cGxvYWQvZmlsZXMvYmFja2dyb3VuZC5qcGcpXCIsXG5cdFx0XHRtaW5IZWlnaHQ6IFwiMTAwdmhcIixcblx0XHRcdHBhZGRpbmc6IFwiMHB4XCIsXG5cdFx0XHRtYXJnaW46IFwiMHB4XCJcblx0XHR9XG5cdH0pLFxuXHRcbik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCAoKSB7XG5cdGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblx0XG5cdGNvbnN0IFthdXRoZW50aWNhdGVkLCBzZXRBdXRoZW50aWNhdGVkXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcblx0Y29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcblx0Y29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcblx0XG5cdGZ1bmN0aW9uIGF1dGhlbnRpY2F0ZV91c2VyKCl7XG5cdFx0Y29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcblx0XHRjb25zb2xlLmxvZyhcIkF1dGhlbnRpY2F0aW5nIHVzZXIgYXQgdG9wIGxheWVyXCIpXG5cdFx0aWYgKHRva2VuKSB7XG5cdFx0XHRjb25zdCB1Om51bGwgfCBzdHJpbmcgPSB0b2tlbi5zcGxpdChcIj9cIilbMF07IHNldFVzZXJuYW1lKHUpO1xuXHRcdFx0Y29uc3QgcDpudWxsIHwgc3RyaW5nID0gdG9rZW4uc3BsaXQoXCI/XCIpWzFdOyBzZXRQYXNzd29yZChwKTtcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gcG9zdChcIi91c2Vycy9sb2dpblwiLCBKU09OLnN0cmluZ2lmeSh7dXNlcm5hbWU6dXNlcm5hbWUsIGVtYWlsOnVzZXJuYW1lLCBwYXNzd29yZDpwYXNzd29yZH0pLCB0cnVlKTtcblx0XHRcdHJlc3BvbnNlLm9ubG9hZCA9ICgpID0+IHtcblx0XHRcdFx0aWYgKHJlc3BvbnNlLnJlc3BvbnNlVGV4dC5pbmNsdWRlcyhcIlN1Y2Nlc3NcIikpe1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiU3VjY2Vzc2Z1bGx5IGF1dGhlbnRpY2F0ZWQgdXNlclwiKVxuXHRcdFx0XHRcdHNldEF1dGgodHJ1ZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblx0XG5cdGZ1bmN0aW9uIHNldEF1dGgodmFsOiBib29sZWFuKXtcblx0XHRzZXRBdXRoZW50aWNhdGVkKHZhbCk7XG5cdH1cblx0YXV0aGVudGljYXRlX3VzZXIoKTtcblx0cmV0dXJuIChcblx0XHQ8Um91dGVyPlxuXHRcdFx0PEdyaWQgY29udGFpbmVyIHhzPXsxMn0gY2xhc3NOYW1lPXtjbGFzc2VzLm1haW5Db250YWluZXJ9PlxuXHRcdFx0XHQ8SGVhZGVyIGF1dGg9e2F1dGhlbnRpY2F0ZWR9Lz5cblx0XHRcdFx0PEdyaWQgaXRlbSBjb250YWluZXIgeHM9ezEyfSBqdXN0aWZ5PVwiY2VudGVyXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiID5cblx0XHRcdFx0XHQ8Q29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5tYWlufT5cblx0XHRcdFx0XHRcdDxTd2l0Y2g+XG5cdFx0XHRcdFx0XHRcdDxSb3V0ZSBleGFjdCBwYXRoPScvJyByZW5kZXI9eyhwcm9wcykgPT4gKDxJbmRleC8+KX0vPlxuXHRcdFx0XHRcdFx0XHQ8Um91dGUgcGF0aD0nL0ZvcnVtJyByZW5kZXI9eyhwcm9wcykgPT4gKDxGb3J1bSBhdXRoZW50aWNhdGVkPXthdXRoZW50aWNhdGVkfSBteV91c2VybmFtZT17dXNlcm5hbWV9IG15X3Bhc3N3b3JkPXtwYXNzd29yZH0gLz4pfS8+XG5cdFx0XHRcdFx0XHRcdDxSb3V0ZSBwYXRoPScvTG9naW4nIHJlbmRlcj17KHByb3BzKSA9PiAoPExvZ2luIGF1dGhlbnRpY2F0ZT17YXV0aGVudGljYXRlX3VzZXJ9IC8+KX0vPlxuXHRcdFx0XHRcdFx0XHQ8Um91dGUgcGF0aD0nL1JlZ2lzdGVyJyBjb21wb25lbnQ9e1JlZ2lzdGVyfSAvPlxuXHRcdFx0XHRcdFx0XHQ8Um91dGUgcGF0aD0nL0Fib3V0IHVzJyBjb21wb25lbnQ9e0Fib3V0fSAvPlxuXHRcdFx0XHRcdFx0XHQ8Um91dGUgcGF0aD0nL0FjY291bnQnIHJlbmRlcj17KHByb3BzKSA9PiAoPEFjY291bnQgcmVtb3ZlQXV0aD17c2V0QXV0aH0gdXNlcm5hbWU9e3VzZXJuYW1lfSBwYXNzd29yZD17cGFzc3dvcmR9Lz4pfS8+XG5cdFx0XHRcdFx0XHRcdDxSb3V0ZSBwYXRoPScvRm9ydW0vUG9zdCcgcmVuZGVyPXsocHJvcHMpID0+ICg8UG9zdCBhdXRoZW50aWNhdGVkPXthdXRoZW50aWNhdGVkfSB1c2VybmFtZT17dXNlcm5hbWV9IHBhc3N3b3JkPXtwYXNzd29yZH0vPil9Lz5cblx0XHRcdFx0XHRcdFx0PFJvdXRlIHBhdGg9Jy9Db250YWN0JyBjb21wb25lbnQ9e0NvbnRhY3R9IC8+XG5cdFx0XHRcdFx0XHRcdDxSb3V0ZSBwYXRoPScvUHJvamVjdHMnIGNvbXBvbmVudD17UHJvamVjdHN9IC8+XG5cdFx0XHRcdFx0XHRcdDxSb3V0ZSBwYXRoPScvU3VwcG9ydCcgY29tcG9uZW50PXtTdXBwb3J0fSAvPlxuXHRcdFx0XHRcdFx0PC9Td2l0Y2g+XG5cdFx0XHRcdFx0PC9Db250YWluZXI+XG5cdFx0XHRcdDwvR3JpZD5cblx0XHRcdFx0PEZvb3Rlci8+XG5cdFx0XHQ8L0dyaWQ+XG5cdFx0PC9Sb3V0ZXI+XG5cdCk7XG59XG5cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCB7IHBvc3QsIGdldH0gZnJvbSAnLi4vc3RhdGljL2F4aW9zJztcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXInO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzLCBUaGVtZSwgY3JlYXRlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IE1vZGFsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01vZGFsJztcclxuaW1wb3J0IEJhY2tkcm9wIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0JhY2tkcm9wJztcclxuaW1wb3J0IEZhZGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRmFkZSc7XHJcbmltcG9ydCBMaW5lYXJQcm9ncmVzcyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaW5lYXJQcm9ncmVzcyc7XHJcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XHJcbmltcG9ydCBGb3JtR3JvdXAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUdyb3VwJztcclxuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sJztcclxuaW1wb3J0IFJhZGlvIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1JhZGlvJztcclxuaW1wb3J0IFJhZGlvR3JvdXAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUmFkaW9Hcm91cCc7XHJcbmltcG9ydCBGb3JtSGVscGVyVGV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtSGVscGVyVGV4dCc7XHJcbmltcG9ydCBGb3JtQ29udHJvbExhYmVsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sTGFiZWwnO1xyXG5pbXBvcnQgRm9ybUxhYmVsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1MYWJlbCc7XHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCBTbmFjayBmcm9tICcuLi9zdGF0aWMvU25hY2snO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PlxyXG5cdGNyZWF0ZVN0eWxlcyh7XHJcblx0XHRtb2RhbDoge1xyXG5cdFx0XHRkaXNwbGF5OiAnZmxleCcsXHJcblx0XHRcdGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG5cdFx0XHRqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcblx0XHR9LFxyXG5cdFx0cGFwZXI6IHtcclxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXHJcblx0XHRcdGJvcmRlcjogJzJweCBzb2xpZCAjMDAwJyxcclxuXHRcdFx0Ym94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzVdLFxyXG5cdFx0XHRwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIsIDQsIDMpLFxyXG5cdFx0fSxcclxuXHRcdHJvb3Q6IHtcclxuXHRcdFx0d2lkdGg6ICcxMDAlJyxcclxuXHRcdFx0JyYgPiAqICsgKic6IHtcclxuXHRcdFx0XHRtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMiksXHJcblx0XHRcdH0sXHJcblx0XHR9LFxyXG5cdFx0dGV4dEZpZWxkOiB7XHJcblx0XHRcdG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMSksXHJcblx0XHRcdG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDEpLFxyXG5cdFx0XHR3aWR0aDogXCIxMDAlXCJcclxuXHRcdH0sXHJcblx0XHRmb3JtQ29udHJvbDoge1xyXG5cdFx0XHRtYXJnaW46IHRoZW1lLnNwYWNpbmcoMyksXHJcblx0XHR9LFxyXG5cdFx0aW5wdXRGb3JtOiB7XHJcblx0XHRcdHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuXHRcdFx0cGFkZGluZzogXCIzMHB4IDAgMCAwXCIsXHJcblx0XHRcdHdpZHRoOiBcIjEwMHZ3XCIsXHJcblx0XHRcdG1hcmdpbjogXCIwcHggYXV0byA1MHB4IGF1dG9cIixcclxuXHRcdH0sXHJcblx0XHRmb3JtOiB7XHJcblx0XHRcdG1hcmdpbjogXCIwcHggYXV0byAxMHB4IGF1dG9cIixcclxuXHRcdFx0d2lkdGg6IFwiMTAwJVwiXHJcblx0XHR9LFxyXG5cdFx0aW5wdXRGb3JtSW5wdXQ6IHtcclxuXHRcdFx0d2lkdGg6IFwiODUlXCIsXHJcblx0XHRcdGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXHJcblx0XHR9LFxyXG5cdFx0aW5wdXRGb3JtQnV0dG9uOiB7XHJcblx0XHRcdGhlaWdodDogXCIxMDAlXCIsXHJcblx0XHRcdG1hcmdpbjogXCIwcHhcIixcclxuXHRcdH1cclxuXHR9KSxcclxuKTtcclxuXHJcbmludGVyZmFjZSBQcm9ncmVzc1Byb3BzIHtcclxuXHRwcm9ncmVzc1ZhbHVlOiBudW1iZXI7XHJcbn1cclxuZnVuY3Rpb24gUHJvZ3Jlc3NCYXIocHJvcHM6IFByb2dyZXNzUHJvcHMpIHtcclxuXHRjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblx0Y29uc3QgW2NvbXBsZXRlZCwgc2V0Q29tcGxldGVkXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xyXG5cclxuXHRSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0ZnVuY3Rpb24gcHJvZ3Jlc3MoKSB7XHJcblx0XHRcdHNldENvbXBsZXRlZChvbGRDb21wbGV0ZWQgPT4ge1xyXG5cdFx0XHRcdGlmIChvbGRDb21wbGV0ZWQgPT09IDEwMCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIDA7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHJldHVybiBNYXRoLm1pbihwcm9wcy5wcm9ncmVzc1ZhbHVlLCAxMDApO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCB0aW1lciA9IHNldEludGVydmFsKHByb2dyZXNzLCA1MDApO1xyXG5cdFx0cmV0dXJuICgpID0+IHtcclxuICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcik7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICA8TGluZWFyUHJvZ3Jlc3MgdmFyaWFudD1cImRldGVybWluYXRlXCIgdmFsdWU9e2NvbXBsZXRlZH0gLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcblxyXG5pbnRlcmZhY2UgbG9hZGluZ01vZGFsUHJvcHMge1xyXG5cdHByb2dyZXNzOiBzdHJpbmc7XHJcblx0b25IaWRlOiAoKSA9PiB2b2lkO1xyXG5cdHNob3c6IGJvb2xlYW47XHJcbn1cclxuXHJcbmZ1bmN0aW9uIExvYWRpbmdNb2RhbChwcm9wczogbG9hZGluZ01vZGFsUHJvcHMpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJ0cmFuc2l0aW9uLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwidHJhbnNpdGlvbi1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1vZGFsfVxyXG4gICAgICAgIG9wZW49e3Byb3BzLnNob3d9XHJcbiAgICAgICAgb25DbG9zZT17cHJvcHMub25IaWRlfVxyXG4gICAgICAgIGNsb3NlQWZ0ZXJUcmFuc2l0aW9uXHJcbiAgICAgICAgQmFja2Ryb3BDb21wb25lbnQ9e0JhY2tkcm9wfVxyXG4gICAgICAgIEJhY2tkcm9wUHJvcHM9e3tcclxuICAgICAgICAgIHRpbWVvdXQ6IDUwMCxcclxuICAgICAgICB9fT5cclxuICAgICAgICA8RmFkZSBpbj17cHJvcHMuc2hvd30+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XHJcbiAgICAgICAgICAgIDxoMiBpZD1cInRyYW5zaXRpb24tbW9kYWwtdGl0bGVcIj5Eb3dubG9hZGluZyB5b3VyIGZpbGU8L2gyPlxyXG5cdFx0XHQ8UHJvZ3Jlc3NCYXIgcHJvZ3Jlc3NWYWx1ZT17cGFyc2VJbnQocHJvcHMucHJvZ3Jlc3MpfS8+XHJcbiAgICAgICAgPGg0PkRvd25sb2FkaW5nLi4uIHtwcm9wcy5wcm9ncmVzc30gJTwvaDQ+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICBQbGVhc2Ugd2FpdCB3aGlsZSB5b3VyIGZpbGUgaXMgYmVpbmcgZG93bmxvYWRlZC4gRmVlbCBmcmVlIHRvIHVzZSB0aGlzIHNlcnZpY2UgYXMgbWFueVxyXG4gICAgICAgICAgdGltZXMgYXMgeW91IHdhbnQuPGJyLz5cclxuXHJcbiAgICAgICAgICBBIGJ1dHRvbiBsaW5rIHdpbGwgYmUgcHJvdmlkZWQgc2hvcnRseS4uLi5cclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJzZWNvbmRhcnlcIiBvbkNsaWNrPXtwcm9wcy5vbkhpZGV9PlxyXG4gICAgICAgICAgICBDbG9zZVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9GYWRlPlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIFN1Ym1pdEZvcm0oKSB7XHJcblx0Y29uc3QgY29udGFpbmVyUmVmOmFueSA9IFJlYWN0LmNyZWF0ZVJlZigpO1xyXG5cdGNvbnN0IGdldFJlZjogYW55ID0gUmVhY3QuY3JlYXRlUmVmKCk7XHJcblx0Y29uc3QgZG93bmxvYWRCdG5SZWY6IGFueSA9IFJlYWN0LmNyZWF0ZVJlZigpO1xyXG5cdFxyXG5cdGNvbnN0IFtleHQsIHNldEV4dF0gPSBSZWFjdC51c2VTdGF0ZShcIm1wNFwiKTtcclxuXHRjb25zdCBbdHlwZSwgc2V0VHlwZV0gPSBSZWFjdC51c2VTdGF0ZShcIkF1ZGlvXCIpO1xyXG5cdGNvbnN0IFtzaG93TG9hZGluZywgc2V0U2hvd0xvYWRpbmddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IFtsb2FkaW5nUHJvZ3Jlc3MsIHNldExvYWRpbmdQcm9ncmVzc10gPSBSZWFjdC51c2VTdGF0ZShcIjBcIik7XHJcblx0Y29uc3QgW29wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcblx0Y29uc3QgW3ZhcmllbnQsIHNldFZhcmllbnRdID0gUmVhY3QudXNlU3RhdGU8XCJzdWNjZXNzXCIgfCBcImVycm9yXCIgfCBcIndhcm5pbmdcIiB8IFwiaW5mb1wiPihcImluZm9cIik7XHJcblx0Y29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlVHlwZSA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcclxuICAgIHNldFR5cGUoKGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSk7XHJcbiAgfTtcclxuXHRjb25zdCBoYW5kbGVDaGFuZ2VFeHQgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XHJcbiAgICBzZXRFeHQoKGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSk7XHJcbiAgfTtcdFxyXG5cdFxyXG5cdCBmdW5jdGlvbiBoYW5kbGVDaGFuZ2VBbGVydFNob3cgKGV2ZW50OiBhbnksIHNob3c6IGJvb2xlYW4pIHtcclxuXHRcdHNldE9wZW4oc2hvdyk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBvcGVuSGFuZGxlcih2YWw6IGJvb2xlYW4pIHtcclxuICAgICAgICBzZXRPcGVuKHZhbCk7XHJcbiAgICB9XHJcblx0ZnVuY3Rpb24gZ2V0IChlOiBhbnkpIHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdHNldE9wZW4oZmFsc2UpO1xyXG4gICAgICAgIHZhciBVUkxpbnB1dCA9IGdldFJlZi5jdXJyZW50LnZhbHVlLnNwbGl0KFwiPVwiKVsxXTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJhcyBcIiArIFVSTGlucHV0ICsgXCIsIFwiICsgdHlwZSArIFwiLCBcIiArIGV4dClcclxuXHRcdGlmIChVUkxpbnB1dCA9PT0gdW5kZWZpbmVkIHx8IG51bGwpe1xyXG5cdFx0XHRzZXRWYXJpZW50KFwid2FybmluZ1wiKTtcclxuXHRcdFx0c2V0TWVzc2FnZShcIkludmFsaWQgdXJsIHRyeSBhbm90aGVyIG9yIGxvb2sgY2FyZWZ1bGx5IHRvIGNvcnJlY3QgaXQuXCIpO1xyXG5cdFx0XHRzZXRPcGVuKHRydWUpO1xyXG5cdCAgXHR9IGVsc2Uge1xyXG4gICAgICAgICAgICBcclxuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBwb3N0KFwiL2Rvd25sb2FkXCIsIEpTT04uc3RyaW5naWZ5KHt1cmw6VVJMaW5wdXQsIHR5cGU6dHlwZSwgZXh0ZW5zaW9uOmV4dH0pLCB0cnVlKTtcclxuXHRcdFx0cmVzcG9uc2Uub25sb2FkID0gKCkgPT4ge1xyXG5cdFx0XHRcdHZhciBzc2U6RXZlbnRTb3VyY2UgPSBuZXcgRXZlbnRTb3VyY2UoXCJodHRwOi8vbG9jYWxob3N0OjgwODAvZG93bmxvYWQvc3NlXCIpO1xyXG5cdFx0ICBcdFx0c3NlLm9ub3BlbiA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTaG93TG9hZGluZyh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICBzc2Uub25tZXNzYWdlID0gZXZ0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0TG9hZGluZ1Byb2dyZXNzKGV2dC5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2dC5kYXRhID09PSBcIjEwMFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTaG93TG9hZGluZyhmYWxzZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1cmw6IHN0cmluZyA9IFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2Rvd25sb2FkL3ZpZGVvL1wiICsgVVJMaW5wdXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lclJlZi5jdXJyZW50LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzc2UuY2xvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHRcdCAgXHRcdH1cclxuXHQgIFx0XHRcdFxyXG5cdFx0XHRcdHNzZS5vbmVycm9yID0gKCkgPT4ge1xyXG4gIFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIkV2ZW50U291cmNlIGZhaWxlZC5cIik7XHJcblx0XHRcdFx0XHRzZXRTaG93TG9hZGluZyhmYWxzZSk7XHJcbiAgXHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiQ2xvc2luZyBjb25uZWN0b24uLi5cIik7XHJcbiAgXHRcdFx0XHRcdHNzZS5jbG9zZSgpO1xyXG4gIFx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcbiAgXHRcdH1cclxuICBcdH1cclxuICBcdGZ1bmN0aW9uIGRvd25sb2FkRnJvbVNlcnZlciAoKSB7XHJcbiAgICBcdHZhciB1cmw6c3RyaW5nID0gZG93bmxvYWRCdG5SZWYuY3VycmVudC52YWx1ZTtcclxuICAgIFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XHJcblx0fVxyXG5cdHJldHVybiAoXHJcblx0XHQ8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDxTbmFjayBvcGVuSGFuZGxlcj17b3BlbkhhbmRsZXJ9IG9wZW49e29wZW59IHZhcmllbnQ9e3ZhcmllbnR9IG1lc3NhZ2U9e21lc3NhZ2V9Lz5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHhzPXsxMn0gPlxyXG4gICAgICAgICAgICAgICAgPExvYWRpbmdNb2RhbCBwcm9ncmVzcz17bG9hZGluZ1Byb2dyZXNzfSBzaG93PXtzaG93TG9hZGluZ30gb25IaWRlPXsoKSA9PiBzZXRTaG93TG9hZGluZyhmYWxzZSl9Lz5cclxuICAgICAgICAgICAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmlucHV0Rm9ybX0+XHJcblx0XHRcdFx0ICAgIDxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtfT5cclxuXHRcdFx0XHRcdCAgICA8Rm9ybUdyb3VwPlxyXG5cdFx0XHRcdFx0XHQgICAgPEdyaWQgY29udGFpbmVyIHhzPXsxMn0+XHJcblx0XHRcdFx0XHRcdFx0ICAgIDxHcmlkIGl0ZW0geHM9ezEwfT5cclxuXHRcdFx0XHRcdFx0XHRcdCAgICA8VGV4dEZpZWxkXHJcblx0XHRcdFx0XHRcdFx0XHRcdCAgICBpbnB1dFJlZj17Z2V0UmVmfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQgICAgaWQ9XCJzdGFuZGFyZC1iYXNpY1wiXHJcblx0XHRcdFx0XHRcdFx0XHRcdCAgICBjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQgICAgbGFiZWw9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdCAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG5cdFx0XHRcdFx0XHRcdFx0ICAgIC8+XHJcblx0XHRcdFx0XHRcdFx0ICAgIDwvR3JpZD5cclxuXHRcdFx0XHRcdFx0XHQgICAgPEdyaWQgY29udGFpbmVyIHhzPXsyfSAganVzdGlmeT1cImZsZXgtc3RhcnRcIiBhbGlnbkl0ZW1zPVwiZmxleC1zdGFydFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0ICAgIDxCdXR0b24gb25DbGljaz17Z2V0fSBjbGFzc05hbWU9e2NsYXNzZXMuaW5wdXRGb3JtQnV0dG9ufSB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJwcmltYXJ5XCI+R0VUPC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdFx0ICAgIDwvR3JpZD5cclxuXHRcdFx0XHRcdFx0ICAgIDwvR3JpZD5cclxuXHRcdFx0XHRcdCAgICA8L0Zvcm1Hcm91cD5cclxuXHRcdFx0XHRcdCAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHhzPXsxMn0+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9PlxyXG5cdFx0XHRcdFx0XHQgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgY29tcG9uZW50PVwiZmllbGRzZXRcIiBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybUNvbnRyb2x9PlxyXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICA8Rm9ybUxhYmVsIGNvbXBvbmVudD1cImxlZ2VuZFwiPkRhdGEgVHlwZTwvRm9ybUxhYmVsPlxyXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICA8UmFkaW9Hcm91cCBhcmlhLWxhYmVsPVwiZ2VuZGVyXCIgbmFtZT1cImdlbmRlcjFcIiB2YWx1ZT17dHlwZX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZVR5cGV9IHJvdz5cclxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbCB2YWx1ZT1cIkF1ZGlvXCIgY29udHJvbD17PFJhZGlvICBjb2xvcj1cInByaW1hcnlcIiAvPn0gbGFiZWw9XCJBdWRpb1wiIGxhYmVsUGxhY2VtZW50PVwic3RhcnRcIi8+XHJcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWwgdmFsdWU9XCJWaWRlb1wiIGNvbnRyb2w9ezxSYWRpbyAgY29sb3I9XCJwcmltYXJ5XCIgLz59IGxhYmVsPVwiVmlkZW9cIiBsYWJlbFBsYWNlbWVudD1cInN0YXJ0XCIvPlxyXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICA8L1JhZGlvR3JvdXA+XHJcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxyXG5cdFx0XHRcdFx0XHQgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgY29tcG9uZW50PVwiZmllbGRzZXRcIiBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybUNvbnRyb2x9PlxyXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICA8Rm9ybUxhYmVsIGNvbXBvbmVudD1cImxlZ2VuZFwiPkZpbGUgVHlwZTwvRm9ybUxhYmVsPlxyXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICA8UmFkaW9Hcm91cCBhcmlhLWxhYmVsPVwiZ2VuZGVyXCIgbmFtZT1cImdlbmRlcjJcIiB2YWx1ZT17ZXh0fSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlRXh0fSByb3c+XHJcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWwgdmFsdWU9XCJtcDRcIiBjb250cm9sPXs8UmFkaW8gLz59IGxhYmVsPVwibXA0XCIgbGFiZWxQbGFjZW1lbnQ9XCJzdGFydFwiLz5cclxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbCB2YWx1ZT1cIm1wM1wiIGNvbnRyb2w9ezxSYWRpbyAvPn0gbGFiZWw9XCJtcDNcIiBsYWJlbFBsYWNlbWVudD1cInN0YXJ0XCIvPlxyXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsIHZhbHVlPVwid2F2XCIgY29udHJvbD17PFJhZGlvIC8+fSBsYWJlbD1cIndhdlwiIGxhYmVsUGxhY2VtZW50PVwic3RhcnRcIi8+XHJcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWwgdmFsdWU9XCJ3ZWJtXCIgY29udHJvbD17PFJhZGlvIC8+fSBsYWJlbD1cIndlYm1cIiBsYWJlbFBsYWNlbWVudD1cInN0YXJ0XCIvPlxyXG5cdFx0XHRcdFx0XHRcdFx0ICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWwgdmFsdWU9XCJmbHZcIiBjb250cm9sPXs8UmFkaW8gLz59IGxhYmVsPVwiZmx2XCIgbGFiZWxQbGFjZW1lbnQ9XCJzdGFydFwiLz5cclxuXHRcdFx0XHRcdFx0XHRcdCAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsIHZhbHVlPVwiaGxzXCIgY29udHJvbD17PFJhZGlvIC8+fSBsYWJlbD1cImhsc1wiIGxhYmVsUGxhY2VtZW50PVwic3RhcnRcIi8+XHJcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgIDwvUmFkaW9Hcm91cD5cclxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblx0ICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuXHQgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCB4cz17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgY29sb3I9J3NlY29uZGFyeScgY29tcG9uZW50PVwiQnV0dG9uXCIgPjwvSW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXJSZWYuY3VycmVudC5pbm5lckhUTUwgPSBgPEJ1dHRvbiBocmVmPSR7dXJsfSBvbkNsaWNrPXtkb3dubG9hZEZyb21TZXJ2ZXJ9PkRvd25sb2FkPC9CdXR0b24+YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb250YWluZXIgY29tcG9uZW50PVwiZGl2XCIgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCJ9fSBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIiBmb3J3YXJkUmVmPXtjb250YWluZXJSZWZ9PjwvQ29udGFpbmVyPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHQgICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuXHRcdFx0PC9HcmlkPlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcblx0KTtcclxufVxyXG5jbGFzcyBJbmZvUGFuZWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cdHJlbmRlcigpe1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PFBhcGVyPlxyXG5cdFx0XHRcdDxDb250YWluZXI+XHJcblx0XHRcdFx0XHQ8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIiBjb21wb25lbnQ9XCJoM1wiPlxyXG5cdFx0XHRcdFx0XHQ8aT5UaGlzIHNpdGUgaXMgdW5kZXIgY29uc3RydWN0aW9uLjwvaT5cclxuXHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cclxuXHRcdFx0XHRcdDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cInBcIj5cclxuXHRcdFx0XHRcdFx0VGhlIG1haW4gcmVhc29uIGZvciB0aGlzIHNpdGUgaXMgdG8gZG93bmxvYWQgYXVkaW8gZmlsZXMgZnJvbSB5b3V0dWJlLyBzb29uIHdpbGwgc3VwcG9ydCBtb3JlXHJcblx0XHRcdFx0XHRcdHNpdGVzIGFuZCBwb3NzaWJseSB0aGUgYWJpbGl0eSB0byBkb3dubG9hZCB0aGUgd2hvbGUgdmlkZW8gaW5jbHVkaW5nIHZpc3VhbCBhbmQgYXVkaW8uIGRlcGVuZGluZyBvblxyXG5cdFx0XHRcdFx0XHR3aGF0IHBlb3BsZSB3YW50PGJyLz48YnIvPjxici8+XHJcblx0XHRcdFx0XHRcdFRlc3RpbmcgVVJMOiBodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PXBjUGk0alBBUjJjXHJcblx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XHJcblx0XHRcdFx0PC9Db250YWluZXI+XHJcblx0XHRcdDwvUGFwZXI+XHJcblx0XHQpXHJcblx0fVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHRyZW5kZXIoKXtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxSZWFjdC5GcmFnbWVudD5cclxuXHRcdFx0XHQ8U3VibWl0Rm9ybS8+XHJcblx0XHRcdFx0PEluZm9QYW5lbC8+XHJcblx0XHRcdDwvUmVhY3QuRnJhZ21lbnQ+XHJcblx0XHQpO1xyXG5cdH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9