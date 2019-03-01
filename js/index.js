$('#addButton').on("click",function(event){
    event.preventDefault()
    let item = $('#inputItem').val()
    $('#allItems').append(`
                            <li class="myItem">
                                <div class="itemName" style="text-decoration: none;">
                                    ${item}
                                </div>
                                <button class="checkButton">Check</button>
                                <button class="deleteButton">Delete</button>
                            </li>
                        `)
})

$('#allItems').on("click",".deleteButton", function(event){
    $(this).parent().remove()
})


$('#allItems').on('click','.checkButton', function(event){
    let item = $(this).parent().find('.itemName')
    if (item.attr("style")=="text-decoration: none;"){
        item.attr("style","text-decoration: line-through; color: red;")
    }
    else {
        item.attr("style","text-decoration: none;")
    }
})
