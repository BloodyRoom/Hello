# 🌍 Hello World Animation App

This React app automatically detects the user's IP address, fetches a localized greeting based on location, and beautifully displays it using an animated `SplitText` component.

## ⭐ Try
-   [hello-jhecfwtmb-bloodyrooms-projects.vercel.app](https://hello-jhecfwtmb-bloodyrooms-projects.vercel.app/)

## 🔧 Technologies

-   [React](https://reactjs.org/)
    
-   [Vite](https://vitejs.dev/)
    
-   [Axios](https://axios-http.com/)
    
-   [he](https://www.npmjs.com/package/he) — for decoding HTML entities
    
-   [SplitText](https://www.reactbits.dev/text-animations/split-text) - component for animation text
    

## 🚀 Features

-   Detects user's IP via `https://api.ipify.org`
    
-   Fetches a localized "hello" via `https://hellosalut.stefanbohacek.dev`
    
-   Decodes the greeting from HTML entities (if present)
    
-   Sets the greeting as the browser's page title
    
-   Displays the greeting with a smooth animation (fade and slide-in)
    

## 🖼️ Example

> If you're located in Ukraine, you'll see: **Привіт!**  
> In Italy — **Ciao!**, etc.  
> Each character or word appears individually with an entrance animation.


## 📝 Installation and Running

Follow these steps to run the project locally:

1. 🔄 **Clone or download** the project to your machine.

2. 🛀 **Navigate** into the project folder.

3. 🔢 **Install dependencies**:

   ```bash
   npm install
   ```

4. 🚀 **Start the development server**:

   ```bash
   npm run dev
   ```

5. 🌐 Open your browser and visit [http://localhost:5173](http://localhost:5173) to view the app.

## 🔧 Scripts

- `npm run dev` — Launches the development server
- `npm run build` — Creates an optimized production build
- `npm run preview` — Previews the production build locally

## 💡 Notes

- Make sure [Node.js](https://nodejs.org/) (version 16 or higher) is installed 🌱.
- The project uses the default **Vite** configuration, but you can customize `vite.config.js` if needed 📂.
