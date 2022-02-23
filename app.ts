import express from 'express';
require('dotenv').config();
const cors = require('cors');
const app = express();
app.use(express.json());
// app.use(
// 	cors({
// 		origin: 'https://aac-custom-testing.netlify.app/',
// 		methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
// 		preflightContinue: false,
// 		optionsSuccessStatus: 204,
// 	}),
// );
require('./src/routes/index')(app);
const PORT = process.env.PORT;
app.listen(PORT, async () => {
	console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});

export default app;