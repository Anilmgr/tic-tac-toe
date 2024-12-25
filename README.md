# Tic-Tac-Toe Game

A simple and interactive Tic-Tac-Toe game built using **React** and **Vite**. This project demonstrates a modern frontend setup and serves as a great starting point for learning React with Vite.

## Features

- Classic Tic-Tac-Toe game for two players.
- Interactive and responsive design.
- Highlights the winning combination.
- Built with React functional components and hooks.
- Fast development and build process with Vite.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- npm (comes with Node.js) or [Yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/tic-tac-toe.git
   cd tic-tac-toe
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

   The app will be running at `http://localhost:5173` by default.

### Building for Production

To create a production-ready build:

```bash
npm run build
# or
yarn build
```

The build output will be in the `dist` folder.

### Running the Preview Build

To preview the production build:

```bash
npm run preview
# or
yarn preview
```

## Project Structure

```
├── public          # Static assets
├── src
│   ├── components  # React components
│   ├── styles      # CSS/SCSS files
│   ├── App.jsx     # Main App component
│   └── main.jsx    # Entry point
├── .gitignore      # Ignored files and directories
├── index.html      # HTML template
├── package.json    # Project metadata and scripts
└── vite.config.js  # Vite configuration
```

## How to Play

1. The game is played on a 3x3 grid.
2. Players take turns marking a square with `X` or `O`.
3. The first player to get three of their marks in a row (horizontally, vertically, or diagonally) wins.
4. If all squares are filled and no player has won, the game ends in a draw.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast frontend build tool.
- **CSS/SCSS**: For styling.

## Contributing

Contributions are welcome! Feel free to submit a pull request or open an issue.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Enjoy playing Tic-Tac-Toe! 😊
