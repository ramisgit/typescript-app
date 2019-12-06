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
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(Modal_1.default, { "aria-labelledby": "transition-modal-title", "aria-describedby": "transition-modal-description", className: classes.modal, open: props.show, onClose: props.onHide, closeAfterTransition: true, BackdropComponent: Backdrop_1.default, BackdropProps: {
                timeout: 500,
            } },
            react_1.default.createElement(Fade_1.default, { in: props.show },
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
                            containerRef.current.innerHTML = `<Button color='secondary' href=${url} onClick={downloadFromServer}>Download</Button>`;
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
                        react_1.default.createElement(Container_1.default, { style: { display: "none" }, className: "container-fluid" })))))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91bWQvLi9zcmMvY29tcG9uZW50cy9wYWdlcy9JbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUdBQXlCO0FBRXpCLCtGQUEyQztBQUMzQyx1SkFBb0Q7QUFDcEQsOElBQThDO0FBQzlDLHdJQUEwQztBQUMxQyw2SEFBMkU7QUFDM0UsMklBQTRDO0FBQzVDLG9KQUFrRDtBQUNsRCx3SUFBMEM7QUFDMUMsc0tBQThEO0FBQzlELDJJQUE0QztBQUM1Qyx1SkFBb0Q7QUFDcEQsNkpBQXdEO0FBQ3hELDJJQUE0QztBQUM1QywwSkFBc0Q7QUFFdEQsNEtBQWtFO0FBQ2xFLHVKQUFvRDtBQUNwRCx1SkFBb0Q7QUFDcEQsMEpBQXNEO0FBQ3RELGlIQUFvQztBQUVwQyxNQUFNLFNBQVMsR0FBRyxtQkFBVSxDQUFDLENBQUMsS0FBWSxFQUFFLEVBQUUsQ0FDN0MscUJBQVksQ0FBQztJQUNaLEtBQUssRUFBRTtRQUNOLE9BQU8sRUFBRSxNQUFNO1FBQ2YsVUFBVSxFQUFFLFFBQVE7UUFDcEIsY0FBYyxFQUFFLFFBQVE7S0FDeEI7SUFDRCxLQUFLLEVBQUU7UUFDTixlQUFlLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsS0FBSztRQUMvQyxNQUFNLEVBQUUsZ0JBQWdCO1FBQ3hCLFNBQVMsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUMzQixPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUMvQjtJQUNELElBQUksRUFBRTtRQUNMLEtBQUssRUFBRSxNQUFNO1FBQ2IsV0FBVyxFQUFFO1lBQ1osU0FBUyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1NBQzNCO0tBQ0Q7SUFDRCxTQUFTLEVBQUU7UUFDVixVQUFVLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDNUIs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QUFHOztvQkFHUix5Q0FBSztvQkFBQSx5Q0FBSztvQkFBQSx5Q0FBSzsrRUFFbkIsQ0FDRixDQUNMLENBQ1I7SUFDRixDQUFDO0NBQ0Q7QUFDRCxNQUFxQixLQUFNLFNBQVEsZUFBSyxDQUFDLFNBQVM7SUFDakQsTUFBTTtRQUNMLE9BQU8sQ0FDTiw4QkFBQyxlQUFLLENBQUMsUUFBUTtZQUNkLDhCQUFDLFVBQVUsT0FBRTtZQUNiLDhCQUFDLFNBQVMsT0FBRSxDQUNJLENBQ2pCLENBQUM7SUFDSCxDQUFDO0NBQ0Q7QUFURCx3QkFTQyIsImZpbGUiOiJtYWluLmE5ZGUwZDVjMjdhNmViZGI3YzZjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQgeyBwb3N0LCBnZXR9IGZyb20gJy4uL3N0YXRpYy9heGlvcyc7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcywgVGhlbWUsIGNyZWF0ZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBNb2RhbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Nb2RhbCc7XHJcbmltcG9ydCBCYWNrZHJvcCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CYWNrZHJvcCc7XHJcbmltcG9ydCBGYWRlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ZhZGUnO1xyXG5pbXBvcnQgTGluZWFyUHJvZ3Jlc3MgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGluZWFyUHJvZ3Jlc3MnO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xyXG5pbXBvcnQgRm9ybUdyb3VwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1Hcm91cCc7XHJcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbCc7XHJcbmltcG9ydCBSYWRpbyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9SYWRpbyc7XHJcbmltcG9ydCBSYWRpb0dyb3VwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1JhZGlvR3JvdXAnO1xyXG5pbXBvcnQgRm9ybUhlbHBlclRleHQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUhlbHBlclRleHQnO1xyXG5pbXBvcnQgRm9ybUNvbnRyb2xMYWJlbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbExhYmVsJztcclxuaW1wb3J0IEZvcm1MYWJlbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtTGFiZWwnO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgU25hY2sgZnJvbSAnLi4vc3RhdGljL1NuYWNrJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lOiBUaGVtZSkgPT5cclxuXHRjcmVhdGVTdHlsZXMoe1xyXG5cdFx0bW9kYWw6IHtcclxuXHRcdFx0ZGlzcGxheTogJ2ZsZXgnLFxyXG5cdFx0XHRhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuXHRcdFx0anVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG5cdFx0fSxcclxuXHRcdHBhcGVyOiB7XHJcblx0XHRcdGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxyXG5cdFx0XHRib3JkZXI6ICcycHggc29saWQgIzAwMCcsXHJcblx0XHRcdGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1s1XSxcclxuXHRcdFx0cGFkZGluZzogdGhlbWUuc3BhY2luZygyLCA0LCAzKSxcclxuXHRcdH0sXHJcblx0XHRyb290OiB7XHJcblx0XHRcdHdpZHRoOiAnMTAwJScsXHJcblx0XHRcdCcmID4gKiArIConOiB7XHJcblx0XHRcdFx0bWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHRcdHRleHRGaWVsZDoge1xyXG5cdFx0XHRtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDEpLFxyXG5cdFx0XHRtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygxKSxcclxuXHRcdFx0d2lkdGg6IFwiMTAwJVwiXHJcblx0XHR9LFxyXG5cdFx0Zm9ybUNvbnRyb2w6IHtcclxuXHRcdFx0bWFyZ2luOiB0aGVtZS5zcGFjaW5nKDMpLFxyXG5cdFx0fSxcclxuXHRcdGlucHV0Rm9ybToge1xyXG5cdFx0XHR0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcblx0XHRcdHBhZGRpbmc6IFwiMzBweCAwIDAgMFwiLFxyXG5cdFx0XHR3aWR0aDogXCIxMDB2d1wiLFxyXG5cdFx0XHRtYXJnaW46IFwiMHB4IGF1dG8gNTBweCBhdXRvXCIsXHJcblx0XHR9LFxyXG5cdFx0Zm9ybToge1xyXG5cdFx0XHRtYXJnaW46IFwiMHB4IGF1dG8gMTBweCBhdXRvXCIsXHJcblx0XHRcdHdpZHRoOiBcIjEwMCVcIlxyXG5cdFx0fSxcclxuXHRcdGlucHV0Rm9ybUlucHV0OiB7XHJcblx0XHRcdHdpZHRoOiBcIjg1JVwiLFxyXG5cdFx0XHRkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxyXG5cdFx0fSxcclxuXHRcdGlucHV0Rm9ybUJ1dHRvbjoge1xyXG5cdFx0XHRoZWlnaHQ6IFwiMTAwJVwiLFxyXG5cdFx0XHRtYXJnaW46IFwiMHB4XCIsXHJcblx0XHR9XHJcblx0fSksXHJcbik7XHJcblxyXG5pbnRlcmZhY2UgUHJvZ3Jlc3NQcm9wcyB7XHJcblx0cHJvZ3Jlc3NWYWx1ZTogbnVtYmVyO1xyXG59XHJcbmZ1bmN0aW9uIFByb2dyZXNzQmFyKHByb3BzOiBQcm9ncmVzc1Byb3BzKSB7XHJcblx0Y29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cdGNvbnN0IFtjb21wbGV0ZWQsIHNldENvbXBsZXRlZF0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcclxuXHJcblx0UmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGZ1bmN0aW9uIHByb2dyZXNzKCkge1xyXG5cdFx0XHRzZXRDb21wbGV0ZWQob2xkQ29tcGxldGVkID0+IHtcclxuXHRcdFx0XHRpZiAob2xkQ29tcGxldGVkID09PSAxMDApIHtcclxuXHRcdFx0XHRcdHJldHVybiAwO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gTWF0aC5taW4ocHJvcHMucHJvZ3Jlc3NWYWx1ZSwgMTAwKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgdGltZXIgPSBzZXRJbnRlcnZhbChwcm9ncmVzcywgNTAwKTtcclxuXHRcdHJldHVybiAoKSA9PiB7XHJcbiAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgPExpbmVhclByb2dyZXNzIHZhcmlhbnQ9XCJkZXRlcm1pbmF0ZVwiIHZhbHVlPXtjb21wbGV0ZWR9IC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5cclxuaW50ZXJmYWNlIGxvYWRpbmdNb2RhbFByb3BzIHtcclxuXHRwcm9ncmVzczogc3RyaW5nO1xyXG5cdG9uSGlkZTogKCkgPT4gdm9pZDtcclxuXHRzaG93OiBib29sZWFuO1xyXG59XHJcblxyXG5mdW5jdGlvbiBMb2FkaW5nTW9kYWwocHJvcHM6IGxvYWRpbmdNb2RhbFByb3BzKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwidHJhbnNpdGlvbi1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cInRyYW5zaXRpb24tbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tb2RhbH1cclxuICAgICAgICBvcGVuPXtwcm9wcy5zaG93fVxyXG4gICAgICAgIG9uQ2xvc2U9e3Byb3BzLm9uSGlkZX1cclxuICAgICAgICBjbG9zZUFmdGVyVHJhbnNpdGlvblxyXG4gICAgICAgIEJhY2tkcm9wQ29tcG9uZW50PXtCYWNrZHJvcH1cclxuICAgICAgICBCYWNrZHJvcFByb3BzPXt7XHJcbiAgICAgICAgICB0aW1lb3V0OiA1MDAsXHJcbiAgICAgICAgfX0+XHJcbiAgICAgICAgPEZhZGUgaW49e3Byb3BzLnNob3d9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxyXG4gICAgICAgICAgICA8aDIgaWQ9XCJ0cmFuc2l0aW9uLW1vZGFsLXRpdGxlXCI+RG93bmxvYWRpbmcgeW91ciBmaWxlPC9oMj5cclxuXHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPkxvYWRpbmc8L3NwYW4+XHJcblx0XHRcdDxQcm9ncmVzc0JhciBwcm9ncmVzc1ZhbHVlPXtwYXJzZUludChwcm9wcy5wcm9ncmVzcyl9Lz5cclxuICAgICAgICA8aDQ+RG93bmxvYWRpbmcuLi4ge3Byb3BzLnByb2dyZXNzfSAlPC9oND5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgIFBsZWFzZSB3YWl0IHdoaWxlIHlvdXIgZmlsZSBpcyBiZWluZyBkb3dubG9hZGVkLiBGZWVsIGZyZWUgdG8gdXNlIHRoaXMgc2VydmljZSBhcyBtYW55XHJcbiAgICAgICAgICB0aW1lcyBhcyB5b3Ugd2FudC48YnIvPlxyXG5cclxuICAgICAgICAgIEEgYnV0dG9uIGxpbmsgd2lsbCBiZSBwcm92aWRlZCBzaG9ydGx5Li4uLlxyXG4gICAgICAgIDwvcD5cclxuXHRcdDxCdXR0b24gb25DbGljaz17cHJvcHMub25IaWRlfT5DbG9zZTwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9GYWRlPlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIFN1Ym1pdEZvcm0oKSB7XHJcblx0Y29uc3QgY29udGFpbmVyUmVmOmFueSA9IFJlYWN0LmNyZWF0ZVJlZigpO1xyXG5cdGNvbnN0IGdldFJlZjogYW55ID0gUmVhY3QuY3JlYXRlUmVmKCk7XHJcblx0Y29uc3QgZG93bmxvYWRCdG5SZWY6IGFueSA9IFJlYWN0LmNyZWF0ZVJlZigpO1xyXG5cdFxyXG5cdGNvbnN0IFtleHQsIHNldEV4dF0gPSBSZWFjdC51c2VTdGF0ZShcIm1wNFwiKTtcclxuXHRjb25zdCBbdHlwZSwgc2V0VHlwZV0gPSBSZWFjdC51c2VTdGF0ZShcIkF1ZGlvXCIpO1xyXG5cdGNvbnN0IFtzaG93TG9hZGluZywgc2V0U2hvd0xvYWRpbmddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IFtsb2FkaW5nUHJvZ3Jlc3MsIHNldExvYWRpbmdQcm9ncmVzc10gPSBSZWFjdC51c2VTdGF0ZShcIjBcIik7XHJcblx0Y29uc3QgW29wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcblx0Y29uc3QgW3ZhcmllbnQsIHNldFZhcmllbnRdID0gUmVhY3QudXNlU3RhdGU8XCJzdWNjZXNzXCIgfCBcImVycm9yXCIgfCBcIndhcm5pbmdcIiB8IFwiaW5mb1wiPihcImluZm9cIik7XHJcblx0Y29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlVHlwZSA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcclxuICAgIHNldFR5cGUoKGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSk7XHJcbiAgfTtcclxuXHRjb25zdCBoYW5kbGVDaGFuZ2VFeHQgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XHJcbiAgICBzZXRFeHQoKGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSk7XHJcbiAgfTtcdFxyXG5cdFxyXG5cdCBmdW5jdGlvbiBoYW5kbGVDaGFuZ2VBbGVydFNob3cgKGV2ZW50OiBhbnksIHNob3c6IGJvb2xlYW4pIHtcclxuXHRcdHNldE9wZW4oc2hvdyk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBvcGVuSGFuZGxlcih2YWw6IGJvb2xlYW4pIHtcclxuICAgICAgICBzZXRPcGVuKHZhbCk7XHJcbiAgICB9XHJcblx0ZnVuY3Rpb24gZ2V0IChlOiBhbnkpIHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdHNldE9wZW4oZmFsc2UpO1xyXG4gICAgICAgIHZhciBVUkxpbnB1dCA9IGdldFJlZi5jdXJyZW50LnZhbHVlLnNwbGl0KFwiPVwiKVsxXTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJhcyBcIiArIFVSTGlucHV0ICsgXCIsIFwiICsgdHlwZSArIFwiLCBcIiArIGV4dClcclxuXHRcdGlmIChVUkxpbnB1dCA9PT0gdW5kZWZpbmVkIHx8IG51bGwpe1xyXG5cdFx0XHRzZXRWYXJpZW50KFwid2FybmluZ1wiKTtcclxuXHRcdFx0c2V0TWVzc2FnZShcIkludmFsaWQgdXJsIHRyeSBhbm90aGVyIG9yIGxvb2sgY2FyZWZ1bGx5IHRvIGNvcnJlY3QgaXQuXCIpO1xyXG5cdFx0XHRzZXRPcGVuKHRydWUpO1xyXG5cdCAgXHR9IGVsc2Uge1xyXG4gICAgICAgICAgICBcclxuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBwb3N0KFwiL2Rvd25sb2FkXCIsIEpTT04uc3RyaW5naWZ5KHt1cmw6VVJMaW5wdXQsIHR5cGU6dHlwZSwgZXh0ZW5zaW9uOmV4dH0pLCB0cnVlKTtcclxuXHRcdFx0cmVzcG9uc2Uub25sb2FkID0gKCkgPT4ge1xyXG5cdFx0XHRcdHZhciBzc2U6RXZlbnRTb3VyY2UgPSBuZXcgRXZlbnRTb3VyY2UoXCJodHRwOi8vbG9jYWxob3N0OjgwODAvZG93bmxvYWQvc3NlXCIpO1xyXG5cdFx0ICBcdFx0c3NlLm9ub3BlbiA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTaG93TG9hZGluZyh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICBzc2Uub25tZXNzYWdlID0gZXZ0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0TG9hZGluZ1Byb2dyZXNzKGV2dC5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2dC5kYXRhID09PSBcIjEwMFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTaG93TG9hZGluZyhmYWxzZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1cmw6IHN0cmluZyA9IFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2Rvd25sb2FkL3ZpZGVvL1wiICsgVVJMaW5wdXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXJSZWYuY3VycmVudC5pbm5lckhUTUwgPSBgPEJ1dHRvbiBjb2xvcj0nc2Vjb25kYXJ5JyBocmVmPSR7dXJsfSBvbkNsaWNrPXtkb3dubG9hZEZyb21TZXJ2ZXJ9PkRvd25sb2FkPC9CdXR0b24+YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lclJlZi5jdXJyZW50LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzc2UuY2xvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHRcdCAgXHRcdH1cclxuXHQgIFx0XHRcdFxyXG5cdFx0XHRcdHNzZS5vbmVycm9yID0gKCkgPT4ge1xyXG4gIFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIkV2ZW50U291cmNlIGZhaWxlZC5cIik7XHJcblx0XHRcdFx0XHRzZXRTaG93TG9hZGluZyhmYWxzZSk7XHJcbiAgXHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiQ2xvc2luZyBjb25uZWN0b24uLi5cIik7XHJcbiAgXHRcdFx0XHRcdHNzZS5jbG9zZSgpO1xyXG4gIFx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcbiAgXHRcdH1cclxuICBcdH1cclxuICBcdGZ1bmN0aW9uIGRvd25sb2FkRnJvbVNlcnZlciAoKSB7XHJcbiAgICBcdHZhciB1cmw6c3RyaW5nID0gZG93bmxvYWRCdG5SZWYuY3VycmVudC52YWx1ZTtcclxuICAgIFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XHJcblx0fVxyXG5cdHJldHVybiAoXHJcblx0XHQ8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDxTbmFjayBvcGVuSGFuZGxlcj17b3BlbkhhbmRsZXJ9IG9wZW49e29wZW59IHZhcmllbnQ9e3ZhcmllbnR9IG1lc3NhZ2U9e21lc3NhZ2V9Lz5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHhzPXsxMn0gPlxyXG4gICAgICAgICAgICAgICAgPExvYWRpbmdNb2RhbCBwcm9ncmVzcz17bG9hZGluZ1Byb2dyZXNzfSBzaG93PXtzaG93TG9hZGluZ30gb25IaWRlPXsoKSA9PiBzZXRTaG93TG9hZGluZyhmYWxzZSl9Lz5cclxuICAgICAgICAgICAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmlucHV0Rm9ybX0+XHJcblx0XHRcdFx0ICAgIDxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtfT5cclxuXHRcdFx0XHRcdCAgICA8Rm9ybUdyb3VwPlxyXG5cdFx0XHRcdFx0XHQgICAgPEdyaWQgY29udGFpbmVyIHhzPXsxMn0+XHJcblx0XHRcdFx0XHRcdFx0ICAgIDxHcmlkIGl0ZW0geHM9ezEwfT5cclxuXHRcdFx0XHRcdFx0XHRcdCAgICA8VGV4dEZpZWxkXHJcblx0XHRcdFx0XHRcdFx0XHRcdCAgICBpbnB1dFJlZj17Z2V0UmVmfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQgICAgaWQ9XCJzdGFuZGFyZC1iYXNpY1wiXHJcblx0XHRcdFx0XHRcdFx0XHRcdCAgICBjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQgICAgbGFiZWw9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdCAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG5cdFx0XHRcdFx0XHRcdFx0ICAgIC8+XHJcblx0XHRcdFx0XHRcdFx0ICAgIDwvR3JpZD5cclxuXHRcdFx0XHRcdFx0XHQgICAgPEdyaWQgY29udGFpbmVyIHhzPXsyfSAganVzdGlmeT1cImZsZXgtc3RhcnRcIiBhbGlnbkl0ZW1zPVwiZmxleC1zdGFydFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0ICAgIDxCdXR0b24gb25DbGljaz17Z2V0fSBjbGFzc05hbWU9e2NsYXNzZXMuaW5wdXRGb3JtQnV0dG9ufSB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJwcmltYXJ5XCI+R0VUPC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdFx0ICAgIDwvR3JpZD5cclxuXHRcdFx0XHRcdFx0ICAgIDwvR3JpZD5cclxuXHRcdFx0XHRcdCAgICA8L0Zvcm1Hcm91cD5cclxuXHRcdFx0XHRcdCAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHhzPXsxMn0+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9PlxyXG5cdFx0XHRcdFx0XHQgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgY29tcG9uZW50PVwiZmllbGRzZXRcIiBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybUNvbnRyb2x9PlxyXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICA8Rm9ybUxhYmVsIGNvbXBvbmVudD1cImxlZ2VuZFwiPkRhdGEgVHlwZTwvRm9ybUxhYmVsPlxyXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICA8UmFkaW9Hcm91cCBhcmlhLWxhYmVsPVwiZ2VuZGVyXCIgbmFtZT1cImdlbmRlcjFcIiB2YWx1ZT17dHlwZX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZVR5cGV9IHJvdz5cclxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbCB2YWx1ZT1cIkF1ZGlvXCIgY29udHJvbD17PFJhZGlvICBjb2xvcj1cInByaW1hcnlcIiAvPn0gbGFiZWw9XCJBdWRpb1wiIGxhYmVsUGxhY2VtZW50PVwic3RhcnRcIi8+XHJcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWwgdmFsdWU9XCJWaWRlb1wiIGNvbnRyb2w9ezxSYWRpbyAgY29sb3I9XCJwcmltYXJ5XCIgLz59IGxhYmVsPVwiVmlkZW9cIiBsYWJlbFBsYWNlbWVudD1cInN0YXJ0XCIvPlxyXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICA8L1JhZGlvR3JvdXA+XHJcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxyXG5cdFx0XHRcdFx0XHQgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgY29tcG9uZW50PVwiZmllbGRzZXRcIiBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybUNvbnRyb2x9PlxyXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICA8Rm9ybUxhYmVsIGNvbXBvbmVudD1cImxlZ2VuZFwiPkZpbGUgVHlwZTwvRm9ybUxhYmVsPlxyXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICA8UmFkaW9Hcm91cCBhcmlhLWxhYmVsPVwiZ2VuZGVyXCIgbmFtZT1cImdlbmRlcjJcIiB2YWx1ZT17ZXh0fSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlRXh0fSByb3c+XHJcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWwgdmFsdWU9XCJtcDRcIiBjb250cm9sPXs8UmFkaW8gLz59IGxhYmVsPVwibXA0XCIgbGFiZWxQbGFjZW1lbnQ9XCJzdGFydFwiLz5cclxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbCB2YWx1ZT1cIm1wM1wiIGNvbnRyb2w9ezxSYWRpbyAvPn0gbGFiZWw9XCJtcDNcIiBsYWJlbFBsYWNlbWVudD1cInN0YXJ0XCIvPlxyXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsIHZhbHVlPVwid2F2XCIgY29udHJvbD17PFJhZGlvIC8+fSBsYWJlbD1cIndhdlwiIGxhYmVsUGxhY2VtZW50PVwic3RhcnRcIi8+XHJcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWwgdmFsdWU9XCJ3ZWJtXCIgY29udHJvbD17PFJhZGlvIC8+fSBsYWJlbD1cIndlYm1cIiBsYWJlbFBsYWNlbWVudD1cInN0YXJ0XCIvPlxyXG5cdFx0XHRcdFx0XHRcdFx0ICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWwgdmFsdWU9XCJmbHZcIiBjb250cm9sPXs8UmFkaW8gLz59IGxhYmVsPVwiZmx2XCIgbGFiZWxQbGFjZW1lbnQ9XCJzdGFydFwiLz5cclxuXHRcdFx0XHRcdFx0XHRcdCAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsIHZhbHVlPVwiaGxzXCIgY29udHJvbD17PFJhZGlvIC8+fSBsYWJlbD1cImhsc1wiIGxhYmVsUGxhY2VtZW50PVwic3RhcnRcIi8+XHJcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgIDwvUmFkaW9Hcm91cD5cclxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblx0ICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuXHQgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciB4cz17MTJ9PlxyXG5cdCAgICAgICAgICAgICAgICAgICAgPEdyaWQgeHM9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRhaW5lciBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIn19IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHQgICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuXHRcdFx0PC9HcmlkPlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcblx0KTtcclxufVxyXG5jbGFzcyBJbmZvUGFuZWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cdHJlbmRlcigpe1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PFBhcGVyPlxyXG5cdFx0XHRcdDxDb250YWluZXI+XHJcblx0XHRcdFx0XHQ8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIiBjb21wb25lbnQ9XCJoM1wiPlxyXG5cdFx0XHRcdFx0XHQ8aT5UaGlzIHNpdGUgaXMgdW5kZXIgY29uc3RydWN0aW9uLjwvaT5cclxuXHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cclxuXHRcdFx0XHRcdDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cInBcIj5cclxuXHRcdFx0XHRcdFx0VGhlIG1haW4gcmVhc29uIGZvciB0aGlzIHNpdGUgaXMgdG8gZG93bmxvYWQgYXVkaW8gZmlsZXMgZnJvbSB5b3V0dWJlLyBzb29uIHdpbGwgc3VwcG9ydCBtb3JlXHJcblx0XHRcdFx0XHRcdHNpdGVzIGFuZCBwb3NzaWJseSB0aGUgYWJpbGl0eSB0byBkb3dubG9hZCB0aGUgd2hvbGUgdmlkZW8gaW5jbHVkaW5nIHZpc3VhbCBhbmQgYXVkaW8uIGRlcGVuZGluZyBvblxyXG5cdFx0XHRcdFx0XHR3aGF0IHBlb3BsZSB3YW50PGJyLz48YnIvPjxici8+XHJcblx0XHRcdFx0XHRcdFRlc3RpbmcgVVJMOiBodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PXBjUGk0alBBUjJjXHJcblx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XHJcblx0XHRcdFx0PC9Db250YWluZXI+XHJcblx0XHRcdDwvUGFwZXI+XHJcblx0XHQpXHJcblx0fVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHRyZW5kZXIoKXtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxSZWFjdC5GcmFnbWVudD5cclxuXHRcdFx0XHQ8U3VibWl0Rm9ybS8+XHJcblx0XHRcdFx0PEluZm9QYW5lbC8+XHJcblx0XHRcdDwvUmVhY3QuRnJhZ21lbnQ+XHJcblx0XHQpO1xyXG5cdH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9