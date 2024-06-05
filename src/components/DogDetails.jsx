import React from 'react';
import { Box, Typography, CardMedia, Button, Modal } from '@mui/material';

const DogDetails = ({ selectedDog, showModal, handleCloseModal }) => {
  return (
    <Modal
      open={showModal}
      onClose={handleCloseModal}
      aria-labelledby="dog-details-modal"
      aria-describedby="dog-details"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
        }}
      >
        {selectedDog && (
          <React.Fragment>
            <Typography variant="h4" gutterBottom>
              {selectedDog.breeds[0].name}
            </Typography>
            <CardMedia
              component="img"
              sx={{ maxHeight: '20%'}}
              image={selectedDog.url}
              alt={selectedDog.breeds[0].name}
            />
            <Typography variant="body1">
              <strong>Breed:</strong> {selectedDog.breeds[0].name}
            </Typography>
            <Typography variant="body1">
              <strong>Temperament:</strong> {selectedDog.breeds[0].temperament}
            </Typography>
            <Typography variant="body1">
              <strong>Origin:</strong> {selectedDog.breeds[0].origin}
            </Typography>
            <Typography variant="body1">
              <strong>Life Span:</strong> {selectedDog.breeds[0].life_span}
            </Typography>
            <Button onClick={handleCloseModal} sx={{ mt: 2 }}>Close</Button>
          </React.Fragment>
        )}
      </Box>
    </Modal>
  );
};

export default DogDetails;
