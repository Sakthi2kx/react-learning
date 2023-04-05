props are immutable we should always notify parent the about the change and
its parents responsibility to make change on that prop

#Use State Hook
1.React updates state asynchronously
2.State is store outside of components in memory
3.hooks can only used at the top level of your component
i.e, we cannot use hooks inside if statemts, for loops and nested loops

#Best practices
Avoid redundant state variables
Group related variables inside an object
Avoid deeply nested structure when using objects

How to keep components pure?
Given the same input(props), always return the same result(JSX)
it helps in skiping the re-rendering of components
To achieve this keep changes out of the render phase

state objects are immutable

use the state hook only for values that change over time and their change 
require re-rendering our component