import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import Overview from './components/Overview'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Accordion allowZeroExpanded={true}>
        <AccordionItem className="reviewAccordion">
          <AccordionItemHeading>
            <AccordionItemButton>
              <div className='overview'>
                Overview
                    </div>
              <img className="arrow" src="https://static.thenounproject.com/png/196766-200.png"></img>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <Overview />
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    );
  }
}
export default App;