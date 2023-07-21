# Frutaria
A project to implement and practice concepts of react with redux!

# 1 A breve introduction about concepts that are use:
Here we have a fluxogram represented by image below: 

![Redux fluxgram](frutaria\Images\Redux.JPG)

Using redux all states are cetrilized on unique archive. 

 When the component needs to make any changes in the state or access data in the state, it triggers an action, which will be a simple function that will only request something the component needs.

 This action triggers the reducer, which functions like a filter (it checks which action was triggered) and it makes the alteration in the 'Store,' which is the center of information that receives and delivers what each component needs

  In this store, instead of each component managing its own state, all states are kept here (it is a JavaScript object that holds all states). After the alteration, the 'Store' informs the application component where it will update the rendering.

# Fruitaria Application 
This simple application consists of a list to add fruits to your list, below we have the "home" and how it turned out!

![Redux Application](Images\application.JPG)

# Deploy
The application can be used and test on link: 
https://frutaria-seven.vercel.app/
