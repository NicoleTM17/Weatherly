import { useEffect} from "react"; // helps us perform side effects in React such as fetching from an API

// I am wanting to retrieve images from Unsplash API based on my weatherType variable
// If weatherType === sunny I would like to retrieve an image representing sun, etc.
// the current background-image is in App.css under the 'container' class


function Images(props) {

  // Unsplash API key
  const apiKey = process.env.REACT_APP_UNSPLASH_API_KEY;

  // State variable to store fetched image URL
  // const [backgroundImg, setBackgroundImg] = useState('');

  // setImagesBackgroundImg function passed as props!
  const {setImagesBackgroundImg}  = props;

  // Access currentTemp from props!
  const currentTemp = props.currentTemp;

  // weather type:
  let weatherTypes;

  if ((currentTemp >= -5) && (currentTemp <= -1)) {
    weatherTypes = 'Snow';
  } else if ((currentTemp >= 0) && (currentTemp <= 3)) {
    weatherTypes = 'Fog';
  } else if ((currentTemp >= 4) && (currentTemp <= 10)) {
    weatherTypes = 'Rain';
  } else if ((currentTemp >= 11) && (currentTemp <= 13)) {
    weatherTypes = 'Drizzle';
  } else if ((currentTemp >= 14) && (currentTemp <= 16)) {
    weatherTypes = 'Clouds';
  } else if ((currentTemp >= 17) && (currentTemp <= 20)) {
    weatherTypes = 'Cloudy';
  } else if ((currentTemp >= 21) && (currentTemp <= 28)) {
    weatherTypes = 'Sunny';
  } else if ((currentTemp >= 29) && (currentTemp <= 31)) {
    weatherTypes = 'Thunder';
  } else if ((currentTemp >= 32) && (currentTemp <= 40)) {
    weatherTypes = 'Sun';
  } else {
    weatherTypes = 'Clouds';
  };

// Here we are fetching a random image based on weatherTypes
// whenever the weather or the API key changes, a new image will be fetched
  useEffect(() => {
    const fetchImage = async () => { // our callback function
      try {
        const response = await fetch(
          `https://api.unsplash.com/photos/random?query=${weatherTypes}&orientation=landscape&client_id=${apiKey}`
        ); // specific query parameters include weatherTypes as well as our API key
        const data = await response.json(); // await pauses execution until code is received and response.json extracts data from the response
        const imgUrl = data[0].urls.regular; // regular url extracted and stored inside imgUrl
        setImagesBackgroundImg(imgUrl); // responsible for updating the background image
      } catch (error) { // error is caught if there is one during fetch
        console.error('There was an error fetching an image from Unsplash', error);
      }
    };

    fetchImage();
  }, [weatherTypes, apiKey, setImagesBackgroundImg]); // the dependency array tells React to rerun the useEffect whenever any of these variables change (so a new image will be fetched).
  // Does apikey need to be in here?
  return(
    <div className="img-container">

    </div>
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
