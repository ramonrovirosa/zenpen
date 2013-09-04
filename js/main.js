/**
 * Created with JetBrains WebStorm.
 * User: rrovirosa
 * Date: 9/4/13
 * Time: 2:03 PM
 * To change this template use File | Settings | File Templates.
 */

requirejs.config({
   shim: {
       'libs/mainLibs': ['libs/FileSaver.min','libs/fullScreen','libs/blob'],
       'main'    : ["utils","ui","editor", "libs/mainLibs"]
   }

});

require(["main"],function(){
    // Initiate ZenPen

    editor.init();
    ui.init();

});