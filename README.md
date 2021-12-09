# Title
Project two - The Campfire

# Application Description
Teachers have the responsibililty to teach multiple groups of kids each year. To communicate with their students and share online materials for schoolwork they use online portals such as canvas to post the materials for each class period. Our application makes it so teachers can post materials for all of their students in one location instead of having to post in different locations. Teachers have the ability with this application to also leave a message underneath their post so that students can tell which class period the post is for. This application makes it faster for them to post materials which will give them more time for planning lessons. Having more time to plan lessons and make improvements will increase a teachers overall effectiveness in the classroom. Future reworking of the code will allow students to leave comments so that the teachers can get feeback on the material they assigned to the student.

# Application Organization
Backend:
The backend side of the application was organized with a database named automatic_potatoe. We split the information that was going to be put into the database into three different categories which were models User, Newsfeed, and Newupdate. The User model contained the username, email, and password a user would use to login into the website. The Newsfeed model contianed the information associated with posting an article or resource onto the website. The Newupdate model was the model that contained the information associated with the user leaving a comment on an article that was posted. A softwared called Insomnia was used to the test the routes that get information from the models. To put informaiton into our models we used a seeds folder which has preset information for each of the models and puts that information into the models wich the command npm run seeds. 

Frontend: 
We organized the front end by using handlebars for our html code. The handlbars we had for this application are our landing page, login page, and comment page. Our landing page is where a user will see all the articles and resources that have been posted to the application. Underneath the link to the articles or resource the users will see text that describes what the article or resource is about and has a link that leads the user to a page where they can leave comments on the article or resource that was posted. All of the posts are inside a single container. A navigation bar is at the top of the landing page with links that allow the user to login to the application or logout of the application. The login is setup with a container that has cards for the user to login or signup. The login card asks the user for their email and password. The signup card ask the user for their email, username, and password they will use for the application. Both the login and signup cards are inside a conatiner as well. Each of our pages has the background image of people gathered around a campfire because of the idea of having the resorces posted in one place where students and teachers can interact through the comments. Our styling was done with using a CSS stylesheet had been prepared before the backend side of the application was completed.

# 

#### Scope
The google app criteria – integrates with Google Classroom
Similar to a social media app

#### Bonus
 - Communicate over voice, or chat
 - Able to add a picture (drag and drop)
 - Post section (like a blog) like canvas
 - Can see announcements
 - View grades or upcoming assignments (node.js)
 - Separate link to chatroom (like our zoom link for class)
 - Separate access for both students and teachers

#### Design
 - Needs a login page
 - Login form (card) handlebars
 - Express for styling
 - Logout button
 - Homepage has a calendar, contact section, Newsfeed
 - Posting and commenting
 - Logout page

#### File structure
 - .gitignore
 - Server.js
 - Readme


Joshua- database, get, post (module 11, 12 13)

Jessica- Front end, HTML , CSS handlebars( module 14)

Michael- links from landing page to second page, structure (module 11)


## Wire Frame Idea

### Login
![Login](https://user-images.githubusercontent.com/82549162/127951688-53e411ac-c5bb-436c-845d-504bf51ae408.png)

### Logout
![Logout](https://user-images.githubusercontent.com/82549162/127951716-1e61bc1b-8eef-439e-bd3d-57235c0fa323.png)

### Homepage
![Homepage](https://user-images.githubusercontent.com/82549162/128582839-02885744-b222-4aaa-abb4-c1cbb8bc637c.png)


