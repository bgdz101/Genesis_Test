# Genesis
Software Engineering 



## Installation

Clone the repository:
git clone https://github.com/bgdz101/Genesis_Test.git
cd Genesis_Test
   
Install dependencies:

npm install

Set up the environment variables:

- `DATABASE_URL`: URL for your database connection (MongoDB) - [MongoDB](https://cloud.mongodb.com/)
- `SENDGRID_API_KEY`: API key for SendGrid email service - [SendGrid](https://app.sendgrid.com)
- `APIKEY`: API key for currency rates - [ExchangeRate-API](https://app.exchangerate-api.com/dashboard/)

Create a `.env` file in the root directory of your project and add the above variables with appropriate values.

### Example `.env` File

DATABASE_URL=mongodb://localhost:27017/mydatabase
SENDGRID_API_KEY=SG.XXXXXX.YYYYYY
APIKEY=your_exchange_rate_api_key


Start the application:

npm start
Open http://localhost:3000 with your browser to see the result.


