# 💰 Crypto Hustle Lite
**Crypto Hustle Lite** is a React application that displays real time cryptocurrency data such as price, market cap, and percent change. Users can browse a list of at least 30 coins, search by symbol, and explore key price data through an intuitive interface. This lab demonstrates API integration, state management, and conditional rendering in a modern web environment.

## 🚀 Features
- **30+ Cryptocurrencies Displayed**: View coin image, name, symbol, and live USD price sourced from an external crypto API.
- **Search by Symbol**: Filter the coin list instantly by typing a currency symbol in the search bar.
- **Market Data Preview**: Quick access to price, percent change, and other key information.
- **Responsive UI Styling**: Clean and simple layout formatted with custom CSS.
- **Asynchronous API Fetching**: Data loaded using `useEffect()` and async functions.
- **Loading and Fallback States**: Conditional rendering to handle loading and empty search results.
- **Crypto News Panel**: Optional side pane that displays real time crypto headlines.
- **News Cards**: Organized feed for browsing relevant cryptocurrency news articles.

## 📸 Preview
<img src="./public/preview.gif" alt="Crypto Hustle Lite Preview" width="850"/>

## 🛠️ Technologies Used
- **React**: Component-based UI and state management
- **JavaScript**: Core logic, API requests, and array methods for data handling
- **Vite**: Fast dev environment and project bundling
- **CSS**: Custom styling for layout, responsiveness, and visual polish
- **[CryptoCompare API](https://min-api.cryptocompare.com/)**: Real-time cryptocurrency and news data

## 📁 Project Structure
```
crypto-hustle-lite/
├── src/
│   ├── components/
│   │   ├── CoinInfo.jsx
│   │   ├── CryptoNews.jsx
│   │   └── SideNav.jsx
│   ├── App.jsx
│   ├── App.css
│   └── index.css
├── .env
└── package.json
```