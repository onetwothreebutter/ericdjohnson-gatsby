// jest.config.js
module.exports = {
    verbose: true,
    moduleNameMapper: {
        '^.+\\.(sass)$': '<rootDir>/__mocks__/styleMock.js',
        '^.+\\.(mp3|pdf|svg)$': '<rootDir>/__mocks__/fileMock.js',
        '^.+\\.(webm|mp4|png|jpg)$': '<rootDir>/__mocks__/fileStringMock.js',
    },
    modulePathIgnorePatterns: ["/node_modules/", "<rootDir>/\.cache/", "<rootDir>/public/"],
    setupTestFrameworkScriptFile: "./src/setupTests.js"
}