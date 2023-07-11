// I am wanting to retrieve images from Unsplash API based on my weatherType variable
// If weatherType === sunny I would like to retrieve an image representing sun, etc.
// the current background-image is in App.css under the 'container' class

function Images(props) {
  const apiKey = process.env.REACT_APP_UNSPLASH_API_KEY;

  // Access currentTemp from props!
  const currentTemp = props.currentTemp;

  // weather type:
  let weatherType;

  if ((currentTemp >= -5) && (currentTemp <= -1)) {
    weatherType = 'Snow';
  } else if ((currentTemp >= 0) && (currentTemp <= 3)) {
    weatherType = 'Fog';
  } else if ((currentTemp >= 4) && (currentTemp <= 10)) {
    weatherType = 'Rain';
  } else if ((currentTemp >= 11) && (currentTemp <= 13)) {
    weatherType = 'Drizzle';
  } else if ((currentTemp >= 14) && (currentTemp <= 16)) {
    weatherType = 'Clouds';
  } else if ((currentTemp >= 17) && (currentTemp <= 20)) {
    weatherType = 'Cloudy';
  } else if ((currentTemp >= 21) && (currentTemp <= 28)) {
    weatherType = 'Sunny';
  } else if ((currentTemp >= 29) && (currentTemp <= 31)) {
    weatherType = 'Thunder';
  } else if ((currentTemp >= 32) && (currentTemp <= 40)) {
    weatherType = 'Sun';
  } else {
    weatherType = 'Clouds';
  };

  return(
    <h1>Images component</h1>
  );
}

export default Images;



// Frosty: https://images.unsplash.com/photo-1542601098-8fc114e148e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80

// Rainy: https://images.unsplash.com/photo-1506765325028-a6b6a1ea091a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1222&q=80

// Drizzly: https://images.unsplash.com/photo-1600415684478-744cf4f8f8d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80

// Cloudy: https://images.unsplash.com/photo-1463222186250-f81196e80fea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80

// Partly cloudy: https://images.unsplash.com/photo-1491237596458-ccbf4462e884?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80

// Sunny: https://images.unsplash.com/photo-1551815943-385d5246c8a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80

// Thundery: https://images.unsplash.com/photo-1576613775061-75e52d6e6b0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1112&q=80

// Heatwave: https://images.unsplash.com/photo-1544900961-5d1924f3b3aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80

// Fog: https://images.unsplash.com/photo-1487621167305-5d248087c724?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80
