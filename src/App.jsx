import React from "react";
import { Button } from "./components/ui/button/button";
import { Icon } from "./assets/icon";
import Input from "./components/ui/input/input";
import { useState } from "react";
import Card from "./components/ui/card/card";

function App() {
  const [username, setUsername] = useState("");

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted with username:", username);
    // Perform form submission logic here
  };
  return (
    <>
      <Button startIcon={<Icon />} variant="primary" type="submit">
        Click
      </Button>
      <Button endIcon={<Icon />} variant="secondary">
        Click
      </Button>
      <Button startIcon={<Icon />} endIcon={<Icon />} variant="danger">
        Click
      </Button>

      <Input
        type="text"
        id="username"
        className="custom-input"
        placeholder="Enter your username"
        value={username}
        onChange={handleInputChange}
        maxLength={30}
      />

      <div className="card-container">
        <Card
          title="Example Card 1"
          description="This is the first example card."
          imageUrl="https://placeimg.com/300/200/nature"
        />
        <Card
          title="Example Card 2"
          description="This is the second example card."
          imageUrl="https://placeimg.com/300/200/architecture"
        />
      </div>
    </>
  );
}

export default App;
