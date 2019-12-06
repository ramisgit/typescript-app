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
        react_1.default.createElement(Snack_1.default, { open: open, varient: varient, message: message }),
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
function Snack(props) {
    let [open, setOpen] = react_1.default.useState(props.open);
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };
    return (react_1.default.createElement(CustomizedSnackbars, { closeHandler: handleClose, open: props.open, message: props.message, varient: props.varient }));
}
function CustomizedSnackbars(props) {
    const classes = useStyles2();
    let val = props.open;
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(Snackbar_1.default, { anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'left',
            }, open: props.open, autoHideDuration: 6000, onClose: props.closeHandler },
            react_1.default.createElement(MySnackbarContentWrapper, { onClose: props.closeHandler, variant: props.varient, message: props.message, className: classes.margin }))));
}
exports.default = CustomizedSnackbars;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91bWQvLi9zcmMvY29tcG9uZW50cy9wYWdlcy9JbmRleC50c3giLCJ3ZWJwYWNrOi8vdW1kLy4vc3JjL2NvbXBvbmVudHMvc3RhdGljL1NuYWNrLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtR0FBeUI7QUFFekIsK0ZBQTRDO0FBQzVDLHVKQUFvRDtBQUNwRCw4SUFBOEM7QUFDOUMsd0lBQTBDO0FBQzFDLDZIQUEyRTtBQUMzRSwySUFBNEM7QUFDNUMsb0pBQWtEO0FBQ2xELHdJQUEwQztBQUMxQyxzS0FBOEQ7QUFDOUQsMklBQTRDO0FBQzVDLHVKQUFvRDtBQUNwRCw2SkFBd0Q7QUFDeEQsMklBQTRDO0FBQzVDLDBKQUFzRDtBQUV0RCw0S0FBa0U7QUFDbEUsdUpBQW9EO0FBQ3BELHVKQUFvRDtBQUNwRCwwSkFBc0Q7QUFDdEQsaUhBQW9DO0FBRXBDLE1BQU0sU0FBUyxHQUFHLG1CQUFVLENBQUMsQ0FBQyxLQUFZLEVBQUUsRUFBRSxDQUM3QyxxQkFBWSxDQUFDO0lBQ1osS0FBSyxFQUFFO1FBQ04sT0FBTyxFQUFFLE1BQU07UUFDZixVQUFVLEVBQUUsUUFBUTtRQUNwQixjQUFjLEVBQUUsUUFBUTtLQUN4QjtJQUNELEtBQUssRUFBRTtRQUNOLGVBQWUsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxLQUFLO1FBQy9DLE1BQU0sRUFBRSxnQkFBZ0I7UUFDeEIsU0FBUyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQzNCLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQy9CO0lBQ0QsSUFBSSxFQUFFO1FBQ0wsS0FBSyxFQUFFLE1BQU07UUFDYixXQUFXLEVBQUU7WUFDWixTQUFTLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7U0FDM0I7S0FDRDtJQUNELFNBQVMsRUFBRTtRQUNWLFVBQVUsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUM1QixXQUFXLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDN0IsS0FBSyxFQUFFLE1BQU07S0FDYjtJQUNELFdBQVcsRUFBRTtRQUNaLE1BQU0sRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztLQUN4QjtJQUNELFNBQVMsRUFBRTtRQUNWLFNBQVMsRUFBRSxRQUFRO1FBQ25CLE9BQU8sRUFBRSxZQUFZO1FBQ3JCLEtBQUssRUFBRSxPQUFPO1FBQ2QsTUFBTSxFQUFFLG9CQUFvQjtLQUM1QjtJQUNELElBQUksRUFBRTtRQUNMLE1BQU0sRUFBRSxvQkFBb0I7UUFDNUIsS0FBSyxFQUFFLE1BQU07S0FDYjtJQUNELGNBQWMsRUFBRTtRQUNmLEtBQUssRUFBRSxLQUFLO1FBQ1osT0FBTyxFQUFFLGNBQWM7S0FDdkI7SUFDRCxlQUFlLEVBQUU7UUFDaEIsTUFBTSxFQUFFLE1BQU07UUFDZCxNQUFNLEVBQUUsS0FBSztLQUNiO0NBQ0QsQ0FBQyxDQUNGLENBQUM7QUFLRixTQUFTLFdBQVcsQ0FBQyxLQUFvQjtJQUN4QyxNQUFNLE9BQU8sR0FBRyxTQUFTLEVBQUUsQ0FBQztJQUM1QixNQUFNLENBQUMsU0FBUyxFQUFFLFlBQVksQ0FBQyxHQUFHLGVBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFcEQsZUFBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7UUFDcEIsU0FBUyxRQUFRO1lBQ2hCLFlBQVksQ0FBQyxZQUFZLENBQUMsRUFBRTtnQkFDM0IsSUFBSSxZQUFZLEtBQUssR0FBRyxFQUFFO29CQUN6QixPQUFPLENBQUMsQ0FBQztpQkFDVDtnQkFDRCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUMzQyxDQUFDLENBQUMsQ0FBQztRQUNKLENBQUM7UUFFRCxNQUFNLEtBQUssR0FBRyxXQUFXLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3pDLE9BQU8sR0FBRyxFQUFFO1lBQ1IsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZCLENBQUMsQ0FBQztJQUNKLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQLE9BQU8sQ0FDTCx1Q0FBSyxTQUFTLEVBQUUsT0FBTyxDQUFDLElBQUk7UUFDMUIsOEJBQUMsd0JBQWMsSUFBQyxPQUFPLEVBQUMsYUFBYSxFQUFDLEtBQUssRUFBRSxTQUFTLEdBQUksQ0FDdEQsQ0FDUCxDQUFDO0FBQ0osQ0FBQztBQVNELFNBQVMsWUFBWSxDQUFDLEtBQXdCO0lBQzVDLE1BQU0sT0FBTyxHQUFHLFNBQVMsRUFBRSxDQUFDO0lBQzVCLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEdBQUcsZUFBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUk5QyxNQUFNLFdBQVcsR0FBRyxHQUFHLEVBQUU7UUFDdkIsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pCLENBQUMsQ0FBQztJQUNILElBQUksS0FBSyxDQUFDLElBQUksRUFBQztRQUNkLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNkO0lBQ0EsT0FBTyxDQUNMO1FBQ0UsOEJBQUMsZUFBSyx1QkFDWSx3QkFBd0Isc0JBQ3ZCLDhCQUE4QixFQUMvQyxTQUFTLEVBQUUsT0FBTyxDQUFDLEtBQUssRUFDeEIsSUFBSSxFQUFFLElBQUksRUFDVixPQUFPLEVBQUUsV0FBVyxFQUNwQixvQkFBb0IsUUFDcEIsaUJBQWlCLEVBQUUsa0JBQVEsRUFDM0IsYUFBYSxFQUFFO2dCQUNiLE9BQU8sRUFBRSxHQUFHO2FBQ2I7WUFFRCw4QkFBQyxjQUFJLElBQUMsRUFBRSxFQUFFLElBQUk7Z0JBQ1osdUNBQUssU0FBUyxFQUFFLE9BQU8sQ0FBQyxLQUFLO29CQUMzQixzQ0FBSSxFQUFFLEVBQUMsd0JBQXdCLDRCQUEyQjtvQkFDbkUsd0NBQU0sU0FBUyxFQUFDLFNBQVMsY0FBZTtvQkFDeEMsOEJBQUMsV0FBVyxJQUFDLGFBQWEsRUFBRSxRQUFRLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHO29CQUNsRDs7d0JBQW9CLEtBQUssQ0FBQyxRQUFROzZCQUFRO29CQUMxQzs7d0JBRW9CLHlDQUFLO3FFQUdyQjtvQkFDViw4QkFBQyxnQkFBTSxJQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsTUFBTSxZQUFnQixDQUMvQixDQUNELENBQ0QsQ0FDSixDQUNQLENBQUM7QUFDSixDQUFDO0FBR0QsU0FBUyxVQUFVO0lBQ2xCLE1BQU0sWUFBWSxHQUFPLGVBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUMzQyxNQUFNLE1BQU0sR0FBUSxlQUFLLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDdEMsTUFBTSxVQUFVLEdBQVEsZUFBSyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQzFDLE1BQU0sY0FBYyxHQUFRLGVBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUU5QyxNQUFNLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxHQUFHLGVBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUMsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsR0FBRyxlQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2hELE1BQU0sQ0FBQyxXQUFXLEVBQUUsY0FBYyxDQUFDLEdBQUcsZUFBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1RCxNQUFNLENBQUMsZUFBZSxFQUFFLGtCQUFrQixDQUFDLEdBQUcsZUFBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNsRSxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxHQUFHLGVBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0MsTUFBTSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsR0FBRyxlQUFLLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2xELE1BQU0sQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLEdBQUcsZUFBSyxDQUFDLFFBQVEsQ0FBMkMsTUFBTSxDQUFDLENBQUM7SUFDL0YsTUFBTSxPQUFPLEdBQUcsU0FBUyxFQUFFLENBQUM7SUFHM0IsTUFBTSxnQkFBZ0IsR0FBRyxDQUFDLEtBQTBDLEVBQUUsRUFBRTtRQUN0RSxPQUFPLENBQUUsS0FBSyxDQUFDLE1BQTJCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEQsQ0FBQyxDQUFDO0lBQ0gsTUFBTSxlQUFlLEdBQUcsQ0FBQyxLQUEwQyxFQUFFLEVBQUU7UUFDcEUsTUFBTSxDQUFFLEtBQUssQ0FBQyxNQUEyQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25ELENBQUMsQ0FBQztJQUVGLFNBQVMscUJBQXFCLENBQUUsS0FBVSxFQUFFLElBQWE7UUFDekQsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2IsQ0FBQztJQUNILFNBQVMsR0FBRyxDQUFFLENBQU07UUFDbkIsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ25CLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNmLElBQUksT0FBTyxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUM7UUFDakMsSUFBSSxRQUFRLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xELElBQUksUUFBUSxLQUFLLFNBQVMsSUFBSSxJQUFJLEVBQUM7WUFDbEMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3RCLFVBQVUsQ0FBQywwREFBMEQsQ0FBQyxDQUFDO1lBQ3ZFLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNaO2FBQU07WUFFUixNQUFNLFFBQVEsR0FBRyxZQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBQyxHQUFHLEVBQUMsUUFBUSxFQUFFLElBQUksRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFDLEdBQUcsRUFBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDbkcsUUFBUSxDQUFDLE1BQU0sR0FBRyxHQUFHLEVBQUU7Z0JBQ3RCLElBQUksR0FBRyxHQUFlLElBQUksV0FBVyxDQUFDLG9DQUFvQyxDQUFDLENBQUM7Z0JBQzFFLEdBQUcsQ0FBQyxNQUFNLEdBQUcsR0FBRyxFQUFFO29CQUNuQixjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3BCLENBQUM7Z0JBQ0QsR0FBRyxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUMsRUFBRTtvQkFDdkIsa0JBQWtCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUN2QixJQUFJLEdBQUcsQ0FBQyxJQUFJLEtBQUssS0FBSyxFQUFDO3dCQUM1QixjQUFjLENBQUMsS0FBSyxDQUFDO3dCQUNiLElBQUksR0FBRyxHQUFVLHVDQUF1QyxHQUFHLFFBQVEsQ0FBQzt3QkFDcEUsY0FBYyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO3dCQUNuQyxZQUFZLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO3dCQUM3QyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUM7cUJBQ3BCO2dCQUNGLENBQUM7Z0JBQ0QsR0FBRyxDQUFDLE9BQU8sR0FBRyxHQUFHLEVBQUU7b0JBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztvQkFDckMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUN0QixPQUFPLENBQUMsU0FBUyxHQUFHLDBDQUEwQyxDQUFDO29CQUM3RCxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7b0JBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztvQkFDcEMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUNiLENBQUM7WUFDSixDQUFDO1NBQ0M7SUFDRixDQUFDO0lBQ0QsU0FBUyxrQkFBa0I7UUFDekIsSUFBSSxHQUFHLEdBQVUsY0FBYyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDOUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO0lBQy9CLENBQUM7SUFDRCxPQUFPLENBQ04sOEJBQUMsZUFBSyxDQUFDLFFBQVE7UUFDZCw4QkFBQyxlQUFLLElBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEdBQUc7UUFDeEQsOEJBQUMsY0FBSSxJQUFDLFNBQVMsUUFBQyxFQUFFLEVBQUUsRUFBRTtZQUN0Qiw4QkFBQyxZQUFZLElBQUMsUUFBUSxFQUFFLGVBQWUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLEdBQUc7WUFDbEcsOEJBQUMsbUJBQVMsSUFBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLFNBQVM7Z0JBQ3RDLHdDQUFNLFNBQVMsRUFBRSxPQUFPLENBQUMsSUFBSTtvQkFDNUIsOEJBQUMsbUJBQVM7d0JBQ1QsOEJBQUMsY0FBSSxJQUFDLFNBQVMsUUFBQyxFQUFFLEVBQUUsRUFBRTs0QkFDckIsOEJBQUMsY0FBSSxJQUFDLElBQUksUUFBQyxFQUFFLEVBQUUsRUFBRTtnQ0FDaEIsOEJBQUMsbUJBQVMsSUFDVCxRQUFRLEVBQUUsTUFBTSxFQUNoQixFQUFFLEVBQUMsZ0JBQWdCLEVBQ25CLFNBQVMsRUFBRSxPQUFPLENBQUMsU0FBUyxFQUM1QixLQUFLLEVBQUMseUJBQXlCLEVBQy9CLE9BQU8sRUFBQyxVQUFVLEdBQ2pCLENBQ0k7NEJBQ1AsOEJBQUMsY0FBSSxJQUFDLFNBQVMsUUFBQyxFQUFFLEVBQUUsQ0FBQyxFQUFHLE9BQU8sRUFBQyxZQUFZLEVBQUMsVUFBVSxFQUFDLFlBQVk7Z0NBQ25FLDhCQUFDLGdCQUFNLElBQUMsR0FBRyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUMsZUFBZSxFQUFFLE9BQU8sRUFBQyxXQUFXLEVBQUMsS0FBSyxFQUFDLFNBQVMsVUFBYSxDQUNqSCxDQUNELENBQ0k7b0JBQ1osOEJBQUMsbUJBQVM7d0JBQ0EsOEJBQUMsY0FBSSxJQUFDLFNBQVMsUUFBQyxFQUFFLEVBQUUsRUFBRTs0QkFDcEIsOEJBQUMsY0FBSSxJQUFDLElBQUksUUFBQyxFQUFFLEVBQUUsQ0FBQztnQ0FDM0IsOEJBQUMscUJBQVcsSUFBQyxTQUFTLEVBQUMsVUFBVSxFQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsV0FBVztvQ0FDekQsOEJBQUMsbUJBQVMsSUFBQyxTQUFTLEVBQUMsUUFBUSxnQkFBc0I7b0NBQ25ELDhCQUFDLG9CQUFVLGtCQUFZLFFBQVEsRUFBQyxJQUFJLEVBQUMsU0FBUyxFQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFLEdBQUc7d0NBQ3pGLDhCQUFDLDBCQUFnQixJQUFDLEtBQUssRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFFLDhCQUFDLGVBQUssSUFBRSxLQUFLLEVBQUMsU0FBUyxHQUFHLEVBQUUsS0FBSyxFQUFDLE9BQU8sRUFBQyxjQUFjLEVBQUMsT0FBTyxHQUFFO3dDQUMzRyw4QkFBQywwQkFBZ0IsSUFBQyxLQUFLLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBRSw4QkFBQyxlQUFLLElBQUUsS0FBSyxFQUFDLFNBQVMsR0FBRyxFQUFFLEtBQUssRUFBQyxPQUFPLEVBQUMsY0FBYyxFQUFDLE9BQU8sR0FBRSxDQUNoRyxDQUNELENBQ0Q7NEJBQ1AsOEJBQUMsY0FBSSxJQUFDLElBQUksUUFBQyxFQUFFLEVBQUUsQ0FBQztnQ0FDM0IsOEJBQUMscUJBQVcsSUFBQyxTQUFTLEVBQUMsVUFBVSxFQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsV0FBVztvQ0FDekQsOEJBQUMsbUJBQVMsSUFBQyxTQUFTLEVBQUMsUUFBUSxnQkFBc0I7b0NBQ25ELDhCQUFDLG9CQUFVLGtCQUFZLFFBQVEsRUFBQyxJQUFJLEVBQUMsU0FBUyxFQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLGVBQWUsRUFBRSxHQUFHO3dDQUN2Riw4QkFBQywwQkFBZ0IsSUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLE9BQU8sRUFBRSw4QkFBQyxlQUFLLE9BQUcsRUFBRSxLQUFLLEVBQUMsS0FBSyxFQUFDLGNBQWMsRUFBQyxPQUFPLEdBQUU7d0NBQ3RGLDhCQUFDLDBCQUFnQixJQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsT0FBTyxFQUFFLDhCQUFDLGVBQUssT0FBRyxFQUFFLEtBQUssRUFBQyxLQUFLLEVBQUMsY0FBYyxFQUFDLE9BQU8sR0FBRTt3Q0FDdEYsOEJBQUMsMEJBQWdCLElBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxPQUFPLEVBQUUsOEJBQUMsZUFBSyxPQUFHLEVBQUUsS0FBSyxFQUFDLEtBQUssRUFBQyxjQUFjLEVBQUMsT0FBTyxHQUFFO3dDQUN0Riw4QkFBQywwQkFBZ0IsSUFBQyxLQUFLLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBRSw4QkFBQyxlQUFLLE9BQUcsRUFBRSxLQUFLLEVBQUMsTUFBTSxFQUFDLGNBQWMsRUFBQyxPQUFPLEdBQUU7d0NBQy9GLDhCQUFDLDBCQUFnQixJQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsT0FBTyxFQUFFLDhCQUFDLGVBQUssT0FBRyxFQUFFLEtBQUssRUFBQyxLQUFLLEVBQUMsY0FBYyxFQUFDLE9BQU8sR0FBRTt3Q0FDdEYsOEJBQUMsMEJBQWdCLElBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxPQUFPLEVBQUUsOEJBQUMsZUFBSyxPQUFHLEVBQUUsS0FBSyxFQUFDLEtBQUssRUFBQyxjQUFjLEVBQUMsT0FBTyxHQUFFLENBQ3BFLENBQ0QsQ0FDRCxDQUNGLENBQ0csQ0FDUDtnQkFDUCw4QkFBQyxjQUFJLElBQUMsU0FBUyxRQUFDLEVBQUUsRUFBRSxFQUFFO29CQUNwQiw4QkFBQyxjQUFJLElBQUMsRUFBRSxFQUFFLENBQUM7d0JBQ1QsOEJBQUMsbUJBQVMsSUFBQyxLQUFLLEVBQUUsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFDLEVBQUUsU0FBUyxFQUFDLGlCQUFpQixFQUFDLEdBQUcsRUFBRSxZQUFZOzRCQUNqRiw4QkFBQyxnQkFBTSxJQUFDLEtBQUssRUFBQyxXQUFXLEVBQUMsR0FBRyxFQUFFLGNBQWMsRUFBRSxPQUFPLEVBQUUsa0JBQWtCLGVBQW1CLENBQ25GLENBQ1AsQ0FDRixDQUNHLENBQ1gsQ0FDYyxDQUNyQixDQUFDO0FBQ0osQ0FBQztBQUNELE1BQU0sU0FBVSxTQUFRLGVBQUssQ0FBQyxTQUFTO0lBQ3RDLE1BQU07UUFDTCxPQUFPLENBQ04sOEJBQUMsZUFBSztZQUNMLDhCQUFDLG1CQUFTO2dCQUNULDhCQUFDLG9CQUFVLElBQUMsT0FBTyxFQUFDLElBQUksRUFBQyxTQUFTLEVBQUMsSUFBSTtvQkFDdEMsNEVBQXVDLENBQzNCO2dCQUNiLDhCQUFDLG9CQUFVLElBQUMsU0FBUyxFQUFDLEdBQUc7O29CQUdSLHlDQUFLO29CQUFBLHlDQUFLO29CQUFBLHlDQUFLOytFQUVuQixDQUNGLENBQ0wsQ0FDUjtJQUNGLENBQUM7Q0FDRDtBQUNELE1BQXFCLEtBQU0sU0FBUSxlQUFLLENBQUMsU0FBUztJQUNqRCxNQUFNO1FBQ0wsT0FBTyxDQUNOLDhCQUFDLGVBQUssQ0FBQyxRQUFRO1lBQ2QsOEJBQUMsVUFBVSxPQUFFO1lBQ2IsOEJBQUMsU0FBUyxPQUFFLENBQ0ksQ0FDakIsQ0FBQztJQUNILENBQUM7Q0FDRDtBQVRELHdCQVNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pURCxtR0FBOEM7QUFDOUMsc0dBQXdCO0FBRXhCLHFKQUE2RDtBQUM3RCxtSUFBaUQ7QUFDakQsZ0lBQStDO0FBQy9DLG1JQUFpRDtBQUNqRCw2SEFBd0Q7QUFDeEQsMEpBQXNEO0FBQ3RELG9KQUFrRDtBQUNsRCx5S0FBZ0U7QUFDaEUseUlBQXFEO0FBQ3JELDZIQUE2RDtBQUU3RCxNQUFNLFdBQVcsR0FBRztJQUNsQixPQUFPLEVBQUUscUJBQWU7SUFDeEIsT0FBTyxFQUFFLGlCQUFXO0lBQ3BCLEtBQUssRUFBRSxlQUFTO0lBQ2hCLElBQUksRUFBRSxjQUFRO0NBQ2YsQ0FBQztBQUVGLE1BQU0sVUFBVSxHQUFHLG1CQUFVLENBQUMsQ0FBQyxLQUFZLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDL0MsT0FBTyxFQUFFO1FBQ1AsZUFBZSxFQUFFLGNBQUssQ0FBQyxHQUFHLENBQUM7S0FDNUI7SUFDRCxLQUFLLEVBQUU7UUFDTCxlQUFlLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSTtLQUMxQztJQUNELElBQUksRUFBRTtRQUNKLGVBQWUsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJO0tBQzVDO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsZUFBZSxFQUFFLGNBQUssQ0FBQyxHQUFHLENBQUM7S0FDNUI7SUFDRCxJQUFJLEVBQUU7UUFDSixRQUFRLEVBQUUsRUFBRTtLQUNiO0lBQ0QsV0FBVyxFQUFFO1FBQ1gsT0FBTyxFQUFFLEdBQUc7UUFDWixXQUFXLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7S0FDOUI7SUFDRCxPQUFPLEVBQUU7UUFDUCxPQUFPLEVBQUUsTUFBTTtRQUNmLFVBQVUsRUFBRSxRQUFRO0tBQ3JCO0NBQ0YsQ0FBQyxDQUFDLENBQUM7QUFTSixTQUFTLHdCQUF3QixDQUFDLEtBQVk7SUFDNUMsTUFBTSxPQUFPLEdBQUcsVUFBVSxFQUFFLENBQUM7SUFDN0IsTUFBTSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sS0FBZSxLQUFLLEVBQWxCLHFFQUFrQixDQUFDO0lBQ2pFLE1BQU0sSUFBSSxHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUVsQyxPQUFPLENBQ0wsOEJBQUMseUJBQWUsa0JBQ2QsU0FBUyxFQUFFLGNBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsU0FBUyxDQUFDLHNCQUMzQixpQkFBaUIsRUFDbEMsT0FBTyxFQUNMLHdDQUFNLEVBQUUsRUFBQyxpQkFBaUIsRUFBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLE9BQU87WUFDbkQsOEJBQUMsSUFBSSxJQUFDLFNBQVMsRUFBRSxjQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsV0FBVyxDQUFDLEdBQUk7WUFDM0QsT0FBTyxDQUNILEVBRVQsTUFBTSxFQUFFO1lBQ04sOEJBQUMsb0JBQVUsSUFBQyxHQUFHLEVBQUMsT0FBTyxnQkFBWSxPQUFPLEVBQUMsS0FBSyxFQUFDLFNBQVMsRUFBQyxPQUFPLEVBQUUsT0FBTztnQkFDekUsOEJBQUMsZUFBUyxJQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsSUFBSSxHQUFJLENBQzNCO1NBQ2QsSUFDRyxLQUFLLEVBQ1QsQ0FDSCxDQUFDO0FBQ0osQ0FBQztBQUVELE1BQU0sVUFBVSxHQUFHLG1CQUFVLENBQUMsQ0FBQyxLQUFZLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDL0MsTUFBTSxFQUFFO1FBQ04sTUFBTSxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0tBQ3pCO0NBQ0YsQ0FBQyxDQUFDLENBQUM7QUFXSixTQUFTLEtBQUssQ0FBQyxLQUFpQjtJQUM1QixJQUFJLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxHQUFHLGVBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pELE1BQU0sV0FBVyxHQUFHLENBQUMsS0FBc0IsRUFBRSxNQUFlLEVBQUUsRUFBRTtRQUM1RCxJQUFJLE1BQU0sS0FBSyxXQUFXLEVBQUU7WUFDeEIsT0FBTztTQUNWO1FBRUQsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25CLENBQUMsQ0FBQztJQUdGLE9BQU8sQ0FDSCw4QkFBQyxtQkFBbUIsSUFBQyxZQUFZLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTyxHQUFHLENBR3RILENBQUM7QUFDTixDQUFDO0FBUUQsU0FBd0IsbUJBQW1CLENBQUMsS0FBa0I7SUFDN0QsTUFBTSxPQUFPLEdBQUcsVUFBVSxFQUFFLENBQUM7SUFDN0IsSUFBSSxHQUFHLEdBQVksS0FBSyxDQUFDLElBQUksQ0FBQztJQUU5QixPQUFPLENBQ047UUFDQyw4QkFBQyxrQkFBUSxJQUFDLFlBQVksRUFBRTtnQkFDdEIsUUFBUSxFQUFFLFFBQVE7Z0JBQ2xCLFVBQVUsRUFBRSxNQUFNO2FBQ2xCLEVBQ0QsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJLEVBQ2hCLGdCQUFnQixFQUFFLElBQUksRUFDdEIsT0FBTyxFQUFFLEtBQUssQ0FBQyxZQUFZO1lBRTNCLDhCQUFDLHdCQUF3QixJQUNULE9BQU8sRUFBRSxLQUFLLENBQUMsWUFBWSxFQUMxQyxPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFDdEIsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPLEVBQ3RCLFNBQVMsRUFBRSxPQUFPLENBQUMsTUFBTSxHQUN4QixDQUNRLENBRU4sQ0FDTixDQUFDO0FBQ0gsQ0FBQztBQXhCRCxzQ0F3QkMiLCJmaWxlIjoibWFpbi4xYjY0OGI5YTY2NGU5NTJmYmZjNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0IHsgcG9zdCwgZ2V0IH0gZnJvbSAnLi4vc3RhdGljL2F4aW9zJztcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXInO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzLCBUaGVtZSwgY3JlYXRlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IE1vZGFsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01vZGFsJztcclxuaW1wb3J0IEJhY2tkcm9wIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0JhY2tkcm9wJztcclxuaW1wb3J0IEZhZGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRmFkZSc7XHJcbmltcG9ydCBMaW5lYXJQcm9ncmVzcyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaW5lYXJQcm9ncmVzcyc7XHJcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XHJcbmltcG9ydCBGb3JtR3JvdXAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUdyb3VwJztcclxuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sJztcclxuaW1wb3J0IFJhZGlvIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1JhZGlvJztcclxuaW1wb3J0IFJhZGlvR3JvdXAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUmFkaW9Hcm91cCc7XHJcbmltcG9ydCBGb3JtSGVscGVyVGV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtSGVscGVyVGV4dCc7XHJcbmltcG9ydCBGb3JtQ29udHJvbExhYmVsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sTGFiZWwnO1xyXG5pbXBvcnQgRm9ybUxhYmVsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1MYWJlbCc7XHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCBTbmFjayBmcm9tICcuLi9zdGF0aWMvU25hY2snO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PlxyXG5cdGNyZWF0ZVN0eWxlcyh7XHJcblx0XHRtb2RhbDoge1xyXG5cdFx0XHRkaXNwbGF5OiAnZmxleCcsXHJcblx0XHRcdGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG5cdFx0XHRqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcblx0XHR9LFxyXG5cdFx0cGFwZXI6IHtcclxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXHJcblx0XHRcdGJvcmRlcjogJzJweCBzb2xpZCAjMDAwJyxcclxuXHRcdFx0Ym94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzVdLFxyXG5cdFx0XHRwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIsIDQsIDMpLFxyXG5cdFx0fSxcclxuXHRcdHJvb3Q6IHtcclxuXHRcdFx0d2lkdGg6ICcxMDAlJyxcclxuXHRcdFx0JyYgPiAqICsgKic6IHtcclxuXHRcdFx0XHRtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMiksXHJcblx0XHRcdH0sXHJcblx0XHR9LFxyXG5cdFx0dGV4dEZpZWxkOiB7XHJcblx0XHRcdG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMSksXHJcblx0XHRcdG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDEpLFxyXG5cdFx0XHR3aWR0aDogXCIxMDAlXCJcclxuXHRcdH0sXHJcblx0XHRmb3JtQ29udHJvbDoge1xyXG5cdFx0XHRtYXJnaW46IHRoZW1lLnNwYWNpbmcoMyksXHJcblx0XHR9LFxyXG5cdFx0aW5wdXRGb3JtOiB7XHJcblx0XHRcdHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuXHRcdFx0cGFkZGluZzogXCIzMHB4IDAgMCAwXCIsXHJcblx0XHRcdHdpZHRoOiBcIjEwMHZ3XCIsXHJcblx0XHRcdG1hcmdpbjogXCIwcHggYXV0byA1MHB4IGF1dG9cIixcclxuXHRcdH0sXHJcblx0XHRmb3JtOiB7XHJcblx0XHRcdG1hcmdpbjogXCIwcHggYXV0byAxMHB4IGF1dG9cIixcclxuXHRcdFx0d2lkdGg6IFwiMTAwJVwiXHJcblx0XHR9LFxyXG5cdFx0aW5wdXRGb3JtSW5wdXQ6IHtcclxuXHRcdFx0d2lkdGg6IFwiODUlXCIsXHJcblx0XHRcdGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXHJcblx0XHR9LFxyXG5cdFx0aW5wdXRGb3JtQnV0dG9uOiB7XHJcblx0XHRcdGhlaWdodDogXCIxMDAlXCIsXHJcblx0XHRcdG1hcmdpbjogXCIwcHhcIixcclxuXHRcdH1cclxuXHR9KSxcclxuKTtcclxuXHJcbmludGVyZmFjZSBQcm9ncmVzc1Byb3BzIHtcclxuXHRwcm9ncmVzc1ZhbHVlOiBudW1iZXI7XHJcbn1cclxuZnVuY3Rpb24gUHJvZ3Jlc3NCYXIocHJvcHM6IFByb2dyZXNzUHJvcHMpIHtcclxuXHRjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblx0Y29uc3QgW2NvbXBsZXRlZCwgc2V0Q29tcGxldGVkXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xyXG5cclxuXHRSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0ZnVuY3Rpb24gcHJvZ3Jlc3MoKSB7XHJcblx0XHRcdHNldENvbXBsZXRlZChvbGRDb21wbGV0ZWQgPT4ge1xyXG5cdFx0XHRcdGlmIChvbGRDb21wbGV0ZWQgPT09IDEwMCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIDA7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHJldHVybiBNYXRoLm1pbihwcm9wcy5wcm9ncmVzc1ZhbHVlLCAxMDApO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCB0aW1lciA9IHNldEludGVydmFsKHByb2dyZXNzLCA1MDApO1xyXG5cdFx0cmV0dXJuICgpID0+IHtcclxuICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcik7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICA8TGluZWFyUHJvZ3Jlc3MgdmFyaWFudD1cImRldGVybWluYXRlXCIgdmFsdWU9e2NvbXBsZXRlZH0gLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcblxyXG5pbnRlcmZhY2UgbG9hZGluZ01vZGFsUHJvcHMge1xyXG5cdHByb2dyZXNzOiBzdHJpbmc7XHJcblx0b25IaWRlOiAoKSA9PiB2b2lkO1xyXG5cdHNob3c6IGJvb2xlYW47XHJcbn1cclxuXHJcbmZ1bmN0aW9uIExvYWRpbmdNb2RhbChwcm9wczogbG9hZGluZ01vZGFsUHJvcHMpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuIFxyXG5cclxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcclxuICAgIHNldE9wZW4oZmFsc2UpO1xyXG4gIH07XHJcblx0aWYgKHByb3BzLnNob3cpe1xyXG5cdFx0c2V0T3Blbih0cnVlKTtcclxuXHR9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cInRyYW5zaXRpb24tbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJ0cmFuc2l0aW9uLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubW9kYWx9XHJcbiAgICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICBjbG9zZUFmdGVyVHJhbnNpdGlvblxyXG4gICAgICAgIEJhY2tkcm9wQ29tcG9uZW50PXtCYWNrZHJvcH1cclxuICAgICAgICBCYWNrZHJvcFByb3BzPXt7XHJcbiAgICAgICAgICB0aW1lb3V0OiA1MDAsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxGYWRlIGluPXtvcGVufT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfT5cclxuICAgICAgICAgICAgPGgyIGlkPVwidHJhbnNpdGlvbi1tb2RhbC10aXRsZVwiPkRvd25sb2FkaW5nIHlvdXIgZmlsZTwvaDI+XHJcblx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5Mb2FkaW5nPC9zcGFuPlxyXG5cdFx0XHQ8UHJvZ3Jlc3NCYXIgcHJvZ3Jlc3NWYWx1ZT17cGFyc2VJbnQocHJvcHMucHJvZ3Jlc3MpfS8+XHJcbiAgICAgICAgPGg0PkRvd25sb2FkaW5nLi4uIHtwcm9wcy5wcm9ncmVzc30gJTwvaDQ+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICBQbGVhc2Ugd2FpdCB3aGlsZSB5b3VyIGZpbGUgaXMgYmVpbmcgZG93bmxvYWRlZC4gRmVlbCBmcmVlIHRvIHVzZSB0aGlzIHNlcnZpY2UgYXMgbWFueVxyXG4gICAgICAgICAgdGltZXMgYXMgeW91IHdhbnQuPGJyLz5cclxuXHJcbiAgICAgICAgICBBIGJ1dHRvbiBsaW5rIHdpbGwgYmUgcHJvdmlkZWQgc2hvcnRseS4uLi5cclxuICAgICAgICA8L3A+XHJcblx0XHQ8QnV0dG9uIG9uQ2xpY2s9e3Byb3BzLm9uSGlkZX0+Q2xvc2U8L0J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvRmFkZT5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBTdWJtaXRGb3JtKCkge1xyXG5cdGNvbnN0IGNvbnRhaW5lclJlZjphbnkgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuXHRjb25zdCBnZXRSZWY6IGFueSA9IFJlYWN0LmNyZWF0ZVJlZigpO1xyXG5cdGNvbnN0IHdhcm5pbmdSZWY6IGFueSA9IFJlYWN0LmNyZWF0ZVJlZigpO1xyXG5cdGNvbnN0IGRvd25sb2FkQnRuUmVmOiBhbnkgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuXHRcclxuXHRjb25zdCBbZXh0LCBzZXRFeHRdID0gUmVhY3QudXNlU3RhdGUoXCJtcDRcIik7XHJcblx0Y29uc3QgW3R5cGUsIHNldFR5cGVdID0gUmVhY3QudXNlU3RhdGUoXCJBdWRpb1wiKTtcclxuXHRjb25zdCBbc2hvd0xvYWRpbmcsIHNldFNob3dMb2FkaW5nXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBbbG9hZGluZ1Byb2dyZXNzLCBzZXRMb2FkaW5nUHJvZ3Jlc3NdID0gUmVhY3QudXNlU3RhdGUoXCIwXCIpO1xyXG5cdGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuXHRcdGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG5cdGNvbnN0IFt2YXJpZW50LCBzZXRWYXJpZW50XSA9IFJlYWN0LnVzZVN0YXRlPFwic3VjY2Vzc1wiIHwgXCJlcnJvclwiIHwgXCJ3YXJuaW5nXCIgfCBcImluZm9cIj4oXCJpbmZvXCIpO1xyXG5cdGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZVR5cGUgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XHJcbiAgICBzZXRUeXBlKChldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUpO1xyXG4gIH07XHJcblx0Y29uc3QgaGFuZGxlQ2hhbmdlRXh0ID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xyXG4gICAgc2V0RXh0KChldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUpO1xyXG4gIH07XHRcclxuXHRcclxuXHQgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlQWxlcnRTaG93IChldmVudDogYW55LCBzaG93OiBib29sZWFuKSB7XHJcblx0XHRzZXRPcGVuKHNob3cpO1xyXG4gIFx0fVxyXG5cdGZ1bmN0aW9uIGdldCAoZTogYW55KSB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRzZXRPcGVuKGZhbHNlKTtcclxuXHRcdHZhciB3YXJuaW5nID0gd2FybmluZ1JlZi5jdXJyZW50O1xyXG5cdFx0dmFyIFVSTGlucHV0ID0gZ2V0UmVmLmN1cnJlbnQudmFsdWUuc3BsaXQoXCI9XCIpWzFdO1xyXG5cdFx0aWYgKFVSTGlucHV0ID09PSB1bmRlZmluZWQgfHwgbnVsbCl7XHJcblx0XHRcdHNldFZhcmllbnQoXCJ3YXJuaW5nXCIpO1xyXG5cdFx0XHRzZXRNZXNzYWdlKFwiSW52YWxpZCB1cmwgdHJ5IGFub3RoZXIgb3IgbG9vayBjYXJlZnVsbHkgdG8gY29ycmVjdCBpdC5cIik7XHJcblx0XHRcdHNldE9wZW4odHJ1ZSk7XHJcblx0ICBcdH0gZWxzZSB7XHJcblx0XHRcdFxyXG5cdFx0XHRjb25zdCByZXNwb25zZSA9IHBvc3QoXCIvZG93bmxvYWRcIiwgSlNPTi5zdHJpbmdpZnkoe3VybDpVUkxpbnB1dCwgdHlwZTp0eXBlLCBleHRlbnNpb246ZXh0fSksIHRydWUpO1xyXG5cdFx0XHRyZXNwb25zZS5vbmxvYWQgPSAoKSA9PiB7XHJcblx0XHRcdFx0dmFyIHNzZTpFdmVudFNvdXJjZSA9IG5ldyBFdmVudFNvdXJjZShcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9kb3dubG9hZC9zc2VcIik7XHJcblx0XHQgIFx0XHRzc2Uub25vcGVuID0gKCkgPT4ge1xyXG5cdFx0XHRcdFx0c2V0U2hvd0xvYWRpbmcodHJ1ZSk7XHJcblx0XHQgIFx0XHR9XHJcblx0ICBcdFx0XHRzc2Uub25tZXNzYWdlID0gZXZ0ID0+IHtcclxuXHRcdFx0XHRcdHNldExvYWRpbmdQcm9ncmVzcyhldnQuZGF0YSk7XHJcblx0ICAgICAgICBcdFx0aWYgKGV2dC5kYXRhID09PSBcIjEwMFwiKXtcclxuXHRcdFx0XHRcdFx0c2V0U2hvd0xvYWRpbmcoZmFsc2UpXHJcblx0ICAgICAgICAgIFx0XHRcdHZhciB1cmw6c3RyaW5nID0gXCJodHRwOi8vbG9jYWxob3N0OjgwODAvZG93bmxvYWQvdmlkZW8vXCIgKyBVUkxpbnB1dDtcclxuXHQgICAgICAgICAgXHRcdFx0ZG93bmxvYWRCdG5SZWYuY3VycmVudC52YWx1ZSA9IHVybDtcclxuXHQgICAgICAgICAgXHRcdFx0Y29udGFpbmVyUmVmLmN1cnJlbnQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuXHQgICAgICAgICAgXHRcdFx0c3NlLmNsb3NlKCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHNzZS5vbmVycm9yID0gKCkgPT4ge1xyXG4gIFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIkV2ZW50U291cmNlIGZhaWxlZC5cIik7XHJcblx0XHRcdFx0XHRzZXRTaG93TG9hZGluZyhmYWxzZSk7XHJcblx0XHRcdFx0XHR3YXJuaW5nLmlubmVySFRNTCA9IFwiRmFpbGVkIHRvIGVzdGFibGlzaCBjb25uZWN0aW9uIHRvIHNlcnZlclwiO1xyXG4gIFx0XHRcdFx0XHR3YXJuaW5nLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgXHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiQ2xvc2luZyBjb25uZWN0b24uLi5cIik7XHJcbiAgXHRcdFx0XHRcdHNzZS5jbG9zZSgpO1xyXG4gIFx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcbiAgXHRcdH1cclxuICBcdH1cclxuICBcdGZ1bmN0aW9uIGRvd25sb2FkRnJvbVNlcnZlciAoKSB7XHJcbiAgICBcdHZhciB1cmw6c3RyaW5nID0gZG93bmxvYWRCdG5SZWYuY3VycmVudC52YWx1ZTtcclxuICAgIFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XHJcblx0fVxyXG5cdHJldHVybiAoXHJcblx0XHQ8UmVhY3QuRnJhZ21lbnQ+XHJcblx0XHRcdDxTbmFjayBvcGVuPXtvcGVufSB2YXJpZW50PXt2YXJpZW50fSBtZXNzYWdlPXttZXNzYWdlfS8+XHJcblx0XHRcdDxHcmlkIGNvbnRhaW5lciB4cz17MTJ9ID5cclxuXHRcdFx0PExvYWRpbmdNb2RhbCBwcm9ncmVzcz17bG9hZGluZ1Byb2dyZXNzfSBzaG93PXtzaG93TG9hZGluZ30gb25IaWRlPXsoKSA9PiBzZXRTaG93TG9hZGluZyhmYWxzZSl9Lz5cclxuXHRcdFx0PENvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMuaW5wdXRGb3JtfT5cclxuXHRcdFx0XHQ8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybX0+XHJcblx0XHRcdFx0XHQ8Rm9ybUdyb3VwPlxyXG5cdFx0XHRcdFx0XHQ8R3JpZCBjb250YWluZXIgeHM9ezEyfT5cclxuXHRcdFx0XHRcdFx0XHQ8R3JpZCBpdGVtIHhzPXsxMH0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8VGV4dEZpZWxkXHJcblx0XHRcdFx0XHRcdFx0XHRcdGlucHV0UmVmPXtnZXRSZWZ9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGlkPVwic3RhbmRhcmQtYmFzaWNcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0dmFyaWFudD1cIm91dGxpbmVkXCJcclxuXHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0XHRcdDxHcmlkIGNvbnRhaW5lciB4cz17Mn0gIGp1c3RpZnk9XCJmbGV4LXN0YXJ0XCIgYWxpZ25JdGVtcz1cImZsZXgtc3RhcnRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxCdXR0b24gcmVmPXtnZXRSZWZ9IG9uQ2xpY2s9e2dldH0gY2xhc3NOYW1lPXtjbGFzc2VzLmlucHV0Rm9ybUJ1dHRvbn0gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwicHJpbWFyeVwiPkdFVDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0PC9Gb3JtR3JvdXA+XHJcblx0XHRcdFx0XHQ8Rm9ybUdyb3VwPlxyXG5cdCAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHhzPXsxMn0+XHJcblx0ICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9PlxyXG5cdFx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2wgY29tcG9uZW50PVwiZmllbGRzZXRcIiBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybUNvbnRyb2x9PlxyXG5cdFx0XHRcdFx0ICAgICAgICA8Rm9ybUxhYmVsIGNvbXBvbmVudD1cImxlZ2VuZFwiPkRhdGEgVHlwZTwvRm9ybUxhYmVsPlxyXG5cdFx0XHRcdFx0ICAgICAgICA8UmFkaW9Hcm91cCBhcmlhLWxhYmVsPVwiZ2VuZGVyXCIgbmFtZT1cImdlbmRlcjFcIiB2YWx1ZT17dHlwZX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZVR5cGV9IHJvdz5cclxuXHRcdFx0XHRcdCAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbCB2YWx1ZT1cIkF1ZGlvXCIgY29udHJvbD17PFJhZGlvICBjb2xvcj1cInByaW1hcnlcIiAvPn0gbGFiZWw9XCJBdWRpb1wiIGxhYmVsUGxhY2VtZW50PVwic3RhcnRcIi8+XHJcblx0XHRcdFx0XHQgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWwgdmFsdWU9XCJWaWRlb1wiIGNvbnRyb2w9ezxSYWRpbyAgY29sb3I9XCJwcmltYXJ5XCIgLz59IGxhYmVsPVwiVmlkZW9cIiBsYWJlbFBsYWNlbWVudD1cInN0YXJ0XCIvPlxyXG5cdFx0XHRcdFx0ICAgICAgICA8L1JhZGlvR3JvdXA+XHJcblx0XHRcdFx0XHQgICAgICA8L0Zvcm1Db250cm9sPlxyXG5cdCAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblx0ICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxyXG5cdFx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2wgY29tcG9uZW50PVwiZmllbGRzZXRcIiBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybUNvbnRyb2x9PlxyXG5cdFx0XHRcdFx0ICAgICAgICA8Rm9ybUxhYmVsIGNvbXBvbmVudD1cImxlZ2VuZFwiPkZpbGUgVHlwZTwvRm9ybUxhYmVsPlxyXG5cdFx0XHRcdFx0ICAgICAgICA8UmFkaW9Hcm91cCBhcmlhLWxhYmVsPVwiZ2VuZGVyXCIgbmFtZT1cImdlbmRlcjJcIiB2YWx1ZT17ZXh0fSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlRXh0fSByb3c+XHJcblx0XHRcdFx0XHQgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWwgdmFsdWU9XCJtcDRcIiBjb250cm9sPXs8UmFkaW8gLz59IGxhYmVsPVwibXA0XCIgbGFiZWxQbGFjZW1lbnQ9XCJzdGFydFwiLz5cclxuXHRcdFx0XHRcdCAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbCB2YWx1ZT1cIm1wM1wiIGNvbnRyb2w9ezxSYWRpbyAvPn0gbGFiZWw9XCJtcDNcIiBsYWJlbFBsYWNlbWVudD1cInN0YXJ0XCIvPlxyXG5cdFx0XHRcdFx0ICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsIHZhbHVlPVwid2F2XCIgY29udHJvbD17PFJhZGlvIC8+fSBsYWJlbD1cIndhdlwiIGxhYmVsUGxhY2VtZW50PVwic3RhcnRcIi8+XHJcblx0XHRcdFx0XHQgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWwgdmFsdWU9XCJ3ZWJtXCIgY29udHJvbD17PFJhZGlvIC8+fSBsYWJlbD1cIndlYm1cIiBsYWJlbFBsYWNlbWVudD1cInN0YXJ0XCIvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PEZvcm1Db250cm9sTGFiZWwgdmFsdWU9XCJmbHZcIiBjb250cm9sPXs8UmFkaW8gLz59IGxhYmVsPVwiZmx2XCIgbGFiZWxQbGFjZW1lbnQ9XCJzdGFydFwiLz5cclxuXHRcdFx0XHRcdFx0XHRcdDxGb3JtQ29udHJvbExhYmVsIHZhbHVlPVwiaGxzXCIgY29udHJvbD17PFJhZGlvIC8+fSBsYWJlbD1cImhsc1wiIGxhYmVsUGxhY2VtZW50PVwic3RhcnRcIi8+XHJcblx0XHRcdFx0XHQgICAgICAgIDwvUmFkaW9Hcm91cD5cclxuXHRcdFx0XHRcdCAgICAgIDwvRm9ybUNvbnRyb2w+XHJcblx0ICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHQgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHQgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuXHQgICAgICAgICAgPC9mb3JtPlxyXG5cdCAgICAgICAgICA8R3JpZCBjb250YWluZXIgeHM9ezEyfT5cclxuXHQgICAgICAgICAgICA8R3JpZCB4cz17NH0+XHJcblx0ICAgICAgICAgICAgICA8Q29udGFpbmVyIHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwifX0gY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCIgcmVmPXtjb250YWluZXJSZWZ9PlxyXG5cdCAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwic2Vjb25kYXJ5XCIgcmVmPXtkb3dubG9hZEJ0blJlZn0gb25DbGljaz17ZG93bmxvYWRGcm9tU2VydmVyfT5Eb3dubG9hZDwvQnV0dG9uPlxyXG5cdCAgICAgICAgICAgICAgPC9Db250YWluZXI+XHJcblx0ICAgICAgICAgICAgPC9HcmlkPlxyXG5cdCAgICAgICAgICA8L0dyaWQ+XHJcblx0ICAgICAgICA8L0NvbnRhaW5lcj5cclxuXHRcdFx0PC9HcmlkPlxyXG5cdCAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcblx0XHQpO1xyXG59XHJcbmNsYXNzIEluZm9QYW5lbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblx0cmVuZGVyKCl7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8UGFwZXI+XHJcblx0XHRcdFx0PENvbnRhaW5lcj5cclxuXHRcdFx0XHRcdDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiIGNvbXBvbmVudD1cImgzXCI+XHJcblx0XHRcdFx0XHRcdDxpPlRoaXMgc2l0ZSBpcyB1bmRlciBjb25zdHJ1Y3Rpb24uPC9pPlxyXG5cdFx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxyXG5cdFx0XHRcdFx0PFR5cG9ncmFwaHkgY29tcG9uZW50PVwicFwiPlxyXG5cdFx0XHRcdFx0XHRUaGUgbWFpbiByZWFzb24gZm9yIHRoaXMgc2l0ZSBpcyB0byBkb3dubG9hZCBhdWRpbyBmaWxlcyBmcm9tIHlvdXR1YmUvIHNvb24gd2lsbCBzdXBwb3J0IG1vcmVcclxuXHRcdFx0XHRcdFx0c2l0ZXMgYW5kIHBvc3NpYmx5IHRoZSBhYmlsaXR5IHRvIGRvd25sb2FkIHRoZSB3aG9sZSB2aWRlbyBpbmNsdWRpbmcgdmlzdWFsIGFuZCBhdWRpby4gZGVwZW5kaW5nIG9uXHJcblx0XHRcdFx0XHRcdHdoYXQgcGVvcGxlIHdhbnQ8YnIvPjxici8+PGJyLz5cclxuXHRcdFx0XHRcdFx0VGVzdGluZyBVUkw6IGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9cGNQaTRqUEFSMmNcclxuXHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cclxuXHRcdFx0XHQ8L0NvbnRhaW5lcj5cclxuXHRcdFx0PC9QYXBlcj5cclxuXHRcdClcclxuXHR9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cdHJlbmRlcigpe1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PFJlYWN0LkZyYWdtZW50PlxyXG5cdFx0XHRcdDxTdWJtaXRGb3JtLz5cclxuXHRcdFx0XHQ8SW5mb1BhbmVsLz5cclxuXHRcdFx0PC9SZWFjdC5GcmFnbWVudD5cclxuXHRcdCk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBTeW50aGV0aWNFdmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IENoZWNrQ2lyY2xlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ2hlY2tDaXJjbGUnO1xyXG5pbXBvcnQgRXJyb3JJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9FcnJvcic7XHJcbmltcG9ydCBJbmZvSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvSW5mbyc7XHJcbmltcG9ydCBDbG9zZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Nsb3NlJztcclxuaW1wb3J0IHsgYW1iZXIsIGdyZWVuIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzJztcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XHJcbmltcG9ydCBTbmFja2JhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TbmFja2Jhcic7XHJcbmltcG9ydCBTbmFja2JhckNvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU25hY2tiYXJDb250ZW50JztcclxuaW1wb3J0IFdhcm5pbmdJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9XYXJuaW5nJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcywgVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5cclxuY29uc3QgdmFyaWFudEljb24gPSB7XHJcbiAgc3VjY2VzczogQ2hlY2tDaXJjbGVJY29uLFxyXG4gIHdhcm5pbmc6IFdhcm5pbmdJY29uLFxyXG4gIGVycm9yOiBFcnJvckljb24sXHJcbiAgaW5mbzogSW5mb0ljb24sXHJcbn07XHJcblxyXG5jb25zdCB1c2VTdHlsZXMxID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PiAoe1xyXG4gIHN1Y2Nlc3M6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogZ3JlZW5bNjAwXSxcclxuICB9LFxyXG4gIGVycm9yOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuZXJyb3IuZGFyayxcclxuICB9LFxyXG4gIGluZm86IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXHJcbiAgfSxcclxuICB3YXJuaW5nOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGFtYmVyWzcwMF0sXHJcbiAgfSxcclxuICBpY29uOiB7XHJcbiAgICBmb250U2l6ZTogMjAsXHJcbiAgfSxcclxuICBpY29uVmFyaWFudDoge1xyXG4gICAgb3BhY2l0eTogMC45LFxyXG4gICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgfSxcclxuICBtZXNzYWdlOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICB9LFxyXG59KSk7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIHtcclxuICBjbGFzc05hbWU/OiBzdHJpbmc7XHJcbiAgbWVzc2FnZT86IHN0cmluZztcclxuICBvbkNsb3NlPzogKCkgPT4gdm9pZDtcclxuICB2YXJpYW50OiBrZXlvZiB0eXBlb2YgdmFyaWFudEljb247XHJcbn1cclxuXHJcbmZ1bmN0aW9uIE15U25hY2tiYXJDb250ZW50V3JhcHBlcihwcm9wczogUHJvcHMpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzMSgpO1xyXG4gIGNvbnN0IHsgY2xhc3NOYW1lLCBtZXNzYWdlLCBvbkNsb3NlLCB2YXJpYW50LCAuLi5vdGhlciB9ID0gcHJvcHM7XHJcbiAgY29uc3QgSWNvbiA9IHZhcmlhbnRJY29uW3ZhcmlhbnRdO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFNuYWNrYmFyQ29udGVudFxyXG4gICAgICBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlc1t2YXJpYW50XSwgY2xhc3NOYW1lKX1cclxuICAgICAgYXJpYS1kZXNjcmliZWRieT1cImNsaWVudC1zbmFja2JhclwiXHJcbiAgICAgIG1lc3NhZ2U9e1xyXG4gICAgICAgIDxzcGFuIGlkPVwiY2xpZW50LXNuYWNrYmFyXCIgY2xhc3NOYW1lPXtjbGFzc2VzLm1lc3NhZ2V9PlxyXG4gICAgICAgICAgPEljb24gY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMuaWNvbiwgY2xhc3Nlcy5pY29uVmFyaWFudCl9IC8+XHJcbiAgICAgICAgICB7bWVzc2FnZX1cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIH1cclxuICAgICAgYWN0aW9uPXtbXHJcbiAgICAgICAgPEljb25CdXR0b24ga2V5PVwiY2xvc2VcIiBhcmlhLWxhYmVsPVwiY2xvc2VcIiBjb2xvcj1cImluaGVyaXRcIiBvbkNsaWNrPXtvbkNsb3NlfT5cclxuICAgICAgICAgIDxDbG9zZUljb24gY2xhc3NOYW1lPXtjbGFzc2VzLmljb259IC8+XHJcbiAgICAgICAgPC9JY29uQnV0dG9uPixcclxuICAgICAgXX1cclxuICAgICAgey4uLm90aGVyfVxyXG4gICAgLz5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCB1c2VTdHlsZXMyID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PiAoe1xyXG4gIG1hcmdpbjoge1xyXG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmludGVyZmFjZSBTbmFja1Byb3BzIHtcclxuXHRvcGVuIDogYm9vbGVhbjtcclxuXHR2YXJpZW50OiBcInN1Y2Nlc3NcIiB8IFwiZXJyb3JcIiB8IFwid2FybmluZ1wiIHwgXCJpbmZvXCI7XHJcblx0bWVzc2FnZTogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBTbmFjayhwcm9wczogU25hY2tQcm9wcykge1xyXG4gICAgbGV0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKHByb3BzLm9wZW4pO1xyXG4gICAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoZXZlbnQ/OiBTeW50aGV0aWNFdmVudCwgcmVhc29uPzogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgaWYgKHJlYXNvbiA9PT0gJ2NsaWNrYXdheScpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDdXN0b21pemVkU25hY2tiYXJzIGNsb3NlSGFuZGxlcj17aGFuZGxlQ2xvc2V9IG9wZW49e3Byb3BzLm9wZW59IG1lc3NhZ2U9e3Byb3BzLm1lc3NhZ2V9IHZhcmllbnQ9e3Byb3BzLnZhcmllbnR9Lz4gIFxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgKTtcclxufVxyXG5cclxuaW50ZXJmYWNlIGN1c3RvbVByb3BzIHtcclxuICAgIG9wZW46IGJvb2xlYW47XHJcbiAgICB2YXJpZW50OiBcInN1Y2Nlc3NcIiB8IFwiZXJyb3JcIiB8IFwid2FybmluZ1wiIHwgXCJpbmZvXCI7XHJcbiAgICBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgICBjbG9zZUhhbmRsZXI6IChldmVudDogYW55LCByZWFzb246c3RyaW5nKSA9PiB2b2lkO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEN1c3RvbWl6ZWRTbmFja2JhcnMocHJvcHM6IGN1c3RvbVByb3BzKSB7XHJcblx0Y29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlczIoKTtcclxuXHRsZXQgdmFsOiBib29sZWFuID0gcHJvcHMub3BlbjtcclxuXHRcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdj5cclxuXHRcdFx0PFNuYWNrYmFyIGFuY2hvck9yaWdpbj17e1xyXG5cdFx0XHRcdFx0dmVydGljYWw6ICdib3R0b20nLFxyXG5cdFx0XHRcdFx0aG9yaXpvbnRhbDogJ2xlZnQnLFxyXG5cdFx0XHRcdH19XHJcblx0XHRcdFx0b3Blbj17cHJvcHMub3Blbn1cclxuXHRcdFx0XHRhdXRvSGlkZUR1cmF0aW9uPXs2MDAwfVxyXG5cdFx0XHRcdG9uQ2xvc2U9e3Byb3BzLmNsb3NlSGFuZGxlcn1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxNeVNuYWNrYmFyQ29udGVudFdyYXBwZXJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsb3NlPXtwcm9wcy5jbG9zZUhhbmRsZXJ9XHJcblx0XHRcdFx0XHR2YXJpYW50PXtwcm9wcy52YXJpZW50fVxyXG5cdFx0XHRcdFx0bWVzc2FnZT17cHJvcHMubWVzc2FnZX1cclxuXHRcdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy5tYXJnaW59XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC9TbmFja2Jhcj5cclxuICAgXHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==