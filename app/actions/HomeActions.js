import alt from '../alt';

class HomeActions {
  constructor(){
    this.generateActions(
      'getTwoCharactersSuccess',
      'getTopCharactersFail',
      'voteFail'
    );
  }

  getTwoCharacters(){
    $.ajax({ url: '/api/characters'})
      .done((data) =>{
        this.actions.getTwoCharactersSuccess(data);
      })
      .fail((jqXhr) =>{
        this.actions.getTwoCharactersFail(jqXhr);
      })
  }
  vote(winner,loser){
    $.ajax({
      type: 'PUT',
      url: '/api/characters',
      data:{ winner:winner, loser:loser}
    })
      .done((date) =>{
        this.actions.getTwoCharacters();
      })
      .fail((jqXhr) =>{
        this.actions.voteDail(jqXhr.responseJSON.message)
      })
  }
}

export default alt.createActions(HomeActions);
