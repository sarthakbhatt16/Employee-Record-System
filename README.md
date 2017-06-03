# Employee-record-system (MongoDb, Angular, Express, Node)
Descriptive Guide TO MEAN Stack app Development

# Demo
 # https://employee-record-system.herokuapp.com/#/

**Coursework Designed For UMBC, IS Departmet. **

# Preview:
we will make a simple application and try to implement some CRUD (Create, Read, Update, Delete) functionalities into it with the help above mentioned technologies.

We will make an employee record system, in which we can insert the details of employee, update the details and delete them. Also, we can retrieve the list of all the employees we have stored in the database.

Let us understand the structure of our application:
	Installing necessary programs.
	Creating a folder with necessary packages.
	Creating front end angular development.
	Creating angular route, partials and controllers.
	Creating node server.
	Creating mongoose schema.
	Creating express API’s to play with user data.
	Creating HTML views.

** you will be required to have any of the IDE or text editor to write the codes for this application. For this guide, Visual studio was used to write the codes **
 # How to run the application in local host
    1. Download Node in your system.
    2. Open cmd and run 'npm install' -- this will install the npde package manager into your system.
    3. Run npm install -g express
    4. Run npm install -g body-parser.
    5. Run npm install -g mongoose.
    6. Another command terminal and run 'mongod' -- this will start the mongo database server.
    7. Open Command prompt and run "node server.js".
    8. Open http://localhost:3000 **
    
 # Introduction
Full stack development comprises of front-end library to ensure data-binding and views or to build up for client side, 
database in the back to store the data, a middle ware to help process interact with each other and finally a server. 
The stack we will be using to create a web application in this course is MEAN stack. Where ‘M’ stands for MongoDb, ‘E’ for 
Express.js and ‘A’ and ‘N’ for Angular.js and Node.js respectively.
In MEAN stack, Angular.js being the client side makes AJAX calls to Express.js which in turn responds in JSON format. 
Express which runs on Node.js server further communicates with MongoDB as persistent medium.                        
	
# Overview

Before we start developing the web application, it’s good to delve into the individual technologies that sum up for MEAN stack to get a
better hands-on learning of it.
Starting with the front-end part, Angular.js plays the backbone for creating the client side controls of web browser. Let’s discuss 
more about it:
Angular JS: Angular JS is an open source framework powered by google, which helps us build dynamic web applications. To make your code 
much shorter and clear, Angular JS comes with pre-built libraries for solving the purpose of data binding and dependency injection m
aking the overall length of code shorter. Not only it has ease the dynamicity of web application, but also all its functions are
executed within the browser making it more server friendly. 
Instead of building a language which focuses more in scripting browser’s behavior, Angular JS comes with another approach to bridge 
the gap between static and dynamic functionalities of a simple html page. For this it sets up a whole new way to 
communicate with browser and load it with newly formed syntax. The main core features of Angular JS which does this set up are: 

o	Model View Whatever:	
Rather than following MVC (Model view and controller), which is a basic design pattern for any application and divides the application into different parts, each with definite and distinguishable property, in its conventional manner, Angular JS follows another approach which is much like model-view-viewmodel and hence the developer called it as Model-view-whatever.


o	Data – Binding:	
It is the automatic synchronization of data between model and view components.

o	Services:	
AngularJS services are substitutable objects that are wired together using dependency injection (DI). You can use services to organize and share code across your app.


o	Directives:	In simple words, they are the instruction or set of instructions given to or called in Angular JS to manipulate a piece of the DOM(Document object-model).

o	Controller:	
JavaScript functions bound to a particular scope in  the DOM.

o	Dependency Injection:	Rather than creating an object inside a function, you pass it to the function. Likewise AngularJS comes with several pre built services which is injected in controller as dependencies. 

Setting Up Environment: You need to get some libraries installed in your system before you can use AngularJS in your web application. Steps below will explain how angular can be downloaded to make it usable for applications.
•	Open link “ https://angularjs.org/ ”, and click on “Download AngularJS”.
•	You will see the modal, providing you with various options to include Angular JS in your application.
 

•	Clicking on download will download the file named “angular.min.js”. It is just the minified version of “angular.js”. Save this file in the same folder of your web application.
•	CDN: CDN (Content Delivery Network) loads and delivers all the web content and web pages from regional data centers to the user based in the specific geographic location of that center. Including CDN as a script source of your Angular JS benefits the application in several ways like: Referring to Google’s CDN service will prevent user from downloading the angular.js file in their system if your computer is the host for your application, also increased parallelism may decrease the sever load and efficient and fast loading of web page.
•	Bower & NPM: Bower and NPM (Node package Manager) are the package components of several package manager of Client Side Javascript.
Model View and Controller: So, here we need concept, we have data on one side and html page on another and we want to connect to those things. We want whatever happen on one should get affected on other and vice versa. Suppose, we have a model (the thing that defines data for our system) which also the brain of our system in which all the business logic is written and a view (In which our HTML code rests). 
 
