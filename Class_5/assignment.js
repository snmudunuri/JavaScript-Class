function Movie(movieName) {
  this.title = movieName;
  this.ratings = [];
  this.avgRating = 0;
  this.addRating = function(value) {
    if (value <= 0 || value > 10) {
      alert("Review limit is 1 to 10");
      return;
    }
    this.ratings.push(value);
    let sum = 0;
    let length = this.ratings.length;

    for (let i = 0; i < length; i++) {
      sum = sum + this.ratings[i];
    }
    this.avgRating = sum / length;
  };
}
