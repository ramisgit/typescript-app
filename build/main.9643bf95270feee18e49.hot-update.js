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
        setOpen(false);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91bWQvLi9zcmMvY29tcG9uZW50cy9wYWdlcy9JbmRleC50c3giLCJ3ZWJwYWNrOi8vdW1kLy4vc3JjL2NvbXBvbmVudHMvc3RhdGljL1NuYWNrLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtR0FBeUI7QUFFekIsK0ZBQTRDO0FBQzVDLHVKQUFvRDtBQUNwRCw4SUFBOEM7QUFDOUMsd0lBQTBDO0FBQzFDLDZIQUEyRTtBQUMzRSwySUFBNEM7QUFDNUMsb0pBQWtEO0FBQ2xELHdJQUEwQztBQUMxQyxzS0FBOEQ7QUFDOUQsMklBQTRDO0FBQzVDLHVKQUFvRDtBQUNwRCw2SkFBd0Q7QUFDeEQsMklBQTRDO0FBQzVDLDBKQUFzRDtBQUV0RCw0S0FBa0U7QUFDbEUsdUpBQW9EO0FBQ3BELHVKQUFvRDtBQUNwRCwwSkFBc0Q7QUFDdEQsaUhBQW9DO0FBRXBDLE1BQU0sU0FBUyxHQUFHLG1CQUFVLENBQUMsQ0FBQyxLQUFZLEVBQUUsRUFBRSxDQUM3QyxxQkFBWSxDQUFDO0lBQ1osS0FBSyxFQUFFO1FBQ04sT0FBTyxFQUFFLE1BQU07UUFDZixVQUFVLEVBQUUsUUFBUTtRQUNwQixjQUFjLEVBQUUsUUFBUTtLQUN4QjtJQUNELEtBQUssRUFBRTtRQUNOLGVBQWUsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxLQUFLO1FBQy9DLE1BQU0sRUFBRSxnQkFBZ0I7UUFDeEIsU0FBUyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQzNCLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQy9CO0lBQ0QsSUFBSSxFQUFFO1FBQ0wsS0FBSyxFQUFFLE1BQU07UUFDYixXQUFXLEVBQUU7WUFDWixTQUFTLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7U0FDM0I7S0FDRDtJQUNELFNBQVMsRUFBRTtR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Qyw4QkFBQyxrQkFBUSxJQUFDLFlBQVksRUFBRTtnQkFDdEIsUUFBUSxFQUFFLFFBQVE7Z0JBQ2xCLFVBQVUsRUFBRSxNQUFNO2FBQ2xCLEVBQ0QsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJLEVBQ2hCLGdCQUFnQixFQUFFLElBQUksRUFDdEIsT0FBTyxFQUFFLFdBQVc7WUFFcEIsOEJBQUMsd0JBQXdCLElBQ3hCLE9BQU8sRUFBRSxXQUFXLEVBQ3BCLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTyxFQUN0QixPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFDdEIsU0FBUyxFQUFFLE9BQU8sQ0FBQyxNQUFNLEdBQ3hCLENBQ1EsQ0FFTixDQUNOLENBQUM7QUFDSCxDQUFDO0FBaENELHNDQWdDQyIsImZpbGUiOiJtYWluLjk2NDNiZjk1MjcwZmVlZTE4ZTQ5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQgeyBwb3N0LCBnZXQgfSBmcm9tICcuLi9zdGF0aWMvYXhpb3MnO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lcic7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMsIFRoZW1lLCBjcmVhdGVTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTW9kYWwnO1xyXG5pbXBvcnQgQmFja2Ryb3AgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQmFja2Ryb3AnO1xyXG5pbXBvcnQgRmFkZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9GYWRlJztcclxuaW1wb3J0IExpbmVhclByb2dyZXNzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmVhclByb2dyZXNzJztcclxuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcclxuaW1wb3J0IEZvcm1Hcm91cCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtR3JvdXAnO1xyXG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2wnO1xyXG5pbXBvcnQgUmFkaW8gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUmFkaW8nO1xyXG5pbXBvcnQgUmFkaW9Hcm91cCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9SYWRpb0dyb3VwJztcclxuaW1wb3J0IEZvcm1IZWxwZXJUZXh0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1IZWxwZXJUZXh0JztcclxuaW1wb3J0IEZvcm1Db250cm9sTGFiZWwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2xMYWJlbCc7XHJcbmltcG9ydCBGb3JtTGFiZWwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUxhYmVsJztcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IFNuYWNrIGZyb20gJy4uL3N0YXRpYy9TbmFjayc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+XHJcblx0Y3JlYXRlU3R5bGVzKHtcclxuXHRcdG1vZGFsOiB7XHJcblx0XHRcdGRpc3BsYXk6ICdmbGV4JyxcclxuXHRcdFx0YWxpZ25JdGVtczogJ2NlbnRlcicsXHJcblx0XHRcdGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuXHRcdH0sXHJcblx0XHRwYXBlcjoge1xyXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcclxuXHRcdFx0Ym9yZGVyOiAnMnB4IHNvbGlkICMwMDAnLFxyXG5cdFx0XHRib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbNV0sXHJcblx0XHRcdHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiwgNCwgMyksXHJcblx0XHR9LFxyXG5cdFx0cm9vdDoge1xyXG5cdFx0XHR3aWR0aDogJzEwMCUnLFxyXG5cdFx0XHQnJiA+ICogKyAqJzoge1xyXG5cdFx0XHRcdG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygyKSxcclxuXHRcdFx0fSxcclxuXHRcdH0sXHJcblx0XHR0ZXh0RmllbGQ6IHtcclxuXHRcdFx0bWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygxKSxcclxuXHRcdFx0bWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMSksXHJcblx0XHRcdHdpZHRoOiBcIjEwMCVcIlxyXG5cdFx0fSxcclxuXHRcdGZvcm1Db250cm9sOiB7XHJcblx0XHRcdG1hcmdpbjogdGhlbWUuc3BhY2luZygzKSxcclxuXHRcdH0sXHJcblx0XHRpbnB1dEZvcm06IHtcclxuXHRcdFx0dGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG5cdFx0XHRwYWRkaW5nOiBcIjMwcHggMCAwIDBcIixcclxuXHRcdFx0d2lkdGg6IFwiMTAwdndcIixcclxuXHRcdFx0bWFyZ2luOiBcIjBweCBhdXRvIDUwcHggYXV0b1wiLFxyXG5cdFx0fSxcclxuXHRcdGZvcm06IHtcclxuXHRcdFx0bWFyZ2luOiBcIjBweCBhdXRvIDEwcHggYXV0b1wiLFxyXG5cdFx0XHR3aWR0aDogXCIxMDAlXCJcclxuXHRcdH0sXHJcblx0XHRpbnB1dEZvcm1JbnB1dDoge1xyXG5cdFx0XHR3aWR0aDogXCI4NSVcIixcclxuXHRcdFx0ZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcclxuXHRcdH0sXHJcblx0XHRpbnB1dEZvcm1CdXR0b246IHtcclxuXHRcdFx0aGVpZ2h0OiBcIjEwMCVcIixcclxuXHRcdFx0bWFyZ2luOiBcIjBweFwiLFxyXG5cdFx0fVxyXG5cdH0pLFxyXG4pO1xyXG5cclxuaW50ZXJmYWNlIFByb2dyZXNzUHJvcHMge1xyXG5cdHByb2dyZXNzVmFsdWU6IG51bWJlcjtcclxufVxyXG5mdW5jdGlvbiBQcm9ncmVzc0Jhcihwcm9wczogUHJvZ3Jlc3NQcm9wcykge1xyXG5cdGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHRjb25zdCBbY29tcGxldGVkLCBzZXRDb21wbGV0ZWRdID0gUmVhY3QudXNlU3RhdGUoMCk7XHJcblxyXG5cdFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRmdW5jdGlvbiBwcm9ncmVzcygpIHtcclxuXHRcdFx0c2V0Q29tcGxldGVkKG9sZENvbXBsZXRlZCA9PiB7XHJcblx0XHRcdFx0aWYgKG9sZENvbXBsZXRlZCA9PT0gMTAwKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gMDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIE1hdGgubWluKHByb3BzLnByb2dyZXNzVmFsdWUsIDEwMCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IHRpbWVyID0gc2V0SW50ZXJ2YWwocHJvZ3Jlc3MsIDUwMCk7XHJcblx0XHRyZXR1cm4gKCkgPT4ge1xyXG4gICAgICBjbGVhckludGVydmFsKHRpbWVyKTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgIDxMaW5lYXJQcm9ncmVzcyB2YXJpYW50PVwiZGV0ZXJtaW5hdGVcIiB2YWx1ZT17Y29tcGxldGVkfSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuXHJcbmludGVyZmFjZSBsb2FkaW5nTW9kYWxQcm9wcyB7XHJcblx0cHJvZ3Jlc3M6IHN0cmluZztcclxuXHRvbkhpZGU6ICgpID0+IHZvaWQ7XHJcblx0c2hvdzogYm9vbGVhbjtcclxufVxyXG5cclxuZnVuY3Rpb24gTG9hZGluZ01vZGFsKHByb3BzOiBsb2FkaW5nTW9kYWxQcm9wcykge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gXHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgfTtcclxuXHRpZiAocHJvcHMuc2hvdyl7XHJcblx0XHRzZXRPcGVuKHRydWUpO1xyXG5cdH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwidHJhbnNpdGlvbi1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cInRyYW5zaXRpb24tbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tb2RhbH1cclxuICAgICAgICBvcGVuPXtvcGVufVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxyXG4gICAgICAgIGNsb3NlQWZ0ZXJUcmFuc2l0aW9uXHJcbiAgICAgICAgQmFja2Ryb3BDb21wb25lbnQ9e0JhY2tkcm9wfVxyXG4gICAgICAgIEJhY2tkcm9wUHJvcHM9e3tcclxuICAgICAgICAgIHRpbWVvdXQ6IDUwMCxcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPEZhZGUgaW49e29wZW59PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxyXG4gICAgICAgICAgICA8aDIgaWQ9XCJ0cmFuc2l0aW9uLW1vZGFsLXRpdGxlXCI+RG93bmxvYWRpbmcgeW91ciBmaWxlPC9oMj5cclxuXHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPkxvYWRpbmc8L3NwYW4+XHJcblx0XHRcdDxQcm9ncmVzc0JhciBwcm9ncmVzc1ZhbHVlPXtwYXJzZUludChwcm9wcy5wcm9ncmVzcyl9Lz5cclxuICAgICAgICA8aDQ+RG93bmxvYWRpbmcuLi4ge3Byb3BzLnByb2dyZXNzfSAlPC9oND5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgIFBsZWFzZSB3YWl0IHdoaWxlIHlvdXIgZmlsZSBpcyBiZWluZyBkb3dubG9hZGVkLiBGZWVsIGZyZWUgdG8gdXNlIHRoaXMgc2VydmljZSBhcyBtYW55XHJcbiAgICAgICAgICB0aW1lcyBhcyB5b3Ugd2FudC48YnIvPlxyXG5cclxuICAgICAgICAgIEEgYnV0dG9uIGxpbmsgd2lsbCBiZSBwcm92aWRlZCBzaG9ydGx5Li4uLlxyXG4gICAgICAgIDwvcD5cclxuXHRcdDxCdXR0b24gb25DbGljaz17cHJvcHMub25IaWRlfT5DbG9zZTwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9GYWRlPlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIFN1Ym1pdEZvcm0oKSB7XHJcblx0Y29uc3QgY29udGFpbmVyUmVmOmFueSA9IFJlYWN0LmNyZWF0ZVJlZigpO1xyXG5cdGNvbnN0IGdldFJlZjogYW55ID0gUmVhY3QuY3JlYXRlUmVmKCk7XHJcblx0Y29uc3Qgd2FybmluZ1JlZjogYW55ID0gUmVhY3QuY3JlYXRlUmVmKCk7XHJcblx0Y29uc3QgZG93bmxvYWRCdG5SZWY6IGFueSA9IFJlYWN0LmNyZWF0ZVJlZigpO1xyXG5cdFxyXG5cdGNvbnN0IFtleHQsIHNldEV4dF0gPSBSZWFjdC51c2VTdGF0ZShcIm1wNFwiKTtcclxuXHRjb25zdCBbdHlwZSwgc2V0VHlwZV0gPSBSZWFjdC51c2VTdGF0ZShcIkF1ZGlvXCIpO1xyXG5cdGNvbnN0IFtzaG93TG9hZGluZywgc2V0U2hvd0xvYWRpbmddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IFtsb2FkaW5nUHJvZ3Jlc3MsIHNldExvYWRpbmdQcm9ncmVzc10gPSBSZWFjdC51c2VTdGF0ZShcIjBcIik7XHJcblx0Y29uc3QgW29wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG5cdFx0Y29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcblx0Y29uc3QgW3ZhcmllbnQsIHNldFZhcmllbnRdID0gUmVhY3QudXNlU3RhdGU8XCJzdWNjZXNzXCIgfCBcImVycm9yXCIgfCBcIndhcm5pbmdcIiB8IFwiaW5mb1wiPihcImluZm9cIik7XHJcblx0Y29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlVHlwZSA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcclxuICAgIHNldFR5cGUoKGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSk7XHJcbiAgfTtcclxuXHRjb25zdCBoYW5kbGVDaGFuZ2VFeHQgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XHJcbiAgICBzZXRFeHQoKGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSk7XHJcbiAgfTtcdFxyXG5cdFxyXG5cdCBmdW5jdGlvbiBoYW5kbGVDaGFuZ2VBbGVydFNob3cgKGV2ZW50OiBhbnksIHNob3c6IGJvb2xlYW4pIHtcclxuXHRcdHNldE9wZW4oc2hvdyk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBvcGVuSGFuZGxlcih2YWw6IGJvb2xlYW4pIHtcclxuICAgICAgICBzZXRPcGVuKHZhbCk7XHJcbiAgICB9XHJcblx0ZnVuY3Rpb24gZ2V0IChlOiBhbnkpIHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdHNldE9wZW4oZmFsc2UpO1xyXG5cdFx0dmFyIHdhcm5pbmcgPSB3YXJuaW5nUmVmLmN1cnJlbnQ7XHJcblx0XHR2YXIgVVJMaW5wdXQgPSBnZXRSZWYuY3VycmVudC52YWx1ZS5zcGxpdChcIj1cIilbMV07XHJcblx0XHRpZiAoVVJMaW5wdXQgPT09IHVuZGVmaW5lZCB8fCBudWxsKXtcclxuXHRcdFx0c2V0VmFyaWVudChcIndhcm5pbmdcIik7XHJcblx0XHRcdHNldE1lc3NhZ2UoXCJJbnZhbGlkIHVybCB0cnkgYW5vdGhlciBvciBsb29rIGNhcmVmdWxseSB0byBjb3JyZWN0IGl0LlwiKTtcclxuXHRcdFx0c2V0T3Blbih0cnVlKTtcclxuXHQgIFx0fSBlbHNlIHtcclxuXHRcdFx0XHJcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gcG9zdChcIi9kb3dubG9hZFwiLCBKU09OLnN0cmluZ2lmeSh7dXJsOlVSTGlucHV0LCB0eXBlOnR5cGUsIGV4dGVuc2lvbjpleHR9KSwgdHJ1ZSk7XHJcblx0XHRcdHJlc3BvbnNlLm9ubG9hZCA9ICgpID0+IHtcclxuXHRcdFx0XHR2YXIgc3NlOkV2ZW50U291cmNlID0gbmV3IEV2ZW50U291cmNlKFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2Rvd25sb2FkL3NzZVwiKTtcclxuXHRcdCAgXHRcdHNzZS5vbm9wZW4gPSAoKSA9PiB7XHJcblx0XHRcdFx0XHRzZXRTaG93TG9hZGluZyh0cnVlKTtcclxuXHRcdCAgXHRcdH1cclxuXHQgIFx0XHRcdHNzZS5vbm1lc3NhZ2UgPSBldnQgPT4ge1xyXG5cdFx0XHRcdFx0c2V0TG9hZGluZ1Byb2dyZXNzKGV2dC5kYXRhKTtcclxuXHQgICAgICAgIFx0XHRpZiAoZXZ0LmRhdGEgPT09IFwiMTAwXCIpe1xyXG5cdFx0XHRcdFx0XHRzZXRTaG93TG9hZGluZyhmYWxzZSlcclxuXHQgICAgICAgICAgXHRcdFx0dmFyIHVybDpzdHJpbmcgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9kb3dubG9hZC92aWRlby9cIiArIFVSTGlucHV0O1xyXG5cdCAgICAgICAgICBcdFx0XHRkb3dubG9hZEJ0blJlZi5jdXJyZW50LnZhbHVlID0gdXJsO1xyXG5cdCAgICAgICAgICBcdFx0XHRjb250YWluZXJSZWYuY3VycmVudC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG5cdCAgICAgICAgICBcdFx0XHRzc2UuY2xvc2UoKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0c3NlLm9uZXJyb3IgPSAoKSA9PiB7XHJcbiAgXHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiRXZlbnRTb3VyY2UgZmFpbGVkLlwiKTtcclxuXHRcdFx0XHRcdHNldFNob3dMb2FkaW5nKGZhbHNlKTtcclxuXHRcdFx0XHRcdHdhcm5pbmcuaW5uZXJIVE1MID0gXCJGYWlsZWQgdG8gZXN0YWJsaXNoIGNvbm5lY3Rpb24gdG8gc2VydmVyXCI7XHJcbiAgXHRcdFx0XHRcdHdhcm5pbmcuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICBcdFx0XHRcdFx0Y29uc29sZS5sb2coXCJDbG9zaW5nIGNvbm5lY3Rvbi4uLlwiKTtcclxuICBcdFx0XHRcdFx0c3NlLmNsb3NlKCk7XHJcbiAgXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuICBcdFx0fVxyXG4gIFx0fVxyXG4gIFx0ZnVuY3Rpb24gZG93bmxvYWRGcm9tU2VydmVyICgpIHtcclxuICAgIFx0dmFyIHVybDpzdHJpbmcgPSBkb3dubG9hZEJ0blJlZi5jdXJyZW50LnZhbHVlO1xyXG4gICAgXHR3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcclxuXHR9XHJcblx0cmV0dXJuIChcclxuXHRcdDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgPFNuYWNrIG9wZW5IYW5kbGVyPXtvcGVuSGFuZGxlcn0gb3Blbj17b3Blbn0gdmFyaWVudD17dmFyaWVudH0gbWVzc2FnZT17bWVzc2FnZX0vPlxyXG5cdFx0XHQ8R3JpZCBjb250YWluZXIgeHM9ezEyfSA+XHJcblx0XHRcdDxMb2FkaW5nTW9kYWwgcHJvZ3Jlc3M9e2xvYWRpbmdQcm9ncmVzc30gc2hvdz17c2hvd0xvYWRpbmd9IG9uSGlkZT17KCkgPT4gc2V0U2hvd0xvYWRpbmcoZmFsc2UpfS8+XHJcblx0XHRcdDxDb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmlucHV0Rm9ybX0+XHJcblx0XHRcdFx0PGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm19PlxyXG5cdFx0XHRcdFx0PEZvcm1Hcm91cD5cclxuXHRcdFx0XHRcdFx0PEdyaWQgY29udGFpbmVyIHhzPXsxMn0+XHJcblx0XHRcdFx0XHRcdFx0PEdyaWQgaXRlbSB4cz17MTB9PlxyXG5cdFx0XHRcdFx0XHRcdFx0PFRleHRGaWVsZFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRpbnB1dFJlZj17Z2V0UmVmfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRpZD1cInN0YW5kYXJkLWJhc2ljXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcblx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdFx0XHQ8R3JpZCBjb250YWluZXIgeHM9ezJ9ICBqdXN0aWZ5PVwiZmxleC1zdGFydFwiIGFsaWduSXRlbXM9XCJmbGV4LXN0YXJ0XCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uIHJlZj17Z2V0UmVmfSBvbkNsaWNrPXtnZXR9IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnB1dEZvcm1CdXR0b259IHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInByaW1hcnlcIj5HRVQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdDwvRm9ybUdyb3VwPlxyXG5cdFx0XHRcdFx0PEZvcm1Hcm91cD5cclxuXHQgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciB4cz17MTJ9PlxyXG5cdCAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fT5cclxuXHRcdFx0XHRcdFx0PEZvcm1Db250cm9sIGNvbXBvbmVudD1cImZpZWxkc2V0XCIgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1Db250cm9sfT5cclxuXHRcdFx0XHRcdCAgICAgICAgPEZvcm1MYWJlbCBjb21wb25lbnQ9XCJsZWdlbmRcIj5EYXRhIFR5cGU8L0Zvcm1MYWJlbD5cclxuXHRcdFx0XHRcdCAgICAgICAgPFJhZGlvR3JvdXAgYXJpYS1sYWJlbD1cImdlbmRlclwiIG5hbWU9XCJnZW5kZXIxXCIgdmFsdWU9e3R5cGV9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VUeXBlfSByb3c+XHJcblx0XHRcdFx0XHQgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWwgdmFsdWU9XCJBdWRpb1wiIGNvbnRyb2w9ezxSYWRpbyAgY29sb3I9XCJwcmltYXJ5XCIgLz59IGxhYmVsPVwiQXVkaW9cIiBsYWJlbFBsYWNlbWVudD1cInN0YXJ0XCIvPlxyXG5cdFx0XHRcdFx0ICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsIHZhbHVlPVwiVmlkZW9cIiBjb250cm9sPXs8UmFkaW8gIGNvbG9yPVwicHJpbWFyeVwiIC8+fSBsYWJlbD1cIlZpZGVvXCIgbGFiZWxQbGFjZW1lbnQ9XCJzdGFydFwiLz5cclxuXHRcdFx0XHRcdCAgICAgICAgPC9SYWRpb0dyb3VwPlxyXG5cdFx0XHRcdFx0ICAgICAgPC9Gb3JtQ29udHJvbD5cclxuXHQgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cdCAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuXHRcdFx0XHRcdFx0PEZvcm1Db250cm9sIGNvbXBvbmVudD1cImZpZWxkc2V0XCIgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1Db250cm9sfT5cclxuXHRcdFx0XHRcdCAgICAgICAgPEZvcm1MYWJlbCBjb21wb25lbnQ9XCJsZWdlbmRcIj5GaWxlIFR5cGU8L0Zvcm1MYWJlbD5cclxuXHRcdFx0XHRcdCAgICAgICAgPFJhZGlvR3JvdXAgYXJpYS1sYWJlbD1cImdlbmRlclwiIG5hbWU9XCJnZW5kZXIyXCIgdmFsdWU9e2V4dH0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZUV4dH0gcm93PlxyXG5cdFx0XHRcdFx0ICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsIHZhbHVlPVwibXA0XCIgY29udHJvbD17PFJhZGlvIC8+fSBsYWJlbD1cIm1wNFwiIGxhYmVsUGxhY2VtZW50PVwic3RhcnRcIi8+XHJcblx0XHRcdFx0XHQgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWwgdmFsdWU9XCJtcDNcIiBjb250cm9sPXs8UmFkaW8gLz59IGxhYmVsPVwibXAzXCIgbGFiZWxQbGFjZW1lbnQ9XCJzdGFydFwiLz5cclxuXHRcdFx0XHRcdCAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbCB2YWx1ZT1cIndhdlwiIGNvbnRyb2w9ezxSYWRpbyAvPn0gbGFiZWw9XCJ3YXZcIiBsYWJlbFBsYWNlbWVudD1cInN0YXJ0XCIvPlxyXG5cdFx0XHRcdFx0ICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsIHZhbHVlPVwid2VibVwiIGNvbnRyb2w9ezxSYWRpbyAvPn0gbGFiZWw9XCJ3ZWJtXCIgbGFiZWxQbGFjZW1lbnQ9XCJzdGFydFwiLz5cclxuXHRcdFx0XHRcdFx0XHRcdDxGb3JtQ29udHJvbExhYmVsIHZhbHVlPVwiZmx2XCIgY29udHJvbD17PFJhZGlvIC8+fSBsYWJlbD1cImZsdlwiIGxhYmVsUGxhY2VtZW50PVwic3RhcnRcIi8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2xMYWJlbCB2YWx1ZT1cImhsc1wiIGNvbnRyb2w9ezxSYWRpbyAvPn0gbGFiZWw9XCJobHNcIiBsYWJlbFBsYWNlbWVudD1cInN0YXJ0XCIvPlxyXG5cdFx0XHRcdFx0ICAgICAgICA8L1JhZGlvR3JvdXA+XHJcblx0XHRcdFx0XHQgICAgICA8L0Zvcm1Db250cm9sPlxyXG5cdCAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblx0ICAgICAgICAgICAgICA8L0dyaWQ+XHJcblx0ICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcblx0ICAgICAgICAgIDwvZm9ybT5cclxuXHQgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHhzPXsxMn0+XHJcblx0ICAgICAgICAgICAgPEdyaWQgeHM9ezR9PlxyXG5cdCAgICAgICAgICAgICAgPENvbnRhaW5lciBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIn19IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiIHJlZj17Y29udGFpbmVyUmVmfT5cclxuXHQgICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInNlY29uZGFyeVwiIHJlZj17ZG93bmxvYWRCdG5SZWZ9IG9uQ2xpY2s9e2Rvd25sb2FkRnJvbVNlcnZlcn0+RG93bmxvYWQ8L0J1dHRvbj5cclxuXHQgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG5cdCAgICAgICAgICAgIDwvR3JpZD5cclxuXHQgICAgICAgICAgPC9HcmlkPlxyXG5cdCAgICAgICAgPC9Db250YWluZXI+XHJcblx0XHRcdDwvR3JpZD5cclxuXHQgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG5cdFx0KTtcclxufVxyXG5jbGFzcyBJbmZvUGFuZWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cdHJlbmRlcigpe1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PFBhcGVyPlxyXG5cdFx0XHRcdDxDb250YWluZXI+XHJcblx0XHRcdFx0XHQ8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIiBjb21wb25lbnQ9XCJoM1wiPlxyXG5cdFx0XHRcdFx0XHQ8aT5UaGlzIHNpdGUgaXMgdW5kZXIgY29uc3RydWN0aW9uLjwvaT5cclxuXHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cclxuXHRcdFx0XHRcdDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cInBcIj5cclxuXHRcdFx0XHRcdFx0VGhlIG1haW4gcmVhc29uIGZvciB0aGlzIHNpdGUgaXMgdG8gZG93bmxvYWQgYXVkaW8gZmlsZXMgZnJvbSB5b3V0dWJlLyBzb29uIHdpbGwgc3VwcG9ydCBtb3JlXHJcblx0XHRcdFx0XHRcdHNpdGVzIGFuZCBwb3NzaWJseSB0aGUgYWJpbGl0eSB0byBkb3dubG9hZCB0aGUgd2hvbGUgdmlkZW8gaW5jbHVkaW5nIHZpc3VhbCBhbmQgYXVkaW8uIGRlcGVuZGluZyBvblxyXG5cdFx0XHRcdFx0XHR3aGF0IHBlb3BsZSB3YW50PGJyLz48YnIvPjxici8+XHJcblx0XHRcdFx0XHRcdFRlc3RpbmcgVVJMOiBodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PXBjUGk0alBBUjJjXHJcblx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XHJcblx0XHRcdFx0PC9Db250YWluZXI+XHJcblx0XHRcdDwvUGFwZXI+XHJcblx0XHQpXHJcblx0fVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHRyZW5kZXIoKXtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxSZWFjdC5GcmFnbWVudD5cclxuXHRcdFx0XHQ8U3VibWl0Rm9ybS8+XHJcblx0XHRcdFx0PEluZm9QYW5lbC8+XHJcblx0XHRcdDwvUmVhY3QuRnJhZ21lbnQ+XHJcblx0XHQpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgU3ludGhldGljRXZlbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbmltcG9ydCBDaGVja0NpcmNsZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0NoZWNrQ2lyY2xlJztcclxuaW1wb3J0IEVycm9ySWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRXJyb3InO1xyXG5pbXBvcnQgSW5mb0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0luZm8nO1xyXG5pbXBvcnQgQ2xvc2VJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DbG9zZSc7XHJcbmltcG9ydCB7IGFtYmVyLCBncmVlbiB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL2NvbG9ycyc7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xyXG5pbXBvcnQgU25hY2tiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU25hY2tiYXInO1xyXG5pbXBvcnQgU25hY2tiYXJDb250ZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1NuYWNrYmFyQ29udGVudCc7XHJcbmltcG9ydCBXYXJuaW5nSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvV2FybmluZyc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMsIFRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuXHJcbmNvbnN0IHZhcmlhbnRJY29uID0ge1xyXG4gIHN1Y2Nlc3M6IENoZWNrQ2lyY2xlSWNvbixcclxuICB3YXJuaW5nOiBXYXJuaW5nSWNvbixcclxuICBlcnJvcjogRXJyb3JJY29uLFxyXG4gIGluZm86IEluZm9JY29uLFxyXG59O1xyXG5cclxuY29uc3QgdXNlU3R5bGVzMSA9IG1ha2VTdHlsZXMoKHRoZW1lOiBUaGVtZSkgPT4gKHtcclxuICBzdWNjZXNzOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGdyZWVuWzYwMF0sXHJcbiAgfSxcclxuICBlcnJvcjoge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmVycm9yLmRhcmssXHJcbiAgfSxcclxuICBpbmZvOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluLFxyXG4gIH0sXHJcbiAgd2FybmluZzoge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiBhbWJlcls3MDBdLFxyXG4gIH0sXHJcbiAgaWNvbjoge1xyXG4gICAgZm9udFNpemU6IDIwLFxyXG4gIH0sXHJcbiAgaWNvblZhcmlhbnQ6IHtcclxuICAgIG9wYWNpdHk6IDAuOSxcclxuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gIH0sXHJcbiAgbWVzc2FnZToge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XHJcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xyXG4gIG1lc3NhZ2U/OiBzdHJpbmc7XHJcbiAgb25DbG9zZT86ICgpID0+IHZvaWQ7XHJcbiAgdmFyaWFudDoga2V5b2YgdHlwZW9mIHZhcmlhbnRJY29uO1xyXG59XHJcblxyXG5mdW5jdGlvbiBNeVNuYWNrYmFyQ29udGVudFdyYXBwZXIocHJvcHM6IFByb3BzKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlczEoKTtcclxuICBjb25zdCB7IGNsYXNzTmFtZSwgbWVzc2FnZSwgb25DbG9zZSwgdmFyaWFudCwgLi4ub3RoZXIgfSA9IHByb3BzO1xyXG4gIGNvbnN0IEljb24gPSB2YXJpYW50SWNvblt2YXJpYW50XTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTbmFja2JhckNvbnRlbnRcclxuICAgICAgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXNbdmFyaWFudF0sIGNsYXNzTmFtZSl9XHJcbiAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJjbGllbnQtc25hY2tiYXJcIlxyXG4gICAgICBtZXNzYWdlPXtcclxuICAgICAgICA8c3BhbiBpZD1cImNsaWVudC1zbmFja2JhclwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZXNzYWdlfT5cclxuICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLmljb24sIGNsYXNzZXMuaWNvblZhcmlhbnQpfSAvPlxyXG4gICAgICAgICAge21lc3NhZ2V9XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICB9XHJcbiAgICAgIGFjdGlvbj17W1xyXG4gICAgICAgIDxJY29uQnV0dG9uIGtleT1cImNsb3NlXCIgYXJpYS1sYWJlbD1cImNsb3NlXCIgY29sb3I9XCJpbmhlcml0XCIgb25DbGljaz17b25DbG9zZX0+XHJcbiAgICAgICAgICA8Q2xvc2VJY29uIGNsYXNzTmFtZT17Y2xhc3Nlcy5pY29ufSAvPlxyXG4gICAgICAgIDwvSWNvbkJ1dHRvbj4sXHJcbiAgICAgIF19XHJcbiAgICAgIHsuLi5vdGhlcn1cclxuICAgIC8+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgdXNlU3R5bGVzMiA9IG1ha2VTdHlsZXMoKHRoZW1lOiBUaGVtZSkgPT4gKHtcclxuICBtYXJnaW46IHtcclxuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5pbnRlcmZhY2UgU25hY2tQcm9wcyB7XHJcblx0b3BlbiA6IGJvb2xlYW47XHJcblx0dmFyaWVudDogXCJzdWNjZXNzXCIgfCBcImVycm9yXCIgfCBcIndhcm5pbmdcIiB8IFwiaW5mb1wiO1xyXG4gICAgbWVzc2FnZTogc3RyaW5nO1xyXG4gICAgb3BlbkhhbmRsZXI6ICh2YWw6IGJvb2xlYW4pID0+IHZvaWQ7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3VzdG9taXplZFNuYWNrYmFycyhwcm9wczogU25hY2tQcm9wcykge1xyXG5cdGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMyKCk7XHJcblx0bGV0IHZhbDogYm9vbGVhbiA9IHByb3BzLm9wZW47XHJcblx0bGV0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKHZhbCk7XHJcblx0Y29uc3QgaGFuZGxlQ2xvc2UgPSAoZXZlbnQ/OiBTeW50aGV0aWNFdmVudCwgcmVhc29uPzogc3RyaW5nKSA9PiB7XHJcblx0XHRpZiAocmVhc29uID09PSAnY2xpY2thd2F5Jykge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcbiAgICAgICAgcHJvcHMub3BlbkhhbmRsZXIoZmFsc2UpXHJcblx0XHRzZXRPcGVuKGZhbHNlKTtcclxuXHR9O1xyXG4gIFxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2PlxyXG5cdFx0XHQ8U25hY2tiYXIgYW5jaG9yT3JpZ2luPXt7XHJcblx0XHRcdFx0XHR2ZXJ0aWNhbDogJ2JvdHRvbScsXHJcblx0XHRcdFx0XHRob3Jpem9udGFsOiAnbGVmdCcsXHJcblx0XHRcdFx0fX1cclxuXHRcdFx0XHRvcGVuPXtwcm9wcy5vcGVufVxyXG5cdFx0XHRcdGF1dG9IaWRlRHVyYXRpb249ezYwMDB9XHJcblx0XHRcdFx0b25DbG9zZT17aGFuZGxlQ2xvc2V9XHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8TXlTbmFja2JhckNvbnRlbnRXcmFwcGVyXHJcblx0XHRcdFx0XHRvbkNsb3NlPXtoYW5kbGVDbG9zZX1cclxuXHRcdFx0XHRcdHZhcmlhbnQ9e3Byb3BzLnZhcmllbnR9XHJcblx0XHRcdFx0XHRtZXNzYWdlPXtwcm9wcy5tZXNzYWdlfVxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc2VzLm1hcmdpbn1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQ8L1NuYWNrYmFyPlxyXG4gICBcclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9