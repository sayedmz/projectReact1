// import { useState } from "react";
// import CoreConcept from "../../components/CoreConcept/CoreConcept";
// import TabButton from "../../components/TabButton/TabBbutton";
// import { CORE_CONCEPTS, EXAMPLES } from "../../data";
// import "./Home.scss";

// const Home = () => {
//   const [SelectedTopic, setSelectedTopic] = useState("components");
//   // topic ==> components , jsx ,props , state
//   const TabHandler = (topic) => {
//     setSelectedTopic(topic);
//   };
//   let content = (
//     <div>
//       <h3>{EXAMPLES?.[SelectedTopic].title}</h3>
//       <p>{EXAMPLES?.[SelectedTopic].description}</p>
//       <pre>
//         <code>{EXAMPLES?.[SelectedTopic].code}</code>
//       </pre>
//     </div>
//   );
//   // console.log(SelectedTopic);
//   return (
//     <>
//       <section className="coreConcepts">
//         <h2>Core Concepts</h2>
//         <ul>
//           {CORE_CONCEPTS.map((concept, index) => (
//             <CoreConcept {...concept} key={index} /> // (image={concept.image} title={concept.title} description={concept.description} ) ={...concept}
//           ))}
//         </ul>
//       </section>
//       <section className="exemples">
//         <h2>Example</h2>
//         <ul>
//           <TabButton
//             onClick={() => TabHandler("components")}
//             isSelected={SelectedTopic === "components"}
//           >
//             Component
//           </TabButton>
//           <TabButton
//             onClick={() => TabHandler("jsx")}
//             isSelected={SelectedTopic === "jsx"}
//           >
//             JSX
//           </TabButton>
//           <TabButton
//             onClick={() => TabHandler("props")}
//             isSelected={SelectedTopic === "props"}
//           >
//             Props
//           </TabButton>
//           <TabButton
//             onClick={() => TabHandler("state")}
//             isSelected={SelectedTopic === "state"}
//           >
//             State
//           </TabButton>
//         </ul>
//         {content}
//       </section>
//     </>
//   );
// };

// export default Home;
//====================================
//====================================

import { useNavigate, useParams } from "react-router-dom";
import CoreConcept from "../../components/CoreConcept/CoreConcept";
import { Tabs } from "../../components/Tabs/Tabss";
import { CORE_CONCEPTS, EXAMPLES, buttons } from "../../data";
import "./Home.scss";
import TabButton from "../../components/TabButton/TabBbutton";
import Section from "../../components/Section/Section";

const Home = () => {
  const Navigate = useNavigate();
  const { concept } = useParams();

  return (
    <>
      <Section className="coreConcepts" title="Core Concepts">
        <ul>
          {CORE_CONCEPTS.map((concept, index) => (
            <CoreConcept {...concept} key={index} /> // (image={concept.image} title={concept.title} description={concept.description} ) ={...concept}
          ))}
        </ul>
      </Section>
      <Tabs
        tabs={
          <>
            {buttons.map((button) => (
              <TabButton
                key={button.id}
                onClick={() => Navigate(button.name)}
                isSelected={concept === button.name}
              >
                {button.leabel}
              </TabButton>
            ))}

            {/* <TabButton
              onClick={() => navigate("jsx")}
              isSelected={concept === "jsx"}
            >
              JSX
            </TabButton>
            <TabButton
              onClick={() => navigate("props")}
              isSelected={concept === "props"}
            >
              Props
            </TabButton>
            <TabButton
              onClick={() => navigate("state")}
              isSelected={concept === "state"}
            >
              State
            </TabButton> */}
          </>
        }
      >
        <div>
          <h3>{EXAMPLES?.[concept].title}</h3>
          <p>{EXAMPLES?.[concept].description}</p>
          <pre>
            <code>{EXAMPLES?.[concept].code}</code>
          </pre>
        </div>
      </Tabs>
    </>
  );
};

export default Home;