Controller sets the communication between Model and view. The Idea behind introducing controller in this architecture is that it implements the separation of concern, meaning it separate the user interface with the business logic written so that anything that has been updated in model will automatically updated in HTML by controller without manually changing it in the view and vice versa. Also, the controller responds to  
There exist one more framework on the similar concept but a slight change in controller’s idea, also known as Model-view-viewmodel. Angular is designed in a way in which it inherits the property of both the models to get the best features in its architecture, and so it actually do not have the exact property of controller from MVC and hence the developers called it as Model-view- Whatever (MV*). 
Directives: AngularJS directives are used to extend HTML. These are special attributes starting with ng- prefix. 
•	ng-app − This directive starts an AngularJS Application 
It helps the model to look for html page. A model is, where all the logic, functions and controllers rest.
 

It seems Angular.js plays a vital role in bringing front-end of the application into some good actions. Once we get done with the dynamic front-end of our application, it’s time we learn about some server side technologies starting off with express.js, node.js and mongoDB.
Express.js: Express.js is a light-weight node.js based web application framework. This JavaScript framework provides several flexible and useful features to develop mobile as well as web application using NodeJS.
Following are some of the core features of Express framework -
	Set up middlewares to respond to HTTP/RESTful Requests.
	It is possible to defines a routing table to perform different HTTP operations.
	Dynamically renders HTML Pages based on passing arguments to templates.
	Provides all the feature provides by core Node.js.
	Express prepare a thin layer; therefore, the performance is adequate.
	Organize the web application into an MVC architecture.
	Manages everything from routes to rendering view and preforming HTTP request

Node.js: According to Nodejs.org, Nodejs is a JavaScript runtime or platform which has been built on Chrome v8’s JavaScript engine. This has become the most fast growing and popular platform for building fast and scalable network applications. With the command ‘node’ it starts the google chrome v8 engine and that enables the network to be accessible.
Therefore, it is possible to access the file in the machine or to listen to the network traffic which is not possible using generic JavaScript. Therefore, any action which is possible to perform using ruby on rails or php, now it is possible to perform using JavaScript using Nodejs. Due to the extensively fast growing community and NPM, Nodejs is a very popular open source and cross platform application in order to develop server side and networking applications.
Following are some of the core features of Node.js framework – 

	Event driven application
	Non-blocking, I/O Model
	Web applications are more lightweight and efficient.
	Public package repository, npm.
	Asynchronous application development
	Applications are single threaded.
	High Performance
	Single threaded but easily scalable.
CREATING THE APPLICATION

Now, when we have the overview of all the technologies in MEAN stack, we must try to make a simple application and try to implement some CRUD (Create, Read, Update, Delete) functionalities into it with the help above mentioned technologies.

We will make an employee record system, in which we can insert the details of employee, update the details and delete them. Also, we can retrieve the list of all the employees we have stored in the database.

Let us understand the structure of our application:
	Installing necessary programs.
	Creating a folder with necessary packages.
	Creating front end angular development.
	Creating angular route, partials and controllers.
	Creating node server.
	Creating mongoose schema.
	Creating express API’s to play with user data.
	Creating HTML views.

** you will be required to have any of the IDE or text editor to write the codes for this application. For this guide, Visual studio was used to write the codes **

Starting with Back-end

**(If you already have node and mongo in your system, proceed with the next section) Ensure that you have node and mongo installed in your system. If not follow the steps described below to have them running into your system. **

  Installing Node.js

  Installing MongoDb

Once you have it in your system running, make a folder named MEAN app in your system.
Now we require all the libraries and packages, required to include them into our application to make it run.

