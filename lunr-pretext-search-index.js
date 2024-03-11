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
  "id": "about-sage",
  "level": "1",
  "url": "about-sage.html",
  "type": "Section",
  "number": "1.1",
  "title": "Intro to Sage",
  "body": " Intro to Sage  You can run and edit the Sage code directly in the SageMathCells embedded in this webpage. All the cells on the same page share the same memory. Be sure to run the cells in order. If you run the cells on a given page out of order, you may get unexpected results.  Before we get started with discrete math, let's see how we can use Sage as a calculator. Here are the basic arithmetic operators:    Addition: +     Subtraction: -     Multiplication: *     Exponentiation: ** , or ^     Division: \/     Integer division: \/\/     Modulo: %              "
},
{
  "id": "displaying",
  "level": "1",
  "url": "displaying.html",
  "type": "Section",
  "number": "1.2",
  "title": "Display Values",
  "body": " Display Values  Sage offers various ways to display values to the screen. The simplest way is to just type the value into a cell and Sage will display it. Sage also has functions to display values to the screen.      print() displays the value of the expression inside the parentheses to the screen.     pretty_print() displays rich text.     show() is an alias for pretty_print() .     latex() produces the raw latex code for the expression inside the parentheses. You can paste this code into a latex document to display the expression.     Sage will display the value of the last line of code in a cell.    print() outputs a similar result without the quotes.   View mathematical notation with rich text.   If we want to display values from multiple lines of code, we can use multiple functions to display the values.   "
},
{
  "id": "OOP",
  "level": "1",
  "url": "OOP.html",
  "type": "Section",
  "number": "1.3",
  "title": "Object Oriented Programming",
  "body": " Object Oriented Programming   Object-Oriented Programming (OOP) is a programming paradigm that mirrors the world as a collection of objects that interact with each other. An object can be used to model almost anything. More specifically, an object is an instance of a class .  Classes are like blueprints and define the attributes and methods of the objects they create. An attribute is a characteristic or property. A method is a function associated with an object that can perform actions on it or related to it.  Lets use these new terms to describe the following example.   In python and Sage, when we type a variable name, we are referring to an object. We initialize the object by assigning it a value. In this case, the object is a list of vowels.   Sage let us know vowels is an instance of the class list . By assigning a series of characters enclosed in square brackets to the variable vowels , we create a list object. This object, vowels, now represents a list of vowels, and we can interact with it using various methods.   Dot notation is a syntax used to access an object's attributes and methods. The list class has methods and attributes that we can use to interact with the list object. For example, we can use the append method to add an element to the list.   A parameter is a variable that is passed to a method when it is called. In this case, the parameter is the string 'y' . The append method adds the string 'y' to the end of the list. The list class has many more methods and attributes that we can use to interact with the list object. While list is a built-in Python class, Sage offers many more classes that are specialized for mathematical applications. For example, in the next chapter we will learn about the Sage Set class. Objects instantiated from the Set class have methods and attributes that are useful for working with sets.   While this concept might seem abstract at first, it becomes clearer as we dive deeper into Sage. We will learn how Sage utilizes OOP principles and built-in classes, offering a structured way to represent data and perform powerful mathematical operations.  "
},
{
  "id": "OOP-2",
  "level": "2",
  "url": "OOP.html#OOP-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Object-Oriented Programming class "
},
{
  "id": "OOP-3",
  "level": "2",
  "url": "OOP.html#OOP-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "attributes methods "
},
{
  "id": "OOP-9",
  "level": "2",
  "url": "OOP.html#OOP-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Dot notation "
},
{
  "id": "OOP-11",
  "level": "2",
  "url": "OOP.html#OOP-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "parameter "
},
{
  "id": "data-types",
  "level": "1",
  "url": "data-types.html",
  "type": "Section",
  "number": "1.4",
  "title": "Data Types",
  "body": " Data Types  Sage has many different classes of objects. Sage is built on top of Python, so it has all the data types that Python has. Sage also has its own classes that are well suited for mathematical computations. Let's ask sage what type of object this is.    2 is represented by an object which is an instance of the Integer class. Sage has many classes for different types of numbers and mathematical objects.  In the following example Sage does not evaluate an approximation of sqrt(2) * log(3) . Sage will retain the symbolic value.    String : Sequence of characters used for text. You can use single or double quotes.    Boolean : The type bool can be one of two values, True or False .    List : Mutable collection of items within a pair of square brackets [] . If an object is mutable, the value can be changed after it is created.   Lists are indexed starting at 0 . Here we access the first element of a list by asking for the value at index zero.   Lists have many helpful methods.    Tuple : Immutable collection within a pair of parenthesis () . If an object is immutable, the value cannot be changed after it is created.    set : Collection of unique items within a pair of curly braces {} . set() with lowercase s is built into Python. Every item in a set is unique.    Set is a built-in Sage class. Set with a capital S have added functionality for mathematical operations.   We define the set in a list with square brackets [] . The set is then created with the Set() function.    Dictionary : Collection of key-value pairs.   The pprint module may be used to print the dictionary in a more readable format.   "
},
{
  "id": "data-types-4",
  "level": "2",
  "url": "data-types.html#data-types-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Integer "
},
{
  "id": "data-types-5",
  "level": "2",
  "url": "data-types.html#data-types-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "symbolic "
},
{
  "id": "data-types-7",
  "level": "2",
  "url": "data-types.html#data-types-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "String "
},
{
  "id": "data-types-9",
  "level": "2",
  "url": "data-types.html#data-types-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Boolean "
},
{
  "id": "data-types-11",
  "level": "2",
  "url": "data-types.html#data-types-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "List "
},
{
  "id": "data-types-17",
  "level": "2",
  "url": "data-types.html#data-types-17",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Tuple "
},
{
  "id": "data-types-19",
  "level": "2",
  "url": "data-types.html#data-types-19",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "set "
},
{
  "id": "data-types-21",
  "level": "2",
  "url": "data-types.html#data-types-21",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Set "
},
{
  "id": "data-types-25",
  "level": "2",
  "url": "data-types.html#data-types-25",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Dictionary "
},
{
  "id": "iteration",
  "level": "1",
  "url": "iteration.html",
  "type": "Section",
  "number": "1.5",
  "title": "Iteration",
  "body": " Iteration  Iteration is used to create loops that allow a program to repeat a sequence of instructions until a certain condition is met. In a for loop, the loop variable is assigned a value from a sequence, and the body of the loop is executed once for each value.     Lists are often used in iteration. Here is an example of list comprehension, which is a concise way to create lists.   "
},
{
  "id": "debugging",
  "level": "1",
  "url": "debugging.html",
  "type": "Section",
  "number": "1.6",
  "title": "Debugging",
  "body": " Debugging  When you learn how to program you will make many mistakes. This will always be part of the process. Please try your best to get comfortable with making mistakes and experimenting. Over time you will learn to recognize how to correct these mistakes quicker. Reading error messages is an essential element of programming. Sometimes error messages are helpful and descriptive. Other times they will seem confusing and will become more clear over time and with practice. Let's make some mistakes together!   Why didn't this print Hello, World! to the screen? Sage told us we have a SyntaxError . In this case we are not too concerned with the meaning of invalid decimal literal . The problem is with how we named our variable. It turns out there are rules about naming identifiers.  Rules for naming identifiers in Python:   Identifiers cannot start with a digit.    Identifiers are case-sensitive.    Identifiers can include:   letters ( a - z , A - Z )    digits ( 0 - 9 )    underscore character _        Do not use spaces, punctuation or special characters when naming identifiers.    Keywords cannot be used as identifiers.     Let's use an acceptable identifier to name our variable.   Here are some more keywords that cannot be used for variable names   False , None , True , and , as , assert , async , await , break , class , continue , def , del , elif , else , except , finally , for , from , global , if , import , in , is , lambda , nonlocal , not , or , pass , raise , return , try , while , with , yield .  Here is another error:   It looks like we have a NameError because Hi is not defined. In this case Sage thinks that Hi is a variable because there are no quotes around it. Let's make it a string by adding quotes around it.   Alternately, we could have kept Hi without quotes to use it as a variable and assign a value to it.   "
},
{
  "id": "documentation",
  "level": "1",
  "url": "documentation.html",
  "type": "Section",
  "number": "1.7",
  "title": "Documentation",
  "body": " Documentation  Sage can do many more mathematical operations. If you want an idea of what Sage can do, check out the Quick Reference Card and the Reference Manual .  The tutorial is an overview to become familiar with Sage.  The Sage documentation can be found at this link. Right now, reading the documentation is optional. We will do our best to get you up and running with Sage with this text.  You can quickly reference Sage documentation with the ? operator. You may also view the source code with the ?? operator.      "
},
{
  "id": "sage-browser",
  "level": "1",
  "url": "sage-browser.html",
  "type": "Section",
  "number": "1.8",
  "title": "Run Sage in the browser",
  "body": " Run Sage in the browser  The easiest way to get started is by running SageMath online. However, if you do not have reliable internet, you can also install the software locally on your own computer. Begin your journey with SageMath by following these steps:    Navigate to the SageMath website   Click on Sage on CoCalc    Create a CoCalc account   Go to Your Projects on CoCalc and create a new project.  Start your new project and create a new worksheet. Choose the SageMath Worksheet option.   Enter SageMath code into the worksheet. Try to evaluate a simple expression and use the worksheet like a calculator. Execute the code by clicking Run or using the shortcut Shift + Enter . We'll learn more ways to run code in the next section.   Save your worksheet as a PDF for your records.  To learn more about SageMath worksheets, refer to the documentation   Alternatively, you can run Sage code in a Jupyter Notebook for some additional features.  If you are feeling adventurous, you can install Sage and run it locally on your own computer. Keep in mind that a local install will be the most involved way to run Sage code.    "
},
{
  "id": "creating-sets",
  "level": "1",
  "url": "creating-sets.html",
  "type": "Section",
  "number": "2.1",
  "title": "Creating Sets",
  "body": " Creating Sets   Sage Math Set  To construct a set, encase the elements within square brackets [] . Then, pass this list as an argument to the Set() function. It's important to note that the S in Set() should be uppercase to define a Sage set. In a set, each element is unique.   We can ask Sage to compare two sets to see if they are equal or not. We can use the == operator to compare two values. A single equal sign = and double equal sign == have different meanings.  The equality operator  == is used to ask Sage if two values are the same. Sage compares the values on each side of the operator and returns the Boolean value. The == operator returns True if the sets are equal and False if they are not equal.  The assignment operator  = is used to assign a value to a variable. The value on the right side of the operator is assigned to the variable on the left side.   If you are familiar with Python, you may have used a Python set with a lower case s . Even though Sage supports Python sets, we will be using Sage Set for the added features. Be sure to define Set() with an upper case S .    Set Builder Notation  Instead of explicitly listing the elements of a set, we can use a set builder notation to define a set. The set builder notation is a way to define a set by describing the properties of its elements.   Iteration is a way to repeat a block of code multiple times and can be used to automate repetitive tasks. We could have created the same set by typing C = Set([2, 4, 6, 8, 10]) . Imagine if we wanted to create a set of even numbers between 1 and 100. It would be much easier to use iteration.     Subsets  To list all the subsets included in a set, we can use the Subsets() function and then use the Set() function to display the set of subsets.      Set Membership Check  Sage allows you to easily check whether a certain element belongs to a set. You can use the in operator to check membership, which returns True if the element is in the set and False otherwise.  Let's consider . We can check if the number 3 is in set :   Tips!  For organizations such as clubs, gyms, or online subscription services, set membership checks can be used to validate if a user is a member or subscriber. This can help control access to facilities or content.    We also can check if is a subset of by using the Subsets function to generate a set with all the subsets of . Then we use the in operator to check whether belongs to the set of subsets of .    "
},
{
  "id": "subsec-Ways-to-create-a-set-5",
  "level": "2",
  "url": "creating-sets.html#subsec-Ways-to-create-a-set-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "equality operator "
},
{
  "id": "subsec-Ways-to-create-a-set-6",
  "level": "2",
  "url": "creating-sets.html#subsec-Ways-to-create-a-set-6",
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
  "body": " Cardinality  To find the cardinality of a set, we use the cardinality() function.   Tips!  In social networks like Facebook or Twitter, cardinality can represent the number of friends or followers a user has. Understanding the cardinality of social connections can help in personalization, targeted advertising, and studying social influence.    Alternatively, we can also use the len() function, built into Python. Instead of returning a Sage Integer , this will return a Python int .   In many cases, using Sage classes and functions will provide more functionality. In the following example, cardinality() gives us a valid output while len() does not.    "
},
{
  "id": "sec-operation-on-sets",
  "level": "1",
  "url": "sec-operation-on-sets.html",
  "type": "Section",
  "number": "2.3",
  "title": "Operations on Sets",
  "body": " Operations on Sets    Union of Sets  There are two distinct methods available in Sage for calculating unions.  Suppose and . We can use the union() function to calculate .   Tips!  This operation can be visualized in real-world scenarios such as merging two distinct music playlists into one. In this case, any song that appears in both playlists will only be listed once in the merged playlist.    Alternatively, we can also use the | operator to perform the union operation.      Intersection of Sets  Similar to union, there are two methods of using the intersection function in Sage.  Suppose and . We can use the intersection() function to calculate .   Tips!  A practical application of set intersection could be finding common members between two different social media groups. Members who belong to both groups represent the intersection of these groups.    Alternatively, we can also use the & operator to perform the intersection operation.      Difference of Sets  We have two methods to solve for difference as well.  Suppose and . We can use the difference() function to calculate the difference between 2 sets.   Tips!  In a real-life context, this can be seen as identifying items on a restaurant menu (set A) that you have not yet tried (set B), with A - B representing the new dishes to explore.    Alternatively, we can also use the - operator to perform the difference operation.      Multiple Sets  For doing operations involving multiple sets, we can repeat the operations to get our results, let us see an example.  Suppose , and . To find the union of all three sets, we will repeat the union() function.   Alternatively, we can also repeat the | operator to perform the union operation.   Similar operations can also be done using the intersection() and difference() functions as well as their operators.     Complement of Sets  Let be the universal set. Given the set . We can use the difference() function to find the complement of .   Tips!  This is analogous to having a list of all possible ice cream flavors (U) and identifying those flavors you have yet to try (A').    Alternatively, we can also use the - operator as well.      Cartesian Product of Sets  Suppose and . We can use the cartesian_product() and Set() functions to display the Cartesian product .   Tips!  This concept can be applied in situations like determining all possible combinations of two different sets, such as shirt colors and pants styles in a wardrobe.    Alternatively, we can use the . notation to find the Cartesian product.      Power Set of Sets  The power set of a set is the set of all subsets of , including the empty set and itself. This Sage code defines a set and uses the powerset() function to generate all subsets of . The list() function is then used to convert the power set iterator into a list.   Tips!  Exploring the power set of a set can be particularly useful in fields such as combinatorics, probability theory, and computer science, where understanding the relationships between subsets of a given set is crucial.     "
},
{
  "id": "sec-combinatorics",
  "level": "1",
  "url": "sec-combinatorics.html",
  "type": "Section",
  "number": "3.1",
  "title": "Combinatorics",
  "body": " Combinatorics    Factorial Function  The factorial of a non-negative integer , denoted by , is the product of all positive integers less than or equal to . In Sage, the factorial() function computes this value, which is essential in permutations and combinations calculations.   Tips!  Factorials are widely used in probability problems, such as determining the number of possible ways a set of items can be arranged.   For example, to compute the factorial of 5:      Combinations  The combination is an unordered selection of objects from a set of objects.   Tips!  Combinations are useful in scenarios like determining the number of possible committees that can be formed from a larger group.   For instance, to calculate the number of ways to choose 3 elements from a set of 5:   Another method would be using the binomial() function.      Permutations  A permutation is an ordered selection of objects from a set of objects.   Tips!  Understanding permutations can help solve problems like scheduling where the order of tasks or events matters.   To calculate the permutation of a set with 3 elements, we use the Permutations() and the cardinality() functions.   To display the set of permutations with 3 elements, we use the Permutations() function and the use the Set() function for output.   When , we can calculate permutations of elements:   Similarly, we can also show the sets of permutations:   We can also specify the elements:   In the code above, we specified the elements to be 'a', 'b' and 'c'.   "
},
{
  "id": "sec-logical-operation",
  "level": "1",
  "url": "sec-logical-operation.html",
  "type": "Section",
  "number": "4.1",
  "title": "Logical Operators",
  "body": " Logical Operators   In Sage, logical operations such as AND & , OR | , NOT ~ , conditional -> , and biconditional <-> play crucial roles in constructing and evaluating logical expressions.    Operator  Symbol  Mathematical Notation    AND  &     OR  |     NOT  ~     Conditional  ->     Biconditional  <->        Boolean Formula  Sage's propcalc.formula() function allows for the creation of Boolean formulas using variables and logical operators. We can then use show function to display the mathematical notations.   Tips!  Logical operations can model decision-making processes in programming, such as determining whether a set of conditions are met before executing a particular block of code.     "
},
{
  "id": "sec-truth-table",
  "level": "1",
  "url": "sec-truth-table.html",
  "type": "Section",
  "number": "4.2",
  "title": "Truth Tables",
  "body": " Truth Tables   The truthtable() function in Sage generates the truth table for a given logical expression.   Tips!  Constructing truth tables is a practical method for debugging complex logical conditions in software development, ensuring all scenarios are accounted for.    An alternative way to display the table with better separation and visuals would be to use SymbolicLogic() , statement() , truthtable() and the print_table() functions.    SymbolicLogic() creates an instance for handling symbolic logic operations, while statement() defines the given statement. The truthtable() method generates a truth table for this statement, and print_table() displays it.   Expanding on the concept of truth tables, we can analyze logical expressions involving three variables. This provides a deeper understanding of the interplay between multiple conditions. The truthtable() function accommodates expressions with any reasonable number of variables.   Tips!  Truth tables for three variables are particularly useful in the study of digital circuits and Boolean algebra, where each variable represents a different input or condition.    "
},
{
  "id": "sec-tautology",
  "level": "1",
  "url": "sec-tautology.html",
  "type": "Section",
  "number": "4.3",
  "title": "Analyzing Logical Equivalences",
  "body": " Analyzing Logical Equivalences    Equivalent Statements  By comparing the truth tables, we can ascertain if two logical statements are equivalent, meaning they have identical truth values for all possible inputs.   Tips!  This approach is invaluable in simplifying logical expressions in computer algorithms and understanding proofs in mathematical logic.       Tautologies  A tautology is a logical statement that is always true. The is_tautology() function checks whether a given logical expression is a tautology.   Tips!  Understanding tautologies is essential in computer science, particularly in optimizing algorithms and validating logical propositions in software verification. It's also fundamental in mathematical proof strategies, such as proof by contradiction.       Contradictions  In contrast to tautologies, contradictions are statements that are always false.   Tips!  Analyzing the relationship between tautologies and contradictions can aid in the development of critical thinking skills, important for debugging in programming, constructing mathematical proofs, and designing logical circuits.     "
},
{
  "id": "intro-relations",
  "level": "1",
  "url": "intro-relations.html",
  "type": "Section",
  "number": "5.1",
  "title": "Introduction to Relations",
  "body": " Introduction to Relations  A relation  from set to set is any subset of the Cartesian product , indicating that . We can ask Sage to decide if is a relation from to . First construct . Then build the set of all subsets of . Finally ask if is a subset of .  Recall, the Cartesian product consists of all possible ordered pairs , where and . Each pair combines an element from set with an element from set .  In this example, an element in the set relates to an element in if the element from is twice the element from .   Let's use relations to explore matching items of clothes. Let's define two sets, jackets and shirts, as examples:      The Cartesian product of jackets and shirts includes all possible combinations of jackets with shirts.   Since the Cartesian product returns all the possible combinations, some jackets and shirts will clash. Let's create a relation from jackets to shirts based on matching the items of clothing.   "
},
{
  "id": "intro-relations-2",
  "level": "2",
  "url": "intro-relations.html#intro-relations-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "relation "
},
{
  "id": "relations-on-a-set",
  "level": "1",
  "url": "relations-on-a-set.html",
  "type": "Section",
  "number": "5.2",
  "title": "Relations on a set",
  "body": " Relations on a set  When we refer to the relation as a relation on  .  Consider the set . Let's define a relation on such that iff ( divides ). The relation can be represented by the set of ordered pairs where the first element divides the second:   "
},
{
  "id": "relations-on-a-set-2",
  "level": "2",
  "url": "relations-on-a-set.html#relations-on-a-set-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "on "
},
{
  "id": "digraphs",
  "level": "1",
  "url": "digraphs.html",
  "type": "Section",
  "number": "5.3",
  "title": "Digraphs",
  "body": " Digraphs  A digraph, or directed graph, is a visual representation of a relation on the set . Every element in set is shown as a node (vertex). An arrow from the node to the node represents the pair on the relation .   We can add a title to the digraph with the name parameter.   If the digraph does not contain a relation from a node to itself, we can omit the loops=true parameter. If we happen to forgot to include the parameter when we need to, Sage will give us a descriptive error message.   We can also define the digraph using pair notion for relations.   Alternatively, we can define the digraph directly. The element on the left of the : is a node. The node relates to the elements in the list on the right of the : .   "
},
{
  "id": "properties",
  "level": "1",
  "url": "properties.html",
  "type": "Section",
  "number": "5.4",
  "title": "Properties",
  "body": " Properties   A relation on may satisfy certain properties:    Reflexive :      Symmetric :      Antisymmetric :      Transitive :      Sage is open-source and many people work on the software for free, when they can find the available time. While Sage has many built-in methods, in some cases, we may need to define our own functions to check for certain properties. When you see the def keyword, it means that we are defining a function. The function is a block of code that only runs when it is called. If you would like to reuse the functions defined in this section, you can copy and paste the function definitions into your own Sage worksheet. For methods built into Sage, you can use them directly, without including the definitions. If you feel inspired, try contributing to the official Sage project.    Reflexive  A relation is reflexive if relates to for all elements in the set . This means all the elements relate to themselves.   Let's define a function to check if the relation on set is reflexive. We'll create a set of pairs for each element in and check if this set is a subset of . This will return True if the relation is reflexive and False otherwise.   If we are working with DiGraphs , we can use the method has_edge to check if the graph has a loop for each vertex.     Symmetric  A relation is symmetric if relates to , then relates to .   We can check if a DiGraph is symmetric by comparing the edges of the graph with the reverse edges. In our definition of symmetry, we are only interested in the relation of nodes, so we set edge labels=False .     Antisymmetric  When a relation is antisymmetric, the only case that relates to and relates to is when and are equal.   While SageMath offers a built-in antisymmetric() method for Graphs , it checks for a more restricted property than the standard definition of antisymmetry. Specifically, it verifies if there is a path from to , and there is a path form to , then .   Let's define a function to check for the standard definition of antisymmetry in a DiGraph .     Transitive  A relation is transitive if relates to and relates to , then relates to .  Let's define a function to check for the transitive property in a Set :   You may be tempted to write a function with a nested loop because the logic is easy to follow. However, when working with larger sets, the time complexity of the function will not be efficient. This is because we are iterating through the set three times. We can improve the time complexity by using a dictionary to store the relation . Alternatively, we can use built-in Sage DiGraph methods.    "
},
{
  "id": "properties-2-1",
  "level": "2",
  "url": "properties.html#properties-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Reflexive Symmetric Antisymmetric Transitive "
},
{
  "id": "equivalence",
  "level": "1",
  "url": "equivalence.html",
  "type": "Section",
  "number": "5.5",
  "title": "Equivalence",
  "body": " Equivalence  A relation on a set is called an equivalence relation if it is reflexive, symmetric, and transitive. The equivalence class of an element in a set is the set of all elements in that are related to by this relation, denoted by:   Here, represents the equivalence class of , comprising all elements in that are related to through the relation . This illustrates the grouping of elements into equivalence classes.  Consider a set defined as:    Create sets for the people living on each floor of the building:   Let be the relation on described as follows:    This relation demonstrates the properties of an equivalence relation:   Reflexive : A person lives in the same floor as themselves.    Symmetric : If person lives in the same floor as person , then person lives in the same floor as person .    Transitive : If person lives in the same floor as person and person lives in the same floor as person , then person lives in the same floor as person .   "
},
{
  "id": "equivalence-2",
  "level": "2",
  "url": "equivalence.html#equivalence-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "equivalence relation equivalence class "
},
{
  "id": "equivalence-14",
  "level": "2",
  "url": "equivalence.html#equivalence-14",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Reflexive "
},
{
  "id": "equivalence-16",
  "level": "2",
  "url": "equivalence.html#equivalence-16",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Symmetric "
},
{
  "id": "equivalence-18",
  "level": "2",
  "url": "equivalence.html#equivalence-18",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Transitive "
},
{
  "id": "partial-order",
  "level": "1",
  "url": "partial-order.html",
  "type": "Section",
  "number": "5.6",
  "title": "Partial Order",
  "body": " Partial Order  A relation on a set is a Partial Order (PO) if it satisfies the reflexive, antisymmetric, and transitive properties. A poset is a set with a partial order relation. For example, the following set of numbers with a relation given by divisibility is a poset.   A Hasse diagram is a visual representation of a poset. Unlike a digraph, the position of the height of the vertex has meaning. The vertex from bellow relates to the vertex above. A Hasse diagram is a more compact compared to a directed graph due to the following assumptions:   In a Hasse diagram the self-loops are assumed and not visualized.    A poset satisfies the antisymmetric property so the arrows are omitted.    Due to the transitive property, the vertex from bellow relates to the vertex above and the intermediate connections are implied and not visualized.      "
},
{
  "id": "sec-functions",
  "level": "1",
  "url": "sec-functions.html",
  "type": "Section",
  "number": "6.1",
  "title": "Functions",
  "body": " Functions   A function from a set into a set is a relation from into such that each element of is related to exactly one element of the set . The set is called the domain of the function, and the set is called the co-domain. Functions are fundamental in both mathematics and computer science for describing mathematical relationships and implementing computational logic.   Tips!  Defining functions in Sage is not only useful for mathematical calculations but also for creating complex algorithms, modeling data, and simulating real-world scenarios in various fields of science and engineering.   In Sage, functions can be defined using direct definition.  For example, defining a function to calculate the cube of a number:      Graphical Representations  Sage provides powerful tools for visualizing functions, enabling you to explore the graphical representations of mathematical relationships. Graphs can be plotted directly from function definitions, offering insights into function behavior, such as continuity, limits, and extrema.   Tips!  Utilizing graphical representations of functions can greatly aid in understanding complex concepts in calculus and analysis, such as differentiation and integration, by providing a visual context.   For example, to plot the function over the interval :    "
},
{
  "id": "sec-recursion",
  "level": "1",
  "url": "sec-recursion.html",
  "type": "Section",
  "number": "6.2",
  "title": "Recursion",
  "body": " Recursion   Recursion is a method where the solution to a problem depends on solutions to smaller instances of the same problem. This approach is extensively used in mathematics and computer science, especially in the computation of binomial coefficients, the evaluation of polynomials, and the generation of sequences.     Recursion in Sequences  A recursive sequence is defined by one or more base cases and a recursive step that relates each term to its predecessors.  Here, s is a function representing the sequence. The equation eqn defines the recursive relation . The rsolve() function is then used to find a closed-form solution to this recurrence, given the initial conditions and . At last, we use SR() function to convert from Python notation to mathematical notation.    show() function can be used to make the output visually more pleasing, you can try to remove it and see how the output looks instead.     Recursion with Binomial Coefficients  Binomial coefficients, denoted as , count the number of ways to choose elements from an -element set. They can be defined recursively. Sage can compute binomial coefficients using the binomial(n, k) function.   We can also explore the recursive nature of binomials using a Python syntax.   This function implements the recursive formula , with base cases .   "
},
{
  "id": "sec-graph-theory",
  "level": "1",
  "url": "sec-graph-theory.html",
  "type": "Section",
  "number": "7.1",
  "title": "Basics",
  "body": " Basics    Vertices and Edges  A basic graph in Sage can be defined by its vertices and edges. You can start by creating a graph either by directly specifying the edges or by defining the vertices and edges separately and then combining them to form the graph. These methods allow for flexibility in how you construct graphs based on the information available.  The first method involves specifying the edges directly, where each edge is defined by a pair of vertices:   The second method uses a list of vertices and a list of edges, providing a clear separation between the graph's vertices and its connectivity:   Both methods allow for the creation and visualization of graphs in Sage, with the choice of method depending on the format of the data available and personal preference for clarity and organization.     Just Edges  Defining a graph solely by its edges focuses on the relationships between vertices, simplifying the graph creation process. Sage infers the vertices based on the edges provided.  To create a more complex graph by specifying only its edges:   This example shows a graph with a mix of a pentagon and a triangle, demonstrating how edges alone can define complex structures in a graph.     Neighbors  Neighbors in a graph are vertices directly connected by an edge. Identifying neighbors is crucial for understanding a graph's structure.  To find the neighbors of a vertex in a more complex graph:   This method demonstrates how to determine the connectivity of any given vertex within a graph.     Predefined Graphs  Sage offers a wide array of predefined graphs for experimentation and study. These graphs represent important concepts and structures in graph theory.  Examples of creating and visualizing some well-known predefined graphs:   These examples include the Petersen graph, a complete graph on 5 vertices (also known as the K5 graph), the tetrahedral graph, the dodecahedral graph, and the hexahedral (or cubic) graph, showcasing a variety of graph structures.     Data Defined First  Defining a graph with data structures before creation allows for managing complex graphs efficiently. This approach is suitable for graphs with a large number of vertices or intricate connectivity.  An example using a dictionary to define a graph:   This method provides a clear and organized way to define the relationships between vertices, especially for complex or large-scale graphs.    Weighted Graphs  Weighted graphs extend the concept of graphs by associating a weight, typically a numerical value, with each edge. These weights can represent distances, costs, capacities, or other quantities relevant to the problem being modeled. In Sage, weighted graphs are easily handled, allowing for the exploration of algorithms and properties specific to these types of graphs.  To create a weighted graph, you can add a third element to each edge tuple representing the weight.  Here is an example of defining a weighted graph with five vertices, forming a pentagon where each edge has a unique weight:   In the code above, the graph G is defined with vertices and edges, where each edge is a tuple containing two vertices and the weight of the edge. The weighted=True parameter indicates that the graph is weighted, and the plot(edge_labels=True) method visualizes the graph with edge weights displayed.  Weighted graphs are crucial for understanding many real-world problems. For instance, finding the shortest path between two points, which is a common problem in networking and transportation, can be modeled using weighted graphs.  To demonstrate a common operation on weighted graphs, let's calculate the shortest path between two vertices using Dijkstra's algorithm:   This example illustrates how to use G.shortest_path() and G.shortest_path_length() methods with the by_weight=True parameter to find and calculate the length of the shortest path between vertices 'A' and 'D', considering edge weights.  Weighted graphs can also be used to model networks where the edges represent connections with varying strengths or capacities. Analyzing such networks can reveal insights into the most efficient paths, bottlenecks, and other important characteristics.  Another operation commonly performed on weighted graphs is finding the minimum spanning tree, which connects all vertices with the minimum total edge weight. Here's how you can find the minimum spanning tree of a weighted graph in Sage:   The method G.min_spanning_tree() returns the edges of the minimum spanning tree. A new graph, T_graph , is then created from these edges to visualize the minimum spanning tree with its edge weights.    Plot Options for Graphs  Visualizing graphs in Sage not only provides insights into the structure and properties of the graph but also offers flexibility through customization options. These options include adjusting colors, edge thickness, vertex size, and more, allowing for clearer representation and better understanding of complex graphs. This subsection will guide you through various customization techniques for graph visualization in Sage.  To begin with, you can customize the color of vertices and edges. This is particularly useful for highlighting specific parts of a graph, such as a path or a subgraph.  Here is an example of how to set different colors for vertices and edges:   In this code, the vertex_color and edge_color parameters are used to specify the colors of the vertices and edges, respectively.  Adjusting the thickness of edges can also enhance the visualization, especially for weighted graphs or to emphasize certain edges over others.  To modify the edge thickness:   The edge_thickness parameter allows you to specify the thickness of the edges in the plot.  Another useful customization is adjusting the size of the vertices, which can be helpful when dealing with graphs that have a large number of vertices or when you want to draw attention to specific vertices.  To change the size of vertices:   The vertex_size parameter controls the size of the vertices in the plot.  While customizing labels, Sage allows you to enable or disable labels for both vertices and edges, providing clarity and additional context to the graph. However, note that setting specific colors for edge labels directly through the plot method is not supported.  To customize labels and enable them for vertices and edges:   This example shows how to enable vertex and edge labels to enhance the information displayed on the graph. For more advanced label customization, including color, you may need to explore additional graph visualization libraries or tools that offer extended functionality.  Sage's graph plotting capabilities are extensive, offering a wide range of customization options that enable detailed and informative visualizations. By exploring these options, you can tailor the appearance of your graphs to suit your specific needs and preferences, making your data analysis and presentations more effective and engaging.    Graph Characteristics  Understanding the characteristics of graphs is fundamental to analyzing their properties and behaviors. Graph characteristics, such as the number of vertices and edges, degree of vertices, and whether the graph is connected or not, provide essential insights into the structure of the graph. Sage offers various functions to compute and analyze these characteristics, making it a powerful tool for graph theory studies.  The number of vertices and edges in a graph are basic yet vital characteristics that describe its size.  To find the number of vertices and edges:   In the above example, G.num_vertices() and G.num_edges() methods return the number of vertices and edges in the graph G , respectively.  The degree of a vertex is the number of edges incident to the vertex. Analyzing the degree distribution can reveal important aspects of the graph's connectivity and structure.  To find the degree of all vertices:   The method G.degree_sequence() provides a list of degrees of all vertices in the graph, which can be used to analyze the graph's degree distribution.  Another important characteristic is whether a graph is connected. A graph is connected if there is a path between every pair of vertices.  To check if a graph is connected:   The G.is_connected() method checks the connectivity of the graph, which is crucial for understanding the graph's structure and properties.  The diameter of a graph is the longest shortest path between any two vertices, providing insight into the graph's extent.  To calculate the graph's diameter:   The average distance between vertices in a graph is another measure of the graph's overall connectivity.  To compute the average distance:   These operations and characteristics are just a few examples of the analysis possible with SageMath. By understanding these properties, you can gain deeper insights into the nature and structure of graphs, aiding in more complex analyses and applications in graph theory and beyond.    Graphs and Matrices  Matrices play a crucial role in graph theory, providing a compact and powerful representation of graphs. The adjacency matrix and the incidence matrix are two primary examples, each encoding different aspects of a graph's structure. Sage makes it easy to work with these matrices, enabling the exploration of graphs through linear algebraic properties.  An adjacency matrix of a graph is a square matrix used to represent which vertices (or nodes) of the graph are adjacent to which other vertices. Each cell [i, j] in the matrix is filled with a 1 if there is an edge from vertex i to vertex j , and a 0 otherwise.  To create a graph from an adjacency matrix:   In this example, the matrix A represents the adjacency matrix of a graph, and Graph(A) creates the graph based on that matrix. The plot shows the resulting graph.  An incidence matrix is another matrix representation of a graph, which describes the relationship between vertices and edges. In this matrix, rows correspond to vertices, and columns correspond to edges, with entries indicating whether a vertex is incident to an edge.  Sage also allows you to work with graphs using their incidence matrices, though constructing a graph directly from an incidence matrix requires a bit more manual work compared to using an adjacency matrix.  Besides creating graphs from matrices, you can also obtain these matrix representations from existing graphs in Sage. This is particularly useful for analysis and for applying linear algebra techniques to study graph properties.  To get the adjacency matrix of a graph:   And to get the incidence matrix:   These capabilities of Sage to seamlessly transition between graph and matrix representations open up a wide range of analytical possibilities, enabling deeper insights into the structure and properties of graphs.    Adding and Deleting Vertices and Edges  Manipulating graphs by adding or deleting vertices and edges is a fundamental aspect of graph theory studies. These operations allow you to dynamically modify graphs, exploring how structural changes affect graph properties and behaviors. Sage provides intuitive methods for these actions, enabling easy modifications of graphs for experimentation and analysis.  Adding a vertex to a graph can be done with the add_vertex() method. This is useful for incremental graph construction or for adding vertices that can later be connected by edges.  To demonstrate adding a vertex and making it visible by connecting it with an edge:   The add_edge() method adds an edge between two vertices, automatically creating any vertices not already present in the graph.  To delete a vertex or an edge, use the delete_vertex() and delete_edge() methods, respectively. Deleting a vertex also removes all edges incident to it.  Example of deleting a vertex:   Example of deleting an edge:   These methods are crucial for exploring dynamic graph theory aspects, allowing the study of how changes in graph structure influence properties like connectivity, the presence of cycles, and path finding.   "
},
{
  "id": "paths",
  "level": "1",
  "url": "paths.html",
  "type": "Section",
  "number": "7.2",
  "title": "Paths",
  "body": " Paths    "
},
{
  "id": "isomorphism",
  "level": "1",
  "url": "isomorphism.html",
  "type": "Section",
  "number": "7.3",
  "title": "Isomorphism",
  "body": " Isomorphism      Easier to prove, not isomorphic. If one of these fails then the graphs are not isomorphic. If all of these are true then the graph may or may not be isomorphic. Invariant under isomorphism:       "
},
{
  "id": "euler_and_hamilton",
  "level": "1",
  "url": "euler_and_hamilton.html",
  "type": "Section",
  "number": "7.4",
  "title": "Euler and Hamilton",
  "body": " Euler and Hamilton    "
},
{
  "id": "search_algorithm",
  "level": "1",
  "url": "search_algorithm.html",
  "type": "Section",
  "number": "7.5",
  "title": "Search Algorithms",
  "body": " Search Algorithms    "
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
