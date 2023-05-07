# League of Legends AI Match Analyzer

This project is an AI-powered match analysis tool for League of Legends (LoL) players, leveraging Node.js and TypeScript, along with Fastify and Langchain. It provides detailed insights into player performance and helps identify areas of improvement to take your gameplay to the next level.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- AI-driven match analysis
- Real-time statistics and performance evaluation
- Personalized recommendations for gameplay improvement
- RESTful API built with Fastify for easy integration with other services
- Langchain for natural language processing (NLP)

## Installation

1. Clone this repository:

```
git clone https://github.com/thunderjr/league-match-ai-analyzer.git
```

2. Install the required dependencies:

```
cd league-of-legends-ai-match-analyzer
yarn
```

3. Set up your environment variables by creating a `.env` file in the project root, and fill in the required information:

```
PORT=<port_number>
RIOT_TOKEN=<your_riot_games_api_key>
OPENAI_API_KEY=<your_open_ai_api_key>
```

5. Start the application:

```
yarn dev
```

The watching server should now be running at `http://localhost:<port_number>`.

## Usage

### API Endpoints

- **GET** `/match/ai/:matchId`: Retrieve AI analysis for a specific match by its match ID.

- **GET** `/summoner/:summonerName`: Retrieve the original summoner response from the League API.
- **GET** `/match/:matchId`: Retrieve the original match response from the League API.

**TODO**

- **GET** `/summoner/ai/:summonerName`: Get performance statistics for a specific summoner by their summoner name.

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feat/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feat/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
