//core
var jsonData = {
    'item':[{
            'type': "text"
        },
        {
            'type': 'date'
        }
    ],
    status:'edit'
};

$(function () {
    renderPage();
    renderOptionBox();

    $('body').on('click','.addItemButton',function(event) {
        $('.chooseWindow').show();
    });

    $('body').on('click','.addNewItemButton',function(event) {
        var itemtype = $("input[name='inputtype']:checked").val();
        addItem(itemtype);
    });

    $('body').on('click','.toPreviewPage',function(event) {
        toPreviewPage();
    });

    $('body').on('click','.toEditPage',function(event) {
        toEditPage();
    });
});

function renderPage(){
    var templateList = '';

    if(jsonData.status == 'preview'){
        templateList = $('#previewPage').html();
        //alert(templateList);
    }
    else if(jsonData.status == 'edit'){
        templateList = $('#editPage').html();
        //alert(templateList);
    }

    var compiled = _.template(templateList);
    $('.content').html(compiled(jsonData));
    //alert(compiled(jsonData));
}

function renderOptionBox() {
    //var templateList = $('#optionWindows').html();
    //var compiled = _.template(templateList);
    //$('#optionWindow').html(compiled);
    $('.chooseWindow').hide();
    $('.closeButton').click(function(){
        $('.chooseWindow').hide();
    });
}

function toEditPage() {
    jsonData.status = 'edit';
    renderPage();
}

function toPreviewPage() {
    jsonData.status = 'preview';
    renderPage();
}

function addItem(type) {
    $('.chooseWindow').hide();

    if(type == 'text'){
        jsonData.item.push({"type" : "text"});
    }else if(type == 'date'){
        jsonData.item.push({"type" : "date"});
    }
    renderPage();
}

function deleteItem(deleteObject) {
    alert('delete');
    //var deleteItemNumber = $(deleteObject).parent(div).attr(indexOf);
    //jsonData.item.splice(deleteItemNumber, 1);
}

