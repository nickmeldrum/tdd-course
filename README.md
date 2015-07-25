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


