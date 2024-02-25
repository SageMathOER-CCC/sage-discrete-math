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
  "body": " Intro to Sage  You can run and edit the Sage code directly in the SageMathCells embedded in this webpage. All the cells on the same page share the same memory. Be sure to run the cells in order. If you run the cells on a given page out of order, you may get unexpected results.  Notice how Sage builds on Python. Valid Python is also valid Sage. Sage adds many feature that are well suited for mathematical computation. Before we get started with discrete math, let's see how we can use Sage as a calculator.       "
},
{
  "id": "printing",
  "level": "1",
  "url": "printing.html",
  "type": "Section",
  "number": "1.2",
  "title": "Printing",
  "body": " Printing   Sometimes we use print() to display output and sometimes we do not. Other times we need to use multiple print statements.    It looks like Sage is only showing the value of the last line of code. If we want to print both of these strings we will need two print statements.   Did you expect these words to be on the same line? Let's investigate what print() does. We can look up the documentation for a function by using the ? operator at the end of the function name.   It turns out print() adds a new line after printing. Lets get the output we want on a single line.    We can also display mathematical notation   "
},
{
  "id": "OOP",
  "level": "1",
  "url": "OOP.html",
  "type": "Section",
  "number": "1.3",
  "title": "Object Oriented Programming",
  "body": " Object Oriented Programming  What is an object ? Almost everything in Sage and Python for that matter is an object! More specifically an object is an instance of a class .  A class provides a template or blueprint for creating objects and defines the attributes (properties) and methods (behaviors) that those objects can have.  This might not mean too much right now and it will be more clear as we explore what is known as object-oriented programming. Just know that SageMath has different ways of representing and working with data. We can create an object by typing something into our Sage Worksheet or the cells on this page.   Dot notation is a feature in object-oriented programming. Here is an example of dot notation. There are many more examples of this in Sage. Dot notation is used to access attributes and methods of an object. We can also pass in arguments to this method to specify the number of digits we want to round to.   Sage supports different ways of accomplishing the same task.   "
},
{
  "id": "OOP-2",
  "level": "2",
  "url": "OOP.html#OOP-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "object class "
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
  "id": "OOP-4",
  "level": "2",
  "url": "OOP.html#OOP-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "object-oriented "
},
{
  "id": "OOP-5",
  "level": "2",
  "url": "OOP.html#OOP-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Dot notation "
},
{
  "id": "data-types",
  "level": "1",
  "url": "data-types.html",
  "type": "Section",
  "number": "1.4",
  "title": "Data Types",
  "body": " Data Types  Let's ask sage what type of object this is.   Strings : Sequence of characters used for text. You can use single or double quotes.    True and False  boolean values.    Lists : Ordered mutable collections of items within a pair of square brackets [] . If an object is mutable, the value can be changed after it is created.    Tuples : Ordered, immutable collections within a pair of parenthesis () . If an object is immutable, the value cannot be changed after it is created.    set : sets() with lowercase s are built into Python. Python sets are collections of unique items within a pair of curly braces {} .    Set is a built-in Sage class. It is similar to a Python set, with added functionality for mathematical operations.    Dictionaries : Collections of key-value pairs.   In the following example Sage does not evaluate an approximation of sqrt(2) * log(3) . Sage will retain the symbolic value for accuracy.   "
},
{
  "id": "data-types-2",
  "level": "2",
  "url": "data-types.html#data-types-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "object "
},
{
  "id": "data-types-3",
  "level": "2",
  "url": "data-types.html#data-types-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Strings "
},
{
  "id": "data-types-5",
  "level": "2",
  "url": "data-types.html#data-types-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "boolean "
},
{
  "id": "data-types-7",
  "level": "2",
  "url": "data-types.html#data-types-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Lists "
},
{
  "id": "data-types-9",
  "level": "2",
  "url": "data-types.html#data-types-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Tuples "
},
{
  "id": "data-types-11",
  "level": "2",
  "url": "data-types.html#data-types-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "set "
},
{
  "id": "data-types-13",
  "level": "2",
  "url": "data-types.html#data-types-13",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Set "
},
{
  "id": "data-types-15",
  "level": "2",
  "url": "data-types.html#data-types-15",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Dictionaries "
},
{
  "id": "iteration",
  "level": "1",
  "url": "iteration.html",
  "type": "Section",
  "number": "1.5",
  "title": "Iteration",
  "body": " Iteration  "
},
{
  "id": "debugging",
  "level": "1",
  "url": "debugging.html",
  "type": "Section",
  "number": "1.6",
  "title": "Debugging",
  "body": " Debugging  When you learn how to program you will make many mistakes. This will always be part of the process. Please try your best to get comfortable with making mistakes and experimenting. Over time you will learn to recognize how to correct these mistakes quicker. Reading error messages is an essential element of programming. Sometimes error messages are helpful and descriptive. Other times they will seem confusing and will become more clear over time and with practice. Let's make some mistakes together!   Why didn't this print Hello, World! to the screen? Sage told us we have a SyntaxError . In this case we are not too concerned with the meaning of invalid decimal literal . The problem is with how we named our variable. It turns out there are rules about naming identifiers.  Rules for naming identifiers in Python:   Identifiers cannot start with a digit.    Identifiers are case-sensitive.    Identifiers can include:   letters ( a - z , A - Z )    digits ( 0 - 9 )    underscore character _        Do not use spaces, punctuation or special characters when naming identifiers.    Keywords cannot be used as identifiers.     Let's use an acceptable identifier to name our variable.   Here are some more keywords that cannot be used for variable names   False , None , True , and , as , assert , async , await , break , class , continue , def , del , elif , else , except , finally , for , from , global , if , import , in , is , lambda , nonlocal , not , or , pass , raise , return , try , while , with , yield .  Here is another error:   It looks like we have a NameError . We also know that Hello is not defined. In this case Sage thinks that Hello is a variable because there are no parenthesis around it.  "
},
{
  "id": "documentation",
  "level": "1",
  "url": "documentation.html",
  "type": "Section",
  "number": "1.7",
  "title": "Documentation",
  "body": " Documentation  Sage can do many more mathematical operations. If you want an idea of what Sage can do, check out the Quick Reference Card and the Reference Manual .  The tutorial is an overview to become familiar with Sage.  The Sage documentation can be found at this link. Right now, reading the documentation is optional. We will do our best to get you up and running with Sage with this text.  "
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
  "body": " Creating Sets   Sage Math Set  We can create a set by inserting a list within a Set() function, with an uppercase S . We create a list with square brackets [] . Notice when we print the set, the elements are ordered and the duplicates are ignored.   We can ask Sage to compare two sets to see if they are equal or not. We can use the == operator to compare two values. A single equal sign = and double equal sign == have different meanings.  The equality operator  == is used to ask Sage if two values are the same. Sage compares the values on each side of the operator and returns the boolean value. The == operator returns True if the sets are equal and False if they are not equal.  The assignment operator  = is used to assign a value to a variable. The value on the right side of the operator is assigned to the variable on the left side.   Since sets remove duplicates, the two sets are equal.  If you are familiar with Python, you may have used a Python set with a lower case s . Even though Sage supports Python sets, we will be using Sage Set for the added features. Be sure to define Sets() with an upper case S .    Set Builder Notation  Instead of explicitly listing the elements of a set, we can use a set builder notation to define a set. The set builder notation is a way to define a set by describing the properties of its elements.   Iteration is a way to repeat a block of code multiple times and can be used to automate repetitive tasks. We could have created the same set by typing C = Set([2, 4, 6, 8, 10]) . Imagine if we wanted to create a set of even numbers between 1 and 100. It would be much easier to use iteration.     Subsets  To list all the subsets included in this set, we can use the Subsets() function to generate all the subsets and then use the Set() function to display the sets of subsets.    "
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
  "body": " Cardinality  To find the cardinality of a set, we use the cardinality() function.   Tips!  In social networks like Facebook or Twitter, cardinality can represent the number of friends or followers a user has. Understanding the cardinality of social connections can help in personalization, targeted advertising, and studying social influence.    Alternatively, we can also use the len() function, built into Python. Instead of returning a Sage Integer , this will return a Python int .   In many cases, using Sage classes and functions will provide more functionality.    "
},
{
  "id": "sec-operation-on-sets",
  "level": "1",
  "url": "sec-operation-on-sets.html",
  "type": "Section",
  "number": "2.3",
  "title": "Operations on Sets",
  "body": " Operations on Sets    Set Membership Check  Sage allows you to easily check whether a certain element belongs to a set. You can use the in operator to check membership, which returns True if the element is in the set and False otherwise.  Let's consider . We can check if the number 3 is in set A:   Tips!  For organizations such as clubs, gyms, or online subscription services, set membership checks can be used to validate if a user is a member or subscriber. This can help control access to facilities or content.    We also can check if is a subset of A by using the Subsets function to generate a set S with all the subsets of A. Then we use the in function to check whether B belongs to the subset of A.      Union of Sets  There are two distinct methods available in Sage for calculating unions.  Suppose and . We can use the union() function to calculate .   Tips!  This operation can be visualized in real-world scenarios such as merging two distinct music playlists into one. In this case, any song that appears in both playlists will only be listed once in the merged playlist.    Alternatively, we can also use the | operator to perform the union operation.      Intersection of Sets  Similar to union, there are two methods of using the intersection function in sage.  Suppose and . We can use the intersection() function to calculate .   Tips!  A practical application of set intersection could be finding common members between two different social media groups. Members who belong to both groups represent the intersection of these groups.    Alternatively, we can also use the & operator to perform the intersection operation.      Difference of Sets  We have two methods to solve for difference as well.  Suppose and . We can use the difference() function to calculate the difference between 2 sets.   Tips!  In a real-life context, this can be seen as identifying items on a restaurant menu (set A) that you have not yet tried (set B), with A - B representing the new dishes to explore.    Alternatively, we can also use the - operator to perform the difference operation.      Multiple Sets  For doing operations involving multiple sets, we can repeat the operations to get our results, let us see an example.  Suppose , and . To find the union of all three sets, we will repeat the union() function.   Alternatively, we can also repeat the | operator to perform the union operation.   Similar operations can also be done using the intersection() and difference() functions as well as their operators.     Complement of Sets  Assume the universal set, and . We can use the difference() function to find the complement of A.   Tips!  This is analogous to having a list of all possible ice cream flavors (U) and identifying those flavors you have yet to try (A').    Alternatively, we can also use the - operator as well.      Cartesian Product of Sets  Suppose and . We can use the cartesian_product() and Set() functions to display the operation .   Tips!  This concept can be applied in situations like determining all possible combinations of two different sets, such as shirt colors and pants styles in a wardrobe.     "
},
{
  "id": "sec-combinatorics",
  "level": "1",
  "url": "sec-combinatorics.html",
  "type": "Section",
  "number": "3.1",
  "title": "Combinatorics",
  "body": " Combinatorics    Factorial Function  The factorial of a non-negative integer , denoted by , is the product of all positive integers less than or equal to . In Sage, the factorial() function computes this value, which is essential in permutations and combinations calculations.   Tips!  Factorials are widely used in probability problems, such as determining the number of possible ways a set of items can be arranged.   For example, to compute the factorial of 5:      Combinations  The combination is an unordered selection of k objects from a set of n objects.   Tips!  Combinations are useful in scenarios like determining the number of possible committees that can be formed from a larger group.   For instance, to calculate the number of ways to choose 3 elements from a set of 5:   Another method would be using the binomial() function.      Permutations  A permutation is an ordered selection of k objects from a set of n objects.   Tips!  Understanding permutations can help solve problems like scheduling where the order of tasks or events matters.   To display the set of permutations with 3 elements, we use the Permutations() function and the use the Set() function for output.   We can also specify the elements by:   In the code above, we specified the elements to be 2, 3 and 4.   "
},
{
  "id": "sec-logical-operation",
  "level": "1",
  "url": "sec-logical-operation.html",
  "type": "Section",
  "number": "4.1",
  "title": "Logical Operators",
  "body": " Logical Operators   In Sage, logical operations such as AND & , OR | , NOT ~ , conditional -> , and biconditional <-> play crucial roles in constructing and evaluating logical expressions.    Operator  Symbol  Description    AND  &  True if both operands are true    OR  |  True if at least one operand is true    NOT  ~  Negates the truth value of its operand    Conditional  ->  True if the first operand implies the second    Biconditional  <->  True if both operands are equal      Boolean Formula  Sage's propcalc.formula() function allows for the creation of Boolean formulas using variables and logical operators.   Tips!  Logical operations can model decision-making processes in programming, such as determining whether a set of conditions are met before executing a particular block of code.     "
},
{
  "id": "sec-truth-table",
  "level": "1",
  "url": "sec-truth-table.html",
  "type": "Section",
  "number": "4.2",
  "title": "Truth Tables",
  "body": " Truth Tables   Truth tables represent the fundamental tool in logic to display the truth values of statements for all possible interpretations. The truthtable() function in Sage generates the truth table for a given logical expression.   Tips!  Constructing truth tables is a practical method for debugging complex logical conditions in software development, ensuring all scenarios are accounted for.     Expanding on the concept of truth tables, we can analyze logical expressions involving three variables. This provides a deeper understanding of the interplay between multiple conditions. The truthtable() function accommodates expressions with any reasonable number of variables.   Tips!  Truth tables for three variables are particularly useful in the study of digital circuits and Boolean algebra, where each variable represents a different input or condition.    "
},
{
  "id": "sec-tautology",
  "level": "1",
  "url": "sec-tautology.html",
  "type": "Section",
  "number": "4.3",
  "title": "Tautologies",
  "body": " Tautologies    Analyzing Logical Equivalences  Truth tables are instrumental in determining logical equivalences between two expressions. By comparing their truth tables, we can ascertain if two logical statements are equivalent, meaning they have identical truth values for all possible inputs.   Tips!  This approach is invaluable in simplifying logical expressions in computer algorithms and understanding proofs in mathematical logic.       Tautologies  A tautology is a logical statement that is always true. The is_tautology() function checks whether a given logical expression is a tautology.   Tips!  Understanding tautologies is essential in computer science, particularly in optimizing algorithms and validating logical propositions in software verification. It's also fundamental in mathematical proof strategies, such as proof by contradiction.    Tautologies play a key role in deductive reasoning, where they serve as universally valid starting points for logical deductions. They are also instrumental in the design of digital logic circuits, where the goal is to achieve certain logical conditions regardless of the input state.  Exploring tautologies with Sage not only strengthens a student's grasp of logical principles but also enhances their ability to apply these concepts in computing and mathematical proof construction. By analyzing various expressions and verifying their status as tautologies, students gain insights into the structure and properties of logical statements.     Contradictions  In contrast to tautologies, contradictions are statements that are always false.   Tips!  Analyzing the relationship between tautologies and contradictions can aid in the development of critical thinking skills, important for debugging in programming, constructing mathematical proofs, and designing logical circuits.    By studying tautologies alongside contradictions, students can better understand the boundaries of logical expressions and the concept of logical necessity versus impossibility. This knowledge is crucial in fields such as theoretical computer science, philosophy of logic, and mathematical logic.   "
},
{
  "id": "intro-relations",
  "level": "1",
  "url": "intro-relations.html",
  "type": "Section",
  "number": "5.1",
  "title": "Introduction to Relations",
  "body": " Introduction to Relations  A relation  from set into set is a subset of the Cartesian product , represented as:   Recall, the Cartesian product consists of all possible ordered pairs , where and . Each pair combines an element from set with an element from set .  Let's define two sets, pants and shirts, as examples:       Create a relation from pants to shirts based on style, where each pair of pants is matched with a shirt.   The Cartesian product of pants and shirts includes all possible combinations of pants with shirts.   This relation of pants to shirts can be represented as a subset of the Cartesian product of pants and shirts.       "
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
  "body": " Relations on a set  Let's explore specific kind of relation. When the two sets are identical, we refer to a relation from to as a relation on  .  Consider the set . Let's define a relation on such that iff ( divides ). The relation can be represented by the set of ordered pairs where the first element divides the second:   To understand the pairs in this relation, consider whether divides . Since it does, the pair is included in . However, does not divide , so any pair involving and is excluded. Following this logic, we include pairs where the first element divides the second.   "
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
  "body": " Digraphs  A digraph, or directed graph, is a visual representation of a relation R on the set A. Every element in set A is shown as a node (vertex). An arrow from the node to the node represent the pair on the relation R.  Consider the set . Define a relation on such that if and only if .    "
},
{
  "id": "equivalence",
  "level": "1",
  "url": "equivalence.html",
  "type": "Section",
  "number": "5.4",
  "title": "Equivalence",
  "body": " Equivalence  A relation is called an equivalence relation if it satisfies three key properties: reflexivity , symmetry , and transitivity . These properties ensure that elements can be grouped into classes of equivalence based on their mutual relations.     Reflexive         a relates to a for all elements a in the set A. All the elements relate to themselves.          Symmetric         If a relates to b, then b relates to a. The relation is symmetric if the order of the elements does not matter.          Transitive         If a relates to b and b relates to c, then a relates to c.     The class of equivalence for an element a in set A is defined by the set:   This set comprises all elements in A that are related to a through the relation R, illustrating how elements are grouped into equivalence classes.  Consider set A as defined by the scenario:      In this context, let R be the relation on A described as follows:    This relation demonstrates the properties of an equivalence relation:      Reflexive : A person lives in the same floor as themselves.     Symmetric : If person x lives in the same floor as person y, then person y lives in the same floor as person x.     Transitive : If person x lives in the same floor as person y and person y lives in the same floor as person z, then person x lives in the same floor as person z.      For the class of equivalence, considering person a as an example:   This definition shows that the class of equivalence for person a includes all individuals residing on the same floor as a. The relation \"living on the same floor as\" groups the building's residents into sets, with each set corresponding to a floor, forming an equivalence class.   "
},
{
  "id": "equivalence-2",
  "level": "2",
  "url": "equivalence.html#equivalence-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "equivalence relation reflexivity symmetry transitivity "
},
{
  "id": "equivalence-3-1-1",
  "level": "2",
  "url": "equivalence.html#equivalence-3-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Reflexive "
},
{
  "id": "equivalence-3-2-1",
  "level": "2",
  "url": "equivalence.html#equivalence-3-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Symmetric "
},
{
  "id": "equivalence-3-3-1",
  "level": "2",
  "url": "equivalence.html#equivalence-3-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Transitive "
},
{
  "id": "equivalence-4",
  "level": "2",
  "url": "equivalence.html#equivalence-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "class of equivalence "
},
{
  "id": "equivalence-14",
  "level": "2",
  "url": "equivalence.html#equivalence-14",
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
  "body": " Partial Order  A Partial Order (PO) satisfies the following properties:   Reflexive : a relates to a for all elements a in the set A. All the elements relate to themselves.    Antisymmetric : The only case that a relates to be and b relates to a is when a and b are equal.    Transitive : if a relates to b and b relates to c, then a relates to c.      Example: Let and define as the power set of , denoted . Establish a relation on where if and only if . This relation represents the idea of one set being a subset of another within the power set of .  To explore how elements relate within these examples, consider the element in the context of the second example. The set is not related to the empty set, denoted as , because is not a subset of . Similarly, does not relate to because is not a subset of . However, is related to because is indeed a subset of , which we denote as .   We can also define a poset by specifying the relation directly.   "
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
  "id": "sec-functions",
  "level": "1",
  "url": "sec-functions.html",
  "type": "Section",
  "number": "6.1",
  "title": "Functions",
  "body": " Functions  A function from a set into a set is a relation from into such that each element of is related to exactly one element of the set . The set is called the domain of the function, and the set is called the codomain. Functions are fundamental in both mathematics and computer science for describing mathematical relationships and implementing computational logic.   Tips!  Defining functions in Sage is not only useful for mathematical calculations but also for creating complex algorithms, modeling data, and simulating real-world scenarios in various fields of science and engineering.   In Sage, functions can be defined in various ways, including direct definition using Sage syntax or by defining Python functions.  For example, defining a function to calculate the cube of a number:   Alternatively, using Python syntax:     Graphical Representations  Sage provides powerful tools for visualizing functions, enabling students to explore the graphical representations of mathematical relationships. Graphs can be plotted directly from function definitions, offering insights into function behavior, such as continuity, limits, and extrema.   Tips!  Utilizing graphical representations of functions can greatly aid in understanding complex concepts in calculus and analysis, such as differentiation and integration, by providing a visual context.   For example, to plot the function over the interval :    "
},
{
  "id": "sec-recursion",
  "level": "1",
  "url": "sec-recursion.html",
  "type": "Section",
  "number": "6.2",
  "title": "Recursion",
  "body": " Recursion  Recursion is a method where the solution to a problem depends on solutions to smaller instances of the same problem. This approach is extensively used in mathematics and computer science, especially in the computation of binomial coefficients, the evaluation of polynomials, and the generation of sequences.    Recursion in Sequences  A recursive sequence is defined by one or more base cases and a recursive step that relates each term to its predecessors. The following Python code in Sage illustrates how to solve a recursive sequence using the rsolve() function from the sympy library, which symbolically solves recurrence equations.   Here, s is a function representing the sequence. The equation eqn defines the recursive relation . The rsolve() function is then used to find a closed-form solution to this recurrence, given the initial conditions and .     Recursion with Binomial Coefficients  Binomial coefficients, denoted as , count the number of ways to choose elements from an -element set. They can be defined recursively. Sage can compute binomial coefficients using the binomial(n, k) function.   We can also explore the recursive nature of binomials using a Python syntax.   This Python function implements the recursive formula , with base cases .     Recursion in Polynomials  Polynomials can also be generated and manipulated recursively. For instance, the derivative of a polynomial is a lower-degree polynomial that can be calculated recursively. Sage provides tools for polynomial manipulation, including differentiation.   In this code, PolynomialRing(QQ, 'x') creates a polynomial ring in the variable with rational number coefficients ( QQ ). The polynomial is defined within this ring. The method .derivative() computes the derivative of , producing a new polynomial representing the derivative.   "
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
