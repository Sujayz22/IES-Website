# Immanuel English School of SDA

Welcome to the official website of Immanuel English School of SDA! This project is a comprehensive web application designed to provide information about our school, its history, services, and much more. Built with modern web technologies, this project aims to deliver a seamless and engaging user experience.

## Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Getting Started](#getting-started)
- [Running the Project](#running-the-project)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

## About the Project

Immanuel English School of SDA is dedicated to providing quality education and fostering a nurturing environment for students. Our website serves as a portal for parents, students, and staff to access important information and stay updated with the latest news and events.

## Features

- **Responsive Design**: Optimized for all devices, ensuring a great user experience on desktops, tablets, and mobile phones.
- **Dynamic Content**: Easily update and manage content through a user-friendly interface.
- **Interactive Components**: Engaging elements such as popovers, disclosures, and modals to enhance user interaction.
- **Secure and Scalable**: Built with security and scalability in mind, ensuring the safety of user data and the ability to handle high traffic.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- [Node.js](https://nodejs.org/en/download/) (v14 or higher)
- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/ies-sda.git
   cd ies-sda

2.Install dependencies:
  cd frontend
  npm install
  
<h4>Running the Project</h4>
Development:
To run the project in development mode with live reloading:

Start the Docker containers:
  docker-compose up
Open your browser and navigate to http://localhost:3000.

Production
To build and run the project in production mode:

Build the Docker containers: docker-compose -f docker-compose.prod.yml up --build

Open your browser and navigate to your server's IP address or domain.

Environment Variables
Ensure you have a .env file in the root directory with the following variables:
POSTGRES_USER=your_postgres_user
POSTGRES_PASSWORD=your_postgres_password
POSTGRES_DB=your_postgres_db
KAFKA_BROKER=your_kafka_broker

Contributing
Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

Fork the Project
Create your Feature Branch (git checkout -b feature/AmazingFeature)
Commit your Changes (git commit -m 'Add some AmazingFeature')
Push to the Branch (git push origin feature/AmazingFeature)
Open a Pull Request
License
Distributed under the MIT License. See LICENSE for more information.

Thank you for visiting the Immanuel English School of SDA project! We hope you find everything you need and enjoy exploring our website.
