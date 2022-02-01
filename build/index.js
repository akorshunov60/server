"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = (0, tslib_1.__importDefault)(require("express"));
const loginRoutes_1 = require("./routes/loginRoutes");
const cookie_session_1 = (0, tslib_1.__importDefault)(require("cookie-session"));
const app = (0, express_1.default)();
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cookie_session_1.default)({ keys: ['qazwsx'] }));
app.use(loginRoutes_1.router);
app.listen(3000, () => {
    console.log('Listening on port 3000');
});
