function postComment() {
  var commenter = document.getElementById("commenterName").value;
  var comment = document.getElementById("commentText").value;

  //create template function
  var commentsDiv = document.getElementById("comments");
  var commentTemplate = document.getElementById("comment-template").innerHTML;
  var templateFn = _.template(commentTemplate);

  //execute template function with JSON object for the interpolated values
  var templateHTML = templateFn({ 'comment': comment, 'commenter': commenter });
  //append rather than replace!
  commentsDiv.innerHTML += templateHTML;
}
