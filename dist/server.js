"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./config/app");
const enviroment_1 = require("./enviroment");
const PORT = enviroment_1.default.getPort();
app_1.default.listen(PORT, () => {
    console.log('Express server listening on port ' + PORT);
});
