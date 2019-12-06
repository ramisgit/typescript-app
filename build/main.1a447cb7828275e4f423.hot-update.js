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

/***/ "./src/components/pages/Account.tsx":
/*!******************************************!*\
  !*** ./src/components/pages/Account.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
const axios_1 = __webpack_require__(/*! ../static/axios */ "./src/components/static/axios.ts");
const Button_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js"));
const Card_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js"));
const CardActionArea_1 = __importDefault(__webpack_require__(/*! @material-ui/core/CardActionArea */ "./node_modules/@material-ui/core/esm/CardActionArea/index.js"));
const CardContent_1 = __importDefault(__webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js"));
const CardMedia_1 = __importDefault(__webpack_require__(/*! @material-ui/core/CardMedia */ "./node_modules/@material-ui/core/esm/CardMedia/index.js"));
const Typography_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js"));
const Container_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js"));
const FormGroup_1 = __importDefault(__webpack_require__(/*! @material-ui/core/FormGroup */ "./node_modules/@material-ui/core/esm/FormGroup/index.js"));
const styles_1 = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
const Grid_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js"));
const useStyles = styles_1.makeStyles({
    card: {
        maxWidth: 250,
    },
    media: {
        height: 160,
    },
});
function Account(props) {
    let oldPasswordRef = react_1.default.createRef();
    let newPasswordRef = react_1.default.createRef();
    let formRef = react_1.default.createRef();
    let imageFileRef = react_1.default.createRef();
    const classes = useStyles();
    function setImgSrc() {
        return `http://localhost:8080/upload/user/${props.username}`;
    }
    function deleteUser() {
        const response = axios_1.post("/users/delete", JSON.stringify({ username: props.username, email: props.username, password: props.password }), true);
        response.onload = () => {
            if (response.responseText.includes("Success")) {
                localStorage.removeItem('token');
                props.removeAuth(false);
            }
        };
    }
    function logout() {
        localStorage.removeItem('token');
        props.removeAuth(false);
    }
    function updateUser(e) {
        e.preventDefault();
        const response = axios_1.post("/users/update", JSON.stringify({ username: props.username, oldPassword: props.password, newPassword: newPasswordRef.current.value }), true);
        response.onload = () => {
            if (response.responseText.includes("Success")) {
                console.log("Successfully changed password");
                localStorage.removeItem("token");
                localStorage.setItem("token", `${props.username}?${newPasswordRef.current.value}`);
            }
        };
    }
    function uploadImage(e) {
        e.preventDefault();
        //////delte this later maybe....
        var formdata = new FormData();
        let username = props.username;
        formdata.append("username", username);
        formdata.append("file", imageFileRef.current.files[0]);
        console.log("dd" + imageFileRef.current.files[0].name);
        const response = axios_1.post("/upload", formdata, false);
        response.onload = () => {
            console.log("rfeeee: " + response.responseText);
            if (response.responseText.includes("Success")) {
                console.log("text: " + response.responseText);
                console.log("Successfully uploaded image");
            }
        };
        window.location.reload();
    }
    function justReturn() {
        return false;
    }
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Grid_1.default, { container: true, justify: "center", alignItems: "center" },
            react_1.default.createElement(Grid_1.default, { item: true, xs: 3 },
                react_1.default.createElement(Card_1.default, { className: classes.card },
                    react_1.default.createElement(CardActionArea_1.default, null,
                        react_1.default.createElement(CardMedia_1.default, { className: classes.media, image: setImgSrc(), title: "My profile picture", ref: imageFileRef }),
                        react_1.default.createElement(CardContent_1.default, null,
                            react_1.default.createElement(Typography_1.default, { gutterBottom: true, variant: "h5", component: "h2" },
                                "You are logged in as ",
                                react_1.default.createElement("strong", null, props.username))))))),
        react_1.default.createElement("form", null,
            react_1.default.createElement(FormGroup_1.default, null,
                react_1.default.createElement("label", null, "Change password:")),
            react_1.default.createElement(FormGroup_1.default, null,
                react_1.default.createElement("input", { ref: oldPasswordRef, placeholder: "current password", type: "password" })),
            react_1.default.createElement(FormGroup_1.default, null,
                react_1.default.createElement("input", { ref: newPasswordRef, placeholder: "new password", type: "password" })),
            react_1.default.createElement(FormGroup_1.default, null,
                react_1.default.createElement(Button_1.default, { type: "submit", onClick: updateUser }, "Submit"))),
        react_1.default.createElement(Container_1.default, null,
            react_1.default.createElement("form", { encType: "multipart/form-data", method: "POST", onSubmit: justReturn, ref: formRef },
                react_1.default.createElement(FormGroup_1.default, null,
                    react_1.default.createElement("label", null, "Upload profile picture:")),
                react_1.default.createElement(FormGroup_1.default, null,
                    react_1.default.createElement("input", { ref: imageFileRef, type: "file" })),
                react_1.default.createElement(FormGroup_1.default, null,
                    react_1.default.createElement(Button_1.default, { onClick: uploadImage }, "Submit")))),
        react_1.default.createElement("br", null),
        react_1.default.createElement("br", null),
        react_1.default.createElement("br", null),
        react_1.default.createElement("br", null),
        react_1.default.createElement(react_router_dom_1.NavLink, { onClick: logout, to: "/Login", type: "submit", className: "form-control" }, "Logout"),
        react_1.default.createElement(react_router_dom_1.NavLink, { onClick: deleteUser, to: "/Login", type: "submit", className: "form-control" }, "Delete Account")));
}
exports.default = Account;


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
            const response = axios_1.post("/download", JSON.stringify({ url: URLinput, type: type, extension: ext }), false);
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


/***/ }),

/***/ "./src/components/pages/Post.tsx":
/*!***************************************!*\
  !*** ./src/components/pages/Post.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const axios_1 = __webpack_require__(/*! ../static/axios */ "./src/components/static/axios.ts");
const Paper_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js"));
const Grid_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js"));
const Button_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js"));
const Avatar_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/esm/Avatar/index.js"));
const TextField_1 = __importDefault(__webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js"));
const Modal_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Modal */ "./node_modules/@material-ui/core/esm/Modal/index.js"));
const Backdrop_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Backdrop */ "./node_modules/@material-ui/core/esm/Backdrop/index.js"));
const Fade_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Fade */ "./node_modules/@material-ui/core/esm/Fade/index.js"));
const Card_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js"));
const CardActionArea_1 = __importDefault(__webpack_require__(/*! @material-ui/core/CardActionArea */ "./node_modules/@material-ui/core/esm/CardActionArea/index.js"));
const CardContent_1 = __importDefault(__webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js"));
const CardMedia_1 = __importDefault(__webpack_require__(/*! @material-ui/core/CardMedia */ "./node_modules/@material-ui/core/esm/CardMedia/index.js"));
const styles_1 = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
const Typography_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js"));
const Container_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js"));
const ExpansionPanel_1 = __importDefault(__webpack_require__(/*! @material-ui/core/ExpansionPanel */ "./node_modules/@material-ui/core/esm/ExpansionPanel/index.js"));
const ExpansionPanelSummary_1 = __importDefault(__webpack_require__(/*! @material-ui/core/ExpansionPanelSummary */ "./node_modules/@material-ui/core/esm/ExpansionPanelSummary/index.js"));
const ExpansionPanelDetails_1 = __importDefault(__webpack_require__(/*! @material-ui/core/ExpansionPanelDetails */ "./node_modules/@material-ui/core/esm/ExpansionPanelDetails/index.js"));
const Box_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js"));
const Badge_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Badge */ "./node_modules/@material-ui/core/esm/Badge/index.js"));
const Mail_1 = __importDefault(__webpack_require__(/*! @material-ui/icons/Mail */ "./node_modules/@material-ui/icons/Mail.js"));
const dateStyle = {
    color: "grey",
    fontSize: "12px"
};
const cardStyle = {
    padding: "0px 0px 0px 0px",
    margin: "0px 0px 0px 0px",
};
const timeStampStyle = {
    fontSize: "12px",
    color: "grey"
};
const styles = {
    left: {
        display: 'flex', justifyContent: 'left'
    },
    right: {
        display: 'flex', justifyContent: 'right'
    },
    center: {
        display: 'flex', justifyContent: 'center'
    },
    bottom: {
        display: 'flex', justifyContent: 'bottom'
    }
};
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
    card: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
    likeDislike: {
        width: 30,
        height: 20,
    }
}));
const ExpansionPanel = styles_1.withStyles({
    root: {
        border: '1px solid rgba(0, 0, 0, .125)',
        boxShadow: 'none',
        '&:not(:last-child)': {
            borderBottom: 0,
        },
        '&:before': {
            display: 'none',
        },
        '&$expanded': {
            margin: 'auto',
        },
    },
    expanded: {},
})(ExpansionPanel_1.default);
const ExpansionPanelSummary = styles_1.withStyles({
    root: {
        backgroundColor: 'rgba(0, 0, 0, .03)',
        borderBottom: '1px solid rgba(0, 0, 0, .125)',
        marginBottom: -1,
        minHeight: 56,
        '&$expanded': {
            minHeight: 56,
        },
    },
    content: {
        '&$expanded': {
            margin: '12px 0',
        },
    },
    expanded: {},
})(ExpansionPanelSummary_1.default);
const ExpansionPanelDetails = styles_1.withStyles(theme => ({
    root: {
        padding: theme.spacing(2),
    },
}))(ExpansionPanelDetails_1.default);
function CommentModal(props) {
    const descriptionRef = react_1.default.createRef();
    const [textLimit, setTextLimit] = react_1.default.useState(255);
    const classes = useStyles();
    const [open, setOpen] = react_1.default.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("button", { type: "button", onClick: handleOpen }, "ReplyButton"),
        react_1.default.createElement(Modal_1.default, { "aria-labelledby": "transition-modal-title", "aria-describedby": "transition-modal-description", className: classes.modal, open: open, onClose: handleClose, closeAfterTransition: true, BackdropComponent: Backdrop_1.default, BackdropProps: {
                timeout: 500,
            } },
            react_1.default.createElement(Fade_1.default, { in: open },
                react_1.default.createElement("div", { className: classes.paper },
                    react_1.default.createElement("h2", { id: "transition-modal-title" }, "Reply"),
                    react_1.default.createElement(TextField_1.default, { onChange: () => setTextLimit(255 - descriptionRef.current.value.length), ref: descriptionRef, rows: "3", placeholder: "response" }),
                    react_1.default.createElement("p", null, textLimit),
                    react_1.default.createElement(Button_1.default, { onClick: props.onHide }, "Close"),
                    react_1.default.createElement(Button_1.default, { onClick: (e) => props.posthandler(e, descriptionRef.current.value), color: "primary" }, "Post"))))));
}
function Comment(props) {
    const [childData, setChildData] = react_1.default.useState();
    const [parentComment, setParentComment] = react_1.default.useState();
    const [parentTime, setParentTime] = react_1.default.useState();
    const [likes, setLikes] = react_1.default.useState();
    const classes = useStyles();
    const commentRef = react_1.default.createRef();
    function loadData() {
        setChildData(props.childComments);
    }
    function upvoteBtn(e) {
        e.preventDefault();
        setLikes(likes + 1);
    }
    function downvoteBtn(e) {
        e.preventDefault();
        setLikes(likes - 1);
    }
    const [expanded, setExpanded] = react_1.default.useState('panel1');
    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        loadData,
        react_1.default.createElement(Grid_1.default, { container: true, xs: 2 },
            react_1.default.createElement(Card_1.default, { className: classes.card },
                react_1.default.createElement(CardActionArea_1.default, null,
                    react_1.default.createElement(CardMedia_1.default, { className: classes.media, image: props.src, title: "Avatar image" }),
                    react_1.default.createElement(CardContent_1.default, null,
                        react_1.default.createElement(Typography_1.default, { gutterBottom: true, variant: "h5", component: "h2" },
                            react_1.default.createElement("i", null, props.username)))))),
        react_1.default.createElement(Grid_1.default, { container: true, xs: 10 },
            react_1.default.createElement("p", { style: timeStampStyle }, props.time),
            react_1.default.createElement("p", { ref: commentRef }, props.comment),
            react_1.default.createElement(Grid_1.default, { container: true, xs: 12 },
                react_1.default.createElement(Avatar_1.default, { className: classes.likeDislike, onClick: upvoteBtn, src: "http://localhost:8080/upload/files/thumbsup.jpg", alt: "Generic placeholder" }),
                react_1.default.createElement("pre", null, " "),
                react_1.default.createElement("p", null, likes),
                react_1.default.createElement(Avatar_1.default, { className: classes.likeDislike, onClick: downvoteBtn, src: "http://localhost:8080/upload/files/thumbsdown.jpg", alt: "Generic placeholder" }),
                react_1.default.createElement("pre", null, " "),
                react_1.default.createElement(Button_1.default, { onClick: (event) => props.replyHandler(event, props.comment, props.time), variant: "outlined", color: "primary" }, "REPLY"))),
        react_1.default.createElement(Grid_1.default, { container: true, xs: 12 },
            react_1.default.createElement(ExpansionPanel, { square: true, expanded: expanded === 'panel1', onChange: handleChange('panel1') },
                react_1.default.createElement(ExpansionPanelSummary, { "aria-controls": "panel1d-content", id: "panel1d-header" },
                    react_1.default.createElement(Typography_1.default, null,
                        react_1.default.createElement(Box_1.default, { display: "flex" },
                            react_1.default.createElement(Box_1.default, { m: 2 },
                                react_1.default.createElement(Badge_1.default, { badgeContent: childData.length, color: "primary" },
                                    "unread messages ",
                                    react_1.default.createElement(Mail_1.default, null)))))),
                react_1.default.createElement(ExpansionPanelDetails, null,
                    react_1.default.createElement(Typography_1.default, null, childData.map((data) => {
                        console.log("childData: " + data);
                        return (react_1.default.createElement(react_1.default.Fragment, null,
                            react_1.default.createElement(Grid_1.default, { key: data.time, container: true, xs: 2 },
                                react_1.default.createElement(Card_1.default, { className: classes.card },
                                    react_1.default.createElement(CardActionArea_1.default, null,
                                        react_1.default.createElement(CardMedia_1.default, { className: classes.media, image: data.src, title: "Generic placeholder" }),
                                        react_1.default.createElement(CardContent_1.default, null,
                                            react_1.default.createElement(Typography_1.default, { gutterBottom: true, variant: "h5", component: "h2" },
                                                react_1.default.createElement("p", null,
                                                    react_1.default.createElement("i", null, data.username))))))),
                            react_1.default.createElement(Grid_1.default, { container: true, xs: 10 },
                                react_1.default.createElement("p", { style: timeStampStyle }, data.time),
                                react_1.default.createElement("p", null, data.comment))));
                    })))))));
}
function Post(props) {
    const blackoutRef = react_1.default.createRef();
    const [data, setData] = react_1.default.useState();
    const [parentComment, setParentComment] = react_1.default.useState();
    const [childData, setChildData] = react_1.default.useState();
    const [postDescription, setPostDescription] = react_1.default.useState();
    const [postSrc, setPostSrc] = react_1.default.useState();
    const [postTime, setPostTime] = react_1.default.useState();
    const [showCommentModal, setShowCommentModal] = react_1.default.useState();
    const [likes, setLikes] = react_1.default.useState();
    const classes = useStyles();
    function loadData() {
        const response = axios_1.post("/forum/comment/get", getParam("title"), true);
        response.onload = () => {
            console.log("loading data for ..." + console.log(location.search));
            let dat = JSON.parse(response.responseText);
            console.log(dat);
            setData(dat.commentData);
            setPostDescription(dat.description);
            setPostSrc(dat.src);
            setPostTime(dat.date);
            console.log("data: " + response.responseText);
        };
    }
    function getUrlParams() {
        console.log("FULL DATA: " + location.search);
        return new URLSearchParams(location.search);
    }
    function getParam(param) {
        let search = getUrlParams();
        return search.get(param) || "";
    }
    function postBtn(e, commentText) {
        e.preventDefault();
        let username = props.username;
        const response = axios_1.post("/users/login", JSON.stringify({ parentComment: parentComment, commentText: commentText,
            post: getParam("title"), parentTime: postTime, username: username.split("?")[0] }), true);
        response.onload = () => {
            console.log("Successfully posted comment");
        };
        window.location.reload();
    }
    function upvoteBtn(e) {
        e.preventDefault();
        setLikes({ likes: likes + 1 });
    }
    function downvoteBtn(e) {
        e.preventDefault();
        setLikes(likes - 1);
    }
    function replyBtn(e, parentCommentText, parentTimeText) {
        e.preventDefault();
        if (props.authenticated === true) {
            setParentComment(parentCommentText);
            setPostTime(parentTimeText);
            setShowCommentModal(true);
        }
        else {
            alert("please log in or create an account to make a comment.");
        }
        console.log("commenting");
    }
    function cancelBtn(e) {
        e.preventDefault();
        blackoutRef.current.style.display = "none";
    }
    function goBack() {
        window.history.back();
    }
    return (react_1.default.createElement(react_1.default.Fragment, null,
        loadData,
        react_1.default.createElement(CommentModal, { posthandler: postBtn, show: showCommentModal, onHide: () => setShowCommentModal(false) }),
        react_1.default.createElement(Button_1.default, { onClick: goBack, className: "btn", type: "button" }, "Back"),
        react_1.default.createElement(Container_1.default, null,
            react_1.default.createElement(Grid_1.default, { container: true, xs: 2 },
                react_1.default.createElement(Card_1.default, { className: classes.card },
                    react_1.default.createElement(CardActionArea_1.default, null,
                        react_1.default.createElement(CardMedia_1.default, { className: classes.media, image: postSrc, title: "Contemplative Reptile" }),
                        react_1.default.createElement(CardContent_1.default, null,
                            react_1.default.createElement(Typography_1.default, { gutterBottom: true, variant: "h5", component: "h2" },
                                react_1.default.createElement("p", { style: styles.center },
                                    react_1.default.createElement("i", null, props.username))))))),
            react_1.default.createElement(Grid_1.default, { container: true, xs: 10 },
                react_1.default.createElement("h3", null, getParam("title")),
                react_1.default.createElement("p", null, postDescription),
                react_1.default.createElement("p", { style: dateStyle },
                    "Post time: ",
                    postTime))),
        react_1.default.createElement("hr", null),
        react_1.default.createElement(Grid_1.default, { container: true, sm: 12 },
            react_1.default.createElement(Avatar_1.default, { className: classes.likeDislike, onClick: upvoteBtn, src: "http://localhost:8080/upload/files/thumbsup.jpg", alt: "Generic placeholder" }),
            react_1.default.createElement("pre", null, " "),
            react_1.default.createElement("p", null, likes),
            react_1.default.createElement(Avatar_1.default, { className: classes.likeDislike, onClick: downvoteBtn, src: "http://localhost:8080/upload/files/thumbsdown.jpg", alt: "Generic placeholder" }),
            react_1.default.createElement("pre", null, " "),
            react_1.default.createElement(Button_1.default, { onClick: (e) => replyBtn(e, getParam("title"), getParam("date")), variant: "outlined", color: "primary" }, "REPLY")),
        react_1.default.createElement("hr", null),
        react_1.default.createElement("h4", null, "Comments"),
        data.map((data) => {
            return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(Grid_1.default, { container: true },
                    react_1.default.createElement(Paper_1.default, null,
                        react_1.default.createElement(Comment, { childComments: data.childComments, key: data.time, replyHandler: replyBtn, comment: data.comment, time: data.time, src: data.src, username: data.username })))));
        })));
}
exports.default = Post;


