# Project Overview
Github search react application using
- React v18
- Node v20
- React-redux
- redux-persist
- zod for env var verification.

## Table of Contents

- [Project Structure](#project-structure)
- [Components](#components)
- [Pages](#pages)
- [Redux](#redux)
- [Test Utils](#test-utils)
- [Types](#types)
- [How to Run](#how-to-run)
- [Technologies Used](#technologies-used)

## Project Structure

The project is organized as follows:
```
src/ 
│ ├── components/     # Reusable UI components 
│ │   ├── DataViewer/ # Showing the fetched data.
│ │   ├── DropDown/   # User select the search type.
│ │   ├── Header/     # Header of the project.
│ │   ├── InputField/ # Keyword input field.
│ │   ├── Pagination/ 
│ │   ├── Typography/ # Customized paragraph
│ │   └── index.ts    # Exporting components 
│ ├── pages/          # Application pages 
│ │   ├── _404/       # 404 Error page
│ │   ├── GithubSearch/
│ │   └── index.ts    # Page exports 
│ ├── redux/          # Redux setup 
│ │   ├── reducers/   # Reducers for state management 
│ │   └── store.ts    # Redux store configuration 
│ ├── test-utils/     # Utility files for testing 
│ │   └── index.tsx   # Test utility setup I didn't implement fe testing, which is not mentioned in requirements
│ ├── types/          # TypeScript types 
│ │   ├── RepoInfo.ts # Type for repository information 
│ │   ├── SearchOption.ts # Type for search options 
│ │   ├── UserInfo.ts # Type for user information 
│ │   └── index.ts    # Exporting types
```

## Components
- **DataViewer**: Displays data in a structured format.
- **DropDown**: Reusable dropdown component.
- **Header**: Header component for the app.
- **InputField**: Input component for user interactions.
- **Pagination**: Component for paginating data.
- **Typography**: Provides reusable typography elements.

## Pages
- **_404**: Handles rendering for 404 errors.
- **GithubSearch**: Page that allows searching GitHub repositories.

## Redux
- **Reducers**: Contains all the reducers for managing the app state.
- **Store**: Configures the Redux store to manage state globally.

## Test Utils
This folder contains utilities and helper functions for testing components and pages using Jest and React Testing Library. But I made this folder for further upgrade of this frontend.
For now, I didn't implement frontend testing, only in backend.

## Types
Contains TypeScript types used throughout the project, including:
- **RepoInfo.ts**: Defines the structure for repository-related data.
- **SearchOption.ts**: Defines types for search options.
- **UserInfo.ts**: Defines types for user-related information.

## How to Run
1. Clone the repository.
2. Install dependencies using `npm install` or `yarn`.
3. Start the development server with `npm start` or `yarn start`.
4. Run tests using `npm test` or `yarn test`.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **TypeScript**: Type-safe JavaScript.
- **Redux**: State management library.
- **Jest**: Testing framework.
- **React Testing Library**: For testing React components.

# Necessary Fields
### Two environment variables are needed, I will share them.
### Backend is running on PORT 8000, and this app will run on PORT 3000