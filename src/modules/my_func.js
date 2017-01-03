module.exports = MyFunc;

function MyFunc(params) {
}

MyFunc.prototype = {
    group_by_year: function (data) {
        var years = [];

        data.forEach(function (d) {
            if (years.indexOf(d.year) == -1) {
                years.push(d.year);
            }
        })
        years.sort();
        years.reverse();
        console.log(years);

        var data_yeared = {};

        years.forEach(function (y) {
            data_yeared[y] = [];
        })

        data.forEach(function (d) {
            data_yeared[d.year].push(d);
        })

        return data_yeared;
    },
    group_by_type: function (data) {
        var types = [];

        data.forEach(function (d) {
            if (types.indexOf(d.type) == -1) {
                types.push(d.types);
            }
        })
        types.sort();
        console.log(types);

        return data;
    },
    updateIntroProj: function () {
        $(".middle_background").animate({
            "opacity": 0
        }, 300, function () {
            $(".middle_background").css({
                "background-image": "url(img/intro_back/" + window.intro_index + "/" + window.index_chosen + ".jpg)",
            }).animate({
                "opacity": 1
            }, 300);
        })

        $("#indicator").css({
            "top": window.index_chosen / (window.pageNum-1) * 99.5 + "%"
        });
    },

    resizeIFrameToFitContent: function( obj ) {
        if(obj)
        obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';

    },
    expand_function:function(myid,motherselection){
            var iFrame = document.getElementById( myid );
            this.resizeIFrameToFitContent( iFrame );
            motherselection.css("height", $("#"+myid).height()+20);
    }



}