/***/ }),

/***/ "./src/components/pages/Register.tsx":
/*!*******************************************!*\
  !*** ./src/components/pages/Register.tsx ***!
  \*******************************************/
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
        marginTop: theme.spacing(3),
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
function SignUp() {
    let usernameRef = react_1.default.createRef();
    let emailRef = react_1.default.createRef();
    let passwordRef = react_1.default.createRef();
    const [response, setResponse] = react_1.default.useState("");
    function focusSubmitInput(e) {
        e.preventDefault();
        console.log("dat: " + usernameRef.current.value);
        const username = usernameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log("username: " + username + ", email: " + email + ", pass: " + password);
        const response = axios_1.post("/users/register", JSON.stringify({ username: username, email: email, password: password }), true);
        response.onload = () => {
            setResponse(response.responseText);
        };
    }
    //clear all input fields
    const classes = useStyles();
    return (react_1.default.createElement(Container_1.default, { component: "main", maxWidth: "xs" },
        react_1.default.createElement(Warning, { val: response }),
        react_1.default.createElement(CssBaseline_1.default, null),
        react_1.default.createElement("div", { className: classes.paper },
            react_1.default.createElement(Avatar_1.default, { className: classes.avatar },
                react_1.default.createElement(LockOutlined_1.default, null)),
            react_1.default.createElement(Typography_1.default, { component: "h1", variant: "h5" }, "Sign up"),
            react_1.default.createElement("form", { className: classes.form, noValidate: true },
                react_1.default.createElement(Grid_1.default, { container: true, spacing: 2 },
                    react_1.default.createElement(Grid_1.default, { item: true, xs: 12 },
                        react_1.default.createElement(TextField_1.default, { inputRef: usernameRef, variant: "outlined", required: true, fullWidth: true, id: "username", label: "Username", name: "Username", autoComplete: "username" })),
                    react_1.default.createElement(Grid_1.default, { item: true, xs: 12 },
                        react_1.default.createElement(TextField_1.default, { inputRef: emailRef, variant: "outlined", required: true, fullWidth: true, id: "email", label: "Email Address", name: "email", autoComplete: "email" })),
                    react_1.default.createElement(Grid_1.default, { item: true, xs: 12 },
                        react_1.default.createElement(TextField_1.default, { inputRef: passwordRef, variant: "outlined", required: true, fullWidth: true, name: "password", label: "Password", type: "password", id: "password", autoComplete: "current-password" })),
                    react_1.default.createElement(Grid_1.default, { item: true, xs: 12 },
                        react_1.default.createElement(FormControlLabel_1.default, { control: react_1.default.createElement(Checkbox_1.default, { value: "allowExtraEmails", color: "primary" }), label: "I want to receive inspiration, marketing promotions and updates via email." }))),
                react_1.default.createElement(Button_1.default, { type: "submit", fullWidth: true, variant: "contained", color: "primary", className: classes.submit, onClick: focusSubmitInput }, "Sign Up"),
                react_1.default.createElement(Grid_1.default, { container: true, justify: "flex-end" },
                    react_1.default.createElement(Grid_1.default, { item: true },
                        react_1.default.createElement(Link_1.default, { href: "/Login", variant: "body2" }, "Already have an account? Sign in"))))),
        react_1.default.createElement(Box_1.default, { mt: 5 },
            react_1.default.createElement(Copyright, null))));
}
exports.default = SignUp;


/***/ }),

