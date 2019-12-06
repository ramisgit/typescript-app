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
const Input_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Input */ "./node_modules/@material-ui/core/esm/Input/index.js"));
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
                            containerRef.current.href = url;
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
                        react_1.default.createElement(Input_1.default, { color: 'secondary', inputRef: containerRef, component: "Button", onClick: downloadFromServer }, "Download")))))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91bWQvLi9zcmMvQXBwLnRzeCIsIndlYnBhY2s6Ly91bWQvLi9zcmMvY29tcG9uZW50cy9wYWdlcy9JbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUdBQTBCO0FBRTFCLGtJQUEwRTtBQUMxRSx1SkFBb0Q7QUFFcEQsOEhBQWdEO0FBQ2hELDhIQUFnRDtBQUNoRCx5SEFBNkM7QUFDN0Msd0lBQTBDO0FBQzFDLGtJQUFtRDtBQUNuRCx5SEFBNkM7QUFDN0MsK0hBQWlEO0FBQ2pELCtIQUFpRDtBQUNqRCxrSUFBbUQ7QUFDbkQsK0hBQWlEO0FBQ2pELHlIQUE2QztBQUM3Qyx5R0FBK0M7QUFDL0Msc0hBQTJDO0FBQzNDLHlIQUE2QztBQUU3Qyw2SEFBMkU7QUFHM0UsTUFBTSxTQUFTLEdBQUcsbUJBQVUsQ0FBQyxDQUFDLEtBQVksRUFBRSxFQUFFLENBQzdDLHFCQUFZLENBQUM7SUFDWixTQUFTLEVBQUU7UUFDVixLQUFLLEVBQUUsT0FBTztRQUNkLFdBQVcsRUFBRSxNQUFNO0tBQ25CO0lBQ0QsSUFBSSxFQUFFO1FBQ0wsUUFBUSxFQUFFLFFBQVE7UUFDbEIsZUFBZSxFQUFFLE9BQU87UUFDeEIsU0FBUyxFQUFFLE9BQU87UUFDbEIsT0FBTyxFQUFFLG9CQUFvQjtLQUM3QjtJQUNELGFBQWEsRUFBRTtRQUNkLGVBQWUsRUFBRSx3REFBd0Q7UUFDekUsU0FBUyxFQUFFLE9BQU87UUFDbEIsT0FBTyxFQUFFLEtBQUs7UUFDZCxNQUFNLEVBQUUsS0FBSztLQUNiO0NBQ0QsQ0FBQyxDQUVGLENBQUM7QUFFRixTQUF3QixHQUFHO0lBQzFCLE1BQU0sT0FBTyxHQUFHLFNBQVMsRUFBRSxDQUFDO0lBRTVCLE1BQU0sQ0FBQyxhQUFhLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxlQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hFLE1BQU0sQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFD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QUMsS0FBSyxFQUFDLGNBQWMsRUFBQyxPQUFPLEdBQUUsQ0FDcEUsQ0FDRCxDQUNELENBQ0osQ0FDQyxDQUNUO2dCQUNKLDhCQUFDLGNBQUksSUFBQyxTQUFTLFFBQUMsRUFBRSxFQUFFLEVBQUU7b0JBQ2xCLDhCQUFDLGNBQUksSUFBQyxFQUFFLEVBQUUsQ0FBQzt3QkFDUCw4QkFBQyxlQUFLLElBQUMsS0FBSyxFQUFDLFdBQVcsRUFBQyxRQUFRLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBQyxRQUFRLEVBQUMsT0FBTyxFQUFFLGtCQUFrQixlQUFrQixDQUdqSCxDQUNELENBQ0YsQ0FDZixDQUNlLENBQ3ZCLENBQUM7QUFDSCxDQUFDO0FBQ0QsTUFBTSxTQUFVLFNBQVEsZUFBSyxDQUFDLFNBQVM7SUFDdEMsTUFBTTtRQUNMLE9BQU8sQ0FDTiw4QkFBQyxlQUFLO1lBQ0wsOEJBQUMsbUJBQVM7Z0JBQ1QsOEJBQUMsb0JBQVUsSUFBQyxPQUFPLEVBQUMsSUFBSSxFQUFDLFNBQVMsRUFBQyxJQUFJO29CQUN0Qyw0RUFBdUMsQ0FDM0I7Z0JBQ2IsOEJBQUMsb0JBQVUsSUFBQyxTQUFTLEVBQUMsR0FBRzs7b0JBR1IseUNBQUs7b0JBQUEseUNBQUs7b0JBQUEseUNBQUs7K0VBRW5CLENBQ0YsQ0FDTCxDQUNSO0lBQ0YsQ0FBQztDQUNEO0FBQ0QsTUFBcUIsS0FBTSxTQUFRLGVBQUssQ0FBQyxTQUFTO0lBQ2pELE1BQU07UUFDTCxPQUFPLENBQ04sOEJBQUMsZUFBSyxDQUFDLFFBQVE7WUFDZCw4QkFBQyxVQUFVLE9BQUU7WUFDYiw4QkFBQyxTQUFTLE9BQUUsQ0FDSSxDQUNqQixDQUFDO0lBQ0gsQ0FBQztDQUNEO0FBVEQsd0JBU0MiLCJmaWxlIjoibWFpbi43MzExNjIxMDIyMjc5MDMyN2Y0Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIsIFJvdXRlLCBTd2l0Y2ggfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyJztcblxuaW1wb3J0IEhlYWRlciBmcm9tICcuL2NvbXBvbmVudHMvbGF5b3V0L0hlYWRlcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vY29tcG9uZW50cy9sYXlvdXQvRm9vdGVyJztcbmltcG9ydCBBYm91dCBmcm9tICcuL2NvbXBvbmVudHMvcGFnZXMvQWJvdXQnO1xuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XG5pbXBvcnQgUmVnaXN0ZXIgZnJvbSAnLi9jb21wb25lbnRzL3BhZ2VzL1JlZ2lzdGVyJztcbmltcG9ydCBJbmRleCBmcm9tICcuL2NvbXBvbmVudHMvcGFnZXMvSW5kZXgnO1xuaW1wb3J0IENvbnRhY3QgZnJvbSAnLi9jb21wb25lbnRzL3BhZ2VzL0NvbnRhY3QnO1xuaW1wb3J0IEFjY291bnQgZnJvbSAnLi9jb21wb25lbnRzL3BhZ2VzL0FjY291bnQnO1xuaW1wb3J0IFByb2plY3RzIGZyb20gJy4vY29tcG9uZW50cy9wYWdlcy9Qcm9qZWN0cyc7XG5pbXBvcnQgU3VwcG9ydCBmcm9tICcuL2NvbXBvbmVudHMvcGFnZXMvU3VwcG9ydCc7XG5pbXBvcnQgRm9ydW0gZnJvbSAnLi9jb21wb25lbnRzL3BhZ2VzL0ZvcnVtJztcbmltcG9ydCB7cG9zdH0gZnJvbSAnLi9jb21wb25lbnRzL3N0YXRpYy9heGlvcyc7XG5pbXBvcnQgUG9zdCBmcm9tICcuL2NvbXBvbmVudHMvcGFnZXMvUG9zdCc7XG5pbXBvcnQgTG9naW4gZnJvbSAnLi9jb21wb25lbnRzL3BhZ2VzL0xvZ2luJztcblxuaW1wb3J0IHsgbWFrZVN0eWxlcywgVGhlbWUsIGNyZWF0ZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5cblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PlxuXHRjcmVhdGVTdHlsZXMoe1xuXHRcdHBhcmFncmFwaDoge1xuXHRcdFx0Y29sb3I6IFwid2hpdGVcIixcblx0XHRcdHBhZGRpbmdMZWZ0OiBcIjIwcHhcIlxuXHRcdH0sXG5cdFx0bWFpbjoge1xuXHRcdFx0bWF4V2lkdGg6IFwiMTE0MHB4XCIsXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIixcblx0XHRcdG1pbkhlaWdodDogXCIxMDB2aFwiLFxuXHRcdFx0cGFkZGluZzogXCI5MHB4IDMwcHggMHB4IDMwcHhcIlxuXHRcdH0sXG5cdFx0bWFpbkNvbnRhaW5lcjoge1xuXHRcdFx0YmFja2dyb3VuZEltYWdlOiBcInVybChodHRwOi8vbG9jYWxob3N0OjgwODAvdXBsb2FkL2ZpbGVzL2JhY2tncm91bmQuanBnKVwiLFxuXHRcdFx0bWluSGVpZ2h0OiBcIjEwMHZoXCIsXG5cdFx0XHRwYWRkaW5nOiBcIjBweFwiLFxuXHRcdFx0bWFyZ2luOiBcIjBweFwiXG5cdFx0fVxuXHR9KSxcblx0XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAgKCkge1xuXHRjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG5cdFxuXHRjb25zdCBbYXV0aGVudGljYXRlZCwgc2V0QXV0aGVudGljYXRlZF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG5cdGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG5cdGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG5cdFxuXHRmdW5jdGlvbiBhdXRoZW50aWNhdGVfdXNlcigpe1xuXHRcdGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XG5cdFx0Y29uc29sZS5sb2coXCJBdXRoZW50aWNhdGluZyB1c2VyIGF0IHRvcCBsYXllclwiKVxuXHRcdGlmICh0b2tlbikge1xuXHRcdFx0Y29uc3QgdTpudWxsIHwgc3RyaW5nID0gdG9rZW4uc3BsaXQoXCI/XCIpWzBdOyBzZXRVc2VybmFtZSh1KTtcblx0XHRcdGNvbnN0IHA6bnVsbCB8IHN0cmluZyA9IHRva2VuLnNwbGl0KFwiP1wiKVsxXTsgc2V0UGFzc3dvcmQocCk7XG5cdFx0XHRjb25zdCByZXNwb25zZSA9IHBvc3QoXCIvdXNlcnMvbG9naW5cIiwgSlNPTi5zdHJpbmdpZnkoe3VzZXJuYW1lOnVzZXJuYW1lLCBlbWFpbDp1c2VybmFtZSwgcGFzc3dvcmQ6cGFzc3dvcmR9KSwgdHJ1ZSk7XG5cdFx0XHRyZXNwb25zZS5vbmxvYWQgPSAoKSA9PiB7XG5cdFx0XHRcdGlmIChyZXNwb25zZS5yZXNwb25zZVRleHQuaW5jbHVkZXMoXCJTdWNjZXNzXCIpKXtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIlN1Y2Nlc3NmdWxseSBhdXRoZW50aWNhdGVkIHVzZXJcIilcblx0XHRcdFx0XHRzZXRBdXRoKHRydWUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdFxuXHRmdW5jdGlvbiBzZXRBdXRoKHZhbDogYm9vbGVhbil7XG5cdFx0c2V0QXV0aGVudGljYXRlZCh2YWwpO1xuXHR9XG5cdGF1dGhlbnRpY2F0ZV91c2VyKCk7XG5cdHJldHVybiAoXG5cdFx0PFJvdXRlcj5cblx0XHRcdDxHcmlkIGNvbnRhaW5lciB4cz17MTJ9IGNsYXNzTmFtZT17Y2xhc3Nlcy5tYWluQ29udGFpbmVyfT5cblx0XHRcdFx0PEhlYWRlciBhdXRoPXthdXRoZW50aWNhdGVkfS8+XG5cdFx0XHRcdDxHcmlkIGl0ZW0gY29udGFpbmVyIHhzPXsxMn0ganVzdGlmeT1cImNlbnRlclwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIiA+XG5cdFx0XHRcdFx0PENvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMubWFpbn0+XG5cdFx0XHRcdFx0XHQ8U3dpdGNoPlxuXHRcdFx0XHRcdFx0XHQ8Um91dGUgZXhhY3QgcGF0aD0nLycgcmVuZGVyPXsocHJvcHMpID0+ICg8SW5kZXgvPil9Lz5cblx0XHRcdFx0XHRcdFx0PFJvdXRlIHBhdGg9Jy9Gb3J1bScgcmVuZGVyPXsocHJvcHMpID0+ICg8Rm9ydW0gYXV0aGVudGljYXRlZD17YXV0aGVudGljYXRlZH0gbXlfdXNlcm5hbWU9e3VzZXJuYW1lfSBteV9wYXNzd29yZD17cGFzc3dvcmR9IC8+KX0vPlxuXHRcdFx0XHRcdFx0XHQ8Um91dGUgcGF0aD0nL0xvZ2luJyByZW5kZXI9eyhwcm9wcykgPT4gKDxMb2dpbiBhdXRoZW50aWNhdGU9e2F1dGhlbnRpY2F0ZV91c2VyfSAvPil9Lz5cblx0XHRcdFx0XHRcdFx0PFJvdXRlIHBhdGg9Jy9SZWdpc3RlcicgY29tcG9uZW50PXtSZWdpc3Rlcn0gLz5cblx0XHRcdFx0XHRcdFx0PFJvdXRlIHBhdGg9Jy9BYm91dCB1cycgY29tcG9uZW50PXtBYm91dH0gLz5cblx0XHRcdFx0XHRcdFx0PFJvdXRlIHBhdGg9Jy9BY2NvdW50JyByZW5kZXI9eyhwcm9wcykgPT4gKDxBY2NvdW50IHJlbW92ZUF1dGg9e3NldEF1dGh9IHVzZXJuYW1lPXt1c2VybmFtZX0gcGFzc3dvcmQ9e3Bhc3N3b3JkfS8+KX0vPlxuXHRcdFx0XHRcdFx0XHQ8Um91dGUgcGF0aD0nL0ZvcnVtL1Bvc3QnIHJlbmRlcj17KHByb3BzKSA9PiAoPFBvc3QgYXV0aGVudGljYXRlZD17YXV0aGVudGljYXRlZH0gdXNlcm5hbWU9e3VzZXJuYW1lfSBwYXNzd29yZD17cGFzc3dvcmR9Lz4pfS8+XG5cdFx0XHRcdFx0XHRcdDxSb3V0ZSBwYXRoPScvQ29udGFjdCcgY29tcG9uZW50PXtDb250YWN0fSAvPlxuXHRcdFx0XHRcdFx0XHQ8Um91dGUgcGF0aD0nL1Byb2plY3RzJyBjb21wb25lbnQ9e1Byb2plY3RzfSAvPlxuXHRcdFx0XHRcdFx0XHQ8Um91dGUgcGF0aD0nL1N1cHBvcnQnIGNvbXBvbmVudD17U3VwcG9ydH0gLz5cblx0XHRcdFx0XHRcdDwvU3dpdGNoPlxuXHRcdFx0XHRcdDwvQ29udGFpbmVyPlxuXHRcdFx0XHQ8L0dyaWQ+XG5cdFx0XHRcdDxGb290ZXIvPlxuXHRcdFx0PC9HcmlkPlxuXHRcdDwvUm91dGVyPlxuXHQpO1xufVxuXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQgeyBwb3N0LCBnZXR9IGZyb20gJy4uL3N0YXRpYy9heGlvcyc7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcywgVGhlbWUsIGNyZWF0ZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBNb2RhbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Nb2RhbCc7XHJcbmltcG9ydCBCYWNrZHJvcCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CYWNrZHJvcCc7XHJcbmltcG9ydCBGYWRlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ZhZGUnO1xyXG5pbXBvcnQgTGluZWFyUHJvZ3Jlc3MgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGluZWFyUHJvZ3Jlc3MnO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xyXG5pbXBvcnQgRm9ybUdyb3VwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1Hcm91cCc7XHJcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbCc7XHJcbmltcG9ydCBSYWRpbyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9SYWRpbyc7XHJcbmltcG9ydCBSYWRpb0dyb3VwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1JhZGlvR3JvdXAnO1xyXG5pbXBvcnQgRm9ybUhlbHBlclRleHQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUhlbHBlclRleHQnO1xyXG5pbXBvcnQgRm9ybUNvbnRyb2xMYWJlbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbExhYmVsJztcclxuaW1wb3J0IEZvcm1MYWJlbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtTGFiZWwnO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgU25hY2sgZnJvbSAnLi4vc3RhdGljL1NuYWNrJztcclxuaW1wb3J0IElucHV0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0lucHV0JztcclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PlxyXG5cdGNyZWF0ZVN0eWxlcyh7XHJcblx0XHRtb2RhbDoge1xyXG5cdFx0XHRkaXNwbGF5OiAnZmxleCcsXHJcblx0XHRcdGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG5cdFx0XHRqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcblx0XHR9LFxyXG5cdFx0cGFwZXI6IHtcclxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXHJcblx0XHRcdGJvcmRlcjogJzJweCBzb2xpZCAjMDAwJyxcclxuXHRcdFx0Ym94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzVdLFxyXG5cdFx0XHRwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIsIDQsIDMpLFxyXG5cdFx0fSxcclxuXHRcdHJvb3Q6IHtcclxuXHRcdFx0d2lkdGg6ICcxMDAlJyxcclxuXHRcdFx0JyYgPiAqICsgKic6IHtcclxuXHRcdFx0XHRtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMiksXHJcblx0XHRcdH0sXHJcblx0XHR9LFxyXG5cdFx0dGV4dEZpZWxkOiB7XHJcblx0XHRcdG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMSksXHJcblx0XHRcdG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDEpLFxyXG5cdFx0XHR3aWR0aDogXCIxMDAlXCJcclxuXHRcdH0sXHJcblx0XHRmb3JtQ29udHJvbDoge1xyXG5cdFx0XHRtYXJnaW46IHRoZW1lLnNwYWNpbmcoMyksXHJcblx0XHR9LFxyXG5cdFx0aW5wdXRGb3JtOiB7XHJcblx0XHRcdHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuXHRcdFx0cGFkZGluZzogXCIzMHB4IDAgMCAwXCIsXHJcblx0XHRcdHdpZHRoOiBcIjEwMHZ3XCIsXHJcblx0XHRcdG1hcmdpbjogXCIwcHggYXV0byA1MHB4IGF1dG9cIixcclxuXHRcdH0sXHJcblx0XHRmb3JtOiB7XHJcblx0XHRcdG1hcmdpbjogXCIwcHggYXV0byAxMHB4IGF1dG9cIixcclxuXHRcdFx0d2lkdGg6IFwiMTAwJVwiXHJcblx0XHR9LFxyXG5cdFx0aW5wdXRGb3JtSW5wdXQ6IHtcclxuXHRcdFx0d2lkdGg6IFwiODUlXCIsXHJcblx0XHRcdGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXHJcblx0XHR9LFxyXG5cdFx0aW5wdXRGb3JtQnV0dG9uOiB7XHJcblx0XHRcdGhlaWdodDogXCIxMDAlXCIsXHJcblx0XHRcdG1hcmdpbjogXCIwcHhcIixcclxuXHRcdH1cclxuXHR9KSxcclxuKTtcclxuXHJcbmludGVyZmFjZSBQcm9ncmVzc1Byb3BzIHtcclxuXHRwcm9ncmVzc1ZhbHVlOiBudW1iZXI7XHJcbn1cclxuZnVuY3Rpb24gUHJvZ3Jlc3NCYXIocHJvcHM6IFByb2dyZXNzUHJvcHMpIHtcclxuXHRjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblx0Y29uc3QgW2NvbXBsZXRlZCwgc2V0Q29tcGxldGVkXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xyXG5cclxuXHRSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0ZnVuY3Rpb24gcHJvZ3Jlc3MoKSB7XHJcblx0XHRcdHNldENvbXBsZXRlZChvbGRDb21wbGV0ZWQgPT4ge1xyXG5cdFx0XHRcdGlmIChvbGRDb21wbGV0ZWQgPT09IDEwMCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIDA7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHJldHVybiBNYXRoLm1pbihwcm9wcy5wcm9ncmVzc1ZhbHVlLCAxMDApO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCB0aW1lciA9IHNldEludGVydmFsKHByb2dyZXNzLCA1MDApO1xyXG5cdFx0cmV0dXJuICgpID0+IHtcclxuICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcik7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICA8TGluZWFyUHJvZ3Jlc3MgdmFyaWFudD1cImRldGVybWluYXRlXCIgdmFsdWU9e2NvbXBsZXRlZH0gLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcblxyXG5pbnRlcmZhY2UgbG9hZGluZ01vZGFsUHJvcHMge1xyXG5cdHByb2dyZXNzOiBzdHJpbmc7XHJcblx0b25IaWRlOiAoKSA9PiB2b2lkO1xyXG5cdHNob3c6IGJvb2xlYW47XHJcbn1cclxuXHJcbmZ1bmN0aW9uIExvYWRpbmdNb2RhbChwcm9wczogbG9hZGluZ01vZGFsUHJvcHMpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJ0cmFuc2l0aW9uLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwidHJhbnNpdGlvbi1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1vZGFsfVxyXG4gICAgICAgIG9wZW49e3Byb3BzLnNob3d9XHJcbiAgICAgICAgb25DbG9zZT17cHJvcHMub25IaWRlfVxyXG4gICAgICAgIGNsb3NlQWZ0ZXJUcmFuc2l0aW9uXHJcbiAgICAgICAgQmFja2Ryb3BDb21wb25lbnQ9e0JhY2tkcm9wfVxyXG4gICAgICAgIEJhY2tkcm9wUHJvcHM9e3tcclxuICAgICAgICAgIHRpbWVvdXQ6IDUwMCxcclxuICAgICAgICB9fT5cclxuICAgICAgICA8RmFkZSBpbj17cHJvcHMuc2hvd30+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XHJcbiAgICAgICAgICAgIDxoMiBpZD1cInRyYW5zaXRpb24tbW9kYWwtdGl0bGVcIj5Eb3dubG9hZGluZyB5b3VyIGZpbGU8L2gyPlxyXG5cdFx0XHQ8UHJvZ3Jlc3NCYXIgcHJvZ3Jlc3NWYWx1ZT17cGFyc2VJbnQocHJvcHMucHJvZ3Jlc3MpfS8+XHJcbiAgICAgICAgPGg0PkRvd25sb2FkaW5nLi4uIHtwcm9wcy5wcm9ncmVzc30gJTwvaDQ+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICBQbGVhc2Ugd2FpdCB3aGlsZSB5b3VyIGZpbGUgaXMgYmVpbmcgZG93bmxvYWRlZC4gRmVlbCBmcmVlIHRvIHVzZSB0aGlzIHNlcnZpY2UgYXMgbWFueVxyXG4gICAgICAgICAgdGltZXMgYXMgeW91IHdhbnQuPGJyLz5cclxuXHJcbiAgICAgICAgICBBIGJ1dHRvbiBsaW5rIHdpbGwgYmUgcHJvdmlkZWQgc2hvcnRseS4uLi5cclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJzZWNvbmRhcnlcIiBvbkNsaWNrPXtwcm9wcy5vbkhpZGV9PlxyXG4gICAgICAgICAgICBDbG9zZVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9GYWRlPlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIFN1Ym1pdEZvcm0oKSB7XHJcblx0Y29uc3QgY29udGFpbmVyUmVmOmFueSA9IFJlYWN0LmNyZWF0ZVJlZigpO1xyXG5cdGNvbnN0IGdldFJlZjogYW55ID0gUmVhY3QuY3JlYXRlUmVmKCk7XHJcblx0Y29uc3QgZG93bmxvYWRCdG5SZWY6IGFueSA9IFJlYWN0LmNyZWF0ZVJlZigpO1xyXG5cdFxyXG5cdGNvbnN0IFtleHQsIHNldEV4dF0gPSBSZWFjdC51c2VTdGF0ZShcIm1wNFwiKTtcclxuXHRjb25zdCBbdHlwZSwgc2V0VHlwZV0gPSBSZWFjdC51c2VTdGF0ZShcIkF1ZGlvXCIpO1xyXG5cdGNvbnN0IFtzaG93TG9hZGluZywgc2V0U2hvd0xvYWRpbmddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IFtsb2FkaW5nUHJvZ3Jlc3MsIHNldExvYWRpbmdQcm9ncmVzc10gPSBSZWFjdC51c2VTdGF0ZShcIjBcIik7XHJcblx0Y29uc3QgW29wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcblx0Y29uc3QgW3ZhcmllbnQsIHNldFZhcmllbnRdID0gUmVhY3QudXNlU3RhdGU8XCJzdWNjZXNzXCIgfCBcImVycm9yXCIgfCBcIndhcm5pbmdcIiB8IFwiaW5mb1wiPihcImluZm9cIik7XHJcblx0Y29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlVHlwZSA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcclxuICAgIHNldFR5cGUoKGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSk7XHJcbiAgfTtcclxuXHRjb25zdCBoYW5kbGVDaGFuZ2VFeHQgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XHJcbiAgICBzZXRFeHQoKGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSk7XHJcbiAgfTtcdFxyXG5cdFxyXG5cdCBmdW5jdGlvbiBoYW5kbGVDaGFuZ2VBbGVydFNob3cgKGV2ZW50OiBhbnksIHNob3c6IGJvb2xlYW4pIHtcclxuXHRcdHNldE9wZW4oc2hvdyk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBvcGVuSGFuZGxlcih2YWw6IGJvb2xlYW4pIHtcclxuICAgICAgICBzZXRPcGVuKHZhbCk7XHJcbiAgICB9XHJcblx0ZnVuY3Rpb24gZ2V0IChlOiBhbnkpIHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdHNldE9wZW4oZmFsc2UpO1xyXG4gICAgICAgIHZhciBVUkxpbnB1dCA9IGdldFJlZi5jdXJyZW50LnZhbHVlLnNwbGl0KFwiPVwiKVsxXTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJhcyBcIiArIFVSTGlucHV0ICsgXCIsIFwiICsgdHlwZSArIFwiLCBcIiArIGV4dClcclxuXHRcdGlmIChVUkxpbnB1dCA9PT0gdW5kZWZpbmVkIHx8IG51bGwpe1xyXG5cdFx0XHRzZXRWYXJpZW50KFwid2FybmluZ1wiKTtcclxuXHRcdFx0c2V0TWVzc2FnZShcIkludmFsaWQgdXJsIHRyeSBhbm90aGVyIG9yIGxvb2sgY2FyZWZ1bGx5IHRvIGNvcnJlY3QgaXQuXCIpO1xyXG5cdFx0XHRzZXRPcGVuKHRydWUpO1xyXG5cdCAgXHR9IGVsc2Uge1xyXG4gICAgICAgICAgICBcclxuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBwb3N0KFwiL2Rvd25sb2FkXCIsIEpTT04uc3RyaW5naWZ5KHt1cmw6VVJMaW5wdXQsIHR5cGU6dHlwZSwgZXh0ZW5zaW9uOmV4dH0pLCB0cnVlKTtcclxuXHRcdFx0cmVzcG9uc2Uub25sb2FkID0gKCkgPT4ge1xyXG5cdFx0XHRcdHZhciBzc2U6RXZlbnRTb3VyY2UgPSBuZXcgRXZlbnRTb3VyY2UoXCJodHRwOi8vbG9jYWxob3N0OjgwODAvZG93bmxvYWQvc3NlXCIpO1xyXG5cdFx0ICBcdFx0c3NlLm9ub3BlbiA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTaG93TG9hZGluZyh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICBzc2Uub25tZXNzYWdlID0gZXZ0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0TG9hZGluZ1Byb2dyZXNzKGV2dC5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2dC5kYXRhID09PSBcIjEwMFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTaG93TG9hZGluZyhmYWxzZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1cmw6IHN0cmluZyA9IFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2Rvd25sb2FkL3ZpZGVvL1wiICsgVVJMaW5wdXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXJSZWYuY3VycmVudC5ocmVmID0gdXJsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyUmVmLmN1cnJlbnQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNzZS5jbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cdFx0ICBcdFx0fVxyXG5cdCAgXHRcdFx0XHJcblx0XHRcdFx0c3NlLm9uZXJyb3IgPSAoKSA9PiB7XHJcbiAgXHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiRXZlbnRTb3VyY2UgZmFpbGVkLlwiKTtcclxuXHRcdFx0XHRcdHNldFNob3dMb2FkaW5nKGZhbHNlKTtcclxuICBcdFx0XHRcdFx0Y29uc29sZS5sb2coXCJDbG9zaW5nIGNvbm5lY3Rvbi4uLlwiKTtcclxuICBcdFx0XHRcdFx0c3NlLmNsb3NlKCk7XHJcbiAgXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuICBcdFx0fVxyXG4gIFx0fVxyXG4gIFx0ZnVuY3Rpb24gZG93bmxvYWRGcm9tU2VydmVyICgpIHtcclxuICAgIFx0dmFyIHVybDpzdHJpbmcgPSBkb3dubG9hZEJ0blJlZi5jdXJyZW50LnZhbHVlO1xyXG4gICAgXHR3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcclxuXHR9XHJcblx0cmV0dXJuIChcclxuXHRcdDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgPFNuYWNrIG9wZW5IYW5kbGVyPXtvcGVuSGFuZGxlcn0gb3Blbj17b3Blbn0gdmFyaWVudD17dmFyaWVudH0gbWVzc2FnZT17bWVzc2FnZX0vPlxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgeHM9ezEyfSA+XHJcbiAgICAgICAgICAgICAgICA8TG9hZGluZ01vZGFsIHByb2dyZXNzPXtsb2FkaW5nUHJvZ3Jlc3N9IHNob3c9e3Nob3dMb2FkaW5nfSBvbkhpZGU9eygpID0+IHNldFNob3dMb2FkaW5nKGZhbHNlKX0vPlxyXG4gICAgICAgICAgICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMuaW5wdXRGb3JtfT5cclxuXHRcdFx0XHQgICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm19PlxyXG5cdFx0XHRcdFx0ICAgIDxGb3JtR3JvdXA+XHJcblx0XHRcdFx0XHRcdCAgICA8R3JpZCBjb250YWluZXIgeHM9ezEyfT5cclxuXHRcdFx0XHRcdFx0XHQgICAgPEdyaWQgaXRlbSB4cz17MTB9PlxyXG5cdFx0XHRcdFx0XHRcdFx0ICAgIDxUZXh0RmllbGRcclxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgIGlucHV0UmVmPXtnZXRSZWZ9XHJcblx0XHRcdFx0XHRcdFx0XHRcdCAgICBpZD1cInN0YW5kYXJkLWJhc2ljXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdCAgICBsYWJlbD1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcblx0XHRcdFx0XHRcdFx0XHQgICAgLz5cclxuXHRcdFx0XHRcdFx0XHQgICAgPC9HcmlkPlxyXG5cdFx0XHRcdFx0XHRcdCAgICA8R3JpZCBjb250YWluZXIgeHM9ezJ9ICBqdXN0aWZ5PVwiZmxleC1zdGFydFwiIGFsaWduSXRlbXM9XCJmbGV4LXN0YXJ0XCI+XHJcblx0XHRcdFx0XHRcdFx0XHQgICAgPEJ1dHRvbiBvbkNsaWNrPXtnZXR9IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnB1dEZvcm1CdXR0b259IHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInByaW1hcnlcIj5HRVQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHQgICAgPC9HcmlkPlxyXG5cdFx0XHRcdFx0XHQgICAgPC9HcmlkPlxyXG5cdFx0XHRcdFx0ICAgIDwvRm9ybUdyb3VwPlxyXG5cdFx0XHRcdFx0ICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgeHM9ezEyfT5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0+XHJcblx0XHRcdFx0XHRcdCAgICAgICAgICAgIDxGb3JtQ29udHJvbCBjb21wb25lbnQ9XCJmaWVsZHNldFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtQ29udHJvbH0+XHJcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgIDxGb3JtTGFiZWwgY29tcG9uZW50PVwibGVnZW5kXCI+RGF0YSBUeXBlPC9Gb3JtTGFiZWw+XHJcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgIDxSYWRpb0dyb3VwIGFyaWEtbGFiZWw9XCJnZW5kZXJcIiBuYW1lPVwiZ2VuZGVyMVwiIHZhbHVlPXt0eXBlfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlVHlwZX0gcm93PlxyXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsIHZhbHVlPVwiQXVkaW9cIiBjb250cm9sPXs8UmFkaW8gIGNvbG9yPVwicHJpbWFyeVwiIC8+fSBsYWJlbD1cIkF1ZGlvXCIgbGFiZWxQbGFjZW1lbnQ9XCJzdGFydFwiLz5cclxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbCB2YWx1ZT1cIlZpZGVvXCIgY29udHJvbD17PFJhZGlvICBjb2xvcj1cInByaW1hcnlcIiAvPn0gbGFiZWw9XCJWaWRlb1wiIGxhYmVsUGxhY2VtZW50PVwic3RhcnRcIi8+XHJcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgIDwvUmFkaW9Hcm91cD5cclxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcblx0XHRcdFx0XHRcdCAgICAgICAgICAgIDxGb3JtQ29udHJvbCBjb21wb25lbnQ9XCJmaWVsZHNldFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtQ29udHJvbH0+XHJcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgIDxGb3JtTGFiZWwgY29tcG9uZW50PVwibGVnZW5kXCI+RmlsZSBUeXBlPC9Gb3JtTGFiZWw+XHJcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgIDxSYWRpb0dyb3VwIGFyaWEtbGFiZWw9XCJnZW5kZXJcIiBuYW1lPVwiZ2VuZGVyMlwiIHZhbHVlPXtleHR9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VFeHR9IHJvdz5cclxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbCB2YWx1ZT1cIm1wNFwiIGNvbnRyb2w9ezxSYWRpbyAvPn0gbGFiZWw9XCJtcDRcIiBsYWJlbFBsYWNlbWVudD1cInN0YXJ0XCIvPlxyXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsIHZhbHVlPVwibXAzXCIgY29udHJvbD17PFJhZGlvIC8+fSBsYWJlbD1cIm1wM1wiIGxhYmVsUGxhY2VtZW50PVwic3RhcnRcIi8+XHJcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWwgdmFsdWU9XCJ3YXZcIiBjb250cm9sPXs8UmFkaW8gLz59IGxhYmVsPVwid2F2XCIgbGFiZWxQbGFjZW1lbnQ9XCJzdGFydFwiLz5cclxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbCB2YWx1ZT1cIndlYm1cIiBjb250cm9sPXs8UmFkaW8gLz59IGxhYmVsPVwid2VibVwiIGxhYmVsUGxhY2VtZW50PVwic3RhcnRcIi8+XHJcblx0XHRcdFx0XHRcdFx0XHQgICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbCB2YWx1ZT1cImZsdlwiIGNvbnRyb2w9ezxSYWRpbyAvPn0gbGFiZWw9XCJmbHZcIiBsYWJlbFBsYWNlbWVudD1cInN0YXJ0XCIvPlxyXG5cdFx0XHRcdFx0XHRcdFx0ICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWwgdmFsdWU9XCJobHNcIiBjb250cm9sPXs8UmFkaW8gLz59IGxhYmVsPVwiaGxzXCIgbGFiZWxQbGFjZW1lbnQ9XCJzdGFydFwiLz5cclxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgPC9SYWRpb0dyb3VwPlxyXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHQgICAgICAgICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG5cdCAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIHhzPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCBjb2xvcj0nc2Vjb25kYXJ5JyBpbnB1dFJlZj17Y29udGFpbmVyUmVmfSBjb21wb25lbnQ9XCJCdXR0b25cIiBvbkNsaWNrPXtkb3dubG9hZEZyb21TZXJ2ZXJ9PkRvd25sb2FkPC9JbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblx0ICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cdCAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG5cdFx0XHQ8L0dyaWQ+XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuXHQpO1xyXG59XHJcbmNsYXNzIEluZm9QYW5lbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblx0cmVuZGVyKCl7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8UGFwZXI+XHJcblx0XHRcdFx0PENvbnRhaW5lcj5cclxuXHRcdFx0XHRcdDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiIGNvbXBvbmVudD1cImgzXCI+XHJcblx0XHRcdFx0XHRcdDxpPlRoaXMgc2l0ZSBpcyB1bmRlciBjb25zdHJ1Y3Rpb24uPC9pPlxyXG5cdFx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxyXG5cdFx0XHRcdFx0PFR5cG9ncmFwaHkgY29tcG9uZW50PVwicFwiPlxyXG5cdFx0XHRcdFx0XHRUaGUgbWFpbiByZWFzb24gZm9yIHRoaXMgc2l0ZSBpcyB0byBkb3dubG9hZCBhdWRpbyBmaWxlcyBmcm9tIHlvdXR1YmUvIHNvb24gd2lsbCBzdXBwb3J0IG1vcmVcclxuXHRcdFx0XHRcdFx0c2l0ZXMgYW5kIHBvc3NpYmx5IHRoZSBhYmlsaXR5IHRvIGRvd25sb2FkIHRoZSB3aG9sZSB2aWRlbyBpbmNsdWRpbmcgdmlzdWFsIGFuZCBhdWRpby4gZGVwZW5kaW5nIG9uXHJcblx0XHRcdFx0XHRcdHdoYXQgcGVvcGxlIHdhbnQ8YnIvPjxici8+PGJyLz5cclxuXHRcdFx0XHRcdFx0VGVzdGluZyBVUkw6IGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9cGNQaTRqUEFSMmNcclxuXHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cclxuXHRcdFx0XHQ8L0NvbnRhaW5lcj5cclxuXHRcdFx0PC9QYXBlcj5cclxuXHRcdClcclxuXHR9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cdHJlbmRlcigpe1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PFJlYWN0LkZyYWdtZW50PlxyXG5cdFx0XHRcdDxTdWJtaXRGb3JtLz5cclxuXHRcdFx0XHQ8SW5mb1BhbmVsLz5cclxuXHRcdFx0PC9SZWFjdC5GcmFnbWVudD5cclxuXHRcdCk7XHJcblx0fVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=