# 🧠 Flashcard Genius

**Flashcard Genius** is an AI-powered flashcard generator that helps you master any topic through concise, relevant Q&A pairs. Just enter a topic, and the app instantly creates 10 high-quality flashcards for efficient study and revision.

Built with **Next.js**, **Tailwind CSS**, and powered by the **Gemini API**, the app is optimized for simplicity, speed, and modern learning.

---

## 🚀 Features

- 🔮 **AI Flashcard Generation** – Automatically generates 10 flashcards for any topic using Gemini API  
- 🃏 **Interactive UI** – Flip animations and easy navigation between flashcards  
- 📱 **Responsive Design** – Fully functional on desktop and mobile devices  
- 💨 **Fast Performance** – Lightweight and efficient frontend stack  
- 🎓 **Ideal for Learners** – Great tool for studying, prepping for exams, or quick revision  

---


---

## 🛠️ Tech Stack

- **Frontend**: Next.js, React  
- **Styling**: Tailwind CSS  
- **AI Integration**: Gemini API (Google AI Studio)

---

## 📦 Getting Started

### 1. Clone the Repository

Clone the project to your local environment:

`git clone https://github.com/your-username/flashcard-genius.git`  
`cd flashcard-genius`

### 2. Install Dependencies

Install the required packages:

`npm install`

### 3. Set Up Environment Variables

Create a `.env` file in the root directory and add your Gemini API key:

`GEMINI_API_KEY=your_gemini_api_key_here`

> You can get your API key from [Google AI Studio](https://ai.google.dev/)

### 4. Run the Development Server

Start the development server:

`npm run dev`

The app will be available at: `http://localhost:3000`

---

## 🧠 How It Works

1. User enters a topic (e.g., "Photosynthesis" or "JavaScript Promises")  
2. The app sends a prompt to the Gemini API requesting 10 question-answer pairs  
3. Gemini returns structured content  
4. The flashcards are displayed with flip effects and next/previous navigation  

---

## 🌐 Environment Variables

| Key                        | Description                                 |
|----------------------------|---------------------------------------------|
| `GEMINI_API_KEY` | Your Gemini API key from Google AI Studio   |

---

## 📁 Project Structure

.
├── components/ # Reusable components (Card, FlipCard, etc.)
├── pages/ # Next.js page routes
│ └── index.tsx # Main app logic and UI
├── public/ # Static assets (icons, etc.)
├── styles/ # Tailwind CSS setup (globals)
├── utils/ # API call and data parsing logic
├── .env.local # Local environment variables
└── README.md # Project documentation

yaml
Always show details

Copy

---

## 💡 Future Improvements

- 📝 Save flashcards to local storage or a backend database  
- 🧠 Add quiz mode for self-testing  
- 🔊 Enable text-to-speech support  
- 📲 Add PWA support for offline access  

---

## 🙋‍♂️ Contributing

Contributions are welcome! Follow these steps:

1. Fork the repository  
2. Create a new feature branch: `git checkout -b feature/YourFeature`  
3. Commit your changes: `git commit -m "Add YourFeature"`  
4. Push to your branch: `git push origin feature/YourFeature`  
5. Open a pull request 🚀  

---

## 📄 License

This project is licensed under the **MIT License**

---

## 👤 Author

**Rupesh Kumar Singh**

- GitHub: [@rupeshksingh](https://github.com/whyrupesh)  
- Twitter: [@rupeshksingh](https://twitter.com/whyrupesh)  
- Portfolio: [rupeshsingh.com](https://rupeshsingh.com)

---

## 🧠 Powered By

- [Google Gemini API](https://ai.google.dev)  
- [Tailwind CSS](https://tailwindcss.com)  
- [Next.js](https://nextjs.org)