/***/ "./src/components/static/axios.ts":
/*!****************************************!*\
  !*** ./src/components/static/axios.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.post = (url, data, json) => {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://localhost:8080" + url, true);
    if (json === true)
        xhttp.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    xhttp.send(data);
    console.log("progressing....");
    return xhttp;
};
(url, data, json) => {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://localhost:8080" + url, false);
    if (json === true)
        xhttp.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    xhttp.send(data);
    console.log("progressing....");
    return xhttp;
};
exports.get = (url) => {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:8080" + url, true);
    xhttp.send();
    console.log("progressing....");
    return xhttp;
};


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91bWQvLi9zcmMvQXBwLnRzeCIsIndlYnBhY2s6Ly91bWQvLi9zcmMvY29tcG9uZW50cy9wYWdlcy9BY2NvdW50LnRzeCIsIndlYnBhY2s6Ly91bWQvLi9zcmMvY29tcG9uZW50cy9wYWdlcy9JbmRleC50c3giLCJ3ZWJwYWNrOi8vdW1kLy4vc3JjL2NvbXBvbmVudHMvcGFnZXMvTG9naW4udHN4Iiwid2VicGFjazovL3VtZC8uL3NyYy9jb21wb25lbnRzL3BhZ2VzL1Bvc3QudHN4Iiwid2VicGFjazovL3VtZC8uL3NyYy9jb21wb25lbnRzL3BhZ2VzL1JlZ2lzdGVyLnRzeCIsIndlYnBhY2s6Ly91bWQvLi9zcmMvY29tcG9uZW50cy9zdGF0aWMvYXhpb3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUdBQTBCO0FBRTFCLGtJQUEwRTtBQUMxRSx1SkFBb0Q7QUFFcEQsOEhBQWdEO0FBQ2hELDhIQUFnRDtBQUNoRCx5SEFBNkM7QUFDN0Msd0lBQTBDO0FBQzFDLGtJQUFtRDtBQUNuRCx5SEFBNkM7QUFDN0MsK0hBQWlEO0FBQ2pELCtIQUFpRDtBQUNqRCxrSUFBbUQ7QUFDbkQsK0hBQWlEO0FBQ2pELHlIQUE2QztBQUM3Qyx5R0FBK0M7QUFDL0Msc0hBQTJDO0FBQzNDLHlIQUE2QztBQUU3Qyw2SEFBMkU7QUFHM0UsTUFBTSxTQUFTLEdBQUcsbUJBQVUsQ0FBQyxDQUFDLEtBQVksRUFBRSxFQUFFLENBQzdDLHFCQUFZLENBQUM7SUFDWixTQUFTLEVBQUU7UUFDVixLQUFLLEVBQUUsT0FBTztRQUNkLFdBQVcsRUFBRSxNQUFNO0tBQ25CO0lBQ0QsSUFBSSxFQUFFO1FBQ0wsUUFBUSxFQUFFLFFBQVE7UUFDbEIsZUFBZSxFQUFFLE9BQU87UUFDeEIsU0FBUyxFQUFFLE9BQU87UUFDbEIsT0FBTyxFQUFFLG9CQUFvQjtLQUM3QjtJQUNELGFBQWEsRUFBRTtRQUNkLGVBQWUsRUFBRSx3REFBd0Q7UUFD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LEVBQUUsSUFBYSxFQUFDO0lBQ3pELElBQUksS0FBSyxHQUFHLElBQUksY0FBYyxFQUFFLENBQUM7SUFFakMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsdUJBQXVCLEdBQUcsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3pELElBQUksSUFBSSxLQUFLLElBQUk7UUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxFQUFFLGlDQUFpQyxDQUFDLENBQUM7SUFDN0YsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDO0lBQzlCLE9BQU8sS0FBSyxDQUFDO0FBQ2pCLENBQUM7QUFDWSxXQUFHLEdBQUcsQ0FBQyxHQUFVLEVBQUUsRUFBRTtJQUNqQyxJQUFJLEtBQUssR0FBRyxJQUFJLGNBQWMsRUFBRSxDQUFDO0lBQ2pDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLHVCQUF1QixHQUFHLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN2RCxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDYixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDO0lBQzlCLE9BQU8sS0FBSyxDQUFDO0FBQ2QsQ0FBQyIsImZpbGUiOiJtYWluLjFhNDQ3Y2I3ODI4Mjc1ZTRmNDIzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIGFzIFJvdXRlciwgUm91dGUsIFN3aXRjaCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXInO1xuXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vY29tcG9uZW50cy9sYXlvdXQvSGVhZGVyJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9jb21wb25lbnRzL2xheW91dC9Gb290ZXInO1xuaW1wb3J0IEFib3V0IGZyb20gJy4vY29tcG9uZW50cy9wYWdlcy9BYm91dCc7XG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcbmltcG9ydCBSZWdpc3RlciBmcm9tICcuL2NvbXBvbmVudHMvcGFnZXMvUmVnaXN0ZXInO1xuaW1wb3J0IEluZGV4IGZyb20gJy4vY29tcG9uZW50cy9wYWdlcy9JbmRleCc7XG5pbXBvcnQgQ29udGFjdCBmcm9tICcuL2NvbXBvbmVudHMvcGFnZXMvQ29udGFjdCc7XG5pbXBvcnQgQWNjb3VudCBmcm9tICcuL2NvbXBvbmVudHMvcGFnZXMvQWNjb3VudCc7XG5pbXBvcnQgUHJvamVjdHMgZnJvbSAnLi9jb21wb25lbnRzL3BhZ2VzL1Byb2plY3RzJztcbmltcG9ydCBTdXBwb3J0IGZyb20gJy4vY29tcG9uZW50cy9wYWdlcy9TdXBwb3J0JztcbmltcG9ydCBGb3J1bSBmcm9tICcuL2NvbXBvbmVudHMvcGFnZXMvRm9ydW0nO1xuaW1wb3J0IHtwb3N0fSBmcm9tICcuL2NvbXBvbmVudHMvc3RhdGljL2F4aW9zJztcbmltcG9ydCBQb3N0IGZyb20gJy4vY29tcG9uZW50cy9wYWdlcy9Qb3N0JztcbmltcG9ydCBMb2dpbiBmcm9tICcuL2NvbXBvbmVudHMvcGFnZXMvTG9naW4nO1xuXG5pbXBvcnQgeyBtYWtlU3R5bGVzLCBUaGVtZSwgY3JlYXRlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcblxuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+XG5cdGNyZWF0ZVN0eWxlcyh7XG5cdFx0cGFyYWdyYXBoOiB7XG5cdFx0XHRjb2xvcjogXCJ3aGl0ZVwiLFxuXHRcdFx0cGFkZGluZ0xlZnQ6IFwiMjBweFwiXG5cdFx0fSxcblx0XHRtYWluOiB7XG5cdFx0XHRtYXhXaWR0aDogXCIxMTQwcHhcIixcblx0XHRcdGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiLFxuXHRcdFx0bWluSGVpZ2h0OiBcIjEwMHZoXCIsXG5cdFx0XHRwYWRkaW5nOiBcIjkwcHggMzBweCAwcHggMzBweFwiXG5cdFx0fSxcblx0XHRtYWluQ29udGFpbmVyOiB7XG5cdFx0XHRiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKGh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC91cGxvYWQvZmlsZXMvYmFja2dyb3VuZC5qcGcpXCIsXG5cdFx0XHRtaW5IZWlnaHQ6IFwiMTAwdmhcIixcblx0XHRcdHBhZGRpbmc6IFwiMHB4XCIsXG5cdFx0XHRtYXJnaW46IFwiMHB4XCJcblx0XHR9XG5cdH0pLFxuXHRcbik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCAoKSB7XG5cdGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblx0XG5cdGNvbnN0IFthdXRoZW50aWNhdGVkLCBzZXRBdXRoZW50aWNhdGVkXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcblx0Y29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcblx0Y29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcblx0XG5cdGZ1bmN0aW9uIGF1dGhlbnRpY2F0ZV91c2VyKCl7XG5cdFx0Y29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcblx0XHRjb25zb2xlLmxvZyhcIkF1dGhlbnRpY2F0aW5nIHVzZXIgYXQgdG9wIGxheWVyXCIpXG5cdFx0aWYgKHRva2VuKSB7XG5cdFx0XHRjb25zdCB1Om51bGwgfCBzdHJpbmcgPSB0b2tlbi5zcGxpdChcIj9cIilbMF07IHNldFVzZXJuYW1lKHUpO1xuXHRcdFx0Y29uc3QgcDpudWxsIHwgc3RyaW5nID0gdG9rZW4uc3BsaXQoXCI/XCIpWzFdOyBzZXRQYXNzd29yZChwKTtcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gcG9zdChcIi91c2Vycy9sb2dpblwiLCBKU09OLnN0cmluZ2lmeSh7dXNlcm5hbWU6dXNlcm5hbWUsIGVtYWlsOnVzZXJuYW1lLCBwYXNzd29yZDpwYXNzd29yZH0pLCB0cnVlKTtcblx0XHRcdHJlc3BvbnNlLm9ubG9hZCA9ICgpID0+IHtcblx0XHRcdFx0aWYgKHJlc3BvbnNlLnJlc3BvbnNlVGV4dC5pbmNsdWRlcyhcIlN1Y2Nlc3NcIikpe1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiU3VjY2Vzc2Z1bGx5IGF1dGhlbnRpY2F0ZWQgdXNlclwiKVxuXHRcdFx0XHRcdHNldEF1dGgodHJ1ZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblx0XG5cdGZ1bmN0aW9uIHNldEF1dGgodmFsOiBib29sZWFuKXtcblx0XHRzZXRBdXRoZW50aWNhdGVkKHZhbCk7XG5cdH1cblx0YXV0aGVudGljYXRlX3VzZXIoKTtcblx0cmV0dXJuIChcblx0XHQ8Um91dGVyPlxuXHRcdFx0PEdyaWQgY29udGFpbmVyIHhzPXsxMn0gY2xhc3NOYW1lPXtjbGFzc2VzLm1haW5Db250YWluZXJ9PlxuXHRcdFx0XHQ8SGVhZGVyIGF1dGg9e2F1dGhlbnRpY2F0ZWR9Lz5cblx0XHRcdFx0PEdyaWQgaXRlbSBjb250YWluZXIgeHM9ezEyfSBqdXN0aWZ5PVwiY2VudGVyXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiID5cblx0XHRcdFx0XHQ8Q29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5tYWlufT5cblx0XHRcdFx0XHRcdDxTd2l0Y2g+XG5cdFx0XHRcdFx0XHRcdDxSb3V0ZSBleGFjdCBwYXRoPScvJyByZW5kZXI9eyhwcm9wcykgPT4gKDxJbmRleC8+KX0vPlxuXHRcdFx0XHRcdFx0XHQ8Um91dGUgcGF0aD0nL0ZvcnVtJyByZW5kZXI9eyhwcm9wcykgPT4gKDxGb3J1bSBhdXRoZW50aWNhdGVkPXthdXRoZW50aWNhdGVkfSBteV91c2VybmFtZT17dXNlcm5hbWV9IG15X3Bhc3N3b3JkPXtwYXNzd29yZH0gLz4pfS8+XG5cdFx0XHRcdFx0XHRcdDxSb3V0ZSBwYXRoPScvTG9naW4nIHJlbmRlcj17KHByb3BzKSA9PiAoPExvZ2luIGF1dGhlbnRpY2F0ZT17YXV0aGVudGljYXRlX3VzZXJ9IC8+KX0vPlxuXHRcdFx0XHRcdFx0XHQ8Um91dGUgcGF0aD0nL1JlZ2lzdGVyJyBjb21wb25lbnQ9e1JlZ2lzdGVyfSAvPlxuXHRcdFx0XHRcdFx0XHQ8Um91dGUgcGF0aD0nL0Fib3V0IHVzJyBjb21wb25lbnQ9e0Fib3V0fSAvPlxuXHRcdFx0XHRcdFx0XHQ8Um91dGUgcGF0aD0nL0FjY291bnQnIHJlbmRlcj17KHByb3BzKSA9PiAoPEFjY291bnQgcmVtb3ZlQXV0aD17c2V0QXV0aH0gdXNlcm5hbWU9e3VzZXJuYW1lfSBwYXNzd29yZD17cGFzc3dvcmR9Lz4pfS8+XG5cdFx0XHRcdFx0XHRcdDxSb3V0ZSBwYXRoPScvRm9ydW0vUG9zdCcgcmVuZGVyPXsocHJvcHMpID0+ICg8UG9zdCBhdXRoZW50aWNhdGVkPXthdXRoZW50aWNhdGVkfSB1c2VybmFtZT17dXNlcm5hbWV9IHBhc3N3b3JkPXtwYXNzd29yZH0vPil9Lz5cblx0XHRcdFx0XHRcdFx0PFJvdXRlIHBhdGg9Jy9Db250YWN0JyBjb21wb25lbnQ9e0NvbnRhY3R9IC8+XG5cdFx0XHRcdFx0XHRcdDxSb3V0ZSBwYXRoPScvUHJvamVjdHMnIGNvbXBvbmVudD17UHJvamVjdHN9IC8+XG5cdFx0XHRcdFx0XHRcdDxSb3V0ZSBwYXRoPScvU3VwcG9ydCcgY29tcG9uZW50PXtTdXBwb3J0fSAvPlxuXHRcdFx0XHRcdFx0PC9Td2l0Y2g+XG5cdFx0XHRcdFx0PC9Db250YWluZXI+XG5cdFx0XHRcdDwvR3JpZD5cblx0XHRcdFx0PEZvb3Rlci8+XG5cdFx0XHQ8L0dyaWQ+XG5cdFx0PC9Sb3V0ZXI+XG5cdCk7XG59XG5cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IE5hdkxpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgcG9zdCB9IGZyb20gJy4uL3N0YXRpYy9heGlvcyc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IENhcmQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZCc7XHJcbmltcG9ydCBDYXJkQWN0aW9uQXJlYSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQWN0aW9uQXJlYSc7XHJcbmltcG9ydCBDYXJkQWN0aW9ucyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQWN0aW9ucyc7XHJcbmltcG9ydCBDYXJkQ29udGVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQ29udGVudCc7XHJcbmltcG9ydCBDYXJkTWVkaWEgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZE1lZGlhJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyJztcclxuaW1wb3J0IEZvcm1Hcm91cCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtR3JvdXAnO1xyXG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2wnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XHJcbmludGVyZmFjZSBBY2NvdW50UHJvcHMge1xyXG5cdHJlbW92ZUF1dGg6IChhcmc6IGJvb2xlYW4pID0+IHZvaWQ7XHJcblx0dXNlcm5hbWU6IHN0cmluZyB8IG51bGw7XHJcblx0cGFzc3dvcmQ6IHN0cmluZyB8IG51bGw7XHJcbn1cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgY2FyZDoge1xyXG4gICAgbWF4V2lkdGg6IDI1MCxcclxuICB9LFxyXG4gIG1lZGlhOiB7XHJcbiAgICBoZWlnaHQ6IDE2MCxcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFjY291bnQocHJvcHM6IEFjY291bnRQcm9wcykge1xyXG5cdGxldCBvbGRQYXNzd29yZFJlZjphbnkgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuXHRsZXQgbmV3UGFzc3dvcmRSZWY6YW55ID0gUmVhY3QuY3JlYXRlUmVmKCk7XHJcblx0bGV0IGZvcm1SZWY6YW55ID0gUmVhY3QuY3JlYXRlUmVmKCk7XHJcblx0bGV0IGltYWdlRmlsZVJlZjphbnkgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuXHRjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblx0XHJcblx0ZnVuY3Rpb24gc2V0SW1nU3JjICgpIHtcclxuXHRcdHJldHVybiBgaHR0cDovL2xvY2FsaG9zdDo4MDgwL3VwbG9hZC91c2VyLyR7cHJvcHMudXNlcm5hbWV9YDtcclxuXHR9XHJcblx0ZnVuY3Rpb24gZGVsZXRlVXNlcigpIHtcclxuXHRcdGNvbnN0IHJlc3BvbnNlID0gcG9zdChcIi91c2Vycy9kZWxldGVcIiwgSlNPTi5zdHJpbmdpZnkoe3VzZXJuYW1lOnByb3BzLnVzZXJuYW1lLCBlbWFpbDpwcm9wcy51c2VybmFtZSwgcGFzc3dvcmQ6cHJvcHMucGFzc3dvcmR9KSwgdHJ1ZSk7XHJcblx0XHRyZXNwb25zZS5vbmxvYWQgPSAoKSA9PiB7XHJcblx0XHRcdGlmIChyZXNwb25zZS5yZXNwb25zZVRleHQuaW5jbHVkZXMoXCJTdWNjZXNzXCIpKXtcclxuXHRcdFx0XHRsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndG9rZW4nKTtcclxuXHRcdFx0XHRwcm9wcy5yZW1vdmVBdXRoKGZhbHNlKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHRmdW5jdGlvbiBsb2dvdXQgKCkge1xyXG5cdFx0bG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rva2VuJyk7XHJcblx0XHRwcm9wcy5yZW1vdmVBdXRoKGZhbHNlKTtcclxuXHR9XHJcblx0ZnVuY3Rpb24gdXBkYXRlVXNlciAoZTogYW55KSB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcclxuXHRcdGNvbnN0IHJlc3BvbnNlID0gcG9zdChcIi91c2Vycy91cGRhdGVcIiwgSlNPTi5zdHJpbmdpZnkoe3VzZXJuYW1lOnByb3BzLnVzZXJuYW1lLCBvbGRQYXNzd29yZDpwcm9wcy5wYXNzd29yZCwgbmV3UGFzc3dvcmQ6bmV3UGFzc3dvcmRSZWYuY3VycmVudC52YWx1ZX0pLCB0cnVlKTtcclxuXHRcdHJlc3BvbnNlLm9ubG9hZCA9ICgpID0+IHtcclxuXHRcdFx0aWYgKHJlc3BvbnNlLnJlc3BvbnNlVGV4dC5pbmNsdWRlcyhcIlN1Y2Nlc3NcIikpe1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiU3VjY2Vzc2Z1bGx5IGNoYW5nZWQgcGFzc3dvcmRcIik7XHJcblx0XHRcdFx0bG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ0b2tlblwiKTtcclxuXHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRva2VuXCIsIGAke3Byb3BzLnVzZXJuYW1lfT8ke25ld1Bhc3N3b3JkUmVmLmN1cnJlbnQudmFsdWV9YCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0XHJcblx0ZnVuY3Rpb24gdXBsb2FkSW1hZ2UgKGU6IGFueSkge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0Ly8vLy8vZGVsdGUgdGhpcyBsYXRlciBtYXliZS4uLi5cclxuXHJcblx0XHR2YXIgZm9ybWRhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuXHRcdGxldCB1c2VybmFtZTphbnkgPSBwcm9wcy51c2VybmFtZTtcclxuXHRcdGZvcm1kYXRhLmFwcGVuZChcInVzZXJuYW1lXCIsIHVzZXJuYW1lKTtcclxuXHRcdGZvcm1kYXRhLmFwcGVuZChcImZpbGVcIiwgaW1hZ2VGaWxlUmVmLmN1cnJlbnQuZmlsZXNbMF0pO1xyXG5cdFx0Y29uc29sZS5sb2coXCJkZFwiICsgaW1hZ2VGaWxlUmVmLmN1cnJlbnQuZmlsZXNbMF0ubmFtZSlcclxuXHRcdGNvbnN0IHJlc3BvbnNlID0gcG9zdChcIi91cGxvYWRcIiwgZm9ybWRhdGEsIGZhbHNlKTtcclxuXHRcdHJlc3BvbnNlLm9ubG9hZCA9ICgpID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJyZmVlZWU6IFwiICsgcmVzcG9uc2UucmVzcG9uc2VUZXh0KVxyXG5cdFx0XHRpZiAocmVzcG9uc2UucmVzcG9uc2VUZXh0LmluY2x1ZGVzKFwiU3VjY2Vzc1wiKSl7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coXCJ0ZXh0OiBcIiArIHJlc3BvbnNlLnJlc3BvbnNlVGV4dClcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhcIlN1Y2Nlc3NmdWxseSB1cGxvYWRlZCBpbWFnZVwiKVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHR3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcblx0fVxyXG5cdFx0XHJcblx0ZnVuY3Rpb24ganVzdFJldHVybiAoKSB7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG4gIFx0cmV0dXJuIChcclxuXHRcclxuXHRcdDxSZWFjdC5GcmFnbWVudD5cclxuXHRcdFx0PEdyaWQgY29udGFpbmVyIGp1c3RpZnk9XCJjZW50ZXJcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XHJcblx0XHRcdFx0PEdyaWQgaXRlbSB4cz17M30+XHJcblx0XHRcdFx0XHQ8Q2FyZCBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZH0+XHJcblx0XHRcdFx0XHRcdDxDYXJkQWN0aW9uQXJlYT5cclxuXHRcdFx0XHRcdFx0XHQ8Q2FyZE1lZGlhXHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMubWVkaWF9XHJcblx0XHRcdFx0XHRcdFx0XHRpbWFnZT17c2V0SW1nU3JjKCl9XHJcblx0XHRcdFx0XHRcdFx0XHR0aXRsZT1cIk15IHByb2ZpbGUgcGljdHVyZVwiXHJcblx0XHRcdFx0XHRcdFx0XHRyZWY9e2ltYWdlRmlsZVJlZn1cclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdDxDYXJkQ29udGVudD5cclxuXHRcdFx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5IGd1dHRlckJvdHRvbSB2YXJpYW50PVwiaDVcIiBjb21wb25lbnQ9XCJoMlwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRZb3UgYXJlIGxvZ2dlZCBpbiBhcyA8c3Ryb25nPntwcm9wcy51c2VybmFtZX08L3N0cm9uZz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cclxuXHRcdFx0XHRcdFx0XHQ8L0NhcmRDb250ZW50PlxyXG5cdFx0XHRcdFx0XHQ8L0NhcmRBY3Rpb25BcmVhPlxyXG5cdFx0XHRcdFx0PC9DYXJkPlxyXG5cdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0PC9HcmlkPlxyXG5cdFx0XHQ8Zm9ybT5cclxuXHRcdFx0XHQ8Rm9ybUdyb3VwPlxyXG5cdFx0XHRcdFx0PGxhYmVsPkNoYW5nZSBwYXNzd29yZDo8L2xhYmVsPlxyXG5cdFx0XHRcdDwvRm9ybUdyb3VwPlxyXG5cdFx0XHRcdDxGb3JtR3JvdXA+XHJcblx0XHRcdFx0XHQ8aW5wdXQgcmVmPXtvbGRQYXNzd29yZFJlZn0gcGxhY2Vob2xkZXI9XCJjdXJyZW50IHBhc3N3b3JkXCIgdHlwZT1cInBhc3N3b3JkXCIvPlxyXG5cdFx0XHRcdDwvRm9ybUdyb3VwPlxyXG5cdFx0XHRcdDxGb3JtR3JvdXA+XHJcblx0XHRcdFx0XHQ8aW5wdXQgcmVmPXtuZXdQYXNzd29yZFJlZn0gcGxhY2Vob2xkZXI9XCJuZXcgcGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIi8+XHJcblx0XHRcdFx0PC9Gb3JtR3JvdXA+XHJcblx0XHRcdFx0PEZvcm1Hcm91cD5cclxuXHRcdFx0XHRcdDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIG9uQ2xpY2s9e3VwZGF0ZVVzZXJ9PlN1Ym1pdDwvQnV0dG9uPlxyXG5cdFx0XHRcdDwvRm9ybUdyb3VwPlxyXG5cdFx0XHQ8L2Zvcm0+XHJcblx0XHRcdDxDb250YWluZXI+XHJcblx0XHRcdFx0PGZvcm0gZW5jVHlwZT1cIm11bHRpcGFydC9mb3JtLWRhdGFcIiBtZXRob2Q9XCJQT1NUXCIgb25TdWJtaXQ9e2p1c3RSZXR1cm59IHJlZj17Zm9ybVJlZn0+XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdDxGb3JtR3JvdXA+XHJcblx0XHRcdFx0XHRcdFx0XHQ8bGFiZWw+VXBsb2FkIHByb2ZpbGUgcGljdHVyZTo8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdDwvRm9ybUdyb3VwPlxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0PEZvcm1Hcm91cD5cclxuXHRcdFx0XHRcdFx0XHRcdDxpbnB1dCByZWY9e2ltYWdlRmlsZVJlZn0gdHlwZT1cImZpbGVcIi8+XHJcblx0XHRcdFx0XHRcdFx0PC9Gb3JtR3JvdXA+XHJcblx0XHRcdFx0XHRcdFx0PEZvcm1Hcm91cD5cclxuXHRcdFx0XHRcdFx0XHRcdDxCdXR0b24gb25DbGljaz17dXBsb2FkSW1hZ2V9PlN1Ym1pdDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdDwvRm9ybUdyb3VwPlxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdDwvZm9ybT5cclxuXHRcdFx0XHQ8L0NvbnRhaW5lcj5cclxuXHQgICAgICA8YnIvPjxici8+PGJyLz48YnIvPlxyXG5cdCAgICAgIFx0PE5hdkxpbmsgb25DbGljaz17bG9nb3V0fSB0bz1cIi9Mb2dpblwiIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIj5Mb2dvdXQ8L05hdkxpbms+XHJcblx0XHRcdDxOYXZMaW5rIG9uQ2xpY2s9e2RlbGV0ZVVzZXJ9IHRvPVwiL0xvZ2luXCIgdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiPkRlbGV0ZSBBY2NvdW50PC9OYXZMaW5rPlxyXG5cdCAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcblxyXG4gICAgKVxyXG5cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQgeyBwb3N0LCBnZXQgfSBmcm9tICcuLi9zdGF0aWMvYXhpb3MnO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lcic7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMsIFRoZW1lLCBjcmVhdGVTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTW9kYWwnO1xyXG5pbXBvcnQgQmFja2Ryb3AgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQmFja2Ryb3AnO1xyXG5pbXBvcnQgRmFkZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9GYWRlJztcclxuaW1wb3J0IExpbmVhclByb2dyZXNzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmVhclByb2dyZXNzJztcclxuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcclxuaW1wb3J0IEZvcm1Hcm91cCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtR3JvdXAnO1xyXG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2wnO1xyXG5pbXBvcnQgUmFkaW8gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUmFkaW8nO1xyXG5pbXBvcnQgUmFkaW9Hcm91cCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9SYWRpb0dyb3VwJztcclxuaW1wb3J0IEZvcm1IZWxwZXJUZXh0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1IZWxwZXJUZXh0JztcclxuaW1wb3J0IEZvcm1Db250cm9sTGFiZWwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2xMYWJlbCc7XHJcbmltcG9ydCBGb3JtTGFiZWwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUxhYmVsJztcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IFNuYWNrIGZyb20gJy4uL3N0YXRpYy9TbmFjayc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+XHJcblx0Y3JlYXRlU3R5bGVzKHtcclxuXHRcdG1vZGFsOiB7XHJcblx0XHRcdGRpc3BsYXk6ICdmbGV4JyxcclxuXHRcdFx0YWxpZ25JdGVtczogJ2NlbnRlcicsXHJcblx0XHRcdGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuXHRcdH0sXHJcblx0XHRwYXBlcjoge1xyXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcclxuXHRcdFx0Ym9yZGVyOiAnMnB4IHNvbGlkICMwMDAnLFxyXG5cdFx0XHRib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbNV0sXHJcblx0XHRcdHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiwgNCwgMyksXHJcblx0XHR9LFxyXG5cdFx0cm9vdDoge1xyXG5cdFx0XHR3aWR0aDogJzEwMCUnLFxyXG5cdFx0XHQnJiA+ICogKyAqJzoge1xyXG5cdFx0XHRcdG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygyKSxcclxuXHRcdFx0fSxcclxuXHRcdH0sXHJcblx0XHR0ZXh0RmllbGQ6IHtcclxuXHRcdFx0bWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygxKSxcclxuXHRcdFx0bWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMSksXHJcblx0XHRcdHdpZHRoOiBcIjEwMCVcIlxyXG5cdFx0fSxcclxuXHRcdGZvcm1Db250cm9sOiB7XHJcblx0XHRcdG1hcmdpbjogdGhlbWUuc3BhY2luZygzKSxcclxuXHRcdH0sXHJcblx0XHRpbnB1dEZvcm06IHtcclxuXHRcdFx0dGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG5cdFx0XHRwYWRkaW5nOiBcIjMwcHggMCAwIDBcIixcclxuXHRcdFx0d2lkdGg6IFwiMTAwdndcIixcclxuXHRcdFx0bWFyZ2luOiBcIjBweCBhdXRvIDUwcHggYXV0b1wiLFxyXG5cdFx0fSxcclxuXHRcdGZvcm06IHtcclxuXHRcdFx0bWFyZ2luOiBcIjBweCBhdXRvIDEwcHggYXV0b1wiLFxyXG5cdFx0XHR3aWR0aDogXCIxMDAlXCJcclxuXHRcdH0sXHJcblx0XHRpbnB1dEZvcm1JbnB1dDoge1xyXG5cdFx0XHR3aWR0aDogXCI4NSVcIixcclxuXHRcdFx0ZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcclxuXHRcdH0sXHJcblx0XHRpbnB1dEZvcm1CdXR0b246IHtcclxuXHRcdFx0aGVpZ2h0OiBcIjEwMCVcIixcclxuXHRcdFx0bWFyZ2luOiBcIjBweFwiLFxyXG5cdFx0fVxyXG5cdH0pLFxyXG4pO1xyXG5cclxuaW50ZXJmYWNlIFByb2dyZXNzUHJvcHMge1xyXG5cdHByb2dyZXNzVmFsdWU6IG51bWJlcjtcclxufVxyXG5mdW5jdGlvbiBQcm9ncmVzc0Jhcihwcm9wczogUHJvZ3Jlc3NQcm9wcykge1xyXG5cdGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHRjb25zdCBbY29tcGxldGVkLCBzZXRDb21wbGV0ZWRdID0gUmVhY3QudXNlU3RhdGUoMCk7XHJcblxyXG5cdFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRmdW5jdGlvbiBwcm9ncmVzcygpIHtcclxuXHRcdFx0c2V0Q29tcGxldGVkKG9sZENvbXBsZXRlZCA9PiB7XHJcblx0XHRcdFx0aWYgKG9sZENvbXBsZXRlZCA9PT0gMTAwKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gMDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIE1hdGgubWluKHByb3BzLnByb2dyZXNzVmFsdWUsIDEwMCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IHRpbWVyID0gc2V0SW50ZXJ2YWwocHJvZ3Jlc3MsIDUwMCk7XHJcblx0XHRyZXR1cm4gKCkgPT4ge1xyXG4gICAgICBjbGVhckludGVydmFsKHRpbWVyKTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgIDxMaW5lYXJQcm9ncmVzcyB2YXJpYW50PVwiZGV0ZXJtaW5hdGVcIiB2YWx1ZT17Y29tcGxldGVkfSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuXHJcbmludGVyZmFjZSBsb2FkaW5nTW9kYWxQcm9wcyB7XHJcblx0cHJvZ3Jlc3M6IHN0cmluZztcclxuXHRvbkhpZGU6ICgpID0+IHZvaWQ7XHJcblx0c2hvdzogYm9vbGVhbjtcclxufVxyXG5cclxuZnVuY3Rpb24gTG9hZGluZ01vZGFsKHByb3BzOiBsb2FkaW5nTW9kYWxQcm9wcykge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gXHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgfTtcclxuXHRpZiAocHJvcHMuc2hvdyl7XHJcblx0XHRzZXRPcGVuKHRydWUpO1xyXG5cdH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwidHJhbnNpdGlvbi1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cInRyYW5zaXRpb24tbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tb2RhbH1cclxuICAgICAgICBvcGVuPXtvcGVufVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxyXG4gICAgICAgIGNsb3NlQWZ0ZXJUcmFuc2l0aW9uXHJcbiAgICAgICAgQmFja2Ryb3BDb21wb25lbnQ9e0JhY2tkcm9wfVxyXG4gICAgICAgIEJhY2tkcm9wUHJvcHM9e3tcclxuICAgICAgICAgIHRpbWVvdXQ6IDUwMCxcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPEZhZGUgaW49e29wZW59PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxyXG4gICAgICAgICAgICA8aDIgaWQ9XCJ0cmFuc2l0aW9uLW1vZGFsLXRpdGxlXCI+RG93bmxvYWRpbmcgeW91ciBmaWxlPC9oMj5cclxuXHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPkxvYWRpbmc8L3NwYW4+XHJcblx0XHRcdDxQcm9ncmVzc0JhciBwcm9ncmVzc1ZhbHVlPXtwYXJzZUludChwcm9wcy5wcm9ncmVzcyl9Lz5cclxuICAgICAgICA8aDQ+RG93bmxvYWRpbmcuLi4ge3Byb3BzLnByb2dyZXNzfSAlPC9oND5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgIFBsZWFzZSB3YWl0IHdoaWxlIHlvdXIgZmlsZSBpcyBiZWluZyBkb3dubG9hZGVkLiBGZWVsIGZyZWUgdG8gdXNlIHRoaXMgc2VydmljZSBhcyBtYW55XHJcbiAgICAgICAgICB0aW1lcyBhcyB5b3Ugd2FudC48YnIvPlxyXG5cclxuICAgICAgICAgIEEgYnV0dG9uIGxpbmsgd2lsbCBiZSBwcm92aWRlZCBzaG9ydGx5Li4uLlxyXG4gICAgICAgIDwvcD5cclxuXHRcdDxCdXR0b24gb25DbGljaz17cHJvcHMub25IaWRlfT5DbG9zZTwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9GYWRlPlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIFN1Ym1pdEZvcm0oKSB7XHJcblx0Y29uc3QgY29udGFpbmVyUmVmOmFueSA9IFJlYWN0LmNyZWF0ZVJlZigpO1xyXG5cdGNvbnN0IGdldFJlZjogYW55ID0gUmVhY3QuY3JlYXRlUmVmKCk7XHJcblx0Y29uc3QgZG93bmxvYWRCdG5SZWY6IGFueSA9IFJlYWN0LmNyZWF0ZVJlZigpO1xyXG5cdFxyXG5cdGNvbnN0IFtleHQsIHNldEV4dF0gPSBSZWFjdC51c2VTdGF0ZShcIm1wNFwiKTtcclxuXHRjb25zdCBbdHlwZSwgc2V0VHlwZV0gPSBSZWFjdC51c2VTdGF0ZShcIkF1ZGlvXCIpO1xyXG5cdGNvbnN0IFtzaG93TG9hZGluZywgc2V0U2hvd0xvYWRpbmddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IFtsb2FkaW5nUHJvZ3Jlc3MsIHNldExvYWRpbmdQcm9ncmVzc10gPSBSZWFjdC51c2VTdGF0ZShcIjBcIik7XHJcblx0Y29uc3QgW29wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcblx0Y29uc3QgW3ZhcmllbnQsIHNldFZhcmllbnRdID0gUmVhY3QudXNlU3RhdGU8XCJzdWNjZXNzXCIgfCBcImVycm9yXCIgfCBcIndhcm5pbmdcIiB8IFwiaW5mb1wiPihcImluZm9cIik7XHJcblx0Y29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlVHlwZSA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcclxuICAgIHNldFR5cGUoKGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSk7XHJcbiAgfTtcclxuXHRjb25zdCBoYW5kbGVDaGFuZ2VFeHQgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XHJcbiAgICBzZXRFeHQoKGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSk7XHJcbiAgfTtcdFxyXG5cdFxyXG5cdCBmdW5jdGlvbiBoYW5kbGVDaGFuZ2VBbGVydFNob3cgKGV2ZW50OiBhbnksIHNob3c6IGJvb2xlYW4pIHtcclxuXHRcdHNldE9wZW4oc2hvdyk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBvcGVuSGFuZGxlcih2YWw6IGJvb2xlYW4pIHtcclxuICAgICAgICBzZXRPcGVuKHZhbCk7XHJcbiAgICB9XHJcblx0ZnVuY3Rpb24gZ2V0IChlOiBhbnkpIHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdHNldE9wZW4oZmFsc2UpO1xyXG4gICAgICAgIHZhciBVUkxpbnB1dCA9IGdldFJlZi5jdXJyZW50LnZhbHVlLnNwbGl0KFwiPVwiKVsxXTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJhcyBcIiArIFVSTGlucHV0ICsgXCIsIFwiICsgdHlwZSArIFwiLCBcIiArIGV4dClcclxuXHRcdGlmIChVUkxpbnB1dCA9PT0gdW5kZWZpbmVkIHx8IG51bGwpe1xyXG5cdFx0XHRzZXRWYXJpZW50KFwid2FybmluZ1wiKTtcclxuXHRcdFx0c2V0TWVzc2FnZShcIkludmFsaWQgdXJsIHRyeSBhbm90aGVyIG9yIGxvb2sgY2FyZWZ1bGx5IHRvIGNvcnJlY3QgaXQuXCIpO1xyXG5cdFx0XHRzZXRPcGVuKHRydWUpO1xyXG5cdCAgXHR9IGVsc2Uge1xyXG4gICAgICAgICAgICBcclxuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBwb3N0KFwiL2Rvd25sb2FkXCIsIEpTT04uc3RyaW5naWZ5KHt1cmw6VVJMaW5wdXQsIHR5cGU6dHlwZSwgZXh0ZW5zaW9uOmV4dH0pLCBmYWxzZSk7XHJcblx0XHRcdHJlc3BvbnNlLm9ubG9hZCA9ICgpID0+IHtcclxuXHRcdFx0XHR2YXIgc3NlOkV2ZW50U291cmNlID0gbmV3IEV2ZW50U291cmNlKFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2Rvd25sb2FkL3NzZVwiKTtcclxuXHRcdCAgXHRcdHNzZS5vbm9wZW4gPSAoKSA9PiB7XHJcblx0XHRcdFx0XHRzZXRTaG93TG9hZGluZyh0cnVlKTtcclxuXHRcdCAgXHRcdH1cclxuXHQgIFx0XHRcdHNzZS5vbm1lc3NhZ2UgPSBldnQgPT4ge1xyXG5cdFx0XHRcdFx0c2V0TG9hZGluZ1Byb2dyZXNzKGV2dC5kYXRhKTtcclxuXHQgICAgICAgIFx0XHRpZiAoZXZ0LmRhdGEgPT09IFwiMTAwXCIpe1xyXG5cdFx0XHRcdFx0XHRzZXRTaG93TG9hZGluZyhmYWxzZSlcclxuXHQgICAgICAgICAgXHRcdFx0dmFyIHVybDpzdHJpbmcgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9kb3dubG9hZC92aWRlby9cIiArIFVSTGlucHV0O1xyXG5cdCAgICAgICAgICBcdFx0XHRkb3dubG9hZEJ0blJlZi5jdXJyZW50LnZhbHVlID0gdXJsO1xyXG5cdCAgICAgICAgICBcdFx0XHRjb250YWluZXJSZWYuY3VycmVudC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG5cdCAgICAgICAgICBcdFx0XHRzc2UuY2xvc2UoKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0c3NlLm9uZXJyb3IgPSAoKSA9PiB7XHJcbiAgXHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiRXZlbnRTb3VyY2UgZmFpbGVkLlwiKTtcclxuXHRcdFx0XHRcdHNldFNob3dMb2FkaW5nKGZhbHNlKTtcclxuICBcdFx0XHRcdFx0Y29uc29sZS5sb2coXCJDbG9zaW5nIGNvbm5lY3Rvbi4uLlwiKTtcclxuICBcdFx0XHRcdFx0c3NlLmNsb3NlKCk7XHJcbiAgXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuICBcdFx0fVxyXG4gIFx0fVxyXG4gIFx0ZnVuY3Rpb24gZG93bmxvYWRGcm9tU2VydmVyICgpIHtcclxuICAgIFx0dmFyIHVybDpzdHJpbmcgPSBkb3dubG9hZEJ0blJlZi5jdXJyZW50LnZhbHVlO1xyXG4gICAgXHR3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcclxuXHR9XHJcblx0cmV0dXJuIChcclxuXHRcdDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgPFNuYWNrIG9wZW5IYW5kbGVyPXtvcGVuSGFuZGxlcn0gb3Blbj17b3Blbn0gdmFyaWVudD17dmFyaWVudH0gbWVzc2FnZT17bWVzc2FnZX0vPlxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgeHM9ezEyfSA+XHJcbiAgICAgICAgICAgICAgICA8TG9hZGluZ01vZGFsIHByb2dyZXNzPXtsb2FkaW5nUHJvZ3Jlc3N9IHNob3c9e3Nob3dMb2FkaW5nfSBvbkhpZGU9eygpID0+IHNldFNob3dMb2FkaW5nKGZhbHNlKX0vPlxyXG4gICAgICAgICAgICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMuaW5wdXRGb3JtfT5cclxuXHRcdFx0XHQgICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm19PlxyXG5cdFx0XHRcdFx0ICAgIDxGb3JtR3JvdXA+XHJcblx0XHRcdFx0XHRcdCAgICA8R3JpZCBjb250YWluZXIgeHM9ezEyfT5cclxuXHRcdFx0XHRcdFx0XHQgICAgPEdyaWQgaXRlbSB4cz17MTB9PlxyXG5cdFx0XHRcdFx0XHRcdFx0ICAgIDxUZXh0RmllbGRcclxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgIGlucHV0UmVmPXtnZXRSZWZ9XHJcblx0XHRcdFx0XHRcdFx0XHRcdCAgICBpZD1cInN0YW5kYXJkLWJhc2ljXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdCAgICBsYWJlbD1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcblx0XHRcdFx0XHRcdFx0XHQgICAgLz5cclxuXHRcdFx0XHRcdFx0XHQgICAgPC9HcmlkPlxyXG5cdFx0XHRcdFx0XHRcdCAgICA8R3JpZCBjb250YWluZXIgeHM9ezJ9ICBqdXN0aWZ5PVwiZmxleC1zdGFydFwiIGFsaWduSXRlbXM9XCJmbGV4LXN0YXJ0XCI+XHJcblx0XHRcdFx0XHRcdFx0XHQgICAgPEJ1dHRvbiBvbkNsaWNrPXtnZXR9IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnB1dEZvcm1CdXR0b259IHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInByaW1hcnlcIj5HRVQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHQgICAgPC9HcmlkPlxyXG5cdFx0XHRcdFx0XHQgICAgPC9HcmlkPlxyXG5cdFx0XHRcdFx0ICAgIDwvRm9ybUdyb3VwPlxyXG5cdFx0XHRcdFx0ICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgeHM9ezEyfT5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0+XHJcblx0XHRcdFx0XHRcdCAgICAgICAgICAgIDxGb3JtQ29udHJvbCBjb21wb25lbnQ9XCJmaWVsZHNldFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtQ29udHJvbH0+XHJcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgIDxGb3JtTGFiZWwgY29tcG9uZW50PVwibGVnZW5kXCI+RGF0YSBUeXBlPC9Gb3JtTGFiZWw+XHJcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgIDxSYWRpb0dyb3VwIGFyaWEtbGFiZWw9XCJnZW5kZXJcIiBuYW1lPVwiZ2VuZGVyMVwiIHZhbHVlPXt0eXBlfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlVHlwZX0gcm93PlxyXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsIHZhbHVlPVwiQXVkaW9cIiBjb250cm9sPXs8UmFkaW8gIGNvbG9yPVwicHJpbWFyeVwiIC8+fSBsYWJlbD1cIkF1ZGlvXCIgbGFiZWxQbGFjZW1lbnQ9XCJzdGFydFwiLz5cclxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbCB2YWx1ZT1cIlZpZGVvXCIgY29udHJvbD17PFJhZGlvICBjb2xvcj1cInByaW1hcnlcIiAvPn0gbGFiZWw9XCJWaWRlb1wiIGxhYmVsUGxhY2VtZW50PVwic3RhcnRcIi8+XHJcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgIDwvUmFkaW9Hcm91cD5cclxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcblx0XHRcdFx0XHRcdCAgICAgICAgICAgIDxGb3JtQ29udHJvbCBjb21wb25lbnQ9XCJmaWVsZHNldFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtQ29udHJvbH0+XHJcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgIDxGb3JtTGFiZWwgY29tcG9uZW50PVwibGVnZW5kXCI+RmlsZSBUeXBlPC9Gb3JtTGFiZWw+XHJcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgIDxSYWRpb0dyb3VwIGFyaWEtbGFiZWw9XCJnZW5kZXJcIiBuYW1lPVwiZ2VuZGVyMlwiIHZhbHVlPXtleHR9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VFeHR9IHJvdz5cclxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbCB2YWx1ZT1cIm1wNFwiIGNvbnRyb2w9ezxSYWRpbyAvPn0gbGFiZWw9XCJtcDRcIiBsYWJlbFBsYWNlbWVudD1cInN0YXJ0XCIvPlxyXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsIHZhbHVlPVwibXAzXCIgY29udHJvbD17PFJhZGlvIC8+fSBsYWJlbD1cIm1wM1wiIGxhYmVsUGxhY2VtZW50PVwic3RhcnRcIi8+XHJcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWwgdmFsdWU9XCJ3YXZcIiBjb250cm9sPXs8UmFkaW8gLz59IGxhYmVsPVwid2F2XCIgbGFiZWxQbGFjZW1lbnQ9XCJzdGFydFwiLz5cclxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbCB2YWx1ZT1cIndlYm1cIiBjb250cm9sPXs8UmFkaW8gLz59IGxhYmVsPVwid2VibVwiIGxhYmVsUGxhY2VtZW50PVwic3RhcnRcIi8+XHJcblx0XHRcdFx0XHRcdFx0XHQgICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbCB2YWx1ZT1cImZsdlwiIGNvbnRyb2w9ezxSYWRpbyAvPn0gbGFiZWw9XCJmbHZcIiBsYWJlbFBsYWNlbWVudD1cInN0YXJ0XCIvPlxyXG5cdFx0XHRcdFx0XHRcdFx0ICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWwgdmFsdWU9XCJobHNcIiBjb250cm9sPXs8UmFkaW8gLz59IGxhYmVsPVwiaGxzXCIgbGFiZWxQbGFjZW1lbnQ9XCJzdGFydFwiLz5cclxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgPC9SYWRpb0dyb3VwPlxyXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHQgICAgICAgICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG5cdCAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHhzPXsxMn0+XHJcblx0ICAgICAgICAgICAgICAgICAgICA8R3JpZCB4cz17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29udGFpbmVyIHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwifX0gY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCIgcmVmPXtjb250YWluZXJSZWZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJzZWNvbmRhcnlcIiByZWY9e2Rvd25sb2FkQnRuUmVmfSBvbkNsaWNrPXtkb3dubG9hZEZyb21TZXJ2ZXJ9PkRvd25sb2FkPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuXHQgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblx0ICAgICAgICAgICAgPC9Db250YWluZXI+XHJcblx0XHRcdDwvR3JpZD5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG5cdCk7XHJcbn1cclxuY2xhc3MgSW5mb1BhbmVsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHRyZW5kZXIoKXtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxQYXBlcj5cclxuXHRcdFx0XHQ8Q29udGFpbmVyPlxyXG5cdFx0XHRcdFx0PFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCIgY29tcG9uZW50PVwiaDNcIj5cclxuXHRcdFx0XHRcdFx0PGk+VGhpcyBzaXRlIGlzIHVuZGVyIGNvbnN0cnVjdGlvbi48L2k+XHJcblx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XHJcblx0XHRcdFx0XHQ8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJwXCI+XHJcblx0XHRcdFx0XHRcdFRoZSBtYWluIHJlYXNvbiBmb3IgdGhpcyBzaXRlIGlzIHRvIGRvd25sb2FkIGF1ZGlvIGZpbGVzIGZyb20geW91dHViZS8gc29vbiB3aWxsIHN1cHBvcnQgbW9yZVxyXG5cdFx0XHRcdFx0XHRzaXRlcyBhbmQgcG9zc2libHkgdGhlIGFiaWxpdHkgdG8gZG93bmxvYWQgdGhlIHdob2xlIHZpZGVvIGluY2x1ZGluZyB2aXN1YWwgYW5kIGF1ZGlvLiBkZXBlbmRpbmcgb25cclxuXHRcdFx0XHRcdFx0d2hhdCBwZW9wbGUgd2FudDxici8+PGJyLz48YnIvPlxyXG5cdFx0XHRcdFx0XHRUZXN0aW5nIFVSTDogaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1wY1BpNGpQQVIyY1xyXG5cdFx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxyXG5cdFx0XHRcdDwvQ29udGFpbmVyPlxyXG5cdFx0XHQ8L1BhcGVyPlxyXG5cdFx0KVxyXG5cdH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblx0cmVuZGVyKCl7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8UmVhY3QuRnJhZ21lbnQ+XHJcblx0XHRcdFx0PFN1Ym1pdEZvcm0vPlxyXG5cdFx0XHRcdDxJbmZvUGFuZWwvPlxyXG5cdFx0XHQ8L1JlYWN0LkZyYWdtZW50PlxyXG5cdFx0KTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEF2YXRhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BdmF0YXInO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZSc7XHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcclxuaW1wb3J0IEZvcm1Db250cm9sTGFiZWwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2xMYWJlbCc7XHJcbmltcG9ydCBDaGVja2JveCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DaGVja2JveCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmsnO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuaW1wb3J0IEJveCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Cb3gnO1xyXG5pbXBvcnQgTG9ja091dGxpbmVkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTG9ja091dGxpbmVkJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lcic7XHJcbmltcG9ydCB7cG9zdH0gZnJvbSAnLi4vc3RhdGljL2F4aW9zJztcclxuXHJcblxyXG5mdW5jdGlvbiBDb3B5cmlnaHQoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgIHsnQ29weXJpZ2h0IO+/vSAnfVxyXG4gICAgICA8TGluayBjb2xvcj1cImluaGVyaXRcIiBocmVmPVwiaHR0cHM6Ly9tYXRlcmlhbC11aS5jb20vXCI+XHJcbiAgICAgICAgWW91ciBXZWJzaXRlXHJcbiAgICAgIDwvTGluaz57JyAnfVxyXG4gICAgICB7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfVxyXG4gICAgICB7Jy4nfVxyXG4gICAgPC9UeXBvZ3JhcGh5PlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICAnQGdsb2JhbCc6IHtcclxuICAgIGJvZHk6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBwYXBlcjoge1xyXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDgpLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICB9LFxyXG4gIGF2YXRhcjoge1xyXG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluLFxyXG4gIH0sXHJcbiAgZm9ybToge1xyXG4gICAgd2lkdGg6ICcxMDAlJywgLy8gRml4IElFIDExIGlzc3VlLlxyXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gIH0sXHJcbiAgc3VibWl0OiB7XHJcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMywgMCwgMiksXHJcbiAgfSxcclxufSkpO1xyXG5cclxuaW50ZXJmYWNlIElQcm9wcyB7XHJcblx0YXV0aGVudGljYXRlOiAoKSA9PiB2b2lkO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgV2FybmluZ1Byb3BzIHtcclxuXHR2YWw6IHN0cmluZztcclxufVxyXG5jbGFzcyBXYXJuaW5nIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFdhcm5pbmdQcm9wcz4ge1xyXG5cdGRldGVybWluZUNsYXNzID0gKCkgPT4ge1xyXG5cdFx0aWYgKHRoaXMucHJvcHMudmFsLmluY2x1ZGVzKFwiU3VjY2Vzc1wiKSl7XHJcblx0XHRcdHJldHVybiBcImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIjtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiBcImFsZXJ0IGFsZXJ0LWRhbmdlclwiO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRyZW5kZXIoKXtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxkaXYgc3R5bGU9e3tkaXNwbGF5OiB0aGlzLnByb3BzLnZhbCA9PT0gXCJcIiA/IFwibm9uZVwiIDogXCJibG9ja1wiIH19IGNsYXNzTmFtZT17dGhpcy5kZXRlcm1pbmVDbGFzcygpfSByb2xlPVwiYWxlcnRcIj57dGhpcy5wcm9wcy52YWx9PC9kaXY+XHJcblx0XHQpO1xyXG5cdH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbihwcm9wczogSVByb3BzKSB7XHJcblx0bGV0IHVzZXJuYW1lSW5wdXQ6YW55ID0gUmVhY3QuY3JlYXRlUmVmKCk7XHJcblx0bGV0IHBhc3N3b3JkSW5wdXQ6YW55ID0gUmVhY3QuY3JlYXRlUmVmKCk7XHJcbiAgXHRjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblx0Y29uc3QgW3Jlc3BvbnNlLCBzZXRSZXNwb25zZSBdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcblx0ZnVuY3Rpb24gc3VibWl0TG9naW4oZTogYW55KXtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGNvbnNvbGUubG9nKFwiVXNlciBsb2dnaW5nIGluLi4uLlwiKTtcclxuXHRcdGxldCB1c2VybmFtZVZhbCA9IHVzZXJuYW1lSW5wdXQuY3VycmVudC52YWx1ZTtcclxuXHRcdGxldCBwYXNzd29yZFZhbCA9IHBhc3N3b3JkSW5wdXQuY3VycmVudC52YWx1ZTtcclxuXHJcblx0XHRjb25zdCByZXNwb25zZSA9IHBvc3QoXCIvdXNlcnMvbG9naW5cIiwgSlNPTi5zdHJpbmdpZnkoe3VzZXJuYW1lOnVzZXJuYW1lVmFsLCBlbWFpbDp1c2VybmFtZVZhbCwgcGFzc3dvcmQ6cGFzc3dvcmRWYWx9KSwgdHJ1ZSk7XHJcblx0XHRyZXNwb25zZS5vbmxvYWQgPSAoKSA9PiB7XHJcblx0XHRcdHNldFJlc3BvbnNlKHJlc3BvbnNlLnJlc3BvbnNlVGV4dClcclxuXHRcdFx0aWYgKHJlc3BvbnNlLnJlc3BvbnNlVGV4dC5pbmNsdWRlcyhcIlN1Y2Nlc3NcIikpe1xyXG5cdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9rZW5cIiwgdXNlcm5hbWVWYWwgKyBcIj9cIiArIHBhc3N3b3JkVmFsKTsgLy9lbmNyeXB0IHRoaXMgbGF0ZXJcclxuXHRcdFx0XHRwcm9wcy5hdXRoZW50aWNhdGUoKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRcclxuXHRcdFxyXG5cdH1cclxuXHJcblx0cmV0dXJuIChcclxuXHRcclxuICAgIDxDb250YWluZXIgY29tcG9uZW50PVwibWFpblwiIG1heFdpZHRoPVwieHNcIj5cclxuXHRcdDxXYXJuaW5nIHZhbD17cmVzcG9uc2V9Lz5cclxuICAgICAgPENzc0Jhc2VsaW5lIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfT5cclxuICAgICAgICA8QXZhdGFyIGNsYXNzTmFtZT17Y2xhc3Nlcy5hdmF0YXJ9PlxyXG4gICAgICAgICAgPExvY2tPdXRsaW5lZEljb24gLz5cclxuICAgICAgICA8L0F2YXRhcj5cclxuICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJoMVwiIHZhcmlhbnQ9XCJoNVwiPlxyXG4gICAgICAgICAgU2lnbiBpblxyXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybX0gbm9WYWxpZGF0ZT5cclxuICAgICAgICAgIDxUZXh0RmllbGRcclxuXHRcdFx0aW5wdXRSZWY9e3VzZXJuYW1lSW5wdXR9XHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICBpZD1cImVtYWlsXCJcclxuICAgICAgICAgICAgbGFiZWw9XCJFbWFpbCBBZGRyZXNzXCJcclxuICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICBhdXRvRm9jdXNcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8VGV4dEZpZWxkXHJcblx0XHRcdGlucHV0UmVmPXtwYXNzd29yZElucHV0fVxyXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgbGFiZWw9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJjdXJyZW50LXBhc3N3b3JkXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxyXG4gICAgICAgICAgICBjb250cm9sPXs8Q2hlY2tib3ggdmFsdWU9XCJyZW1lbWJlclwiIGNvbG9yPVwicHJpbWFyeVwiIC8+fVxyXG4gICAgICAgICAgICBsYWJlbD1cIlJlbWVtYmVyIG1lXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcblx0XHRcdG9uQ2xpY2s9eyhlOmFueSkgPT4gc3VibWl0TG9naW4oZSl9XHJcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnN1Ym1pdH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgU2lnbiBJblxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIiB2YXJpYW50PVwiYm9keTJcIj5cclxuICAgICAgICAgICAgICAgIEZvcmdvdCBwYXNzd29yZD9cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1JlZ2lzdGVyXCIgdmFyaWFudD1cImJvZHkyXCI+XHJcbiAgICAgICAgICAgICAgICB7XCJEb24ndCBoYXZlIGFuIGFjY291bnQ/IFNpZ24gVXBcIn1cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8Qm94IG10PXs4fT5cclxuICAgICAgICA8Q29weXJpZ2h0IC8+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtwb3N0fSBmcm9tICcuLi9zdGF0aWMvYXhpb3MnO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5pbXBvcnQgQXZhdGFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0F2YXRhcic7XHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcclxuaW1wb3J0IE1vZGFsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01vZGFsJztcclxuaW1wb3J0IEJhY2tkcm9wIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0JhY2tkcm9wJztcclxuaW1wb3J0IEZhZGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRmFkZSc7XHJcbmltcG9ydCBDYXJkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmQnO1xyXG5pbXBvcnQgQ2FyZEFjdGlvbkFyZWEgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZEFjdGlvbkFyZWEnO1xyXG5pbXBvcnQgQ2FyZEFjdGlvbnMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZEFjdGlvbnMnO1xyXG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZENvbnRlbnQnO1xyXG5pbXBvcnQgQ2FyZE1lZGlhIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRNZWRpYSc7XHJcbmltcG9ydCB7IHdpdGhTdHlsZXMsIG1ha2VTdHlsZXMsIFRoZW1lLCBjcmVhdGVTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXInO1xyXG5pbXBvcnQgTXVpRXhwYW5zaW9uUGFuZWwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRXhwYW5zaW9uUGFuZWwnO1xyXG5pbXBvcnQgTXVpRXhwYW5zaW9uUGFuZWxTdW1tYXJ5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0V4cGFuc2lvblBhbmVsU3VtbWFyeSc7XHJcbmltcG9ydCBNdWlFeHBhbnNpb25QYW5lbERldGFpbHMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRXhwYW5zaW9uUGFuZWxEZXRhaWxzJztcclxuaW1wb3J0IEJveCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Cb3gnO1xyXG5pbXBvcnQgQmFkZ2UgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQmFkZ2UnO1xyXG5pbXBvcnQgTWFpbEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL01haWwnO1xyXG5cclxuY29uc3QgZGF0ZVN0eWxlOlJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XHJcblx0Y29sb3I6IFwiZ3JleVwiLFxyXG5cdGZvbnRTaXplOiBcIjEycHhcIlxyXG59XHJcbmNvbnN0IGNhcmRTdHlsZTpSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xyXG5cdHBhZGRpbmc6IFwiMHB4IDBweCAwcHggMHB4XCIsXHJcblx0bWFyZ2luOiBcIjBweCAwcHggMHB4IDBweFwiLFxyXG59XHJcbmNvbnN0IHRpbWVTdGFtcFN0eWxlOlJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XHJcblx0Zm9udFNpemU6IFwiMTJweFwiLFxyXG5cdGNvbG9yOlwiZ3JleVwiXHJcbn1cclxuY29uc3Qgc3R5bGVzID0ge1xyXG5cdGxlZnQ6IHtcclxuXHRcdGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdsZWZ0J1xyXG5cdH0sXHJcblx0cmlnaHQ6IHtcclxuXHRcdGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdyaWdodCdcclxuXHR9LFxyXG5cdGNlbnRlcjoge1xyXG5cdFx0ZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcidcclxuXHR9LFxyXG5cdGJvdHRvbToge1xyXG5cdFx0ZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ2JvdHRvbSdcclxuXHR9XHJcbn1cclxuXHJcbmludGVyZmFjZSBDb21tZW50TW9kYWxQcm9wcyB7XHJcblx0b25IaWRlOiAoKSA9PiB2b2lkO1xyXG5cdHBvc3RoYW5kbGVyOiAoYXJnMTogYW55LCBhcmc6IHN0cmluZykgPT4gdm9pZDtcclxuXHRzaG93OiBib29sZWFuO1xyXG59XHJcbmludGVyZmFjZSBDb21tZW50TW9kYWxTdGF0ZSB7XHJcblx0dGV4dExpbWl0OiBudW1iZXI7XHJcbn1cclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lOiBUaGVtZSkgPT5cclxuICBjcmVhdGVTdHlsZXMoe1xyXG4gICAgbW9kYWw6IHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgfSxcclxuICAgIHBhcGVyOiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxyXG4gICAgICBib3JkZXI6ICcycHggc29saWQgIzAwMCcsXHJcbiAgICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1s1XSxcclxuICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygyLCA0LCAzKSxcclxuICAgIH0sXHJcblx0Y2FyZDoge1xyXG4gICAgXHRtYXhXaWR0aDogMzQ1LFxyXG4gIFx0fSxcclxuICBcdG1lZGlhOiB7XHJcbiAgICBcdGhlaWdodDogMTQwLFxyXG4gIFx0fSxcclxuXHRsaWtlRGlzbGlrZToge1xyXG5cdFx0d2lkdGg6IDMwLFxyXG5cdFx0aGVpZ2h0OiAyMCxcclxuXHR9XHJcbiAgfSksXHJcbik7XHJcbmNvbnN0IEV4cGFuc2lvblBhbmVsID0gd2l0aFN0eWxlcyh7XHJcbiAgcm9vdDoge1xyXG4gICAgYm9yZGVyOiAnMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjEyNSknLFxyXG4gICAgYm94U2hhZG93OiAnbm9uZScsXHJcbiAgICAnJjpub3QoOmxhc3QtY2hpbGQpJzoge1xyXG4gICAgICBib3JkZXJCb3R0b206IDAsXHJcbiAgICB9LFxyXG4gICAgJyY6YmVmb3JlJzoge1xyXG4gICAgICBkaXNwbGF5OiAnbm9uZScsXHJcbiAgICB9LFxyXG4gICAgJyYkZXhwYW5kZWQnOiB7XHJcbiAgICAgIG1hcmdpbjogJ2F1dG8nLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGV4cGFuZGVkOiB7fSxcclxufSkoTXVpRXhwYW5zaW9uUGFuZWwpO1xyXG5cclxuY29uc3QgRXhwYW5zaW9uUGFuZWxTdW1tYXJ5ID0gd2l0aFN0eWxlcyh7XHJcbiAgcm9vdDoge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLCAwLCAwLCAuMDMpJyxcclxuICAgIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4xMjUpJyxcclxuICAgIG1hcmdpbkJvdHRvbTogLTEsXHJcbiAgICBtaW5IZWlnaHQ6IDU2LFxyXG4gICAgJyYkZXhwYW5kZWQnOiB7XHJcbiAgICAgIG1pbkhlaWdodDogNTYsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgY29udGVudDoge1xyXG4gICAgJyYkZXhwYW5kZWQnOiB7XHJcbiAgICAgIG1hcmdpbjogJzEycHggMCcsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZXhwYW5kZWQ6IHt9LFxyXG59KShNdWlFeHBhbnNpb25QYW5lbFN1bW1hcnkpO1xyXG5cclxuY29uc3QgRXhwYW5zaW9uUGFuZWxEZXRhaWxzID0gd2l0aFN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgfSxcclxufSkpKE11aUV4cGFuc2lvblBhbmVsRGV0YWlscyk7XHJcbmZ1bmN0aW9uIENvbW1lbnRNb2RhbCAocHJvcHM6Q29tbWVudE1vZGFsUHJvcHMpIHtcclxuXHRjb25zdCBkZXNjcmlwdGlvblJlZjogYW55ID0gUmVhY3QuY3JlYXRlUmVmKCk7XHJcblx0Y29uc3QgW3RleHRMaW1pdCwgc2V0VGV4dExpbWl0XSA9IFJlYWN0LnVzZVN0YXRlKDI1NSk7XHJcblx0Y29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIFx0Y29uc3QgW29wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuXHQgIGNvbnN0IGhhbmRsZU9wZW4gPSAoKSA9PiB7XHJcblx0ICAgIHNldE9wZW4odHJ1ZSk7XHJcblx0ICB9O1xyXG5cclxuXHQgIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG5cdCAgICBzZXRPcGVuKGZhbHNlKTtcclxuXHQgIH07XHJcblxyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0XHJcblx0XHRcdDxkaXY+XHJcblx0XHQgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtoYW5kbGVPcGVufT5cclxuXHRcdCAgICAgICAgUmVwbHlCdXR0b25cclxuXHRcdCAgICAgIDwvYnV0dG9uPlxyXG5cdFx0ICAgICAgPE1vZGFsXHJcblx0XHQgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cInRyYW5zaXRpb24tbW9kYWwtdGl0bGVcIlxyXG5cdFx0ICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwidHJhbnNpdGlvbi1tb2RhbC1kZXNjcmlwdGlvblwiXHJcblx0XHQgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tb2RhbH1cclxuXHRcdCAgICAgICAgb3Blbj17b3Blbn1cclxuXHRcdCAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XHJcblx0XHQgICAgICAgIGNsb3NlQWZ0ZXJUcmFuc2l0aW9uXHJcblx0XHQgICAgICAgIEJhY2tkcm9wQ29tcG9uZW50PXtCYWNrZHJvcH1cclxuXHRcdCAgICAgICAgQmFja2Ryb3BQcm9wcz17e1xyXG5cdFx0ICAgICAgICAgIHRpbWVvdXQ6IDUwMCxcclxuXHRcdCAgICAgICAgfX1cclxuXHRcdCAgICAgID5cclxuXHRcdCAgICAgICAgPEZhZGUgaW49e29wZW59PlxyXG5cdFx0ICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfT5cclxuXHRcdCAgICAgICAgICAgIDxoMiBpZD1cInRyYW5zaXRpb24tbW9kYWwtdGl0bGVcIj5SZXBseTwvaDI+XHJcblx0XHQgICAgICAgICAgICA8VGV4dEZpZWxkIG9uQ2hhbmdlPXsoKSA9PiBzZXRUZXh0TGltaXQoMjU1IC0gZGVzY3JpcHRpb25SZWYuY3VycmVudC52YWx1ZS5sZW5ndGgpfSByZWY9e2Rlc2NyaXB0aW9uUmVmfSByb3dzPVwiM1wiIHBsYWNlaG9sZGVyPVwicmVzcG9uc2VcIi8+XHJcblx0XHRcdFx0XHQ8cD57dGV4dExpbWl0fTwvcD5cclxuXHRcdFx0XHRcdDxCdXR0b24gb25DbGljaz17cHJvcHMub25IaWRlfT5DbG9zZTwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0PEJ1dHRvbiBvbkNsaWNrPXsgKGU6YW55KSA9PiBwcm9wcy5wb3N0aGFuZGxlcihlLCBkZXNjcmlwdGlvblJlZi5jdXJyZW50LnZhbHVlKX0gY29sb3I9XCJwcmltYXJ5XCI+UG9zdDwvQnV0dG9uPlxyXG5cdFx0ICAgICAgICAgIDwvZGl2PlxyXG5cdFx0ICAgICAgICA8L0ZhZGU+XHJcblx0XHQgICAgICA8L01vZGFsPlxyXG5cdFx0ICAgIDwvZGl2PlxyXG5cdFx0KTtcclxuXHR9XHJcblx0aW50ZXJmYWNlIENvbW1lbnRQcm9wcyB7XHJcblx0XHRjaGlsZENvbW1lbnRzOiBhbnk7XHJcblx0XHR1c2VybmFtZTogc3RyaW5nO1xyXG5cdFx0c3JjOiBzdHJpbmc7XHJcblx0XHR0aW1lOiBzdHJpbmc7XHJcblx0XHRjb21tZW50OiBzdHJpbmc7XHJcblx0XHRyZXBseUhhbmRsZXI6IChldmVudDogYW55LCBjb21tZW50OiBzdHJpbmcsIHRpbWU6IHN0cmluZykgPT4gdm9pZDtcclxuXHR9XHJcbmZ1bmN0aW9uIENvbW1lbnQgKHByb3BzOiBDb21tZW50UHJvcHMpIHtcclxuXHRjb25zdCBbY2hpbGREYXRhLCBzZXRDaGlsZERhdGFdID0gUmVhY3QudXNlU3RhdGUoKTtcclxuXHRjb25zdCBbcGFyZW50Q29tbWVudCwgc2V0UGFyZW50Q29tbWVudF0gPSBSZWFjdC51c2VTdGF0ZSgpO1xyXG5cdGNvbnN0IFtwYXJlbnRUaW1lLCBzZXRQYXJlbnRUaW1lXSA9IFJlYWN0LnVzZVN0YXRlKCk7XHJcblx0Y29uc3QgW2xpa2VzLCBzZXRMaWtlc10gPSBSZWFjdC51c2VTdGF0ZSgpO1xyXG5cdGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHRjb25zdCBjb21tZW50UmVmOmFueSA9IFJlYWN0LmNyZWF0ZVJlZigpO1xyXG5cclxuXHJcblx0ZnVuY3Rpb24gbG9hZERhdGEoKXtcclxuXHRcdHNldENoaWxkRGF0YShwcm9wcy5jaGlsZENvbW1lbnRzKTtcclxuXHR9XHJcblx0ZnVuY3Rpb24gdXB2b3RlQnRuIChlOmFueSkge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0c2V0TGlrZXMobGlrZXMgKyAxKTtcclxuXHR9XHJcblx0ZnVuY3Rpb24gZG93bnZvdGVCdG4gKGU6IGFueSkge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0c2V0TGlrZXMobGlrZXMgLSAxKTtcclxuXHR9XHJcblx0Y29uc3QgW2V4cGFuZGVkLCBzZXRFeHBhbmRlZF0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmcgfCBmYWxzZT4oJ3BhbmVsMScpO1xyXG5cclxuXHQgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChwYW5lbDogc3RyaW5nKSA9PiAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PHt9PiwgbmV3RXhwYW5kZWQ6IGJvb2xlYW4pID0+IHtcclxuXHQgICAgc2V0RXhwYW5kZWQobmV3RXhwYW5kZWQgPyBwYW5lbCA6IGZhbHNlKTtcclxuXHQgIH07XHJcblx0cmV0dXJuIChcclxuXHRcdDxSZWFjdC5GcmFnbWVudD5cclxuXHRcdFx0e2xvYWREYXRhfVxyXG5cdFx0XHQ8R3JpZCBjb250YWluZXIgeHM9ezJ9PlxyXG5cdFx0XHRcdDxDYXJkIGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkfT5cclxuICAgICAgXHRcdFx0XHQ8Q2FyZEFjdGlvbkFyZWE+XHJcbiAgICAgICAgXHRcdFx0XHQ8Q2FyZE1lZGlhXHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc2VzLm1lZGlhfVxyXG5cdFx0XHRcdFx0XHRcdGltYWdlPXtwcm9wcy5zcmN9XHJcblx0XHRcdFx0XHRcdFx0dGl0bGU9XCJBdmF0YXIgaW1hZ2VcIlxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8Q2FyZENvbnRlbnQ+XHJcblx0XHRcdFx0XHRcdFx0PFR5cG9ncmFwaHkgZ3V0dGVyQm90dG9tIHZhcmlhbnQ9XCJoNVwiIGNvbXBvbmVudD1cImgyXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aT57cHJvcHMudXNlcm5hbWV9PC9pPlxyXG5cdFx0XHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cclxuXHRcdFx0XHRcdFx0PC9DYXJkQ29udGVudD5cclxuXHRcdFx0XHRcdDwvQ2FyZEFjdGlvbkFyZWE+XHJcblx0XHRcdFx0PC9DYXJkPlxyXG5cdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdDxHcmlkIGNvbnRhaW5lciB4cz17MTB9PlxyXG5cdFx0XHRcdDxwIHN0eWxlPXt0aW1lU3RhbXBTdHlsZX0+e3Byb3BzLnRpbWV9PC9wPlxyXG5cdFx0XHRcdDxwIHJlZj17Y29tbWVudFJlZn0+e3Byb3BzLmNvbW1lbnR9PC9wPlxyXG5cdFx0XHRcdDxHcmlkIGNvbnRhaW5lciB4cz17MTJ9PlxyXG5cdFx0XHRcdFx0PEF2YXRhclxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMubGlrZURpc2xpa2V9XHJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9e3Vwdm90ZUJ0bn1cclxuXHRcdFx0XHRcdFx0c3JjPVwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL3VwbG9hZC9maWxlcy90aHVtYnN1cC5qcGdcIlxyXG5cdFx0XHRcdFx0XHRhbHQ9XCJHZW5lcmljIHBsYWNlaG9sZGVyXCJcclxuXHRcdFx0XHRcdC8+PHByZT4gPC9wcmU+XHJcblx0XHRcdFx0XHQ8cD57bGlrZXN9PC9wPlxyXG5cdFx0XHRcdFx0PEF2YXRhclxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMubGlrZURpc2xpa2V9XHJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9e2Rvd252b3RlQnRufVxyXG5cdFx0XHRcdFx0XHRzcmM9XCJodHRwOi8vbG9jYWxob3N0OjgwODAvdXBsb2FkL2ZpbGVzL3RodW1ic2Rvd24uanBnXCJcclxuXHRcdFx0XHRcdFx0YWx0PVwiR2VuZXJpYyBwbGFjZWhvbGRlclwiXHJcblx0XHRcdFx0XHQvPjxwcmU+IDwvcHJlPlxyXG5cdFx0XHRcdFx0PEJ1dHRvbiBvbkNsaWNrPXsoZXZlbnQ6IGFueSkgPT4gcHJvcHMucmVwbHlIYW5kbGVyKGV2ZW50LCBwcm9wcy5jb21tZW50LCBwcm9wcy50aW1lKX0gdmFyaWFudD1cIm91dGxpbmVkXCIgY29sb3I9XCJwcmltYXJ5XCI+UkVQTFk8L0J1dHRvbj5cclxuXHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdDwvR3JpZD5cclxuXHRcdFx0PEdyaWQgY29udGFpbmVyIHhzPXsxMn0+XHJcblx0XHRcdFx0PEV4cGFuc2lvblBhbmVsIHNxdWFyZSBleHBhbmRlZD17ZXhwYW5kZWQgPT09ICdwYW5lbDEnfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKCdwYW5lbDEnKX0+XHJcblx0XHRcdFx0XHQ8RXhwYW5zaW9uUGFuZWxTdW1tYXJ5IGFyaWEtY29udHJvbHM9XCJwYW5lbDFkLWNvbnRlbnRcIiBpZD1cInBhbmVsMWQtaGVhZGVyXCI+XHJcblx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5PlxyXG5cdFx0XHRcdFx0XHRcdDxCb3ggZGlzcGxheT1cImZsZXhcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxCb3ggbT17Mn0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxCYWRnZSBiYWRnZUNvbnRlbnQ9e2NoaWxkRGF0YS5sZW5ndGh9IGNvbG9yPVwicHJpbWFyeVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHVucmVhZCBtZXNzYWdlcyA8TWFpbEljb24gLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9CYWRnZT5cclxuXHRcdFx0XHRcdFx0XHRcdDwvQm94PlxyXG5cdFx0XHRcdFx0XHRcdDwvQm94PlxyXG5cdFx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XHJcblx0XHRcdFx0XHQ8L0V4cGFuc2lvblBhbmVsU3VtbWFyeT5cclxuXHRcdFx0XHRcdDxFeHBhbnNpb25QYW5lbERldGFpbHM+XHJcblx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5PlxyXG5cdFx0XHRcdFx0XHRcdHtjaGlsZERhdGEubWFwKChkYXRhOiBhbnkpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiY2hpbGREYXRhOiBcIiArIGRhdGEpXHJcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8R3JpZCBrZXk9e2RhdGEudGltZX0gY29udGFpbmVyIHhzPXsyfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8Q2FyZCBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZH0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8Q2FyZEFjdGlvbkFyZWE+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxDYXJkTWVkaWFcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMubWVkaWF9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aW1hZ2U9e2RhdGEuc3JjfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlPVwiR2VuZXJpYyBwbGFjZWhvbGRlclwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxDYXJkQ29udGVudD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeSBndXR0ZXJCb3R0b20gdmFyaWFudD1cImg1XCIgY29tcG9uZW50PVwiaDJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwPjxpPntkYXRhLnVzZXJuYW1lfTwvaT48L3A+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0NhcmRDb250ZW50PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9DYXJkQWN0aW9uQXJlYT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0NhcmQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PEdyaWQgY29udGFpbmVyIHhzPXsxMH0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgc3R5bGU9e3RpbWVTdGFtcFN0eWxlfT57ZGF0YS50aW1lfTwvcD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8cD57ZGF0YS5jb21tZW50fTwvcD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8Lz5cclxuXHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0fSl9XHJcblx0XHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cclxuXHRcdFx0XHRcdDwvRXhwYW5zaW9uUGFuZWxEZXRhaWxzPlxyXG5cdFx0XHRcdDwvRXhwYW5zaW9uUGFuZWw+XHJcblx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcclxuXHRcdFx0XHRcclxuXHRcdDwvUmVhY3QuRnJhZ21lbnQ+XHJcblx0XHQpXHJcbn1cclxuaW50ZXJmYWNlIFBvc3RTdGF0ZSB7XHJcblx0ZGF0YTogYW55O1xyXG5cdHBhcmVudENvbW1lbnQ6IHN0cmluZztcclxuXHRjaGlsZERhdGE6IGFueTtcclxuXHRwb3N0VGltZTogc3RyaW5nO1xyXG5cdHNob3dDb21tZW50TW9kYWw6IGJvb2xlYW47XHJcblx0bGlrZXM6IG51bWJlcjtcclxuXHRwb3N0RGVzY3JpcHRpb246IHN0cmluZztcclxuXHRwb3N0U3JjOnN0cmluZztcclxufVxyXG5pbnRlcmZhY2UgUG9zdFByb3BzIHtcclxuXHRhdXRoZW50aWNhdGVkOiBib29sZWFuO1xyXG5cdHVzZXJuYW1lOiBzdHJpbmcgfCBudWxsO1xyXG5cdHBhc3N3b3JkOiBzdHJpbmcgfCBudWxsO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3QgKHByb3BzOiBQb3N0UHJvcHMpIHtcclxuXHJcblx0Y29uc3QgYmxhY2tvdXRSZWY6YW55ID0gUmVhY3QuY3JlYXRlUmVmKCk7XHJcblx0Y29uc3QgW2RhdGEsIHNldERhdGFdID0gUmVhY3QudXNlU3RhdGUoKTtcclxuXHRjb25zdCBbcGFyZW50Q29tbWVudCwgc2V0UGFyZW50Q29tbWVudF0gPSBSZWFjdC51c2VTdGF0ZSgpO1xyXG5cdFxyXG5cdGNvbnN0IFtjaGlsZERhdGEsIHNldENoaWxkRGF0YV0gPSBSZWFjdC51c2VTdGF0ZSgpO1xyXG5cdGNvbnN0IFtwb3N0RGVzY3JpcHRpb24sIHNldFBvc3REZXNjcmlwdGlvbl0gPSBSZWFjdC51c2VTdGF0ZSgpO1xyXG5cdGNvbnN0IFtwb3N0U3JjLCBzZXRQb3N0U3JjXSA9IFJlYWN0LnVzZVN0YXRlKCk7XHJcblx0Y29uc3QgW3Bvc3RUaW1lLCBzZXRQb3N0VGltZV0gPSBSZWFjdC51c2VTdGF0ZSgpO1xyXG5cdGNvbnN0IFtzaG93Q29tbWVudE1vZGFsLCBzZXRTaG93Q29tbWVudE1vZGFsXSA9IFJlYWN0LnVzZVN0YXRlKCk7XHJcblx0Y29uc3QgW2xpa2VzLCBzZXRMaWtlc10gPSBSZWFjdC51c2VTdGF0ZSgpO1xyXG5cdGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHRmdW5jdGlvbiBsb2FkRGF0YSgpe1xyXG5cdFx0Y29uc3QgcmVzcG9uc2U6YW55ID0gcG9zdChcIi9mb3J1bS9jb21tZW50L2dldFwiLCBnZXRQYXJhbShcInRpdGxlXCIpLCB0cnVlKTtcclxuXHRcdHJlc3BvbnNlLm9ubG9hZCA9ICgpID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJsb2FkaW5nIGRhdGEgZm9yIC4uLlwiKyBjb25zb2xlLmxvZyhsb2NhdGlvbi5zZWFyY2gpKVxyXG5cdFx0XHRsZXQgZGF0OiBhbnkgPSBKU09OLnBhcnNlKHJlc3BvbnNlLnJlc3BvbnNlVGV4dCk7XHJcblx0XHRcdGNvbnNvbGUubG9nKGRhdClcclxuXHRcdFx0XHJcblx0XHRcdHNldERhdGEoZGF0LmNvbW1lbnREYXRhKTtcclxuXHRcdFx0c2V0UG9zdERlc2NyaXB0aW9uKGRhdC5kZXNjcmlwdGlvbik7XHJcblx0XHRcdHNldFBvc3RTcmMoZGF0LnNyYyk7XHJcblx0XHRcdHNldFBvc3RUaW1lKGRhdC5kYXRlKTtcclxuXHRcdFx0XHJcblx0XHRcdGNvbnNvbGUubG9nKFwiZGF0YTogXCIgKyByZXNwb25zZS5yZXNwb25zZVRleHQpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRcclxuXHRcclxuXHJcblx0ZnVuY3Rpb24gZ2V0VXJsUGFyYW1zKCk6IFVSTFNlYXJjaFBhcmFtcyB7XHJcblx0XHRjb25zb2xlLmxvZyhcIkZVTEwgREFUQTogXCIgKyBsb2NhdGlvbi5zZWFyY2gpXHJcblx0ICAgIHJldHVybiBuZXcgVVJMU2VhcmNoUGFyYW1zKGxvY2F0aW9uLnNlYXJjaCk7XHJcbiAgXHR9XHJcblx0XHJcblx0ZnVuY3Rpb24gZ2V0UGFyYW0ocGFyYW06IHN0cmluZyk6IHN0cmluZyB7XHJcblx0ICAgIGxldCBzZWFyY2ggPSBnZXRVcmxQYXJhbXMoKTtcclxuXHQgICAgcmV0dXJuIHNlYXJjaC5nZXQocGFyYW0pIHx8IFwiXCI7XHJcbiAgXHR9XHJcblx0ZnVuY3Rpb24gcG9zdEJ0bihlOiBhbnksIGNvbW1lbnRUZXh0OnN0cmluZykge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0bGV0IHVzZXJuYW1lOiBhbnkgPSBwcm9wcy51c2VybmFtZTtcclxuXHRcdGNvbnN0IHJlc3BvbnNlID0gcG9zdChcIi91c2Vycy9sb2dpblwiLCBKU09OLnN0cmluZ2lmeSh7cGFyZW50Q29tbWVudDpwYXJlbnRDb21tZW50LCBjb21tZW50VGV4dDpjb21tZW50VGV4dCxcclxuXHRcdFx0cG9zdDpnZXRQYXJhbShcInRpdGxlXCIpLCBwYXJlbnRUaW1lOiBwb3N0VGltZSwgdXNlcm5hbWU6dXNlcm5hbWUuc3BsaXQoXCI/XCIpWzBdfSksIHRydWUpO1xyXG5cdFx0cmVzcG9uc2Uub25sb2FkID0gKCkgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcIlN1Y2Nlc3NmdWxseSBwb3N0ZWQgY29tbWVudFwiKVxyXG5cdFx0fVxyXG5cdFx0d2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gIFx0fVxyXG5cdGZ1bmN0aW9uIHVwdm90ZUJ0bihlOiBhbnkpIHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdHNldExpa2VzKHsgbGlrZXM6IGxpa2VzICsgMX0pXHJcblx0fVxyXG5cdGZ1bmN0aW9uIGRvd252b3RlQnRuIChlOiBhbnkpIHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdHNldExpa2VzKGxpa2VzIC0gMSlcclxuXHR9XHJcblx0ZnVuY3Rpb24gcmVwbHlCdG4gKGU6YW55LCBwYXJlbnRDb21tZW50VGV4dDpzdHJpbmcsIHBhcmVudFRpbWVUZXh0OnN0cmluZykge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0aWYgKHByb3BzLmF1dGhlbnRpY2F0ZWQgPT09IHRydWUpe1xyXG5cdFx0XHRzZXRQYXJlbnRDb21tZW50KHBhcmVudENvbW1lbnRUZXh0KTtcclxuXHRcdFx0c2V0UG9zdFRpbWUocGFyZW50VGltZVRleHQpO1xyXG5cdFx0XHRzZXRTaG93Q29tbWVudE1vZGFsKHRydWUpO1xyXG5cdCAgICB9IGVsc2Uge1xyXG5cdCAgICAgIGFsZXJ0KFwicGxlYXNlIGxvZyBpbiBvciBjcmVhdGUgYW4gYWNjb3VudCB0byBtYWtlIGEgY29tbWVudC5cIik7XHJcblx0ICAgIH1cclxuXHRcdGNvbnNvbGUubG9nKFwiY29tbWVudGluZ1wiKTtcclxuXHR9XHJcblx0ZnVuY3Rpb24gY2FuY2VsQnRuIChlOiBhbnkpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGJsYWNrb3V0UmVmLmN1cnJlbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gIH1cclxuXHRmdW5jdGlvbiBnb0JhY2soKXtcclxuXHRcdHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcclxuXHR9XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8UmVhY3QuRnJhZ21lbnQ+XHJcblx0XHRcdHtsb2FkRGF0YX1cclxuXHRcdFx0PENvbW1lbnRNb2RhbCBwb3N0aGFuZGxlcj17cG9zdEJ0bn0gc2hvdz17c2hvd0NvbW1lbnRNb2RhbH0gb25IaWRlPXsoKSA9PiBzZXRTaG93Q29tbWVudE1vZGFsKGZhbHNlKX0vPlxyXG5cdFx0XHQ8QnV0dG9uIG9uQ2xpY2s9e2dvQmFja30gY2xhc3NOYW1lPVwiYnRuXCIgdHlwZT1cImJ1dHRvblwiPkJhY2s8L0J1dHRvbj5cclxuXHRcdFx0PENvbnRhaW5lcj5cclxuXHRcdFx0XHQ8R3JpZCBjb250YWluZXIgeHM9ezJ9PlxyXG5cdFx0XHRcdDxDYXJkIGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkfT5cclxuXHRcdFx0ICAgICAgPENhcmRBY3Rpb25BcmVhPlxyXG5cdFx0XHQgICAgICAgIDxDYXJkTWVkaWFcclxuXHRcdFx0ICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZWRpYX1cclxuXHRcdFx0ICAgICAgICAgIGltYWdlPXtwb3N0U3JjfVxyXG5cdFx0XHQgICAgICAgICAgdGl0bGU9XCJDb250ZW1wbGF0aXZlIFJlcHRpbGVcIlxyXG5cdFx0XHQgICAgICAgIC8+XHJcblx0XHRcdCAgICAgICAgPENhcmRDb250ZW50PlxyXG5cdFx0XHQgICAgICAgICAgPFR5cG9ncmFwaHkgZ3V0dGVyQm90dG9tIHZhcmlhbnQ9XCJoNVwiIGNvbXBvbmVudD1cImgyXCI+XHJcblx0XHRcdCAgICAgICAgICAgIDxwIHN0eWxlPXtzdHlsZXMuY2VudGVyfT48aT57cHJvcHMudXNlcm5hbWV9PC9pPjwvcD5cclxuXHRcdFx0ICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuXHRcdFx0ICAgICBcclxuXHRcdFx0ICAgICAgICA8L0NhcmRDb250ZW50PlxyXG5cdFx0XHQgICAgICA8L0NhcmRBY3Rpb25BcmVhPlxyXG5cdFx0XHQgICAgPC9DYXJkPlxyXG5cdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHQ8R3JpZCBjb250YWluZXIgeHM9ezEwfT5cclxuXHRcdFx0XHRcdDxoMz57Z2V0UGFyYW0oXCJ0aXRsZVwiKX08L2gzPlxyXG5cdFx0XHRcdFx0PHA+e3Bvc3REZXNjcmlwdGlvbn08L3A+XHJcblx0XHRcdFx0XHQ8cCBzdHlsZT17ZGF0ZVN0eWxlfT5Qb3N0IHRpbWU6IHtwb3N0VGltZX08L3A+XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHQ8L0NvbnRhaW5lcj48aHIvPlxyXG5cdFx0XHRcdDxHcmlkIGNvbnRhaW5lciBzbT17MTJ9PlxyXG5cdFx0XHRcdFx0PEF2YXRhclxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMubGlrZURpc2xpa2V9XHJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9e3Vwdm90ZUJ0bn1cclxuXHRcdFx0XHRcdFx0c3JjPVwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL3VwbG9hZC9maWxlcy90aHVtYnN1cC5qcGdcIlxyXG5cdFx0XHRcdFx0XHRhbHQ9XCJHZW5lcmljIHBsYWNlaG9sZGVyXCJcclxuXHRcdFx0XHRcdC8+PHByZT4gPC9wcmU+XHJcblx0XHRcdFx0XHQ8cD57bGlrZXN9PC9wPlxyXG5cdFx0XHRcdFx0PEF2YXRhclxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMubGlrZURpc2xpa2V9XHJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9e2Rvd252b3RlQnRufVxyXG5cdFx0XHRcdFx0XHRzcmM9XCJodHRwOi8vbG9jYWxob3N0OjgwODAvdXBsb2FkL2ZpbGVzL3RodW1ic2Rvd24uanBnXCJcclxuXHRcdFx0XHRcdFx0YWx0PVwiR2VuZXJpYyBwbGFjZWhvbGRlclwiXHJcblx0XHRcdFx0XHQvPjxwcmU+IDwvcHJlPlxyXG5cdFx0XHRcdFx0PEJ1dHRvbiBvbkNsaWNrPXsoZTogYW55KSA9PiByZXBseUJ0bihlLCBnZXRQYXJhbShcInRpdGxlXCIpLCBnZXRQYXJhbShcImRhdGVcIikpfSB2YXJpYW50PVwib3V0bGluZWRcIiBjb2xvcj1cInByaW1hcnlcIj5SRVBMWTwvQnV0dG9uPlxyXG5cdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHQ8aHIvPlxyXG5cdFx0XHRcdDxoND5Db21tZW50czwvaDQ+XHJcblx0XHRcdFx0e2RhdGEubWFwKChkYXRhOiBhbnkpID0+IHtcclxuXHRcdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHRcdDw+XHJcblx0XHRcdFx0XHRcdFx0PEdyaWQgY29udGFpbmVyPlxyXG5cdFx0XHRcdFx0XHRcdFx0PFBhcGVyPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxDb21tZW50IGNoaWxkQ29tbWVudHM9e2RhdGEuY2hpbGRDb21tZW50c30ga2V5PXtkYXRhLnRpbWV9IHJlcGx5SGFuZGxlcj17cmVwbHlCdG59IGNvbW1lbnQ9e2RhdGEuY29tbWVudH0gdGltZT17ZGF0YS50aW1lfSBzcmM9e2RhdGEuc3JjfSB1c2VybmFtZT17ZGF0YS51c2VybmFtZX0vPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9QYXBlcj5cclxuXHRcdFx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHRcdDwvPlxyXG5cdFx0XHRcdFx0KVxyXG5cdFx0XHRcdH0pfVxyXG5cdFx0XHQ8L1JlYWN0LkZyYWdtZW50PlxyXG5cdFx0KTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQXZhdGFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0F2YXRhcic7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lJztcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xyXG5pbXBvcnQgRm9ybUNvbnRyb2xMYWJlbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbExhYmVsJztcclxuaW1wb3J0IENoZWNrYm94IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NoZWNrYm94JztcclxuaW1wb3J0IExpbmsgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGluayc7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xyXG5pbXBvcnQgQm94IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0JveCc7XHJcbmltcG9ydCBMb2NrT3V0bGluZWRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Mb2NrT3V0bGluZWQnO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyJztcclxuaW1wb3J0IHtwb3N0fSBmcm9tICcuLi9zdGF0aWMvYXhpb3MnO1xyXG5mdW5jdGlvbiBDb3B5cmlnaHQoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgIHsnQ29weXJpZ2h0IO+/vSAnfVxyXG4gICAgICA8TGluayBjb2xvcj1cImluaGVyaXRcIiBocmVmPVwiaHR0cHM6Ly9tYXRlcmlhbC11aS5jb20vXCI+XHJcbiAgICAgICAgWW91ciBXZWJzaXRlXHJcbiAgICAgIDwvTGluaz57JyAnfVxyXG4gICAgICB7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfVxyXG4gICAgICB7Jy4nfVxyXG4gICAgPC9UeXBvZ3JhcGh5PlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICAnQGdsb2JhbCc6IHtcclxuICAgIGJvZHk6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBwYXBlcjoge1xyXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDgpLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICB9LFxyXG4gIGF2YXRhcjoge1xyXG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluLFxyXG4gIH0sXHJcbiAgZm9ybToge1xyXG4gICAgd2lkdGg6ICcxMDAlJywgLy8gRml4IElFIDExIGlzc3VlLlxyXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDMpLFxyXG4gIH0sXHJcbiAgc3VibWl0OiB7XHJcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMywgMCwgMiksXHJcbiAgfSxcclxufSkpO1xyXG5cclxuaW50ZXJmYWNlIFdhcm5pbmdQcm9wcyB7XHJcblx0dmFsOiBzdHJpbmc7XHJcbn1cclxuY2xhc3MgV2FybmluZyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxXYXJuaW5nUHJvcHM+IHtcclxuXHRkZXRlcm1pbmVDbGFzcyA9ICgpID0+IHtcclxuXHRcdGlmICh0aGlzLnByb3BzLnZhbC5pbmNsdWRlcyhcIlN1Y2Nlc3NcIikpe1xyXG5cdFx0XHRyZXR1cm4gXCJhbGVydCBhbGVydC1zdWNjZXNzXCI7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gXCJhbGVydCBhbGVydC1kYW5nZXJcIjtcclxuXHRcdH1cclxuXHR9XHJcblx0cmVuZGVyKCl7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8ZGl2IHN0eWxlPXt7ZGlzcGxheTogdGhpcy5wcm9wcy52YWwgPT09IFwiXCIgPyBcIm5vbmVcIiA6IFwiYmxvY2tcIiB9fSBjbGFzc05hbWU9e3RoaXMuZGV0ZXJtaW5lQ2xhc3MoKX0gcm9sZT1cImFsZXJ0XCI+e3RoaXMucHJvcHMudmFsfTwvZGl2PlxyXG5cdFx0KTtcclxuXHR9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lnblVwKCkge1xyXG5cdGxldCB1c2VybmFtZVJlZjphbnkgPSBSZWFjdC5jcmVhdGVSZWY8SFRNTElucHV0RWxlbWVudD4oKTtcclxuXHRsZXQgZW1haWxSZWY6YW55ID0gUmVhY3QuY3JlYXRlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KCk7XHJcblx0bGV0IHBhc3N3b3JkUmVmOmFueSA9IFJlYWN0LmNyZWF0ZVJlZjxIVE1MSW5wdXRFbGVtZW50PigpO1xyXG5cdGNvbnN0IFtyZXNwb25zZSwgc2V0UmVzcG9uc2UgXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG5cdFxyXG5cdGZ1bmN0aW9uIGZvY3VzU3VibWl0SW5wdXQoZTogYW55KXtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFxyXG5cdFx0Y29uc29sZS5sb2coXCJkYXQ6IFwiICsgdXNlcm5hbWVSZWYuY3VycmVudC52YWx1ZSlcclxuXHRcdFxyXG5cdFx0Y29uc3QgdXNlcm5hbWU6c3RyaW5nID0gdXNlcm5hbWVSZWYuY3VycmVudC52YWx1ZTtcclxuXHRcdGNvbnN0IGVtYWlsOnN0cmluZyA9IGVtYWlsUmVmLmN1cnJlbnQudmFsdWU7XHJcblx0XHRjb25zdCBwYXNzd29yZDpzdHJpbmcgPSBwYXNzd29yZFJlZi5jdXJyZW50LnZhbHVlO1xyXG5cdFx0XHJcblx0XHRcclxuXHRcdGNvbnNvbGUubG9nKFwidXNlcm5hbWU6IFwiICsgdXNlcm5hbWUgKyBcIiwgZW1haWw6IFwiICsgZW1haWwgKyBcIiwgcGFzczogXCIgKyBwYXNzd29yZClcclxuXHRcdGNvbnN0IHJlc3BvbnNlID0gcG9zdChcIi91c2Vycy9yZWdpc3RlclwiLCBKU09OLnN0cmluZ2lmeSh7dXNlcm5hbWU6dXNlcm5hbWUsIGVtYWlsOmVtYWlsLCBwYXNzd29yZDpwYXNzd29yZH0pLCB0cnVlKTtcclxuXHRcdFx0cmVzcG9uc2Uub25sb2FkID0gKCkgPT4ge1xyXG5cdFx0XHRcdHNldFJlc3BvbnNlKHJlc3BvbnNlLnJlc3BvbnNlVGV4dClcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0XHQvL2NsZWFyIGFsbCBpbnB1dCBmaWVsZHNcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyIGNvbXBvbmVudD1cIm1haW5cIiBtYXhXaWR0aD1cInhzXCI+XHJcblx0XHQ8V2FybmluZyB2YWw9e3Jlc3BvbnNlfS8+XHJcbiAgICAgIDxDc3NCYXNlbGluZSAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XHJcbiAgICAgICAgPEF2YXRhciBjbGFzc05hbWU9e2NsYXNzZXMuYXZhdGFyfT5cclxuICAgICAgICAgIDxMb2NrT3V0bGluZWRJY29uIC8+XHJcbiAgICAgICAgPC9BdmF0YXI+XHJcbiAgICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PVwiaDFcIiB2YXJpYW50PVwiaDVcIj5cclxuICAgICAgICAgIFNpZ24gdXBcclxuICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm19IG5vVmFsaWRhdGU+XHJcbiAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcblx0XHRcdFx0aW5wdXRSZWY9e3VzZXJuYW1lUmVmfVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgIGlkPVwidXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJVc2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiVXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwidXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuXHRcdFx0XHRpbnB1dFJlZj17ZW1haWxSZWZ9XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkVtYWlsIEFkZHJlc3NcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcblx0XHRcdFx0aW5wdXRSZWY9e3Bhc3N3b3JkUmVmfSAgICAgICAgICAgICAgICBcclxuXHRcdFx0XHR2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiY3VycmVudC1wYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcclxuICAgICAgICAgICAgICAgIGNvbnRyb2w9ezxDaGVja2JveCB2YWx1ZT1cImFsbG93RXh0cmFFbWFpbHNcIiBjb2xvcj1cInByaW1hcnlcIiAvPn1cclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiSSB3YW50IHRvIHJlY2VpdmUgaW5zcGlyYXRpb24sIG1hcmtldGluZyBwcm9tb3Rpb25zIGFuZCB1cGRhdGVzIHZpYSBlbWFpbC5cIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnN1Ym1pdH1cclxuXHRcdFx0b25DbGljaz17Zm9jdXNTdWJtaXRJbnB1dH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgU2lnbiBVcFxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8R3JpZCBjb250YWluZXIganVzdGlmeT1cImZsZXgtZW5kXCI+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9Mb2dpblwiIHZhcmlhbnQ9XCJib2R5MlwiPlxyXG4gICAgICAgICAgICAgICAgQWxyZWFkeSBoYXZlIGFuIGFjY291bnQ/IFNpZ24gaW5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8Qm94IG10PXs1fT5cclxuICAgICAgICA8Q29weXJpZ2h0IC8+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufSIsIlxyXG5leHBvcnQgY29uc3QgcG9zdCA9ICh1cmw6c3RyaW5nLCBkYXRhOmFueSwganNvbjogYm9vbGVhbikgPT4ge1xyXG5cdHZhciB4aHR0cCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG5cdFxyXG5cdHhodHRwLm9wZW4oXCJQT1NUXCIsIFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwXCIgKyB1cmwsIHRydWUpO1xyXG5cdGlmIChqc29uID09PSB0cnVlKSB4aHR0cC5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiKTtcclxuXHR4aHR0cC5zZW5kKGRhdGEpO1xyXG5cdGNvbnNvbGUubG9nKFwicHJvZ3Jlc3NpbmcuLi4uXCIpXHJcblx0cmV0dXJuIHhodHRwO1xyXG59XHJcbmV4cG9ydCBjb25zdCBwb3N0X3N5bmModXJsOiBzdHJpbmcsIGRhdGE6IGFueSwganNvbjogYm9vbGVhbil7XHJcbiAgICB2YXIgeGh0dHAgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuXHJcbiAgICB4aHR0cC5vcGVuKFwiUE9TVFwiLCBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MFwiICsgdXJsLCBmYWxzZSk7XHJcbiAgICBpZiAoanNvbiA9PT0gdHJ1ZSkgeGh0dHAuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIik7XHJcbiAgICB4aHR0cC5zZW5kKGRhdGEpO1xyXG4gICAgY29uc29sZS5sb2coXCJwcm9ncmVzc2luZy4uLi5cIilcclxuICAgIHJldHVybiB4aHR0cDtcclxufVxyXG5leHBvcnQgY29uc3QgZ2V0ID0gKHVybDpzdHJpbmcpID0+IHtcclxuXHR2YXIgeGh0dHAgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuXHR4aHR0cC5vcGVuKFwiR0VUXCIsIFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwXCIgKyB1cmwsIHRydWUpO1xyXG5cdHhodHRwLnNlbmQoKTtcclxuXHRjb25zb2xlLmxvZyhcInByb2dyZXNzaW5nLi4uLlwiKVxyXG5cdHJldHVybiB4aHR0cDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==