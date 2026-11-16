var input =document.GetElementById('input_id');

var button =document.GetElementById('gtn_id');
var text =document.GetElementById('text_id');

button.onclick=function()
{
    if (input.value>30)
    {
        text.innerHTML="input value is grater than 18";
    }   
    else if{(input.vale<10)
       text.innerHTML="input value is les than 10"
    }
    else {
       text.innerHTML="input value is equal to 10"
    }
}