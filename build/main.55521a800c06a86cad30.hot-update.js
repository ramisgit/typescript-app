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
exports.post_sync = (url, data, json) => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91bWQvLi9zcmMvQXBwLnRzeCIsIndlYnBhY2s6Ly91bWQvLi9zcmMvY29tcG9uZW50cy9wYWdlcy9Gb3J1bS50c3giLCJ3ZWJwYWNrOi8vdW1kLy4vc3JjL2NvbXBvbmVudHMvc3RhdGljL2F4aW9zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1HQUEwQjtBQUUxQixrSUFBMEU7QUFDMUUsdUpBQW9EO0FBRXBELDhIQUFnRDtBQUNoRCw4SEFBZ0Q7QUFDaEQseUhBQTZDO0FBQzdDLHdJQUEwQztBQUMxQyxrSUFBbUQ7QUFDbkQseUhBQTZDO0FBQzdDLCtIQUFpRDtBQUNqRCwrSEFBaUQ7QUFDakQsa0lBQW1EO0FBQ25ELCtIQUFpRDtBQUNqRCx5SEFBNkM7QUFDN0MseUdBQStDO0FBQy9DLHNIQUEyQztBQUMzQyx5SEFBNkM7QUFFN0MsNkhBQTJFO0FBRzNFLE1BQU0sU0FBUyxHQUFHLG1CQUFVLENBQUMsQ0FBQyxLQUFZLEVBQUUsRUFBRSxDQUM3QyxxQkFBWSxDQUFDO0lBQ1osU0FBUyxFQUFFO1FBQ1YsS0FBSyxFQUFFLE9BQU87UUFDZCxXQUFXLEVBQUUsTUFBTTtLQUNuQjtJQUNELElBQUksRUFBRTtRQUNMLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLGVBQWUsRUFBRSxPQUFPO1FBQ3hCLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLE9BQU8sRUFBRSxvQkFBb0I7S0FDN0I7SUFDRCxhQUFhLEVBQUU7UUFDZCxlQUFlLEVBQUUsd0RBQXdEO1FBQ3pFLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLE9BQU8sRUFBRSxLQUFLO1FBQ2QsTUFBTSxFQUFFLEtBQUs7S0FDYjtDQUNELENBQUMsQ0FFRixDQUFDO0FBRUYsU0FBd0IsR0FBRztJQUMxQixNQUFNLE9BQU8sR0FBRyxTQUFTLEVBQUUsQ0FBQztJQUU1QixNQUFNLENBQUMsYUFBYSxFQUFFLGdCQUFnQixDQUFDLEdBQUcsZUFBSyxDQUFDLFFBQVEsQ0FBQyxL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QztJQUVqQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSx1QkFBdUIsR0FBRyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDekQsSUFBSSxJQUFJLEtBQUssSUFBSTtRQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLEVBQUUsaUNBQWlDLENBQUMsQ0FBQztJQUM3RixLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUM7SUFDOUIsT0FBTyxLQUFLLENBQUM7QUFDakIsQ0FBQztBQUNZLFdBQUcsR0FBRyxDQUFDLEdBQVUsRUFBRSxFQUFFO0lBQ2pDLElBQUksS0FBSyxHQUFHLElBQUksY0FBYyxFQUFFLENBQUM7SUFDakMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsdUJBQXVCLEdBQUcsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3ZELEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUM7SUFDOUIsT0FBTyxLQUFLLENBQUM7QUFDZCxDQUFDIiwiZmlsZSI6Im1haW4uNTU1MjFhODAwYzA2YTg2Y2FkMzAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyLCBSb3V0ZSwgU3dpdGNoIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lcic7XG5cbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9jb21wb25lbnRzL2xheW91dC9IZWFkZXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuL2NvbXBvbmVudHMvbGF5b3V0L0Zvb3Rlcic7XG5pbXBvcnQgQWJvdXQgZnJvbSAnLi9jb21wb25lbnRzL3BhZ2VzL0Fib3V0JztcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xuaW1wb3J0IFJlZ2lzdGVyIGZyb20gJy4vY29tcG9uZW50cy9wYWdlcy9SZWdpc3Rlcic7XG5pbXBvcnQgSW5kZXggZnJvbSAnLi9jb21wb25lbnRzL3BhZ2VzL0luZGV4JztcbmltcG9ydCBDb250YWN0IGZyb20gJy4vY29tcG9uZW50cy9wYWdlcy9Db250YWN0JztcbmltcG9ydCBBY2NvdW50IGZyb20gJy4vY29tcG9uZW50cy9wYWdlcy9BY2NvdW50JztcbmltcG9ydCBQcm9qZWN0cyBmcm9tICcuL2NvbXBvbmVudHMvcGFnZXMvUHJvamVjdHMnO1xuaW1wb3J0IFN1cHBvcnQgZnJvbSAnLi9jb21wb25lbnRzL3BhZ2VzL1N1cHBvcnQnO1xuaW1wb3J0IEZvcnVtIGZyb20gJy4vY29tcG9uZW50cy9wYWdlcy9Gb3J1bSc7XG5pbXBvcnQge3Bvc3R9IGZyb20gJy4vY29tcG9uZW50cy9zdGF0aWMvYXhpb3MnO1xuaW1wb3J0IFBvc3QgZnJvbSAnLi9jb21wb25lbnRzL3BhZ2VzL1Bvc3QnO1xuaW1wb3J0IExvZ2luIGZyb20gJy4vY29tcG9uZW50cy9wYWdlcy9Mb2dpbic7XG5cbmltcG9ydCB7IG1ha2VTdHlsZXMsIFRoZW1lLCBjcmVhdGVTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuXG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lOiBUaGVtZSkgPT5cblx0Y3JlYXRlU3R5bGVzKHtcblx0XHRwYXJhZ3JhcGg6IHtcblx0XHRcdGNvbG9yOiBcIndoaXRlXCIsXG5cdFx0XHRwYWRkaW5nTGVmdDogXCIyMHB4XCJcblx0XHR9LFxuXHRcdG1haW46IHtcblx0XHRcdG1heFdpZHRoOiBcIjExNDBweFwiLFxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCIsXG5cdFx0XHRtaW5IZWlnaHQ6IFwiMTAwdmhcIixcblx0XHRcdHBhZGRpbmc6IFwiOTBweCAzMHB4IDBweCAzMHB4XCJcblx0XHR9LFxuXHRcdG1haW5Db250YWluZXI6IHtcblx0XHRcdGJhY2tncm91bmRJbWFnZTogXCJ1cmwoaHR0cDovL2xvY2FsaG9zdDo4MDgwL3VwbG9hZC9maWxlcy9iYWNrZ3JvdW5kLmpwZylcIixcblx0XHRcdG1pbkhlaWdodDogXCIxMDB2aFwiLFxuXHRcdFx0cGFkZGluZzogXCIwcHhcIixcblx0XHRcdG1hcmdpbjogXCIwcHhcIlxuXHRcdH1cblx0fSksXG5cdFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwICgpIHtcblx0Y29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXHRcblx0Y29uc3QgW2F1dGhlbnRpY2F0ZWQsIHNldEF1dGhlbnRpY2F0ZWRdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuXHRjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuXHRjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuXHRcblx0ZnVuY3Rpb24gYXV0aGVudGljYXRlX3VzZXIoKXtcblx0XHRjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xuXHRcdGNvbnNvbGUubG9nKFwiQXV0aGVudGljYXRpbmcgdXNlciBhdCB0b3AgbGF5ZXJcIilcblx0XHRpZiAodG9rZW4pIHtcblx0XHRcdGNvbnN0IHU6bnVsbCB8IHN0cmluZyA9IHRva2VuLnNwbGl0KFwiP1wiKVswXTsgc2V0VXNlcm5hbWUodSk7XG5cdFx0XHRjb25zdCBwOm51bGwgfCBzdHJpbmcgPSB0b2tlbi5zcGxpdChcIj9cIilbMV07IHNldFBhc3N3b3JkKHApO1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBwb3N0KFwiL3VzZXJzL2xvZ2luXCIsIEpTT04uc3RyaW5naWZ5KHt1c2VybmFtZTp1c2VybmFtZSwgZW1haWw6dXNlcm5hbWUsIHBhc3N3b3JkOnBhc3N3b3JkfSksIHRydWUpO1xuXHRcdFx0cmVzcG9uc2Uub25sb2FkID0gKCkgPT4ge1xuXHRcdFx0XHRpZiAocmVzcG9uc2UucmVzcG9uc2VUZXh0LmluY2x1ZGVzKFwiU3VjY2Vzc1wiKSl7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCJTdWNjZXNzZnVsbHkgYXV0aGVudGljYXRlZCB1c2VyXCIpXG5cdFx0XHRcdFx0c2V0QXV0aCh0cnVlKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRcblx0ZnVuY3Rpb24gc2V0QXV0aCh2YWw6IGJvb2xlYW4pe1xuXHRcdHNldEF1dGhlbnRpY2F0ZWQodmFsKTtcblx0fVxuXHRhdXRoZW50aWNhdGVfdXNlcigpO1xuXHRyZXR1cm4gKFxuXHRcdDxSb3V0ZXI+XG5cdFx0XHQ8R3JpZCBjb250YWluZXIgeHM9ezEyfSBjbGFzc05hbWU9e2NsYXNzZXMubWFpbkNvbnRhaW5lcn0+XG5cdFx0XHRcdDxIZWFkZXIgYXV0aD17YXV0aGVudGljYXRlZH0vPlxuXHRcdFx0XHQ8R3JpZCBpdGVtIGNvbnRhaW5lciB4cz17MTJ9IGp1c3RpZnk9XCJjZW50ZXJcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgPlxuXHRcdFx0XHRcdDxDb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc2VzLm1haW59PlxuXHRcdFx0XHRcdFx0PFN3aXRjaD5cblx0XHRcdFx0XHRcdFx0PFJvdXRlIGV4YWN0IHBhdGg9Jy8nIHJlbmRlcj17KHByb3BzKSA9PiAoPEluZGV4Lz4pfS8+XG5cdFx0XHRcdFx0XHRcdDxSb3V0ZSBwYXRoPScvRm9ydW0nIHJlbmRlcj17KHByb3BzKSA9PiAoPEZvcnVtIGF1dGhlbnRpY2F0ZWQ9e2F1dGhlbnRpY2F0ZWR9IG15X3VzZXJuYW1lPXt1c2VybmFtZX0gbXlfcGFzc3dvcmQ9e3Bhc3N3b3JkfSAvPil9Lz5cblx0XHRcdFx0XHRcdFx0PFJvdXRlIHBhdGg9Jy9Mb2dpbicgcmVuZGVyPXsocHJvcHMpID0+ICg8TG9naW4gYXV0aGVudGljYXRlPXthdXRoZW50aWNhdGVfdXNlcn0gLz4pfS8+XG5cdFx0XHRcdFx0XHRcdDxSb3V0ZSBwYXRoPScvUmVnaXN0ZXInIGNvbXBvbmVudD17UmVnaXN0ZXJ9IC8+XG5cdFx0XHRcdFx0XHRcdDxSb3V0ZSBwYXRoPScvQWJvdXQgdXMnIGNvbXBvbmVudD17QWJvdXR9IC8+XG5cdFx0XHRcdFx0XHRcdDxSb3V0ZSBwYXRoPScvQWNjb3VudCcgcmVuZGVyPXsocHJvcHMpID0+ICg8QWNjb3VudCByZW1vdmVBdXRoPXtzZXRBdXRofSB1c2VybmFtZT17dXNlcm5hbWV9IHBhc3N3b3JkPXtwYXNzd29yZH0vPil9Lz5cblx0XHRcdFx0XHRcdFx0PFJvdXRlIHBhdGg9Jy9Gb3J1bS9Qb3N0JyByZW5kZXI9eyhwcm9wcykgPT4gKDxQb3N0IGF1dGhlbnRpY2F0ZWQ9e2F1dGhlbnRpY2F0ZWR9IHVzZXJuYW1lPXt1c2VybmFtZX0gcGFzc3dvcmQ9e3Bhc3N3b3JkfS8+KX0vPlxuXHRcdFx0XHRcdFx0XHQ8Um91dGUgcGF0aD0nL0NvbnRhY3QnIGNvbXBvbmVudD17Q29udGFjdH0gLz5cblx0XHRcdFx0XHRcdFx0PFJvdXRlIHBhdGg9Jy9Qcm9qZWN0cycgY29tcG9uZW50PXtQcm9qZWN0c30gLz5cblx0XHRcdFx0XHRcdFx0PFJvdXRlIHBhdGg9Jy9TdXBwb3J0JyBjb21wb25lbnQ9e1N1cHBvcnR9IC8+XG5cdFx0XHRcdFx0XHQ8L1N3aXRjaD5cblx0XHRcdFx0XHQ8L0NvbnRhaW5lcj5cblx0XHRcdFx0PC9HcmlkPlxuXHRcdFx0XHQ8Rm9vdGVyLz5cblx0XHRcdDwvR3JpZD5cblx0XHQ8L1JvdXRlcj5cblx0KTtcbn1cblxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBwb3N0LCBnZXQgfSBmcm9tICcuLi9zdGF0aWMvYXhpb3MnO1xyXG5pbXBvcnQgQXZhdGFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0F2YXRhcic7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXInO1xyXG5pbXBvcnQgRGl2aWRlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaXZpZGVyJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5pbXBvcnQgR3JpZExpc3QgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZExpc3QnO1xyXG5pbXBvcnQgR3JpZExpc3RUaWxlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWRMaXN0VGlsZSc7XHJcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbCc7XHJcbmltcG9ydCBGb3JtQ29udHJvbExhYmVsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sTGFiZWwnO1xyXG5pbXBvcnQgRm9ybUdyb3VwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1Hcm91cCc7XHJcbmltcG9ydCBJbnB1dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dCc7XHJcbmltcG9ydCBUZXh0YXJlYUF1dG9zaXplIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRhcmVhQXV0b3NpemUnO1xyXG5pbXBvcnQgUG9zdCBmcm9tICcuL1Bvc3QnO1xyXG5pbXBvcnQgRmFkZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9GYWRlJztcclxuaW1wb3J0IE1vZGFsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01vZGFsJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcywgVGhlbWUsIGNyZWF0ZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBCYWNrZHJvcCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CYWNrZHJvcCc7XHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcclxuXHJcbmNvbnN0IGF2YXRhclN0eWxlOlJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XHJcblx0bWFyZ2luOiAxMCxcclxuICAgIHdpZHRoOiA4MCxcclxuICAgIGhlaWdodDogODAsXHJcbn1cclxuY29uc3QgdXNlcm5hbWVTdHlsZTpSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xyXG5cdGZvbnRTaXplOiBcIjEycHhcIixcclxuXHRtYXJnaW46IFwiMHB4IDBweCAwcHggMjBweFwiLFxyXG59XHJcbmNvbnN0IHRpdGxlU3R5bGU6UmVhY3QuQ1NTUHJvcGVydGllcyA9IHtcclxuXHRtYXJnaW46IFwiNXB4IDBweCAwcHggNXB4XCIsXHJcblx0cGFkZGluZzogXCIwcHggMHB4IDBweCAwcHhcIixcclxuXHRjb2xvcjogXCJibGFja1wiLFxyXG59XHJcbmNvbnN0IGNyZWF0ZVBvc3RCdG5TdHlsZTpSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xyXG5cdGhlaWdodDogXCIzOHB4XCJcclxufVxyXG5cclxuaW50ZXJmYWNlIEZvcnVtSXRlbVByb3BzIHtcclxuXHRzcmM6IHN0cmluZztcclxuXHR0aXRsZTogc3RyaW5nO1xyXG5cdGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcblx0dXNlcm5hbWU6IHN0cmluZztcclxuXHRkYXRlOiBzdHJpbmc7XHJcblx0YXV0aGVudGljYXRlZDogYm9vbGVhbjtcclxuXHRteV91c2VybmFtZTogc3RyaW5nIHwgbnVsbDtcclxuXHRteV9wYXNzd29yZDogc3RyaW5nIHwgbnVsbDtcclxufVxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+XHJcbiAgY3JlYXRlU3R5bGVzKHtcclxuICAgIHBhcGVyOiB7XHJcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICB3aWR0aDogNDAwLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcclxuICAgICAgYm9yZGVyOiAnMnB4IHNvbGlkICMwMDAnLFxyXG4gICAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbNV0sXHJcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiwgNCwgMyksXHJcbiAgICB9LFxyXG5cdG1vZGFsOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgIH0sXHJcblx0dGV4dEZpZWxkOiB7XHJcblx0XHR3aWR0aDogXCIxMDAlXCJcclxuXHR9XHJcbiAgfSksXHJcbik7XHJcbmV4cG9ydCBjbGFzcyBGb3J1bUl0ZW0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8Rm9ydW1JdGVtUHJvcHM+IHtcclxuXHRcclxuXHRcclxuXHRyZW5kZXIoKXtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdFxyXG5cdFx0XHRcdDxQYXBlcj5cclxuXHRcdFx0XHQ8R3JpZCBjb250YWluZXIgaXRlbSB4cz17MTJ9PlxyXG5cdFx0XHRcdFx0PEdyaWQgaXRlbSB4cz17Mn0ganVzdGlmeT1cImNlbnRlclwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cclxuXHRcdFx0XHRcdFx0PEdyaWQgaXRlbSBqdXN0aWZ5PVwiY2VudGVyXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiPlxyXG5cdFx0XHRcdFx0XHRcdDxHcmlkIGp1c3RpZnk9XCJjZW50ZXJcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XHJcblx0ICAgICAgXHRcdFx0XHRcdFx0PEF2YXRhciBhbHQ9XCJBdmF0YXIgaW1hZ2VcIiBzcmM9e2BodHRwOi8vbG9jYWxob3N0OjgwODAvdXBsb2FkL3VzZXIvJHt0aGlzLnByb3BzLnVzZXJuYW1lfWB9IHN0eWxlPXthdmF0YXJTdHlsZX0gLz5cclxuXHRcdFx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHRcdFx0PEdyaWQganVzdGlmeT1cImNlbnRlclwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGd1dHRlckJvdHRvbT5cclxuXHRcdCAgICAgICAgXHRcdFx0XHRcdHt0aGlzLnByb3BzLnVzZXJuYW1lfVxyXG5cdFx0ICAgICAgXHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cclxuXHRcdFx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHRcdDwvR3JpZD5cclxuICAgIFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0PEdyaWQgaXRlbSB4cz17MTB9IGp1c3RpZnk9XCJmbGV4LXN0YXJ0XCIgYWxpZ25JdGVtcz1cImZsZXgtc3RhcnRcIiB6ZXJvTWluV2lkdGg+XHJcblx0XHRcdFx0XHRcdDxMaW5rIHN0eWxlPXt0aXRsZVN0eWxlfSB0bz17e3BhdGhuYW1lOiBgL0ZvcnVtL1Bvc3QvP3RpdGxlPSR7dGhpcy5wcm9wcy50aXRsZX1gLFxyXG5cdFx0XHRcdFx0XHRcdHN0YXRlOiB7XHJcblx0XHRcdFx0XHRcdFx0XHRzcmM6IHRoaXMucHJvcHMuc3JjLFxyXG5cdFx0XHRcdFx0XHRcdFx0ZGVzY3JpcHRpb246IHRoaXMucHJvcHMuZGVzY3JpcHRpb24sXHJcblx0XHRcdFx0XHRcdFx0XHR1c2VybmFtZTogdGhpcy5wcm9wcy51c2VybmFtZSxcclxuXHRcdFx0XHRcdFx0XHRcdHRpbWU6IHRoaXMucHJvcHMuZGF0ZVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fX0+XHJcblx0XHRcdFx0XHRcdFx0PFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCIgZ3V0dGVyQm90dG9tPlxyXG5cdFx0ICAgICAgICBcdFx0XHRcdFx0e3RoaXMucHJvcHMudGl0bGV9XHJcblx0XHQgICAgICBcdFx0XHRcdDwvVHlwb2dyYXBoeT5cclxuXHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHQ8cCBzdHlsZT17e3dvcmRXcmFwOiBcImJyZWFrLXdvcmRcIiwgb3ZlcmZsb3c6XCJoaWRkZW5cIn19Pnt0aGlzLnByb3BzLmRlc2NyaXB0aW9ufTwvcD5cclxuXHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHQ8L1BhcGVyPlxyXG5cdFx0XHRcclxuXHRcdClcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIENvbW1lbnRNb2RhbCAocHJvcHM6IGFueSkge1xyXG5cdGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHRjb25zdCBkZXNjcmlwdGlvblJlZjogYW55ID0gUmVhY3QuY3JlYXRlUmVmKCk7XHJcblx0Y29uc3QgW3RleHRMaW1pdCwgc2V0VGV4dExpbWl0XSA9IFJlYWN0LnVzZVN0YXRlKDI1NSk7XHJcblx0XHJcbiAgXHRjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgdGl0bGVSZWY6YW55ID0gUmVhY3QuY3JlYXRlUmVmKCk7XHJcblx0ICBjb25zdCBoYW5kbGVPcGVuID0gKCkgPT4ge1xyXG5cdFx0aWYgKHByb3BzLmF1dGhlbnRpY2F0ZWQpe1xyXG5cdFx0XHRzZXRPcGVuKHRydWUpO1x0XHJcblx0XHR9ZWxzZSB7XHJcblx0XHRcdGFsZXJ0KFwibG9naW4gdG8gbWFrZSBhIHBvc3RcIilcclxuXHRcdH1cclxuXHQgICAgXHJcblx0ICB9O1xyXG5cclxuXHQgIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG5cdCAgICBzZXRPcGVuKGZhbHNlKTtcclxuXHQgIH07XHJcblx0Y29uc3QgdGV4dExpbWl0Q2hhbmdlID0gKGV2ZW50OiBhbnkpID0+IHtcclxuXHRcdHNldFRleHRMaW1pdCgyNTUgLSBldmVudC50YXJnZXQudmFsdWUubGVuZ3RoKVxyXG5cdH1cclxuXHRcdGZ1bmN0aW9uIHBvc3RCdG4gKGU6IGFueSkge1xyXG5cdFx0Y29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcclxuXHRcdGlmICh0b2tlbikge1xyXG5cdFx0XHRjb25zdCByZXNwb25zZSA9IHBvc3QoXCIvZm9ydW0vcG9zdFwiLCBKU09OLnN0cmluZ2lmeSh7dXNlcm5hbWU6dG9rZW4uc3BsaXQoXCI/XCIpWzBdLCB0aXRsZTp0aXRsZVJlZi5jdXJyZW50LnZhbHVlLCBkZXNjcmlwdGlvbjpkZXNjcmlwdGlvblJlZi5jdXJyZW50LnZhbHVlfSksIHRydWUpO1xyXG5cdFx0XHRyZXNwb25zZS5vbmxvYWQgPSAoKSA9PiB7XHJcblx0XHRcdFx0aWYgKHJlc3BvbnNlLnJlc3BvbnNlVGV4dC5pbmNsdWRlcyhcIlN1Y2Nlc3NcIikpe1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCJ0ZXh0OiBcIiArIHJlc3BvbnNlLnJlc3BvbnNlVGV4dClcclxuXHRcdFx0XHRcdHByb3BzLm9uSGlkZSgpO1xyXG5cdFx0XHRcdFx0d2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJDcmVhdGUgYW4gYWNjb3VudCBvciBsb2dpbiB0byBtYWtlIGEgcG9zdC5cIilcclxuXHRcdH1cclxuXHR9XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcclxuXHRcdFx0PGRpdj5cclxuXHRcdFx0XHQ8QnV0dG9uIHN0eWxlPXtjcmVhdGVQb3N0QnRuU3R5bGV9IFxyXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXtoYW5kbGVPcGVufVxyXG5cdFx0XHRcdFx0XHR2YXJpYW50PVwiY29udGFpbmVkXCJcclxuXHRcdFx0XHRcdCBcdGNvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgICAgIFx0XHRcdFx0XHRDcmVhdGUgUG9zdFxyXG4gICAgICBcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdCAgICAgIDxNb2RhbFxyXG5cdFx0ICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJ0cmFuc2l0aW9uLW1vZGFsLXRpdGxlXCJcclxuXHRcdCAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cInRyYW5zaXRpb24tbW9kYWwtZGVzY3JpcHRpb25cIlxyXG5cdFx0ICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubW9kYWx9XHJcblx0XHQgICAgICAgIG9wZW49e29wZW59XHJcblx0XHQgICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxyXG5cdFx0ICAgICAgICBjbG9zZUFmdGVyVHJhbnNpdGlvblxyXG5cdFx0ICAgICAgICBCYWNrZHJvcENvbXBvbmVudD17QmFja2Ryb3B9XHJcblx0XHQgICAgICAgIEJhY2tkcm9wUHJvcHM9e3tcclxuXHRcdCAgICAgICAgICB0aW1lb3V0OiA1MDAsXHJcblx0XHQgICAgICAgIH19XHJcblx0XHQgICAgICA+XHJcblx0XHQgICAgICAgIDxGYWRlIGluPXtvcGVufT5cclxuXHRcdCAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XHJcblx0XHRcdFx0XHQ8Zm9ybSBub1ZhbGlkYXRlIGF1dG9Db21wbGV0ZT1cIm9mZlwiPlxyXG5cdFx0XHRcdCAgICAgIDxoMiBpZD1cInRyYW5zaXRpb24tbW9kYWwtdGl0bGVcIj5DcmVhdGUgYSBwb3N0PC9oMj5cclxuXHRcdFx0XHRcdFx0PEdyaWQgeHM9ezEyfT5cclxuXHRcdFx0XHQgICAgICA8VGV4dEZpZWxkIGlucHV0UmVmPXt0aXRsZVJlZn0gaWQ9XCJvdXRsaW5lZC1iYXNpY1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9IGxhYmVsPVwiVGl0bGVcIiB2YXJpYW50PVwib3V0bGluZWRcIiAvPlxyXG5cdFx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHRcdDxHcmlkIHhzPXsxMn0+XHJcblx0XHRcdFx0XHRcdFx0PFRleHRGaWVsZFxyXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhldmVudCkgPT4gdGV4dExpbWl0Q2hhbmdlKGV2ZW50KX1cclxuXHRcdFx0XHRcdFx0XHRcdGlucHV0UmVmPXtkZXNjcmlwdGlvblJlZn1cclxuXHRcdFx0XHRcdCAgICAgICAgICBpZD1cIm91dGxpbmVkLW11bHRpbGluZS1zdGF0aWNcIlxyXG5cdFx0XHRcdFx0ICAgICAgICAgIGxhYmVsPVwiRGVzY3JpcHRpb25cIlxyXG5cdFx0XHRcdFx0ICAgICAgICAgIG11bHRpbGluZVxyXG5cdFx0XHRcdFx0ICAgICAgICAgIHJvd3M9XCI0XCJcclxuXHRcdFx0XHRcdCAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxyXG5cdFx0XHRcdFx0ICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcblx0XHRcdFx0XHQgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuXHRcdFx0XHRcdCAgICAgICAgLz5cclxuXHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0XHQ8R3JpZCBjb250YWluZXIgeHM9ezEyfSBqdXN0aWZ5PVwiZmxleC1lbmRcIiBhbGlnbkl0ZW1zPVwiZmxleC1lbmRcIj5cclxuXHRcdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJwXCI+XHJcblx0XHRcdFx0XHRcdFx0XHR7dGV4dExpbWl0fVxyXG5cdFx0XHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cclxuXHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0XHQ8R3JpZCB4cz17MTJ9PlxyXG5cdFx0XHRcdFx0XHRcdDxCdXR0b24gb25DbGljaz17KCkgPT4gc2V0T3BlbihmYWxzZSl9PkNsb3NlPC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdFx0PEJ1dHRvbiBvbkNsaWNrPXtwb3N0QnRufSB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJwcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiPlBvc3Q8L0J1dHRvbj5cclxuXHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdCAgICA8L2Zvcm0+XHJcblx0XHRcdFx0XHRcclxuXHRcdCAgICAgICAgICA8L2Rpdj5cclxuXHRcdCAgICAgICAgPC9GYWRlPlxyXG5cdFx0ICAgICAgPC9Nb2RhbD5cclxuXHRcdCAgICA8L2Rpdj5cclxuXHRcdCk7XHJcblx0fVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3J1bSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxGb3J1bVByb3BzLCBGb3J1bVN0YXRlPiB7XHJcblx0cHVibGljIHN0YXRlOkZvcnVtU3RhdGUgPSB7XHJcbiAgICAgIGRhdGE6IFtdLFxyXG4gICAgICBzaG93UG9zdE1vZGFsOiBmYWxzZVxyXG4gICAgfVxyXG4gIFx0Y29uc3RydWN0b3IocHJvcHM6Rm9ydW1Qcm9wcyl7XHJcblx0ICAgIHN1cGVyKHByb3BzKTtcclxuXHRcdGNvbnN0IHJlc3BvbnNlID0gZ2V0KFwiL2ZvcnVtL2dldFwiKTtcclxuXHRcdHJlc3BvbnNlLm9ubG9hZCA9ICgpID0+IHtcclxuXHRcdFx0dmFyIGpzb25BcnJheSA9IEpTT04ucGFyc2UocmVzcG9uc2UucmVzcG9uc2VUZXh0KTtcclxuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IGRhdGE6IGpzb25BcnJheX0pXHJcblx0XHR9XHJcblx0fVxyXG5cdHJlbmRlcigpe1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PFJlYWN0LkZyYWdtZW50PlxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdDxDb250YWluZXI+XHJcblx0XHRcdFx0XHQ8R3JpZCBpdGVtIHhzPXsxMn0gY29udGFpbmVyIGp1c3RpZnk9XCJmbGV4LWVuZFwiIGFsaWduSXRlbXM9XCJmbGV4LWVuZFwiPlxyXG5cdFx0XHRcdFx0XHQ8Q29tbWVudE1vZGFsIGF1dGhlbnRpY2F0ZWQ9e3RoaXMucHJvcHMuYXV0aGVudGljYXRlZH0vPlxyXG5cdFx0XHRcdFx0XHQgXHJcblx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0PC9Db250YWluZXI+PGJyLz5cclxuXHRcdFx0XHQ8RGl2aWRlciAvPlxyXG5cdFx0XHRcdDxHcmlkTGlzdCBjZWxsSGVpZ2h0PXsxNjB9IGNvbHM9ezEyfT5cclxuXHRcdFx0XHRcdHsodGhpcy5zdGF0ZS5kYXRhKS5tYXAoKGRhdGE6IGFueSkgPT5cclxuXHRcdFx0XHRcdFx0PEdyaWRMaXN0VGlsZSBrZXk9e2RhdGEuZGF0ZX0gY29scz17MTJ9PlxyXG5cdFx0XHRcdFx0XHRcdDxGb3J1bUl0ZW0gbXlfdXNlcm5hbWU9e3RoaXMucHJvcHMubXlfdXNlcm5hbWV9IG15X3Bhc3N3b3JkPXt0aGlzLnByb3BzLm15X3Bhc3N3b3JkfSBhdXRoZW50aWNhdGVkPXt0aGlzLnByb3BzLmF1dGhlbnRpY2F0ZWR9IGRhdGU9e2RhdGEuZGF0ZX0gdGl0bGU9e2RhdGEudGl0bGV9IGtleT17ZGF0YS5kYXRlfSB1c2VybmFtZT17ZGF0YS51c2VybmFtZX0gZGVzY3JpcHRpb249e2RhdGEuZGVzY3JpcHRpb259IHNyYz17ZGF0YS5wYXRofS8+XHJcblx0XHRcdFx0XHRcdDwvR3JpZExpc3RUaWxlPlxyXG5cdFx0XHRcdFx0KX1cclxuXHRcdFx0XHQ8L0dyaWRMaXN0PlxyXG5cdFx0XHQ8L1JlYWN0LkZyYWdtZW50PlxyXG5cdFx0KTtcclxuXHR9XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBGb3J1bVByb3BzIHtcclxuXHRhdXRoZW50aWNhdGVkOiBib29sZWFuO1xyXG5cdG15X3VzZXJuYW1lOiBzdHJpbmcgfCBudWxsO1xyXG5cdG15X3Bhc3N3b3JkOiBzdHJpbmcgfCBudWxsO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgRm9ydW1TdGF0ZSB7XHJcbiAgICBkYXRhOiBhbnk7XHJcbiAgICBzaG93UG9zdE1vZGFsOiBib29sZWFuO1xyXG59XHJcbiIsIlxyXG5leHBvcnQgY29uc3QgcG9zdCA9ICh1cmw6c3RyaW5nLCBkYXRhOmFueSwganNvbjogYm9vbGVhbikgPT4ge1xyXG5cdHZhciB4aHR0cCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG5cdFxyXG5cdHhodHRwLm9wZW4oXCJQT1NUXCIsIFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwXCIgKyB1cmwsIHRydWUpO1xyXG5cdGlmIChqc29uID09PSB0cnVlKSB4aHR0cC5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiKTtcclxuXHR4aHR0cC5zZW5kKGRhdGEpO1xyXG5cdGNvbnNvbGUubG9nKFwicHJvZ3Jlc3NpbmcuLi4uXCIpXHJcblx0cmV0dXJuIHhodHRwO1xyXG59XHJcbmV4cG9ydCBjb25zdCBwb3N0X3N5bmMgPSAodXJsOiBzdHJpbmcsIGRhdGE6IGFueSwganNvbjogYm9vbGVhbil7XHJcbiAgICB2YXIgeGh0dHAgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuXHJcbiAgICB4aHR0cC5vcGVuKFwiUE9TVFwiLCBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MFwiICsgdXJsLCBmYWxzZSk7XHJcbiAgICBpZiAoanNvbiA9PT0gdHJ1ZSkgeGh0dHAuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIik7XHJcbiAgICB4aHR0cC5zZW5kKGRhdGEpO1xyXG4gICAgY29uc29sZS5sb2coXCJwcm9ncmVzc2luZy4uLi5cIilcclxuICAgIHJldHVybiB4aHR0cDtcclxufVxyXG5leHBvcnQgY29uc3QgZ2V0ID0gKHVybDpzdHJpbmcpID0+IHtcclxuXHR2YXIgeGh0dHAgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuXHR4aHR0cC5vcGVuKFwiR0VUXCIsIFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwXCIgKyB1cmwsIHRydWUpO1xyXG5cdHhodHRwLnNlbmQoKTtcclxuXHRjb25zb2xlLmxvZyhcInByb2dyZXNzaW5nLi4uLlwiKVxyXG5cdHJldHVybiB4aHR0cDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==