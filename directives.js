/** directives
directives are JavaScript functions that manipulate and add behaviors to HTML DOM elements.

Directives Life Cycle
The directive lifecycle begins and ends within the AngularJS bootstrapping process, before the page is rendered. 

In a directive's life cycle, there are four distinct functions that can execute if they are defined. 
Each enables the developer to control and customize the directive at different points of the life cycle.
The four functions are: compile, controller, pre-link and post-Link.

The compile function allows the directive to manipulate the DOM before it is compiled and linked thereby allowing it to 
add/remove/change directives, as well as, add/remove/change other DOM elements.

The controller function facilitates directive communication. Sibling and child directives 
can request the controller of their siblings and parents to communicate information.

The pre-link function allows for private $scope manipulation before the post-link process begins.

The post-link method is the primary workhorse method of the directive.
**/
