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
            console.log("as " + URLinput + ", " + type + ", " + ext);
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


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91bWQvLi9zcmMvY29tcG9uZW50cy9wYWdlcy9JbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUdBQXlCO0FBRXpCLCtGQUE0QztBQUM1Qyx1SkFBb0Q7QUFDcEQsOElBQThDO0FBQzlDLHdJQUEwQztBQUMxQyw2SEFBMkU7QUFDM0UsMklBQTRDO0FBQzVDLG9KQUFrRDtBQUNsRCx3SUFBMEM7QUFDMUMsc0tBQThEO0FBQzlELDJJQUE0QztBQUM1Qyx1SkFBb0Q7QUFDcEQsNkpBQXdEO0FBQ3hELDJJQUE0QztBQUM1QywwSkFBc0Q7QUFFdEQsNEtBQWtFO0FBQ2xFLHVKQUFvRDtBQUNwRCx1SkFBb0Q7QUFDcEQsMEpBQXNEO0FBQ3RELGlIQUFvQztBQUVwQyxNQUFNLFNBQVMsR0FBRyxtQkFBVSxDQUFDLENBQUMsS0FBWSxFQUFFLEVBQUUsQ0FDN0MscUJBQVksQ0FBQztJQUNaLEtBQUssRUFBRTtRQUNOLE9BQU8sRUFBRSxNQUFNO1FBQ2YsVUFBVSxFQUFFLFFBQVE7UUFDcEIsY0FBYyxFQUFFLFFBQVE7S0FDeEI7SUFDRCxLQUFLLEVBQUU7UUFDTixlQUFlLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsS0FBSztRQUMvQyxNQUFNLEVBQUUsZ0JBQWdCO1FBQ3hCLFNBQVMsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUMzQixPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUMvQjtJQUNELElBQUksRUFBRTtRQUNMLEtBQUssRUFBRSxNQUFNO1FBQ2IsV0FBVyxFQUFFO1lBQ1osU0FBUyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1NBQzNCO0tBQ0Q7SUFDRCxTQUFTLEVBQUU7UUFDVixVQUFVLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDNUIs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Qiw4QkFBQyxjQUFJLElBQUMsRUFBRSxFQUFFLENBQUM7d0JBQ1QsOEJBQUMsbUJBQVMsSUFBQyxLQUFLLEVBQUUsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFDLEVBQUUsU0FBUyxFQUFDLGlCQUFpQixFQUFDLEdBQUcsRUFBRSxZQUFZOzRCQUNqRiw4QkFBQyxnQkFBTSxJQUFDLEtBQUssRUFBQyxXQUFXLEVBQUMsR0FBRyxFQUFFLGNBQWMsRUFBRSxPQUFPLEVBQUUsa0JBQWtCLGVBQW1CLENBQ25GLENBQ1AsQ0FDRCxDQUNGLENBQ2YsQ0FDZSxDQUN2QixDQUFDO0FBQ0gsQ0FBQztBQUNELE1BQU0sU0FBVSxTQUFRLGVBQUssQ0FBQyxTQUFTO0lBQ3RDLE1BQU07UUFDTCxPQUFPLENBQ04sOEJBQUMsZUFBSztZQUNMLDhCQUFDLG1CQUFTO2dCQUNULDhCQUFDLG9CQUFVLElBQUMsT0FBTyxFQUFDLElBQUksRUFBQyxTQUFTLEVBQUMsSUFBSTtvQkFDdEMsNEVBQXVDLENBQzNCO2dCQUNiLDhCQUFDLG9CQUFVLElBQUMsU0FBUyxFQUFDLEdBQUc7O29CQUdSLHlDQUFLO29CQUFBLHlDQUFLO29CQUFBLHlDQUFLOytFQUVuQixDQUNGLENBQ0wsQ0FDUjtJQUNGLENBQUM7Q0FDRDtBQUNELE1BQXFCLEtBQU0sU0FBUSxlQUFLLENBQUMsU0FBUztJQUNqRCxNQUFNO1FBQ0wsT0FBTyxDQUNOLDhCQUFDLGVBQUssQ0FBQyxRQUFRO1lBQ2QsOEJBQUMsVUFBVSxPQUFFO1lBQ2IsOEJBQUMsU0FBUyxPQUFFLENBQ0ksQ0FDakIsQ0FBQztJQUNILENBQUM7Q0FDRDtBQVRELHdCQVNDIiwiZmlsZSI6Im1haW4uMzllZTBiN2ZjY2ExNzBhMzU4M2QuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCB7IHBvc3QsIGdldCB9IGZyb20gJy4uL3N0YXRpYy9heGlvcyc7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcywgVGhlbWUsIGNyZWF0ZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBNb2RhbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Nb2RhbCc7XHJcbmltcG9ydCBCYWNrZHJvcCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CYWNrZHJvcCc7XHJcbmltcG9ydCBGYWRlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ZhZGUnO1xyXG5pbXBvcnQgTGluZWFyUHJvZ3Jlc3MgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGluZWFyUHJvZ3Jlc3MnO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xyXG5pbXBvcnQgRm9ybUdyb3VwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1Hcm91cCc7XHJcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbCc7XHJcbmltcG9ydCBSYWRpbyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9SYWRpbyc7XHJcbmltcG9ydCBSYWRpb0dyb3VwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1JhZGlvR3JvdXAnO1xyXG5pbXBvcnQgRm9ybUhlbHBlclRleHQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUhlbHBlclRleHQnO1xyXG5pbXBvcnQgRm9ybUNvbnRyb2xMYWJlbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbExhYmVsJztcclxuaW1wb3J0IEZvcm1MYWJlbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtTGFiZWwnO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgU25hY2sgZnJvbSAnLi4vc3RhdGljL1NuYWNrJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lOiBUaGVtZSkgPT5cclxuXHRjcmVhdGVTdHlsZXMoe1xyXG5cdFx0bW9kYWw6IHtcclxuXHRcdFx0ZGlzcGxheTogJ2ZsZXgnLFxyXG5cdFx0XHRhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuXHRcdFx0anVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG5cdFx0fSxcclxuXHRcdHBhcGVyOiB7XHJcblx0XHRcdGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxyXG5cdFx0XHRib3JkZXI6ICcycHggc29saWQgIzAwMCcsXHJcblx0XHRcdGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1s1XSxcclxuXHRcdFx0cGFkZGluZzogdGhlbWUuc3BhY2luZygyLCA0LCAzKSxcclxuXHRcdH0sXHJcblx0XHRyb290OiB7XHJcblx0XHRcdHdpZHRoOiAnMTAwJScsXHJcblx0XHRcdCcmID4gKiArIConOiB7XHJcblx0XHRcdFx0bWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHRcdHRleHRGaWVsZDoge1xyXG5cdFx0XHRtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDEpLFxyXG5cdFx0XHRtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygxKSxcclxuXHRcdFx0d2lkdGg6IFwiMTAwJVwiXHJcblx0XHR9LFxyXG5cdFx0Zm9ybUNvbnRyb2w6IHtcclxuXHRcdFx0bWFyZ2luOiB0aGVtZS5zcGFjaW5nKDMpLFxyXG5cdFx0fSxcclxuXHRcdGlucHV0Rm9ybToge1xyXG5cdFx0XHR0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcblx0XHRcdHBhZGRpbmc6IFwiMzBweCAwIDAgMFwiLFxyXG5cdFx0XHR3aWR0aDogXCIxMDB2d1wiLFxyXG5cdFx0XHRtYXJnaW46IFwiMHB4IGF1dG8gNTBweCBhdXRvXCIsXHJcblx0XHR9LFxyXG5cdFx0Zm9ybToge1xyXG5cdFx0XHRtYXJnaW46IFwiMHB4IGF1dG8gMTBweCBhdXRvXCIsXHJcblx0XHRcdHdpZHRoOiBcIjEwMCVcIlxyXG5cdFx0fSxcclxuXHRcdGlucHV0Rm9ybUlucHV0OiB7XHJcblx0XHRcdHdpZHRoOiBcIjg1JVwiLFxyXG5cdFx0XHRkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxyXG5cdFx0fSxcclxuXHRcdGlucHV0Rm9ybUJ1dHRvbjoge1xyXG5cdFx0XHRoZWlnaHQ6IFwiMTAwJVwiLFxyXG5cdFx0XHRtYXJnaW46IFwiMHB4XCIsXHJcblx0XHR9XHJcblx0fSksXHJcbik7XHJcblxyXG5pbnRlcmZhY2UgUHJvZ3Jlc3NQcm9wcyB7XHJcblx0cHJvZ3Jlc3NWYWx1ZTogbnVtYmVyO1xyXG59XHJcbmZ1bmN0aW9uIFByb2dyZXNzQmFyKHByb3BzOiBQcm9ncmVzc1Byb3BzKSB7XHJcblx0Y29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cdGNvbnN0IFtjb21wbGV0ZWQsIHNldENvbXBsZXRlZF0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcclxuXHJcblx0UmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGZ1bmN0aW9uIHByb2dyZXNzKCkge1xyXG5cdFx0XHRzZXRDb21wbGV0ZWQob2xkQ29tcGxldGVkID0+IHtcclxuXHRcdFx0XHRpZiAob2xkQ29tcGxldGVkID09PSAxMDApIHtcclxuXHRcdFx0XHRcdHJldHVybiAwO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gTWF0aC5taW4ocHJvcHMucHJvZ3Jlc3NWYWx1ZSwgMTAwKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgdGltZXIgPSBzZXRJbnRlcnZhbChwcm9ncmVzcywgNTAwKTtcclxuXHRcdHJldHVybiAoKSA9PiB7XHJcbiAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgPExpbmVhclByb2dyZXNzIHZhcmlhbnQ9XCJkZXRlcm1pbmF0ZVwiIHZhbHVlPXtjb21wbGV0ZWR9IC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5cclxuaW50ZXJmYWNlIGxvYWRpbmdNb2RhbFByb3BzIHtcclxuXHRwcm9ncmVzczogc3RyaW5nO1xyXG5cdG9uSGlkZTogKCkgPT4gdm9pZDtcclxuXHRzaG93OiBib29sZWFuO1xyXG59XHJcblxyXG5mdW5jdGlvbiBMb2FkaW5nTW9kYWwocHJvcHM6IGxvYWRpbmdNb2RhbFByb3BzKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiBcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuKGZhbHNlKTtcclxuICB9O1xyXG5cdGlmIChwcm9wcy5zaG93KXtcclxuXHRcdHNldE9wZW4odHJ1ZSk7XHJcblx0fVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJ0cmFuc2l0aW9uLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwidHJhbnNpdGlvbi1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1vZGFsfVxyXG4gICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgY2xvc2VBZnRlclRyYW5zaXRpb25cclxuICAgICAgICBCYWNrZHJvcENvbXBvbmVudD17QmFja2Ryb3B9XHJcbiAgICAgICAgQmFja2Ryb3BQcm9wcz17e1xyXG4gICAgICAgICAgdGltZW91dDogNTAwLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8RmFkZSBpbj17b3Blbn0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XHJcbiAgICAgICAgICAgIDxoMiBpZD1cInRyYW5zaXRpb24tbW9kYWwtdGl0bGVcIj5Eb3dubG9hZGluZyB5b3VyIGZpbGU8L2gyPlxyXG5cdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+TG9hZGluZzwvc3Bhbj5cclxuXHRcdFx0PFByb2dyZXNzQmFyIHByb2dyZXNzVmFsdWU9e3BhcnNlSW50KHByb3BzLnByb2dyZXNzKX0vPlxyXG4gICAgICAgIDxoND5Eb3dubG9hZGluZy4uLiB7cHJvcHMucHJvZ3Jlc3N9ICU8L2g0PlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgUGxlYXNlIHdhaXQgd2hpbGUgeW91ciBmaWxlIGlzIGJlaW5nIGRvd25sb2FkZWQuIEZlZWwgZnJlZSB0byB1c2UgdGhpcyBzZXJ2aWNlIGFzIG1hbnlcclxuICAgICAgICAgIHRpbWVzIGFzIHlvdSB3YW50Ljxici8+XHJcblxyXG4gICAgICAgICAgQSBidXR0b24gbGluayB3aWxsIGJlIHByb3ZpZGVkIHNob3J0bHkuLi4uXHJcbiAgICAgICAgPC9wPlxyXG5cdFx0PEJ1dHRvbiBvbkNsaWNrPXtwcm9wcy5vbkhpZGV9PkNsb3NlPC9CdXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0ZhZGU+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gU3VibWl0Rm9ybSgpIHtcclxuXHRjb25zdCBjb250YWluZXJSZWY6YW55ID0gUmVhY3QuY3JlYXRlUmVmKCk7XHJcblx0Y29uc3QgZ2V0UmVmOiBhbnkgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuXHRjb25zdCB3YXJuaW5nUmVmOiBhbnkgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuXHRjb25zdCBkb3dubG9hZEJ0blJlZjogYW55ID0gUmVhY3QuY3JlYXRlUmVmKCk7XHJcblx0XHJcblx0Y29uc3QgW2V4dCwgc2V0RXh0XSA9IFJlYWN0LnVzZVN0YXRlKFwibXA0XCIpO1xyXG5cdGNvbnN0IFt0eXBlLCBzZXRUeXBlXSA9IFJlYWN0LnVzZVN0YXRlKFwiQXVkaW9cIik7XHJcblx0Y29uc3QgW3Nob3dMb2FkaW5nLCBzZXRTaG93TG9hZGluZ10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgW2xvYWRpbmdQcm9ncmVzcywgc2V0TG9hZGluZ1Byb2dyZXNzXSA9IFJlYWN0LnVzZVN0YXRlKFwiMFwiKTtcclxuXHRjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuXHRjb25zdCBbdmFyaWVudCwgc2V0VmFyaWVudF0gPSBSZWFjdC51c2VTdGF0ZTxcInN1Y2Nlc3NcIiB8IFwiZXJyb3JcIiB8IFwid2FybmluZ1wiIHwgXCJpbmZvXCI+KFwiaW5mb1wiKTtcclxuXHRjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2VUeXBlID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xyXG4gICAgc2V0VHlwZSgoZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlKTtcclxuICB9O1xyXG5cdGNvbnN0IGhhbmRsZUNoYW5nZUV4dCA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcclxuICAgIHNldEV4dCgoZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlKTtcclxuICB9O1x0XHJcblx0XHJcblx0IGZ1bmN0aW9uIGhhbmRsZUNoYW5nZUFsZXJ0U2hvdyAoZXZlbnQ6IGFueSwgc2hvdzogYm9vbGVhbikge1xyXG5cdFx0c2V0T3BlbihzaG93KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG9wZW5IYW5kbGVyKHZhbDogYm9vbGVhbikge1xyXG4gICAgICAgIHNldE9wZW4odmFsKTtcclxuICAgIH1cclxuXHRmdW5jdGlvbiBnZXQgKGU6IGFueSkge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0c2V0T3BlbihmYWxzZSk7XHJcblx0XHR2YXIgd2FybmluZyA9IHdhcm5pbmdSZWYuY3VycmVudDtcclxuXHRcdHZhciBVUkxpbnB1dCA9IGdldFJlZi5jdXJyZW50LnZhbHVlLnNwbGl0KFwiPVwiKVsxXTtcclxuXHRcdGlmIChVUkxpbnB1dCA9PT0gdW5kZWZpbmVkIHx8IG51bGwpe1xyXG5cdFx0XHRzZXRWYXJpZW50KFwid2FybmluZ1wiKTtcclxuXHRcdFx0c2V0TWVzc2FnZShcIkludmFsaWQgdXJsIHRyeSBhbm90aGVyIG9yIGxvb2sgY2FyZWZ1bGx5IHRvIGNvcnJlY3QgaXQuXCIpO1xyXG5cdFx0XHRzZXRPcGVuKHRydWUpO1xyXG5cdCAgXHR9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImFzIFwiICsgVVJMaW5wdXQgKyBcIiwgXCIgKyB0eXBlICsgXCIsIFwiICsgZXh0KVxyXG5cdFx0XHRjb25zdCByZXNwb25zZSA9IHBvc3QoXCIvZG93bmxvYWRcIiwgSlNPTi5zdHJpbmdpZnkoe3VybDpVUkxpbnB1dCwgdHlwZTp0eXBlLCBleHRlbnNpb246ZXh0fSksIHRydWUpO1xyXG5cdFx0XHRyZXNwb25zZS5vbmxvYWQgPSAoKSA9PiB7XHJcblx0XHRcdFx0dmFyIHNzZTpFdmVudFNvdXJjZSA9IG5ldyBFdmVudFNvdXJjZShcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9kb3dubG9hZC9zc2VcIik7XHJcblx0XHQgIFx0XHRzc2Uub25vcGVuID0gKCkgPT4ge1xyXG5cdFx0XHRcdFx0c2V0U2hvd0xvYWRpbmcodHJ1ZSk7XHJcblx0XHQgIFx0XHR9XHJcblx0ICBcdFx0XHRzc2Uub25tZXNzYWdlID0gZXZ0ID0+IHtcclxuXHRcdFx0XHRcdHNldExvYWRpbmdQcm9ncmVzcyhldnQuZGF0YSk7XHJcblx0ICAgICAgICBcdFx0aWYgKGV2dC5kYXRhID09PSBcIjEwMFwiKXtcclxuXHRcdFx0XHRcdFx0c2V0U2hvd0xvYWRpbmcoZmFsc2UpXHJcblx0ICAgICAgICAgIFx0XHRcdHZhciB1cmw6c3RyaW5nID0gXCJodHRwOi8vbG9jYWxob3N0OjgwODAvZG93bmxvYWQvdmlkZW8vXCIgKyBVUkxpbnB1dDtcclxuXHQgICAgICAgICAgXHRcdFx0ZG93bmxvYWRCdG5SZWYuY3VycmVudC52YWx1ZSA9IHVybDtcclxuXHQgICAgICAgICAgXHRcdFx0Y29udGFpbmVyUmVmLmN1cnJlbnQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuXHQgICAgICAgICAgXHRcdFx0c3NlLmNsb3NlKCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHNzZS5vbmVycm9yID0gKCkgPT4ge1xyXG4gIFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIkV2ZW50U291cmNlIGZhaWxlZC5cIik7XHJcblx0XHRcdFx0XHRzZXRTaG93TG9hZGluZyhmYWxzZSk7XHJcblx0XHRcdFx0XHR3YXJuaW5nLmlubmVySFRNTCA9IFwiRmFpbGVkIHRvIGVzdGFibGlzaCBjb25uZWN0aW9uIHRvIHNlcnZlclwiO1xyXG4gIFx0XHRcdFx0XHR3YXJuaW5nLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgXHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiQ2xvc2luZyBjb25uZWN0b24uLi5cIik7XHJcbiAgXHRcdFx0XHRcdHNzZS5jbG9zZSgpO1xyXG4gIFx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcbiAgXHRcdH1cclxuICBcdH1cclxuICBcdGZ1bmN0aW9uIGRvd25sb2FkRnJvbVNlcnZlciAoKSB7XHJcbiAgICBcdHZhciB1cmw6c3RyaW5nID0gZG93bmxvYWRCdG5SZWYuY3VycmVudC52YWx1ZTtcclxuICAgIFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XHJcblx0fVxyXG5cdHJldHVybiAoXHJcblx0XHQ8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDxTbmFjayBvcGVuSGFuZGxlcj17b3BlbkhhbmRsZXJ9IG9wZW49e29wZW59IHZhcmllbnQ9e3ZhcmllbnR9IG1lc3NhZ2U9e21lc3NhZ2V9Lz5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHhzPXsxMn0gPlxyXG4gICAgICAgICAgICAgICAgPExvYWRpbmdNb2RhbCBwcm9ncmVzcz17bG9hZGluZ1Byb2dyZXNzfSBzaG93PXtzaG93TG9hZGluZ30gb25IaWRlPXsoKSA9PiBzZXRTaG93TG9hZGluZyhmYWxzZSl9Lz5cclxuICAgICAgICAgICAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmlucHV0Rm9ybX0+XHJcblx0XHRcdFx0ICAgIDxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtfT5cclxuXHRcdFx0XHRcdCAgICA8Rm9ybUdyb3VwPlxyXG5cdFx0XHRcdFx0XHQgICAgPEdyaWQgY29udGFpbmVyIHhzPXsxMn0+XHJcblx0XHRcdFx0XHRcdFx0ICAgIDxHcmlkIGl0ZW0geHM9ezEwfT5cclxuXHRcdFx0XHRcdFx0XHRcdCAgICA8VGV4dEZpZWxkXHJcblx0XHRcdFx0XHRcdFx0XHRcdCAgICBpbnB1dFJlZj17Z2V0UmVmfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQgICAgaWQ9XCJzdGFuZGFyZC1iYXNpY1wiXHJcblx0XHRcdFx0XHRcdFx0XHRcdCAgICBjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQgICAgbGFiZWw9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdCAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG5cdFx0XHRcdFx0XHRcdFx0ICAgIC8+XHJcblx0XHRcdFx0XHRcdFx0ICAgIDwvR3JpZD5cclxuXHRcdFx0XHRcdFx0XHQgICAgPEdyaWQgY29udGFpbmVyIHhzPXsyfSAganVzdGlmeT1cImZsZXgtc3RhcnRcIiBhbGlnbkl0ZW1zPVwiZmxleC1zdGFydFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0ICAgIDxCdXR0b24gcmVmPXtnZXRSZWZ9IG9uQ2xpY2s9e2dldH0gY2xhc3NOYW1lPXtjbGFzc2VzLmlucHV0Rm9ybUJ1dHRvbn0gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwicHJpbWFyeVwiPkdFVDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdCAgICA8L0dyaWQ+XHJcblx0XHRcdFx0XHRcdCAgICA8L0dyaWQ+XHJcblx0XHRcdFx0XHQgICAgPC9Gb3JtR3JvdXA+XHJcblx0XHRcdFx0XHQgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciB4cz17MTJ9PlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fT5cclxuXHRcdFx0XHRcdFx0ICAgICAgICAgICAgPEZvcm1Db250cm9sIGNvbXBvbmVudD1cImZpZWxkc2V0XCIgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1Db250cm9sfT5cclxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgPEZvcm1MYWJlbCBjb21wb25lbnQ9XCJsZWdlbmRcIj5EYXRhIFR5cGU8L0Zvcm1MYWJlbD5cclxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgPFJhZGlvR3JvdXAgYXJpYS1sYWJlbD1cImdlbmRlclwiIG5hbWU9XCJnZW5kZXIxXCIgdmFsdWU9e3R5cGV9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VUeXBlfSByb3c+XHJcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWwgdmFsdWU9XCJBdWRpb1wiIGNvbnRyb2w9ezxSYWRpbyAgY29sb3I9XCJwcmltYXJ5XCIgLz59IGxhYmVsPVwiQXVkaW9cIiBsYWJlbFBsYWNlbWVudD1cInN0YXJ0XCIvPlxyXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsIHZhbHVlPVwiVmlkZW9cIiBjb250cm9sPXs8UmFkaW8gIGNvbG9yPVwicHJpbWFyeVwiIC8+fSBsYWJlbD1cIlZpZGVvXCIgbGFiZWxQbGFjZW1lbnQ9XCJzdGFydFwiLz5cclxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgPC9SYWRpb0dyb3VwPlxyXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuXHRcdFx0XHRcdFx0ICAgICAgICAgICAgPEZvcm1Db250cm9sIGNvbXBvbmVudD1cImZpZWxkc2V0XCIgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1Db250cm9sfT5cclxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgPEZvcm1MYWJlbCBjb21wb25lbnQ9XCJsZWdlbmRcIj5GaWxlIFR5cGU8L0Zvcm1MYWJlbD5cclxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgPFJhZGlvR3JvdXAgYXJpYS1sYWJlbD1cImdlbmRlclwiIG5hbWU9XCJnZW5kZXIyXCIgdmFsdWU9e2V4dH0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZUV4dH0gcm93PlxyXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsIHZhbHVlPVwibXA0XCIgY29udHJvbD17PFJhZGlvIC8+fSBsYWJlbD1cIm1wNFwiIGxhYmVsUGxhY2VtZW50PVwic3RhcnRcIi8+XHJcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWwgdmFsdWU9XCJtcDNcIiBjb250cm9sPXs8UmFkaW8gLz59IGxhYmVsPVwibXAzXCIgbGFiZWxQbGFjZW1lbnQ9XCJzdGFydFwiLz5cclxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbCB2YWx1ZT1cIndhdlwiIGNvbnRyb2w9ezxSYWRpbyAvPn0gbGFiZWw9XCJ3YXZcIiBsYWJlbFBsYWNlbWVudD1cInN0YXJ0XCIvPlxyXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsIHZhbHVlPVwid2VibVwiIGNvbnRyb2w9ezxSYWRpbyAvPn0gbGFiZWw9XCJ3ZWJtXCIgbGFiZWxQbGFjZW1lbnQ9XCJzdGFydFwiLz5cclxuXHRcdFx0XHRcdFx0XHRcdCAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsIHZhbHVlPVwiZmx2XCIgY29udHJvbD17PFJhZGlvIC8+fSBsYWJlbD1cImZsdlwiIGxhYmVsUGxhY2VtZW50PVwic3RhcnRcIi8+XHJcblx0XHRcdFx0XHRcdFx0XHQgICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbCB2YWx1ZT1cImhsc1wiIGNvbnRyb2w9ezxSYWRpbyAvPn0gbGFiZWw9XCJobHNcIiBsYWJlbFBsYWNlbWVudD1cInN0YXJ0XCIvPlxyXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICA8L1JhZGlvR3JvdXA+XHJcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcblx0ICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgeHM9ezEyfT5cclxuXHQgICAgICAgICAgICAgICAgICAgIDxHcmlkIHhzPXs0fT5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgPENvbnRhaW5lciBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIn19IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiIHJlZj17Y29udGFpbmVyUmVmfT5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwic2Vjb25kYXJ5XCIgcmVmPXtkb3dubG9hZEJ0blJlZn0gb25DbGljaz17ZG93bmxvYWRGcm9tU2VydmVyfT5Eb3dubG9hZDwvQnV0dG9uPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuXHQgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblx0ICAgICAgICAgICAgPC9Db250YWluZXI+XHJcblx0XHRcdDwvR3JpZD5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG5cdCk7XHJcbn1cclxuY2xhc3MgSW5mb1BhbmVsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHRyZW5kZXIoKXtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxQYXBlcj5cclxuXHRcdFx0XHQ8Q29udGFpbmVyPlxyXG5cdFx0XHRcdFx0PFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCIgY29tcG9uZW50PVwiaDNcIj5cclxuXHRcdFx0XHRcdFx0PGk+VGhpcyBzaXRlIGlzIHVuZGVyIGNvbnN0cnVjdGlvbi48L2k+XHJcblx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XHJcblx0XHRcdFx0XHQ8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJwXCI+XHJcblx0XHRcdFx0XHRcdFRoZSBtYWluIHJlYXNvbiBmb3IgdGhpcyBzaXRlIGlzIHRvIGRvd25sb2FkIGF1ZGlvIGZpbGVzIGZyb20geW91dHViZS8gc29vbiB3aWxsIHN1cHBvcnQgbW9yZVxyXG5cdFx0XHRcdFx0XHRzaXRlcyBhbmQgcG9zc2libHkgdGhlIGFiaWxpdHkgdG8gZG93bmxvYWQgdGhlIHdob2xlIHZpZGVvIGluY2x1ZGluZyB2aXN1YWwgYW5kIGF1ZGlvLiBkZXBlbmRpbmcgb25cclxuXHRcdFx0XHRcdFx0d2hhdCBwZW9wbGUgd2FudDxici8+PGJyLz48YnIvPlxyXG5cdFx0XHRcdFx0XHRUZXN0aW5nIFVSTDogaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1wY1BpNGpQQVIyY1xyXG5cdFx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxyXG5cdFx0XHRcdDwvQ29udGFpbmVyPlxyXG5cdFx0XHQ8L1BhcGVyPlxyXG5cdFx0KVxyXG5cdH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblx0cmVuZGVyKCl7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8UmVhY3QuRnJhZ21lbnQ+XHJcblx0XHRcdFx0PFN1Ym1pdEZvcm0vPlxyXG5cdFx0XHRcdDxJbmZvUGFuZWwvPlxyXG5cdFx0XHQ8L1JlYWN0LkZyYWdtZW50PlxyXG5cdFx0KTtcclxuXHR9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==