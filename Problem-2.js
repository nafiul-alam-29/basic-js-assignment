// write a program to find out is the file script is js file or not

function isJavaScriptFile(filename){

    
    const extension = filename.split('.').pop(); // find out the extention
    
    if(extension ==='js')  //condition for cheacking extention
    {
        return true;
    }
    else
    {
        return false;
    }

}


const isFileTypeJs = isJavaScriptFile('image.js.png');
console.log(isFileTypeJs);

