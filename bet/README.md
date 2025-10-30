# ⚡ Bet
**Bet** is a React and Supabase powered challenge forum built for bold users who want to post and accept daring tasks. Users can create challenges, browse community submissions, edit or delete their own entries, and accept a challenge by clicking the Bet button. This lab demonstrates full CRUD operations with a hosted database backend.

## 🚀 Features
- **CRUD Functionality**: Create, read, update, and delete challenges
- **Live Challenge Feed**: All submitted challenges visible on the homepage
- **Create Form**: Submit new challenges directly into the database
- **Editable Challenges**: Update challenge details after posting
- **Deletable Entries**: Remove challenges once submitted
- **Interactive Bet Button** *(stretch)*: Accept a challenge and increment bet count stored in the database
- **User Bet Count Display** *(stretch)*: View how many users have accepted each challenge

## 📸 Preview
<img src="./public/preview.gif" alt="Bet Preview" width="850"/>

## 🛠️ Technologies Used
- **React**: Interface and state management
- **JavaScript ES6+**: API interactions and UI logic
- **Supabase**: Database, auth, and CRUD API
- **Supabase JavaScript Client**: Queries and updates
- **CSS**: Layout and styling

## 📁 Project Structure
```
bet/
├── src/
│   ├── components/
│   │   ├── Card.jsx
│   │   ├── ChallengeList.jsx
│   │   └── ChallengeItem.jsx
│   ├── pages/
│   │   ├── CreatePost.jsx
│   │   ├── EditPost.jsx
│   │   └── ReadPosts.jsx
│   ├── client.js
│   ├── App.jsx
│   ├── App.css
│   └── index.css
├── .env
└── package.json
```