webpackHotUpdateumd("main",{

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


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91bWQvLi9zcmMvY29tcG9uZW50cy9wYWdlcy9Gb3J1bS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUdBQTBCO0FBQzFCLGtJQUF3QztBQUN4QywrRkFBNEM7QUFDNUMsOElBQThDO0FBQzlDLHdJQUEwQztBQUMxQywwSkFBc0Q7QUFDdEQsMklBQTRDO0FBQzVDLHVKQUFvRDtBQUNwRCxpSkFBZ0Q7QUFDaEQsOElBQThDO0FBQzlDLG9KQUFrRDtBQUNsRCxnS0FBMEQ7QUFPMUQsd0lBQTBDO0FBQzFDLDJJQUE0QztBQUM1Qyw2SEFBMkU7QUFDM0Usb0pBQWtEO0FBQ2xELHVKQUFvRDtBQUVwRCxNQUFNLFdBQVcsR0FBdUI7SUFDdkMsTUFBTSxFQUFFLEVBQUU7SUFDUCxLQUFLLEVBQUUsRUFBRTtJQUNULE1BQU0sRUFBRSxFQUFFO0NBQ2I7QUFDRCxNQUFNLGFBQWEsR0FBdUI7SUFDekMsUUFBUSxFQUFFLE1BQU07SUFDaEIsTUFBTSxFQUFFLGtCQUFrQjtDQUMxQjtBQUNELE1BQU0sVUFBVSxHQUF1QjtJQUN0QyxNQUFNLEVBQUUsaUJBQWlCO0lBQ3pCLE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsS0FBSyxFQUFFLE9BQU87Q0FDZDtBQUNELE1BQU0sa0JBQWtCLEdBQXVCO0lBQzlDLE1BQU0sRUFBRSxNQUFNO0NBQ2Q7QUFZRCxNQUFNLFNBQVMsR0FBRyxtQkFBVSxDQUFDLENBQUMsS0FBWSxFQUFFLEVBQUUsQ0FDNUMscUJBQVksQ0FBQztJQUNYLEtBQUssRUFBRTtRQUNMLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLEtBQUssRUFBRSxHQUFHO1FBQ1YsZUFBZSxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEtBQUs7UUFDL0MsTUFBTSxFQUFFLGdCQUFnQjtRQUN4QixTQUFTLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDM0IsT0FBTyxFQUFFLEtBQUssQ0FB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QUFRO1lBRWQsOEJBQUMsbUJBQVM7Z0JBQ1QsOEJBQUMsY0FBSSxJQUFDLElBQUksUUFBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLFNBQVMsUUFBQyxPQUFPLEVBQUMsVUFBVSxFQUFDLFVBQVUsRUFBQyxVQUFVO29CQUNwRSw4QkFBQyxZQUFZLElBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxHQUFHLENBRWxELENBQ0k7WUFBQSx5Q0FBSztZQUNqQiw4QkFBQyxpQkFBTyxPQUFHO1lBQ1gsOEJBQUMsa0JBQVEsSUFBQyxVQUFVLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFLElBQ2pDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFTLEVBQUUsRUFBRSxDQUNwQyw4QkFBQyxzQkFBWSxJQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFO2dCQUNyQyw4QkFBQyxTQUFTLElBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxhQUFhLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FDN08sQ0FDZixDQUNTLENBQ0ssQ0FDakIsQ0FBQztJQUNILENBQUM7Q0FDRDtBQWxDRCx3QkFrQ0MiLCJmaWxlIjoibWFpbi5mYzI1YThlNzAyNGU0ZDM2NjhiYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBwb3N0LCBnZXQgfSBmcm9tICcuLi9zdGF0aWMvYXhpb3MnO1xyXG5pbXBvcnQgQXZhdGFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0F2YXRhcic7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXInO1xyXG5pbXBvcnQgRGl2aWRlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaXZpZGVyJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5pbXBvcnQgR3JpZExpc3QgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZExpc3QnO1xyXG5pbXBvcnQgR3JpZExpc3RUaWxlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWRMaXN0VGlsZSc7XHJcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbCc7XHJcbmltcG9ydCBGb3JtQ29udHJvbExhYmVsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sTGFiZWwnO1xyXG5pbXBvcnQgRm9ybUdyb3VwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1Hcm91cCc7XHJcbmltcG9ydCBJbnB1dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dCc7XHJcbmltcG9ydCBUZXh0YXJlYUF1dG9zaXplIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRhcmVhQXV0b3NpemUnO1xyXG5pbXBvcnQgUG9zdCBmcm9tICcuL1Bvc3QnO1xyXG5pbXBvcnQgRmFkZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9GYWRlJztcclxuaW1wb3J0IE1vZGFsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01vZGFsJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcywgVGhlbWUsIGNyZWF0ZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBCYWNrZHJvcCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CYWNrZHJvcCc7XHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcclxuXHJcbmNvbnN0IGF2YXRhclN0eWxlOlJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XHJcblx0bWFyZ2luOiAxMCxcclxuICAgIHdpZHRoOiA4MCxcclxuICAgIGhlaWdodDogODAsXHJcbn1cclxuY29uc3QgdXNlcm5hbWVTdHlsZTpSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xyXG5cdGZvbnRTaXplOiBcIjEycHhcIixcclxuXHRtYXJnaW46IFwiMHB4IDBweCAwcHggMjBweFwiLFxyXG59XHJcbmNvbnN0IHRpdGxlU3R5bGU6UmVhY3QuQ1NTUHJvcGVydGllcyA9IHtcclxuXHRtYXJnaW46IFwiNXB4IDBweCAwcHggNXB4XCIsXHJcblx0cGFkZGluZzogXCIwcHggMHB4IDBweCAwcHhcIixcclxuXHRjb2xvcjogXCJibGFja1wiLFxyXG59XHJcbmNvbnN0IGNyZWF0ZVBvc3RCdG5TdHlsZTpSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xyXG5cdGhlaWdodDogXCIzOHB4XCJcclxufVxyXG5cclxuaW50ZXJmYWNlIEZvcnVtSXRlbVByb3BzIHtcclxuXHRzcmM6IHN0cmluZztcclxuXHR0aXRsZTogc3RyaW5nO1xyXG5cdGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcblx0dXNlcm5hbWU6IHN0cmluZztcclxuXHRkYXRlOiBzdHJpbmc7XHJcblx0YXV0aGVudGljYXRlZDogYm9vbGVhbjtcclxuXHRteV91c2VybmFtZTogc3RyaW5nIHwgbnVsbDtcclxuXHRteV9wYXNzd29yZDogc3RyaW5nIHwgbnVsbDtcclxufVxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+XHJcbiAgY3JlYXRlU3R5bGVzKHtcclxuICAgIHBhcGVyOiB7XHJcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICB3aWR0aDogNDAwLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcclxuICAgICAgYm9yZGVyOiAnMnB4IHNvbGlkICMwMDAnLFxyXG4gICAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbNV0sXHJcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiwgNCwgMyksXHJcbiAgICB9LFxyXG5cdG1vZGFsOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgIH0sXHJcblx0dGV4dEZpZWxkOiB7XHJcblx0XHR3aWR0aDogXCIxMDAlXCJcclxuXHR9XHJcbiAgfSksXHJcbik7XHJcbmV4cG9ydCBjbGFzcyBGb3J1bUl0ZW0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8Rm9ydW1JdGVtUHJvcHM+IHtcclxuXHRcclxuXHRcclxuXHRyZW5kZXIoKXtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdFxyXG5cdFx0XHRcdDxQYXBlcj5cclxuXHRcdFx0XHQ8R3JpZCBjb250YWluZXIgaXRlbSB4cz17MTJ9PlxyXG5cdFx0XHRcdFx0PEdyaWQgaXRlbSB4cz17Mn0ganVzdGlmeT1cImNlbnRlclwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cclxuXHRcdFx0XHRcdFx0PEdyaWQgaXRlbSBqdXN0aWZ5PVwiY2VudGVyXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiPlxyXG5cdFx0XHRcdFx0XHRcdDxHcmlkIGp1c3RpZnk9XCJjZW50ZXJcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XHJcblx0ICAgICAgXHRcdFx0XHRcdFx0PEF2YXRhciBhbHQ9XCJBdmF0YXIgaW1hZ2VcIiBzcmM9e2BodHRwOi8vbG9jYWxob3N0OjgwODAvdXBsb2FkL3VzZXIvJHt0aGlzLnByb3BzLnVzZXJuYW1lfWB9IHN0eWxlPXthdmF0YXJTdHlsZX0gLz5cclxuXHRcdFx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHRcdFx0PEdyaWQganVzdGlmeT1cImNlbnRlclwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGd1dHRlckJvdHRvbT5cclxuXHRcdCAgICAgICAgXHRcdFx0XHRcdHt0aGlzLnByb3BzLnVzZXJuYW1lfVxyXG5cdFx0ICAgICAgXHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cclxuXHRcdFx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHRcdDwvR3JpZD5cclxuICAgIFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0PEdyaWQgaXRlbSB4cz17MTB9IGp1c3RpZnk9XCJmbGV4LXN0YXJ0XCIgYWxpZ25JdGVtcz1cImZsZXgtc3RhcnRcIiB6ZXJvTWluV2lkdGg+XHJcblx0XHRcdFx0XHRcdDxMaW5rIHN0eWxlPXt0aXRsZVN0eWxlfSB0bz17e3BhdGhuYW1lOiBgL0ZvcnVtL1Bvc3QvP3RpdGxlPSR7dGhpcy5wcm9wcy50aXRsZX1gLFxyXG5cdFx0XHRcdFx0XHRcdHN0YXRlOiB7XHJcblx0XHRcdFx0XHRcdFx0XHRzcmM6IHRoaXMucHJvcHMuc3JjLFxyXG5cdFx0XHRcdFx0XHRcdFx0ZGVzY3JpcHRpb246IHRoaXMucHJvcHMuZGVzY3JpcHRpb24sXHJcblx0XHRcdFx0XHRcdFx0XHR1c2VybmFtZTogdGhpcy5wcm9wcy51c2VybmFtZSxcclxuXHRcdFx0XHRcdFx0XHRcdHRpbWU6IHRoaXMucHJvcHMuZGF0ZVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fX0+XHJcblx0XHRcdFx0XHRcdFx0PFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCIgZ3V0dGVyQm90dG9tPlxyXG5cdFx0ICAgICAgICBcdFx0XHRcdFx0e3RoaXMucHJvcHMudGl0bGV9XHJcblx0XHQgICAgICBcdFx0XHRcdDwvVHlwb2dyYXBoeT5cclxuXHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHQ8cCBzdHlsZT17e3dvcmRXcmFwOiBcImJyZWFrLXdvcmRcIiwgb3ZlcmZsb3c6XCJoaWRkZW5cIn19Pnt0aGlzLnByb3BzLmRlc2NyaXB0aW9ufTwvcD5cclxuXHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHQ8L1BhcGVyPlxyXG5cdFx0XHRcclxuXHRcdClcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIENvbW1lbnRNb2RhbCAocHJvcHM6IGFueSkge1xyXG5cdGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHRjb25zdCBkZXNjcmlwdGlvblJlZjogYW55ID0gUmVhY3QuY3JlYXRlUmVmKCk7XHJcblx0Y29uc3QgW3RleHRMaW1pdCwgc2V0VGV4dExpbWl0XSA9IFJlYWN0LnVzZVN0YXRlKDI1NSk7XHJcblx0XHJcbiAgXHRjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgdGl0bGVSZWY6YW55ID0gUmVhY3QuY3JlYXRlUmVmKCk7XHJcblx0ICBjb25zdCBoYW5kbGVPcGVuID0gKCkgPT4ge1xyXG5cdFx0aWYgKHByb3BzLmF1dGhlbnRpY2F0ZWQpe1xyXG5cdFx0XHRzZXRPcGVuKHRydWUpO1x0XHJcblx0XHR9ZWxzZSB7XHJcblx0XHRcdGFsZXJ0KFwibG9naW4gdG8gbWFrZSBhIHBvc3RcIilcclxuXHRcdH1cclxuXHQgICAgXHJcblx0ICB9O1xyXG5cclxuXHQgIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG5cdCAgICBzZXRPcGVuKGZhbHNlKTtcclxuXHQgIH07XHJcblx0Y29uc3QgdGV4dExpbWl0Q2hhbmdlID0gKGV2ZW50OiBhbnkpID0+IHtcclxuXHRcdHNldFRleHRMaW1pdCgyNTUgLSBldmVudC50YXJnZXQudmFsdWUubGVuZ3RoKVxyXG5cdH1cclxuXHRcdGZ1bmN0aW9uIHBvc3RCdG4gKGU6IGFueSkge1xyXG5cdFx0Y29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcclxuXHRcdGlmICh0b2tlbikge1xyXG5cdFx0XHRjb25zdCByZXNwb25zZSA9IHBvc3QoXCIvZm9ydW0vcG9zdFwiLCBKU09OLnN0cmluZ2lmeSh7dXNlcm5hbWU6dG9rZW4uc3BsaXQoXCI/XCIpWzBdLCB0aXRsZTp0aXRsZVJlZi5jdXJyZW50LnZhbHVlLCBkZXNjcmlwdGlvbjpkZXNjcmlwdGlvblJlZi5jdXJyZW50LnZhbHVlfSksIHRydWUpO1xyXG5cdFx0XHRyZXNwb25zZS5vbmxvYWQgPSAoKSA9PiB7XHJcblx0XHRcdFx0aWYgKHJlc3BvbnNlLnJlc3BvbnNlVGV4dC5pbmNsdWRlcyhcIlN1Y2Nlc3NcIikpe1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCJ0ZXh0OiBcIiArIHJlc3BvbnNlLnJlc3BvbnNlVGV4dClcclxuXHRcdFx0XHRcdHByb3BzLm9uSGlkZSgpO1xyXG5cdFx0XHRcdFx0d2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJDcmVhdGUgYW4gYWNjb3VudCBvciBsb2dpbiB0byBtYWtlIGEgcG9zdC5cIilcclxuXHRcdH1cclxuXHR9XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcclxuXHRcdFx0PGRpdj5cclxuXHRcdFx0XHQ8QnV0dG9uIHN0eWxlPXtjcmVhdGVQb3N0QnRuU3R5bGV9IFxyXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXtoYW5kbGVPcGVufVxyXG5cdFx0XHRcdFx0XHR2YXJpYW50PVwiY29udGFpbmVkXCJcclxuXHRcdFx0XHRcdCBcdGNvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgICAgIFx0XHRcdFx0XHRDcmVhdGUgUG9zdFxyXG4gICAgICBcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdCAgICAgIDxNb2RhbFxyXG5cdFx0ICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJ0cmFuc2l0aW9uLW1vZGFsLXRpdGxlXCJcclxuXHRcdCAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cInRyYW5zaXRpb24tbW9kYWwtZGVzY3JpcHRpb25cIlxyXG5cdFx0ICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubW9kYWx9XHJcblx0XHQgICAgICAgIG9wZW49e29wZW59XHJcblx0XHQgICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxyXG5cdFx0ICAgICAgICBjbG9zZUFmdGVyVHJhbnNpdGlvblxyXG5cdFx0ICAgICAgICBCYWNrZHJvcENvbXBvbmVudD17QmFja2Ryb3B9XHJcblx0XHQgICAgICAgIEJhY2tkcm9wUHJvcHM9e3tcclxuXHRcdCAgICAgICAgICB0aW1lb3V0OiA1MDAsXHJcblx0XHQgICAgICAgIH19XHJcblx0XHQgICAgICA+XHJcblx0XHQgICAgICAgIDxGYWRlIGluPXtvcGVufT5cclxuXHRcdCAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XHJcblx0XHRcdFx0XHQ8Zm9ybSBub1ZhbGlkYXRlIGF1dG9Db21wbGV0ZT1cIm9mZlwiPlxyXG5cdFx0XHRcdCAgICAgIDxoMiBpZD1cInRyYW5zaXRpb24tbW9kYWwtdGl0bGVcIj5DcmVhdGUgYSBwb3N0PC9oMj5cclxuXHRcdFx0XHRcdFx0PEdyaWQgeHM9ezEyfT5cclxuXHRcdFx0XHQgICAgICA8VGV4dEZpZWxkIGlucHV0UmVmPXt0aXRsZVJlZn0gaWQ9XCJvdXRsaW5lZC1iYXNpY1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9IGxhYmVsPVwiVGl0bGVcIiB2YXJpYW50PVwib3V0bGluZWRcIiAvPlxyXG5cdFx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHRcdDxHcmlkIHhzPXsxMn0+XHJcblx0XHRcdFx0XHRcdFx0PFRleHRGaWVsZFxyXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhldmVudCkgPT4gdGV4dExpbWl0Q2hhbmdlKGV2ZW50KX1cclxuXHRcdFx0XHRcdFx0XHRcdGlucHV0UmVmPXtkZXNjcmlwdGlvblJlZn1cclxuXHRcdFx0XHRcdCAgICAgICAgICBpZD1cIm91dGxpbmVkLW11bHRpbGluZS1zdGF0aWNcIlxyXG5cdFx0XHRcdFx0ICAgICAgICAgIGxhYmVsPVwiRGVzY3JpcHRpb25cIlxyXG5cdFx0XHRcdFx0ICAgICAgICAgIG11bHRpbGluZVxyXG5cdFx0XHRcdFx0ICAgICAgICAgIHJvd3M9XCI0XCJcclxuXHRcdFx0XHRcdCAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxyXG5cdFx0XHRcdFx0ICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcblx0XHRcdFx0XHQgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuXHRcdFx0XHRcdCAgICAgICAgLz5cclxuXHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0XHQ8R3JpZCBjb250YWluZXIgeHM9ezEyfSBqdXN0aWZ5PVwiZmxleC1lbmRcIiBhbGlnbkl0ZW1zPVwiZmxleC1lbmRcIj5cclxuXHRcdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJwXCI+XHJcblx0XHRcdFx0XHRcdFx0XHR7dGV4dExpbWl0fVxyXG5cdFx0XHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cclxuXHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0XHQ8R3JpZCB4cz17MTJ9PlxyXG5cdFx0XHRcdFx0XHRcdDxCdXR0b24gb25DbGljaz17KCkgPT4gc2V0T3BlbihmYWxzZSl9PkNsb3NlPC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdFx0PEJ1dHRvbiBvbkNsaWNrPXtwb3N0QnRufSB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJwcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiPlBvc3Q8L0J1dHRvbj5cclxuXHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdCAgICA8L2Zvcm0+XHJcblx0XHRcdFx0XHRcclxuXHRcdCAgICAgICAgICA8L2Rpdj5cclxuXHRcdCAgICAgICAgPC9GYWRlPlxyXG5cdFx0ICAgICAgPC9Nb2RhbD5cclxuXHRcdCAgICA8L2Rpdj5cclxuXHRcdCk7XHJcblx0fVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3J1bSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxGb3J1bVByb3BzLCBGb3J1bVN0YXRlPiB7XHJcblx0cHVibGljIHN0YXRlOkZvcnVtU3RhdGUgPSB7XHJcbiAgICAgIGRhdGE6IFtdLFxyXG4gICAgICBzaG93UG9zdE1vZGFsOiBmYWxzZVxyXG4gICAgfVxyXG4gIFx0Y29uc3RydWN0b3IocHJvcHM6Rm9ydW1Qcm9wcyl7XHJcblx0ICAgIHN1cGVyKHByb3BzKTtcclxuXHRcdGNvbnN0IHJlc3BvbnNlID0gZ2V0KFwiL2ZvcnVtL2dldFwiKTtcclxuXHRcdHJlc3BvbnNlLm9ubG9hZCA9ICgpID0+IHtcclxuXHRcdFx0dmFyIGpzb25BcnJheSA9IEpTT04ucGFyc2UocmVzcG9uc2UucmVzcG9uc2VUZXh0KTtcclxuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IGRhdGE6IGpzb25BcnJheX0pXHJcblx0XHR9XHJcblx0fVxyXG5cdHJlbmRlcigpe1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PFJlYWN0LkZyYWdtZW50PlxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdDxDb250YWluZXI+XHJcblx0XHRcdFx0XHQ8R3JpZCBpdGVtIHhzPXsxMn0gY29udGFpbmVyIGp1c3RpZnk9XCJmbGV4LWVuZFwiIGFsaWduSXRlbXM9XCJmbGV4LWVuZFwiPlxyXG5cdFx0XHRcdFx0XHQ8Q29tbWVudE1vZGFsIGF1dGhlbnRpY2F0ZWQ9e3RoaXMucHJvcHMuYXV0aGVudGljYXRlZH0vPlxyXG5cdFx0XHRcdFx0XHQgXHJcblx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0PC9Db250YWluZXI+PGJyLz5cclxuXHRcdFx0XHQ8RGl2aWRlciAvPlxyXG5cdFx0XHRcdDxHcmlkTGlzdCBjZWxsSGVpZ2h0PXsxNjB9IGNvbHM9ezEyfT5cclxuXHRcdFx0XHRcdHsodGhpcy5zdGF0ZS5kYXRhKS5tYXAoKGRhdGE6IGFueSkgPT5cclxuXHRcdFx0XHRcdFx0PEdyaWRMaXN0VGlsZSBrZXk9e2RhdGEuZGF0ZX0gY29scz17MTJ9PlxyXG5cdFx0XHRcdFx0XHRcdDxGb3J1bUl0ZW0gbXlfdXNlcm5hbWU9e3RoaXMucHJvcHMubXlfdXNlcm5hbWV9IG15X3Bhc3N3b3JkPXt0aGlzLnByb3BzLm15X3Bhc3N3b3JkfSBhdXRoZW50aWNhdGVkPXt0aGlzLnByb3BzLmF1dGhlbnRpY2F0ZWR9IGRhdGU9e2RhdGEuZGF0ZX0gdGl0bGU9e2RhdGEudGl0bGV9IGtleT17ZGF0YS5kYXRlfSB1c2VybmFtZT17ZGF0YS51c2VybmFtZX0gZGVzY3JpcHRpb249e2RhdGEuZGVzY3JpcHRpb259IHNyYz17ZGF0YS5wYXRofS8+XHJcblx0XHRcdFx0XHRcdDwvR3JpZExpc3RUaWxlPlxyXG5cdFx0XHRcdFx0KX1cclxuXHRcdFx0XHQ8L0dyaWRMaXN0PlxyXG5cdFx0XHQ8L1JlYWN0LkZyYWdtZW50PlxyXG5cdFx0KTtcclxuXHR9XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBGb3J1bVByb3BzIHtcclxuXHRhdXRoZW50aWNhdGVkOiBib29sZWFuO1xyXG5cdG15X3VzZXJuYW1lOiBzdHJpbmcgfCBudWxsO1xyXG5cdG15X3Bhc3N3b3JkOiBzdHJpbmcgfCBudWxsO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgRm9ydW1TdGF0ZSB7XHJcbiAgICBkYXRhOiBhbnk7XHJcbiAgICBzaG93UG9zdE1vZGFsOiBib29sZWFuO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=