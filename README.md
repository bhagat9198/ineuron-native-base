### About the project
this project is designed to solve to solve the real world problem. 

## the problem
when we go at some restro or any other place. we need to wait for minimum 20-30mins for restro to prove us respective items which we have asked them. this totally defete the puropose of being with technology but not ueing it and it is total wastage to time.

## the solution
when we decide to go to any place, ordering before hand through app and letting the owner know beforehand so taht he can make arrangements in advance and dont let customer wait. 

## how it can achived ? 
thin can be achived by following ways:- <br />
- order the item(food particualrly) through app and also letting restro to know your arriving time (20min, 40min and so on...)
- once the user orders, restro will get to know in advance how many people will be coming to its place before hand and they can get some buffer time to make the arragements which can ve very vital
- once the user goes to the place, heshe can directly get there item which wasting much of the time.
- thus, benifical for both customer and owner.

## problems faced in this procedure!
- making sure item is givin to the current person and not to some other person - this will be rectified by qr code. as soon as user pays and order the item. and once owner has accepted, signed qr code will be generated at user end. this qr code will be having the details of user and its project which he/she asked. 
- on theother end, owner can scan that qr code and can authorize it. and hence both customer and owner can relie on it. Once the item is delivered, taht qr code will be null and void. Thus, no reapated useage.


### About the project (Tech):
It is made with expo cli and native base heavily.

## Structure of teh project:
- <strong>components  </strong> - it contains all the JSX elements which are reused in more than one element. Not containing much of teh logic, just element which are render ui and highy feixilble to use more than one case
- <strong>constants</strong> - ther are few literals which are which are hardcoded and just resides in one specfic directory. 
- <strong>store</strong> - it is the central storage of our app. Redux is being used to central storage mamnagement.
- <stong>views</strong> - it contains all the pages which app has. these contains the logic and combine differnt compoents together to form full webpage.
- <strong>App.js</strong> - entry file of the app.
- <strong>.env</strong> - hiding firebase creditioanls from public/hackers




