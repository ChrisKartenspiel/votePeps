import alt from '../alt';
import NavbarActions from '../actions/NavbarActions';

class NavbarStore {
  constructor (){
    this.bindActions(NavbarActions);
    this.totalCharacters = 0;
    this.onlineUsers = 0;
    this.searchQuery='';
    this.ajaxAnimationClass='';
  }

  onFindCharacterSuccess(payload){
    payload.history.pushState(null,'/characters/' + payload.characterId);
  }

  onfindCharacterFail(payload){
    payload.searchForm.classList.add('shake');
    setTimeout(() =>{
      payload.searchForm .classList.remove('shake');
    },1000)
  }

  onUpdateOnlineUsers(data){
    this.onlineUsers = data.onlineUsers;
  }

  onUpdateAjaxAnimation(className){
    this.ajaxAnimationClass = className;
  }

  onUpdateSearchQuery(event){
    this.totalCharcters = data.count;
  }

  onGetCharacterCountSuccess(data){
    this.totalCharacters = data.count;
  }

  onGetCharacterCountFail(jqXhr) {
    toastr.error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
  }
}

export default alt.createStore(NavbarStore);
