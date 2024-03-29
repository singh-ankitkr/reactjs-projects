import React, {useState} from "react";
import Header from "./components/Header";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";



const items = [
    {
        title: "What is react?",
        content: "React is a front end javascript framework"
    },
    {
        title: "Why use react?",
        content: "React is a favorite JS library among engineers"
    },
    {
        title: "How use react?",
        content: "By making components."
    }
];

const options = [
    {
        label: 'The Color Red',
        value: 'red'
    },
    {
        label: 'The Color Green',
        value: 'green'
    },
    {
        label: 'The Color Blue',
        value: 'blue'
    }
];


export default () => {
    const [selected, setSelected] = useState(options[0]);

    return (
        <div>
            <Header />
            <Route path="/"><Accordion items={items} /></Route>
            <Route path="/list"><Search /></Route>
            <Route path="/dropdown">
                <Dropdown
                    label="Select a Color"
                    options={options}
                    selected={selected}
                    onSelectedChange={setSelected}
                />

            </Route>
            <Route path="/translate"><Translate /></Route>
        </div>
    )

};