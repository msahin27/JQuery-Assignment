// Make the project great again with jQuery ..



// DELETE TOPICS
$(document).on("click", ".delete", function(e) {
  e.preventDefault();
  $(this)
    .parent()
    .remove();
});


//HIDE TOPICS

$('#hide').click(function () {
    $('ul').toggle(this.unchecked);
  });


// ADD TOPIC TO LIST
$("form").submit(function(e) {
  if ($(".input").val() !== "") {
    
    let newTask = $(".input").val();
    
    $("ul").append(
      "<li class='list-group-item'><span class='name'>" + newTask +
        "</span><span class='delete'>delete</span>"
    );

    $(".input").val("");
  }

  return false;
});


// SEARCH INPUT
$("#search-topics input").keyup(function() {
  const searchingTopics = $(this).val();

  $("ul > li ").each(function() {
    const liName = $(this).text();
    showLi = liName.toUpperCase().indexOf(searchingTopics.toUpperCase()) !== -1;
    $(this).toggle(showLi);
  });
});
