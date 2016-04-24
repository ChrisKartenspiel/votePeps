import React from 'react';
import {Link} from 'react-router';
import {isEqual} from 'underscore';
import CharacterListStore from '../stores/CharacterListStore';
import CharacterListActions from '../actions/CharacterListActions';

class CharacterList extends React.Component {
  constructor(props){
    super(props);
    this.state = CharacterListStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount(){
    CharacterListStore.listen(this.onChange);
    CharacterActions.getCharacters(this.props.params)
  }

  componentWillUnmount(){
    CharacterListStore.unlisten(this.onChange);
  }

  componentDidUpdate(prevProps){
    if(!isEqual(prevProps.params, this.props.params)){
      CharacterListActions.getCharacters(this.props.params);
    }
  }

  onChange(state){
    this.setState(state)
  }

  render(){
    let charactersList = this.state.characters.map((character, index) =>{
      return (
        <div key={character.char|acterId} className='list-group-item animated fadeIn'>
          <div className='media'>
            <span className='position pull-left'>{index + 1}</span>
            <div className='pull-left thumb-lg'>
              <Link to={'/characters/' + character.characterId}>
                <img className='media-object' src={'http://image.eveonline.com/Character/' + character.characterId + '_128.jpg'} />
              </Link>
            </div>
            <div className='media-body'>
              <h4 className='media-heading'>
                <Link to={'/characters/' + character.characterId}>{character.name}</Link>
              </h4>
              <small>Race: <strong>{character.race}</strong></small>
              <br />
              <small>bloodline: <strong>{character.bloodline}</strong></small>
              <br />
              <small>Wins: <strong>{character.wins}</strong> Losses: <strong>{charecter.losses}</strong></small>
            </div>
          </div>
        </div>
      )
    })

    return (
      <div className='container'>
        <div className='list-group'>
          {charactersList}
        </div>
      </div>
    );
  }
}

export default CharacterList;
