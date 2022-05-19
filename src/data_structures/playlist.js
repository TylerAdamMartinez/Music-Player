import { songs } from '../components/Songs'

class Playlist {
  index = 0;
  constructor(new_array) {
    this.array = new_array;
  }

  add(new_element) {
    this.array.push(new_element);
  }

  updateCurrent(id){
    this.index = id
  }

  current() {
    return this.array[this.index]
  }

  prev() {
    if (this.index < 0 ) { 
      this.index = this.array.length - 1
      return this.array[this.index]
    }
    this.index = this.index - 1
    return this.array[this.index]
  }

  next() {
    if ( this.index > (this.array.length - 1)) {
      this.index = 0;
      return this.array[this.index]
    }
    this.index = this.index + 1
    return this.array[this.index]
  }

}

export default Playlist;
