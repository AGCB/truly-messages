import React, { Component } from 'react';
import './App.css';
import ContactList from './components/ContactList';
import FormErrors from './components/FormErrors';
import Form from './components/Form'
import AddEntry from './components/AddEntry'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [
          {"name": "Bob Barker", "number": "+12675558080", "context": "work"},
          {"name": "Sue S. Sauce", "number": "+16465558080", "context": "personal"},
          {"number": "+17316441809", "context": "salesforce", "name": "Mcdaniels Mauro"},
          {"number": "+13175564791", "context": "enemies", "name": "Backus Ferniehirst"},
          {"number": "+17818907216", "context": "zendesk", "name": "Sipes Langlois"},
          {"number": "+12369267518", "context": "work", "name": "Gass Chism"},
          {"number": "+12168115984", "context": "desk.com", "name": "Esselmont Mather"},
          {"number": "+15183020755", "context": "enemies", "name": "Mellerstain Brodie"},
          {"number": "+13032611369", "context": "space", "name": "Miley Turnbull"},
          {"number": "+17195806420", "context": "facebook", "name": "Duntulm Loftin"},
          {"number": "+12827674524", "context": "salesforce", "name": "Schlosser Mccreary"},
          {"number": "+18173354603", "context": "twitter", "name": "Hunterstone Ravenscraig"},
          {"number": "+17035990973", "context": "party", "name": "Hoag Penkill"},
          {"number": "+15093182088", "context": "desk.com", "name": "Carrick Berlin"},
          {"number": "+19129123251", "context": "desk.com", "name": "Shivers Hathor"},
          {"number": "+15736710433", "context": "zendesk", "name": "Amundson Nesmith"},
          {"number": "+15864886766", "context": "twitter", "name": "Kester Place"},
          {"number": "+17017263202", "context": "salesforce", "name": "Lowman Muchalls"},
          {"number": "+15407015384", "context": "blah", "name": "Nation Spradlin"},
          {"number": "+16319836427", "context": "salesforce", "name": "Gilson Steel"},
          {"number": "+15463136736", "context": "twitter", "name": "Wick Glengarry"},
          {"number": "+13615673324", "context": "enemies", "name": "Creighton Menthu"},
          {"number": "+12285515150", "context": "facebook", "name": "Cushing Mckeown"}
      ],
      currentFilter: "SHOW_ALL",
      currName: "",
      currNumber: "",
      currContext: "",
      disabled: false,
      nameErrors: false,
      numberErrors: false,
      contextErrors: false
    }
  }

  filteredContent = () => {
    const { contacts, currentFilter } = this.state;
    return {
      filteredContent: contacts.filter(x => {
        if(currentFilter === "SHOW_ALL") {
          return x
        } else {
          return x.name.toLowerCase().includes(String(currentFilter).toLowerCase())
        }
      })
    }
  }

  handleNewEntry = (e) => {
    e.preventDefault();
    const { currName, currNumber, currContext } = this.state;
    let joined = this.state.contacts.concat({name: currName,
                                             number: currNumber,
                                             context: currContext});
    this.setState({contacts: joined});
    this.clearEntry();}

  clearEntry = () => {
  this.setState({currName: "", currNumber: "", currContext: ""})
}

  validateName = (word) => {
    if (!/[^a-zA-Z]/.test(word)) {
      this.setState({nameErrors: false});
      this.setState({disabled: false});
      return;
    }
    else {
      this.setState({nameErrors: true});
      this.setState({disabled: true})
    }
  }

  validateNumber = (number) => {
    let formattedNumber = number.replace(/\D/g,'');
    if(formattedNumber.length === 10) {
      this.setState({numberErrors: false});
      this.setState({disabled: false});
    }
    else {
      this.setState({numberErrors: true});
      this.setState({disabled: true});
    }
  }

  validateContext = (context) => {
    if (!/[^a-zA-Z]/.test(context)) {
      this.setState({contextErrors: false});
      this.setState({disabled: false});
      return;
    }
    else {
      this.setState({contextErrors: true});
      this.setState({disabled: true});
    }
  }

  resetFilter = (e) => {
    e.preventDefault();
    this.setState({
      currentFilter: ""
    })
  }

  handleFilterChange = e => {
    e.preventDefault();
    this.setState({currentFilter: e.target.value})
  }

  handleNameChange = e => {
    e.preventDefault();
    this.validateName(e.target.value);
    this.setState({currName: e.target.value})
  }

  handleNumberChange = e => {
    e.preventDefault();
    this.validateNumber(e.target.value);
    this.setState({currNumber: e.target.value})
  }

  handleContextChange = e => {
    e.preventDefault();
    this.validateContext(e.target.value)
    this.setState({currContext: e.target.value})
  }

  render() {
    const { disabled,
            nameErrors,
            numberErrors,
            contextErrors,
            currName,
            currNumber,
            currContext,
            currentFilter
          } = this.state;
    const { validateName,
            validateNumber,
            validateContext,
            resetFilter,
            handleFilterChange,
            handleNameChange,
            handleNumberChange,
            handleContextChange,
            handleNewEntry
          } = this;
    return (
      <div className="App">
        <header>
          <h1>Contacts App</h1>
          {/*SET THE CURRENT FILTER*/}
          <Form
            isDisabled={disabled}
            currentFilter={currentFilter}
            resetFilter={resetFilter}
            handleFilterChange={handleFilterChange}
          />
          <hr/>
          <div>
          {/* DISPLAY ERRORS IF THERE ARE ANY*/}
          <FormErrors
            nameErrors={nameErrors}
            numberErrors={numberErrors}
            contextErrors={contextErrors}
          />
          </div>
          {/*ADD A NEW ENTRY*/}
          <AddEntry
            currName={currName}
            currNumber={currNumber}
            currContext={currContext}
            validateName={validateName}
            validateNumber={validateNumber}
            validateContext={validateContext}
            handleNameChange={handleNameChange}
            handleNumberChange={handleNumberChange}
            handleContextChange={handleContextChange}
            handleNewEntry={handleNewEntry}
          />
        </header>

        <ContactList contacts={this.filteredContent()}/>
      </div>
    );
  }
}

export default App;
