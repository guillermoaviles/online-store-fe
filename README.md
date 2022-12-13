# Project 3 - Dealio - Online Store App (Front-end)
<div align="center">A online store app by <strong>Guillermo Aviles</strong>, <strong>Hiram Rodriguez</strong>, and <strong>Nghia (Nathan) Vo</strong>
<br></br>
<img src="https://i.imgur.com/Kl67sLX.gif"/>
</div>

## Project Overview

The online store app would be the place where the users can freely buy any available items on the sites, sell an item by creating a new post, add a review/comment to an existing item. The app give the users the freedom to buy and sell without paying any fees or restrictions.

+ This repository is the front-end respository for the app.
+ The backend is deployed on Heroky: [here](https://online-store.herokuapp.com/api/online-store/)
+ The front end is deployed on Vercel: [here](https://online-store-fe-3vpd-b12pu7004-guillermoaviles.vercel.app/)
+ The associated front end repository can be found: [here](https://github.com/guillermoaviles/online-store-fe)

## Deployment
The front-end of our application uses ReactJS as our library. The front-end follows the best practice in naming the components to be semantic. The front-end composes the following technologies/platforms:

### Vercel:
Vercel is the most accessible platform to deploy websites. By connecting the ** your GitHub repository** to Vercel, you can simply deploy the main branch to Vercel domains — and it does all the heavy lifting for you. **(Julian Wallis)**

<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" width=10% height=10%><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" width=10% height=10%> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" width=10% height=10%><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" width=10% height=10%>
- Axios

## Wireframes
### Before
<div align="center">
<img src="https://media.git.generalassemb.ly/user/45455/files/b3d3114b-01f7-4d97-8d95-1f6aac2a14ec"/>
</div>

### After
<div align="center">TBD
</div>

## React Component Hierarchy
### Before
<div align="center">
<img src="https://user-images.githubusercontent.com/114704720/206966901-599ce162-ff7c-4d52-bd07-8b6338ae1cc8.png"/>
</div>


### After
<div align="center">
<img src="https://user-images.githubusercontent.com/114704720/206969375-d5fccfd9-90c2-4ca9-b93f-45694715bc19.png"/>
</div>


## MVP
+ AAU, I want to be able to see a list of items that are available for sell.
+ AAU, I want to be able to sell an item by create a new listing.
+ AAU, I want to be able to update information on an item. 
+ AAU, I want to be able to buy the item and then the item wil be deleted.
+ AAU, I want to be able to see a list of reviews of an item if it is available.
+ AAU, I want to be able to add a review to an item.
+ AAU, I want to be able to delete a comment.

## Post MVP

## Project Management
The team followed the daily SCRUM protocols and met for a 5 to 10 minutes a day to discuss small wins, achievements, any blockers, unresolved issues, obstacles that we were encountering. We also met before the day end to discuss any working plans and small goals for the next days.As for the Git workflow, we follow the *'Feature Branch'* method where we have the inital code set-up in the main branch. Everyone who is working will branch out to dev branch to work and push up the code accordingly. Guillermo, who is our Git Manager, then reviewed the latest code with the team to validate the code. He then will submit a pull request and merged that PR to the dev branch. Once our code met MVP, he then merge code to main branch for deployment to Heroku. The team was committed to collabrate creatively and equally. We tried to be mindful of that and divided the work so that everyone at least working on something on both backend and front end.

<div align="center">
<img src="https://user-images.githubusercontent.com/114704720/206955919-a8dbd9d1-3a2c-4e1d-bb16-b626883ce46c.png"/>
</div>

## Code Snippet

## Issues & Resolutions
We were having an issue on submitting an comment and the request was not coming through. We tested the request with Postman and it worked as expected. So we narrowed it down to our codes. I looked over many times, added console.log to check every inputs were received correctly and still did not know why it did not work. Then I realized, in the axios call, I forgot the second argument in the code hence we were sending an empty body everytime. I realized that I skipped over the code because my brain assumed that the information was supposed to be there. But when you are reviewing someone's code, you have to read it carefully. DO NOT SKIP!

```
const addNewComment = async (e) => {
  try {
        e.preventDefault()
        const newlyCreatedCmt = await axios.post(`https://online-store.herokuapp.com/api/online-store/newComment/${commentId}`, newComment)
        navigate(`/description/${commentId}`)
  }
  catch(err){
    console.log(err)
  }
}
```
We did not have the 'newComment' before and it worked after we added.

## Resources:

+ [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
+ [Inline HTML](https://stackoverflow.com/questions/12090472/how-do-i-center-an-image-in-the-readme-md-file-on-github)
+ [Jullian Wallis - What Is VERCEL? Is It The Right Platform For Front-End Developers?](https://webo.digital/blog/what-is-vercel-is-it-the-right-platform-for-front-end-developers/)
+ [Whimsical - Used for the Req-Res Diagram](https://whimsical.com)
+ [ESlint](https://stackoverflow.com/questions/41604162/eslint-throws-is-assigned-a-value-but-never-used-webpack-module)
+ [useEffect Hook missing dependencies](https://bobbyhadz.com/blog/react-hook-useeffect-has-missing-dependency)
+ [Validate form before submit fix](https://stephencharlesweiss.com/form-validation-prevent-default-and-on-submit-vs-on-click)
+ [Only number in input field](https://www.geeksforgeeks.org/how-to-force-input-field-to-enter-numbers-only-using-javascript/#:~:text=By%20default%2C%20HTML%205%20input,numeric%20keyboard%20on%20mobile%20devices.)
