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

/***/ "./src/components/pages/Forum.tsx":
/*!****************************************!*\
  !*** ./src/components/pages/Forum.tsx ***!
  \****************************************/
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
const Avatar_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/esm/Avatar/index.js"));
const Grid_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js"));
const Typography_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js"));
const Paper_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js"));
const Container_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js"));
const Divider_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/esm/Divider/index.js"));
const Button_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js"));
const GridList_1 = __importDefault(__webpack_require__(/*! @material-ui/core/GridList */ "./node_modules/@material-ui/core/esm/GridList/index.js"));
const GridListTile_1 = __importDefault(__webpack_require__(/*! @material-ui/core/GridListTile */ "./node_modules/@material-ui/core/esm/GridListTile/index.js"));
const Fade_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Fade */ "./node_modules/@material-ui/core/esm/Fade/index.js"));
const Modal_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Modal */ "./node_modules/@material-ui/core/esm/Modal/index.js"));
const styles_1 = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
const Backdrop_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Backdrop */ "./node_modules/@material-ui/core/esm/Backdrop/index.js"));
const TextField_1 = __importDefault(__webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js"));
const avatarStyle = {
    margin: 10,
    width: 80,
    height: 80,
};
const usernameStyle = {
    fontSize: "12px",
    margin: "0px 0px 0px 20px",
};
const titleStyle = {
    margin: "5px 0px 0px 5px",
    padding: "0px 0px 0px 0px",
    color: "black",
};
const createPostBtnStyle = {
    height: "38px"
};
const useStyles = styles_1.makeStyles((theme) => styles_1.createStyles({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textField: {
        width: "100%"
    }
}));
class ForumItem extends react_1.default.Component {
    render() {
        return (react_1.default.createElement(Paper_1.default, null,
            react_1.default.createElement(Grid_1.default, { container: true, item: true, xs: 12 },
                react_1.default.createElement(Grid_1.default, { item: true, xs: 2, justify: "center", alignItems: "center" },
                    react_1.default.createElement(Grid_1.default, { item: true, justify: "center", alignItems: "center" },
                        react_1.default.createElement(Grid_1.default, { justify: "center", alignItems: "center" },
                            react_1.default.createElement(Avatar_1.default, { alt: "Avatar image", src: `http://localhost:8080/upload/user/${this.props.username}`, style: avatarStyle })),
                        react_1.default.createElement(Grid_1.default, { justify: "center", alignItems: "center" },
                            react_1.default.createElement(Typography_1.default, { variant: "h6", gutterBottom: true }, this.props.username)))),
                react_1.default.createElement(Grid_1.default, { item: true, xs: 10, justify: "flex-start", alignItems: "flex-start", zeroMinWidth: true },
                    react_1.default.createElement(react_router_dom_1.Link, { style: titleStyle, to: { pathname: `/Forum/Post/?title=${this.props.title}`,
                            state: {
                                src: this.props.src,
                                description: this.props.description,
                                username: this.props.username,
                                time: this.props.date
                            }
                        } },
                        react_1.default.createElement(Typography_1.default, { variant: "h5", gutterBottom: true }, this.props.title)),
                    react_1.default.createElement("p", { style: { wordWrap: "break-word", overflow: "hidden" } }, this.props.description)))));
    }
}
exports.ForumItem = ForumItem;
function CommentModal(props) {
    const classes = useStyles();
    const descriptionRef = react_1.default.createRef();
    const [textLimit, setTextLimit] = react_1.default.useState(255);
    const [open, setOpen] = react_1.default.useState(false);
    const titleRef = react_1.default.createRef();
    const handleOpen = () => {
        if (props.authenticated) {
            setOpen(true);
        }
        else {
            alert("login to make a post");
        }
    };
    const handleClose = () => {
        setOpen(false);
    };
    const textLimitChange = (event) => {
        setTextLimit(255 - event.target.value.length);
    };
    function postBtn(e) {
        const token = localStorage.getItem('token');
        if (token) {
            const response = axios_1.post("/forum/post", JSON.stringify({ username: token.split("?")[0], title: titleRef.current.value, description: descriptionRef.current.value }), true);
            response.onload = () => {
                if (response.responseText.includes("Success")) {
                    console.log("text: " + response.responseText);
                    props.onHide();
                    window.location.reload();
                }
            };
        }
        else {
            console.log("Create an account or login to make a post.");
        }
    }
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(Button_1.default, { style: createPostBtnStyle, onClick: handleOpen, variant: "contained", color: "primary" }, "Create Post"),
        react_1.default.createElement(Modal_1.default, { "aria-labelledby": "transition-modal-title", "aria-describedby": "transition-modal-description", className: classes.modal, open: open, onClose: handleClose, closeAfterTransition: true, BackdropComponent: Backdrop_1.default, BackdropProps: {
                timeout: 500,
            } },
            react_1.default.createElement(Fade_1.default, { in: open },
                react_1.default.createElement("div", { className: classes.paper },
                    react_1.default.createElement("form", { noValidate: true, autoComplete: "off" },
                        react_1.default.createElement("h2", { id: "transition-modal-title" }, "Create a post"),
                        react_1.default.createElement(Grid_1.default, { xs: 12 },
                            react_1.default.createElement(TextField_1.default, { inputRef: titleRef, id: "outlined-basic", className: classes.textField, label: "Title", variant: "outlined" })),
                        react_1.default.createElement(Grid_1.default, { xs: 12 },
                            react_1.default.createElement(TextField_1.default, { onChange: (event) => textLimitChange(event), inputRef: descriptionRef, id: "outlined-multiline-static", label: "Description", multiline: true, rows: "4", className: classes.textField, margin: "normal", variant: "outlined" })),
                        react_1.default.createElement(Grid_1.default, { container: true, xs: 12, justify: "flex-end", alignItems: "flex-end" },
                            react_1.default.createElement(Typography_1.default, { component: "p" }, textLimit)),
                        react_1.default.createElement(Grid_1.default, { xs: 12 },
                            react_1.default.createElement(Button_1.default, { onClick: () => setOpen(false) }, "Close"),
                            react_1.default.createElement(Button_1.default, { onClick: postBtn, variant: "contained", color: "primary", type: "submit" }, "Post"))))))));
}
class Forum extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            showPostModal: false
        };
        const response = axios_1.get("/forum/get");
        response.onload = () => {
            var jsonArray = JSON.parse(response.responseText);
            this.setState({ data: jsonArray });
        };
    }
    render() {
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(Container_1.default, null,
                react_1.default.createElement(Grid_1.default, { item: true, xs: 12, container: true, justify: "flex-end", alignItems: "flex-end" },
                    react_1.default.createElement(CommentModal, { authenticated: this.props.authenticated }))),
            react_1.default.createElement("br", null),
            react_1.default.createElement(Divider_1.default, null),
            react_1.default.createElement(GridList_1.default, { cellHeight: 160, cols: 12 }, (this.state.data).map((data) => react_1.default.createElement(GridListTile_1.default, { key: data.date, cols: 12 },
                react_1.default.createElement(ForumItem, { my_username: this.props.my_username, my_password: this.props.my_password, authenticated: this.props.authenticated, date: data.date, title: data.title, key: data.date, username: data.username, description: data.description, src: data.path }))))));
    }
}
exports.default = Forum;


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
exports.get = (url) => {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:8080" + url, true);
    xhttp.send();
    console.log("progressing....");
    return xhttp;
};


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91bWQvLi9zcmMvQXBwLnRzeCIsIndlYnBhY2s6Ly91bWQvLi9zcmMvY29tcG9uZW50cy9wYWdlcy9BY2NvdW50LnRzeCIsIndlYnBhY2s6Ly91bWQvLi9zcmMvY29tcG9uZW50cy9wYWdlcy9Gb3J1bS50c3giLCJ3ZWJwYWNrOi8vdW1kLy4vc3JjL2NvbXBvbmVudHMvcGFnZXMvTG9naW4udHN4Iiwid2VicGFjazovL3VtZC8uL3NyYy9jb21wb25lbnRzL3BhZ2VzL1Bvc3QudHN4Iiwid2VicGFjazovL3VtZC8uL3NyYy9jb21wb25lbnRzL3BhZ2VzL1JlZ2lzdGVyLnRzeCIsIndlYnBhY2s6Ly91bWQvLi9zcmMvY29tcG9uZW50cy9zdGF0aWMvYXhpb3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUdBQTBCO0FBRTFCLGtJQUEwRTtBQUMxRSx1SkFBb0Q7QUFFcEQsOEhBQWdEO0FBQ2hELDhIQUFnRDtBQUNoRCx5SEFBNkM7QUFDN0Msd0lBQTBDO0FBQzFDLGtJQUFtRDtBQUNuRCx5SEFBNkM7QUFDN0MsK0hBQWlEO0FBQ2pELCtIQUFpRDtBQUNqRCxrSUFBbUQ7QUFDbkQsK0hBQWlEO0FBQ2pELHlIQUE2QztBQUM3Qyx5R0FBK0M7QUFDL0Msc0hBQTJDO0FBQzNDLHlIQUE2QztBQUU3Qyw2SEFBMkU7QUFHM0UsTUFBTSxTQUFTLEdBQUcsbUJBQVUsQ0FBQyxDQUFDLEtBQVksRUFBRSxFQUFFLENBQzdDLHFCQUFZLENBQUM7SUFDWixTQUFTLEVBQUU7UUFDVixLQUFLLEVBQUUsT0FBTztRQUNkLFdBQVcsRUFBRSxNQUFNO0tBQ25CO0lBQ0QsSUFBSSxFQUFFO1FBQ0wsUUFBUSxFQUFFLFFBQVE7UUFDbEIsZUFBZSxFQUFFLE9BQU87UUFDeEIsU0FBUyxFQUFFLE9BQU87UUFDbEIsT0FBTyxFQUFFLG9CQUFvQjtLQUM3QjtJQUNELGFBQWEsRUFBRTtRQUNkLGVBQWUsRUFBRSx3REFBd0Q7UUFD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akMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsdUJBQXVCLEdBQUcsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3hELElBQUksSUFBSSxLQUFLLElBQUk7UUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxFQUFFLGlDQUFpQyxDQUFDLENBQUM7SUFDN0YsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDO0lBQzlCLE9BQU8sS0FBSyxDQUFDO0FBQ2QsQ0FBQztBQUNZLFdBQUcsR0FBRyxDQUFDLEdBQVUsRUFBRSxFQUFFO0lBQ2pDLElBQUksS0FBSyxHQUFHLElBQUksY0FBYyxFQUFFLENBQUM7SUFDakMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsdUJBQXVCLEdBQUcsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3ZELEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUM7SUFDOUIsT0FBTyxLQUFLLENBQUM7QUFDZCxDQUFDIiwiZmlsZSI6Im1haW4uZGEwNDE2ZmFkNWIzNGE3OThkODEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyLCBSb3V0ZSwgU3dpdGNoIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lcic7XG5cbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9jb21wb25lbnRzL2xheW91dC9IZWFkZXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuL2NvbXBvbmVudHMvbGF5b3V0L0Zvb3Rlcic7XG5pbXBvcnQgQWJvdXQgZnJvbSAnLi9jb21wb25lbnRzL3BhZ2VzL0Fib3V0JztcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xuaW1wb3J0IFJlZ2lzdGVyIGZyb20gJy4vY29tcG9uZW50cy9wYWdlcy9SZWdpc3Rlcic7XG5pbXBvcnQgSW5kZXggZnJvbSAnLi9jb21wb25lbnRzL3BhZ2VzL0luZGV4JztcbmltcG9ydCBDb250YWN0IGZyb20gJy4vY29tcG9uZW50cy9wYWdlcy9Db250YWN0JztcbmltcG9ydCBBY2NvdW50IGZyb20gJy4vY29tcG9uZW50cy9wYWdlcy9BY2NvdW50JztcbmltcG9ydCBQcm9qZWN0cyBmcm9tICcuL2NvbXBvbmVudHMvcGFnZXMvUHJvamVjdHMnO1xuaW1wb3J0IFN1cHBvcnQgZnJvbSAnLi9jb21wb25lbnRzL3BhZ2VzL1N1cHBvcnQnO1xuaW1wb3J0IEZvcnVtIGZyb20gJy4vY29tcG9uZW50cy9wYWdlcy9Gb3J1bSc7XG5pbXBvcnQge3Bvc3R9IGZyb20gJy4vY29tcG9uZW50cy9zdGF0aWMvYXhpb3MnO1xuaW1wb3J0IFBvc3QgZnJvbSAnLi9jb21wb25lbnRzL3BhZ2VzL1Bvc3QnO1xuaW1wb3J0IExvZ2luIGZyb20gJy4vY29tcG9uZW50cy9wYWdlcy9Mb2dpbic7XG5cbmltcG9ydCB7IG1ha2VTdHlsZXMsIFRoZW1lLCBjcmVhdGVTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuXG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lOiBUaGVtZSkgPT5cblx0Y3JlYXRlU3R5bGVzKHtcblx0XHRwYXJhZ3JhcGg6IHtcblx0XHRcdGNvbG9yOiBcIndoaXRlXCIsXG5cdFx0XHRwYWRkaW5nTGVmdDogXCIyMHB4XCJcblx0XHR9LFxuXHRcdG1haW46IHtcblx0XHRcdG1heFdpZHRoOiBcIjExNDBweFwiLFxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCIsXG5cdFx0XHRtaW5IZWlnaHQ6IFwiMTAwdmhcIixcblx0XHRcdHBhZGRpbmc6IFwiOTBweCAzMHB4IDBweCAzMHB4XCJcblx0XHR9LFxuXHRcdG1haW5Db250YWluZXI6IHtcblx0XHRcdGJhY2tncm91bmRJbWFnZTogXCJ1cmwoaHR0cDovL2xvY2FsaG9zdDo4MDgwL3VwbG9hZC9maWxlcy9iYWNrZ3JvdW5kLmpwZylcIixcblx0XHRcdG1pbkhlaWdodDogXCIxMDB2aFwiLFxuXHRcdFx0cGFkZGluZzogXCIwcHhcIixcblx0XHRcdG1hcmdpbjogXCIwcHhcIlxuXHRcdH1cblx0fSksXG5cdFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwICgpIHtcblx0Y29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXHRcblx0Y29uc3QgW2F1dGhlbnRpY2F0ZWQsIHNldEF1dGhlbnRpY2F0ZWRdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuXHRjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuXHRjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuXHRcblx0ZnVuY3Rpb24gYXV0aGVudGljYXRlX3VzZXIoKXtcblx0XHRjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xuXHRcdGNvbnNvbGUubG9nKFwiQXV0aGVudGljYXRpbmcgdXNlciBhdCB0b3AgbGF5ZXJcIilcblx0XHRpZiAodG9rZW4pIHtcblx0XHRcdGNvbnN0IHU6bnVsbCB8IHN0cmluZyA9IHRva2VuLnNwbGl0KFwiP1wiKVswXTsgc2V0VXNlcm5hbWUodSk7XG5cdFx0XHRjb25zdCBwOm51bGwgfCBzdHJpbmcgPSB0b2tlbi5zcGxpdChcIj9cIilbMV07IHNldFBhc3N3b3JkKHApO1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBwb3N0KFwiL3VzZXJzL2xvZ2luXCIsIEpTT04uc3RyaW5naWZ5KHt1c2VybmFtZTp1c2VybmFtZSwgZW1haWw6dXNlcm5hbWUsIHBhc3N3b3JkOnBhc3N3b3JkfSksIHRydWUpO1xuXHRcdFx0cmVzcG9uc2Uub25sb2FkID0gKCkgPT4ge1xuXHRcdFx0XHRpZiAocmVzcG9uc2UucmVzcG9uc2VUZXh0LmluY2x1ZGVzKFwiU3VjY2Vzc1wiKSl7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCJTdWNjZXNzZnVsbHkgYXV0aGVudGljYXRlZCB1c2VyXCIpXG5cdFx0XHRcdFx0c2V0QXV0aCh0cnVlKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRcblx0ZnVuY3Rpb24gc2V0QXV0aCh2YWw6IGJvb2xlYW4pe1xuXHRcdHNldEF1dGhlbnRpY2F0ZWQodmFsKTtcblx0fVxuXHRhdXRoZW50aWNhdGVfdXNlcigpO1xuXHRyZXR1cm4gKFxuXHRcdDxSb3V0ZXI+XG5cdFx0XHQ8R3JpZCBjb250YWluZXIgeHM9ezEyfSBjbGFzc05hbWU9e2NsYXNzZXMubWFpbkNvbnRhaW5lcn0+XG5cdFx0XHRcdDxIZWFkZXIgYXV0aD17YXV0aGVudGljYXRlZH0vPlxuXHRcdFx0XHQ8R3JpZCBpdGVtIGNvbnRhaW5lciB4cz17MTJ9IGp1c3RpZnk9XCJjZW50ZXJcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgPlxuXHRcdFx0XHRcdDxDb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc2VzLm1haW59PlxuXHRcdFx0XHRcdFx0PFN3aXRjaD5cblx0XHRcdFx0XHRcdFx0PFJvdXRlIGV4YWN0IHBhdGg9Jy8nIHJlbmRlcj17KHByb3BzKSA9PiAoPEluZGV4Lz4pfS8+XG5cdFx0XHRcdFx0XHRcdDxSb3V0ZSBwYXRoPScvRm9ydW0nIHJlbmRlcj17KHByb3BzKSA9PiAoPEZvcnVtIGF1dGhlbnRpY2F0ZWQ9e2F1dGhlbnRpY2F0ZWR9IG15X3VzZXJuYW1lPXt1c2VybmFtZX0gbXlfcGFzc3dvcmQ9e3Bhc3N3b3JkfSAvPil9Lz5cblx0XHRcdFx0XHRcdFx0PFJvdXRlIHBhdGg9Jy9Mb2dpbicgcmVuZGVyPXsocHJvcHMpID0+ICg8TG9naW4gYXV0aGVudGljYXRlPXthdXRoZW50aWNhdGVfdXNlcn0gLz4pfS8+XG5cdFx0XHRcdFx0XHRcdDxSb3V0ZSBwYXRoPScvUmVnaXN0ZXInIGNvbXBvbmVudD17UmVnaXN0ZXJ9IC8+XG5cdFx0XHRcdFx0XHRcdDxSb3V0ZSBwYXRoPScvQWJvdXQgdXMnIGNvbXBvbmVudD17QWJvdXR9IC8+XG5cdFx0XHRcdFx0XHRcdDxSb3V0ZSBwYXRoPScvQWNjb3VudCcgcmVuZGVyPXsocHJvcHMpID0+ICg8QWNjb3VudCByZW1vdmVBdXRoPXtzZXRBdXRofSB1c2VybmFtZT17dXNlcm5hbWV9IHBhc3N3b3JkPXtwYXNzd29yZH0vPil9Lz5cblx0XHRcdFx0XHRcdFx0PFJvdXRlIHBhdGg9Jy9Gb3J1bS9Qb3N0JyByZW5kZXI9eyhwcm9wcykgPT4gKDxQb3N0IGF1dGhlbnRpY2F0ZWQ9e2F1dGhlbnRpY2F0ZWR9IHVzZXJuYW1lPXt1c2VybmFtZX0gcGFzc3dvcmQ9e3Bhc3N3b3JkfS8+KX0vPlxuXHRcdFx0XHRcdFx0XHQ8Um91dGUgcGF0aD0nL0NvbnRhY3QnIGNvbXBvbmVudD17Q29udGFjdH0gLz5cblx0XHRcdFx0XHRcdFx0PFJvdXRlIHBhdGg9Jy9Qcm9qZWN0cycgY29tcG9uZW50PXtQcm9qZWN0c30gLz5cblx0XHRcdFx0XHRcdFx0PFJvdXRlIHBhdGg9Jy9TdXBwb3J0JyBjb21wb25lbnQ9e1N1cHBvcnR9IC8+XG5cdFx0XHRcdFx0XHQ8L1N3aXRjaD5cblx0XHRcdFx0XHQ8L0NvbnRhaW5lcj5cblx0XHRcdFx0PC9HcmlkPlxuXHRcdFx0XHQ8Rm9vdGVyLz5cblx0XHRcdDwvR3JpZD5cblx0XHQ8L1JvdXRlcj5cblx0KTtcbn1cblxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBwb3N0IH0gZnJvbSAnLi4vc3RhdGljL2F4aW9zJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5pbXBvcnQgQ2FyZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkJztcclxuaW1wb3J0IENhcmRBY3Rpb25BcmVhIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRBY3Rpb25BcmVhJztcclxuaW1wb3J0IENhcmRBY3Rpb25zIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRBY3Rpb25zJztcclxuaW1wb3J0IENhcmRDb250ZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRDb250ZW50JztcclxuaW1wb3J0IENhcmRNZWRpYSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkTWVkaWEnO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXInO1xyXG5pbXBvcnQgRm9ybUdyb3VwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1Hcm91cCc7XHJcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbCc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuaW50ZXJmYWNlIEFjY291bnRQcm9wcyB7XHJcblx0cmVtb3ZlQXV0aDogKGFyZzogYm9vbGVhbikgPT4gdm9pZDtcclxuXHR1c2VybmFtZTogc3RyaW5nIHwgbnVsbDtcclxuXHRwYXNzd29yZDogc3RyaW5nIHwgbnVsbDtcclxufVxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICBjYXJkOiB7XHJcbiAgICBtYXhXaWR0aDogMjUwLFxyXG4gIH0sXHJcbiAgbWVkaWE6IHtcclxuICAgIGhlaWdodDogMTYwLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWNjb3VudChwcm9wczogQWNjb3VudFByb3BzKSB7XHJcblx0bGV0IG9sZFBhc3N3b3JkUmVmOmFueSA9IFJlYWN0LmNyZWF0ZVJlZigpO1xyXG5cdGxldCBuZXdQYXNzd29yZFJlZjphbnkgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuXHRsZXQgZm9ybVJlZjphbnkgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuXHRsZXQgaW1hZ2VGaWxlUmVmOmFueSA9IFJlYWN0LmNyZWF0ZVJlZigpO1xyXG5cdGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHRcclxuXHRmdW5jdGlvbiBzZXRJbWdTcmMgKCkge1xyXG5cdFx0cmV0dXJuIGBodHRwOi8vbG9jYWxob3N0OjgwODAvdXBsb2FkL3VzZXIvJHtwcm9wcy51c2VybmFtZX1gO1xyXG5cdH1cclxuXHRmdW5jdGlvbiBkZWxldGVVc2VyKCkge1xyXG5cdFx0Y29uc3QgcmVzcG9uc2UgPSBwb3N0KFwiL3VzZXJzL2RlbGV0ZVwiLCBKU09OLnN0cmluZ2lmeSh7dXNlcm5hbWU6cHJvcHMudXNlcm5hbWUsIGVtYWlsOnByb3BzLnVzZXJuYW1lLCBwYXNzd29yZDpwcm9wcy5wYXNzd29yZH0pLCB0cnVlKTtcclxuXHRcdHJlc3BvbnNlLm9ubG9hZCA9ICgpID0+IHtcclxuXHRcdFx0aWYgKHJlc3BvbnNlLnJlc3BvbnNlVGV4dC5pbmNsdWRlcyhcIlN1Y2Nlc3NcIikpe1xyXG5cdFx0XHRcdGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0b2tlbicpO1xyXG5cdFx0XHRcdHByb3BzLnJlbW92ZUF1dGgoZmFsc2UpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdGZ1bmN0aW9uIGxvZ291dCAoKSB7XHJcblx0XHRsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndG9rZW4nKTtcclxuXHRcdHByb3BzLnJlbW92ZUF1dGgoZmFsc2UpO1xyXG5cdH1cclxuXHRmdW5jdGlvbiB1cGRhdGVVc2VyIChlOiBhbnkpIHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFxyXG5cdFx0Y29uc3QgcmVzcG9uc2UgPSBwb3N0KFwiL3VzZXJzL3VwZGF0ZVwiLCBKU09OLnN0cmluZ2lmeSh7dXNlcm5hbWU6cHJvcHMudXNlcm5hbWUsIG9sZFBhc3N3b3JkOnByb3BzLnBhc3N3b3JkLCBuZXdQYXNzd29yZDpuZXdQYXNzd29yZFJlZi5jdXJyZW50LnZhbHVlfSksIHRydWUpO1xyXG5cdFx0cmVzcG9uc2Uub25sb2FkID0gKCkgPT4ge1xyXG5cdFx0XHRpZiAocmVzcG9uc2UucmVzcG9uc2VUZXh0LmluY2x1ZGVzKFwiU3VjY2Vzc1wiKSl7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coXCJTdWNjZXNzZnVsbHkgY2hhbmdlZCBwYXNzd29yZFwiKTtcclxuXHRcdFx0XHRsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInRva2VuXCIpO1xyXG5cdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9rZW5cIiwgYCR7cHJvcHMudXNlcm5hbWV9PyR7bmV3UGFzc3dvcmRSZWYuY3VycmVudC52YWx1ZX1gKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHRcclxuXHRmdW5jdGlvbiB1cGxvYWRJbWFnZSAoZTogYW55KSB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHQvLy8vLy9kZWx0ZSB0aGlzIGxhdGVyIG1heWJlLi4uLlxyXG5cclxuXHRcdHZhciBmb3JtZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG5cdFx0bGV0IHVzZXJuYW1lOmFueSA9IHByb3BzLnVzZXJuYW1lO1xyXG5cdFx0Zm9ybWRhdGEuYXBwZW5kKFwidXNlcm5hbWVcIiwgdXNlcm5hbWUpO1xyXG5cdFx0Zm9ybWRhdGEuYXBwZW5kKFwiZmlsZVwiLCBpbWFnZUZpbGVSZWYuY3VycmVudC5maWxlc1swXSk7XHJcblx0XHRjb25zb2xlLmxvZyhcImRkXCIgKyBpbWFnZUZpbGVSZWYuY3VycmVudC5maWxlc1swXS5uYW1lKVxyXG5cdFx0Y29uc3QgcmVzcG9uc2UgPSBwb3N0KFwiL3VwbG9hZFwiLCBmb3JtZGF0YSwgZmFsc2UpO1xyXG5cdFx0cmVzcG9uc2Uub25sb2FkID0gKCkgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcInJmZWVlZTogXCIgKyByZXNwb25zZS5yZXNwb25zZVRleHQpXHJcblx0XHRcdGlmIChyZXNwb25zZS5yZXNwb25zZVRleHQuaW5jbHVkZXMoXCJTdWNjZXNzXCIpKXtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhcInRleHQ6IFwiICsgcmVzcG9uc2UucmVzcG9uc2VUZXh0KVxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiU3VjY2Vzc2Z1bGx5IHVwbG9hZGVkIGltYWdlXCIpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuXHR9XHJcblx0XHRcclxuXHRmdW5jdGlvbiBqdXN0UmV0dXJuICgpIHtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcbiAgXHRyZXR1cm4gKFxyXG5cdFxyXG5cdFx0PFJlYWN0LkZyYWdtZW50PlxyXG5cdFx0XHQ8R3JpZCBjb250YWluZXIganVzdGlmeT1cImNlbnRlclwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cclxuXHRcdFx0XHQ8R3JpZCBpdGVtIHhzPXszfT5cclxuXHRcdFx0XHRcdDxDYXJkIGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkfT5cclxuXHRcdFx0XHRcdFx0PENhcmRBY3Rpb25BcmVhPlxyXG5cdFx0XHRcdFx0XHRcdDxDYXJkTWVkaWFcclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy5tZWRpYX1cclxuXHRcdFx0XHRcdFx0XHRcdGltYWdlPXtzZXRJbWdTcmMoKX1cclxuXHRcdFx0XHRcdFx0XHRcdHRpdGxlPVwiTXkgcHJvZmlsZSBwaWN0dXJlXCJcclxuXHRcdFx0XHRcdFx0XHRcdHJlZj17aW1hZ2VGaWxlUmVmfVxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0PENhcmRDb250ZW50PlxyXG5cdFx0XHRcdFx0XHRcdFx0PFR5cG9ncmFwaHkgZ3V0dGVyQm90dG9tIHZhcmlhbnQ9XCJoNVwiIGNvbXBvbmVudD1cImgyXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFlvdSBhcmUgbG9nZ2VkIGluIGFzIDxzdHJvbmc+e3Byb3BzLnVzZXJuYW1lfTwvc3Ryb25nPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxyXG5cdFx0XHRcdFx0XHRcdDwvQ2FyZENvbnRlbnQ+XHJcblx0XHRcdFx0XHRcdDwvQ2FyZEFjdGlvbkFyZWE+XHJcblx0XHRcdFx0XHQ8L0NhcmQ+XHJcblx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdDxmb3JtPlxyXG5cdFx0XHRcdDxGb3JtR3JvdXA+XHJcblx0XHRcdFx0XHQ8bGFiZWw+Q2hhbmdlIHBhc3N3b3JkOjwvbGFiZWw+XHJcblx0XHRcdFx0PC9Gb3JtR3JvdXA+XHJcblx0XHRcdFx0PEZvcm1Hcm91cD5cclxuXHRcdFx0XHRcdDxpbnB1dCByZWY9e29sZFBhc3N3b3JkUmVmfSBwbGFjZWhvbGRlcj1cImN1cnJlbnQgcGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIi8+XHJcblx0XHRcdFx0PC9Gb3JtR3JvdXA+XHJcblx0XHRcdFx0PEZvcm1Hcm91cD5cclxuXHRcdFx0XHRcdDxpbnB1dCByZWY9e25ld1Bhc3N3b3JkUmVmfSBwbGFjZWhvbGRlcj1cIm5ldyBwYXNzd29yZFwiIHR5cGU9XCJwYXNzd29yZFwiLz5cclxuXHRcdFx0XHQ8L0Zvcm1Hcm91cD5cclxuXHRcdFx0XHQ8Rm9ybUdyb3VwPlxyXG5cdFx0XHRcdFx0PEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgb25DbGljaz17dXBkYXRlVXNlcn0+U3VibWl0PC9CdXR0b24+XHJcblx0XHRcdFx0PC9Gb3JtR3JvdXA+XHJcblx0XHRcdDwvZm9ybT5cclxuXHRcdFx0PENvbnRhaW5lcj5cclxuXHRcdFx0XHQ8Zm9ybSBlbmNUeXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiIG1ldGhvZD1cIlBPU1RcIiBvblN1Ym1pdD17anVzdFJldHVybn0gcmVmPXtmb3JtUmVmfT5cclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0PEZvcm1Hcm91cD5cclxuXHRcdFx0XHRcdFx0XHRcdDxsYWJlbD5VcGxvYWQgcHJvZmlsZSBwaWN0dXJlOjwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0PC9Gb3JtR3JvdXA+XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHQ8Rm9ybUdyb3VwPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGlucHV0IHJlZj17aW1hZ2VGaWxlUmVmfSB0eXBlPVwiZmlsZVwiLz5cclxuXHRcdFx0XHRcdFx0XHQ8L0Zvcm1Hcm91cD5cclxuXHRcdFx0XHRcdFx0XHQ8Rm9ybUdyb3VwPlxyXG5cdFx0XHRcdFx0XHRcdFx0PEJ1dHRvbiBvbkNsaWNrPXt1cGxvYWRJbWFnZX0+U3VibWl0PC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdFx0PC9Gb3JtR3JvdXA+XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0PC9mb3JtPlxyXG5cdFx0XHRcdDwvQ29udGFpbmVyPlxyXG5cdCAgICAgIDxici8+PGJyLz48YnIvPjxici8+XHJcblx0ICAgICAgXHQ8TmF2TGluayBvbkNsaWNrPXtsb2dvdXR9IHRvPVwiL0xvZ2luXCIgdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiPkxvZ291dDwvTmF2TGluaz5cclxuXHRcdFx0PE5hdkxpbmsgb25DbGljaz17ZGVsZXRlVXNlcn0gdG89XCIvTG9naW5cIiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCI+RGVsZXRlIEFjY291bnQ8L05hdkxpbms+XHJcblx0ICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuXHJcbiAgICApXHJcblxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgcG9zdCwgZ2V0IH0gZnJvbSAnLi4vc3RhdGljL2F4aW9zJztcclxuaW1wb3J0IEF2YXRhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BdmF0YXInO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyJztcclxuaW1wb3J0IERpdmlkZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGl2aWRlcic7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IEdyaWRMaXN0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWRMaXN0JztcclxuaW1wb3J0IEdyaWRMaXN0VGlsZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkTGlzdFRpbGUnO1xyXG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2wnO1xyXG5pbXBvcnQgRm9ybUNvbnRyb2xMYWJlbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbExhYmVsJztcclxuaW1wb3J0IEZvcm1Hcm91cCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtR3JvdXAnO1xyXG5pbXBvcnQgSW5wdXQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXQnO1xyXG5pbXBvcnQgVGV4dGFyZWFBdXRvc2l6ZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0YXJlYUF1dG9zaXplJztcclxuaW1wb3J0IFBvc3QgZnJvbSAnLi9Qb3N0JztcclxuaW1wb3J0IEZhZGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRmFkZSc7XHJcbmltcG9ydCBNb2RhbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Nb2RhbCc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMsIFRoZW1lLCBjcmVhdGVTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgQmFja2Ryb3AgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQmFja2Ryb3AnO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XHJcblxyXG5jb25zdCBhdmF0YXJTdHlsZTpSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xyXG5cdG1hcmdpbjogMTAsXHJcbiAgICB3aWR0aDogODAsXHJcbiAgICBoZWlnaHQ6IDgwLFxyXG59XHJcbmNvbnN0IHVzZXJuYW1lU3R5bGU6UmVhY3QuQ1NTUHJvcGVydGllcyA9IHtcclxuXHRmb250U2l6ZTogXCIxMnB4XCIsXHJcblx0bWFyZ2luOiBcIjBweCAwcHggMHB4IDIwcHhcIixcclxufVxyXG5jb25zdCB0aXRsZVN0eWxlOlJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XHJcblx0bWFyZ2luOiBcIjVweCAwcHggMHB4IDVweFwiLFxyXG5cdHBhZGRpbmc6IFwiMHB4IDBweCAwcHggMHB4XCIsXHJcblx0Y29sb3I6IFwiYmxhY2tcIixcclxufVxyXG5jb25zdCBjcmVhdGVQb3N0QnRuU3R5bGU6UmVhY3QuQ1NTUHJvcGVydGllcyA9IHtcclxuXHRoZWlnaHQ6IFwiMzhweFwiXHJcbn1cclxuXHJcbmludGVyZmFjZSBGb3J1bUl0ZW1Qcm9wcyB7XHJcblx0c3JjOiBzdHJpbmc7XHJcblx0dGl0bGU6IHN0cmluZztcclxuXHRkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG5cdHVzZXJuYW1lOiBzdHJpbmc7XHJcblx0ZGF0ZTogc3RyaW5nO1xyXG5cdGF1dGhlbnRpY2F0ZWQ6IGJvb2xlYW47XHJcblx0bXlfdXNlcm5hbWU6IHN0cmluZyB8IG51bGw7XHJcblx0bXlfcGFzc3dvcmQ6IHN0cmluZyB8IG51bGw7XHJcbn1cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PlxyXG4gIGNyZWF0ZVN0eWxlcyh7XHJcbiAgICBwYXBlcjoge1xyXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgd2lkdGg6IDQwMCxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXHJcbiAgICAgIGJvcmRlcjogJzJweCBzb2xpZCAjMDAwJyxcclxuICAgICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzVdLFxyXG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIsIDQsIDMpLFxyXG4gICAgfSxcclxuXHRtb2RhbDoge1xyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICB9LFxyXG5cdHRleHRGaWVsZDoge1xyXG5cdFx0d2lkdGg6IFwiMTAwJVwiXHJcblx0fVxyXG4gIH0pLFxyXG4pO1xyXG5leHBvcnQgY2xhc3MgRm9ydW1JdGVtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PEZvcnVtSXRlbVByb3BzPiB7XHJcblx0XHJcblx0XHJcblx0cmVuZGVyKCl7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcclxuXHRcdFx0XHQ8UGFwZXI+XHJcblx0XHRcdFx0PEdyaWQgY29udGFpbmVyIGl0ZW0geHM9ezEyfT5cclxuXHRcdFx0XHRcdDxHcmlkIGl0ZW0geHM9ezJ9IGp1c3RpZnk9XCJjZW50ZXJcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XHJcblx0XHRcdFx0XHRcdDxHcmlkIGl0ZW0ganVzdGlmeT1cImNlbnRlclwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cclxuXHRcdFx0XHRcdFx0XHQ8R3JpZCBqdXN0aWZ5PVwiY2VudGVyXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiPlxyXG5cdCAgICAgIFx0XHRcdFx0XHRcdDxBdmF0YXIgYWx0PVwiQXZhdGFyIGltYWdlXCIgc3JjPXtgaHR0cDovL2xvY2FsaG9zdDo4MDgwL3VwbG9hZC91c2VyLyR7dGhpcy5wcm9wcy51c2VybmFtZX1gfSBzdHlsZT17YXZhdGFyU3R5bGV9IC8+XHJcblx0XHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0XHRcdDxHcmlkIGp1c3RpZnk9XCJjZW50ZXJcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBndXR0ZXJCb3R0b20+XHJcblx0XHQgICAgICAgIFx0XHRcdFx0XHR7dGhpcy5wcm9wcy51c2VybmFtZX1cclxuXHRcdCAgICAgIFx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XHJcblx0XHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0XHQ8L0dyaWQ+XHJcbiAgICBcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdDxHcmlkIGl0ZW0geHM9ezEwfSBqdXN0aWZ5PVwiZmxleC1zdGFydFwiIGFsaWduSXRlbXM9XCJmbGV4LXN0YXJ0XCIgemVyb01pbldpZHRoPlxyXG5cdFx0XHRcdFx0XHQ8TGluayBzdHlsZT17dGl0bGVTdHlsZX0gdG89e3twYXRobmFtZTogYC9Gb3J1bS9Qb3N0Lz90aXRsZT0ke3RoaXMucHJvcHMudGl0bGV9YCxcclxuXHRcdFx0XHRcdFx0XHRzdGF0ZToge1xyXG5cdFx0XHRcdFx0XHRcdFx0c3JjOiB0aGlzLnByb3BzLnNyYyxcclxuXHRcdFx0XHRcdFx0XHRcdGRlc2NyaXB0aW9uOiB0aGlzLnByb3BzLmRlc2NyaXB0aW9uLFxyXG5cdFx0XHRcdFx0XHRcdFx0dXNlcm5hbWU6IHRoaXMucHJvcHMudXNlcm5hbWUsXHJcblx0XHRcdFx0XHRcdFx0XHR0aW1lOiB0aGlzLnByb3BzLmRhdGVcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH19PlxyXG5cdFx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiIGd1dHRlckJvdHRvbT5cclxuXHRcdCAgICAgICAgXHRcdFx0XHRcdHt0aGlzLnByb3BzLnRpdGxlfVxyXG5cdFx0ICAgICAgXHRcdFx0XHQ8L1R5cG9ncmFwaHk+XHJcblx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdFx0PHAgc3R5bGU9e3t3b3JkV3JhcDogXCJicmVhay13b3JkXCIsIG92ZXJmbG93OlwiaGlkZGVuXCJ9fT57dGhpcy5wcm9wcy5kZXNjcmlwdGlvbn08L3A+XHJcblx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0PC9QYXBlcj5cclxuXHRcdFx0XHJcblx0XHQpXHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBDb21tZW50TW9kYWwgKHByb3BzOiBhbnkpIHtcclxuXHRjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblx0Y29uc3QgZGVzY3JpcHRpb25SZWY6IGFueSA9IFJlYWN0LmNyZWF0ZVJlZigpO1xyXG5cdGNvbnN0IFt0ZXh0TGltaXQsIHNldFRleHRMaW1pdF0gPSBSZWFjdC51c2VTdGF0ZSgyNTUpO1xyXG5cdFxyXG4gIFx0Y29uc3QgW29wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IHRpdGxlUmVmOmFueSA9IFJlYWN0LmNyZWF0ZVJlZigpO1xyXG5cdCAgY29uc3QgaGFuZGxlT3BlbiA9ICgpID0+IHtcclxuXHRcdGlmIChwcm9wcy5hdXRoZW50aWNhdGVkKXtcclxuXHRcdFx0c2V0T3Blbih0cnVlKTtcdFxyXG5cdFx0fWVsc2Uge1xyXG5cdFx0XHRhbGVydChcImxvZ2luIHRvIG1ha2UgYSBwb3N0XCIpXHJcblx0XHR9XHJcblx0ICAgIFxyXG5cdCAgfTtcclxuXHJcblx0ICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcclxuXHQgICAgc2V0T3BlbihmYWxzZSk7XHJcblx0ICB9O1xyXG5cdGNvbnN0IHRleHRMaW1pdENoYW5nZSA9IChldmVudDogYW55KSA9PiB7XHJcblx0XHRzZXRUZXh0TGltaXQoMjU1IC0gZXZlbnQudGFyZ2V0LnZhbHVlLmxlbmd0aClcclxuXHR9XHJcblx0XHRmdW5jdGlvbiBwb3N0QnRuIChlOiBhbnkpIHtcclxuXHRcdGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XHJcblx0XHRpZiAodG9rZW4pIHtcclxuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBwb3N0KFwiL2ZvcnVtL3Bvc3RcIiwgSlNPTi5zdHJpbmdpZnkoe3VzZXJuYW1lOnRva2VuLnNwbGl0KFwiP1wiKVswXSwgdGl0bGU6dGl0bGVSZWYuY3VycmVudC52YWx1ZSwgZGVzY3JpcHRpb246ZGVzY3JpcHRpb25SZWYuY3VycmVudC52YWx1ZX0pLCB0cnVlKTtcclxuXHRcdFx0cmVzcG9uc2Uub25sb2FkID0gKCkgPT4ge1xyXG5cdFx0XHRcdGlmIChyZXNwb25zZS5yZXNwb25zZVRleHQuaW5jbHVkZXMoXCJTdWNjZXNzXCIpKXtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKFwidGV4dDogXCIgKyByZXNwb25zZS5yZXNwb25zZVRleHQpXHJcblx0XHRcdFx0XHRwcm9wcy5vbkhpZGUoKTtcclxuXHRcdFx0XHRcdHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwiQ3JlYXRlIGFuIGFjY291bnQgb3IgbG9naW4gdG8gbWFrZSBhIHBvc3QuXCIpXHJcblx0XHR9XHJcblx0fVxyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0XHJcblx0XHRcdDxkaXY+XHJcblx0XHRcdFx0PEJ1dHRvbiBzdHlsZT17Y3JlYXRlUG9zdEJ0blN0eWxlfSBcclxuXHRcdFx0XHRcdFx0b25DbGljaz17aGFuZGxlT3Blbn1cclxuXHRcdFx0XHRcdFx0dmFyaWFudD1cImNvbnRhaW5lZFwiXHJcblx0XHRcdFx0XHQgXHRjb2xvcj1cInByaW1hcnlcIj5cclxuICAgICAgICBcdFx0XHRcdFx0Q3JlYXRlIFBvc3RcclxuICAgICAgXHRcdFx0PC9CdXR0b24+XHJcblx0XHQgICAgICA8TW9kYWxcclxuXHRcdCAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwidHJhbnNpdGlvbi1tb2RhbC10aXRsZVwiXHJcblx0XHQgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJ0cmFuc2l0aW9uLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuXHRcdCAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1vZGFsfVxyXG5cdFx0ICAgICAgICBvcGVuPXtvcGVufVxyXG5cdFx0ICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cclxuXHRcdCAgICAgICAgY2xvc2VBZnRlclRyYW5zaXRpb25cclxuXHRcdCAgICAgICAgQmFja2Ryb3BDb21wb25lbnQ9e0JhY2tkcm9wfVxyXG5cdFx0ICAgICAgICBCYWNrZHJvcFByb3BzPXt7XHJcblx0XHQgICAgICAgICAgdGltZW91dDogNTAwLFxyXG5cdFx0ICAgICAgICB9fVxyXG5cdFx0ICAgICAgPlxyXG5cdFx0ICAgICAgICA8RmFkZSBpbj17b3Blbn0+XHJcblx0XHQgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxyXG5cdFx0XHRcdFx0PGZvcm0gbm9WYWxpZGF0ZSBhdXRvQ29tcGxldGU9XCJvZmZcIj5cclxuXHRcdFx0XHQgICAgICA8aDIgaWQ9XCJ0cmFuc2l0aW9uLW1vZGFsLXRpdGxlXCI+Q3JlYXRlIGEgcG9zdDwvaDI+XHJcblx0XHRcdFx0XHRcdDxHcmlkIHhzPXsxMn0+XHJcblx0XHRcdFx0ICAgICAgPFRleHRGaWVsZCBpbnB1dFJlZj17dGl0bGVSZWZ9IGlkPVwib3V0bGluZWQtYmFzaWNcIiBjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfSBsYWJlbD1cIlRpdGxlXCIgdmFyaWFudD1cIm91dGxpbmVkXCIgLz5cclxuXHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0XHQ8R3JpZCB4cz17MTJ9PlxyXG5cdFx0XHRcdFx0XHRcdDxUZXh0RmllbGRcclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZXZlbnQpID0+IHRleHRMaW1pdENoYW5nZShldmVudCl9XHJcblx0XHRcdFx0XHRcdFx0XHRpbnB1dFJlZj17ZGVzY3JpcHRpb25SZWZ9XHJcblx0XHRcdFx0XHQgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1tdWx0aWxpbmUtc3RhdGljXCJcclxuXHRcdFx0XHRcdCAgICAgICAgICBsYWJlbD1cIkRlc2NyaXB0aW9uXCJcclxuXHRcdFx0XHRcdCAgICAgICAgICBtdWx0aWxpbmVcclxuXHRcdFx0XHRcdCAgICAgICAgICByb3dzPVwiNFwiXHJcblx0XHRcdFx0XHQgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH1cclxuXHRcdFx0XHRcdCAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG5cdFx0XHRcdFx0ICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcblx0XHRcdFx0XHQgICAgICAgIC8+XHJcblx0XHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdFx0PEdyaWQgY29udGFpbmVyIHhzPXsxMn0ganVzdGlmeT1cImZsZXgtZW5kXCIgYWxpZ25JdGVtcz1cImZsZXgtZW5kXCI+XHJcblx0XHRcdFx0XHRcdFx0PFR5cG9ncmFwaHkgY29tcG9uZW50PVwicFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0e3RleHRMaW1pdH1cclxuXHRcdFx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XHJcblx0XHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdFx0PEdyaWQgeHM9ezEyfT5cclxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldE9wZW4oZmFsc2UpfT5DbG9zZTwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdDxCdXR0b24gb25DbGljaz17cG9zdEJ0bn0gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwicHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIj5Qb3N0PC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHQgICAgPC9mb3JtPlxyXG5cdFx0XHRcdFx0XHJcblx0XHQgICAgICAgICAgPC9kaXY+XHJcblx0XHQgICAgICAgIDwvRmFkZT5cclxuXHRcdCAgICAgIDwvTW9kYWw+XHJcblx0XHQgICAgPC9kaXY+XHJcblx0XHQpO1xyXG5cdH1cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ydW0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8Rm9ydW1Qcm9wcywgRm9ydW1TdGF0ZT4ge1xyXG5cdHB1YmxpYyBzdGF0ZTpGb3J1bVN0YXRlID0ge1xyXG4gICAgICBkYXRhOiBbXSxcclxuICAgICAgc2hvd1Bvc3RNb2RhbDogZmFsc2VcclxuICAgIH1cclxuICBcdGNvbnN0cnVjdG9yKHByb3BzOkZvcnVtUHJvcHMpe1xyXG5cdCAgICBzdXBlcihwcm9wcyk7XHJcblx0XHRjb25zdCByZXNwb25zZSA9IGdldChcIi9mb3J1bS9nZXRcIik7XHJcblx0XHRyZXNwb25zZS5vbmxvYWQgPSAoKSA9PiB7XHJcblx0XHRcdHZhciBqc29uQXJyYXkgPSBKU09OLnBhcnNlKHJlc3BvbnNlLnJlc3BvbnNlVGV4dCk7XHJcblx0XHRcdHRoaXMuc2V0U3RhdGUoeyBkYXRhOiBqc29uQXJyYXl9KVxyXG5cdFx0fVxyXG5cdH1cclxuXHRyZW5kZXIoKXtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxSZWFjdC5GcmFnbWVudD5cclxuXHRcdFx0XHRcclxuXHRcdFx0XHQ8Q29udGFpbmVyPlxyXG5cdFx0XHRcdFx0PEdyaWQgaXRlbSB4cz17MTJ9IGNvbnRhaW5lciBqdXN0aWZ5PVwiZmxleC1lbmRcIiBhbGlnbkl0ZW1zPVwiZmxleC1lbmRcIj5cclxuXHRcdFx0XHRcdFx0PENvbW1lbnRNb2RhbCBhdXRoZW50aWNhdGVkPXt0aGlzLnByb3BzLmF1dGhlbnRpY2F0ZWR9Lz5cclxuXHRcdFx0XHRcdFx0IFxyXG5cdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdDwvQ29udGFpbmVyPjxici8+XHJcblx0XHRcdFx0PERpdmlkZXIgLz5cclxuXHRcdFx0XHQ8R3JpZExpc3QgY2VsbEhlaWdodD17MTYwfSBjb2xzPXsxMn0+XHJcblx0XHRcdFx0XHR7KHRoaXMuc3RhdGUuZGF0YSkubWFwKChkYXRhOiBhbnkpID0+XHJcblx0XHRcdFx0XHRcdDxHcmlkTGlzdFRpbGUga2V5PXtkYXRhLmRhdGV9IGNvbHM9ezEyfT5cclxuXHRcdFx0XHRcdFx0XHQ8Rm9ydW1JdGVtIG15X3VzZXJuYW1lPXt0aGlzLnByb3BzLm15X3VzZXJuYW1lfSBteV9wYXNzd29yZD17dGhpcy5wcm9wcy5teV9wYXNzd29yZH0gYXV0aGVudGljYXRlZD17dGhpcy5wcm9wcy5hdXRoZW50aWNhdGVkfSBkYXRlPXtkYXRhLmRhdGV9IHRpdGxlPXtkYXRhLnRpdGxlfSBrZXk9e2RhdGEuZGF0ZX0gdXNlcm5hbWU9e2RhdGEudXNlcm5hbWV9IGRlc2NyaXB0aW9uPXtkYXRhLmRlc2NyaXB0aW9ufSBzcmM9e2RhdGEucGF0aH0vPlxyXG5cdFx0XHRcdFx0XHQ8L0dyaWRMaXN0VGlsZT5cclxuXHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0PC9HcmlkTGlzdD5cclxuXHRcdFx0PC9SZWFjdC5GcmFnbWVudD5cclxuXHRcdCk7XHJcblx0fVxyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgRm9ydW1Qcm9wcyB7XHJcblx0YXV0aGVudGljYXRlZDogYm9vbGVhbjtcclxuXHRteV91c2VybmFtZTogc3RyaW5nIHwgbnVsbDtcclxuXHRteV9wYXNzd29yZDogc3RyaW5nIHwgbnVsbDtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEZvcnVtU3RhdGUge1xyXG4gICAgZGF0YTogYW55O1xyXG4gICAgc2hvd1Bvc3RNb2RhbDogYm9vbGVhbjtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQXZhdGFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0F2YXRhcic7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lJztcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xyXG5pbXBvcnQgRm9ybUNvbnRyb2xMYWJlbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbExhYmVsJztcclxuaW1wb3J0IENoZWNrYm94IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NoZWNrYm94JztcclxuaW1wb3J0IExpbmsgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGluayc7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xyXG5pbXBvcnQgQm94IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0JveCc7XHJcbmltcG9ydCBMb2NrT3V0bGluZWRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Mb2NrT3V0bGluZWQnO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyJztcclxuaW1wb3J0IHtwb3N0fSBmcm9tICcuLi9zdGF0aWMvYXhpb3MnO1xyXG5cclxuXHJcbmZ1bmN0aW9uIENvcHlyaWdodCgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCIgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgeydDb3B5cmlnaHQg77+9ICd9XHJcbiAgICAgIDxMaW5rIGNvbG9yPVwiaW5oZXJpdFwiIGhyZWY9XCJodHRwczovL21hdGVyaWFsLXVpLmNvbS9cIj5cclxuICAgICAgICBZb3VyIFdlYnNpdGVcclxuICAgICAgPC9MaW5rPnsnICd9XHJcbiAgICAgIHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9XHJcbiAgICAgIHsnLid9XHJcbiAgICA8L1R5cG9ncmFwaHk+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gICdAZ2xvYmFsJzoge1xyXG4gICAgYm9keToge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHBhcGVyOiB7XHJcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoOCksXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gIH0sXHJcbiAgYXZhdGFyOiB7XHJcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW4sXHJcbiAgfSxcclxuICBmb3JtOiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLCAvLyBGaXggSUUgMTEgaXNzdWUuXHJcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgfSxcclxuICBzdWJtaXQ6IHtcclxuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygzLCAwLCAyKSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5pbnRlcmZhY2UgSVByb3BzIHtcclxuXHRhdXRoZW50aWNhdGU6ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmludGVyZmFjZSBXYXJuaW5nUHJvcHMge1xyXG5cdHZhbDogc3RyaW5nO1xyXG59XHJcbmNsYXNzIFdhcm5pbmcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8V2FybmluZ1Byb3BzPiB7XHJcblx0ZGV0ZXJtaW5lQ2xhc3MgPSAoKSA9PiB7XHJcblx0XHRpZiAodGhpcy5wcm9wcy52YWwuaW5jbHVkZXMoXCJTdWNjZXNzXCIpKXtcclxuXHRcdFx0cmV0dXJuIFwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuIFwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI7XHJcblx0XHR9XHJcblx0fVxyXG5cdHJlbmRlcigpe1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PGRpdiBzdHlsZT17e2Rpc3BsYXk6IHRoaXMucHJvcHMudmFsID09PSBcIlwiID8gXCJub25lXCIgOiBcImJsb2NrXCIgfX0gY2xhc3NOYW1lPXt0aGlzLmRldGVybWluZUNsYXNzKCl9IHJvbGU9XCJhbGVydFwiPnt0aGlzLnByb3BzLnZhbH08L2Rpdj5cclxuXHRcdCk7XHJcblx0fVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luKHByb3BzOiBJUHJvcHMpIHtcclxuXHRsZXQgdXNlcm5hbWVJbnB1dDphbnkgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuXHRsZXQgcGFzc3dvcmRJbnB1dDphbnkgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuICBcdGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHRjb25zdCBbcmVzcG9uc2UsIHNldFJlc3BvbnNlIF0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuXHRmdW5jdGlvbiBzdWJtaXRMb2dpbihlOiBhbnkpe1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0Y29uc29sZS5sb2coXCJVc2VyIGxvZ2dpbmcgaW4uLi4uXCIpO1xyXG5cdFx0bGV0IHVzZXJuYW1lVmFsID0gdXNlcm5hbWVJbnB1dC5jdXJyZW50LnZhbHVlO1xyXG5cdFx0bGV0IHBhc3N3b3JkVmFsID0gcGFzc3dvcmRJbnB1dC5jdXJyZW50LnZhbHVlO1xyXG5cclxuXHRcdGNvbnN0IHJlc3BvbnNlID0gcG9zdChcIi91c2Vycy9sb2dpblwiLCBKU09OLnN0cmluZ2lmeSh7dXNlcm5hbWU6dXNlcm5hbWVWYWwsIGVtYWlsOnVzZXJuYW1lVmFsLCBwYXNzd29yZDpwYXNzd29yZFZhbH0pLCB0cnVlKTtcclxuXHRcdHJlc3BvbnNlLm9ubG9hZCA9ICgpID0+IHtcclxuXHRcdFx0c2V0UmVzcG9uc2UocmVzcG9uc2UucmVzcG9uc2VUZXh0KVxyXG5cdFx0XHRpZiAocmVzcG9uc2UucmVzcG9uc2VUZXh0LmluY2x1ZGVzKFwiU3VjY2Vzc1wiKSl7XHJcblx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2tlblwiLCB1c2VybmFtZVZhbCArIFwiP1wiICsgcGFzc3dvcmRWYWwpOyAvL2VuY3J5cHQgdGhpcyBsYXRlclxyXG5cdFx0XHRcdHByb3BzLmF1dGhlbnRpY2F0ZSgpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdFxyXG5cdFx0XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFxyXG4gICAgPENvbnRhaW5lciBjb21wb25lbnQ9XCJtYWluXCIgbWF4V2lkdGg9XCJ4c1wiPlxyXG5cdFx0PFdhcm5pbmcgdmFsPXtyZXNwb25zZX0vPlxyXG4gICAgICA8Q3NzQmFzZWxpbmUgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxyXG4gICAgICAgIDxBdmF0YXIgY2xhc3NOYW1lPXtjbGFzc2VzLmF2YXRhcn0+XHJcbiAgICAgICAgICA8TG9ja091dGxpbmVkSWNvbiAvPlxyXG4gICAgICAgIDwvQXZhdGFyPlxyXG4gICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cImgxXCIgdmFyaWFudD1cImg1XCI+XHJcbiAgICAgICAgICBTaWduIGluXHJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtfSBub1ZhbGlkYXRlPlxyXG4gICAgICAgICAgPFRleHRGaWVsZFxyXG5cdFx0XHRpbnB1dFJlZj17dXNlcm5hbWVJbnB1dH1cclxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgIGlkPVwiZW1haWxcIlxyXG4gICAgICAgICAgICBsYWJlbD1cIkVtYWlsIEFkZHJlc3NcIlxyXG4gICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIGF1dG9Gb2N1c1xyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxUZXh0RmllbGRcclxuXHRcdFx0aW5wdXRSZWY9e3Bhc3N3b3JkSW5wdXR9XHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICBsYWJlbD1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImN1cnJlbnQtcGFzc3dvcmRcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXHJcbiAgICAgICAgICAgIGNvbnRyb2w9ezxDaGVja2JveCB2YWx1ZT1cInJlbWVtYmVyXCIgY29sb3I9XCJwcmltYXJ5XCIgLz59XHJcbiAgICAgICAgICAgIGxhYmVsPVwiUmVtZW1iZXIgbWVcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxCdXR0b25cclxuXHRcdFx0b25DbGljaz17KGU6YW55KSA9PiBzdWJtaXRMb2dpbihlKX1cclxuICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuc3VibWl0fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBTaWduIEluXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiIHZhcmlhbnQ9XCJib2R5MlwiPlxyXG4gICAgICAgICAgICAgICAgRm9yZ290IHBhc3N3b3JkP1xyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvUmVnaXN0ZXJcIiB2YXJpYW50PVwiYm9keTJcIj5cclxuICAgICAgICAgICAgICAgIHtcIkRvbid0IGhhdmUgYW4gYWNjb3VudD8gU2lnbiBVcFwifVxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxCb3ggbXQ9ezh9PlxyXG4gICAgICAgIDxDb3B5cmlnaHQgLz5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge3Bvc3R9IGZyb20gJy4uL3N0YXRpYy9heGlvcyc7XHJcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbmltcG9ydCBBdmF0YXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXZhdGFyJztcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTW9kYWwnO1xyXG5pbXBvcnQgQmFja2Ryb3AgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQmFja2Ryb3AnO1xyXG5pbXBvcnQgRmFkZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9GYWRlJztcclxuaW1wb3J0IENhcmQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZCc7XHJcbmltcG9ydCBDYXJkQWN0aW9uQXJlYSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQWN0aW9uQXJlYSc7XHJcbmltcG9ydCBDYXJkQWN0aW9ucyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQWN0aW9ucyc7XHJcbmltcG9ydCBDYXJkQ29udGVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQ29udGVudCc7XHJcbmltcG9ydCBDYXJkTWVkaWEgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZE1lZGlhJztcclxuaW1wb3J0IHsgd2l0aFN0eWxlcywgbWFrZVN0eWxlcywgVGhlbWUsIGNyZWF0ZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lcic7XHJcbmltcG9ydCBNdWlFeHBhbnNpb25QYW5lbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9FeHBhbnNpb25QYW5lbCc7XHJcbmltcG9ydCBNdWlFeHBhbnNpb25QYW5lbFN1bW1hcnkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRXhwYW5zaW9uUGFuZWxTdW1tYXJ5JztcclxuaW1wb3J0IE11aUV4cGFuc2lvblBhbmVsRGV0YWlscyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9FeHBhbnNpb25QYW5lbERldGFpbHMnO1xyXG5pbXBvcnQgQm94IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0JveCc7XHJcbmltcG9ydCBCYWRnZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CYWRnZSc7XHJcbmltcG9ydCBNYWlsSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTWFpbCc7XHJcblxyXG5jb25zdCBkYXRlU3R5bGU6UmVhY3QuQ1NTUHJvcGVydGllcyA9IHtcclxuXHRjb2xvcjogXCJncmV5XCIsXHJcblx0Zm9udFNpemU6IFwiMTJweFwiXHJcbn1cclxuY29uc3QgY2FyZFN0eWxlOlJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XHJcblx0cGFkZGluZzogXCIwcHggMHB4IDBweCAwcHhcIixcclxuXHRtYXJnaW46IFwiMHB4IDBweCAwcHggMHB4XCIsXHJcbn1cclxuY29uc3QgdGltZVN0YW1wU3R5bGU6UmVhY3QuQ1NTUHJvcGVydGllcyA9IHtcclxuXHRmb250U2l6ZTogXCIxMnB4XCIsXHJcblx0Y29sb3I6XCJncmV5XCJcclxufVxyXG5jb25zdCBzdHlsZXMgPSB7XHJcblx0bGVmdDoge1xyXG5cdFx0ZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ2xlZnQnXHJcblx0fSxcclxuXHRyaWdodDoge1xyXG5cdFx0ZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ3JpZ2h0J1xyXG5cdH0sXHJcblx0Y2VudGVyOiB7XHJcblx0XHRkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJ1xyXG5cdH0sXHJcblx0Ym90dG9tOiB7XHJcblx0XHRkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnYm90dG9tJ1xyXG5cdH1cclxufVxyXG5cclxuaW50ZXJmYWNlIENvbW1lbnRNb2RhbFByb3BzIHtcclxuXHRvbkhpZGU6ICgpID0+IHZvaWQ7XHJcblx0cG9zdGhhbmRsZXI6IChhcmcxOiBhbnksIGFyZzogc3RyaW5nKSA9PiB2b2lkO1xyXG5cdHNob3c6IGJvb2xlYW47XHJcbn1cclxuaW50ZXJmYWNlIENvbW1lbnRNb2RhbFN0YXRlIHtcclxuXHR0ZXh0TGltaXQ6IG51bWJlcjtcclxufVxyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PlxyXG4gIGNyZWF0ZVN0eWxlcyh7XHJcbiAgICBtb2RhbDoge1xyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICB9LFxyXG4gICAgcGFwZXI6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXHJcbiAgICAgIGJvcmRlcjogJzJweCBzb2xpZCAjMDAwJyxcclxuICAgICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzVdLFxyXG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIsIDQsIDMpLFxyXG4gICAgfSxcclxuXHRjYXJkOiB7XHJcbiAgICBcdG1heFdpZHRoOiAzNDUsXHJcbiAgXHR9LFxyXG4gIFx0bWVkaWE6IHtcclxuICAgIFx0aGVpZ2h0OiAxNDAsXHJcbiAgXHR9LFxyXG5cdGxpa2VEaXNsaWtlOiB7XHJcblx0XHR3aWR0aDogMzAsXHJcblx0XHRoZWlnaHQ6IDIwLFxyXG5cdH1cclxuICB9KSxcclxuKTtcclxuY29uc3QgRXhwYW5zaW9uUGFuZWwgPSB3aXRoU3R5bGVzKHtcclxuICByb290OiB7XHJcbiAgICBib3JkZXI6ICcxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMTI1KScsXHJcbiAgICBib3hTaGFkb3c6ICdub25lJyxcclxuICAgICcmOm5vdCg6bGFzdC1jaGlsZCknOiB7XHJcbiAgICAgIGJvcmRlckJvdHRvbTogMCxcclxuICAgIH0sXHJcbiAgICAnJjpiZWZvcmUnOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdub25lJyxcclxuICAgIH0sXHJcbiAgICAnJiRleHBhbmRlZCc6IHtcclxuICAgICAgbWFyZ2luOiAnYXV0bycsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZXhwYW5kZWQ6IHt9LFxyXG59KShNdWlFeHBhbnNpb25QYW5lbCk7XHJcblxyXG5jb25zdCBFeHBhbnNpb25QYW5lbFN1bW1hcnkgPSB3aXRoU3R5bGVzKHtcclxuICByb290OiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsIDAsIDAsIC4wMyknLFxyXG4gICAgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjEyNSknLFxyXG4gICAgbWFyZ2luQm90dG9tOiAtMSxcclxuICAgIG1pbkhlaWdodDogNTYsXHJcbiAgICAnJiRleHBhbmRlZCc6IHtcclxuICAgICAgbWluSGVpZ2h0OiA1NixcclxuICAgIH0sXHJcbiAgfSxcclxuICBjb250ZW50OiB7XHJcbiAgICAnJiRleHBhbmRlZCc6IHtcclxuICAgICAgbWFyZ2luOiAnMTJweCAwJyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBleHBhbmRlZDoge30sXHJcbn0pKE11aUV4cGFuc2lvblBhbmVsU3VtbWFyeSk7XHJcblxyXG5jb25zdCBFeHBhbnNpb25QYW5lbERldGFpbHMgPSB3aXRoU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygyKSxcclxuICB9LFxyXG59KSkoTXVpRXhwYW5zaW9uUGFuZWxEZXRhaWxzKTtcclxuZnVuY3Rpb24gQ29tbWVudE1vZGFsIChwcm9wczpDb21tZW50TW9kYWxQcm9wcykge1xyXG5cdGNvbnN0IGRlc2NyaXB0aW9uUmVmOiBhbnkgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuXHRjb25zdCBbdGV4dExpbWl0LCBzZXRUZXh0TGltaXRdID0gUmVhY3QudXNlU3RhdGUoMjU1KTtcclxuXHRjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgXHRjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblxyXG5cdCAgY29uc3QgaGFuZGxlT3BlbiA9ICgpID0+IHtcclxuXHQgICAgc2V0T3Blbih0cnVlKTtcclxuXHQgIH07XHJcblxyXG5cdCAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcblx0ICAgIHNldE9wZW4oZmFsc2UpO1xyXG5cdCAgfTtcclxuXHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcclxuXHRcdFx0PGRpdj5cclxuXHRcdCAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2hhbmRsZU9wZW59PlxyXG5cdFx0ICAgICAgICBSZXBseUJ1dHRvblxyXG5cdFx0ICAgICAgPC9idXR0b24+XHJcblx0XHQgICAgICA8TW9kYWxcclxuXHRcdCAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwidHJhbnNpdGlvbi1tb2RhbC10aXRsZVwiXHJcblx0XHQgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJ0cmFuc2l0aW9uLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuXHRcdCAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1vZGFsfVxyXG5cdFx0ICAgICAgICBvcGVuPXtvcGVufVxyXG5cdFx0ICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cclxuXHRcdCAgICAgICAgY2xvc2VBZnRlclRyYW5zaXRpb25cclxuXHRcdCAgICAgICAgQmFja2Ryb3BDb21wb25lbnQ9e0JhY2tkcm9wfVxyXG5cdFx0ICAgICAgICBCYWNrZHJvcFByb3BzPXt7XHJcblx0XHQgICAgICAgICAgdGltZW91dDogNTAwLFxyXG5cdFx0ICAgICAgICB9fVxyXG5cdFx0ICAgICAgPlxyXG5cdFx0ICAgICAgICA8RmFkZSBpbj17b3Blbn0+XHJcblx0XHQgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxyXG5cdFx0ICAgICAgICAgICAgPGgyIGlkPVwidHJhbnNpdGlvbi1tb2RhbC10aXRsZVwiPlJlcGx5PC9oMj5cclxuXHRcdCAgICAgICAgICAgIDxUZXh0RmllbGQgb25DaGFuZ2U9eygpID0+IHNldFRleHRMaW1pdCgyNTUgLSBkZXNjcmlwdGlvblJlZi5jdXJyZW50LnZhbHVlLmxlbmd0aCl9IHJlZj17ZGVzY3JpcHRpb25SZWZ9IHJvd3M9XCIzXCIgcGxhY2Vob2xkZXI9XCJyZXNwb25zZVwiLz5cclxuXHRcdFx0XHRcdDxwPnt0ZXh0TGltaXR9PC9wPlxyXG5cdFx0XHRcdFx0PEJ1dHRvbiBvbkNsaWNrPXtwcm9wcy5vbkhpZGV9PkNsb3NlPC9CdXR0b24+XHJcblx0XHRcdFx0XHQ8QnV0dG9uIG9uQ2xpY2s9eyAoZTphbnkpID0+IHByb3BzLnBvc3RoYW5kbGVyKGUsIGRlc2NyaXB0aW9uUmVmLmN1cnJlbnQudmFsdWUpfSBjb2xvcj1cInByaW1hcnlcIj5Qb3N0PC9CdXR0b24+XHJcblx0XHQgICAgICAgICAgPC9kaXY+XHJcblx0XHQgICAgICAgIDwvRmFkZT5cclxuXHRcdCAgICAgIDwvTW9kYWw+XHJcblx0XHQgICAgPC9kaXY+XHJcblx0XHQpO1xyXG5cdH1cclxuXHRpbnRlcmZhY2UgQ29tbWVudFByb3BzIHtcclxuXHRcdGNoaWxkQ29tbWVudHM6IGFueTtcclxuXHRcdHVzZXJuYW1lOiBzdHJpbmc7XHJcblx0XHRzcmM6IHN0cmluZztcclxuXHRcdHRpbWU6IHN0cmluZztcclxuXHRcdGNvbW1lbnQ6IHN0cmluZztcclxuXHRcdHJlcGx5SGFuZGxlcjogKGV2ZW50OiBhbnksIGNvbW1lbnQ6IHN0cmluZywgdGltZTogc3RyaW5nKSA9PiB2b2lkO1xyXG5cdH1cclxuZnVuY3Rpb24gQ29tbWVudCAocHJvcHM6IENvbW1lbnRQcm9wcykge1xyXG5cdGNvbnN0IFtjaGlsZERhdGEsIHNldENoaWxkRGF0YV0gPSBSZWFjdC51c2VTdGF0ZSgpO1xyXG5cdGNvbnN0IFtwYXJlbnRDb21tZW50LCBzZXRQYXJlbnRDb21tZW50XSA9IFJlYWN0LnVzZVN0YXRlKCk7XHJcblx0Y29uc3QgW3BhcmVudFRpbWUsIHNldFBhcmVudFRpbWVdID0gUmVhY3QudXNlU3RhdGUoKTtcclxuXHRjb25zdCBbbGlrZXMsIHNldExpa2VzXSA9IFJlYWN0LnVzZVN0YXRlKCk7XHJcblx0Y29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cdGNvbnN0IGNvbW1lbnRSZWY6YW55ID0gUmVhY3QuY3JlYXRlUmVmKCk7XHJcblxyXG5cclxuXHRmdW5jdGlvbiBsb2FkRGF0YSgpe1xyXG5cdFx0c2V0Q2hpbGREYXRhKHByb3BzLmNoaWxkQ29tbWVudHMpO1xyXG5cdH1cclxuXHRmdW5jdGlvbiB1cHZvdGVCdG4gKGU6YW55KSB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRzZXRMaWtlcyhsaWtlcyArIDEpO1xyXG5cdH1cclxuXHRmdW5jdGlvbiBkb3dudm90ZUJ0biAoZTogYW55KSB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRzZXRMaWtlcyhsaWtlcyAtIDEpO1xyXG5cdH1cclxuXHRjb25zdCBbZXhwYW5kZWQsIHNldEV4cGFuZGVkXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZyB8IGZhbHNlPigncGFuZWwxJyk7XHJcblxyXG5cdCAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKHBhbmVsOiBzdHJpbmcpID0+IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8e30+LCBuZXdFeHBhbmRlZDogYm9vbGVhbikgPT4ge1xyXG5cdCAgICBzZXRFeHBhbmRlZChuZXdFeHBhbmRlZCA/IHBhbmVsIDogZmFsc2UpO1xyXG5cdCAgfTtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PFJlYWN0LkZyYWdtZW50PlxyXG5cdFx0XHR7bG9hZERhdGF9XHJcblx0XHRcdDxHcmlkIGNvbnRhaW5lciB4cz17Mn0+XHJcblx0XHRcdFx0PENhcmQgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcmR9PlxyXG4gICAgICBcdFx0XHRcdDxDYXJkQWN0aW9uQXJlYT5cclxuICAgICAgICBcdFx0XHRcdDxDYXJkTWVkaWFcclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMubWVkaWF9XHJcblx0XHRcdFx0XHRcdFx0aW1hZ2U9e3Byb3BzLnNyY31cclxuXHRcdFx0XHRcdFx0XHR0aXRsZT1cIkF2YXRhciBpbWFnZVwiXHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDxDYXJkQ29udGVudD5cclxuXHRcdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeSBndXR0ZXJCb3R0b20gdmFyaWFudD1cImg1XCIgY29tcG9uZW50PVwiaDJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxpPntwcm9wcy51c2VybmFtZX08L2k+XHJcblx0XHRcdFx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxyXG5cdFx0XHRcdFx0XHQ8L0NhcmRDb250ZW50PlxyXG5cdFx0XHRcdFx0PC9DYXJkQWN0aW9uQXJlYT5cclxuXHRcdFx0XHQ8L0NhcmQ+XHJcblx0XHRcdDwvR3JpZD5cclxuXHRcdFx0PEdyaWQgY29udGFpbmVyIHhzPXsxMH0+XHJcblx0XHRcdFx0PHAgc3R5bGU9e3RpbWVTdGFtcFN0eWxlfT57cHJvcHMudGltZX08L3A+XHJcblx0XHRcdFx0PHAgcmVmPXtjb21tZW50UmVmfT57cHJvcHMuY29tbWVudH08L3A+XHJcblx0XHRcdFx0PEdyaWQgY29udGFpbmVyIHhzPXsxMn0+XHJcblx0XHRcdFx0XHQ8QXZhdGFyXHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy5saWtlRGlzbGlrZX1cclxuXHRcdFx0XHRcdFx0b25DbGljaz17dXB2b3RlQnRufVxyXG5cdFx0XHRcdFx0XHRzcmM9XCJodHRwOi8vbG9jYWxob3N0OjgwODAvdXBsb2FkL2ZpbGVzL3RodW1ic3VwLmpwZ1wiXHJcblx0XHRcdFx0XHRcdGFsdD1cIkdlbmVyaWMgcGxhY2Vob2xkZXJcIlxyXG5cdFx0XHRcdFx0Lz48cHJlPiA8L3ByZT5cclxuXHRcdFx0XHRcdDxwPntsaWtlc308L3A+XHJcblx0XHRcdFx0XHQ8QXZhdGFyXHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy5saWtlRGlzbGlrZX1cclxuXHRcdFx0XHRcdFx0b25DbGljaz17ZG93bnZvdGVCdG59XHJcblx0XHRcdFx0XHRcdHNyYz1cImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC91cGxvYWQvZmlsZXMvdGh1bWJzZG93bi5qcGdcIlxyXG5cdFx0XHRcdFx0XHRhbHQ9XCJHZW5lcmljIHBsYWNlaG9sZGVyXCJcclxuXHRcdFx0XHRcdC8+PHByZT4gPC9wcmU+XHJcblx0XHRcdFx0XHQ8QnV0dG9uIG9uQ2xpY2s9eyhldmVudDogYW55KSA9PiBwcm9wcy5yZXBseUhhbmRsZXIoZXZlbnQsIHByb3BzLmNvbW1lbnQsIHByb3BzLnRpbWUpfSB2YXJpYW50PVwib3V0bGluZWRcIiBjb2xvcj1cInByaW1hcnlcIj5SRVBMWTwvQnV0dG9uPlxyXG5cdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0PC9HcmlkPlxyXG5cdFx0XHQ8R3JpZCBjb250YWluZXIgeHM9ezEyfT5cclxuXHRcdFx0XHQ8RXhwYW5zaW9uUGFuZWwgc3F1YXJlIGV4cGFuZGVkPXtleHBhbmRlZCA9PT0gJ3BhbmVsMSd9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ3BhbmVsMScpfT5cclxuXHRcdFx0XHRcdDxFeHBhbnNpb25QYW5lbFN1bW1hcnkgYXJpYS1jb250cm9scz1cInBhbmVsMWQtY29udGVudFwiIGlkPVwicGFuZWwxZC1oZWFkZXJcIj5cclxuXHRcdFx0XHRcdFx0PFR5cG9ncmFwaHk+XHJcblx0XHRcdFx0XHRcdFx0PEJveCBkaXNwbGF5PVwiZmxleFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PEJveCBtPXsyfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PEJhZGdlIGJhZGdlQ29udGVudD17Y2hpbGREYXRhLmxlbmd0aH0gY29sb3I9XCJwcmltYXJ5XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dW5yZWFkIG1lc3NhZ2VzIDxNYWlsSWNvbiAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0JhZGdlPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9Cb3g+XHJcblx0XHRcdFx0XHRcdFx0PC9Cb3g+XHJcblx0XHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cclxuXHRcdFx0XHRcdDwvRXhwYW5zaW9uUGFuZWxTdW1tYXJ5PlxyXG5cdFx0XHRcdFx0PEV4cGFuc2lvblBhbmVsRGV0YWlscz5cclxuXHRcdFx0XHRcdFx0PFR5cG9ncmFwaHk+XHJcblx0XHRcdFx0XHRcdFx0e2NoaWxkRGF0YS5tYXAoKGRhdGE6IGFueSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCJjaGlsZERhdGE6IFwiICsgZGF0YSlcclxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdDw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxHcmlkIGtleT17ZGF0YS50aW1lfSBjb250YWluZXIgeHM9ezJ9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxDYXJkIGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxDYXJkQWN0aW9uQXJlYT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PENhcmRNZWRpYVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy5tZWRpYX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpbWFnZT17ZGF0YS5zcmN9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU9XCJHZW5lcmljIHBsYWNlaG9sZGVyXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PENhcmRDb250ZW50PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5IGd1dHRlckJvdHRvbSB2YXJpYW50PVwiaDVcIiBjb21wb25lbnQ9XCJoMlwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHA+PGk+e2RhdGEudXNlcm5hbWV9PC9pPjwvcD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvQ2FyZENvbnRlbnQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0NhcmRBY3Rpb25BcmVhPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvQ2FyZD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8R3JpZCBjb250YWluZXIgeHM9ezEwfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBzdHlsZT17dGltZVN0YW1wU3R5bGV9PntkYXRhLnRpbWV9PC9wPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxwPntkYXRhLmNvbW1lbnR9PC9wPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvPlxyXG5cdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHR9KX1cclxuXHRcdFx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxyXG5cdFx0XHRcdFx0PC9FeHBhbnNpb25QYW5lbERldGFpbHM+XHJcblx0XHRcdFx0PC9FeHBhbnNpb25QYW5lbD5cclxuXHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdFxyXG5cdFx0PC9SZWFjdC5GcmFnbWVudD5cclxuXHRcdClcclxufVxyXG5pbnRlcmZhY2UgUG9zdFN0YXRlIHtcclxuXHRkYXRhOiBhbnk7XHJcblx0cGFyZW50Q29tbWVudDogc3RyaW5nO1xyXG5cdGNoaWxkRGF0YTogYW55O1xyXG5cdHBvc3RUaW1lOiBzdHJpbmc7XHJcblx0c2hvd0NvbW1lbnRNb2RhbDogYm9vbGVhbjtcclxuXHRsaWtlczogbnVtYmVyO1xyXG5cdHBvc3REZXNjcmlwdGlvbjogc3RyaW5nO1xyXG5cdHBvc3RTcmM6c3RyaW5nO1xyXG59XHJcbmludGVyZmFjZSBQb3N0UHJvcHMge1xyXG5cdGF1dGhlbnRpY2F0ZWQ6IGJvb2xlYW47XHJcblx0dXNlcm5hbWU6IHN0cmluZyB8IG51bGw7XHJcblx0cGFzc3dvcmQ6IHN0cmluZyB8IG51bGw7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdCAocHJvcHM6IFBvc3RQcm9wcykge1xyXG5cclxuXHRjb25zdCBibGFja291dFJlZjphbnkgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuXHRjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSBSZWFjdC51c2VTdGF0ZSgpO1xyXG5cdGNvbnN0IFtwYXJlbnRDb21tZW50LCBzZXRQYXJlbnRDb21tZW50XSA9IFJlYWN0LnVzZVN0YXRlKCk7XHJcblx0XHJcblx0Y29uc3QgW2NoaWxkRGF0YSwgc2V0Q2hpbGREYXRhXSA9IFJlYWN0LnVzZVN0YXRlKCk7XHJcblx0Y29uc3QgW3Bvc3REZXNjcmlwdGlvbiwgc2V0UG9zdERlc2NyaXB0aW9uXSA9IFJlYWN0LnVzZVN0YXRlKCk7XHJcblx0Y29uc3QgW3Bvc3RTcmMsIHNldFBvc3RTcmNdID0gUmVhY3QudXNlU3RhdGUoKTtcclxuXHRjb25zdCBbcG9zdFRpbWUsIHNldFBvc3RUaW1lXSA9IFJlYWN0LnVzZVN0YXRlKCk7XHJcblx0Y29uc3QgW3Nob3dDb21tZW50TW9kYWwsIHNldFNob3dDb21tZW50TW9kYWxdID0gUmVhY3QudXNlU3RhdGUoKTtcclxuXHRjb25zdCBbbGlrZXMsIHNldExpa2VzXSA9IFJlYWN0LnVzZVN0YXRlKCk7XHJcblx0Y29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cdGZ1bmN0aW9uIGxvYWREYXRhKCl7XHJcblx0XHRjb25zdCByZXNwb25zZTphbnkgPSBwb3N0KFwiL2ZvcnVtL2NvbW1lbnQvZ2V0XCIsIGdldFBhcmFtKFwidGl0bGVcIiksIHRydWUpO1xyXG5cdFx0cmVzcG9uc2Uub25sb2FkID0gKCkgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcImxvYWRpbmcgZGF0YSBmb3IgLi4uXCIrIGNvbnNvbGUubG9nKGxvY2F0aW9uLnNlYXJjaCkpXHJcblx0XHRcdGxldCBkYXQ6IGFueSA9IEpTT04ucGFyc2UocmVzcG9uc2UucmVzcG9uc2VUZXh0KTtcclxuXHRcdFx0Y29uc29sZS5sb2coZGF0KVxyXG5cdFx0XHRcclxuXHRcdFx0c2V0RGF0YShkYXQuY29tbWVudERhdGEpO1xyXG5cdFx0XHRzZXRQb3N0RGVzY3JpcHRpb24oZGF0LmRlc2NyaXB0aW9uKTtcclxuXHRcdFx0c2V0UG9zdFNyYyhkYXQuc3JjKTtcclxuXHRcdFx0c2V0UG9zdFRpbWUoZGF0LmRhdGUpO1xyXG5cdFx0XHRcclxuXHRcdFx0Y29uc29sZS5sb2coXCJkYXRhOiBcIiArIHJlc3BvbnNlLnJlc3BvbnNlVGV4dCk7XHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG5cdFxyXG5cclxuXHRmdW5jdGlvbiBnZXRVcmxQYXJhbXMoKTogVVJMU2VhcmNoUGFyYW1zIHtcclxuXHRcdGNvbnNvbGUubG9nKFwiRlVMTCBEQVRBOiBcIiArIGxvY2F0aW9uLnNlYXJjaClcclxuXHQgICAgcmV0dXJuIG5ldyBVUkxTZWFyY2hQYXJhbXMobG9jYXRpb24uc2VhcmNoKTtcclxuICBcdH1cclxuXHRcclxuXHRmdW5jdGlvbiBnZXRQYXJhbShwYXJhbTogc3RyaW5nKTogc3RyaW5nIHtcclxuXHQgICAgbGV0IHNlYXJjaCA9IGdldFVybFBhcmFtcygpO1xyXG5cdCAgICByZXR1cm4gc2VhcmNoLmdldChwYXJhbSkgfHwgXCJcIjtcclxuICBcdH1cclxuXHRmdW5jdGlvbiBwb3N0QnRuKGU6IGFueSwgY29tbWVudFRleHQ6c3RyaW5nKSB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRsZXQgdXNlcm5hbWU6IGFueSA9IHByb3BzLnVzZXJuYW1lO1xyXG5cdFx0Y29uc3QgcmVzcG9uc2UgPSBwb3N0KFwiL3VzZXJzL2xvZ2luXCIsIEpTT04uc3RyaW5naWZ5KHtwYXJlbnRDb21tZW50OnBhcmVudENvbW1lbnQsIGNvbW1lbnRUZXh0OmNvbW1lbnRUZXh0LFxyXG5cdFx0XHRwb3N0OmdldFBhcmFtKFwidGl0bGVcIiksIHBhcmVudFRpbWU6IHBvc3RUaW1lLCB1c2VybmFtZTp1c2VybmFtZS5zcGxpdChcIj9cIilbMF19KSwgdHJ1ZSk7XHJcblx0XHRyZXNwb25zZS5vbmxvYWQgPSAoKSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwiU3VjY2Vzc2Z1bGx5IHBvc3RlZCBjb21tZW50XCIpXHJcblx0XHR9XHJcblx0XHR3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgXHR9XHJcblx0ZnVuY3Rpb24gdXB2b3RlQnRuKGU6IGFueSkge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0c2V0TGlrZXMoeyBsaWtlczogbGlrZXMgKyAxfSlcclxuXHR9XHJcblx0ZnVuY3Rpb24gZG93bnZvdGVCdG4gKGU6IGFueSkge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0c2V0TGlrZXMobGlrZXMgLSAxKVxyXG5cdH1cclxuXHRmdW5jdGlvbiByZXBseUJ0biAoZTphbnksIHBhcmVudENvbW1lbnRUZXh0OnN0cmluZywgcGFyZW50VGltZVRleHQ6c3RyaW5nKSB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRpZiAocHJvcHMuYXV0aGVudGljYXRlZCA9PT0gdHJ1ZSl7XHJcblx0XHRcdHNldFBhcmVudENvbW1lbnQocGFyZW50Q29tbWVudFRleHQpO1xyXG5cdFx0XHRzZXRQb3N0VGltZShwYXJlbnRUaW1lVGV4dCk7XHJcblx0XHRcdHNldFNob3dDb21tZW50TW9kYWwodHJ1ZSk7XHJcblx0ICAgIH0gZWxzZSB7XHJcblx0ICAgICAgYWxlcnQoXCJwbGVhc2UgbG9nIGluIG9yIGNyZWF0ZSBhbiBhY2NvdW50IHRvIG1ha2UgYSBjb21tZW50LlwiKTtcclxuXHQgICAgfVxyXG5cdFx0Y29uc29sZS5sb2coXCJjb21tZW50aW5nXCIpO1xyXG5cdH1cclxuXHRmdW5jdGlvbiBjYW5jZWxCdG4gKGU6IGFueSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgYmxhY2tvdXRSZWYuY3VycmVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgfVxyXG5cdGZ1bmN0aW9uIGdvQmFjaygpe1xyXG5cdFx0d2luZG93Lmhpc3RvcnkuYmFjaygpO1xyXG5cdH1cclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxSZWFjdC5GcmFnbWVudD5cclxuXHRcdFx0e2xvYWREYXRhfVxyXG5cdFx0XHQ8Q29tbWVudE1vZGFsIHBvc3RoYW5kbGVyPXtwb3N0QnRufSBzaG93PXtzaG93Q29tbWVudE1vZGFsfSBvbkhpZGU9eygpID0+IHNldFNob3dDb21tZW50TW9kYWwoZmFsc2UpfS8+XHJcblx0XHRcdDxCdXR0b24gb25DbGljaz17Z29CYWNrfSBjbGFzc05hbWU9XCJidG5cIiB0eXBlPVwiYnV0dG9uXCI+QmFjazwvQnV0dG9uPlxyXG5cdFx0XHQ8Q29udGFpbmVyPlxyXG5cdFx0XHRcdDxHcmlkIGNvbnRhaW5lciB4cz17Mn0+XHJcblx0XHRcdFx0PENhcmQgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcmR9PlxyXG5cdFx0XHQgICAgICA8Q2FyZEFjdGlvbkFyZWE+XHJcblx0XHRcdCAgICAgICAgPENhcmRNZWRpYVxyXG5cdFx0XHQgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1lZGlhfVxyXG5cdFx0XHQgICAgICAgICAgaW1hZ2U9e3Bvc3RTcmN9XHJcblx0XHRcdCAgICAgICAgICB0aXRsZT1cIkNvbnRlbXBsYXRpdmUgUmVwdGlsZVwiXHJcblx0XHRcdCAgICAgICAgLz5cclxuXHRcdFx0ICAgICAgICA8Q2FyZENvbnRlbnQ+XHJcblx0XHRcdCAgICAgICAgICA8VHlwb2dyYXBoeSBndXR0ZXJCb3R0b20gdmFyaWFudD1cImg1XCIgY29tcG9uZW50PVwiaDJcIj5cclxuXHRcdFx0ICAgICAgICAgICAgPHAgc3R5bGU9e3N0eWxlcy5jZW50ZXJ9PjxpPntwcm9wcy51c2VybmFtZX08L2k+PC9wPlxyXG5cdFx0XHQgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG5cdFx0XHQgICAgIFxyXG5cdFx0XHQgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcblx0XHRcdCAgICAgIDwvQ2FyZEFjdGlvbkFyZWE+XHJcblx0XHRcdCAgICA8L0NhcmQ+XHJcblx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdDxHcmlkIGNvbnRhaW5lciB4cz17MTB9PlxyXG5cdFx0XHRcdFx0PGgzPntnZXRQYXJhbShcInRpdGxlXCIpfTwvaDM+XHJcblx0XHRcdFx0XHQ8cD57cG9zdERlc2NyaXB0aW9ufTwvcD5cclxuXHRcdFx0XHRcdDxwIHN0eWxlPXtkYXRlU3R5bGV9PlBvc3QgdGltZToge3Bvc3RUaW1lfTwvcD5cclxuXHRcdFx0XHRcclxuXHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdDwvQ29udGFpbmVyPjxoci8+XHJcblx0XHRcdFx0PEdyaWQgY29udGFpbmVyIHNtPXsxMn0+XHJcblx0XHRcdFx0XHQ8QXZhdGFyXHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy5saWtlRGlzbGlrZX1cclxuXHRcdFx0XHRcdFx0b25DbGljaz17dXB2b3RlQnRufVxyXG5cdFx0XHRcdFx0XHRzcmM9XCJodHRwOi8vbG9jYWxob3N0OjgwODAvdXBsb2FkL2ZpbGVzL3RodW1ic3VwLmpwZ1wiXHJcblx0XHRcdFx0XHRcdGFsdD1cIkdlbmVyaWMgcGxhY2Vob2xkZXJcIlxyXG5cdFx0XHRcdFx0Lz48cHJlPiA8L3ByZT5cclxuXHRcdFx0XHRcdDxwPntsaWtlc308L3A+XHJcblx0XHRcdFx0XHQ8QXZhdGFyXHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy5saWtlRGlzbGlrZX1cclxuXHRcdFx0XHRcdFx0b25DbGljaz17ZG93bnZvdGVCdG59XHJcblx0XHRcdFx0XHRcdHNyYz1cImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC91cGxvYWQvZmlsZXMvdGh1bWJzZG93bi5qcGdcIlxyXG5cdFx0XHRcdFx0XHRhbHQ9XCJHZW5lcmljIHBsYWNlaG9sZGVyXCJcclxuXHRcdFx0XHRcdC8+PHByZT4gPC9wcmU+XHJcblx0XHRcdFx0XHQ8QnV0dG9uIG9uQ2xpY2s9eyhlOiBhbnkpID0+IHJlcGx5QnRuKGUsIGdldFBhcmFtKFwidGl0bGVcIiksIGdldFBhcmFtKFwiZGF0ZVwiKSl9IHZhcmlhbnQ9XCJvdXRsaW5lZFwiIGNvbG9yPVwicHJpbWFyeVwiPlJFUExZPC9CdXR0b24+XHJcblx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdDxoci8+XHJcblx0XHRcdFx0PGg0PkNvbW1lbnRzPC9oND5cclxuXHRcdFx0XHR7ZGF0YS5tYXAoKGRhdGE6IGFueSkgPT4ge1xyXG5cdFx0XHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRcdFx0PD5cclxuXHRcdFx0XHRcdFx0XHQ8R3JpZCBjb250YWluZXI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8UGFwZXI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PENvbW1lbnQgY2hpbGRDb21tZW50cz17ZGF0YS5jaGlsZENvbW1lbnRzfSBrZXk9e2RhdGEudGltZX0gcmVwbHlIYW5kbGVyPXtyZXBseUJ0bn0gY29tbWVudD17ZGF0YS5jb21tZW50fSB0aW1lPXtkYXRhLnRpbWV9IHNyYz17ZGF0YS5zcmN9IHVzZXJuYW1lPXtkYXRhLnVzZXJuYW1lfS8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L1BhcGVyPlxyXG5cdFx0XHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdFx0PC8+XHJcblx0XHRcdFx0XHQpXHJcblx0XHRcdFx0fSl9XHJcblx0XHRcdDwvUmVhY3QuRnJhZ21lbnQ+XHJcblx0XHQpO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBBdmF0YXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXZhdGFyJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmUnO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XHJcbmltcG9ydCBGb3JtQ29udHJvbExhYmVsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sTGFiZWwnO1xyXG5pbXBvcnQgQ2hlY2tib3ggZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2hlY2tib3gnO1xyXG5pbXBvcnQgTGluayBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaW5rJztcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XHJcbmltcG9ydCBCb3ggZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQm94JztcclxuaW1wb3J0IExvY2tPdXRsaW5lZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0xvY2tPdXRsaW5lZCc7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXInO1xyXG5pbXBvcnQge3Bvc3R9IGZyb20gJy4uL3N0YXRpYy9heGlvcyc7XHJcbmZ1bmN0aW9uIENvcHlyaWdodCgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCIgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgeydDb3B5cmlnaHQg77+9ICd9XHJcbiAgICAgIDxMaW5rIGNvbG9yPVwiaW5oZXJpdFwiIGhyZWY9XCJodHRwczovL21hdGVyaWFsLXVpLmNvbS9cIj5cclxuICAgICAgICBZb3VyIFdlYnNpdGVcclxuICAgICAgPC9MaW5rPnsnICd9XHJcbiAgICAgIHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9XHJcbiAgICAgIHsnLid9XHJcbiAgICA8L1R5cG9ncmFwaHk+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gICdAZ2xvYmFsJzoge1xyXG4gICAgYm9keToge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHBhcGVyOiB7XHJcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoOCksXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gIH0sXHJcbiAgYXZhdGFyOiB7XHJcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW4sXHJcbiAgfSxcclxuICBmb3JtOiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLCAvLyBGaXggSUUgMTEgaXNzdWUuXHJcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMyksXHJcbiAgfSxcclxuICBzdWJtaXQ6IHtcclxuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygzLCAwLCAyKSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5pbnRlcmZhY2UgV2FybmluZ1Byb3BzIHtcclxuXHR2YWw6IHN0cmluZztcclxufVxyXG5jbGFzcyBXYXJuaW5nIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFdhcm5pbmdQcm9wcz4ge1xyXG5cdGRldGVybWluZUNsYXNzID0gKCkgPT4ge1xyXG5cdFx0aWYgKHRoaXMucHJvcHMudmFsLmluY2x1ZGVzKFwiU3VjY2Vzc1wiKSl7XHJcblx0XHRcdHJldHVybiBcImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIjtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiBcImFsZXJ0IGFsZXJ0LWRhbmdlclwiO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRyZW5kZXIoKXtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxkaXYgc3R5bGU9e3tkaXNwbGF5OiB0aGlzLnByb3BzLnZhbCA9PT0gXCJcIiA/IFwibm9uZVwiIDogXCJibG9ja1wiIH19IGNsYXNzTmFtZT17dGhpcy5kZXRlcm1pbmVDbGFzcygpfSByb2xlPVwiYWxlcnRcIj57dGhpcy5wcm9wcy52YWx9PC9kaXY+XHJcblx0XHQpO1xyXG5cdH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWduVXAoKSB7XHJcblx0bGV0IHVzZXJuYW1lUmVmOmFueSA9IFJlYWN0LmNyZWF0ZVJlZjxIVE1MSW5wdXRFbGVtZW50PigpO1xyXG5cdGxldCBlbWFpbFJlZjphbnkgPSBSZWFjdC5jcmVhdGVSZWY8SFRNTElucHV0RWxlbWVudD4oKTtcclxuXHRsZXQgcGFzc3dvcmRSZWY6YW55ID0gUmVhY3QuY3JlYXRlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KCk7XHJcblx0Y29uc3QgW3Jlc3BvbnNlLCBzZXRSZXNwb25zZSBdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcblx0XHJcblx0ZnVuY3Rpb24gZm9jdXNTdWJtaXRJbnB1dChlOiBhbnkpe1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHJcblx0XHRjb25zb2xlLmxvZyhcImRhdDogXCIgKyB1c2VybmFtZVJlZi5jdXJyZW50LnZhbHVlKVxyXG5cdFx0XHJcblx0XHRjb25zdCB1c2VybmFtZTpzdHJpbmcgPSB1c2VybmFtZVJlZi5jdXJyZW50LnZhbHVlO1xyXG5cdFx0Y29uc3QgZW1haWw6c3RyaW5nID0gZW1haWxSZWYuY3VycmVudC52YWx1ZTtcclxuXHRcdGNvbnN0IHBhc3N3b3JkOnN0cmluZyA9IHBhc3N3b3JkUmVmLmN1cnJlbnQudmFsdWU7XHJcblx0XHRcclxuXHRcdFxyXG5cdFx0Y29uc29sZS5sb2coXCJ1c2VybmFtZTogXCIgKyB1c2VybmFtZSArIFwiLCBlbWFpbDogXCIgKyBlbWFpbCArIFwiLCBwYXNzOiBcIiArIHBhc3N3b3JkKVxyXG5cdFx0Y29uc3QgcmVzcG9uc2UgPSBwb3N0KFwiL3VzZXJzL3JlZ2lzdGVyXCIsIEpTT04uc3RyaW5naWZ5KHt1c2VybmFtZTp1c2VybmFtZSwgZW1haWw6ZW1haWwsIHBhc3N3b3JkOnBhc3N3b3JkfSksIHRydWUpO1xyXG5cdFx0XHRyZXNwb25zZS5vbmxvYWQgPSAoKSA9PiB7XHJcblx0XHRcdFx0c2V0UmVzcG9uc2UocmVzcG9uc2UucmVzcG9uc2VUZXh0KVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRcdC8vY2xlYXIgYWxsIGlucHV0IGZpZWxkc1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXIgY29tcG9uZW50PVwibWFpblwiIG1heFdpZHRoPVwieHNcIj5cclxuXHRcdDxXYXJuaW5nIHZhbD17cmVzcG9uc2V9Lz5cclxuICAgICAgPENzc0Jhc2VsaW5lIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfT5cclxuICAgICAgICA8QXZhdGFyIGNsYXNzTmFtZT17Y2xhc3Nlcy5hdmF0YXJ9PlxyXG4gICAgICAgICAgPExvY2tPdXRsaW5lZEljb24gLz5cclxuICAgICAgICA8L0F2YXRhcj5cclxuICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJoMVwiIHZhcmlhbnQ9XCJoNVwiPlxyXG4gICAgICAgICAgU2lnbiB1cFxyXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybX0gbm9WYWxpZGF0ZT5cclxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuXHRcdFx0XHRpbnB1dFJlZj17dXNlcm5hbWVSZWZ9XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgaWQ9XCJ1c2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlVzZXJuYW1lXCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJVc2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJ1c2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG5cdFx0XHRcdGlucHV0UmVmPXtlbWFpbFJlZn1cclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICBpZD1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiRW1haWwgQWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuXHRcdFx0XHRpbnB1dFJlZj17cGFzc3dvcmRSZWZ9ICAgICAgICAgICAgICAgIFxyXG5cdFx0XHRcdHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJjdXJyZW50LXBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxyXG4gICAgICAgICAgICAgICAgY29udHJvbD17PENoZWNrYm94IHZhbHVlPVwiYWxsb3dFeHRyYUVtYWlsc1wiIGNvbG9yPVwicHJpbWFyeVwiIC8+fVxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJJIHdhbnQgdG8gcmVjZWl2ZSBpbnNwaXJhdGlvbiwgbWFya2V0aW5nIHByb21vdGlvbnMgYW5kIHVwZGF0ZXMgdmlhIGVtYWlsLlwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuc3VibWl0fVxyXG5cdFx0XHRvbkNsaWNrPXtmb2N1c1N1Ym1pdElucHV0fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBTaWduIFVwXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBqdXN0aWZ5PVwiZmxleC1lbmRcIj5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL0xvZ2luXCIgdmFyaWFudD1cImJvZHkyXCI+XHJcbiAgICAgICAgICAgICAgICBBbHJlYWR5IGhhdmUgYW4gYWNjb3VudD8gU2lnbiBpblxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxCb3ggbXQ9ezV9PlxyXG4gICAgICAgIDxDb3B5cmlnaHQgLz5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59IiwiXHJcbmV4cG9ydCBjb25zdCBwb3N0ID0gKHVybDpzdHJpbmcsIGRhdGE6YW55LCBqc29uOiBib29sZWFuKSA9PiB7XHJcblx0dmFyIHhodHRwID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcblx0XHJcblx0eGh0dHAub3BlbihcIlBPU1RcIiwgXCJodHRwOi8vbG9jYWxob3N0OjgwODBcIiArIHVybCwgdHJ1ZSk7XHJcblx0aWYgKGpzb24gPT09IHRydWUpIHhodHRwLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIpO1xyXG5cdHhodHRwLnNlbmQoZGF0YSk7XHJcblx0Y29uc29sZS5sb2coXCJwcm9ncmVzc2luZy4uLi5cIilcclxuXHRyZXR1cm4geGh0dHA7XHJcbn1cclxuZXhwb3J0IGNvbnN0IGdldCA9ICh1cmw6c3RyaW5nKSA9PiB7XHJcblx0dmFyIHhodHRwID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcblx0eGh0dHAub3BlbihcIkdFVFwiLCBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MFwiICsgdXJsLCB0cnVlKTtcclxuXHR4aHR0cC5zZW5kKCk7XHJcblx0Y29uc29sZS5sb2coXCJwcm9ncmVzc2luZy4uLi5cIilcclxuXHRyZXR1cm4geGh0dHA7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=