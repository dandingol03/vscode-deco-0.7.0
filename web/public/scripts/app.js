/**
 * Created by danding on 16/7/3.
 */
window.Structor=new Object();
window.Adherent={};

/**
 * @description,this event bind to the element[id='faker-render'] in iframe
 */
window.Adherent.dispatchLiveValuesChange=function(group,payload)
{
     var iframe=$("#fake-render").children[0];
    var document=iframe.contentDocument;
    var obj=document.getElementById("root");
    //fit to advance web-browser such as firefox,chrome
    var event=document.createEvent('CustomEvent');
    event.initCustomEvent('liveValuesChange',false,true,{type:group,payload:payload});
    obj.dispatchEvent(event);
}

/**
 * @description,this event bind to the element[id='clipboard'] in iframe
 * @param component
 */
window.Structor.dispatchClipboardRenderEvent=function(component)
{
    var iframe=$("#desktop-page").children("iframe")[0];
    var document=iframe.contentDocument;
    var obj=document.getElementById("clipboard");
    //fit to advance web-browser such as firefox,chrome
    var event=document.createEvent('CustomEvent');
    event.initCustomEvent('clipboardRender',false,true,{component:component});
    obj.dispatchEvent(event);

}

/**
 * @description,this action notify the Dragged.jsx to render the dragged component
 */
window.Structor.dispatchRenderDraggedEvent=function(ob) {
    var iframe=$("#desktop-page").children("iframe")[0];
    var document=iframe.contentDocument;
    var obj=document.getElementById("drag");
    //fit to advance web-browser such as firefox,chrome
    var event=document.createEvent('CustomEvent');
    event.initCustomEvent('draggedRender',false,true,ob);
    obj.dispatchEvent(event);
};

/**
 * @description,this event bind to the export action in iframe
 *
 */
window.Structor.dispatchExportEvent=function(){
    let route={};
    let $ul=$("ul[class='dropdown-menu routes']");
    route.name=$("button[title='View page info']").children('span').text().trim();
    route.url=$ul.find('li a[data-name="'+route.name+'"]').attr('data-url');
    var iframe=$("#desktop-page").children("iframe")[0];
    var document=iframe.contentDocument;
    var obj=document.getElementById("export");
    //fit to advance web-browser such as firefox,chrome
    var event=document.createEvent('CustomEvent');
    event.initCustomEvent('export',false,true,{export:true,route:route});
    obj.dispatchEvent(event);
}

window.Structor.dispatchUrlChangedEvent=function(url){
    let route={};
    let $ul=$("ul[class='dropdown-menu routes']");
    route.name=$("button[title='View page info']").children('span').text().trim();
    route.url=url;
    var iframe=$("#desktop-page").children("iframe")[0];
    var document=iframe.contentDocument;
    var obj=document.getElementById("_url_change");
    //fit to advance web-browser such as firefox,chrome
    var event=document.createEvent('CustomEvent');
    event.initCustomEvent('__url__change',false,true,{route:route});
    obj.dispatchEvent(event);
}




window.Structor.dispatchConfigInPanelEvent=function(target){
    var iframe=$("#desktop-page").children("iframe")[0];
    var document=iframe.contentDocument;
    var obj=document.getElementById("_config");
    //fit to advance web-browser such as firefox,chrome
    var event=document.createEvent('CustomEvent');
    let re_modal=$(target).parent('div');
    let con=$(target).parent('div').children('.modal-content');
    let ob={};
    let ctrls=con.find('input[name!=""]');
    ctrls.map(function(i,ctrl) {
        let value='';
       if($(ctrl).val()=='')
       {
           if($(ctrl).attr('placeholder')!==undefined&&$(ctrl).attr('placeholder')!==null)
               value = $(ctrl).attr('placeholder');
       }
       else{
           value=$(ctrl).val();
       }
        ob[$(ctrl).attr('name')]=value;
    });
    if(re_modal.attr("data-row")!==undefined&&re_modal.attr("data-row")!==null)
    {
        ob["data-row"] = re_modal.attr("data-row");
        re_modal.removeAttr("data-row");
    }
    if(re_modal.attr("data-column")!==undefined&&re_modal.attr("data-column")!==null)
    {
        ob["data-column"] = re_modal.attr("data-column");
        re_modal.removeAttr("data-column");
    }

    window.Structor.remodal.clear(con);
    event.initCustomEvent('config',false,true,ob);
    obj.dispatchEvent(event);
}

/**
 * 打开组件对话框
 */
window.Structor.openComponentModal=function(){
    let con=$('#component-modal').find('.modal-content');

    window.Structor.queryHandle('GET','/get_components.do',null,null,function(response){
        if(response.re!=-1)
        {
            let select=$('select[name="components"]');
            let components=response.components;
            if(Object.prototype.toString.call(components)=='[object String]')
                components = JSON.parse(components);
            var options='';
            options+='<option value="" data-url="/">请选择</option>';
            components.map(function(com,i) {
                options+='<option value="'+com.name+'" data-url="'+com.url+'">'+com.name+'</option>';
            });
            select[0].innerHTML=options;
        }
        $('#component-modal').modal('show');
    });
}

window.Structor.componentsSelectChange=function(target){
    let index=target.selectedIndex;
    let op=$(target).children('option')[index];
    let url = $(op).attr('data-url');
    let name=$(op).text().trim();
    let con=$('#component-modal').find('.modal-content').children('.modal-body');
    con.find('input[name="name"]').val(name);
    con.find('input[name="url"]').val(url);
}


/**
 * 创建自定义组件
 */
window.Structor.createNewComponentEvent=function(target){
    let con=$(target).parent('div').parent('.modal-content').children('.modal-body');
    let name=con.find('input[name="name"]').val();
    let url=con.find('input[name="url"]').val();
    var iframe=$("#desktop-page").children("iframe")[0];
    var document=iframe.contentDocument;
    var obj=document.getElementById("_url_change");
    var event=document.createEvent('CustomEvent');
    if(url==''||url=='/')
        url = 'blank';
    let route={name:name,url:url,navigator:'/get_render_page.do/edit_component/'+name+'/'+url};
    event.initCustomEvent('__url__change',false,true,{route:route});
    obj.dispatchEvent(event);

    $('#component-modal').modal('hide');
    $('.component-selected').text(name);
}
