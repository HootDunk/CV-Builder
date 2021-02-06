# CV Builder [Live](https://hootdunk.github.io/CV-Builder/)

My first React app.  I'd wanted to get away from using pop-up modals to get user input and instead have input fields that fit the app more intuitively.  React actually made this a lot simpler than I expected with conditional rendering based on components state. I’m really looking forward to using it on more projects. 

I tried out a few different implementations with each section of the resume.  The first section is made up of individual components.  Each component has its own state and is passed an initial value and class prop.  Conditional rendering handles the display.  If state.text is a blank string, then the initial value prop is rendered. If a user inputs a value then the state changes and state.text will be rendered instead of the initial value prop.

In the Education section, state is lifted up to the Education component.  This components holds an array of objects where each object maintains the education data for each entry. This way the number of entries is dynamic and supports any number of inputs from the education field.  The form component to edit an object in the Education array is implemented as an uncontrolled form.  I wanted to try an uncontrolled form as it seemed somewhat costly to iterate over the array and replace the matching objects fields for each key press.  For this project it wasn’t really necessary as the number of objects would always be small but for the future I figured it would be nice to know.

The Experience section is very similar to the Education section, however editing an object in the Experience component's state array is done so in a controlled way, with each change triggering an update of the state.  

I used this resource to get the basics of React down and really enjoyed it -> https://scrimba.com/learn/learnreact
If you’ve never used Scrimba it’s worth checking out just to try out their “interactive screencast” technology. 


