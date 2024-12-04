import React, { useState, useEffect } from 'react';
import { Card, CardContent, Button, Box, Typography, Container, Grid, Snackbar, IconButton, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';
import Navbar from '../../../Components/Navbar'; // Import the Navbar component
import './index.css';
import axios from 'axios';

const StoreManager = () => {
  const [cardsData, setCardsData] = useState([]); // State to hold fetched data
  const [dialogOpen, setDialogOpen] = useState(false); // State for confirmation dialog
  const [selectedCard, setSelectedCard] = useState(null); // Store selected card data
  const [selectedStatus, setSelectedStatus] = useState(''); // Store selected status (Accept/Reject)
  const [snackbarOpen, setSnackbarOpen] = useState(false); // Snackbar state
  const [snackbarMessage, setSnackbarMessage] = useState(''); // Snackbar message

  // Fetch data from the backend when the component loads
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/storemanager/newRequest'); // Replace with your API endpoint
        setCardsData(response.data);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    fetchData();
  }, []);

  const handleOpenDialog = (card, status) => {
    setSelectedCard(card);
    setSelectedStatus(status);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setSelectedCard(null);
    setSelectedStatus('');
  };

  const handleUpdateStatus = async () => {
    if (!selectedCard) return;
    try {
      const response = await axios.put(`http://localhost:5000/storemanager/updateStatus/${selectedCard.id}`, { status: selectedStatus });
      // Show snackbar for success
      setSnackbarMessage('Status updated successfully and notification sent.');
      setSnackbarOpen(true);

      // Remove the card from the dashboard
      setCardsData((prevData) => prevData.filter((card) => card.id !== selectedCard.id));

      handleCloseDialog();
    } catch (error) {
      console.error('Error updating status:', error);
      setSnackbarMessage('Failed to update status.');
      setSnackbarOpen(true);
    }
  };

  const handleAcceptClick = (card) => {
    setSelectedCard(card);
    setSelectedStatus('Accepted');
    setDialogOpen(true); // Open dialog for acceptance
  };

  const handleRejectClick = (card) => {
    setSelectedCard(card);
    setSelectedStatus('Rejected');
    setDialogOpen(true); // Open dialog for rejection
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

  return (
    <div className="store-manager-container">
      <Navbar />
      <Container className="content-container">
        <Grid container spacing={3}>
          {cardsData.map((card, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card className="info-card">
                <CardContent>
                <Typography variant="h6"><b>Employee Reg Number:</b> {card.regNumber}</Typography>
                  <Typography variant="h6"><b>Driver ID:</b> {card.driverId}</Typography>
                  <Typography variant="h6"><b>Raw Material:</b> {card.rawMaterial}</Typography>
                  <Box mt={2} display="flex" justifyContent="space-between">
                    <Button variant="contained" color="primary" onClick={() => handleAcceptClick(card)}>Accept</Button>
                    <Button variant="contained" color="secondary" onClick={() => handleRejectClick(card)}>Reject</Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Confirmation Dialog */}
      <Dialog open={dialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>{selectedStatus === 'Accepted' ? 'Accept Request' : 'Reject Request'}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {selectedStatus === 'Accepted'
              ? `We delivered the following materials to  ${selectedCard?.regNumber} to complete your order: ${selectedCard?.rawMaterial}`
              : `We have no materials to complete your order.`}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleUpdateStatus} color="primary" autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        message={snackbarMessage}
        action={[
          <IconButton key="close" aria-label="close" color="inherit" onClick={handleSnackbarClose}>
            <CloseIcon />
          </IconButton>,
        ]}
      />
    </div>
  );
};

export default StoreManager;
