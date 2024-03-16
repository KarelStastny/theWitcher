import React from "react";
import { characters } from "./data/characters";
import { camleCase } from "./helpers/renderers";

const findCharacter = (characters, id) => {
  return characters.find((character) => character.id === id);
};

const Geralt = findCharacter(characters, "geralt-of-rivia");

const tranferCharacters = characters.reduce(
  (acc, character) => {
    const basicInfo = character.personalInfo.find((info) =>
      info.id.includes("basicInfo")
    );

    acc[character.name] = {
      firstName: character.name,
      wholeName: character.name + camleCase(character.surname),
      info: {
        home: camleCase(basicInfo.home),
        age: basicInfo.age,
      },
    };

    return acc;
  },
  [{}]
);

console.log(tranferCharacters);

const Training = () => {
  return (
    <div>
      {Geralt ? <p>Našel jsem Geralta.</p> : <p>Geralt nebyl nalezen.</p>}
    </div>
  );
};

export default Training;