Step 1: open the command prompt for the same folder and write npm install.
This command will install the node packager manager and you can see the folder named node_modules in your root.
Step 2: In the same command window write npm init, it will create the package.json file in your root folder and it will have all the details for your application regarding all of the node packages and version of all of the technologies that has been used, also it keeps the track of all of the technologies you use and gets updated automatically every time you install any package through npm.

 
Step 3: Installing the necessary packages in our system through npm. Write the following commands to install the required packages for our application.
npm install express --save // installs the express.js package 
npm install body-parser –save // installs body-parser package to parse http request to JSON format.
npm install mongoose –save // installs mongoose requires to create mongoDB schema
Step 4: Create a new file and name it as server.js
This file is responsible for making backend of our application. It has schema for data that will get stored in the database through APIs. Also, it has all the APIs which ensures CRUD functions in our server and it has the node server which runs the application on one of your web ports in system.
	Call all the packages that we installed in step 3 to use them in our file.
	var express = require('express');
	var bodyParser = require('body-parser');
	var app = express();
	var mongoose = require('mongoose');
	mongoose.connect('mongodb://localhost/employees');

	Creating mongoose schema for our database

var Employee = mongoose.model('Employee', mongoose.Schema({
    name:String,
    dept:String,
    area:String,
    status:String,
    contact:String,
    salary:String
}));

	Including Body Parser to parse all the data from http requests to JSON format , also some of the form data is sent through urlencoded service, hence we use body-parser to parse both types of data in JSON format.

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/client'));

	CREATING RESTFUL APIs
In the same file we create our Restful APIs, before we start to write, we need to define the endpoint (or data) we want to expose
For example endpoints such as:

/api/contacts (It will expose the details of all employees)
Method	Description
GET	Find all contacts
POST	Create a new contact


Format for writing such APIs is:
1.	app.get(“/api/contacts” function (req, res){
         })

2.	app.post(“/api/contacts” function (req, res){
          })




/api/contacts/:id (It will expose the detail of specific employee with the given id)
Method	Description
GET	Find a single contact by ID
PUT	Update entire contact document
DELETE	Delete a contact by ID













Format for writing Such APIs:
1.	app.get(“/api/contacts/:id” function (req, res){
         })

2.	app.put(“/api/contacts/:id” function (req, res){
         })

3.	app.delete(“/api/contacts/:id” function (req, res){
         })

Step 5:  Now, we have the rules and syntax of writing APIs, let us write the API for getting all the employees from database
app.get('/api/employees', function(req, res){
    Employee.find(function(err, employees){
        if(err)
            res.send(err);
        res.json(employees);
    });
});


To add a new employee in the database:
app.post('/api/employees', function(req, res){
    Employee.create( req.body, function(err, employees){
        if(err)
            res.send(err);
        res.json(employees);
    });
});

To find a single employee by id:

app.get('/api/employees/:id', function(req, res){
    Employee.findOne({_id:req.params.id}, function(err, employee){
        if(err)
            res.send(err);
        res.json(employee);
    });
});

To update the employee’s information:
app.put('/api/employees/:id', function(req, res){
    var query = {
        name:req.body.name,
        dept:req.body.dept,
        area:req.body.area,
        status:req.body.status,
        contact:req.body.contact,
        salary:req.body.salary
    };
    Employee.findOneAndUpdate({_id:req.params.id}, query, function(err, employee){
        if(err)
            res.send(err);
        res.json(employee);
    });
});




And, to delete the employee:
app.delete('/api/employees/:id', function(req, res){
    Employee.findOneAndRemove({_id:req.params.id}, function(err, employee){
        if(err)
            res.send(err);
        res.json(employee);
    });
});

Once we have all the functionalities written on server side, it is ready to get hosted on one of our system port and to provide our sever with a port to start we write
app.listen(3000, function(){
    console.log('server is running on port 3000..');
    });

So now we have server running on port 3000.

This was all about server.js file. Nest we will proceed with our front end part.

STARTING WITH FRONT-END
Step 1:  create a folder name client in your root folder. And make the files as shown in the picture below.
 
Controller.js:  This file has all the controllers and javascript functions to control the behavior of web page. Also it has all the HTTP request to send data and generate view from server.
App.js: Since we are making a single page application and we don't want any page refreshes, we'll use Angular's routing capabilities.
Let's look in our Angular file and add to our application. We will be using $routeProvider in Angular to handle our routing. This way, Angular will handle all of the magic required to go get a new file and inject it into our layout.
Index.html: It has 	the main layout for our application.
Other HTML pages in template folder, is separate view of screen we have in our app and it will be injected in our index.html through routing.
Step 1: Creating index.html
Including ng-app in the header, binds our html with angular modules and controllers.
<!DOCTYPE html>
<html lang="en" ng-app="myApp"> 
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>MEAN CRUD</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link href="style.css" rel="stylesheet">
</head>
<body>

