import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Box,
  TextField,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CircularProgress,
} from '@mui/material';

const DogList = ({ handleDogClick, APIKey }) => {
  const [dogImages, setDogImages] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchDogImages();
  }, []);

  const fetchDogImages = () => {
    setLoading(true);
    setError("");
    axios
      .get(
        `https://api.thedogapi.com/v1/images/search?limit=40&api_key=${APIKey}`
      )
      .then((response) => {
        setDogImages(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching the dog images: ", error);
        setError("Failed to fetch dog images.");
        setLoading(false);
      });
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredImages = dogImages.filter(
    (image) =>
      image.breeds.length > 0 &&
      image.breeds.some((breed) =>
        breed.name.toLowerCase().includes(searchTerm)
      )
  );

  return (
    <Box sx={{ mt: 4 }}>
      <TextField
        label="Search dogs by breed"
        variant="outlined"
        fullWidth
        onChange={handleSearch}
      />
      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <CircularProgress />
        </Box>
      ) : error ? (
        <Typography color="error" sx={{ mt: 4 }}>
          {error}
        </Typography>
      ) : (
        <Grid container spacing={2} sx={{ mt: 4 }}>
          {filteredImages.map((image) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={image.id}>
              <Card
                onClick={() => handleDogClick(image)}
                sx={{
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                  boxShadow: '2px 2px 5px 1px rgba(0, 0, 0, 0.5)',
                }}
              >
                <CardMedia
                  component="img"
                  height="250"
                  image={image.url}
                  alt="Dog"
                />
                <CardContent>
                  <Typography variant="h6">
                    {image.breeds[0].name.length > 20
                      ? `${image.breeds[0].name.substring(0, 20)}...`
                      : image.breeds[0].name}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default DogList;
