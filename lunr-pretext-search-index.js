var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-2",
  "level": "1",
  "url": "frontmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  My Website   copyright  "
},
{
  "id": "sage-browser",
  "level": "1",
  "url": "sage-browser.html",
  "type": "Section",
  "number": "1.1",
  "title": "Run Sage in the browser",
  "body": " Run Sage in the browser  The easiest way to get started is by running SageMath online. However, if you do not have reliable internet, you can also install the software locally on your own computer. Begin your journey with SageMath by following these steps:    Navigate to the SageMath website   Click on Sage on CoCalc    Create a CoCalc account   Go to Your Projects on CoCalc and create a new project.  Start your new project and create a new worksheet. Choose the SageMath Worksheet option.   Enter SageMath code into the worksheet. Try to evaluate a simple expression and use the worksheet like a calculator. Execute the code by clicking Run or using the shortcut Shift + Enter . We'll learn more ways to run code in the next section.   Save your worksheet as a PDF for your records.  To learn more about SageMath worksheets, refer to the documentation   Alternatively, you can run Sage code in a Jupyter Notebook for some additional features.  If you are feeling adventurous, you can install Sage and run it locally on your own computer. Keep in mind that a local install will be the most involved way to run Sage code.    "
},
{
  "id": "about-sage",
  "level": "1",
  "url": "about-sage.html",
  "type": "Section",
  "number": "1.2",
  "title": "Intro to Sage",
  "body": " Intro to Sage  Fell free to copy and paste the code snippets we provide and run them in your own Sage Worksheet or Jupyter Notebook . You can also edit the code and run the cells directly from this page. All the cells on the same page share the same memory, so be sure to run them in order. Sage integrates various open-source mathematics software packages. Sage shares many features and syntax with python.  Let's do some math   Lets ask sage what type of object this is.   Sage let us know 1 + 1 returns an Integer .      What is an object ? Almost everything in Sage and Python for that matter is an object! More specifically an object is an instance of a class .  A class provides a template or blueprint for creating objects and defines the attributes (properties) and methods (behaviors) that those objects can have.  This might not mean too much right now and it will be more clear as we explore what is known as object-oriented programming. Just know that SageMath has different ways of representing and working with data. We can create an object by typing something into our Sage Worksheet or the cells on this page.   Dot notation is a feature in object-oriented programming. Here is an example of dot notation. There are many more examples of this in Sage. Dot notation is used to access attributes and methods of an object. We can also pass in arguments to this method to specify the number of digits we want to round to.   Sage supports different ways of accomplishing the same task.   In the following example there is no need to evaluate an approximation of sqrt(2) * log(3) . Sage will retain the symbolic value for accuracy.   We can also display mathematical notation   Let's introduce some more types and classes!   Look like this returns True . This is an example of a boolean value.    Lists : Ordered mutable collections of items. If an object is mutable, the value can be changed after it is created.    Tuples : Ordered, immutable collections. If an object is immutable, the value cannot be changed after it is created.    Dictionaries : Collections of key-value pairs.    Strings : Sequence of characters used for text. You can use single or double quotes.   "
},
{
  "id": "about-sage-5",
  "level": "2",
  "url": "about-sage.html#about-sage-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "object "
},
{
  "id": "about-sage-12",
  "level": "2",
  "url": "about-sage.html#about-sage-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "object class "
},
{
  "id": "about-sage-13",
  "level": "2",
  "url": "about-sage.html#about-sage-13",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "attributes methods "
},
{
  "id": "about-sage-14",
  "level": "2",
  "url": "about-sage.html#about-sage-14",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "object-oriented "
},
{
  "id": "about-sage-15",
  "level": "2",
  "url": "about-sage.html#about-sage-15",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Dot notation "
},
{
  "id": "about-sage-25",
  "level": "2",
  "url": "about-sage.html#about-sage-25",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "boolean "
},
{
  "id": "about-sage-27",
  "level": "2",
  "url": "about-sage.html#about-sage-27",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Lists "
},
{
  "id": "about-sage-29",
  "level": "2",
  "url": "about-sage.html#about-sage-29",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Tuples "
},
{
  "id": "about-sage-31",
  "level": "2",
  "url": "about-sage.html#about-sage-31",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Dictionaries "
},
{
  "id": "about-sage-33",
  "level": "2",
  "url": "about-sage.html#about-sage-33",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Strings "
},
{
  "id": "debugging",
  "level": "1",
  "url": "debugging.html",
  "type": "Section",
  "number": "1.3",
  "title": "Debugging",
  "body": " Debugging  When you learn how to program you will make many mistakes. This will always be part of the process. Please try your best to get comfortable with making mistakes and experimenting. Over time you will learn to recognize how to correct these mistakes quicker. Reading error messages is an essential element of programming. Sometimes error messages are helpful and descriptive. Other times they will seem confusing and will become more clear over time and with practice. Let's make some mistakes together!   Why didn't this print Hello to the screen? Sage told us we have a SyntaxError . In this case we are not too concerned with the meaning of invalid decimal literal . The problem is with how we named our variable. It turns out there are rules about naming identifiers.  Rules for naming identifiers in Python:   Identifiers cannot start with a digit.    Identifiers are case-sensitive    Identifiers can include   letters ( a - z , A - Z )    digits ( 0 - 9 )    underscore character _        Do not use spaces, punctuation or special characters when naming identifiers    Keywords cannot be used as identifiers.     Let's use an acceptable identifier to name our variable.   Here are some more keywords that cannot be used for variable names   False , None , True , and , as , assert , async , await , break , class , continue , def , del , elif , else , except , finally , for , from , global , if , import , in , is , lambda , nonlocal , not , or , pass , raise , return , try , while , with , yield .  Here is another error:   It looks like we have a NameError . We also know that Hello is not defined. In this case Sage thinks that Hello is a variable because there are no parenthesis around it.   You have have noticed, sometimes we use Print() to display output and sometimes we do not. Other times we need to use multiple print statements.    It looks like Sage is only showing the value of the last line of code. If we want to print both of these strings we will need two print statements.   Did you expect these words to be on the same line? Let's investigate what Print() does.   It turns out Print() adds a new line after printing. Lets get the output we want on a single line.    "
},
{
  "id": "documentation",
  "level": "1",
  "url": "documentation.html",
  "type": "Section",
  "number": "1.4",
  "title": "Documentation",
  "body": " Documentation  Sage can do many more mathematical operations. If you want an idea of what Sage can do, check out the Quick Reference Card and the Reference Manual .  The tutorial is an overview to become familiar with Sage.  The Sage documentation can be found at this link. Right now, reading the documentation is optional. We will do our best to get you up and running with Sage with this text.  "
},
{
  "id": "creating-sets",
  "level": "1",
  "url": "creating-sets.html",
  "type": "Section",
  "number": "2.1",
  "title": "Creating Sets",
  "body": " Creating Sets   Sage Math Set  We can create a set by inserting a list within a Set() function. We create a list with square brackets []    It looks like Sage has its own class for sets.  Also notice when we print the set, the elements are ordered and the duplicates are ignored.    Since Sage Sets remove duplicates, the two sets are equal. A single equal sign = and double equal sign == have different meanings.  The equality operator  == is used to ask Sage if two values are the same. Sage compares the values on each side of the operator and returns the boolean value, True if they are equal, and False if they are not.  The assignment operator  = is used to assign a value to a variable. The value on the right side of the operator is assigned to the variable on the left side.  If you are familiar with Python, you may have used a Python set with a lower case s . Even though Sage supports Python sets, we will be using Sage Sets for the added features. Be sure to define Sets() with an upper case S     Set Builder Notation  Instead of explicitly listing the elements of a set, we can use a set builder notation to define a set. The set builder notation is a way to define a set by describing the properties of its elements.   Here we are introducing a new programming concept iteration. Iteration is a way to repeat a block of code multiple times and can be used to automate repetitive tasks. We could have created the same set by typing evens = Set([2, 4, 6, 8, 10]) . Imagine if we wanted to create a set of even numbers between 1 and 100. It would be much easier to use iteration.     Subsets  Assume we have a Set A = {1, 2, 3, 4, 5}, to list all the subsets included in this set, we can use the Subsets() and list() functions.    "
},
{
  "id": "subsec-Ways-to-create-a-set-9",
  "level": "2",
  "url": "creating-sets.html#subsec-Ways-to-create-a-set-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "equality operator "
},
{
  "id": "subsec-Ways-to-create-a-set-10",
  "level": "2",
  "url": "creating-sets.html#subsec-Ways-to-create-a-set-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "assignment operator "
},
{
  "id": "cardinality",
  "level": "1",
  "url": "cardinality.html",
  "type": "Section",
  "number": "2.2",
  "title": "Cardinality",
  "body": " Cardinality  To find the cardinality of a set, we use the cardinality() function.   Tips!  In social networks like Facebook or Twitter, cardinality can represent the number of friends or followers a user has. Understanding the cardinality of social connections can help in personalization, targeted advertising, and studying social influence.    Alternatively, we can also use the len() function, built into Python. Instead of returning a Sage Integer , this will return a Python int .   In many cases, using Sage classes and functions will provide more functionality.    "
},
{
  "id": "sec-operation-on-sets",
  "level": "1",
  "url": "sec-operation-on-sets.html",
  "type": "Section",
  "number": "2.3",
  "title": "Operations on Sets",
  "body": " Operations on Sets    Set Membership Check  SageMath allows you to easily check whether a certain number or subset is a part of a set. You can use the in operator to check membership, which returns True if the element is in the set and False otherwise.  Let's consider Set A = {1, 2, 3, 4, 5}. We can check if the number 3 is in set A:   Tips!  For organizations such as clubs, gyms, or online subscription services, set membership checks can be used to validate if a user is a member or subscriber. This can help control access to facilities or content.    Similarly, we can check if the subset {3, 4, 5, 6} is a part of set A:      Set Union  There are two distinct methods available in Sage for calculating unions. An advantage inherent in utilizing the union() method lies in its capability to accept an arbitrary number of sets as parameters. This means you can find the intersection of more than two sets in a single call.  Suppose Set A = {1, 2, 3, 4, 5}, Set B = {3, 4, 5, 6}, and Set C = {4, 5, 6}. We can use the union() function here.   Tips!  This operation can be visualized in real-world scenarios such as merging two distinct music playlists into one. In this case, any song that appears in both playlists will only be listed once in the merged playlist.    Alternatively, we can also use the | operator to perform the union operation.      Set Intersection  Similar to union, there are two methods of using the intersection function in sage.  Suppose Set A = {1, 2, 3, 4, 5}, Set B = {3, 4, 5, 6}, and Set C = {4, 5, 6}. We can use the intersection() function here.   Tips!  A practical application of set intersection could be finding common members between two different social media groups. Members who belong to both groups represent the intersection of these groups.    Alternatively, we can also use the & operator to perform the intersection operation.      Set Difference  We have two methods to solve for difference as well.  Suppose Set A = {1, 2, 3, 4, 5}, Set B = {3, 4, 5, 6}, and Set C = {4, 5, 6}. We can use the difference() function here.   Tips!  In a real-life context, this can be seen as identifying items on a restaurant menu (Set A) that you have not yet tried (Set B), with A - B representing the new dishes to explore.    Alternatively, we can also use the - operator to perform the difference operation.      Set Complement  Assume the universal set U = {1, 2, 3, 4, 5, 6, 7, 8, 9} and Set A = {1, 2, 3, 4, 5}. We can use the difference() function here.   Tips!  This is analogous to having a list of all possible ice cream flavors (U) and identifying those flavors you have yet to try (A').    Alternatively, we can also use the - operator as well.      Cartesian Product of Sets  Suppose Set A = {1, 2, 3, 4, 5} and Set D = {x, y}. We can use the cartesian_product() and list() functions here.   Tips!  This concept can be applied in situations like determining all possible combinations of two different sets, such as shirt colors and pants styles in a wardrobe.     "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
