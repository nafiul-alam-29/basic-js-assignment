// write a program to find out is the file script is js file or not

function isJavaScriptFile(filename){

    
    const extension = filename.split('.').pop(); // find out the extention
    
    if(extension ==='js')  //cheacking file extention
    {
        return true;
    }
    else
    {
        return false;
    }

}

// passing the filename
const isFileTypeJs = isJavaScriptFile('image.js.png');
console.log(isFileTypeJs);

