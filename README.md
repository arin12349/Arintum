# Arintum
Made it similar to Chrom app momentum.

## Features

- [x] Clock
- [x] To Do List
- [x] Weather
- [x] Daily Quote
- [x] Daily Photo
- [ ] Change own settings

## Technologies

* Parallax
   Made parallax effect on background image
   use parallax.js library from here
   https://github.com/wagerfield/parallax
   
* Realtime Weather and Location
   ``` JS
   function getUserLocation() {
  if (!navigator.geolocation) {
    console.log("cannot find location");
  }
  navigator.geolocation.watchPosition(success);
}
   ```
   Use Jquery ajax 

## Sample Pages

https://arin12349.github.io/Arintum/
