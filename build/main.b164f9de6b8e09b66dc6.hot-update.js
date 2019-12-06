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
function CustomizedSnackbars(props) {
    const classes = useStyles2();
    let val = props.open;
    let [open, setOpen] = react_1.default.useState(val);
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        props.set;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91bWQvLi9zcmMvY29tcG9uZW50cy9zdGF0aWMvU25hY2sudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUdBQThDO0FBQzlDLHNHQUF3QjtBQUV4QixxSkFBNkQ7QUFDN0QsbUlBQWlEO0FBQ2pELGdJQUErQztBQUMvQyxtSUFBaUQ7QUFDakQsNkhBQXdEO0FBQ3hELDBKQUFzRDtBQUN0RCxvSkFBa0Q7QUFDbEQseUtBQWdFO0FBQ2hFLHlJQUFxRDtBQUNyRCw2SEFBNkQ7QUFFN0QsTUFBTSxXQUFXLEdBQUc7SUFDbEIsT0FBTyxFQUFFLHFCQUFlO0lBQ3hCLE9BQU8sRUFBRSxpQkFBVztJQUNwQixLQUFLLEVBQUUsZUFBUztJQUNoQixJQUFJLEVBQUUsY0FBUTtDQUNmLENBQUM7QUFFRixNQUFNLFVBQVUsR0FBRyxtQkFBVSxDQUFDLENBQUMsS0FBWSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQy9DLE9BQU8sRUFBRTtRQUNQLGVBQWUsRUFBRSxjQUFLLENBQUMsR0FBRyxDQUFDO0tBQzVCO0lBQ0QsS0FBSyxFQUFFO1FBQ0wsZUFBZSxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUk7S0FDMUM7SUFDRCxJQUFJLEVBQUU7UUFDSixlQUFlLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSTtLQUM1QztJQUNELE9BQU8sRUFBRTtRQUNQLGVBQWUsRUFBRSxjQUFLLENBQUMsR0FBRyxDQUFDO0tBQzVCO0lBQ0QsSUFBSSxFQUFFO1FBQ0osUUFBUSxFQUFFLEVBQUU7S0FDYjtJQUNELFdBQVcsRUFBRTtRQUNYLE9BQU8sRUFBRSxHQUFHO1FBQ1osV0FBVyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0tBQzlCO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsT0FBTyxFQUFFLE1BQU07UUFDZixVQUFVLEVBQUUsUUFBUTtLQUNyQjtDQUNGLENBQUMsQ0FBQyxDQUFDO0FBU0osU0FBUyx3QkFBd0IsQ0FBQyxLQUFZO0lBQzVDLE1BQU0sT0FBTyxHQUFHLFVBQVUsRUFBRSxDQUFDO0lBQzdCLE1BQU0sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEtBQWUsS0FBSyxFQUFsQixxRUFBa0IsQ0FBQztJQUNqRSxNQUFNLElBQUksR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7SUFFbEMsT0FBTyxDQUNMLDhCQUFDLHlCQUFlLGtCQUNkLFNBQVMsRUFBRSxjQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLFNBQVMsQ0FBQyxzQkFDM0IsaUJBQWlCLEVBQ2xDLE9BQU8sRUFDTCx3Q0FBTSxFQUFFLEVBQUMsaUJBQWlCLEVBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxPQUFPO1lBQ25ELDhCQUFDLElBQUksSUFBQyxTQUFTLEVBQUUsY0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLFdBQVcsQ0FBQyxHQUFJO1lBQzNELE9BQU8sQ0FDSCxFQUVULE1BQU0sRUFBRTtZQUNOLDhCQUFDLG9CQUFVLElBQUMsR0FBRyxFQUFDLE9BQU8sZ0JBQVksT0FBTyxFQUFDLEtBQUssRUFBQyxTQUFTLEVBQUMsT0FBTyxFQUFFLE9BQU87Z0JBQ3pFLDhCQUFDLGVBQVMsSUFBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLElBQUksR0FBSSxDQUMzQjtTQUNkLElBQ0csS0FBSyxFQUNULENBQ0gsQ0FBQztBQUNKLENBQUM7QUFFRCxNQUFNLFVBQVUsR0FBRyxtQkFBVSxDQUFDLENBQUMsS0FBWSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQy9DLE1BQU0sRUFBRTtRQUNOLE1BQU0sRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztLQUN6QjtDQUNGLENBQUMsQ0FBQyxDQUFDO0FBUUosU0FBd0IsbUJBQW1CLENBQUMsS0FBaUI7SUFDNUQsTUFBTSxPQUFPLEdBQUcsVUFBVSxFQUFFLENBQUM7SUFDN0IsSUFBSSxHQUFHLEdBQVksS0FBSyxDQUFDLElBQUksQ0FBQztJQUM5QixJQUFJLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxHQUFHLGVBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDMUMsTUFBTSxXQUFXLEdBQUcsQ0FBQyxLQUFzQixFQUFFLE1BQWUsRUFBRSxFQUFFO1FBQy9ELElBQUksTUFBTSxLQUFLLFdBQVcsRUFBRTtZQUMzQixPQUFPO1NBQ1A7UUFDSyxLQUFLLENBQUMsR0FBRztRQUNmLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQixDQUFDLENBQUM7SUFFRixPQUFPLENBQ047UUFDQyw4QkFBQyxrQkFBUSxJQUFDLFlBQVksRUFBRTtnQkFDdEIsUUFBUSxFQUFFLFFBQVE7Z0JBQ2xCLFVBQVUsRUFBRSxNQUFNO2FBQ2xCLEVBQ0QsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJLEVBQ2hCLGdCQUFnQixFQUFFLElBQUksRUFDdEIsT0FBTyxFQUFFLFdBQVc7WUFFcEIsOEJBQUMsd0JBQXdCLElBQ3hCLE9BQU8sRUFBRSxXQUFXLEVBQ3BCLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTyxFQUN0QixPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFDdEIsU0FBUyxFQUFFLE9BQU8sQ0FBQyxNQUFNLEdBQ3hCLENBQ1EsQ0FFTixDQUNOLENBQUM7QUFDSCxDQUFDO0FBaENELHNDQWdDQyIsImZpbGUiOiJtYWluLmIxNjRmOWRlNmI4ZTA5YjY2ZGM2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgU3ludGhldGljRXZlbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbmltcG9ydCBDaGVja0NpcmNsZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0NoZWNrQ2lyY2xlJztcclxuaW1wb3J0IEVycm9ySWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRXJyb3InO1xyXG5pbXBvcnQgSW5mb0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0luZm8nO1xyXG5pbXBvcnQgQ2xvc2VJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DbG9zZSc7XHJcbmltcG9ydCB7IGFtYmVyLCBncmVlbiB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL2NvbG9ycyc7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xyXG5pbXBvcnQgU25hY2tiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU25hY2tiYXInO1xyXG5pbXBvcnQgU25hY2tiYXJDb250ZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1NuYWNrYmFyQ29udGVudCc7XHJcbmltcG9ydCBXYXJuaW5nSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvV2FybmluZyc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMsIFRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuXHJcbmNvbnN0IHZhcmlhbnRJY29uID0ge1xyXG4gIHN1Y2Nlc3M6IENoZWNrQ2lyY2xlSWNvbixcclxuICB3YXJuaW5nOiBXYXJuaW5nSWNvbixcclxuICBlcnJvcjogRXJyb3JJY29uLFxyXG4gIGluZm86IEluZm9JY29uLFxyXG59O1xyXG5cclxuY29uc3QgdXNlU3R5bGVzMSA9IG1ha2VTdHlsZXMoKHRoZW1lOiBUaGVtZSkgPT4gKHtcclxuICBzdWNjZXNzOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGdyZWVuWzYwMF0sXHJcbiAgfSxcclxuICBlcnJvcjoge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmVycm9yLmRhcmssXHJcbiAgfSxcclxuICBpbmZvOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluLFxyXG4gIH0sXHJcbiAgd2FybmluZzoge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiBhbWJlcls3MDBdLFxyXG4gIH0sXHJcbiAgaWNvbjoge1xyXG4gICAgZm9udFNpemU6IDIwLFxyXG4gIH0sXHJcbiAgaWNvblZhcmlhbnQ6IHtcclxuICAgIG9wYWNpdHk6IDAuOSxcclxuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gIH0sXHJcbiAgbWVzc2FnZToge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XHJcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xyXG4gIG1lc3NhZ2U/OiBzdHJpbmc7XHJcbiAgb25DbG9zZT86ICgpID0+IHZvaWQ7XHJcbiAgdmFyaWFudDoga2V5b2YgdHlwZW9mIHZhcmlhbnRJY29uO1xyXG59XHJcblxyXG5mdW5jdGlvbiBNeVNuYWNrYmFyQ29udGVudFdyYXBwZXIocHJvcHM6IFByb3BzKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlczEoKTtcclxuICBjb25zdCB7IGNsYXNzTmFtZSwgbWVzc2FnZSwgb25DbG9zZSwgdmFyaWFudCwgLi4ub3RoZXIgfSA9IHByb3BzO1xyXG4gIGNvbnN0IEljb24gPSB2YXJpYW50SWNvblt2YXJpYW50XTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTbmFja2JhckNvbnRlbnRcclxuICAgICAgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXNbdmFyaWFudF0sIGNsYXNzTmFtZSl9XHJcbiAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJjbGllbnQtc25hY2tiYXJcIlxyXG4gICAgICBtZXNzYWdlPXtcclxuICAgICAgICA8c3BhbiBpZD1cImNsaWVudC1zbmFja2JhclwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZXNzYWdlfT5cclxuICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLmljb24sIGNsYXNzZXMuaWNvblZhcmlhbnQpfSAvPlxyXG4gICAgICAgICAge21lc3NhZ2V9XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICB9XHJcbiAgICAgIGFjdGlvbj17W1xyXG4gICAgICAgIDxJY29uQnV0dG9uIGtleT1cImNsb3NlXCIgYXJpYS1sYWJlbD1cImNsb3NlXCIgY29sb3I9XCJpbmhlcml0XCIgb25DbGljaz17b25DbG9zZX0+XHJcbiAgICAgICAgICA8Q2xvc2VJY29uIGNsYXNzTmFtZT17Y2xhc3Nlcy5pY29ufSAvPlxyXG4gICAgICAgIDwvSWNvbkJ1dHRvbj4sXHJcbiAgICAgIF19XHJcbiAgICAgIHsuLi5vdGhlcn1cclxuICAgIC8+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgdXNlU3R5bGVzMiA9IG1ha2VTdHlsZXMoKHRoZW1lOiBUaGVtZSkgPT4gKHtcclxuICBtYXJnaW46IHtcclxuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5pbnRlcmZhY2UgU25hY2tQcm9wcyB7XHJcblx0b3BlbiA6IGJvb2xlYW47XHJcblx0dmFyaWVudDogXCJzdWNjZXNzXCIgfCBcImVycm9yXCIgfCBcIndhcm5pbmdcIiB8IFwiaW5mb1wiO1xyXG4gICAgbWVzc2FnZTogc3RyaW5nO1xyXG4gICAgb3BlbkhhbmRsZXI6ICgpID0+IHZvaWQ7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3VzdG9taXplZFNuYWNrYmFycyhwcm9wczogU25hY2tQcm9wcykge1xyXG5cdGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMyKCk7XHJcblx0bGV0IHZhbDogYm9vbGVhbiA9IHByb3BzLm9wZW47XHJcblx0bGV0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKHZhbCk7XHJcblx0Y29uc3QgaGFuZGxlQ2xvc2UgPSAoZXZlbnQ/OiBTeW50aGV0aWNFdmVudCwgcmVhc29uPzogc3RyaW5nKSA9PiB7XHJcblx0XHRpZiAocmVhc29uID09PSAnY2xpY2thd2F5Jykge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcbiAgICAgICAgcHJvcHMuc2V0XHJcblx0XHRzZXRPcGVuKGZhbHNlKTtcclxuXHR9O1xyXG4gIFxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2PlxyXG5cdFx0XHQ8U25hY2tiYXIgYW5jaG9yT3JpZ2luPXt7XHJcblx0XHRcdFx0XHR2ZXJ0aWNhbDogJ2JvdHRvbScsXHJcblx0XHRcdFx0XHRob3Jpem9udGFsOiAnbGVmdCcsXHJcblx0XHRcdFx0fX1cclxuXHRcdFx0XHRvcGVuPXtwcm9wcy5vcGVufVxyXG5cdFx0XHRcdGF1dG9IaWRlRHVyYXRpb249ezYwMDB9XHJcblx0XHRcdFx0b25DbG9zZT17aGFuZGxlQ2xvc2V9XHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8TXlTbmFja2JhckNvbnRlbnRXcmFwcGVyXHJcblx0XHRcdFx0XHRvbkNsb3NlPXtoYW5kbGVDbG9zZX1cclxuXHRcdFx0XHRcdHZhcmlhbnQ9e3Byb3BzLnZhcmllbnR9XHJcblx0XHRcdFx0XHRtZXNzYWdlPXtwcm9wcy5tZXNzYWdlfVxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc2VzLm1hcmdpbn1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQ8L1NuYWNrYmFyPlxyXG4gICBcclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9