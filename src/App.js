import React, { Component } from 'react';
import './App.css';
import ContactList from './components/ContactList'
// import Filter from './components/Filter'

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
      currentFilter: "SHOW_ALL"
    }
    this.filteredContent = this.filteredContent.bind(this)
  }

  filteredContent() {
    const { contacts, currentFilter } = this.state;
    return {
      filteredContent: contacts.map(x => {
        if(currentFilter === "SHOW_ALL") {
          return x
        }
        return x.name.includes(currentFilter)
      })
    }
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Contacts App</h1>
        </header>
        <ContactList contacts={this.filteredContent()}/>
      </div>
    );
  }
}

export default App;
