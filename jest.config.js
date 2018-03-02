// jest.config.js
module.exports = {
    verbose: true,
    moduleNameMapper: {
        '^.+\\.(sass)$': '<rootDir>/__mocks__/styleMock.js',
        '^.+\\.(mp3|png)$': '<rootDir>/__mocks__/fileMock.js',
    },
    modulePathIgnorePatterns: ["/node_modules/", "<rootDir>/\.cache/", "<rootDir>/public/"],

}