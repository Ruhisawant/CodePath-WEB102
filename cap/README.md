# Cap!
Cap! is a web application that uses the ApiFlash API to take screenshots of websites with customizable parameters. Users can adjust various screenshot attributes, view their created images, and maintain a gallery of all their captured screenshots.

## Features
- **Customizable Screenshots**: Add multiple parameters to customize your website screenshots including format, dimensions, and ad/cookie banner removal.
- **Real-time Query Preview**: See your API query string update in real-time as you adjust parameters.
- **Screenshot Gallery**: View all previously captured screenshots in an organized gallery.
- **Query Quota Tracker**: Monitor your remaining API calls to stay within your monthly limit.

## Preview
<img src="./public/preview.gif" alt="Cap Preview" width="850"/>

## Installation
1. Clone the repository:
	```sh
	git clone https://github.com/ruhisawant/cap.git
	cd cap
	```

2. Install dependencies:
	```sh
	npm install
	```

3. Create a `.env` file in the root directory and add your ApiFlash access key:
	```
	VITE_APP_ACCESS_KEY = "your_apiflash_key_here"
	```

4. Start the development server:
	```sh
	npm run dev
	```

## Technologies Used
- React
- Vite
- ApiFlash API
- JavaScript (ES6+)
- CSS (with Flexbox)

## Project Structure
```
cap/
├── src/
│   ├── Components/
│   │   ├── APIForm.jsx
│   │   └── Gallery.jsx
│   ├── App.jsx
│   ├── App.css
│   └── index.css
├── .env
└── package.json
```

## License
This project is open-source and available under the [MIT License](LICENSE).