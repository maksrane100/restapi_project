This article discusses how to create REST API using nodejs, mongoose, expressjs. 

Assumptions:
1) Node JS is installed
2) Mongo DB is installed

Following below instructions will allow to create REST API for two models namely User and Restaurant.

c:\>mkdir articles

c:\>cd articles

c:\articles>mkdir restapi

c:\articles>cd restapi

c:\articles\restapi>npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (restapi)
version: (1.0.0)
description:
entry point: (index.js)
test command:
git repository:
keywords:
author:
license: (ISC)
About to write to c:\articles\restapi\package.json:

{
  "name": "restapi",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}


Is this OK? (yes) yes

c:\articles\restapi>npm install express body-parser mongoose --save
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN restapi@1.0.0 No description
npm WARN restapi@1.0.0 No repository field.

+ express@4.16.3
+ mongoose@5.2.17
+ body-parser@1.18.3
added 84 packages from 61 contributors and audited 188 packages in 27.539s
found 0 vulnerabilities




c:\articles\restapi>dir
 Volume in drive C is Windows
 Volume Serial Number is CEB3-A542

 Directory of c:\articles\restapi

09/21/2018  10:35 PM    <DIR>          .
09/21/2018  10:35 PM    <DIR>          ..
09/21/2018  10:35 PM    <DIR>          node_modules
09/21/2018  10:35 PM            23,958 package-lock.json
09/21/2018  10:35 PM               310 package.json
               2 File(s)         24,268 bytes
               3 Dir(s)  378,203,181,056 bytes free
			   
			   
			   
To skip the Same-origin policy and access resources from remote hosts, enable Cross-origin resource sharing (CORS) as follows:			   
c:\articles\restapi>npm install cors --save
npm WARN restapi@1.0.0 No repository field.

+ cors@2.8.4
added 2 packages from 2 contributors and audited 191 packages in 2.168s
found 0 vulnerabilities



Start your mongodb locally as shown below:
c:\Program Files\MongoDB\Server\3.4\bin>mongod.exe --dbpath c:\data

Start your node server using following command:

	
c:\articles\restapi>node server.js
(node:12268) DeprecationWarning: current URL string parser is deprecated, and will be removed in a future version. To use the new parser, pass option { useNewUrlParser: true } to MongoClient.connect.
Server is running on Port:  4200

Access following URL to make sure your node server starts and you can see the following page:
http://localhost:4200/

Create mongoose model User in src/models as follows:

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
   
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
	gender: {
        type: String,
        enum: ["male", "female"]
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
	age: {
	  type: Number,
	  default: 0
	},
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
	address: {
			 address1: {
			  type: String,
			  default: ""
			},
			address2: {
			  type: String,
			  default: ""
			},
			city: {
			  type: String,
			  default: ""
			},
			state: {
			  type: String,
			  default: ""
			},
			zip: {
			  type: String,
			  default: ""
			},
			country: {
			  type: String,
			  default: ""
			}
		},
    createdAt: {
        type: Date,
		default: Date.now
    }
});


module.exports = mongoose.model('User', User);



Now we will implement the Router for the CRUD operation on User model.

We will add this userRoutes to server.js so that the request received at the endpoint /users will be routed to the userRoutes.

var userRouter = require('./src/routes/userRoutes');
app.use('/users', userRouter);
			   
Following screenshots show how to add user and get users from mongodb using Postman:



			   
We will add one more model called as Restaurant and a route for Restaurant called as restaurantRoutes to add API for Restaurant.			   
We will add this restaurantRoutes to server.js so that the request received at the endpoint /restaurants will be routed to the restaurantRoutes.
var restaurantRouter = require('./src/routes/restaurantRoutes');
app.use('/restaurants', restaurantRouter);