# QR Code Generator

## Project overview

A beginner-friendly React app for creating a QR code from text, a website address, a phone number, or an email address. Preview the QR code and save it as a PNG image.

## Features

- Create QR codes for text, URLs, phone numbers, and email addresses
- Preview the generated code before downloading
- Download the QR code as a PNG image
- Clear the current input and generated code
- Disable generation when the input is empty
- Show a simple validation message for missing content
- Responsive layout for desktop and mobile screens

## Technologies used

- React.js
- Vite
- JavaScript and JSX
- `qrcode.react`
- CSS

## React concepts used

- Functional components
- Reusable components and props
- `useState` for form and preview state
- `useRef` to access the generated canvas for PNG downloads
- Event handlers and conditional rendering

## Installation steps

1. Install [Node.js](https://nodejs.org/) and npm.
2. Clone or download this project and open its folder in a terminal.
3. Install dependencies:

   ```bash
   npm install
   ```

## How to run

Start the local development server:

```bash
npm run dev
```

Open the local URL shown in the terminal, usually `http://localhost:5173`.

To create a production build, run:

```bash
npm run build
```

## Project folder structure

```text
.
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── src/
    ├── App.jsx
    ├── App.css
    ├── main.jsx
    └── components/
        ├── DownloadButton.jsx
        ├── QRInput.jsx
        └── QRPreview.jsx
```
