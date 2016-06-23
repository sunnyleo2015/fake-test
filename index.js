var json = [];

$(function(){
    chooseWindows();
    toEditPage();
    changeJson();
  //toPreviewPage();
});

function windowOpenAndClose(){
    $('.addItemButton').click(function(){
        $('.chooseWindow').show();
    });
    $('.closeButton').click(function(){
        $('.chooseWindow').hide();
    });
}

function toPreviewPage(){
    var previewPageHtml= '<div class="previewPage">'
                        + '        <div class="previewPageTitle">previewPage</div>'
                        + '        <div class="previewWindos"></div>'
                        + '        <div class="toEditPage">back</div>'
                        + '</div>';
    $('.content').html(previewPageHtml);

    var textinput = '<div class="previewInput">text:<input type="text" disabled="true"></div>';
    var dateinput = '<div class="previewDate">date:<input type="date" disabled="true"></div>';
    if(json != null){
        //alert('no null');
        console.log(json);
        for(var i=0; i<json.length; i++){
            console.log(json[i].type);
            if(json[i].type == 'text'){
                $('.previewWindos').append(textinput);
            }else if(json[i].type == 'date'){
                $('.previewWindos').append(dateinput);
                //alert('date');
            }
        }
    }

    clickBackEditPageButton();
}

function chooseWindows(){
    var windowsHtml= '<div class="chooseWindow">'
        + '        <div class="closeButton">X</div>'
        + '        <form>'
        + '            <span>text:</span><input type="radio" name="inputtype" value="text"><br>'
        + '            <span>date:</span><input type="radio" name="inputtype" value="date">'
        + '            <button type="button" class="addNewItemButton">add item</button>'
        + '        </form> '
        + '</div>';
    $('body').append(windowsHtml);
}

function toEditPage(){
    var editPageHtml= '<div class="editPage">'
                    + '        <div class="editPageTitle">editPage</div>'
                    + '        <div class="formWindows"></div>'
                    + '        <div class="addItemButton">add</div>'
                    + '        <div class="toPreviewPage">finish</div>'
                    + '</div>';


    $('.content').html(editPageHtml);
    windowOpenAndClose();
    clickFinishButton();
    refuseEditPageFromWindows();
}

function changeJson(){
    $('.addNewItemButton').on('click',function(){
        var itemValue = $("input[name='inputtype']:checked").val();

        if(itemValue == 'text'){
            json.push({'type':'text'});
        }else if(itemValue == 'date'){
            json.push({'type': 'date'});
        }
        refuseEditPageFromWindows();
        $('.chooseWindow').hide();

    });
}

function clickFinishButton(){
    $('.toPreviewPage').click(function(){
        toPreviewPage(json);
    });
}

function clickBackEditPageButton(){
    $('.toEditPage').click(function(){
        toEditPage();
    });
}


function refuseEditPageFromWindows(){
    //alert('refuseEditPageFromWindows: '+ json);

    if(json != null){
        //alert('refuse2step: '+json);
        $('.formWindows').html('');
        for(var i=0; i<json.length; i++){
            if(json[i].type == 'text'){
                var textinput = '<div class="textinput">text:<input type="text"><button type="button" class="delete" onclick="deleteItemButton('+i+')">delete</button></div>';
                $('.formWindows').append(textinput);
            }else if(json[i].type == 'date'){
                var dateinput = '<div class="dateinput">date:<input type="date"><button type="button" class="delete" onclick="deleteItemButton('+i+')">delete</button></div>';
                $('.formWindows').append(dateinput);
            }
        }
    }
    console.log('5:'+json);
}

function deleteItemButton(i){
    alert('into');
    json.splice(i, 1);
    refuseEditPageFromWindows();
}