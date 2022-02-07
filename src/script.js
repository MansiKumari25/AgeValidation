
function validate()
{
    let name=document.getElementById("name").value;
    let age=parseInt(document.getElementById("age").value);
    let weight=parseInt(document.getElementById("weight") .value);

    if(checkData(name, age, weight))
    {
        var result= "Hello "+name+"!!! "+checkAge(age, weight);
        display(result);
    }
    
}


function checkData(n, a, w)
{
    if(n==="" || isNaN(n)===false)
    {
        alert("Enter your name");
    }
    else if(isNaN(a) || a==="")
    {
        alert("Enter valid age number");
    }
    else if(isNaN(w) || w==="")
    {
        alert("Enter valid weight");
    }
    else{
        return true;
    }

}

function checkAge(age, weight)
{
    if(age >= 5 && age <= 7)
    {
        if(weight < 15)
        {
            return `Your weight is less than recommended value of 15 kg at an age of ${age}`;
        }
        else if(weight > 20 )
        {
            return `Your weight is more than recommended value of 20 kg at an age of ${age}`;
        }
        else{
            return `Your weight is perfect!`;
        }
    }
    else if(age >=8 && age <=10)
    {
        if(weight < 21)
        {
            return `Your weight is less than recommended value of 21 kg at an age of ${age}`;
        }
        else if(weight > 25 )
        {
            return `Your weight is more than recommended value of 25 kg at an age of ${age}`;
        }
        else{
            return `Your weight is perfect!`;
        }
    }
    else if(age >=15 && age <= 15)
    {
        if(weight < 26)
        {
            return `Your weight is less than recommended value of 26 kg at an age of ${age}`;
        }
        else if(weight > 30 )
        {
            return `Your weight is more than recommended value of 30 kg at an age of ${age}`;
        }
        else{
            return `Your weight is perfect!`;
        }
    }
    else if(age >= 16 && age <=20)
    {
        if(weight < 31)
        {
            return `Your weight is less than recommended value of 31 kg at an age of ${age}`;
        }
        else if(weight > 40 )
        {
            return `Your weight is more than recommended value of 40 kg at an age of ${age}`;
        }
        else{
            return `Your weight is perfect!`;
        }
    }
    else 
    {
        return "Out of range age";
    }
}

function display(output)
{
    document.getElementById("output").innerHTML=`<p>${output}</p>`;
}