<div class="container">
    <div class="row">
        <div class="header clearfix">
            <nav>
              <ul class="nav nav-pills pull-right">
                <li role="presentation" class="active"><a href="#/employees"><span class="glyphicon glyphicon-th-list"> </span> Employee List</a></li>
                <li role="presentation"><a href="#/employees/create"> 
                <span class="glyphicon glyphicon-plus"> </span> Add New Employee</a></li>
              </ul>
            </nav>
            <h3 class="text-muted">Simple MEAN web Application using CRUD op
eration</h3>

//WE use ng-view to inject different pages in index.html through routing.

        </div>
        <div ng-view></div>
        
        <footer class="footer well well-sm">
            <p>© Sarthak Bhatt</p>
        </footer>

    </div>
</div>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.8/angular-route.min.js"></script>
<script src="app.js"></script>
<script src="controllers/controllers.js"></script>

</body>
</html>

Step 2: Create app .js file. In this we will use $routeProvider  in angular to handle all our routing.  This way angular will handle all the action required to get a new file and inject it into our layout.
Var myApp = angular.module(‘myApp’, [‘ngRoute’]);
The [‘ngRoute’] is the dependency here that we will be calling in our app.js file. These are pre-built modules resting in angular.js file which we include in our script section in index.html. 
Once we have dependency injected in our module we use it in a function to handle all of the actions. So. Whenever $routeprovider.when is used, it will look for the template url to bring the new page data along with its controller and place it in ng-view section of index.html.


var myApp = angular.module('myApp',['ngRoute']);
myApp.config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl:'templates/list.html',
            controller:'empController'
        })
        .when('/employees', {
            templateUrl:'templates/list.html',
            controller:'empController'
        })
        .when('/employees/create', {
            templateUrl:'templates/add.html',
            controller:'empController'
        })
        .when('/employees/:id/edit', {
            templateUrl:'templates/edit.html',
            controller:'empController'
        })
        .when('/employees/:id/show', {
            templateUrl:'templates/show.html',
            controller:'empController'
        });
});


Step 3:   Let’s add controller, In order to make our http requests to the server.
	Declare the name of the controller, in our case we named it as ‘empController’ and inject the dependencies that will be required to bring some action in out html pages.
	The dependencies we use here are [$scope, $route, $routeParams, $http] .
myApp.controller('empController',function($scope,$route,$routeParams,$http){
 
making a request to get all of the employees from server to list.
$scope.getEmployees = function(){
        $http.get('/api/employees/').then(function(response){
            $scope.employees = response.data;
        });
    };


Show employee:
$scope.showEmployee = function(){
        var id = $routeParams.id;
        $http.get('/api/employees/'+ id).then(function(response){
            $scope.employee = response.data;
        });
    };

Add employee:
$scope.addEmployee = function(){
        //var id = $routeParams.id;
        $http.post('/api/employees/', $scope.employee).then(function(response){
            //$scope.employee = response.data;
            window.location.href = '/';
        });
    };

Update employee: 
$scope.updateEmployee = function(){
        var id = $routeParams.id;
        $http.put('/api/employees/'+ id , $scope.employee).then(function(response){
            //$scope.employee = response.data;
            window.location.href = '/';
        });
    };

Delete Employee:
    $scope.deleteEmployee = function(id){
        var id = id;
        $http.delete('/api/employees/'+ id).then(function(response){
            $route.reload();
        });
    };
    
});

Step 4: Adding html pages
	Add.html
<div class="panel panel-default">
  <div class="panel-heading">
    <p class="panel-title"><span style="color:#5bc0de;" class="glyphicon glyphicon-plus"> </span> Add New Employee</p>
  </div>
  <div class="panel-body">
    <form ng-submit="addEmployee()">
    <div class="form-group">
      <label for="name">Name:</label>
      <input type="text" class="form-control" id="name" ng-model="employee.name">
    </div>
    <div class="form-group">
      <label for="dept">Department:</label>
      <input type="text" class="form-control" id="dept" ng-model="employee.dept">
    </div>
    <div class="form-group">
      <label for="area">Location:</label>
      <input type="text" class="form-control" id="area" ng-model="employee.area">
    </div>
    <div class="form-group">
      <label for="contact">Contact No. :</label>
      <input type="text" class="form-control" id="contact" ng-model="employee.contact">
      <div class="form-group">
      <label for="status">Job Status :</label>
      <input type="text" class="form-control" id="status" ng-model="employee.status">
      <div class="form-group">
      <label for="salary">Salary :</label>
      <input type="text" class="form-control" id="salary" ng-model="employee.salary">
    </div>
    <button type="submit" style="color:#5bc0de;" class="btn btn-default">Save</button>
    <a href="#/employees" class="btn btn-default"> Cancel</a>
