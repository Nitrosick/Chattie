const path = require("path");

const resolvePath = (p) => path.resolve(__dirname, p);

module.exports = {
    webpack: {
        extensions: ['.ts', '.js', '.tsx', '.json', '.css', '.less'],
        alias: {
            "@api": resolvePath("./src/api"),
            "@app": resolvePath("./src/app"),
            "@assets": resolvePath("./src/assets"),
            "@components": resolvePath("./src/components"),
            "@pages": resolvePath("./src/pages"),
            "@redux": resolvePath("./src/redux"),
        }
    }
};
