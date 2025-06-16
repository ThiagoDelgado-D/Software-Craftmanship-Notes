# Contributing to Software Craftsmanship Notes 

Thank you for your interest in contributing to this repository! This project aims to be a comprehensive resource for software craftsmanship principles, and your contributions help make it better for everyone.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Types of Contributions](#types-of-contributions)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Contribution Guidelines](#contribution-guidelines)
- [Pull Request Process](#pull-request-process)
- [Style Guidelines](#style-guidelines)
- [Documentation Standards](#documentation-standards)

## Code of Conduct

This project follows a Code of Conduct to ensure a welcoming environment for all contributors. By participating, you agree to:

- Be respectful and inclusive
- Focus on constructive feedback
- Help maintain a learning-friendly environment
- Respect different levels of experience and perspectives

## Types of Contributions

We welcome various types of contributions:

### **Content Contributions**
- New examples or case studies
- Additional explanations for existing concepts
- Real-world implementation scenarios
- Book summary improvements

### **Bug Fixes**
- Typos and grammatical errors
- Code examples that don't work
- Broken links or references
- Documentation inconsistencies

### **Feature Enhancements**
- New modules or topics
- Additional testing scenarios
- Tool configurations and setups
- Performance improvements

### **Infrastructure**
- CI/CD improvements
- Docker optimizations
- Development tool configurations
- Build process enhancements

## Getting Started

1. **Fork the repository** to your GitHub account
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/yourusername/software-craftsmanship-notes.git
   cd software-craftsmanship-notes
   ```
3. **Add the upstream remote**:
   ```bash
   git remote add upstream https://github.com/originalusername/software-craftsmanship-notes.git
   ```

## Development Setup

### Prerequisites
- Node.js (v18 or higher)
- Yarn (v3 or higher)
- Docker (for containerized examples)
- Git

### Installation
```bash
# Install dependencies
yarn install

# Run tests
yarn test

# Run tests in watch mode
yarn test:watch

# Run tests with coverage
yarn test:coverage

# Check code quality
yarn lint
yarn format:check

# Build all workspaces
yarn workspaces run build
```

### Workspace Structure
This project uses Yarn Workspaces for monorepo management:

```
packages/
├── modules/
│   ├── git-advanced/
│   ├── typescript-core/
│   ├── tdd-service/
│   └── ...
└── docs/
    └── ...
```

## Contribution Guidelines

### Before You Start
1. **Check existing issues** to see if your contribution is already being worked on
2. **Create an issue** for significant changes to discuss the approach
3. **Keep contributions focused** - one feature/fix per pull request

### Making Changes

1. **Create a feature branch**:
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-fix-name
   ```

2. **Follow the project structure**:
   - Add code examples to appropriate `modules/` directories
   - Update documentation in `docs/` when adding new concepts
   - Include tests for any new functionality

3. **Commit your changes**:
   ```bash
   git add .
   git commit -m "feat: add TDD example for API endpoints"
   # or
   git commit -m "fix: correct TypeScript interface definition"
   ```

## Pull Request Process

1. **Update your branch** with the latest changes:
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

2. **Run quality checks**:
   ```bash
   yarn lint
   yarn test
   yarn test:coverage
   yarn format
   ```

3. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```

4. **Create a Pull Request** with:
   - Clear title describing the change
   - Detailed description of what was added/changed
   - Reference to related issues (if any)
   - Screenshots or examples (if applicable)

### PR Review Process
- Maintainers will review your PR within 2-3 business days
- Address any requested changes
- Once approved, your PR will be merged

## Style Guidelines

### Code Style
- **TypeScript**: Follow strict TypeScript guidelines
- **Formatting**: Use Prettier for consistent formatting
- **Linting**: Adhere to ESLint rules
- **Naming**: Use descriptive names for variables, functions, and classes

### Example Code Structure
```typescript
// ✅ Good
interface UserRepository {
  findById(id: string): Promise<User | null>;
  save(user: User): Promise<void>;
}

class InMemoryUserRepository implements UserRepository {
  // Implementation...
}

// ❌ Avoid
interface Repo {
  get(id: any): any;
}
```

### Testing Guidelines
- Write tests for all new functionality
- Follow the AAA pattern (Arrange, Act, Assert)
- Use descriptive test names
- Include both positive and negative test cases
- Leverage Vitest's fast execution and hot module replacement

```typescript
import { describe, test, expect, beforeEach } from 'vitest'

describe('UserService', () => {
  let userService: UserService

  beforeEach(() => {
    userService = new UserService()
  })

  test('should create a new user when valid data is provided', () => {
    // Arrange
    const userData = { name: 'John', email: 'john@example.com' }
    
    // Act
    const result = userService.createUser(userData)
    
    // Assert
    expect(result).toBeDefined()
    expect(result.name).toBe('John')
  })

  test('should throw error when invalid email is provided', () => {
    // Arrange
    const userData = { name: 'John', email: 'invalid-email' }
    
    // Act & Assert
    expect(() => userService.createUser(userData)).toThrow('Invalid email format')
  })
})
```

## Documentation Standards

### Markdown Guidelines
- Use clear, concise language
- Include code examples for concepts
- Add table of contents for long documents
- Use proper heading hierarchy (H1 → H2 → H3)

### Code Comments
- Explain **why**, not **what**
- Use JSDoc for TypeScript functions
- Include usage examples in comments

```typescript
/**
 * Validates user input according to business rules
 * 
 * @param user - User data to validate
 * @returns ValidationResult with success/failure status
 * 
 * @example
 * ```typescript
 * const result = validateUser({ name: 'John', email: 'john@email.com' });
 * if (result.isValid) {
 *   // Process user...
 * }
 * ```
 */
function validateUser(user: UserInput): ValidationResult {
  // Implementation...
}
```

### README Updates
- Update relevant sections when adding new modules
- Include examples of new functionality
- Update the learning path if necessary

## Commit Message Format

Use conventional commits for clear history:

```
type(scope): description

feat(tdd): add API testing examples with Jest
fix(clean-code): correct function naming in examples  
docs(readme): update installation instructions
test(typescript): add unit tests for utility functions
refactor(architecture): improve dependency injection setup
```

**Types**: `feat`, `fix`, `docs`, `test`, `refactor`, `style`, `chore`

## Getting Help

If you need help with contributing:

1. **Check existing documentation** in the `docs/` folder
2. **Look at existing examples** in the `modules/` directory
3. **Create an issue** with the `question` label
4. **Join discussions** in existing issues and PRs

## Recognition

All contributors will be:
- Listed in the project's contributors section
- Mentioned in release notes for significant contributions
- Credited in relevant documentation they helped create

## Contact

For questions about contributing:
- Open an issue with the `question` label
- Reach out on LinkedIn: [Thiago Delgado](https://www.linkedin.com/in/thiago-delgado-dev/)

---

Thank you for helping make this a valuable resource for the software development community! 🎉