</form>   
    <div>
<div>

Add html layout:
 




	Edit.html

<div class="panel panel-default" ng-init="showEmployee()">
  <div class="panel-heading">
    <p class="panel-title"><span style="color:#5bc0de;" 
class="glyphicon glyphicon-edit"> </span> Edit Employee</p>
  </div>
  <div class="panel-body">
    <form ng-submit="updateEmployee()">
    <div class="form-group">
      <label for="name">Name:</label>
      <input type="text" class="form-control" id="name" ng-model="employee.name" value="employee.name">
    </div>
    <div class="form-group">
      <label for="dept">Department:</label>
      <input type="text" class="form-control" id="dept" ng-model="employee.dept" value="employee.dept">
    </div>
    <div class="form-group">
      <label for="area">Location:</label>
      <input type="text" class="form-control" id="area" ng-model="employee.area" value="employee.area">
    </div>
    <div class="form-group">
      <label for="contact">Contact No. :</label>
      <input type="text" class="form-control" id="contact" ng-model="employee.contact" value="employee.contact">
      <div class="form-group">
      <label for="status">Job Status :</label>
      <input type="text" class="form-control" id="status" ng-model="employee.status" value="employee.status">
      <div class="form-group">
      <label for="salary">Salary :</label>
      <input type="text" class="form-control" id="salary" ng-model="employee.salary" value="employee.salary">
    </div>
    <button type="submit" style="color:#5bc0de;" class="btn btn-default">Update</button>
    <a href="#/employees" class="btn btn-default"> Cancel</a>
</form>   
    <div>
<div>


	Show.html

<div class="panel panel-default" ng-init="showEmployee()">
  <div class="panel-heading">
    <p class="panel-title"> Employee Detail Information</p>
  </div>
  <div class="panel-body">
    <form>
    <div class="form-group">
     <label class="form-control">Name: {{ employee.name }}</label>
     <label class="form-control">Department: {{ employee.dept }}</label>
     <label class="form-control">Location: {{ employee.area }}</label>
     <label class="form-control">Job Status: {{ employee.status }}</label>
     <label class="form-control">Contact: {{ employee.contact }}</label>
     <label class="form-control">Salary: {{ employee.salary }}</label>
     <label class="form-control">ID: {{ employee._id }}</label>
    <a href="#/employees" class="btn btn-default"> Cancel</a>
    </div>
  </form>   
    <div>
<div>

Show employee layout:
 
	List.html

<div class="panel panel-default" ng-init="getEmployees()">
  <div class="panel-heading">
    <p class="panel-title"><span style="color:#5bc0de;" 
class="glyphicon glyphicon-list"> </span> Employees List</p>
  </div>
  <div class="panel-body">
    <table class="table table-striped">
      <thead>
      <tr>
        <th>Name</th>
        <th>Department</th>
        <th>Location</th>
        <th>Actions</th>
      </tr>
      </thead>
      <tbody>
      <tr ng-repeat="employee in employees">
        <td>{{ employee.name }}</td>
        <td>{{ employee.dept }}</td>
        <td>{{ employee.area }}</td>
        <td> 
          <a href="#/employees/{{employee._id}}/show" class="btn btn-info"> Show  </a>
          <a href="#/employees/{{employee._id}}/edit" class="btn btn-success"><span class="glyphicon glyphicon-edit"> </span> Edit  </a>
          <a ng-click="deleteEmployee(employee._id)" class="btn btn-danger"><span class="glyphicon glyphicon-trash"> </span> Delete </a>
        </td>
      </tr>
      </tbody>
    </table>    
    <div>
<div>


List employees layout:
 




Starting application on Local host.
	Start mongo server by using mongod command in command prompt.
	Start app server by opening command prompt in root folder by using node server.js
	Open http://localhost:3000 to run the application.4




Conclusion
In this way, we complete our MEAN stack application with CRUD functionalities. It was done in two parts, first we created the server side scripting, in which it had schema for mongoDB handled by mongoose, APIs for exposing data and starting the server on one our local ports. In this, we hosted it on http://localhost:3000.
In the second part, we created the client-side view through angular.js, which was done with routing and ng-view to inject different files into index.html.
Also we had controllers written with injected dependencies to make request and send data to server through $http methods.
These all frameworks of javascripts are single threaded and generally follow asynchronous method and is easy to scale your website. MEAN stack can be easily created and deployed on servers, as most of them support javascript.

>>>>>>> origin/master
