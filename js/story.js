window.onload=function()  //executes when the page finishes loading
{
	setTimeout(func1, 1000);  //sets a timer which calls function func1 after 2,000 milliseconds = 2 secs.
    setTimeout(func2, 10000);
};

function func1()
{
	document.querySelector(".story").className+=" show";
    document.querySelector(".story ~ a").className+=" show";
}

function func2()
{
    document.querySelector(".story").classList.remove("show");
    document.querySelector(".story ~ a").classList.remove("show");
}


