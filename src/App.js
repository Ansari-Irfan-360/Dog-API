import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
} from "@mui/material";
import DogList from "./components/DogList";
import DogDetails from "./components/DogDetails";

function App() {
  const APIKey = "live_N0OoJNn6d1yWb2KVeV3YtQ8v1djOHzmUB3FkncqcltyK4gLd08H6FGOtq7DncK9x";

  const [selectedDog, setSelectedDog] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleDogClick = (dog) => {
    setSelectedDog(dog);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedDog(null);
    setShowModal(false);
  };

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
            <Typography variant="h6">Breeds of Dog</Typography>
          </Box>
        </Toolbar>
      </AppBar>
      <Container>
        <DogList handleDogClick={handleDogClick} APIKey={APIKey} />
        <DogDetails
          selectedDog={selectedDog}
          showModal={showModal}
          handleCloseModal={handleCloseModal}
        />
      </Container>
    </div>
  );
}

export default App;
