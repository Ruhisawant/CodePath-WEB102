# Bet  
Bet is a Gen Z challenge forum application where users post dares, accept challenges, and increase the bet count to show participation.

## Features  
- Full CRUD functionality  
  - Create new challenges  
  - Read all posted challenges  
  - Update an existing challenge  
  - Delete challenges  
- Users can click a Bet button to increment the bet counter for each challenge  
- Real time data storage and retrieval using Supabase  

## Preview
<img src="./public/preview.gif" alt="Bet Preview" width="850"/>

## Technologies Used
* React
* JavaScript
* Supabase
* CSS

## Database Schema
Table Name: `Posts`
Columns:
* id (auto generated)
* created_at (timestamp)
* title (text)
* author (text)
* description (text)
* betCount (numeric default 0)