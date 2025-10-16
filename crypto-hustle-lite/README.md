# Crypto Hustle

Crypto Hustle is a web application that displays real-time cryptocurrency data and news using the CryptoCompare API. Users can explore the top-performing coins, check live prices, search for specific cryptocurrencies, and stay informed with the latest market headlines, all within an intuitive, modern interface.

## Features

* **Live Crypto Prices**: View the top 10 cryptocurrencies with real-time USD price updates.
* **Dynamic Search Filter**: Instantly search and filter through the coin list.
* **Crypto News Feed**: Stay informed with a constantly updating feed of crypto headlines via the CryptoCompare News API.
* **Side Navigation Bar**: A fixed, scrollable sidebar featuring curated news cards in a clean layout.
* **Clean Card-Based UI**: Dark mode styling with rounded corners, soft shadows, and smooth hover effects for a sleek user experience.
* **Responsive Design** *(Stretch Feature)*: Adapts to smaller screens and mobile layouts for accessibility across devices.
* **Interactive Visual Feedback** *(Stretch Feature)*: Hover animations and glowing effects for enhanced user engagement.
* **Expanded Coin Data** *(Stretch Feature)*: Filters out coins with incomplete algorithm or proof type info for data relevance.

## Preview

<img src="./public/preview.gif" alt="Crypto Hustle Lite Preview" width="850"/>

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/ruhisawant/crypto-hustle.git
   cd crypto-hustle
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Create a `.env` file in the root directory and add your CryptoCompare API key:

   ```
   VITE_APP_API_KEY = "your_cryptocompare_key_here"
   ```

4. Start the development server:

   ```sh
   npm run dev
   ```

5. Open your browser and visit the local development URL (usually [http://localhost:5173](http://localhost:5173)).

## Technologies Used

* React
* Vite
* JavaScript (ES6+)
* CSS3 (Flexbox, custom dark theme)
* [CryptoCompare API](https://min-api.cryptocompare.com/)

## Project Structure

```
crypto-hustle/
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

## License

This project is open-source and available under the [MIT License](LICENSE).