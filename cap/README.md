# 📹 Cap!
**Cap** is a web app that captures high quality screenshots of websites using the ApiFlash API. Users can enter a site URL, adjust query parameters, and generate screenshots directly in the browser. This lab introduces external API calls, parameter handling, and dynamic state updates in a modern frontend workflow.

## 🚀 Features
- **Website Screenshot Capture**: Enter a URL and retrieve a live screenshot through the ApiFlash API
- **Custom Query Parameters**: Provide at least three configurable parameters, for example width, height, or full page
- **Screenshot Gallery**: Display previously generated screenshots on the same page
- **Async API Handling**: Make static and dynamic requests using async and await
- **State Management**: Save API results in state and render updates in real time
- **Query Limit Display**: Show whether the user has reached the ApiFlash quota by calling a usage endpoint

## 📸 Preview
<img src="./public/preview.gif" alt="Cap Preview" width="850"/>

## 🛠️ Technologies Used
- **JavaScript ES6+**: API calls, parameter handling, and state logic
- **React** *(if you used it for your implementation)*: UI rendering and component structure
- **Fetch API**: Communicating with ApiFlash endpoint
- **CSS**: Layout and styling
- **ApiFlash API**: Automated website screenshots

## 📁 Project Structure
```
cap/
├── src/
│   ├── components/
│   │   ├── APIForm.jsx
│   │   └── Gallery.jsx
│   ├── App.jsx
│   ├── App.css
│   └── index.css
├── .env
└── package.json
```