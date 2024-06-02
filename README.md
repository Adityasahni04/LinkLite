# Link-Lite

Link-Lite integrates URL shortener functionalities into a Discord bot. Users can import the bot and interact with it by typing commands.

## Features

- **User Input:** Users can enter a long URL to generate a short link.
- **Shortened Link:** Generates a short URL for accessing the original site.
- **Click Counter:** Tracks the number of times the shortened URL is clicked.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Discord.js

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Adityasahni04/LinkLite.git
2. Install dependencies:

   ```bash
   npm install
2. Set up environment variables (.env file):

   ```bash
   TOKEN=your_discord_bot_token
   MONGODB_URI=your_mongodb_connection_string
   BASE_URL=your_base_url_for_shortened_links

# API Endpoints

- `GET /:ShortId`: Redirects to the original URL using the shortened URL ID.

# BOT Commands
- `!createurl [your-long-url]`: Shortens the given URL.

   ![Screenshot 2024-06-02 235905](https://github.com/Adityasahni04/URL-Shortener/assets/165515938/aa86a668-cc80-4abd-992d-c229e51a4de1)

- `!createurl [your-long-url]:` Shortens the given URL.

   ![Screenshot 2024-06-02 235917](https://github.com/Adityasahni04/URL-Shortener/assets/165515938/9eef36fc-1850-47ab-8963-3163bc0dde17)


- `!ClickCounter [shortened-url]:` Displays the number of clicks on the shortened URL.

  
   ![Screenshot 2024-06-02 235926](https://github.com/Adityasahni04/URL-Shortener/assets/165515938/e16aabde-98d7-4ef6-ba6a-a990e0217603)
