# Software Craftsmanship Notes 🛠️

> A comprehensive collection of notes, examples, and practical implementations covering fundamental software development principles and advanced practices.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/) [![Yarn](https://img.shields.io/badge/Yarn-2C8EBB?logo=yarn&logoColor=white)](https://yarnpkg.com/) [![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)](https://nodejs.org/) [![Docker](https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white)](https://www.docker.com/) [![Vitest](https://img.shields.io/badge/Vitest-6E9F18?logo=vitest&logoColor=white)](https://vitest.dev/) [![ESLint](https://img.shields.io/badge/ESLint-4B32C3?logo=eslint&logoColor=white)](https://eslint.org/) [![Prettier](https://img.shields.io/badge/Prettier-F7B93E?logo=prettier&logoColor=black)](https://prettier.io/) [![TDD](https://img.shields.io/badge/TDD-Test%20Driven%20Development-green)](https://en.wikipedia.org/wiki/Test-driven_development) [![Clean Architecture](https://img.shields.io/badge/Clean%20Architecture-Software%20Design-blue)](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)

## About This Repository

This repository contains my learning journey through advanced software development concepts, based on industry-standard books and practices. It serves as both personal notes and a resource for developers looking to improve their craft.

### Core Reading Materials

This collection is built upon these foundational books:

- 📖 **Test Driven Development** - *Kent Beck*
- 📖 **Clean Code** - *Robert C. Martin*
- 📖 **The Pragmatic Programmer** - *David Thomas & Andrew Hunt*
- 📖 **The Clean Coder** - *Robert C. Martin*
- 📖 **Clean Architecture** - *Robert C. Martin*

## Repository Structure

```
📁 modules/
├── 🔧 git-advanced/          # Advanced Git workflows and best practices
├── 📝 typescript-core/       # TypeScript fundamentals and advanced concepts
├── 🧪 tdd-service/          # Test-Driven Development with practical examples
├── ✨ clean-code-examples/   # Clean Code principles with before/after examples
├── 🏗️ clean-arch-demo/       # Clean Architecture implementation in TypeScript
└── 🐳 docker-examples/       # Optimized Dockerfiles and multi-stage builds

📁 docs/
├── 📄 tdd.md                # Test-Driven Development notes
├── 📄 clean-code.md         # Clean Code principles and practices
├── 📄 pragmatic-programmer.md # Pragmatic Programming concepts
├── 📄 clean-coder.md        # Professional development practices
└── 📄 clean-architecture.md # Architectural patterns and principles

📁 labs/
└── 📁 projects-examples/     # Complete project implementations
    ├── Clean Architecture example with TypeScript
    └── Automated scripts, aliases, and development tools
```

## 🎯 What You'll Find Here

### 🔧 **Git Advanced**
- Advanced workflows and branching strategies
- Git hooks and automation
- Best practices for team collaboration

### 📝 **TypeScript Core**  
- Advanced TypeScript patterns
- Type-safe development practices
- Utility types and practical examples

### 🧪 **Test-Driven Development**
- TDD cycles and methodologies
- Testing strategies and patterns  
- Practical API development with tests

### ✨ **Clean Code Examples**
- Before/after refactoring examples
- Code smell identification and solutions
- Naming conventions and best practices

### 🏗️ **Clean Architecture**
- Layered architecture implementation
- Dependency inversion examples
- Domain-driven design patterns

### 🐳 **Docker Examples**
- Multi-stage build optimizations
- Development and production configurations
- Container best practices

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone 
   cd software-craftsmanship-notes
   ```

2. **Install dependencies**
   ```bash
   yarn install
   ```

3. **Run examples**
   ```bash
   # Run TDD examples
   yarn test:tdd
   
   # Start clean architecture demo
   yarn start:clean-arch
   
   # Build Docker examples
   yarn docker:build
   
   # Run all workspaces
   yarn workspaces run test
   ```

## 📖 Documentation

Each module contains detailed documentation and examples:

- **Theoretical concepts** with practical applications
- **Code examples** with explanations
- **Step-by-step guides** for implementation
- **Best practices** and common pitfalls

## 🤝 Contributing

This is a personal learning repository, but contributions are welcome! If you find errors, have suggestions, or want to add examples:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

## 📈 Learning Path & Roadmap

### **Recommended Learning Order**

If you're new to these concepts, I recommend following this order:

1. **Git Advanced** - Master your tools first
2. **Clean Code** - Learn to write maintainable code
3. **The Pragmatic Programmer** - Develop professional practices
4. **Test-Driven Development** - Build confidence through testing
5. **Clean Architecture** - Design scalable systems
6. **The Clean Coder** - Become a software professional

### **Project Roadmap** 

#### **Phase 1: Foundation** ✅
- [x] Repository structure and documentation
- [ ] Basic setup with TypeScript + Yarn workspaces
- [ ] Contribution guidelines
- [ ] MIT License setup
- [ ] Basic CI/CD pipeline
- [ ] Code quality tools (ESLint, Prettier, Vitest)

#### **Phase 2: Core Modules** 🚧
- [ ] **Git Advanced**
  - [ ] Branching strategies and workflows
  - [ ] Advanced Git commands and aliases
  - [ ] Git hooks and automation
  - [ ] Conflict resolution strategies

- [ ] **Clean Code Examples**
  - [ ] Before/after refactoring examples
  - [ ] Naming conventions guide
  - [ ] Function and class design principles
  - [ ] Code smell identification

- [ ] **TypeScript Core**
  - [ ] Advanced type patterns
  - [ ] Utility types and generics
  - [ ] Design patterns implementation
  - [ ] Performance optimization

#### **Phase 3: Testing & TDD** 📋
- [ ] **TDD Service Module**
  - [ ] Red-Green-Refactor cycle examples
  - [ ] API development with TDD
  - [ ] Testing strategies and patterns
  - [ ] Mock and stub implementations

- [ ] **Testing Best Practices**
  - [ ] Unit testing patterns
  - [ ] Integration testing approaches
  - [ ] Test organization and structure
  - [ ] Coverage and quality metrics

#### **Phase 4: Architecture & Design** 🏗️
- [ ] **Clean Architecture Demo**
  - [ ] Layered architecture implementation
  - [ ] Dependency injection patterns
  - [ ] Domain-driven design examples
  - [ ] SOLID principles in practice

- [ ] **Real-world Projects**
  - [ ] Complete application examples
  - [ ] Microservices architecture
  - [ ] API design and documentation
  - [ ] Performance and scalability patterns

#### **Phase 5: DevOps & Deployment** 🚀
- [ ] **Docker Examples**
  - [ ] Multi-stage builds optimization
  - [ ] Development vs production configs
  - [ ] Container orchestration basics
  - [ ] Security best practices

- [ ] **CI/CD Pipeline**
  - [ ] Automated testing workflows
  - [ ] Code quality gates
  - [ ] Deployment strategies
  - [ ] Monitoring and logging

#### **Phase 6: Community & Documentation** 📚
- [ ] **Documentation Enhancement**
  - [ ] Interactive examples
  - [ ] Video tutorials integration
  - [ ] Community contributions
  - [ ] Multilingual support (ES/EN)

- [ ] **Community Building**
  - [ ] Issue templates
  - [ ] Discussion forums
  - [ ] Regular updates and releases
  - [ ] LinkedIn content sharing

### **Success Metrics**
- [ ] 100+ GitHub stars
- [ ] 10+ community contributors
- [ ] Complete documentation for all modules
- [ ] 90%+ test coverage
- [ ] Active LinkedIn engagement
- [ ] Featured in developer newsletters

### **Current Focus** 🎯
Currently working on: **Phase 1 - Foundation Setup**

*This roadmap is a living document and will be updated as the project evolves.*

## 🏆 Goals

- 📚 Document learning progress with practical examples
- 🎯 Create reusable code templates and patterns
- 🌟 Share knowledge with the developer community
- 🚀 Build a comprehensive reference for software craftsmanship

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Connect

- LinkedIn: [Thiago Delgado](https://www.linkedin.com/in/thiago-delgado-dev/)

---

> *"The only way to make the deadline—the only way to go fast—is to keep the code as clean as possible at all times."* - Robert C. Martin

**Happy coding!** 🎉