Codemanship TDD intensive course
================================

  what is tdd

  simple iterative process 3 key steps

   * write a failing test - this is your specification - it is here to define what the product should do, not whether it's working - that's a side benefit
  * write a code to pass the test as quickly as possible because we always want working code - too far into the red light and you have pain and unshippable code 
 * refactor to remove duplication mainly, and other code smells too

do this in a micro-iteration
keep going until you can't think of any more failing tests

up front design is good - do just enough!

but THOU SHALT NOT WRITE A LINE OF CODE WITHOUT A FAILING TEST THAT COVERS IT

More TDD Basics:
----------------
Write assertion first and work backwards
run the test to ensure it fails in the way you expect it to
write meaningful tests that are self-explanatory
test shoud only have one reason to fail
 may have more than 1 assertion, but should test 1 thing
triangulate through concrete examples towards general solutions
simplest generalisation - not simplest thing - so think of looking for the pattern/ algorithm instead of hardcoding values/ adding if statements


Example 2:

Fibonacci

wriute some code to generate the fibonacci sequence up to a specific length which is no shorter than 8 numbers and no longer than 50.

transformation priority premise - look up - triangulation practice



Full design procedure:

start with use story - as a video library member...
go talk to the story creator - the video library member and create the acceptance tests:

given when then...

get specific with values in given - then we have something we can use as a test - as it has test data in it

look for the ands in the thens... - this is the number of things our design has to do

write the do things out in the passive voice
rewrite in the active voice - stating WHO should be doing these things

this gives us our objects
write CRC cards for each object writing what the object KNOWS and what it DOES on the left of the card
write the other objects it collaborates with on the rightr of the card - this is the objects that it TELLS to do sometihhgn...

this is the essence now of your object design!

