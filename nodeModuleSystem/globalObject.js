// Inside a browser we have window object which functions and variables are all available via window object
// Window object provides useful methods and functionalities :
// setTimeout, setInterval, clearInterval, alert and so on... 
// We can access them by prefixing them with window keyword it is not a must but if you want you can
// 
// In nodejs we don't have window object and it's methods, instead we have global object which provides a bunch of useful methods that are requited in backend-services
// each function or variable that we define in nodejs is not accessible via global object
// because multiple files may have same variable names or function names and then they would overwrite each other.
// that is why we have modularity in nodejs in which each file is a module and variables and functions defined inside is privet to the module itself.


console.log("this is the module ", module)
// module references to the current js file and has some useful methods