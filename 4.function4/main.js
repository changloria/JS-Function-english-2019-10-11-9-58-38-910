function countWords(message){
    return message.trim().split(/\s+/).length;
  }
  console.log(countWords('Good morning, I love JavaScript.')); // should return 5


