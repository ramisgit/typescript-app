webpackHotUpdateumd("main",{

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


/***/ }),

/***/ "./src/components/static/Snack.tsx":
/*!*****************************************!*\
  !*** ./src/components/static/Snack.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const clsx_1 = __importDefault(__webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js"));
const CheckCircle_1 = __importDefault(__webpack_require__(/*! @material-ui/icons/CheckCircle */ "./node_modules/@material-ui/icons/CheckCircle.js"));
const Error_1 = __importDefault(__webpack_require__(/*! @material-ui/icons/Error */ "./node_modules/@material-ui/icons/Error.js"));
const Info_1 = __importDefault(__webpack_require__(/*! @material-ui/icons/Info */ "./node_modules/@material-ui/icons/Info.js"));
const Close_1 = __importDefault(__webpack_require__(/*! @material-ui/icons/Close */ "./node_modules/@material-ui/icons/Close.js"));
const colors_1 = __webpack_require__(/*! @material-ui/core/colors */ "./node_modules/@material-ui/core/esm/colors/index.js");
const IconButton_1 = __importDefault(__webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js"));
const Snackbar_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Snackbar */ "./node_modules/@material-ui/core/esm/Snackbar/index.js"));
const SnackbarContent_1 = __importDefault(__webpack_require__(/*! @material-ui/core/SnackbarContent */ "./node_modules/@material-ui/core/esm/SnackbarContent/index.js"));
const Warning_1 = __importDefault(__webpack_require__(/*! @material-ui/icons/Warning */ "./node_modules/@material-ui/icons/Warning.js"));
const styles_1 = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
const variantIcon = {
    success: CheckCircle_1.default,
    warning: Warning_1.default,
    error: Error_1.default,
    info: Info_1.default,
};
const useStyles1 = styles_1.makeStyles((theme) => ({
    success: {
        backgroundColor: colors_1.green[600],
    },
    error: {
        backgroundColor: theme.palette.error.dark,
    },
    info: {
        backgroundColor: theme.palette.primary.main,
    },
    warning: {
        backgroundColor: colors_1.amber[700],
    },
    icon: {
        fontSize: 20,
    },
    iconVariant: {
        opacity: 0.9,
        marginRight: theme.spacing(1),
    },
    message: {
        display: 'flex',
        alignItems: 'center',
    },
}));
function MySnackbarContentWrapper(props) {
    const classes = useStyles1();
    const { className, message, onClose, variant } = props, other = __rest(props, ["className", "message", "onClose", "variant"]);
    const Icon = variantIcon[variant];
    return (react_1.default.createElement(SnackbarContent_1.default, Object.assign({ className: clsx_1.default(classes[variant], className), "aria-describedby": "client-snackbar", message: react_1.default.createElement("span", { id: "client-snackbar", className: classes.message },
            react_1.default.createElement(Icon, { className: clsx_1.default(classes.icon, classes.iconVariant) }),
            message), action: [
            react_1.default.createElement(IconButton_1.default, { key: "close", "aria-label": "close", color: "inherit", onClick: onClose },
                react_1.default.createElement(Close_1.default, { className: classes.icon })),
        ] }, other)));
}
const useStyles2 = styles_1.makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
}));
function CustomizedSnackbars(props) {
    const classes = useStyles2();
    let val = props.open;
    let [open, setOpen] = react_1.default.useState(val);
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        props.openHandler(false);
    };
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(Snackbar_1.default, { anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'left',
            }, open: props.open, autoHideDuration: 6000, onClose: handleClose },
            react_1.default.createElement(MySnackbarContentWrapper, { onClose: handleClose, variant: props.varient, message: props.message, className: classes.margin }))));
}
exports.default = CustomizedSnackbars;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91bWQvLi9zcmMvY29tcG9uZW50cy9wYWdlcy9JbmRleC50c3giLCJ3ZWJwYWNrOi8vdW1kLy4vc3JjL2NvbXBvbmVudHMvc3RhdGljL1NuYWNrLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtR0FBeUI7QUFFekIsK0ZBQTRDO0FBQzVDLHVKQUFvRDtBQUNwRCw4SUFBOEM7QUFDOUMsd0lBQTBDO0FBQzFDLDZIQUEyRTtBQUMzRSwySUFBNEM7QUFDNUMsb0pBQWtEO0FBQ2xELHdJQUEwQztBQUMxQyxzS0FBOEQ7QUFDOUQsMklBQTRDO0FBQzVDLHVKQUFvRDtBQUNwRCw2SkFBd0Q7QUFDeEQsMklBQTRDO0FBQzVDLDBKQUFzRDtBQUV0RCw0S0FBa0U7QUFDbEUsdUpBQW9EO0FBQ3BELHVKQUFvRDtBQUNwRCwwSkFBc0Q7QUFDdEQsaUhBQW9DO0FBRXBDLE1BQU0sU0FBUyxHQUFHLG1CQUFVLENBQUMsQ0FBQyxLQUFZLEVBQUUsRUFBRSxDQUM3QyxxQkFBWSxDQUFDO0lBQ1osS0FBSyxFQUFFO1FBQ04sT0FBTyxFQUFFLE1BQU07UUFDZixVQUFVLEVBQUUsUUFBUTtRQUNwQixjQUFjLEVBQUUsUUFBUTtLQUN4QjtJQUNELEtBQUssRUFBRTtRQUNOLGVBQWUsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxLQUFLO1FBQy9DLE1BQU0sRUFBRSxnQkFBZ0I7UUFDeEIsU0FBUyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQzNCLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQy9CO0lBQ0QsSUFBSSxFQUFFO1FBQ0wsS0FBSyxFQUFFLE1BQU07UUFDYixXQUFXLEVBQUU7WUFDWixTQUFTLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7U0FDM0I7S0FDRDtJQUNELFNBQVMsRUFBRTtR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QUU7Z0JBQ3RCLFFBQVEsRUFBRSxRQUFRO2dCQUNsQixVQUFVLEVBQUUsTUFBTTthQUNsQixFQUNELElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxFQUNoQixnQkFBZ0IsRUFBRSxJQUFJLEVBQ3RCLE9BQU8sRUFBRSxXQUFXO1lBRXBCLDhCQUFDLHdCQUF3QixJQUN4QixPQUFPLEVBQUUsV0FBVyxFQUNwQixPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFDdEIsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPLEVBQ3RCLFNBQVMsRUFBRSxPQUFPLENBQUMsTUFBTSxHQUN4QixDQUNRLENBRU4sQ0FDTixDQUFDO0FBQ0gsQ0FBQztBQS9CRCxzQ0ErQkMiLCJmaWxlIjoibWFpbi5jODk4YWNiYWVjMDQxMmQ4ZGJmNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0IHsgcG9zdCwgZ2V0IH0gZnJvbSAnLi4vc3RhdGljL2F4aW9zJztcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXInO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzLCBUaGVtZSwgY3JlYXRlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IE1vZGFsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01vZGFsJztcclxuaW1wb3J0IEJhY2tkcm9wIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0JhY2tkcm9wJztcclxuaW1wb3J0IEZhZGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRmFkZSc7XHJcbmltcG9ydCBMaW5lYXJQcm9ncmVzcyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaW5lYXJQcm9ncmVzcyc7XHJcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XHJcbmltcG9ydCBGb3JtR3JvdXAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUdyb3VwJztcclxuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sJztcclxuaW1wb3J0IFJhZGlvIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1JhZGlvJztcclxuaW1wb3J0IFJhZGlvR3JvdXAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUmFkaW9Hcm91cCc7XHJcbmltcG9ydCBGb3JtSGVscGVyVGV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtSGVscGVyVGV4dCc7XHJcbmltcG9ydCBGb3JtQ29udHJvbExhYmVsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sTGFiZWwnO1xyXG5pbXBvcnQgRm9ybUxhYmVsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1MYWJlbCc7XHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCBTbmFjayBmcm9tICcuLi9zdGF0aWMvU25hY2snO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PlxyXG5cdGNyZWF0ZVN0eWxlcyh7XHJcblx0XHRtb2RhbDoge1xyXG5cdFx0XHRkaXNwbGF5OiAnZmxleCcsXHJcblx0XHRcdGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG5cdFx0XHRqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcblx0XHR9LFxyXG5cdFx0cGFwZXI6IHtcclxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXHJcblx0XHRcdGJvcmRlcjogJzJweCBzb2xpZCAjMDAwJyxcclxuXHRcdFx0Ym94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzVdLFxyXG5cdFx0XHRwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIsIDQsIDMpLFxyXG5cdFx0fSxcclxuXHRcdHJvb3Q6IHtcclxuXHRcdFx0d2lkdGg6ICcxMDAlJyxcclxuXHRcdFx0JyYgPiAqICsgKic6IHtcclxuXHRcdFx0XHRtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMiksXHJcblx0XHRcdH0sXHJcblx0XHR9LFxyXG5cdFx0dGV4dEZpZWxkOiB7XHJcblx0XHRcdG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMSksXHJcblx0XHRcdG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDEpLFxyXG5cdFx0XHR3aWR0aDogXCIxMDAlXCJcclxuXHRcdH0sXHJcblx0XHRmb3JtQ29udHJvbDoge1xyXG5cdFx0XHRtYXJnaW46IHRoZW1lLnNwYWNpbmcoMyksXHJcblx0XHR9LFxyXG5cdFx0aW5wdXRGb3JtOiB7XHJcblx0XHRcdHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuXHRcdFx0cGFkZGluZzogXCIzMHB4IDAgMCAwXCIsXHJcblx0XHRcdHdpZHRoOiBcIjEwMHZ3XCIsXHJcblx0XHRcdG1hcmdpbjogXCIwcHggYXV0byA1MHB4IGF1dG9cIixcclxuXHRcdH0sXHJcblx0XHRmb3JtOiB7XHJcblx0XHRcdG1hcmdpbjogXCIwcHggYXV0byAxMHB4IGF1dG9cIixcclxuXHRcdFx0d2lkdGg6IFwiMTAwJVwiXHJcblx0XHR9LFxyXG5cdFx0aW5wdXRGb3JtSW5wdXQ6IHtcclxuXHRcdFx0d2lkdGg6IFwiODUlXCIsXHJcblx0XHRcdGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXHJcblx0XHR9LFxyXG5cdFx0aW5wdXRGb3JtQnV0dG9uOiB7XHJcblx0XHRcdGhlaWdodDogXCIxMDAlXCIsXHJcblx0XHRcdG1hcmdpbjogXCIwcHhcIixcclxuXHRcdH1cclxuXHR9KSxcclxuKTtcclxuXHJcbmludGVyZmFjZSBQcm9ncmVzc1Byb3BzIHtcclxuXHRwcm9ncmVzc1ZhbHVlOiBudW1iZXI7XHJcbn1cclxuZnVuY3Rpb24gUHJvZ3Jlc3NCYXIocHJvcHM6IFByb2dyZXNzUHJvcHMpIHtcclxuXHRjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblx0Y29uc3QgW2NvbXBsZXRlZCwgc2V0Q29tcGxldGVkXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xyXG5cclxuXHRSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0ZnVuY3Rpb24gcHJvZ3Jlc3MoKSB7XHJcblx0XHRcdHNldENvbXBsZXRlZChvbGRDb21wbGV0ZWQgPT4ge1xyXG5cdFx0XHRcdGlmIChvbGRDb21wbGV0ZWQgPT09IDEwMCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIDA7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHJldHVybiBNYXRoLm1pbihwcm9wcy5wcm9ncmVzc1ZhbHVlLCAxMDApO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCB0aW1lciA9IHNldEludGVydmFsKHByb2dyZXNzLCA1MDApO1xyXG5cdFx0cmV0dXJuICgpID0+IHtcclxuICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcik7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICA8TGluZWFyUHJvZ3Jlc3MgdmFyaWFudD1cImRldGVybWluYXRlXCIgdmFsdWU9e2NvbXBsZXRlZH0gLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcblxyXG5pbnRlcmZhY2UgbG9hZGluZ01vZGFsUHJvcHMge1xyXG5cdHByb2dyZXNzOiBzdHJpbmc7XHJcblx0b25IaWRlOiAoKSA9PiB2b2lkO1xyXG5cdHNob3c6IGJvb2xlYW47XHJcbn1cclxuXHJcbmZ1bmN0aW9uIExvYWRpbmdNb2RhbChwcm9wczogbG9hZGluZ01vZGFsUHJvcHMpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuIFxyXG5cclxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcclxuICAgIHNldE9wZW4oZmFsc2UpO1xyXG4gIH07XHJcblx0aWYgKHByb3BzLnNob3cpe1xyXG5cdFx0c2V0T3Blbih0cnVlKTtcclxuXHR9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cInRyYW5zaXRpb24tbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJ0cmFuc2l0aW9uLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubW9kYWx9XHJcbiAgICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICBjbG9zZUFmdGVyVHJhbnNpdGlvblxyXG4gICAgICAgIEJhY2tkcm9wQ29tcG9uZW50PXtCYWNrZHJvcH1cclxuICAgICAgICBCYWNrZHJvcFByb3BzPXt7XHJcbiAgICAgICAgICB0aW1lb3V0OiA1MDAsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxGYWRlIGluPXtvcGVufT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfT5cclxuICAgICAgICAgICAgPGgyIGlkPVwidHJhbnNpdGlvbi1tb2RhbC10aXRsZVwiPkRvd25sb2FkaW5nIHlvdXIgZmlsZTwvaDI+XHJcblx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5Mb2FkaW5nPC9zcGFuPlxyXG5cdFx0XHQ8UHJvZ3Jlc3NCYXIgcHJvZ3Jlc3NWYWx1ZT17cGFyc2VJbnQocHJvcHMucHJvZ3Jlc3MpfS8+XHJcbiAgICAgICAgPGg0PkRvd25sb2FkaW5nLi4uIHtwcm9wcy5wcm9ncmVzc30gJTwvaDQ+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICBQbGVhc2Ugd2FpdCB3aGlsZSB5b3VyIGZpbGUgaXMgYmVpbmcgZG93bmxvYWRlZC4gRmVlbCBmcmVlIHRvIHVzZSB0aGlzIHNlcnZpY2UgYXMgbWFueVxyXG4gICAgICAgICAgdGltZXMgYXMgeW91IHdhbnQuPGJyLz5cclxuXHJcbiAgICAgICAgICBBIGJ1dHRvbiBsaW5rIHdpbGwgYmUgcHJvdmlkZWQgc2hvcnRseS4uLi5cclxuICAgICAgICA8L3A+XHJcblx0XHQ8QnV0dG9uIG9uQ2xpY2s9e3Byb3BzLm9uSGlkZX0+Q2xvc2U8L0J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvRmFkZT5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBTdWJtaXRGb3JtKCkge1xyXG5cdGNvbnN0IGNvbnRhaW5lclJlZjphbnkgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuXHRjb25zdCBnZXRSZWY6IGFueSA9IFJlYWN0LmNyZWF0ZVJlZigpO1xyXG5cdGNvbnN0IHdhcm5pbmdSZWY6IGFueSA9IFJlYWN0LmNyZWF0ZVJlZigpO1xyXG5cdGNvbnN0IGRvd25sb2FkQnRuUmVmOiBhbnkgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuXHRcclxuXHRjb25zdCBbZXh0LCBzZXRFeHRdID0gUmVhY3QudXNlU3RhdGUoXCJtcDRcIik7XHJcblx0Y29uc3QgW3R5cGUsIHNldFR5cGVdID0gUmVhY3QudXNlU3RhdGUoXCJBdWRpb1wiKTtcclxuXHRjb25zdCBbc2hvd0xvYWRpbmcsIHNldFNob3dMb2FkaW5nXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBbbG9hZGluZ1Byb2dyZXNzLCBzZXRMb2FkaW5nUHJvZ3Jlc3NdID0gUmVhY3QudXNlU3RhdGUoXCIwXCIpO1xyXG5cdGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuXHRcdGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG5cdGNvbnN0IFt2YXJpZW50LCBzZXRWYXJpZW50XSA9IFJlYWN0LnVzZVN0YXRlPFwic3VjY2Vzc1wiIHwgXCJlcnJvclwiIHwgXCJ3YXJuaW5nXCIgfCBcImluZm9cIj4oXCJpbmZvXCIpO1xyXG5cdGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZVR5cGUgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XHJcbiAgICBzZXRUeXBlKChldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUpO1xyXG4gIH07XHJcblx0Y29uc3QgaGFuZGxlQ2hhbmdlRXh0ID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xyXG4gICAgc2V0RXh0KChldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUpO1xyXG4gIH07XHRcclxuXHRcclxuXHQgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlQWxlcnRTaG93IChldmVudDogYW55LCBzaG93OiBib29sZWFuKSB7XHJcblx0XHRzZXRPcGVuKHNob3cpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gb3BlbkhhbmRsZXIodmFsOiBib29sZWFuKSB7XHJcbiAgICAgICAgc2V0T3Blbih2YWwpO1xyXG4gICAgfVxyXG5cdGZ1bmN0aW9uIGdldCAoZTogYW55KSB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRzZXRPcGVuKGZhbHNlKTtcclxuXHRcdHZhciB3YXJuaW5nID0gd2FybmluZ1JlZi5jdXJyZW50O1xyXG5cdFx0dmFyIFVSTGlucHV0ID0gZ2V0UmVmLmN1cnJlbnQudmFsdWUuc3BsaXQoXCI9XCIpWzFdO1xyXG5cdFx0aWYgKFVSTGlucHV0ID09PSB1bmRlZmluZWQgfHwgbnVsbCl7XHJcblx0XHRcdHNldFZhcmllbnQoXCJ3YXJuaW5nXCIpO1xyXG5cdFx0XHRzZXRNZXNzYWdlKFwiSW52YWxpZCB1cmwgdHJ5IGFub3RoZXIgb3IgbG9vayBjYXJlZnVsbHkgdG8gY29ycmVjdCBpdC5cIik7XHJcblx0XHRcdHNldE9wZW4odHJ1ZSk7XHJcblx0ICBcdH0gZWxzZSB7XHJcblx0XHRcdFxyXG5cdFx0XHRjb25zdCByZXNwb25zZSA9IHBvc3QoXCIvZG93bmxvYWRcIiwgSlNPTi5zdHJpbmdpZnkoe3VybDpVUkxpbnB1dCwgdHlwZTp0eXBlLCBleHRlbnNpb246ZXh0fSksIHRydWUpO1xyXG5cdFx0XHRyZXNwb25zZS5vbmxvYWQgPSAoKSA9PiB7XHJcblx0XHRcdFx0dmFyIHNzZTpFdmVudFNvdXJjZSA9IG5ldyBFdmVudFNvdXJjZShcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9kb3dubG9hZC9zc2VcIik7XHJcblx0XHQgIFx0XHRzc2Uub25vcGVuID0gKCkgPT4ge1xyXG5cdFx0XHRcdFx0c2V0U2hvd0xvYWRpbmcodHJ1ZSk7XHJcblx0XHQgIFx0XHR9XHJcblx0ICBcdFx0XHRzc2Uub25tZXNzYWdlID0gZXZ0ID0+IHtcclxuXHRcdFx0XHRcdHNldExvYWRpbmdQcm9ncmVzcyhldnQuZGF0YSk7XHJcblx0ICAgICAgICBcdFx0aWYgKGV2dC5kYXRhID09PSBcIjEwMFwiKXtcclxuXHRcdFx0XHRcdFx0c2V0U2hvd0xvYWRpbmcoZmFsc2UpXHJcblx0ICAgICAgICAgIFx0XHRcdHZhciB1cmw6c3RyaW5nID0gXCJodHRwOi8vbG9jYWxob3N0OjgwODAvZG93bmxvYWQvdmlkZW8vXCIgKyBVUkxpbnB1dDtcclxuXHQgICAgICAgICAgXHRcdFx0ZG93bmxvYWRCdG5SZWYuY3VycmVudC52YWx1ZSA9IHVybDtcclxuXHQgICAgICAgICAgXHRcdFx0Y29udGFpbmVyUmVmLmN1cnJlbnQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuXHQgICAgICAgICAgXHRcdFx0c3NlLmNsb3NlKCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHNzZS5vbmVycm9yID0gKCkgPT4ge1xyXG4gIFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIkV2ZW50U291cmNlIGZhaWxlZC5cIik7XHJcblx0XHRcdFx0XHRzZXRTaG93TG9hZGluZyhmYWxzZSk7XHJcblx0XHRcdFx0XHR3YXJuaW5nLmlubmVySFRNTCA9IFwiRmFpbGVkIHRvIGVzdGFibGlzaCBjb25uZWN0aW9uIHRvIHNlcnZlclwiO1xyXG4gIFx0XHRcdFx0XHR3YXJuaW5nLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgXHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiQ2xvc2luZyBjb25uZWN0b24uLi5cIik7XHJcbiAgXHRcdFx0XHRcdHNzZS5jbG9zZSgpO1xyXG4gIFx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcbiAgXHRcdH1cclxuICBcdH1cclxuICBcdGZ1bmN0aW9uIGRvd25sb2FkRnJvbVNlcnZlciAoKSB7XHJcbiAgICBcdHZhciB1cmw6c3RyaW5nID0gZG93bmxvYWRCdG5SZWYuY3VycmVudC52YWx1ZTtcclxuICAgIFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XHJcblx0fVxyXG5cdHJldHVybiAoXHJcblx0XHQ8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDxTbmFjayBvcGVuSGFuZGxlcj17b3BlbkhhbmRsZXJ9IG9wZW49e29wZW59IHZhcmllbnQ9e3ZhcmllbnR9IG1lc3NhZ2U9e21lc3NhZ2V9Lz5cclxuXHRcdFx0PEdyaWQgY29udGFpbmVyIHhzPXsxMn0gPlxyXG5cdFx0XHQ8TG9hZGluZ01vZGFsIHByb2dyZXNzPXtsb2FkaW5nUHJvZ3Jlc3N9IHNob3c9e3Nob3dMb2FkaW5nfSBvbkhpZGU9eygpID0+IHNldFNob3dMb2FkaW5nKGZhbHNlKX0vPlxyXG5cdFx0XHQ8Q29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnB1dEZvcm19PlxyXG5cdFx0XHRcdDxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtfT5cclxuXHRcdFx0XHRcdDxGb3JtR3JvdXA+XHJcblx0XHRcdFx0XHRcdDxHcmlkIGNvbnRhaW5lciB4cz17MTJ9PlxyXG5cdFx0XHRcdFx0XHRcdDxHcmlkIGl0ZW0geHM9ezEwfT5cclxuXHRcdFx0XHRcdFx0XHRcdDxUZXh0RmllbGRcclxuXHRcdFx0XHRcdFx0XHRcdFx0aW5wdXRSZWY9e2dldFJlZn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0aWQ9XCJzdGFuZGFyZC1iYXNpY1wiXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb21cIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR2YXJpYW50PVwib3V0bGluZWRcIlxyXG5cdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHRcdFx0PEdyaWQgY29udGFpbmVyIHhzPXsyfSAganVzdGlmeT1cImZsZXgtc3RhcnRcIiBhbGlnbkl0ZW1zPVwiZmxleC1zdGFydFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PEJ1dHRvbiByZWY9e2dldFJlZn0gb25DbGljaz17Z2V0fSBjbGFzc05hbWU9e2NsYXNzZXMuaW5wdXRGb3JtQnV0dG9ufSB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJwcmltYXJ5XCI+R0VUPC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHQ8L0Zvcm1Hcm91cD5cclxuXHRcdFx0XHRcdDxGb3JtR3JvdXA+XHJcblx0ICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgeHM9ezEyfT5cclxuXHQgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0+XHJcblx0XHRcdFx0XHRcdDxGb3JtQ29udHJvbCBjb21wb25lbnQ9XCJmaWVsZHNldFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtQ29udHJvbH0+XHJcblx0XHRcdFx0XHQgICAgICAgIDxGb3JtTGFiZWwgY29tcG9uZW50PVwibGVnZW5kXCI+RGF0YSBUeXBlPC9Gb3JtTGFiZWw+XHJcblx0XHRcdFx0XHQgICAgICAgIDxSYWRpb0dyb3VwIGFyaWEtbGFiZWw9XCJnZW5kZXJcIiBuYW1lPVwiZ2VuZGVyMVwiIHZhbHVlPXt0eXBlfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlVHlwZX0gcm93PlxyXG5cdFx0XHRcdFx0ICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsIHZhbHVlPVwiQXVkaW9cIiBjb250cm9sPXs8UmFkaW8gIGNvbG9yPVwicHJpbWFyeVwiIC8+fSBsYWJlbD1cIkF1ZGlvXCIgbGFiZWxQbGFjZW1lbnQ9XCJzdGFydFwiLz5cclxuXHRcdFx0XHRcdCAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbCB2YWx1ZT1cIlZpZGVvXCIgY29udHJvbD17PFJhZGlvICBjb2xvcj1cInByaW1hcnlcIiAvPn0gbGFiZWw9XCJWaWRlb1wiIGxhYmVsUGxhY2VtZW50PVwic3RhcnRcIi8+XHJcblx0XHRcdFx0XHQgICAgICAgIDwvUmFkaW9Hcm91cD5cclxuXHRcdFx0XHRcdCAgICAgIDwvRm9ybUNvbnRyb2w+XHJcblx0ICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHQgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcblx0XHRcdFx0XHRcdDxGb3JtQ29udHJvbCBjb21wb25lbnQ9XCJmaWVsZHNldFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtQ29udHJvbH0+XHJcblx0XHRcdFx0XHQgICAgICAgIDxGb3JtTGFiZWwgY29tcG9uZW50PVwibGVnZW5kXCI+RmlsZSBUeXBlPC9Gb3JtTGFiZWw+XHJcblx0XHRcdFx0XHQgICAgICAgIDxSYWRpb0dyb3VwIGFyaWEtbGFiZWw9XCJnZW5kZXJcIiBuYW1lPVwiZ2VuZGVyMlwiIHZhbHVlPXtleHR9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VFeHR9IHJvdz5cclxuXHRcdFx0XHRcdCAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbCB2YWx1ZT1cIm1wNFwiIGNvbnRyb2w9ezxSYWRpbyAvPn0gbGFiZWw9XCJtcDRcIiBsYWJlbFBsYWNlbWVudD1cInN0YXJ0XCIvPlxyXG5cdFx0XHRcdFx0ICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsIHZhbHVlPVwibXAzXCIgY29udHJvbD17PFJhZGlvIC8+fSBsYWJlbD1cIm1wM1wiIGxhYmVsUGxhY2VtZW50PVwic3RhcnRcIi8+XHJcblx0XHRcdFx0XHQgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWwgdmFsdWU9XCJ3YXZcIiBjb250cm9sPXs8UmFkaW8gLz59IGxhYmVsPVwid2F2XCIgbGFiZWxQbGFjZW1lbnQ9XCJzdGFydFwiLz5cclxuXHRcdFx0XHRcdCAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbCB2YWx1ZT1cIndlYm1cIiBjb250cm9sPXs8UmFkaW8gLz59IGxhYmVsPVwid2VibVwiIGxhYmVsUGxhY2VtZW50PVwic3RhcnRcIi8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2xMYWJlbCB2YWx1ZT1cImZsdlwiIGNvbnRyb2w9ezxSYWRpbyAvPn0gbGFiZWw9XCJmbHZcIiBsYWJlbFBsYWNlbWVudD1cInN0YXJ0XCIvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PEZvcm1Db250cm9sTGFiZWwgdmFsdWU9XCJobHNcIiBjb250cm9sPXs8UmFkaW8gLz59IGxhYmVsPVwiaGxzXCIgbGFiZWxQbGFjZW1lbnQ9XCJzdGFydFwiLz5cclxuXHRcdFx0XHRcdCAgICAgICAgPC9SYWRpb0dyb3VwPlxyXG5cdFx0XHRcdFx0ICAgICAgPC9Gb3JtQ29udHJvbD5cclxuXHQgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cdCAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cdCAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG5cdCAgICAgICAgICA8L2Zvcm0+XHJcblx0ICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciB4cz17MTJ9PlxyXG5cdCAgICAgICAgICAgIDxHcmlkIHhzPXs0fT5cclxuXHQgICAgICAgICAgICAgIDxDb250YWluZXIgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCJ9fSBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIiByZWY9e2NvbnRhaW5lclJlZn0+XHJcblx0ICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJzZWNvbmRhcnlcIiByZWY9e2Rvd25sb2FkQnRuUmVmfSBvbkNsaWNrPXtkb3dubG9hZEZyb21TZXJ2ZXJ9PkRvd25sb2FkPC9CdXR0b24+XHJcblx0ICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuXHQgICAgICAgICAgICA8L0dyaWQ+XHJcblx0ICAgICAgICAgIDwvR3JpZD5cclxuXHQgICAgICAgIDwvQ29udGFpbmVyPlxyXG5cdFx0XHQ8L0dyaWQ+XHJcblx0ICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuXHRcdCk7XHJcbn1cclxuY2xhc3MgSW5mb1BhbmVsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHRyZW5kZXIoKXtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxQYXBlcj5cclxuXHRcdFx0XHQ8Q29udGFpbmVyPlxyXG5cdFx0XHRcdFx0PFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCIgY29tcG9uZW50PVwiaDNcIj5cclxuXHRcdFx0XHRcdFx0PGk+VGhpcyBzaXRlIGlzIHVuZGVyIGNvbnN0cnVjdGlvbi48L2k+XHJcblx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XHJcblx0XHRcdFx0XHQ8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJwXCI+XHJcblx0XHRcdFx0XHRcdFRoZSBtYWluIHJlYXNvbiBmb3IgdGhpcyBzaXRlIGlzIHRvIGRvd25sb2FkIGF1ZGlvIGZpbGVzIGZyb20geW91dHViZS8gc29vbiB3aWxsIHN1cHBvcnQgbW9yZVxyXG5cdFx0XHRcdFx0XHRzaXRlcyBhbmQgcG9zc2libHkgdGhlIGFiaWxpdHkgdG8gZG93bmxvYWQgdGhlIHdob2xlIHZpZGVvIGluY2x1ZGluZyB2aXN1YWwgYW5kIGF1ZGlvLiBkZXBlbmRpbmcgb25cclxuXHRcdFx0XHRcdFx0d2hhdCBwZW9wbGUgd2FudDxici8+PGJyLz48YnIvPlxyXG5cdFx0XHRcdFx0XHRUZXN0aW5nIFVSTDogaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1wY1BpNGpQQVIyY1xyXG5cdFx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxyXG5cdFx0XHRcdDwvQ29udGFpbmVyPlxyXG5cdFx0XHQ8L1BhcGVyPlxyXG5cdFx0KVxyXG5cdH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblx0cmVuZGVyKCl7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8UmVhY3QuRnJhZ21lbnQ+XHJcblx0XHRcdFx0PFN1Ym1pdEZvcm0vPlxyXG5cdFx0XHRcdDxJbmZvUGFuZWwvPlxyXG5cdFx0XHQ8L1JlYWN0LkZyYWdtZW50PlxyXG5cdFx0KTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IFN5bnRoZXRpY0V2ZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5pbXBvcnQgQ2hlY2tDaXJjbGVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DaGVja0NpcmNsZSc7XHJcbmltcG9ydCBFcnJvckljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Vycm9yJztcclxuaW1wb3J0IEluZm9JY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9JbmZvJztcclxuaW1wb3J0IENsb3NlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xvc2UnO1xyXG5pbXBvcnQgeyBhbWJlciwgZ3JlZW4gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMnO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcclxuaW1wb3J0IFNuYWNrYmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1NuYWNrYmFyJztcclxuaW1wb3J0IFNuYWNrYmFyQ29udGVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TbmFja2JhckNvbnRlbnQnO1xyXG5pbXBvcnQgV2FybmluZ0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1dhcm5pbmcnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzLCBUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcblxyXG5jb25zdCB2YXJpYW50SWNvbiA9IHtcclxuICBzdWNjZXNzOiBDaGVja0NpcmNsZUljb24sXHJcbiAgd2FybmluZzogV2FybmluZ0ljb24sXHJcbiAgZXJyb3I6IEVycm9ySWNvbixcclxuICBpbmZvOiBJbmZvSWNvbixcclxufTtcclxuXHJcbmNvbnN0IHVzZVN0eWxlczEgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+ICh7XHJcbiAgc3VjY2Vzczoge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiBncmVlbls2MDBdLFxyXG4gIH0sXHJcbiAgZXJyb3I6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5lcnJvci5kYXJrLFxyXG4gIH0sXHJcbiAgaW5mbzoge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbixcclxuICB9LFxyXG4gIHdhcm5pbmc6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogYW1iZXJbNzAwXSxcclxuICB9LFxyXG4gIGljb246IHtcclxuICAgIGZvbnRTaXplOiAyMCxcclxuICB9LFxyXG4gIGljb25WYXJpYW50OiB7XHJcbiAgICBvcGFjaXR5OiAwLjksXHJcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygxKSxcclxuICB9LFxyXG4gIG1lc3NhZ2U6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xyXG4gIGNsYXNzTmFtZT86IHN0cmluZztcclxuICBtZXNzYWdlPzogc3RyaW5nO1xyXG4gIG9uQ2xvc2U/OiAoKSA9PiB2b2lkO1xyXG4gIHZhcmlhbnQ6IGtleW9mIHR5cGVvZiB2YXJpYW50SWNvbjtcclxufVxyXG5cclxuZnVuY3Rpb24gTXlTbmFja2JhckNvbnRlbnRXcmFwcGVyKHByb3BzOiBQcm9wcykge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMxKCk7XHJcbiAgY29uc3QgeyBjbGFzc05hbWUsIG1lc3NhZ2UsIG9uQ2xvc2UsIHZhcmlhbnQsIC4uLm90aGVyIH0gPSBwcm9wcztcclxuICBjb25zdCBJY29uID0gdmFyaWFudEljb25bdmFyaWFudF07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8U25hY2tiYXJDb250ZW50XHJcbiAgICAgIGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzW3ZhcmlhbnRdLCBjbGFzc05hbWUpfVxyXG4gICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwiY2xpZW50LXNuYWNrYmFyXCJcclxuICAgICAgbWVzc2FnZT17XHJcbiAgICAgICAgPHNwYW4gaWQ9XCJjbGllbnQtc25hY2tiYXJcIiBjbGFzc05hbWU9e2NsYXNzZXMubWVzc2FnZX0+XHJcbiAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy5pY29uLCBjbGFzc2VzLmljb25WYXJpYW50KX0gLz5cclxuICAgICAgICAgIHttZXNzYWdlfVxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgfVxyXG4gICAgICBhY3Rpb249e1tcclxuICAgICAgICA8SWNvbkJ1dHRvbiBrZXk9XCJjbG9zZVwiIGFyaWEtbGFiZWw9XCJjbG9zZVwiIGNvbG9yPVwiaW5oZXJpdFwiIG9uQ2xpY2s9e29uQ2xvc2V9PlxyXG4gICAgICAgICAgPENsb3NlSWNvbiBjbGFzc05hbWU9e2NsYXNzZXMuaWNvbn0gLz5cclxuICAgICAgICA8L0ljb25CdXR0b24+LFxyXG4gICAgICBdfVxyXG4gICAgICB7Li4ub3RoZXJ9XHJcbiAgICAvPlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IHVzZVN0eWxlczIgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+ICh7XHJcbiAgbWFyZ2luOiB7XHJcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgfSxcclxufSkpO1xyXG5cclxuaW50ZXJmYWNlIFNuYWNrUHJvcHMge1xyXG5cdG9wZW4gOiBib29sZWFuO1xyXG5cdHZhcmllbnQ6IFwic3VjY2Vzc1wiIHwgXCJlcnJvclwiIHwgXCJ3YXJuaW5nXCIgfCBcImluZm9cIjtcclxuICAgIG1lc3NhZ2U6IHN0cmluZztcclxuICAgIG9wZW5IYW5kbGVyOiAodmFsOiBib29sZWFuKSA9PiB2b2lkO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEN1c3RvbWl6ZWRTbmFja2JhcnMocHJvcHM6IFNuYWNrUHJvcHMpIHtcclxuXHRjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzMigpO1xyXG5cdGxldCB2YWw6IGJvb2xlYW4gPSBwcm9wcy5vcGVuO1xyXG5cdGxldCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZSh2YWwpO1xyXG5cdGNvbnN0IGhhbmRsZUNsb3NlID0gKGV2ZW50PzogU3ludGhldGljRXZlbnQsIHJlYXNvbj86IHN0cmluZykgPT4ge1xyXG5cdFx0aWYgKHJlYXNvbiA9PT0gJ2NsaWNrYXdheScpIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG4gICAgICAgIHByb3BzLm9wZW5IYW5kbGVyKGZhbHNlKTtcclxuXHR9O1xyXG4gIFxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2PlxyXG5cdFx0XHQ8U25hY2tiYXIgYW5jaG9yT3JpZ2luPXt7XHJcblx0XHRcdFx0XHR2ZXJ0aWNhbDogJ2JvdHRvbScsXHJcblx0XHRcdFx0XHRob3Jpem9udGFsOiAnbGVmdCcsXHJcblx0XHRcdFx0fX1cclxuXHRcdFx0XHRvcGVuPXtwcm9wcy5vcGVufVxyXG5cdFx0XHRcdGF1dG9IaWRlRHVyYXRpb249ezYwMDB9XHJcblx0XHRcdFx0b25DbG9zZT17aGFuZGxlQ2xvc2V9XHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8TXlTbmFja2JhckNvbnRlbnRXcmFwcGVyXHJcblx0XHRcdFx0XHRvbkNsb3NlPXtoYW5kbGVDbG9zZX1cclxuXHRcdFx0XHRcdHZhcmlhbnQ9e3Byb3BzLnZhcmllbnR9XHJcblx0XHRcdFx0XHRtZXNzYWdlPXtwcm9wcy5tZXNzYWdlfVxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc2VzLm1hcmdpbn1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQ8L1NuYWNrYmFyPlxyXG4gICBcclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9