# KTE: Koa Tailwind EJS Micro-Framework

KTE is a simple yet powerful micro-framework for building web applications using Koa.js, Tailwind CSS, and EJS. It provides a structure for organizing your routes and views, and includes basic features such as serving static files and dynamic routing.

## Features

- **Koa.js**: A lightweight and efficient Node.js web framework for building web applications and APIs.
- **Tailwind CSS**: A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.
- **EJS**: A simple templating language that lets you generate HTML markup with plain JavaScript.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have Node.js and npm installed on your machine. If you don't have these installed, you can download and install them from [here](https://nodejs.org/en/download/).

### Installation

1. Clone the repository to your local machine:

```bash
git clone https://github.com/AinzOwl/kte
```

2. Navigate into the project directory:

```bash
cd kte
```

3. Install the required dependencies:

```bash
npm install
```

4. Start the server:

```bash
npm start
```

The server will start running on port 1982. You can access it at `http://localhost:1982`.

## Usage

The application serves static files from the `public` directory and uses Tailwind CSS for styling.

It dynamically creates routes based on the structure of the `src/routes` directory. Each subdirectory in `src/routes` becomes a route, and the `view.ejs` file within each subdirectory is used as the view for that route.

For example, if you have a subdirectory `src/routes/about`, the application will create a route `/about` that renders the `view.ejs` file within the `about` directory.

Additionally, the application supports dynamic routes with parameters. If a file within a subdirectory starts with `[` and ends with `].ejs`, it is treated as a dynamic route. The part of the filename within the brackets becomes the parameter name.

For example, if you have a file `src/routes/about/[id].ejs`, the application will create a route `/about/:id` that renders the `[id].ejs` file and passes the `id` parameter to the view.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
