import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component {

  id = 0;

  state = {
    information: [],
  }

  handleCreate = (data) => {
    console.log(data);
    // 기존의 배열은 수정하지 않고 새로운 배열로 생성
    const {information} = this.state;
    this.setState({
      information: information.concat(
        Object.assign({}, data, {
          id: this.id++
        })
      )
    })
  }

  handleRemove = (id) => {
    const {information} = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
    });
  }

  handleUpdate = (id, data) => {
    const {information} = this.state;
    this.setState({
      information: information.map(
        info => {
          if(info.id === id){
            return{
              id,
              ...data,
            };
          }
          return info;
        }
      )
    })
  }

  render() {
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate}/>
        {/* {JSON.stringify(this.state.information)} */}
        <PhoneInfoList 
          data={this.state.information}
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
          />
      </div>
    );
  }
}

export default App;