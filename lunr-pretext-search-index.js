var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "colophon-1",
  "level": "1",
  "url": "colophon-1.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  My Website   copyright  "
},
{
  "id": "first-line-of-sage",
  "level": "1",
  "url": "first-line-of-sage.html",
  "type": "Section",
  "number": "1.1",
  "title": "Running Your First Line of SageMath Code",
  "body": " Running Your First Line of SageMath Code  The easiest way to get started is by running SageMath online. However, if you do not have reliable internet, you can also install the software locally on your own computer. Begin your journey with SageMath by following these steps:    Navigate to the SageMath website   Click on Sage on CoCalc    Create a CoCalc account   Go to Your Projects on CoCalc and create a new project.  Start your new project and create a new worksheet. Choose the SageMath Worksheet option.   Enter SageMath code into the worksheet and run it by clicking Run or using the shortcut Shift + Enter .   Save your worksheet as a PDF for your records.  To learn more about SageMath worksheets, refer to the official documentation     "
},
{
  "id": "data-types",
  "level": "1",
  "url": "data-types.html",
  "type": "Section",
  "number": "1.2",
  "title": "Data Types",
  "body": " Data Types   SageMath is a Python-based system, integrating various open-source mathematics software packages. Learning the fundamentals of Python allows users to fully utilize SageMath and equips them with broader applicable skills.   Python has several built-in data types. These include:      Integers : Whole numbers without a fractional part.    42 , -7 .        Floats : Numbers with a decimal point.    3.14 , -0.001 .        Strings : Sequence of characters used for text.    \"Hello\" , 'World' .        Booleans : Represents truth values. Only two possible objects.    True and False .        Lists : Ordered, mutable collections of items.    [1, 2, 3] .        Tuples : Ordered, immutable collections.    (1, 2, 3) .        Dictionaries : Collections of key-value pairs.    {\"name\": \"Alice\", \"age\": 25} .        "
},
{
  "id": "p-9",
  "level": "2",
  "url": "data-types.html#p-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Integers Floats Strings Booleans Lists Tuples Dictionaries "
},
{
  "id": "colophon-2",
  "level": "1",
  "url": "colophon-2.html",
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

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
