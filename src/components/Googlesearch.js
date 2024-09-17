import React, { useRef, useEffect, useState } from 'react';
import { TextField, Button, Card, CardContent } from '@mui/material';

const GoogleSearch = () => {
  const inputRef = useRef(null);

  const [query, setQuery] = useState('');

  useEffect(() => {
    // Focus the input field when the component mounts
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleSearch = () => {
    const query = inputRef.current.value;
    if (query) {
      window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
      inputRef.current.value = '';
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <Card sx={{ minWidth: 400, width: 0.75, margin: '20px auto', textAlign: 'center' }}>
      <CardContent>
        <TextField
          inputRef={inputRef}
          variant="outlined"
          fullWidth
          placeholder="Search Google"
          onChange= {(event) => setQuery(event.target.value)}
          sx={{ marginBottom: '10px' }}
          onKeyDown={handleKeyDown}
        />
        <Button disabled={query? false: true}  variant="contained" color="primary" onClick={handleSearch}>
          Search
        </Button>
      </CardContent>
    </Card>
  );
};

export default GoogleSearch;
