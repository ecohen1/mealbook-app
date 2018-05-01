import React from 'react';
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Select from 'material-ui/Select';

import PaperSheet from './PaperSheet'
import SimpleAppBar from './SimpleAppBar'
import GlucoseForm from './GlucoseForm'
import AddButton from './AddButton'

class App extends React.Component {
  state = {
    forms: [
      {'a':1}
    ]
  };

  addForm = () => {
    var forms = []
    var exampleForm = {'a':1}
    for (var i=0;i<this.state.forms.length;i++) {
      forms.push(exampleForm)
    }
    forms.push(exampleForm)
    this.setState({forms: forms})
  }

  render() {
    return (
      <div>
        <SimpleAppBar />
          {
            this.state.forms.map(function(form, idx) {
              return (
                <PaperSheet key={'Paper'+idx} >
                  <GlucoseForm form={form}/>
                </PaperSheet>
              );
            })
          }
          <AddButton onClick={this.addForm}/>
      </div>
    )
  }
}

export default App;
