import React, { useEffect } from 'react';

const WebSocketComponent = () => {
    useEffect(() => {
        const ws = new WebSocket('ws://localhost:8090');

        ws.onopen = () => {
            console.log('Connected to WebSocket server');
        };

        ws.onmessage = (event) => {
            const notification = JSON.parse(event.data);
            alert(notification.message); // Display notification to the manager
        };

        return () => ws.close(); // Clean up on unmount
    }, []);

    return <div></div>;
};

export default WebSocketComponent;
