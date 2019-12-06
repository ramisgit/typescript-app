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


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91bWQvLi9zcmMvY29tcG9uZW50cy9wYWdlcy9JbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUdBQXlCO0FBRXpCLCtGQUE0QztBQUM1Qyx1SkFBb0Q7QUFDcEQsOElBQThDO0FBQzlDLHdJQUEwQztBQUMxQyw2SEFBMkU7QUFDM0UsMklBQTRDO0FBQzVDLG9KQUFrRDtBQUNsRCx3SUFBMEM7QUFDMUMsc0tBQThEO0FBQzlELDJJQUE0QztBQUM1Qyx1SkFBb0Q7QUFDcEQsNkpBQXdEO0FBQ3hELDJJQUE0QztBQUM1QywwSkFBc0Q7QUFFdEQsNEtBQWtFO0FBQ2xFLHVKQUFvRDtBQUNwRCx1SkFBb0Q7QUFDcEQsMEpBQXNEO0FBQ3RELGlIQUFvQztBQUVwQyxNQUFNLFNBQVMsR0FBRyxtQkFBVSxDQUFDLENBQUMsS0FBWSxFQUFFLEVBQUUsQ0FDN0MscUJBQVksQ0FBQztJQUNaLEtBQUssRUFBRTtRQUNOLE9BQU8sRUFBRSxNQUFNO1FBQ2YsVUFBVSxFQUFFLFFBQVE7UUFDcEIsY0FBYyxFQUFFLFFBQVE7S0FDeEI7SUFDRCxLQUFLLEVBQUU7UUFDTixlQUFlLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsS0FBSztRQUMvQyxNQUFNLEVBQUUsZ0JBQWdCO1FBQ3hCLFNBQVMsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUMzQixPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUMvQjtJQUNELElBQUksRUFBRTtRQUNMLEtBQUssRUFBRSxNQUFNO1FBQ2IsV0FBVyxFQUFFO1lBQ1osU0FBUyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1NBQzNCO0tBQ0Q7SUFDRCxTQUFTLEVBQUU7UUFDVixVQUFVLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDNUIs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QUFDLEdBQUcsRUFBRSxjQUFjLEVBQUUsT0FBTyxFQUFFLGtCQUFrQixlQUFtQixDQUNuRixDQUNQLENBQ0YsQ0FDRyxDQUNYLENBQ2MsQ0FDckIsQ0FBQztBQUNKLENBQUM7QUFDRCxNQUFNLFNBQVUsU0FBUSxlQUFLLENBQUMsU0FBUztJQUN0QyxNQUFNO1FBQ0wsT0FBTyxDQUNOLDhCQUFDLGVBQUs7WUFDTCw4QkFBQyxtQkFBUztnQkFDVCw4QkFBQyxvQkFBVSxJQUFDLE9BQU8sRUFBQyxJQUFJLEVBQUMsU0FBUyxFQUFDLElBQUk7b0JBQ3RDLDRFQUF1QyxDQUMzQjtnQkFDYiw4QkFBQyxvQkFBVSxJQUFDLFNBQVMsRUFBQyxHQUFHOztvQkFHUix5Q0FBSztvQkFBQSx5Q0FBSztvQkFBQSx5Q0FBSzsrRUFFbkIsQ0FDRixDQUNMLENBQ1I7SUFDRixDQUFDO0NBQ0Q7QUFDRCxNQUFxQixLQUFNLFNBQVEsZUFBSyxDQUFDLFNBQVM7SUFDakQsTUFBTTtRQUNMLE9BQU8sQ0FDTiw4QkFBQyxlQUFLLENBQUMsUUFBUTtZQUNkLDhCQUFDLFVBQVUsT0FBRTtZQUNiLDhCQUFDLFNBQVMsT0FBRSxDQUNJLENBQ2pCLENBQUM7SUFDSCxDQUFDO0NBQ0Q7QUFURCx3QkFTQyIsImZpbGUiOiJtYWluLjM5YWFkOTkwZDAzOTA3MDNmYzAyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQgeyBwb3N0LCBnZXQgfSBmcm9tICcuLi9zdGF0aWMvYXhpb3MnO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lcic7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMsIFRoZW1lLCBjcmVhdGVTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTW9kYWwnO1xyXG5pbXBvcnQgQmFja2Ryb3AgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQmFja2Ryb3AnO1xyXG5pbXBvcnQgRmFkZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9GYWRlJztcclxuaW1wb3J0IExpbmVhclByb2dyZXNzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmVhclByb2dyZXNzJztcclxuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcclxuaW1wb3J0IEZvcm1Hcm91cCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtR3JvdXAnO1xyXG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2wnO1xyXG5pbXBvcnQgUmFkaW8gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUmFkaW8nO1xyXG5pbXBvcnQgUmFkaW9Hcm91cCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9SYWRpb0dyb3VwJztcclxuaW1wb3J0IEZvcm1IZWxwZXJUZXh0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1IZWxwZXJUZXh0JztcclxuaW1wb3J0IEZvcm1Db250cm9sTGFiZWwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2xMYWJlbCc7XHJcbmltcG9ydCBGb3JtTGFiZWwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUxhYmVsJztcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IFNuYWNrIGZyb20gJy4uL3N0YXRpYy9TbmFjayc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+XHJcblx0Y3JlYXRlU3R5bGVzKHtcclxuXHRcdG1vZGFsOiB7XHJcblx0XHRcdGRpc3BsYXk6ICdmbGV4JyxcclxuXHRcdFx0YWxpZ25JdGVtczogJ2NlbnRlcicsXHJcblx0XHRcdGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuXHRcdH0sXHJcblx0XHRwYXBlcjoge1xyXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcclxuXHRcdFx0Ym9yZGVyOiAnMnB4IHNvbGlkICMwMDAnLFxyXG5cdFx0XHRib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbNV0sXHJcblx0XHRcdHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiwgNCwgMyksXHJcblx0XHR9LFxyXG5cdFx0cm9vdDoge1xyXG5cdFx0XHR3aWR0aDogJzEwMCUnLFxyXG5cdFx0XHQnJiA+ICogKyAqJzoge1xyXG5cdFx0XHRcdG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygyKSxcclxuXHRcdFx0fSxcclxuXHRcdH0sXHJcblx0XHR0ZXh0RmllbGQ6IHtcclxuXHRcdFx0bWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygxKSxcclxuXHRcdFx0bWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMSksXHJcblx0XHRcdHdpZHRoOiBcIjEwMCVcIlxyXG5cdFx0fSxcclxuXHRcdGZvcm1Db250cm9sOiB7XHJcblx0XHRcdG1hcmdpbjogdGhlbWUuc3BhY2luZygzKSxcclxuXHRcdH0sXHJcblx0XHRpbnB1dEZvcm06IHtcclxuXHRcdFx0dGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG5cdFx0XHRwYWRkaW5nOiBcIjMwcHggMCAwIDBcIixcclxuXHRcdFx0d2lkdGg6IFwiMTAwdndcIixcclxuXHRcdFx0bWFyZ2luOiBcIjBweCBhdXRvIDUwcHggYXV0b1wiLFxyXG5cdFx0fSxcclxuXHRcdGZvcm06IHtcclxuXHRcdFx0bWFyZ2luOiBcIjBweCBhdXRvIDEwcHggYXV0b1wiLFxyXG5cdFx0XHR3aWR0aDogXCIxMDAlXCJcclxuXHRcdH0sXHJcblx0XHRpbnB1dEZvcm1JbnB1dDoge1xyXG5cdFx0XHR3aWR0aDogXCI4NSVcIixcclxuXHRcdFx0ZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcclxuXHRcdH0sXHJcblx0XHRpbnB1dEZvcm1CdXR0b246IHtcclxuXHRcdFx0aGVpZ2h0OiBcIjEwMCVcIixcclxuXHRcdFx0bWFyZ2luOiBcIjBweFwiLFxyXG5cdFx0fVxyXG5cdH0pLFxyXG4pO1xyXG5cclxuaW50ZXJmYWNlIFByb2dyZXNzUHJvcHMge1xyXG5cdHByb2dyZXNzVmFsdWU6IG51bWJlcjtcclxufVxyXG5mdW5jdGlvbiBQcm9ncmVzc0Jhcihwcm9wczogUHJvZ3Jlc3NQcm9wcykge1xyXG5cdGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHRjb25zdCBbY29tcGxldGVkLCBzZXRDb21wbGV0ZWRdID0gUmVhY3QudXNlU3RhdGUoMCk7XHJcblxyXG5cdFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRmdW5jdGlvbiBwcm9ncmVzcygpIHtcclxuXHRcdFx0c2V0Q29tcGxldGVkKG9sZENvbXBsZXRlZCA9PiB7XHJcblx0XHRcdFx0aWYgKG9sZENvbXBsZXRlZCA9PT0gMTAwKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gMDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIE1hdGgubWluKHByb3BzLnByb2dyZXNzVmFsdWUsIDEwMCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IHRpbWVyID0gc2V0SW50ZXJ2YWwocHJvZ3Jlc3MsIDUwMCk7XHJcblx0XHRyZXR1cm4gKCkgPT4ge1xyXG4gICAgICBjbGVhckludGVydmFsKHRpbWVyKTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgIDxMaW5lYXJQcm9ncmVzcyB2YXJpYW50PVwiZGV0ZXJtaW5hdGVcIiB2YWx1ZT17Y29tcGxldGVkfSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuXHJcbmludGVyZmFjZSBsb2FkaW5nTW9kYWxQcm9wcyB7XHJcblx0cHJvZ3Jlc3M6IHN0cmluZztcclxuXHRvbkhpZGU6ICgpID0+IHZvaWQ7XHJcblx0c2hvdzogYm9vbGVhbjtcclxufVxyXG5cclxuZnVuY3Rpb24gTG9hZGluZ01vZGFsKHByb3BzOiBsb2FkaW5nTW9kYWxQcm9wcykge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gXHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgfTtcclxuXHRpZiAocHJvcHMuc2hvdyl7XHJcblx0XHRzZXRPcGVuKHRydWUpO1xyXG5cdH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwidHJhbnNpdGlvbi1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cInRyYW5zaXRpb24tbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tb2RhbH1cclxuICAgICAgICBvcGVuPXtvcGVufVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxyXG4gICAgICAgIGNsb3NlQWZ0ZXJUcmFuc2l0aW9uXHJcbiAgICAgICAgQmFja2Ryb3BDb21wb25lbnQ9e0JhY2tkcm9wfVxyXG4gICAgICAgIEJhY2tkcm9wUHJvcHM9e3tcclxuICAgICAgICAgIHRpbWVvdXQ6IDUwMCxcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPEZhZGUgaW49e29wZW59PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxyXG4gICAgICAgICAgICA8aDIgaWQ9XCJ0cmFuc2l0aW9uLW1vZGFsLXRpdGxlXCI+RG93bmxvYWRpbmcgeW91ciBmaWxlPC9oMj5cclxuXHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPkxvYWRpbmc8L3NwYW4+XHJcblx0XHRcdDxQcm9ncmVzc0JhciBwcm9ncmVzc1ZhbHVlPXtwYXJzZUludChwcm9wcy5wcm9ncmVzcyl9Lz5cclxuICAgICAgICA8aDQ+RG93bmxvYWRpbmcuLi4ge3Byb3BzLnByb2dyZXNzfSAlPC9oND5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgIFBsZWFzZSB3YWl0IHdoaWxlIHlvdXIgZmlsZSBpcyBiZWluZyBkb3dubG9hZGVkLiBGZWVsIGZyZWUgdG8gdXNlIHRoaXMgc2VydmljZSBhcyBtYW55XHJcbiAgICAgICAgICB0aW1lcyBhcyB5b3Ugd2FudC48YnIvPlxyXG5cclxuICAgICAgICAgIEEgYnV0dG9uIGxpbmsgd2lsbCBiZSBwcm92aWRlZCBzaG9ydGx5Li4uLlxyXG4gICAgICAgIDwvcD5cclxuXHRcdDxCdXR0b24gb25DbGljaz17cHJvcHMub25IaWRlfT5DbG9zZTwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9GYWRlPlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIFN1Ym1pdEZvcm0oKSB7XHJcblx0Y29uc3QgY29udGFpbmVyUmVmOmFueSA9IFJlYWN0LmNyZWF0ZVJlZigpO1xyXG5cdGNvbnN0IGdldFJlZjogYW55ID0gUmVhY3QuY3JlYXRlUmVmKCk7XHJcblx0Y29uc3Qgd2FybmluZ1JlZjogYW55ID0gUmVhY3QuY3JlYXRlUmVmKCk7XHJcblx0Y29uc3QgZG93bmxvYWRCdG5SZWY6IGFueSA9IFJlYWN0LmNyZWF0ZVJlZigpO1xyXG5cdFxyXG5cdGNvbnN0IFtleHQsIHNldEV4dF0gPSBSZWFjdC51c2VTdGF0ZShcIm1wNFwiKTtcclxuXHRjb25zdCBbdHlwZSwgc2V0VHlwZV0gPSBSZWFjdC51c2VTdGF0ZShcIkF1ZGlvXCIpO1xyXG5cdGNvbnN0IFtzaG93TG9hZGluZywgc2V0U2hvd0xvYWRpbmddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IFtsb2FkaW5nUHJvZ3Jlc3MsIHNldExvYWRpbmdQcm9ncmVzc10gPSBSZWFjdC51c2VTdGF0ZShcIjBcIik7XHJcblx0Y29uc3QgW29wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG5cdFx0Y29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcblx0Y29uc3QgW3ZhcmllbnQsIHNldFZhcmllbnRdID0gUmVhY3QudXNlU3RhdGU8XCJzdWNjZXNzXCIgfCBcImVycm9yXCIgfCBcIndhcm5pbmdcIiB8IFwiaW5mb1wiPihcImluZm9cIik7XHJcblx0Y29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlVHlwZSA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcclxuICAgIHNldFR5cGUoKGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSk7XHJcbiAgfTtcclxuXHRjb25zdCBoYW5kbGVDaGFuZ2VFeHQgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XHJcbiAgICBzZXRFeHQoKGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSk7XHJcbiAgfTtcdFxyXG5cdFxyXG5cdCBmdW5jdGlvbiBoYW5kbGVDaGFuZ2VBbGVydFNob3cgKGV2ZW50OiBhbnksIHNob3c6IGJvb2xlYW4pIHtcclxuXHRcdHNldE9wZW4oc2hvdyk7XHJcbiAgXHR9XHJcblx0ZnVuY3Rpb24gZ2V0IChlOiBhbnkpIHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdHNldE9wZW4oZmFsc2UpO1xyXG5cdFx0dmFyIHdhcm5pbmcgPSB3YXJuaW5nUmVmLmN1cnJlbnQ7XHJcblx0XHR2YXIgVVJMaW5wdXQgPSBnZXRSZWYuY3VycmVudC52YWx1ZS5zcGxpdChcIj1cIilbMV07XHJcblx0XHRpZiAoVVJMaW5wdXQgPT09IHVuZGVmaW5lZCB8fCBudWxsKXtcclxuXHRcdFx0c2V0VmFyaWVudChcIndhcm5pbmdcIik7XHJcblx0XHRcdHNldE1lc3NhZ2UoXCJJbnZhbGlkIHVybCB0cnkgYW5vdGhlciBvciBsb29rIGNhcmVmdWxseSB0byBjb3JyZWN0IGl0LlwiKTtcclxuXHRcdFx0c2V0T3Blbih0cnVlKTtcclxuXHQgIFx0fSBlbHNlIHtcclxuXHRcdFx0XHJcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gcG9zdChcIi9kb3dubG9hZFwiLCBKU09OLnN0cmluZ2lmeSh7dXJsOlVSTGlucHV0LCB0eXBlOnR5cGUsIGV4dGVuc2lvbjpleHR9KSwgdHJ1ZSk7XHJcblx0XHRcdHJlc3BvbnNlLm9ubG9hZCA9ICgpID0+IHtcclxuXHRcdFx0XHR2YXIgc3NlOkV2ZW50U291cmNlID0gbmV3IEV2ZW50U291cmNlKFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2Rvd25sb2FkL3NzZVwiKTtcclxuXHRcdCAgXHRcdHNzZS5vbm9wZW4gPSAoKSA9PiB7XHJcblx0XHRcdFx0XHRzZXRTaG93TG9hZGluZyh0cnVlKTtcclxuXHRcdCAgXHRcdH1cclxuXHQgIFx0XHRcdHNzZS5vbm1lc3NhZ2UgPSBldnQgPT4ge1xyXG5cdFx0XHRcdFx0c2V0TG9hZGluZ1Byb2dyZXNzKGV2dC5kYXRhKTtcclxuXHQgICAgICAgIFx0XHRpZiAoZXZ0LmRhdGEgPT09IFwiMTAwXCIpe1xyXG5cdFx0XHRcdFx0XHRzZXRTaG93TG9hZGluZyhmYWxzZSlcclxuXHQgICAgICAgICAgXHRcdFx0dmFyIHVybDpzdHJpbmcgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9kb3dubG9hZC92aWRlby9cIiArIFVSTGlucHV0O1xyXG5cdCAgICAgICAgICBcdFx0XHRkb3dubG9hZEJ0blJlZi5jdXJyZW50LnZhbHVlID0gdXJsO1xyXG5cdCAgICAgICAgICBcdFx0XHRjb250YWluZXJSZWYuY3VycmVudC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG5cdCAgICAgICAgICBcdFx0XHRzc2UuY2xvc2UoKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0c3NlLm9uZXJyb3IgPSAoKSA9PiB7XHJcbiAgXHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiRXZlbnRTb3VyY2UgZmFpbGVkLlwiKTtcclxuXHRcdFx0XHRcdHNldFNob3dMb2FkaW5nKGZhbHNlKTtcclxuXHRcdFx0XHRcdHdhcm5pbmcuaW5uZXJIVE1MID0gXCJGYWlsZWQgdG8gZXN0YWJsaXNoIGNvbm5lY3Rpb24gdG8gc2VydmVyXCI7XHJcbiAgXHRcdFx0XHRcdHdhcm5pbmcuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICBcdFx0XHRcdFx0Y29uc29sZS5sb2coXCJDbG9zaW5nIGNvbm5lY3Rvbi4uLlwiKTtcclxuICBcdFx0XHRcdFx0c3NlLmNsb3NlKCk7XHJcbiAgXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuICBcdFx0fVxyXG4gIFx0fVxyXG4gIFx0ZnVuY3Rpb24gZG93bmxvYWRGcm9tU2VydmVyICgpIHtcclxuICAgIFx0dmFyIHVybDpzdHJpbmcgPSBkb3dubG9hZEJ0blJlZi5jdXJyZW50LnZhbHVlO1xyXG4gICAgXHR3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcclxuXHR9XHJcblx0cmV0dXJuIChcclxuXHRcdDxSZWFjdC5GcmFnbWVudD5cclxuXHRcdFx0PFNuYWNrIG9wZW49e29wZW59IHZhcmllbnQ9e3ZhcmllbnR9IG1lc3NhZ2U9e21lc3NhZ2V9Lz5cclxuXHRcdFx0PEdyaWQgY29udGFpbmVyIHhzPXsxMn0gPlxyXG5cdFx0XHQ8TG9hZGluZ01vZGFsIHByb2dyZXNzPXtsb2FkaW5nUHJvZ3Jlc3N9IHNob3c9e3Nob3dMb2FkaW5nfSBvbkhpZGU9eygpID0+IHNldFNob3dMb2FkaW5nKGZhbHNlKX0vPlxyXG5cdFx0XHQ8Q29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnB1dEZvcm19PlxyXG5cdFx0XHRcdDxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtfT5cclxuXHRcdFx0XHRcdDxGb3JtR3JvdXA+XHJcblx0XHRcdFx0XHRcdDxHcmlkIGNvbnRhaW5lciB4cz17MTJ9PlxyXG5cdFx0XHRcdFx0XHRcdDxHcmlkIGl0ZW0geHM9ezEwfT5cclxuXHRcdFx0XHRcdFx0XHRcdDxUZXh0RmllbGRcclxuXHRcdFx0XHRcdFx0XHRcdFx0aW5wdXRSZWY9e2dldFJlZn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0aWQ9XCJzdGFuZGFyZC1iYXNpY1wiXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb21cIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR2YXJpYW50PVwib3V0bGluZWRcIlxyXG5cdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHRcdFx0PEdyaWQgY29udGFpbmVyIHhzPXsyfSAganVzdGlmeT1cImZsZXgtc3RhcnRcIiBhbGlnbkl0ZW1zPVwiZmxleC1zdGFydFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PEJ1dHRvbiByZWY9e2dldFJlZn0gb25DbGljaz17Z2V0fSBjbGFzc05hbWU9e2NsYXNzZXMuaW5wdXRGb3JtQnV0dG9ufSB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJwcmltYXJ5XCI+R0VUPC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHQ8L0Zvcm1Hcm91cD5cclxuXHRcdFx0XHRcdDxGb3JtR3JvdXA+XHJcblx0ICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgeHM9ezEyfT5cclxuXHQgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0+XHJcblx0XHRcdFx0XHRcdDxGb3JtQ29udHJvbCBjb21wb25lbnQ9XCJmaWVsZHNldFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtQ29udHJvbH0+XHJcblx0XHRcdFx0XHQgICAgICAgIDxGb3JtTGFiZWwgY29tcG9uZW50PVwibGVnZW5kXCI+RGF0YSBUeXBlPC9Gb3JtTGFiZWw+XHJcblx0XHRcdFx0XHQgICAgICAgIDxSYWRpb0dyb3VwIGFyaWEtbGFiZWw9XCJnZW5kZXJcIiBuYW1lPVwiZ2VuZGVyMVwiIHZhbHVlPXt0eXBlfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlVHlwZX0gcm93PlxyXG5cdFx0XHRcdFx0ICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsIHZhbHVlPVwiQXVkaW9cIiBjb250cm9sPXs8UmFkaW8gIGNvbG9yPVwicHJpbWFyeVwiIC8+fSBsYWJlbD1cIkF1ZGlvXCIgbGFiZWxQbGFjZW1lbnQ9XCJzdGFydFwiLz5cclxuXHRcdFx0XHRcdCAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbCB2YWx1ZT1cIlZpZGVvXCIgY29udHJvbD17PFJhZGlvICBjb2xvcj1cInByaW1hcnlcIiAvPn0gbGFiZWw9XCJWaWRlb1wiIGxhYmVsUGxhY2VtZW50PVwic3RhcnRcIi8+XHJcblx0XHRcdFx0XHQgICAgICAgIDwvUmFkaW9Hcm91cD5cclxuXHRcdFx0XHRcdCAgICAgIDwvRm9ybUNvbnRyb2w+XHJcblx0ICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHQgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcblx0XHRcdFx0XHRcdDxGb3JtQ29udHJvbCBjb21wb25lbnQ9XCJmaWVsZHNldFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtQ29udHJvbH0+XHJcblx0XHRcdFx0XHQgICAgICAgIDxGb3JtTGFiZWwgY29tcG9uZW50PVwibGVnZW5kXCI+RmlsZSBUeXBlPC9Gb3JtTGFiZWw+XHJcblx0XHRcdFx0XHQgICAgICAgIDxSYWRpb0dyb3VwIGFyaWEtbGFiZWw9XCJnZW5kZXJcIiBuYW1lPVwiZ2VuZGVyMlwiIHZhbHVlPXtleHR9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VFeHR9IHJvdz5cclxuXHRcdFx0XHRcdCAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbCB2YWx1ZT1cIm1wNFwiIGNvbnRyb2w9ezxSYWRpbyAvPn0gbGFiZWw9XCJtcDRcIiBsYWJlbFBsYWNlbWVudD1cInN0YXJ0XCIvPlxyXG5cdFx0XHRcdFx0ICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsIHZhbHVlPVwibXAzXCIgY29udHJvbD17PFJhZGlvIC8+fSBsYWJlbD1cIm1wM1wiIGxhYmVsUGxhY2VtZW50PVwic3RhcnRcIi8+XHJcblx0XHRcdFx0XHQgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWwgdmFsdWU9XCJ3YXZcIiBjb250cm9sPXs8UmFkaW8gLz59IGxhYmVsPVwid2F2XCIgbGFiZWxQbGFjZW1lbnQ9XCJzdGFydFwiLz5cclxuXHRcdFx0XHRcdCAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbCB2YWx1ZT1cIndlYm1cIiBjb250cm9sPXs8UmFkaW8gLz59IGxhYmVsPVwid2VibVwiIGxhYmVsUGxhY2VtZW50PVwic3RhcnRcIi8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2xMYWJlbCB2YWx1ZT1cImZsdlwiIGNvbnRyb2w9ezxSYWRpbyAvPn0gbGFiZWw9XCJmbHZcIiBsYWJlbFBsYWNlbWVudD1cInN0YXJ0XCIvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PEZvcm1Db250cm9sTGFiZWwgdmFsdWU9XCJobHNcIiBjb250cm9sPXs8UmFkaW8gLz59IGxhYmVsPVwiaGxzXCIgbGFiZWxQbGFjZW1lbnQ9XCJzdGFydFwiLz5cclxuXHRcdFx0XHRcdCAgICAgICAgPC9SYWRpb0dyb3VwPlxyXG5cdFx0XHRcdFx0ICAgICAgPC9Gb3JtQ29udHJvbD5cclxuXHQgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cdCAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cdCAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG5cdCAgICAgICAgICA8L2Zvcm0+XHJcblx0ICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciB4cz17MTJ9PlxyXG5cdCAgICAgICAgICAgIDxHcmlkIHhzPXs0fT5cclxuXHQgICAgICAgICAgICAgIDxDb250YWluZXIgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCJ9fSBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIiByZWY9e2NvbnRhaW5lclJlZn0+XHJcblx0ICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJzZWNvbmRhcnlcIiByZWY9e2Rvd25sb2FkQnRuUmVmfSBvbkNsaWNrPXtkb3dubG9hZEZyb21TZXJ2ZXJ9PkRvd25sb2FkPC9CdXR0b24+XHJcblx0ICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuXHQgICAgICAgICAgICA8L0dyaWQ+XHJcblx0ICAgICAgICAgIDwvR3JpZD5cclxuXHQgICAgICAgIDwvQ29udGFpbmVyPlxyXG5cdFx0XHQ8L0dyaWQ+XHJcblx0ICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuXHRcdCk7XHJcbn1cclxuY2xhc3MgSW5mb1BhbmVsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHRyZW5kZXIoKXtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxQYXBlcj5cclxuXHRcdFx0XHQ8Q29udGFpbmVyPlxyXG5cdFx0XHRcdFx0PFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCIgY29tcG9uZW50PVwiaDNcIj5cclxuXHRcdFx0XHRcdFx0PGk+VGhpcyBzaXRlIGlzIHVuZGVyIGNvbnN0cnVjdGlvbi48L2k+XHJcblx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XHJcblx0XHRcdFx0XHQ8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJwXCI+XHJcblx0XHRcdFx0XHRcdFRoZSBtYWluIHJlYXNvbiBmb3IgdGhpcyBzaXRlIGlzIHRvIGRvd25sb2FkIGF1ZGlvIGZpbGVzIGZyb20geW91dHViZS8gc29vbiB3aWxsIHN1cHBvcnQgbW9yZVxyXG5cdFx0XHRcdFx0XHRzaXRlcyBhbmQgcG9zc2libHkgdGhlIGFiaWxpdHkgdG8gZG93bmxvYWQgdGhlIHdob2xlIHZpZGVvIGluY2x1ZGluZyB2aXN1YWwgYW5kIGF1ZGlvLiBkZXBlbmRpbmcgb25cclxuXHRcdFx0XHRcdFx0d2hhdCBwZW9wbGUgd2FudDxici8+PGJyLz48YnIvPlxyXG5cdFx0XHRcdFx0XHRUZXN0aW5nIFVSTDogaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1wY1BpNGpQQVIyY1xyXG5cdFx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxyXG5cdFx0XHRcdDwvQ29udGFpbmVyPlxyXG5cdFx0XHQ8L1BhcGVyPlxyXG5cdFx0KVxyXG5cdH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblx0cmVuZGVyKCl7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8UmVhY3QuRnJhZ21lbnQ+XHJcblx0XHRcdFx0PFN1Ym1pdEZvcm0vPlxyXG5cdFx0XHRcdDxJbmZvUGFuZWwvPlxyXG5cdFx0XHQ8L1JlYWN0LkZyYWdtZW50PlxyXG5cdFx0KTtcclxuXHR9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==