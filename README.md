## Chris Cook test submission
I tried to find a balance between working on this as a "real" project, and not overcomplicating the solution given the requirements and 3 hour suggested time limit. I tried to structure the project how I am typically used to. I've worked on some projects which prefer to group files by type, with things like `styles` and `tests` folders rather than grouping them in with the relevant components. I prefer to group everything related to a component within the component folder, it feels neater to me and means everything related to a component is self-contained.

I used the SpaceX query endpoint which returns 10 launches by default and allows `populate` parameters to be used to reduce API calls on the client side. If I had more time, a few improvements could certainly be made to make the application more well-rounded;
- Improved error handling and loading states. Given more time and in a "real" project scenario, I'd extend the current basic error handling to cater to specific error scenarios, missing date items etc, along with loading states to provide some sort of visual feedback for slower connections.
- I chose to keep the design very simple and utilised the styling provided by Next for the grid and cards, only making a few minor changes such as making sure content isn't cut off from cards at lower resolutions. Typically I would restructure this and utitilise things like variables to prevent magic numbers, store colour values in variables etc.
- Cypress could be used to automated UI testing, alongside the unit tests provided. This would be even more beneficial given more features/interactive elements, rather than just a grid of cards.
- Util for mocking child components in unit tests. I've heard mixed opinions on this and have worked on projects that do it, and projects that don't. When testing a component, I personally like to mock out any child components. To me it makes unit tests feel more self contained, means there is no knowledge of implementation details within the parent component. For example in this project, the LaunchGrid unit tests have knowledge of an element attribute within the LaunchCard component. In the past I've used Jest or Sinon to mock the child component and return a basic element, meaning that we can still test that components are rendered in the right place but without unit tests having knowledge of anything other than the component they're testing.
- Slightly more minor, but typically when working with dates I'd make use of moment.js however in this case it felt unnecessary as there was a single date string without requirements of how it should be displayed. When working more in-depth with dates, moment.js provides a lot of easy functionality to format them as needed


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Task to be completed
We would like you to clone this repository and amend the home page to display a list of Cards with the launches data retrieved from the spacex data API. You may take as long as you require to complete the solution to demonstrate your knowledge in creating a web application, however, we ideally would like this returned within 3 days.

Please consider the structure of your code and develop as if you were working in a commercial team environment and test the solution as you see fit.

The restful api that we would like you to use is https://api.spacexdata.com/v5/

You can find docs for this API here: https://github.com/r-spacex/SpaceX-API/tree/master/docs#rspacex-api-docs

Your solution should cover the following tasks:
- Make API request(s) on page load
- Display data top 10 items
- Provide some test coverage for your project

The data that we would like you to display are:
- `name`
- `date_utc`
- The first core serial/name from `cores`
- `id` and `type` from payloads
- display the image from `links.patch.small` in links
- use `success` and `failures` to show the user the success/failure of launch and reason of failure.
