# Arintum
Made it similar to Chrom app momentum.

## Sample Pages

https://arin12349.github.io/Arintum/

## Features

- [x] Clock
- [x] To Do List
- [x] Weather
- [x] Daily Quote
- [x] Daily Photo
- [ ] Change own settings

## How to Use

Type Your Username and save it!  

Todolist is on left side type your Todos and checkout.  
allow location then show Weather and your city.
Quotes and background images changes everyday

## Technologies

### Parallax
  Made parallax effect on background image  
  use parallax.js library from here  
  https://github.com/wagerfield/parallax
   
### Realtime Weather and Location
   Get latitude and Longitude use navigator  
   ```JS
    function getUserLocation() {
   if (!navigator.geolocation) {
     console.log("cannot find location");
   }
   navigator.geolocation.watchPosition(success);
   }
   ```
   Use jquery ajax find my city by nominatim API  
   https://nominatim.openstreetmap.org/ui/search.html
   
   Use jquery ajax look up weather my city by openWeather API  
   https://openweathermap.org/api
   
### Quotes
   show random quotes every day
   quotes list by here  
   https://gist.github.com/nasrulhazim/54b659e43b1035215cd0ba1d4577ee80
   
### Todolist sidebar
   sidebar bookmark left side  
   click bookmark then show todolst  
   checkout todo or delete and add todos  
   ![image](https://user-images.githubusercontent.com/65750019/170493597-02c92592-7385-488d-ad8b-1e1d3f4df1c9.png)


