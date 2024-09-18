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
`src/ │ ├── components/ # Reusable UI components │ ├── DataViewer/ │ ├── DropDown/ │ ├── Header/ │ ├── InputField/ │ ├── Pagination/ │ ├── Typography/ │ └── index.ts # Exporting components │ ├── pages/ # Application pages │ ├── _404/ │ ├── GithubSearch/ │ └── index.ts # Page exports │ ├── redux/ # Redux setup │ ├── reducers/ # Reducers for state management │ └── store.ts # Redux store configuration │ ├── test-utils/ # Utility files for testing │ └── index.tsx # Test utility setup │ ├── types/ # TypeScript types │ ├── RepoInfo.ts # Type for repository information │ ├── SearchOption.ts # Type for search options │ ├── UserInfo.ts # Type for user information │ └── index.ts # Exporting types`

# Necessary Fields
### Two environment variables are needed, I will share them.
### Backend is running on PORT 8000, and this app will run on PORT 3000