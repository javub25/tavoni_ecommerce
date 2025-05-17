/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  testEnvironment: "jsdom",
  transform: {
    "^.+\.tsx?$": ["ts-jest",{
      tsconfig: "tsconfig.app.json"
    }],   
  },
  moduleNameMapper: {
    // it allows Jest understand svg and css files during test
    "\\.(svg|css)$": "<rootDir>/src/__mocks__/fileMock.ts",
    // it allows Jest understand absolute paths during test
    '^@/(.*)$': '<rootDir>/src/$1'
  }
};