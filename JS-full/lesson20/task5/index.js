class User {
  constructor(stringId, stringName, stringSessionId) {
    this._id = stringId;
    this._name = stringName;
    this._sessionId = stringSessionId;
    Object.freeze(this);
  }

  get name() {
    return this._name;
  }

  get id() {
    return this._id;
  }

  get sessionId() {
    return this._sessionId;
  }
}

const user1 = new User('1', 'Tomas', '322');
const user2 = new User('2', 'Bishop', '323');
const user3 = new User('3', 'ArchBishop', '324');
const array = [user1, user2, user3];

class UserRepository {
  constructor(array) {
    this.users = Object.freeze(array);
    Object.freeze(this);
  }

  getUserNames() {
    return Object.values(this.users).map(user => user._name);
  }

  getUserIds() {
    return Object.values(this.users).map(user => user._id);
  }

  getUserNameById(id) {
    return Object.values(this.users)
      .filter(user => user._id === id)
      .map(user => user._name)
      .toString();
  }
}
const usersRep = new UserRepository(array);

// getUserNameById() {
//   return Object.values(this.users).map(user => `${user._id}: ${user._name}`);
// }
