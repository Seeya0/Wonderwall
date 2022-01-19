import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@material-ui/core';
import React, { useState } from 'react';
import PlaceDetails from '../PlaceDetails/PlaceDetails';

import useStyles from './styles';
const List = () => {
  const classes = useStyles();
  const [type, setType] = useState('restaurants');
  const [rating, setRating] = useState('');

  const places = [
    { name: 'Cool Place' },
    { name: 'Best Beer' },
    { name: 'Best Pub!!' },
  ];
  return (
    <div className={classes.container}>
      <Typography variant="h4">
        Restaurants, Hotels & Attractions around you!
      </Typography>
      {/* ここのFormControlではtypeのstateを変更している。onChangeでtypeとvalueが変わることによりユーザーが選んでいる項目がでる */}
      <FormControl className={classes.formControl}>
        <InputLabel>Type</InputLabel>
        <Select value={type} onChange={(e) => setType(e.target.value)}>
          <MenuItem value="restaurants">Restaurants</MenuItem>
          <MenuItem value="hotels">Hotels</MenuItem>
          <MenuItem value="attractions">Attractions</MenuItem>
        </Select>
      </FormControl>
      {/* ここのFormControlではratingのstateを変更している。onChangeでratingとvalueが変わる。上のFormと同じ機能 */}
      <FormControl className={classes.formControl}>
        <InputLabel>Rating</InputLabel>
        <Select value={rating} onChange={(e) => setRating(e.target.value)}>
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={3}>above 3.0</MenuItem>
          <MenuItem value={4}>above 4.0</MenuItem>
          <MenuItem value={4.5}>above 4.5</MenuItem>
        </Select>
      </FormControl>
      <Grid container spacing={3} className={classes.list}>
        {places?.map((place, i) => (
          <Grid item key={i} xs={12}>
            <PlaceDetails place={place} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default List;
