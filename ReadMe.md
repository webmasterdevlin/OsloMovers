Assignment: Order placement system

Prerequisites
Visual Studio (Or other IDE), SQL Server (or other database suited for the task)
Maximum time allowed 
No limit

You are free to structure the project as you like. During the technical interview we will be looking at your decision making (architecture, design, etc), technical implementation, and how you go about to solve a given problem.
?
Description of assignment

Your solution should be extendable by request from the customer (The moving company) and should be ready for production usage. 
Create an application that a sales consultant working at a moving company will use to place / find / edit / delete orders on behalf of customers.
The company that the sales consultant works at offers these services for their customers:
-Moving
-Packing
-Cleaning

When placing an order, the sales consultant will need the following information from the customer:
-Name
-Phone number
-Email
-Address he’s moving from
-Address he’s moving to
-What service they are ordering
-Date for when the service is to be carried out
-A text field where the sales consultant can add a note to the order, for example: “the customer won’t be available till 12 pm)

Create an application that satisfies the following user stories.
User Stories:
 



Exercise 1 – Service API
2) Write a separate HTTP Web API that does the business logic.
Requirements: C#/Web API (WCF is okay but not preferred). SQL Server with Entity Framework is preferred as the data layer.

Exercise 2 – Web or mobile
Write a web or mobile application (whichever skills you would like to show us) that satisfies the user stories. This application will do http calls to the API in exercise 1.
Requirements: 
•	If you go for a web application: Use a Web framework: (React or Angular preferred, and you can add any other js library too if needed). You can build the application on top of Asp.Net MVC or Java Spring Boot if you like.
•	If you go for a mobile application: Mobile framework: (Xamarin preferred, other frameworks or native is also okay)



