// Importing Dependencies

import bodyParser from "body-parser";   // Middleware to parse incoming JSON and URL-encoded request bodies 
import cors from "cors";               // allow requests from other origins
import express from "express";        // building the server and managing routes.
import http from "http";                // Used to create an HTTP server
import { Server } from "socket.io";     

import { adminRouter } from "./Routes/AdminRoute.js";
import { driverRouter } from "./Routes/DriverRoute.js";
import { employeeRouter } from "./Routes/EmployeeRoute.js";
import { leaveRouter } from "./Routes/leaveRoute.js";
import { loginRouter } from "./Routes/loginRoute.js";
import { requestMaterialRouter } from "./Routes/requestMaterialRoute.js";
import { salaryRouter } from "./Routes/SalaryRoute.js";
import { sManagerRouter } from './Routes/StoreManagerRoute.js';
import { orderRouter } from './Routes/OrderRoute.js';
import { resetPasswordRouter } from './Routes/ResetPassword.js';
import { settingRouter } from "./Routes/SettingRoute.js";
import './WebSocket/WebSocket.js';


// Server and Middleware Initialization
const app = express();
const PORT = process.env.PORT || 5000;
const server = http.createServer(app);
const io = new Server(server, {          // Initializes a Socket.IO server with CORS configuration to allow communication with the frontend
    cors: {
        origin: 'http://localhost:3000', 
        methods: ['GET', 'POST']
    }
});


//Middleware Configuration
app.use(express.json());    // Parses incoming JSON requests.
app.use(bodyParser.json());    // Parses JSON bodies (additional).
app.use(bodyParser.urlencoded({ extended: true }));   // Parses URL-encoded data (extended: true supports complex objects).
app.use(cors({                                         //Enables requests from the specified origin
    origin: ["http://localhost:3000"],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
}));

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Attach routers
app.use('/leave', leaveRouter(io)); 
app.use('/admin', adminRouter(io)); 
app.use('/employee', employeeRouter(io)); 
app.use('/driver', driverRouter(io)); 
app.use('/login', loginRouter(io));
app.use('/material', requestMaterialRouter(io));
app.use('/Images',express.static('Public/Images'));
app.use('/salary', salaryRouter(io));
app.use('/storemanager', sManagerRouter(io));
app.use('/order', orderRouter(io));
app.use('/setting', settingRouter(io));
app.use('/resetPassword', resetPasswordRouter(io));

// Handle Socket.IO connections
let connectedClients = [];
io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);
    connectedClients.push(socket);

    socket.on('disconnect', () => {
        console.log('A user disconnected:', socket.id);
        connectedClients = connectedClients.filter(client => client.id !== socket.id);
    });
});

// Start the server
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export { io };

