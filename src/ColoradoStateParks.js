import React from "react";
import howManyParks from "./parks/howManyParks";
import * as RMFunctions from "./parks/RockyMountain";
import MesaVerde from "./parks/MesaVerde";

function ColoradoStateParks() {
  howManyParks(); // => "42 parks!"
  console.log(RMFunctions.trees);
  RMFunctions.wildlife();
  RMFunctions.elevation();

  return (
    <div>
      <h1>Colorado State Parks!</h1>
      <MesaVerde />
    </div>
  );
}

export default ColoradoStateParks;
