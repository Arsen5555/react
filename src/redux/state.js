let store = {
  _state: {
    profilePage: {
      posts: [
        {id: 1, message: 'very good', likeCount: 5},
        {id: 2, message: 'nice', likeCount: 12},
        {id: 3, message: 'blbla', likeCount: 112},
        {id: 4, message: 'yes', likeCount: 2}
      ],
      newPostText: 'New-React'
    },
    dialogsPage: {
      dialogs: [
        {id: 1, name: 'Item1'},
        {id: 2, name: 'Item2'},
        {id: 3, name: 'Item3'},
        {id: 4, name: 'Item4'},
        {id: 5, name: 'Item5'},
        {id: 6, name: 'Item6'},
      ],
      messages: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'Hi'},
        {id: 3, message: 'How are you'},
        {id: 4, message: 'Thanks i am well'},
        {id: 5, message: 'By'},
        {id: 6, message: 'Gb'}
      ]

    }
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
  },
  addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likeCount: 0
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state)
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  }
};




export default store;
window.store = store;
