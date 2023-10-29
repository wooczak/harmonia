module.exports = {
  transform: {
    // Running Jest with Next.js' SWC
    "^.+\\.(t|j)(s|sx)?$": [
      "@swc/jest", 
      { jsc: {
        transform: {
          react: {
            runtime: 'automatic',
          },
        },
      },
    },
  ]
  },
    moduleFileExtensions: ['js', 'json', 'ts', 'jsx', 'tsx'],
    roots: ['__tests__'],
    collectCoverageFrom: ['src/**/*.(j|t)(s|sx)'],
    coverageDirectory: './coverage',
    testEnvironment: 'jsdom',  
    testEnvironmentOptions: {
      url: 'http://test-environment.test/',
    },
    moduleDirectories: ['node_modules', 'src'],
    moduleNameMapper: {
      "^src/(.*)$": "<rootDir>/src/$1"
    },
    modulePaths: ["<rootDir>/src"]
};