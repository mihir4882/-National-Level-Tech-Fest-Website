$(document).ready(function(){

	$('#cluster-list .cluster').click(function(){
		$.each($('.cluster'),function(index,value){$(value).removeClass('active')});
		$(this).addClass(' active');
		$(".cluster-events").hide();
		$("#table_"+$(this)[0].id).show();
	})
        display_cluster();
});

function display_cluster()
{
    var path = location.pathname;
    var pathArray = location.pathname.split('/');
    pathArray = pathArray.filter(Boolean);
    if(pathArray[pathArray.length-1] == 'events')
	{
	$('#robovigyan').click();
	    return;
	    }

    var nodes = document.getElementById('all_table').childNodes;

    for(var i=0; i< nodes.length ; i++)
    {
	    if (nodes[i].nodeName.toLowerCase() == 'table') {
         nodes[i].style.display = "none";
     }
	    }

    $("#"+pathArray[pathArray.length-1]).click();
}

