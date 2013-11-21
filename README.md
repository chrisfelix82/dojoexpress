dojoexpress
===========

A Node.js Express based server with Socket.io support.  It is based on dojo/node, and supports RESTful services.

OK so I was looking for a way to write client and server side code in the same language.  With Node.js and
Express, I was able to write client and server side Javascript - step 1 check.

One thing was still bothering me though.  I love the AMD style package structure that Dojo has implemented on the client,
and I wanted to write the same code on the server side.  Amazingly I found the following https://dojotoolkit.org/reference-guide/1.9/dojo/node.html - step 2 check.

Now I had the building blocks for dojoexpress!  Let's explore the project structure.

1. shared - This folder is accessible to both server and client side code.  Think of validation logic shared between client and sever - pretty cool stuff!
2. frontend - This folder is only accessible to HTML clients (e.g. browser).  Think of it as your WebContent folder in a traditional web app
3. backend - This folder is accessible only on the server.  Think of it as your backend.
4. js-lib - Add other js packages here.  For example, dijit, dojox etc. The dojo package in found under node_modules.  This folder is accessible to client and server.
5. app.js - bootstraps the app.  This file sets up the dojo/node environment and starts an Express server with socket.io support on port 3434

One thing that a backend needs is the ability to host RESTful services.  In a previous life I worked a lot with Java EE servers.
I assume that many of you have also come from that not so distant past, and are familiar with Apache Wink.  If not, no biggy.
All you need to know is that you define RESTful resources like so (see backend/rest/Message.js):

```
require(["dojo/_base/declare","backend/global"],function(declare,global){
	
	var path = "/rest/message";
	var app = global.app;
			
	app.get(path,function(req,resp){
		resp.json({name : "chris",last: "Felix"});
	});
	
	app.get(path + "/:id",function(req,resp){
		
		resp.json({name : "chris",last: "Felix",id: req.params.id});
	});
});

```

The above should look familiar if you work with Express. "backend/global" contains a pointer to the express server in "global.app".
See backend/server.js, where you have access to socket.io and the node sever itself:  

```
global.app = app;
global.server = server;
global.io = io;
```

The above code is cool, because you are able to split up your RESTful services (e.g. Express paths) into AMD modules.  Think about it, you can easily create a streaming socket.io version of
any of your services as well through the use of global.io.

Finally, like Apache Wink, you need to register your resources to be loaded on server startup.  To do this, you add the path to 
backend/rest/Resources.js.  For example:

```
require([
"backend/rest/Message",   
"backend/rest/User"
]);
```

So by now you probably want to fire things up for a test spin.  To do this:

1. Run node app.js
2. Go to http://localhost:3434
3. You will see Hello World! displayed.  This is coming from frontend/index.html. Congrats, you have tested file serving!
4. Go to http://localhost:3434/rest/message to test the GET message RESTful service.  You will see:

```
{
  "name": "chris",
  "last": "Felix"
}
```

Well that's about it.  Happy hacking!

## Licensing

This project is distributed by the Dojo Foundation and licensed under the ["New" BSD License](https://github.com/ibm-dojo/dcordova/blob/master/LICENSE).
All contributions require a [Dojo Foundation CLA](http://dojofoundation.org/about/claForm).
