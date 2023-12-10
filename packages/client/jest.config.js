module.exports = {
  transform: {
    // Running Jest with Next.js' SWC
    '^.+\\.(t|j)(s|sx)?$': [
      '@swc/jest',
      {
        jsc: {
          transform: {
            react: {
              runtime: 'automatic'
            }
          }
        }
      }
    ]
  },
  moduleFileExtensions: ['js', 'json', 'ts', 'jsx', 'tsx'],
  roots: ['__tests__'],
  prettierPath: null,
  collectCoverageFrom: ['src/**/*.(j|t)(s|sx)'],
  coverageDirectory: './coverage',
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    url: 'http://test-environment.test/'
  },
  moduleDirectories: ['node_modules', 'src', '@/theme', '@/components'],
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1',
    '^@/components/(.*)$': '<rootDir>/src/components/$1',
    '^@/theme/(.*)$': '<rootDir>/src/theme/$1',
    '^@/lib/(.*)$': '<rootDir>/src/lib/$1',
    '^@/api/(.*)$': '<rootDir>/src/app/api/$1',
    '^@monorepo/server$': '<rootDir>/../server/src/index.ts'
  },
  modulePaths: ['<rootDir>/src']
}
