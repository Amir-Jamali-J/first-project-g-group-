jQuery(document).ready(function ($) {
    var autoSearch = $("[id$=txtSearch]").autocomplete({
        source: function (request, response) {
            $.ajax({
                url: '/Default.aspx/AdvancedSearch',
                data: "{'prefix':'" + request.term + "'}",
                dataType: "json",
                type: "POST",
                contentType: "application/json; charset=utf-8",
                success: function (data) {
                    response($.map(data.d,
                        function (item) {
                            return {
                                //گرفتن مقادیر آژاکس
                                title: item.split('|')[0],
                                item_id: item.split('|')[1],
                                link: item.split('|')[2],
                                image: item.split('|')[3],
                                category: item.split('|')[4],
                                type_title: item.split('|')[5]
                            }
                        }));
                },
                error: function (response) {
                    //alert(response.responseText);
                },
                failure: function (response) {
                    //alert(response.responseText);
                }
            });
        },
        select: function (e, i) {
            $("[id$=hfProductId]").val(i.item.item_id);
        },
        minLength: 1
    }).data('ui-autocomplete');

    //درست کردن دسته بندی 
    autoSearch._renderMenu = function (ul, items) {
        var that = this,
            currentCategory = "";
        $.each(items, function (index, item) {
            if (item.category != currentCategory) {
                ul.append("<li class='ui-autocomplete-category'>" + item.type_title + "</li>");
                currentCategory = item.category;
            }
            that._renderItem(ul, item);
        });
    };
    //درست کردن موارد جستجو شده
    autoSearch._renderItem = function (ul, item) {
        return $('<li>')
            .data('item.autocomplete', item)
            .append('<img style="width:20px;height:auto;" src="' + item.image + '" alt="" />').append($("<a href='" + item.link + "'>").text(item.title))
            .appendTo(ul);
    };

}); 





