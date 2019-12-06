webpackHotUpdateumd("main",{

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
    return (react_1.default.createElement(CustomizedSnackbars, { closeHandler: handleClose, open: open, message: props.message, varient: props.varient }));
}
function CustomizedSnackbars(props) {
    const classes = useStyles2();
    let val = props.open;
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(Snackbar_1.default, { anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'left',
            }, open: props.open, autoHideDuration: 6000, onClose: props.closeHandler },
            react_1.default.createElement(MySnackbarContentWrapper, { onClose: props.closeHandler(event, reason), variant: props.varient, message: props.message, className: classes.margin }))));
}
exports.default = CustomizedSnackbars;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91bWQvLi9zcmMvY29tcG9uZW50cy9zdGF0aWMvU25hY2sudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUdBQThDO0FBQzlDLHNHQUF3QjtBQUV4QixxSkFBNkQ7QUFDN0QsbUlBQWlEO0FBQ2pELGdJQUErQztBQUMvQyxtSUFBaUQ7QUFDakQsNkhBQXdEO0FBQ3hELDBKQUFzRDtBQUN0RCxvSkFBa0Q7QUFDbEQseUtBQWdFO0FBQ2hFLHlJQUFxRDtBQUNyRCw2SEFBNkQ7QUFFN0QsTUFBTSxXQUFXLEdBQUc7SUFDbEIsT0FBTyxFQUFFLHFCQUFlO0lBQ3hCLE9BQU8sRUFBRSxpQkFBVztJQUNwQixLQUFLLEVBQUUsZUFBUztJQUNoQixJQUFJLEVBQUUsY0FBUTtDQUNmLENBQUM7QUFFRixNQUFNLFVBQVUsR0FBRyxtQkFBVSxDQUFDLENBQUMsS0FBWSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQy9DLE9BQU8sRUFBRTtRQUNQLGVBQWUsRUFBRSxjQUFLLENBQUMsR0FBRyxDQUFDO0tBQzVCO0lBQ0QsS0FBSyxFQUFFO1FBQ0wsZUFBZSxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUk7S0FDMUM7SUFDRCxJQUFJLEVBQUU7UUFDSixlQUFlLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSTtLQUM1QztJQUNELE9BQU8sRUFBRTtRQUNQLGVBQWUsRUFBRSxjQUFLLENBQUMsR0FBRyxDQUFDO0tBQzVCO0lBQ0QsSUFBSSxFQUFFO1FBQ0osUUFBUSxFQUFFLEVBQUU7S0FDYjtJQUNELFdBQVcsRUFBRTtRQUNYLE9BQU8sRUFBRSxHQUFHO1FBQ1osV0FBVyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0tBQzlCO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsT0FBTyxFQUFFLE1BQU07UUFDZixVQUFVLEVBQUUsUUFBUTtLQUNyQjtD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dXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBTeW50aGV0aWNFdmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IENoZWNrQ2lyY2xlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ2hlY2tDaXJjbGUnO1xyXG5pbXBvcnQgRXJyb3JJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9FcnJvcic7XHJcbmltcG9ydCBJbmZvSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvSW5mbyc7XHJcbmltcG9ydCBDbG9zZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Nsb3NlJztcclxuaW1wb3J0IHsgYW1iZXIsIGdyZWVuIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzJztcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XHJcbmltcG9ydCBTbmFja2JhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TbmFja2Jhcic7XHJcbmltcG9ydCBTbmFja2JhckNvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU25hY2tiYXJDb250ZW50JztcclxuaW1wb3J0IFdhcm5pbmdJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9XYXJuaW5nJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcywgVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5cclxuY29uc3QgdmFyaWFudEljb24gPSB7XHJcbiAgc3VjY2VzczogQ2hlY2tDaXJjbGVJY29uLFxyXG4gIHdhcm5pbmc6IFdhcm5pbmdJY29uLFxyXG4gIGVycm9yOiBFcnJvckljb24sXHJcbiAgaW5mbzogSW5mb0ljb24sXHJcbn07XHJcblxyXG5jb25zdCB1c2VTdHlsZXMxID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PiAoe1xyXG4gIHN1Y2Nlc3M6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogZ3JlZW5bNjAwXSxcclxuICB9LFxyXG4gIGVycm9yOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuZXJyb3IuZGFyayxcclxuICB9LFxyXG4gIGluZm86IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXHJcbiAgfSxcclxuICB3YXJuaW5nOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGFtYmVyWzcwMF0sXHJcbiAgfSxcclxuICBpY29uOiB7XHJcbiAgICBmb250U2l6ZTogMjAsXHJcbiAgfSxcclxuICBpY29uVmFyaWFudDoge1xyXG4gICAgb3BhY2l0eTogMC45LFxyXG4gICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgfSxcclxuICBtZXNzYWdlOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICB9LFxyXG59KSk7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIHtcclxuICBjbGFzc05hbWU/OiBzdHJpbmc7XHJcbiAgbWVzc2FnZT86IHN0cmluZztcclxuICBvbkNsb3NlPzogKCkgPT4gdm9pZDtcclxuICB2YXJpYW50OiBrZXlvZiB0eXBlb2YgdmFyaWFudEljb247XHJcbn1cclxuXHJcbmZ1bmN0aW9uIE15U25hY2tiYXJDb250ZW50V3JhcHBlcihwcm9wczogUHJvcHMpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzMSgpO1xyXG4gIGNvbnN0IHsgY2xhc3NOYW1lLCBtZXNzYWdlLCBvbkNsb3NlLCB2YXJpYW50LCAuLi5vdGhlciB9ID0gcHJvcHM7XHJcbiAgY29uc3QgSWNvbiA9IHZhcmlhbnRJY29uW3ZhcmlhbnRdO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFNuYWNrYmFyQ29udGVudFxyXG4gICAgICBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlc1t2YXJpYW50XSwgY2xhc3NOYW1lKX1cclxuICAgICAgYXJpYS1kZXNjcmliZWRieT1cImNsaWVudC1zbmFja2JhclwiXHJcbiAgICAgIG1lc3NhZ2U9e1xyXG4gICAgICAgIDxzcGFuIGlkPVwiY2xpZW50LXNuYWNrYmFyXCIgY2xhc3NOYW1lPXtjbGFzc2VzLm1lc3NhZ2V9PlxyXG4gICAgICAgICAgPEljb24gY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMuaWNvbiwgY2xhc3Nlcy5pY29uVmFyaWFudCl9IC8+XHJcbiAgICAgICAgICB7bWVzc2FnZX1cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIH1cclxuICAgICAgYWN0aW9uPXtbXHJcbiAgICAgICAgPEljb25CdXR0b24ga2V5PVwiY2xvc2VcIiBhcmlhLWxhYmVsPVwiY2xvc2VcIiBjb2xvcj1cImluaGVyaXRcIiBvbkNsaWNrPXtvbkNsb3NlfT5cclxuICAgICAgICAgIDxDbG9zZUljb24gY2xhc3NOYW1lPXtjbGFzc2VzLmljb259IC8+XHJcbiAgICAgICAgPC9JY29uQnV0dG9uPixcclxuICAgICAgXX1cclxuICAgICAgey4uLm90aGVyfVxyXG4gICAgLz5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCB1c2VTdHlsZXMyID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PiAoe1xyXG4gIG1hcmdpbjoge1xyXG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmludGVyZmFjZSBTbmFja1Byb3BzIHtcclxuXHRvcGVuIDogYm9vbGVhbjtcclxuXHR2YXJpZW50OiBcInN1Y2Nlc3NcIiB8IFwiZXJyb3JcIiB8IFwid2FybmluZ1wiIHwgXCJpbmZvXCI7XHJcblx0bWVzc2FnZTogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBTbmFjayhwcm9wczogU25hY2tQcm9wcykge1xyXG4gICAgbGV0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKHByb3BzLm9wZW4pO1xyXG4gICAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoZXZlbnQ/OiBTeW50aGV0aWNFdmVudCwgcmVhc29uPzogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgaWYgKHJlYXNvbiA9PT0gJ2NsaWNrYXdheScpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDdXN0b21pemVkU25hY2tiYXJzIGNsb3NlSGFuZGxlcj17aGFuZGxlQ2xvc2V9IG9wZW49e29wZW59IG1lc3NhZ2U9e3Byb3BzLm1lc3NhZ2V9IHZhcmllbnQ9e3Byb3BzLnZhcmllbnR9Lz4gIFxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgKTtcclxufVxyXG5cclxuaW50ZXJmYWNlIGN1c3RvbVByb3BzIHtcclxuICAgIG9wZW46IGJvb2xlYW47XHJcbiAgICB2YXJpZW50OiBcInN1Y2Nlc3NcIiB8IFwiZXJyb3JcIiB8IFwid2FybmluZ1wiIHwgXCJpbmZvXCI7XHJcbiAgICBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgICBjbG9zZUhhbmRsZXI6IChldmVudDogYW55LCByZWFzb246c3RyaW5nKSA9PiB2b2lkO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEN1c3RvbWl6ZWRTbmFja2JhcnMocHJvcHM6IGN1c3RvbVByb3BzKSB7XHJcblx0Y29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlczIoKTtcclxuXHRsZXQgdmFsOiBib29sZWFuID0gcHJvcHMub3BlbjtcclxuXHRcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdj5cclxuXHRcdFx0PFNuYWNrYmFyIGFuY2hvck9yaWdpbj17e1xyXG5cdFx0XHRcdFx0dmVydGljYWw6ICdib3R0b20nLFxyXG5cdFx0XHRcdFx0aG9yaXpvbnRhbDogJ2xlZnQnLFxyXG5cdFx0XHRcdH19XHJcblx0XHRcdFx0b3Blbj17cHJvcHMub3Blbn1cclxuXHRcdFx0XHRhdXRvSGlkZUR1cmF0aW9uPXs2MDAwfVxyXG5cdFx0XHRcdG9uQ2xvc2U9e3Byb3BzLmNsb3NlSGFuZGxlcn1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxNeVNuYWNrYmFyQ29udGVudFdyYXBwZXJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsb3NlPXtwcm9wcy5jbG9zZUhhbmRsZXIoZXZlbnQsIHJlYXNvbil9XHJcblx0XHRcdFx0XHR2YXJpYW50PXtwcm9wcy52YXJpZW50fVxyXG5cdFx0XHRcdFx0bWVzc2FnZT17cHJvcHMubWVzc2FnZX1cclxuXHRcdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy5tYXJnaW59XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC9TbmFja2Jhcj5cclxuICAgXHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==