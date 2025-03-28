EmployWise React Project

This is a React-based web application for EmployWise. It includes user authentication and various reusable components.

NOTE:Ceate the .env in root folder as REACT_APP_API_BASE_URL=https://reqres.in/api

## Tech Stack

- **React.js** - Frontend framework
- **SCSS** - Styling
- **Axios** - API requests
- **Formik & Yup** - Form handling and validation
- **React Router** - Client-side routing
- **Session Storage** - Authentication token management

## Dependencies

The following dependencies are required for this project:

| Package                                            | Version               | Purpose                        |
| -------------------------------------------------- | --------------------- | ------------------------------ |
| **React.js**                                       | `^19.0.0`             | Core library for building UI   |
| **React-DOM**                                      | `^19.0.0`             | React integration with the DOM |
| **React Router DOM**                               | `^7.4.0`              | Client-side routing            |
| **Axios**                                          | `^1.8.4`              | HTTP requests                  |
| **SCSS & Sass Loader**                             | `^1.86.0` & `^16.0.5` | Styling with SCSS              |
| **Formik**                                         | `^2.4.6`              | Form handling                  |
| **Yup**                                            | `^1.6.1`              | Schema validation              |
| **React-Paginate**                                 | `^8.3.0`              | Pagination component           |
| **Testing Library (Jest, DOM, React, User Event)** | Various versions      | Testing utilities              |
| **Web Vitals**                                     | `^2.1.4`              | Performance metrics            |

## Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** (LTS version recommended)
- **npm** or **yarn**

### Installation

Clone the repository:

```sh
git clone https://github.com/employwise/employwide-assignment.git
cd employwide-assignment
```

Install dependencies:

```sh
npm install
```

Create an `.env` file in the root directory and configure the necessary environment variables (e.g., API base URL):

```env
REACT_APP_API_BASE_URL=https://reqres.in/api
```

### Running the Application

To start the development server, run:

```sh
npm start
```

The app will be available at **http://localhost:3000**.

### Build for Production

To create a production-ready build:

```sh
npm run build
```

## Features

- **User Authentication** - Login system with session storage
- **Reusable Components** - Modular design with shared components
- **SCSS Styling** - Maintainable styles using SCSS
- **API Integration** - Uses Axios for HTTP requests
- **Form Validation** - Formik and Yup for handling forms

## Assumptions & Considerations

- The application follows a component-driven architecture for scalability.
- Styling is managed using SCSS with reusable variables and mixins.

## Contact

For any issues or improvements, feel free to reach out.

Developed for **EmployWise**.
