# 💰 Crypto Hustle Pro
**Crypto Hustle Pro** expands on the Crypto Hustle Lite application by adding detailed cryptocurrency views, dynamic routing, and richer data from the CryptoCompare API. Users can click on any coin to load a dedicated details page that includes description data, algorithm information, and price history. This lab demonstrates advanced API usage, React Router configuration, and interactive data visualizations.

## 🚀 Features
- **Clickable Coin List**: Select any cryptocurrency to view detailed information
- **Dynamic Routing**: Each coin has its own unique URL powered by React Router params
- **Detail View**: Displays description, algorithm type, and historical info for each coin
- **404 Handling**: Graceful fallback for invalid symbol paths
- **Persistent Navigation**: Home and detail views connected seamlessly
- **Extended Crypto Data**: Additional fields retrieved from CryptoCompare’s detailed endpoints
- **Interactive Price Chart**: Visualize price changes over time using Recharts
- **News Integration**: Display articles related to the selected coin

## 📸 Preview
<img src="./public/preview.gif" alt="Crypto Hustle Pro Preview" width="850"/>

## 🛠️ Technologies Used
- **React**: Component architecture and state logic
- **React Router**: Dynamic routes, nested routes, and navigation links
- **JavaScript ES6+**: Async API calls and data parsing
- **Vite**: Development and build tooling
- **CSS**: Custom styles and responsive formatting
- **[CryptoCompare API](https://min-api.cryptocompare.com/)**: Coin metadata and historical price data
- **Recharts**: Data visualization for price charts

## 📁 Project Structure
```
crypto-hustle-pro/
├── src/
│   ├── components/
│   │   ├── CoinInfo.jsx
│   │   ├── CoinDetail.jsx
│   │   └── CoinChart.jsx
│   ├── routes/
│   │   └── NotFound.jsx
│   │   └── DetailView.jsx
│   ├── App.jsx
│   ├── App.css
│   └── index.css
├── .env
└── package.json
```