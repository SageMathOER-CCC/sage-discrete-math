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
  "body": " Intro to Sage  Feel free to copy and paste the code snippets we provide and run them in your own Sage Worksheet or Jupyter Notebook . You can also edit the code and run the cells directly from this page. All the cells on the same page share the same memory, so be sure to run them in order. Sage integrates various open-source mathematics software packages. Sage shares many features and syntax with Python.  Let's do some math   Lets ask sage what type of object this is.   Sage let us know 1 + 1 returns an Integer .      What is an object ? Almost everything in Sage and Python for that matter is an object! More specifically an object is an instance of a class .  A class provides a template or blueprint for creating objects and defines the attributes (properties) and methods (behaviors) that those objects can have.  This might not mean too much right now and it will be more clear as we explore what is known as object-oriented programming. Just know that SageMath has different ways of representing and working with data. We can create an object by typing something into our Sage Worksheet or the cells on this page.   Dot notation is a feature in object-oriented programming. Here is an example of dot notation. There are many more examples of this in Sage. Dot notation is used to access attributes and methods of an object. We can also pass in arguments to this method to specify the number of digits we want to round to.   Sage supports different ways of accomplishing the same task.   In the following example there is no need to evaluate an approximation of sqrt(2) * log(3) . Sage will retain the symbolic value for accuracy.   We can also display mathematical notation   Let's introduce some more types and classes!   Look like this returns True . This is an example of a boolean value.    Lists : Ordered mutable collections of items within a pair of square brackets [] . If an object is mutable, the value can be changed after it is created.    Tuples : Ordered, immutable collections within a pair of parenthesis () . If an object is immutable, the value cannot be changed after it is created.    set : sets() with lowercase s are built into Python. Python sets are collections of unique items within a pair of curly braces {} .    Set is a built-in Sage class. It is similar to a Python set, with added functionality for mathematical operations.    Dictionaries : Collections of key-value pairs.    Strings : Sequence of characters used for text. You can use single or double quotes.   "
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
  "body": "set "
},
{
  "id": "about-sage-33",
  "level": "2",
  "url": "about-sage.html#about-sage-33",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Set "
},
{
  "id": "about-sage-35",
  "level": "2",
  "url": "about-sage.html#about-sage-35",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Dictionaries "
},
{
  "id": "about-sage-37",
  "level": "2",
  "url": "about-sage.html#about-sage-37",
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
  "body": " Debugging  When you learn how to program you will make many mistakes. This will always be part of the process. Please try your best to get comfortable with making mistakes and experimenting. Over time you will learn to recognize how to correct these mistakes quicker. Reading error messages is an essential element of programming. Sometimes error messages are helpful and descriptive. Other times they will seem confusing and will become more clear over time and with practice. Let's make some mistakes together!   Why didn't this print Hello to the screen? Sage told us we have a SyntaxError . In this case we are not too concerned with the meaning of invalid decimal literal . The problem is with how we named our variable. It turns out there are rules about naming identifiers.  Rules for naming identifiers in Python:   Identifiers cannot start with a digit.    Identifiers are case-sensitive.    Identifiers can include:   letters ( a - z , A - Z )    digits ( 0 - 9 )    underscore character _        Do not use spaces, punctuation or special characters when naming identifiers.    Keywords cannot be used as identifiers.     Let's use an acceptable identifier to name our variable.   Here are some more keywords that cannot be used for variable names   False , None , True , and , as , assert , async , await , break , class , continue , def , del , elif , else , except , finally , for , from , global , if , import , in , is , lambda , nonlocal , not , or , pass , raise , return , try , while , with , yield .  Here is another error:   It looks like we have a NameError . We also know that Hello is not defined. In this case Sage thinks that Hello is a variable because there are no parenthesis around it.   You have have noticed, sometimes we use Print() to display output and sometimes we do not. Other times we need to use multiple print statements.    It looks like Sage is only showing the value of the last line of code. If we want to print both of these strings we will need two print statements.   Did you expect these words to be on the same line? Let's investigate what Print() does.   It turns out Print() adds a new line after printing. Lets get the output we want on a single line.    "
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
  "body": " Creating Sets   Sage Math Set  We can create a set by inserting a list within a Set() function, with an uppercase S . We create a list with square brackets [] . Notice when we print the set, the elements are ordered and the duplicates are ignored.    Since sets remove duplicates, the two sets are equal. A single equal sign = and double equal sign == have different meanings.  The equality operator  == is used to ask Sage if two values are the same. Sage compares the values on each side of the operator and returns the boolean value, True if they are equal, and False if they are not.  The assignment operator  = is used to assign a value to a variable. The value on the right side of the operator is assigned to the variable on the left side.  If you are familiar with Python, you may have used a Python set with a lower case s . Even though Sage supports Python sets, we will be using Sage Set for the added features. Be sure to define Sets() with an upper case S .    Set Builder Notation  Instead of explicitly listing the elements of a set, we can use a set builder notation to define a set. The set builder notation is a way to define a set by describing the properties of its elements.   Here we are introducing a new programming concept iteration. Iteration is a way to repeat a block of code multiple times and can be used to automate repetitive tasks. We could have created the same set by typing evens = Set([2, 4, 6, 8, 10]) . Imagine if we wanted to create a set of even numbers between 1 and 100. It would be much easier to use iteration.     Subsets  Assume we have A = {1, 2, 3, 4, 5}, to list all the subsets included in this set, we can use the Subsets() function to generate all the subsets and then use the Set() function to show us all the subsets.    "
},
{
  "id": "subsec-Ways-to-create-a-set-6",
  "level": "2",
  "url": "creating-sets.html#subsec-Ways-to-create-a-set-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "equality operator "
},
{
  "id": "subsec-Ways-to-create-a-set-7",
  "level": "2",
  "url": "creating-sets.html#subsec-Ways-to-create-a-set-7",
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
  "body": " Operations on Sets    Set Membership Check  SageMath allows you to easily check whether a certain number or subset is a part of a set. You can use the in operator to check membership, which returns True if the element is in the set and False otherwise.  Let's consider A = {1, 2, 3, 4, 5}. We can check if the number 3 is in set A:   Tips!  For organizations such as clubs, gyms, or online subscription services, set membership checks can be used to validate if a user is a member or subscriber. This can help control access to facilities or content.    Similarly, we can check if B = {3, 4, 5, 6} is a subset of A:      Set Union  There are two distinct methods available in Sage for calculating unions. An advantage inherent in utilizing the union() method lies in its capability to accept an arbitrary number of sets as parameters. This means you can find the intersection of more than two sets in a single call.  Suppose A = {1, 2, 3, 4, 5}, B = {3, 4, 5, 6}. We can use the union() function here.   Tips!  This operation can be visualized in real-world scenarios such as merging two distinct music playlists into one. In this case, any song that appears in both playlists will only be listed once in the merged playlist.    Alternatively, we can also use the | operator to perform the union operation.      Set Intersection  Similar to union, there are two methods of using the intersection function in sage.  Suppose A = {1, 2, 3, 4, 5}, B = {3, 4, 5, 6}. We can use the intersection() function here.   Tips!  A practical application of set intersection could be finding common members between two different social media groups. Members who belong to both groups represent the intersection of these groups.    Alternatively, we can also use the & operator to perform the intersection operation.      Set Difference  We have two methods to solve for difference as well.  Suppose A = {1, 2, 3, 4, 5}, B = {3, 4, 5, 6}. We can use the difference() function here.   Tips!  In a real-life context, this can be seen as identifying items on a restaurant menu (set A) that you have not yet tried (set B), with A - B representing the new dishes to explore.    Alternatively, we can also use the - operator to perform the difference operation.      Multiple Sets  For doing operations using involving multiple sets, we can repeat the operations to get our results, let us see an example.  Suppose A = {1, 2, 3, 4, 5}, B = {3, 4, 5, 6} and C = {5, 6, 7}. To find the union of all three sets, we will repeat the union() function.   Alternatively, we can also repeat the | operator to perform the union operation.   Similar operations can also be done using the intersection() and difference() functions as well as their operators.     Set Complement  Assume the universal set, U = {1, 2, 3, 4, 5, 6, 7, 8, 9} and A = {1, 2, 3, 4, 5}. We can use the difference() function here.   Tips!  This is analogous to having a list of all possible ice cream flavors (U) and identifying those flavors you have yet to try (A').    Alternatively, we can also use the - operator as well.      Cartesian Product of Sets  Suppose A = {1, 2, 3, 4, 5} and D = {x, y}. We can use the cartesian_product() and Set() functions here.   Tips!  This concept can be applied in situations like determining all possible combinations of two different sets, such as shirt colors and pants styles in a wardrobe.     "
},
{
  "id": "sec-combinatorics",
  "level": "1",
  "url": "sec-combinatorics.html",
  "type": "Section",
  "number": "3.1",
  "title": "Combinatorics",
  "body": " Combinatorics    Factorial Function  The factorial of a non-negative integer , denoted by , is the product of all positive integers less than or equal to . In SageMath, the factorial() function computes this value, which is essential in permutations and combinations calculations.   Tips!  Factorials are widely used in probability problems, such as determining the number of possible ways a set of items can be arranged.   For example, to compute the factorial of 5:      Binomial Coefficient  The binomial coefficient represents the number of ways to choose elements out of a set of elements without considering the order. In SageMath, the binomial() function calculates this value, which is crucial for combinatorial problems.   Tips!  Binomial coefficients are useful in scenarios like determining the number of possible committees that can be formed from a larger group.   For instance, to calculate the number of ways to choose 3 elements from a set of 5:      Permutations  A permutation of a set is an arrangement of its members into a sequence or linear order. SageMath's Permutations() function generates all possible permutations of a set. To list all sets in a permutation, you can convert the output to a list.   Tips!  Understanding permutations can help solve problems like scheduling where the order of tasks or events matters.   To illustrate, generating all permutations of the set {1, 2, 3}:    "
},
{
  "id": "sec-logical-operation",
  "level": "1",
  "url": "sec-logical-operation.html",
  "type": "Section",
  "number": "4.1",
  "title": "Logical Operations",
  "body": " Logical Operations    Logical Operators  In SageMath, logical operations such as AND & , OR | , NOT ~ , conditional -> , and biconditional <-> play crucial roles in constructing and evaluating logical expressions.  AND, OR, and NOT operations correspond to basic logical functions: conjunction, disjunction, and negation, respectively. The conditional operation represents implication, where p -> q means if p then q . The biconditional operation, symbolized as p <-> q , denotes equivalence, asserting that p and q are either both true or both false.     Logical Operations in SageMath  SageMath's propcalc.formula() function allows for the creation of logical formulas using variables and logical operators. This is especially useful in defining and manipulating logical statements.   Tips!  Logical operations can model decision-making processes in programming, such as determining whether a set of conditions are met before executing a particular block of code.     "
},
{
  "id": "sec-truth-table",
  "level": "1",
  "url": "sec-truth-table.html",
  "type": "Section",
  "number": "4.2",
  "title": "Truth Table",
  "body": " Truth Table    Truth Tables  Truth tables represent the fundamental tool in logic to display the truth values of statements for all possible interpretations. The truthtable() function in SageMath generates the truth table for a given logical expression.   Tips!  Constructing truth tables is a practical method for debugging complex logical conditions in software development, ensuring all scenarios are accounted for.       Truth Tables for Three Variables  Expanding on the concept of truth tables, we can analyze logical expressions involving three variables. This provides a deeper understanding of the interplay between multiple conditions. The truthtable() function accommodates expressions with any reasonable number of variables.   Tips!  Truth tables for three variables are particularly useful in the study of digital circuits and Boolean algebra, where each variable represents a different input or condition.       Analyzing Logical Equivalences  Truth tables are instrumental in determining logical equivalences between two expressions. By comparing their truth tables, we can ascertain if two logical statements are equivalent, meaning they have identical truth values for all possible inputs.   Tips!  This approach is invaluable in simplifying logical expressions in computer algorithms and understanding proofs in mathematical logic.     "
},
{
  "id": "sec-tautology",
  "level": "1",
  "url": "sec-tautology.html",
  "type": "Section",
  "number": "4.3",
  "title": "Tautologies",
  "body": " Tautologies    Tautologies  A tautology is a logical statement that is true under any interpretation of its variables. The is_tautology() function checks whether a given logical expression is a tautology. Recognizing tautologies is crucial for understanding the foundations of logical arguments and the construction of proofs.   Tips!  Understanding tautologies is essential in computer science, particularly in optimizing algorithms and validating logical propositions in software verification. It's also fundamental in mathematical proof strategies, such as proof by contradiction.    Tautologies play a key role in deductive reasoning, where they serve as universally valid starting points for logical deductions. They are also instrumental in the design of digital logic circuits, where the goal is to achieve certain logical conditions regardless of the input state.  For instance, in the context of digital electronics, a tautology can represent a circuit that always outputs a high signal (true), regardless of the inputs. This concept is used to design fault-tolerant systems and ensure consistency in logical operations.   Exploring tautologies with SageMath not only strengthens a student's grasp of logical principles but also enhances their ability to apply these concepts in computing and mathematical proof construction. By analyzing various expressions and verifying their status as tautologies, students gain insights into the structure and properties of logical statements.     Tautologies and Contradictions  In contrast to tautologies, contradictions are statements that are false under any interpretation of their variables. Understanding the relationship between tautologies, contradictions, and contingent statements (those that are neither universally true nor false) is fundamental in logic and mathematics.   Tips!  Analyzing the relationship between tautologies and contradictions can aid in the development of critical thinking skills, important for debugging in programming, constructing mathematical proofs, and designing logical circuits.    By studying tautologies alongside contradictions, students can better understand the boundaries of logical expressions and the concept of logical necessity versus impossibility. This knowledge is crucial in fields such as theoretical computer science, philosophy of logic, and mathematical logic.   "
},
{
  "id": "intro-relations",
  "level": "1",
  "url": "intro-relations.html",
  "type": "Section",
  "number": "5.1",
  "title": "Introduction to Relations",
  "body": " Introduction to Relations  A relation from set into set is defined as a subset of the Cartesian product , represented as:   The Cartesian product consists of all possible ordered pairs , where and . Each pair combines an element from set with an element from set .  Let's define two sets, Pants and Shirts, as examples:      The Cartesian product of Pants and Shirts includes all possible combinations of pants with shirts.   To explore how we can match pants with shirts based on their style, we define a relation as a subset of this Cartesian product, where each pair matches by a certain criterion, such as style.  First, let's define a set of Styles, and then create relations for Pants and Shirts based on these styles.         We can visualize all possible combinations of pants and shirts, taking their styles into account.   With these combinations, let's define a specific relation from Pants to Shirts based on matching styles. This relation is a subset of the Cartesian product PantStyles ShirtStyles, including only those pairs where the pants and shirts have the same style. This is a second example of a relation, on another relation.      "
},
{
  "id": "relations-on-a-set",
  "level": "1",
  "url": "relations-on-a-set.html",
  "type": "Section",
  "number": "5.2",
  "title": "Relations on a set",
  "body": " Relations on a set  Let's explore specific kind of relation. When the two sets are identical, we refer to a relation from to as a relation on  .   Example 1: Consider the set . Let's define a relation on such that iff ( divides ). The relation can be represented by the set of ordered pairs where the first element divides the second:   To understand the pairs in this relation, consider whether divides . Since it does, the pair is included in . However, does not divide , so any pair involving and is excluded. Following this logic, we include pairs where the first element divides the second.   A digraph, or directed graph, is a visual representation of a relation on a set. Every set element is shown as a node (vertex), and arrows between nodes represent the directional nature of the relation.    Example 2: Consider the set . Define a relation on such that if and only if .    "
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
  "id": "properties",
  "level": "1",
  "url": "properties.html",
  "type": "Section",
  "number": "5.3",
  "title": "Properties",
  "body": " Properties  A relation R on set A may or may not satisfy the following properties:   Reflexive : a relates to a for all elements a in the set A. All the elements relate to themselves.    Symmetric : if a relates to b, then b relates to a. The relation is symmetric if the order of the elements does not matter.    Antisymmetric : The only case that a relates to be and b relates to a is when a and b are equal.    Transitive : if a relates to b and b relates to c, then a relates to c.   "
},
{
  "id": "properties-3",
  "level": "2",
  "url": "properties.html#properties-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Reflexive "
},
{
  "id": "properties-4",
  "level": "2",
  "url": "properties.html#properties-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Symmetric "
},
{
  "id": "properties-5",
  "level": "2",
  "url": "properties.html#properties-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Antisymmetric "
},
{
  "id": "properties-6",
  "level": "2",
  "url": "properties.html#properties-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Transitive "
},
{
  "id": "equivalence",
  "level": "1",
  "url": "equivalence.html",
  "type": "Section",
  "number": "5.4",
  "title": "Equivalence",
  "body": " Equivalence  A relation is called an equivalence relation if the relation satisfies the following properties: reflexive symmetric and transitive.   Class of equivalence is defined by   The class of equivalence of a is the set of all elements in A that are related to a.     Let R be the following relation on A:  x R y if and only if x and y live in the same building.      Reflexive : A person lives in the same building as himself. This is true for everybody living in USA.     Symmetric : If person x lives in the same building as person y, then person y lives in the same building as person x.     Transitive : If person x lives in the same building as person y and person y lives in the same building as person z, then person x lives in the same building as person z.     Class of equivalence   "
},
{
  "id": "equivalence-2",
  "level": "2",
  "url": "equivalence.html#equivalence-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "equivalence relation "
},
{
  "id": "equivalence-3",
  "level": "2",
  "url": "equivalence.html#equivalence-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Class of equivalence "
},
{
  "id": "equivalence-8",
  "level": "2",
  "url": "equivalence.html#equivalence-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Reflexive Symmetric Transitive "
},
{
  "id": "partial-order",
  "level": "1",
  "url": "partial-order.html",
  "type": "Section",
  "number": "5.5",
  "title": "Partial Order",
  "body": " Partial Order  A Partial Order (PO) satisfies the following properties:   Reflexive a R a for all a A   Antisymmetric If a R b and b R a then a = b for all a, b A   Transitive If a R b and b R c then a R c for all a, b, c A   Example: Let and define as the power set of , denoted . Establish a relation on where if and only if . This relation represents the idea of one set being a subset of another within the power set of .  To explore how elements relate within these examples, consider the element in the context of the second example. The set is not related to the empty set, denoted as , because is not a subset of . Similarly, does not relate to because is not a subset of . However, is related to because is indeed a subset of , which we denote as .    "
},
{
  "id": "partial-order-3",
  "level": "2",
  "url": "partial-order.html#partial-order-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Reflexive "
},
{
  "id": "partial-order-4",
  "level": "2",
  "url": "partial-order.html#partial-order-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Antisymmetric "
},
{
  "id": "partial-order-5",
  "level": "2",
  "url": "partial-order.html#partial-order-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Transitive "
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
