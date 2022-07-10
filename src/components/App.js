import React, { useState, useEffect } from "react";

// create your App component here
function App() {
  const [dogImage, setDogImage] = useState(false);

  let imgLocation = "";

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        imgLocation = data["message"];
        console.log("imgLocation: ", imgLocation);
        setDogImage(imgLocation);
      });
  }, []);
  // <img src="https://images.dog.ceo/breeds/terrier-welsh/lucy.jpg" />

  if (!dogImage) return <h3>Loading...</h3>;

  return (
    <div>
      <img alt="A Random Dog" src={dogImage} />
    </div>
  );
}

export default App;
