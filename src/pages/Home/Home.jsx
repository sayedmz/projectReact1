import { useState } from "react";
import CoreConcept from "../../components/CoreConcept/CoreConcept";
import TabButton from "../../components/TabButton/TabBbutton";
import { CORE_CONCEPTS } from "../../data";
import "./Home.scss";

const Home = () => {
  const [SelectedTopic, setSelectedTopic] = useState();
  const TabHandler = (topic) => {
    setSelectedTopic(topic);
  };
  return (
    <>
      <section className="coreConcepts">
        <h2>Core Concepts</h2>
        <ul>
          {CORE_CONCEPTS.map((concept, index) => (
            <CoreConcept {...concept} key={index} /> // (image={concept.image} title={concept.title} description={concept.description} ) ={...concept}
          ))}
        </ul>
      </section>
      <section className="exemples">
        <h2>Example</h2>
        <ul>
          <TabButton
            onClick={() => TabHandler("Component")}
            isSelected={SelectedTopic === "Component"}
          >
            Component
          </TabButton>
          <TabButton
            onClick={() => TabHandler("JSX")}
            isSelected={SelectedTopic === "JSX"}
          >
            JSX
          </TabButton>
          <TabButton
            onclick={() => TabHandler("Props")}
            isSelected={SelectedTopic === "Props"}
          >
            Props
          </TabButton>
          <TabButton
            onClick={() => TabHandler("State")}
            isSelected={SelectedTopic === "State"}
          >
            State
          </TabButton>
        </ul>
      </section>
    </>
  );
};

export default Home;
