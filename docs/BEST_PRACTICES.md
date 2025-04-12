# Klinikside Project Best Practices

## Directory Structure
```
klinikside/
├── app/                    # Next.js app directory (routes, layouts)
│   ├── (auth)/            # Authentication related routes
│   ├── (marketing)/       # Public marketing pages
│   └── (dashboard)/       # Protected dashboard pages
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── layout/           # Layout components (header, footer, etc.)
│   └── forms/            # Form-related components
├── lib/                   # Utility functions and shared logic
│   ├── utils/            # General utility functions
│   └── hooks/            # Custom React hooks
├── styles/               # Global styles and Tailwind config
├── public/               # Static assets
│   ├── images/          # Image assets
│   └── fonts/           # Font files
├── types/                # TypeScript type definitions
├── config/               # Configuration files
└── docs/                 # Documentation files
```

## Code Style Guidelines

### TypeScript
- Use TypeScript for all new files
- Define proper types/interfaces for all props and data structures
- Avoid using 'any' type
- Use type inference when the type is obvious

### Components
- Use functional components with hooks
- Keep components focused and single-responsibility
- Use proper TypeScript props interface definitions
- Implement proper error boundaries
- Use proper semantic HTML elements

### State Management
- Use React Context for global state when needed
- Prefer local state when possible
- Implement proper loading and error states

### Styling
- Use Tailwind CSS for styling
- Follow mobile-first approach
- Use CSS variables for theming
- Follow consistent spacing and sizing scales

### File Naming
- Use kebab-case for file names
- Use PascalCase for component names
- Use camelCase for utility functions
- Add proper file extensions (.tsx, .ts)

### Testing
- Write unit tests for utility functions
- Write integration tests for complex components
- Use proper test descriptions
- Follow arrange-act-assert pattern

### Git Practices
- Use meaningful commit messages
- Create feature branches for new features
- Use proper PR descriptions
- Keep PRs focused and manageable in size

### Performance
- Use proper image optimization
- Implement code splitting where needed
- Use proper caching strategies
- Monitor and optimize bundle size

### Accessibility
- Use proper ARIA attributes
- Ensure proper keyboard navigation
- Maintain proper color contrast
- Use semantic HTML elements

### Security
- Never expose sensitive data in client code
- Implement proper input validation
- Use proper authentication checks
- Follow security best practices

### Documentation
- Document complex logic
- Add JSDoc comments for functions
- Keep README up to date
- Document environment setup