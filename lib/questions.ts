export type Difficulty = 'beginner' | 'intermediate' | 'advanced';
export type Category = 'python' | 'pandas';
export type Topic = 
  | 'variables'
  | 'data_types'
  | 'control_flow'
  | 'functions'
  | 'oop'
  | 'list_dict'
  | 'file_io'
  | 'modules'
  | 'dataframes'
  | 'indexing'
  | 'aggregation'
  | 'merging'
  | 'cleaning'
  | 'visualization';

export interface Question {
  id: number;
  category: Category;
  difficulty: Difficulty;
  topic: Topic;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

// 500 total questions: 250 Python + 250 Pandas
export const questions: Question[] = [
  // ============ PYTHON QUESTIONS (1-250) ============
  
  // PYTHON: VARIABLES & DATA TYPES (Beginner) - 25 questions
  ...generatePythonVariables(),
  
  // PYTHON: CONTROL FLOW (Beginner) - 25 questions
  ...generatePythonControlFlow(),
  
  // PYTHON: FUNCTIONS (Beginner/Intermediate) - 25 questions
  ...generatePythonFunctions(),
  
  // PYTHON: DATA STRUCTURES (Beginner/Intermediate) - 25 questions
  ...generatePythonDataStructures(),
  
  // PYTHON: OOP (Intermediate/Advanced) - 25 questions
  ...generatePythonOOP(),
  
  // PYTHON: MODULES & IMPORTS (Beginner/Intermediate) - 25 questions
  ...generatePythonModules(),
  
  // PYTHON: FILE I/O (Intermediate) - 25 questions
  ...generatePythonFileIO(),
  
  // PYTHON: ADVANCED CONCEPTS (Advanced) - 25 questions
  ...generatePythonAdvanced(),
  
  // PYTHON: BUILTIN FUNCTIONS (Beginner/Intermediate) - 25 questions
  ...generatePythonBuiltins(),
  
  // PYTHON: ERROR HANDLING (Intermediate) - 25 questions
  ...generatePythonErrorHandling(),
  
  // ============ PANDAS QUESTIONS (251-500) ============
  
  // PANDAS: SERIES BASICS (Beginner) - 25 questions
  ...generatePandasSeries(),
  
  // PANDAS: DATAFRAME CREATION (Beginner) - 25 questions
  ...generatePandasDataFrames(),
  
  // PANDAS: INDEXING & SELECTION (Beginner/Intermediate) - 25 questions
  ...generatePandasIndexing(),
  
  // PANDAS: DATA CLEANING (Intermediate) - 25 questions
  ...generatePandasCleaning(),
  
  // PANDAS: GROUPING & AGGREGATION (Intermediate) - 25 questions
  ...generatePandasGrouping(),
  
  // PANDAS: MERGING & JOINING (Intermediate/Advanced) - 25 questions
  ...generatePandasMerging(),
  
  // PANDAS: TIME SERIES (Intermediate/Advanced) - 25 questions
  ...generatePandasTimeSeries(),
  
  // PANDAS: RESHAPING (Intermediate) - 25 questions
  ...generatePandasReshaping(),
  
  // PANDAS: ADVANCED OPERATIONS (Advanced) - 25 questions
  ...generatePandasAdvanced(),
  
  // PANDAS: PERFORMANCE & OPTIMIZATION (Advanced) - 25 questions
  ...generatePandasPerformance(),
];

function generatePythonVariables(): Question[] {
  return [
    {
      id: 1,
      category: 'python',
      difficulty: 'beginner',
      topic: 'variables',
      question: 'What will be the output of: x = 5; y = 2; print(x ** y)?',
      options: ['7', '10', '25', '32'],
      correctAnswer: 2,
      explanation: 'The ** operator is the exponentiation operator. 5 ** 2 = 5 * 5 = 25.'
    },
    {
      id: 2,
      category: 'python',
      difficulty: 'beginner',
      topic: 'variables',
      question: 'Which of the following is a valid variable name in Python?',
      options: ['2variable', '_variable', 'var-iable', 'var iable'],
      correctAnswer: 1,
      explanation: 'Variable names must start with a letter or underscore, not a number. _variable is valid.'
    },
    {
      id: 3,
      category: 'python',
      difficulty: 'beginner',
      topic: 'variables',
      question: 'What is the type of the value returned by: len("hello")?',
      options: ['str', 'float', 'int', 'NoneType'],
      correctAnswer: 2,
      explanation: 'The len() function returns an integer representing the length of the string.'
    },
    {
      id: 4,
      category: 'python',
      difficulty: 'beginner',
      topic: 'variables',
      question: 'What will print(type(5.0)) output?',
      options: ["<class 'int'>", "<class 'float'>", "<class 'str'>", "<class 'number'>"],
      correctAnswer: 1,
      explanation: '5.0 is a floating-point number because it has a decimal point, not an integer.'
    },
    {
      id: 5,
      category: 'python',
      difficulty: 'beginner',
      topic: 'variables',
      question: 'What is the result of: "hello" + " " + "world"?',
      options: ['error', '"hello world"', 'hello world', 'None'],
      correctAnswer: 1,
      explanation: 'String concatenation uses the + operator. "hello" + " " + "world" = "hello world".'
    },
    {
      id: 6,
      category: 'python',
      difficulty: 'beginner',
      topic: 'data_types',
      question: 'Which data type is immutable in Python?',
      options: ['list', 'dict', 'tuple', 'set'],
      correctAnswer: 2,
      explanation: 'Tuples are immutable, meaning their elements cannot be changed after creation. Lists, dicts, and sets are mutable.'
    },
    {
      id: 7,
      category: 'python',
      difficulty: 'beginner',
      topic: 'data_types',
      question: 'What is True == 1?',
      options: ['False', 'True', 'Error', 'None'],
      correctAnswer: 1,
      explanation: 'In Python, True is equivalent to 1 and False is equivalent to 0, so True == 1 returns True.'
    },
    {
      id: 8,
      category: 'python',
      difficulty: 'beginner',
      topic: 'data_types',
      question: 'What is the output of: bool(0)?',
      options: ['True', 'False', 'Error', '0'],
      correctAnswer: 1,
      explanation: 'In Python, 0 is considered falsy, so bool(0) returns False.'
    },
    {
      id: 9,
      category: 'python',
      difficulty: 'beginner',
      topic: 'data_types',
      question: 'What is the type of: {1, 2, 3}?',
      options: ['list', 'tuple', 'dict', 'set'],
      correctAnswer: 3,
      explanation: 'Curly braces {} with comma-separated values create a set (unless empty, which creates a dict).'
    },
    {
      id: 10,
      category: 'python',
      difficulty: 'beginner',
      topic: 'data_types',
      question: 'What will print(None) output?',
      options: ['None', 'null', 'Error', 'nothing'],
      correctAnswer: 0,
      explanation: 'print(None) outputs the word "None" to the console.'
    },
    {
      id: 11,
      category: 'python',
      difficulty: 'beginner',
      topic: 'variables',
      question: 'What is the result of: 10 // 3?',
      options: ['3.33', '3', '4', 'Error'],
      correctAnswer: 1,
      explanation: 'The // operator is floor division, which divides and rounds down. 10 // 3 = 3.'
    },
    {
      id: 12,
      category: 'python',
      difficulty: 'beginner',
      topic: 'variables',
      question: 'What is the result of: 10 % 3?',
      options: ['3', '1', '3.33', '10'],
      correctAnswer: 1,
      explanation: 'The % operator returns the remainder. 10 % 3 = 1 because 10 = 3*3 + 1.'
    },
    {
      id: 13,
      category: 'python',
      difficulty: 'beginner',
      topic: 'data_types',
      question: 'What is "hello"[0]?',
      options: ['h', 'e', 'Error', 'None'],
      correctAnswer: 0,
      explanation: 'Strings are indexed starting at 0. "hello"[0] returns the first character "h".'
    },
    {
      id: 14,
      category: 'python',
      difficulty: 'beginner',
      topic: 'data_types',
      question: 'What is "hello"[-1]?',
      options: ['h', 'e', 'o', 'Error'],
      correctAnswer: 2,
      explanation: 'Negative indexing counts from the end. "hello"[-1] returns the last character "o".'
    },
    {
      id: 15,
      category: 'python',
      difficulty: 'beginner',
      topic: 'data_types',
      question: 'What is the length of [1, 2, 3, [4, 5]]?',
      options: ['4', '5', '3', 'Error'],
      correctAnswer: 0,
      explanation: 'len() counts top-level elements. The nested list [4, 5] counts as one element, so length is 4.'
    },
    {
      id: 16,
      category: 'python',
      difficulty: 'beginner',
      topic: 'variables',
      question: 'What is: x = [1, 2, 3]; x.append(4); print(x)?',
      options: ['[1, 2, 3]', '[1, 2, 3, 4]', 'Error', 'None'],
      correctAnswer: 1,
      explanation: 'append() adds an element to the end of a list. After append(4), x becomes [1, 2, 3, 4].'
    },
    {
      id: 17,
      category: 'python',
      difficulty: 'beginner',
      topic: 'data_types',
      question: 'What is the output of: list("hello")?',
      options: ["['hello']", "['h', 'e', 'l', 'l', 'o']", 'Error', '["hello"]'],
      correctAnswer: 1,
      explanation: 'list() converts a string into a list of characters.'
    },
    {
      id: 18,
      category: 'python',
      difficulty: 'beginner',
      topic: 'data_types',
      question: 'What is: "hello".upper()?',
      options: ['"HELLO"', '"Hello"', '"hello"', 'Error'],
      correctAnswer: 0,
      explanation: 'The upper() method returns a string with all characters converted to uppercase.'
    },
    {
      id: 19,
      category: 'python',
      difficulty: 'beginner',
      topic: 'data_types',
      question: 'What is: "hello".split("l")?',
      options: ["['he', 'lo']", "['h', 'e', 'l', 'l', 'o']", "['he', '', 'o']", 'Error'],
      correctAnswer: 2,
      explanation: 'split() divides a string at each occurrence of the separator, including empty strings between consecutive separators.'
    },
    {
      id: 20,
      category: 'python',
      difficulty: 'beginner',
      topic: 'variables',
      question: 'What is: ",".join(["a", "b", "c"])?',
      options: ['"a,b,c"', '["a,b,c"]', '"abc"', 'Error'],
      correctAnswer: 0,
      explanation: 'join() combines list elements into a single string, with the join string as separator.'
    },
    {
      id: 21,
      category: 'python',
      difficulty: 'intermediate',
      topic: 'variables',
      question: 'What is the output of: {**{"a": 1}, **{"b": 2}}?',
      options: ["['a', 'b']", '{"a": 1, "b": 2}', 'Error', '{"a": 1}'],
      correctAnswer: 1,
      explanation: 'The ** operator unpacks dictionaries. {**dict1, **dict2} merges both dictionaries.'
    },
    {
      id: 22,
      category: 'python',
      difficulty: 'intermediate',
      topic: 'data_types',
      question: 'What is: (1, 2) + (3, 4)?',
      options: ['Error', '(1, 2, 3, 4)', '(4, 6)', '[1, 2, 3, 4]'],
      correctAnswer: 1,
      explanation: 'Tuples can be concatenated using the + operator, resulting in a new tuple.'
    },
    {
      id: 23,
      category: 'python',
      difficulty: 'intermediate',
      topic: 'data_types',
      question: 'What is: [1, 2] * 3?',
      options: ['[1, 2, 3]', '[3, 6]', '[1, 2, 1, 2, 1, 2]', 'Error'],
      correctAnswer: 2,
      explanation: 'Multiplying a list by an integer repeats the list that many times.'
    },
    {
      id: 24,
      category: 'python',
      difficulty: 'intermediate',
      topic: 'variables',
      question: 'What is the result of: sorted([3, 1, 2])?',
      options: ['[1, 2, 3]', '[3, 1, 2]', 'Error', '[1, 3, 2]'],
      correctAnswer: 0,
      explanation: 'sorted() returns a new sorted list without modifying the original.'
    },
    {
      id: 25,
      category: 'python',
      difficulty: 'intermediate',
      topic: 'data_types',
      question: 'What is: list(range(2, 7, 2))?',
      options: ['[2, 4, 6]', '[2, 3, 4, 5, 6]', '[2, 4]', '[1, 3, 5]'],
      correctAnswer: 0,
      explanation: 'range(start, stop, step) generates numbers from start to stop (exclusive) with given step.'
    },
  ];
}

function generatePythonControlFlow(): Question[] {
  return [
    {
      id: 26,
      category: 'python',
      difficulty: 'beginner',
      topic: 'control_flow',
      question: 'What is the output of: if 5 > 3: print("yes") else: print("no")?',
      options: ['yes', 'no', 'Error', 'nothing'],
      correctAnswer: 0,
      explanation: '5 > 3 is True, so the if block executes and prints "yes".'
    },
    {
      id: 27,
      category: 'python',
      difficulty: 'beginner',
      topic: 'control_flow',
      question: 'What is the output of: for i in [1, 2, 3]: print(i)?',
      options: ['1 2 3', '1\\n2\\n3', '[1, 2, 3]', 'Error'],
      correctAnswer: 1,
      explanation: 'The for loop iterates through each element and prints it on separate lines.'
    },
    {
      id: 28,
      category: 'python',
      difficulty: 'beginner',
      topic: 'control_flow',
      question: 'What is the output of: i = 0; while i < 3: print(i); i += 1?',
      options: ['0 1 2', '0\\n1\\n2', '1\\n2\\n3', 'Error'],
      correctAnswer: 1,
      explanation: 'The while loop runs while i < 3, printing 0, 1, 2 then incrementing i each time.'
    },
    {
      id: 29,
      category: 'python',
      difficulty: 'beginner',
      topic: 'control_flow',
      question: 'What is the output of: if True: print("a") elif True: print("b")?',
      options: ['a', 'b', 'a\\nb', 'Error'],
      correctAnswer: 0,
      explanation: 'The first condition is True, so its block executes and elif is not checked.'
    },
    {
      id: 30,
      category: 'python',
      difficulty: 'beginner',
      topic: 'control_flow',
      question: 'What does break do in a loop?',
      options: ['Skips current iteration', 'Exits the loop', 'Pauses the loop', 'Repeats the loop'],
      correctAnswer: 1,
      explanation: 'break immediately terminates the loop and continues execution after it.'
    },
    {
      id: 31,
      category: 'python',
      difficulty: 'beginner',
      topic: 'control_flow',
      question: 'What does continue do in a loop?',
      options: ['Exits the loop', 'Skips to next iteration', 'Pauses the loop', 'Repeats current iteration'],
      correctAnswer: 1,
      explanation: 'continue skips the rest of the current iteration and moves to the next one.'
    },
    {
      id: 32,
      category: 'python',
      difficulty: 'beginner',
      topic: 'control_flow',
      question: 'What is the output of: for i in range(3): if i == 1: continue; print(i)?',
      options: ['0\\n1\\n2', '0\\n2', '1', 'Error'],
      correctAnswer: 1,
      explanation: 'When i == 1, continue skips the print, so only 0 and 2 are printed.'
    },
    {
      id: 33,
      category: 'python',
      difficulty: 'intermediate',
      topic: 'control_flow',
      question: 'What is: 5 if 3 > 2 else 10?',
      options: ['5', '10', 'Error', 'True'],
      correctAnswer: 0,
      explanation: 'This is a ternary operator. Since 3 > 2 is True, it returns 5.'
    },
    {
      id: 34,
      category: 'python',
      difficulty: 'intermediate',
      topic: 'control_flow',
      question: 'What is: 1 and 2?',
      options: ['1', '2', 'True', 'Error'],
      correctAnswer: 1,
      explanation: '"and" returns the first falsy value or the last value if all are truthy. Both 1 and 2 are truthy, so it returns 2.'
    },
    {
      id: 35,
      category: 'python',
      difficulty: 'intermediate',
      topic: 'control_flow',
      question: 'What is: 0 or 5?',
      options: ['0', '5', 'False', 'Error'],
      correctAnswer: 1,
      explanation: '"or" returns the first truthy value or the last value. 0 is falsy, so it returns 5.'
    },
    {
      id: 36,
      category: 'python',
      difficulty: 'beginner',
      topic: 'control_flow',
      question: 'What is: not True?',
      options: ['True', 'False', '1', 'Error'],
      correctAnswer: 1,
      explanation: 'not True evaluates to False.'
    },
    {
      id: 37,
      category: 'python',
      difficulty: 'beginner',
      topic: 'control_flow',
      question: 'What is: 5 in [1, 2, 3, 4, 5]?',
      options: ['True', 'False', '5', 'Error'],
      correctAnswer: 0,
      explanation: 'The "in" operator checks if 5 is in the list. It is, so returns True.'
    },
    {
      id: 38,
      category: 'python',
      difficulty: 'beginner',
      topic: 'control_flow',
      question: 'What is: "x" in "hello"?',
      options: ['True', 'False', 'Error', 'None'],
      correctAnswer: 1,
      explanation: '"x" is not in the string "hello", so "in" returns False.'
    },
    {
      id: 39,
      category: 'python',
      difficulty: 'intermediate',
      topic: 'control_flow',
      question: 'What is the output of: for i in range(1, 4): pass; print(i)?',
      options: ['1\\n2\\n3', '3', '1', 'Error'],
      correctAnswer: 1,
      explanation: 'pass does nothing. After the loop, i has the last value it was assigned, which is 3.'
    },
    {
      id: 40,
      category: 'python',
      difficulty: 'intermediate',
      topic: 'control_flow',
      question: 'What is: [x for x in range(5) if x % 2 == 0]?',
      options: ['[0, 1, 2, 3, 4]', '[0, 2, 4]', '[1, 3]', 'Error'],
      correctAnswer: 1,
      explanation: 'This is a list comprehension with a condition. It includes only even numbers: 0, 2, 4.'
    },
    {
      id: 41,
      category: 'python',
      difficulty: 'intermediate',
      topic: 'control_flow',
      question: 'What is: [x*2 for x in [1, 2, 3]]?',
      options: ['[1, 2, 3]', '[2, 4, 6]', '[1, 4, 9]', 'Error'],
      correctAnswer: 1,
      explanation: 'This list comprehension doubles each element: [1*2, 2*2, 3*2] = [2, 4, 6].'
    },
    {
      id: 42,
      category: 'python',
      difficulty: 'intermediate',
      topic: 'control_flow',
      question: 'What is: {x: x*2 for x in [1, 2, 3]}?',
      options: ['[2, 4, 6]', '{1: 2, 2: 4, 3: 6}', 'Error', '{2, 4, 6}'],
      correctAnswer: 1,
      explanation: 'Dict comprehension creates a dictionary with x as key and x*2 as value.'
    },
    {
      id: 43,
      category: 'python',
      difficulty: 'intermediate',
      topic: 'control_flow',
      question: 'What is: any([False, False, True])?',
      options: ['True', 'False', 'Error', '[True]'],
      correctAnswer: 0,
      explanation: 'any() returns True if at least one element is truthy.'
    },
    {
      id: 44,
      category: 'python',
      difficulty: 'intermediate',
      topic: 'control_flow',
      question: 'What is: all([True, True, False])?',
      options: ['True', 'False', 'Error', '[False]'],
      correctAnswer: 1,
      explanation: 'all() returns True only if all elements are truthy.'
    },
    {
      id: 45,
      category: 'python',
      difficulty: 'advanced',
      topic: 'control_flow',
      question: 'What is the output of: i = 0; while True: if i > 2: break; print(i); i += 1?',
      options: ['0\\n1\\n2', '0\\n1\\n2\\n3', 'Infinite loop', '0\\n1'],
      correctAnswer: 0,
      explanation: 'The while loop runs until i > 2, breaking and printing 0, 1, 2.'
    },
    {
      id: 46,
      category: 'python',
      difficulty: 'advanced',
      topic: 'control_flow',
      question: 'What is: sum([1, 2, 3, 4])?',
      options: ['10', '[10]', 'Error', '4'],
      correctAnswer: 0,
      explanation: 'sum() adds all elements in the list: 1 + 2 + 3 + 4 = 10.'
    },
    {
      id: 47,
      category: 'python',
      difficulty: 'intermediate',
      topic: 'control_flow',
      question: 'What is: max([3, 1, 4, 1, 5])?',
      options: ['5', '3', 'Error', '[5]'],
      correctAnswer: 0,
      explanation: 'max() returns the largest element in the list.'
    },
    {
      id: 48,
      category: 'python',
      difficulty: 'intermediate',
      topic: 'control_flow',
      question: 'What is: min([3, 1, 4, 1, 5])?',
      options: ['1', '3', 'Error', '[1]'],
      correctAnswer: 0,
      explanation: 'min() returns the smallest element in the list.'
    },
    {
      id: 49,
      category: 'python',
      difficulty: 'intermediate',
      topic: 'control_flow',
      question: 'What is: enumerate([10, 20, 30])?',
      options: ['[(0, 10), (1, 20), (2, 30)]', '[0, 1, 2]', 'Error', 'enumerate object'],
      correctAnswer: 3,
      explanation: 'enumerate() returns an enumerate object that pairs indices with elements.'
    },
    {
      id: 50,
      category: 'python',
      difficulty: 'intermediate',
      topic: 'control_flow',
      question: 'What is the output of: for i, v in enumerate([10, 20]): print(i, v)?',
      options: ['10 20', '0 10\\n1 20', '0 1', 'Error'],
      correctAnswer: 1,
      explanation: 'enumerate pairs each index with its corresponding value.'
    },
  ];
}

function generatePythonFunctions(): Question[] {
  return [
    {
      id: 51,
      category: 'python',
      difficulty: 'beginner',
      topic: 'functions',
      question: 'What is the output of: def greet(): print("hello"); greet()?',
      options: ['Error', 'hello', '"hello"', 'None'],
      correctAnswer: 1,
      explanation: 'Defining and calling a function executes its body.'
    },
    {
      id: 52,
      category: 'python',
      difficulty: 'beginner',
      topic: 'functions',
      question: 'What is: def add(a, b): return a + b; add(2, 3)?',
      options: ['Error', '5', 'None', '"add"'],
      correctAnswer: 1,
      explanation: 'The function returns the sum of a and b. add(2, 3) returns 5.'
    },
    {
      id: 53,
      category: 'python',
      difficulty: 'beginner',
      topic: 'functions',
      question: 'What does a function with no return statement return?',
      options: ['Error', 'None', '0', 'False'],
      correctAnswer: 1,
      explanation: 'Functions without an explicit return statement return None.'
    },
    {
      id: 54,
      category: 'python',
      difficulty: 'beginner',
      topic: 'functions',
      question: 'What is: def func(a=5): return a; func()?',
      options: ['Error', '5', 'None', 'a'],
      correctAnswer: 1,
      explanation: 'func() uses the default value 5 for parameter a.'
    },
    {
      id: 55,
      category: 'python',
      difficulty: 'beginner',
      topic: 'functions',
      question: 'What is: def func(a=5): return a; func(10)?',
      options: ['5', '10', 'Error', 'None'],
      correctAnswer: 1,
      explanation: 'func(10) passes 10, overriding the default value.'
    },
    {
      id: 56,
      category: 'python',
      difficulty: 'intermediate',
      topic: 'functions',
      question: 'What is: def func(*args): return sum(args); func(1, 2, 3)?',
      options: ['Error', '(1, 2, 3)', '6', 'None'],
      correctAnswer: 2,
      explanation: '*args collects positional arguments into a tuple. sum((1, 2, 3)) = 6.'
    },
    {
      id: 57,
      category: 'python',
      difficulty: 'intermediate',
      topic: 'functions',
      question: 'What is: def func(**kwargs): return kwargs; func(a=1, b=2)?',
      options: ['Error', '{a=1, b=2}', "{'a': 1, 'b': 2}", 'None'],
      correctAnswer: 2,
      explanation: '**kwargs collects keyword arguments into a dictionary.'
    },
    {
      id: 58,
      category: 'python',
      difficulty: 'intermediate',
      topic: 'functions',
      question: 'What is a lambda function?',
      options: ['A named function', 'An anonymous function', 'A recursive function', 'Error'],
      correctAnswer: 1,
      explanation: 'Lambda is a way to create anonymous functions in Python.'
    },
    {
      id: 59,
      category: 'python',
      difficulty: 'intermediate',
      topic: 'functions',
      question: 'What is: (lambda x: x*2)(5)?',
      options: ['Error', '10', '5', 'None'],
      correctAnswer: 1,
      explanation: 'Lambda takes x and returns x*2. Called with 5, it returns 10.'
    },
    {
      id: 60,
      category: 'python',
      difficulty: 'intermediate',
      topic: 'functions',
      question: 'What is: list(map(lambda x: x*2, [1, 2, 3]))?',
      options: ['[1, 2, 3]', '[2, 4, 6]', 'Error', 'None'],
      correctAnswer: 1,
      explanation: 'map applies the lambda function to each element: [1*2, 2*2, 3*2] = [2, 4, 6].'
    },
    {
      id: 61,
      category: 'python',
      difficulty: 'intermediate',
      topic: 'functions',
      question: 'What is: list(filter(lambda x: x > 2, [1, 2, 3, 4]))?',
      options: ['[1, 2, 3, 4]', '[3, 4]', 'Error', 'None'],
      correctAnswer: 1,
      explanation: 'filter keeps elements where the lambda returns True. Only 3 and 4 are > 2.'
    },
    {
      id: 62,
      category: 'python',
      difficulty: 'intermediate',
      topic: 'functions',
      question: 'What is a recursive function?',
      options: ['A function that calls itself', 'A function that returns nothing', 'A lambda function', 'Error'],
      correctAnswer: 0,
      explanation: 'A recursive function calls itself, usually with a base case to stop recursion.'
    },
    {
      id: 63,
      category: 'python',
      difficulty: 'intermediate',
      topic: 'functions',
      question: 'What is: def factorial(n): return 1 if n <= 1 else n * factorial(n-1); factorial(5)?',
      options: ['120', '5', 'Error', 'None'],
      correctAnswer: 0,
      explanation: 'factorial(5) = 5 * 4 * 3 * 2 * 1 = 120.'
    },
    {
      id: 64,
      category: 'python',
      difficulty: 'advanced',
      topic: 'functions',
      question: 'What is a closure in Python?',
      options: ['A function that never closes', 'A nested function accessing outer scope', 'A recursive function', 'Error'],
      correctAnswer: 1,
      explanation: 'A closure is a nested function that accesses variables from its outer scope.'
    },
    {
      id: 65,
      category: 'python',
      difficulty: 'advanced',
      topic: 'functions',
      question: 'What does @property do?',
      options: ['Defines a method', 'Makes a method accessible as an attribute', 'Returns None', 'Error'],
      correctAnswer: 1,
      explanation: '@property decorator allows methods to be accessed like attributes.'
    },
    {
      id: 66,
      category: 'python',
      difficulty: 'advanced',
      topic: 'functions',
      question: 'What is a decorator?',
      options: ['A function that wraps another function', 'A class attribute', 'An error handler', 'Error'],
      correctAnswer: 0,
      explanation: 'A decorator is a function that modifies or enhances another function or class.'
    },
    {
      id: 67,
      category: 'python',
      difficulty: 'intermediate',
      topic: 'functions',
      question: 'What is: def outer(): x = 1; def inner(): return x; return inner(); outer()?',
      options: ['Error', '1', 'None', 'inner'],
      correctAnswer: 1,
      explanation: 'inner() returns x=1 from outer scope (closure), so outer() returns 1.'
    },
    {
      id: 68,
      category: 'python',
      difficulty: 'intermediate',
      topic: 'functions',
      question: 'What is: sorted([3, 1, 2], key=lambda x: -x)?',
      options: ['[1, 2, 3]', '[3, 2, 1]', 'Error', 'None'],
      correctAnswer: 1,
      explanation: 'key=lambda x: -x sorts by negative values, giving descending order.'
    },
    {
      id: 69,
      category: 'python',
      difficulty: 'intermediate',
      topic: 'functions',
      question: 'How many times does this print "x": for i in range(3): print("x")?',
      options: ['1', '2', '3', 'Error'],
      correctAnswer: 2,
      explanation: 'range(3) iterates 3 times (0, 1, 2), so "x" is printed 3 times.'
    },
    {
      id: 70,
      category: 'python',
      difficulty: 'intermediate',
      topic: 'functions',
      question: 'What is: def func(x): y = x + 1; return y; func(5)?',
      options: ['5', '6', 'Error', 'None'],
      correctAnswer: 1,
      explanation: 'func(5) creates y = 5 + 1 = 6 and returns it.'
    },
    {
      id: 71,
      category: 'python',
      difficulty: 'intermediate',
      topic: 'functions',
      question: 'What is the scope of a variable defined in a function?',
      options: ['Global', 'Local to the function', 'No scope', 'Error'],
      correctAnswer: 1,
      explanation: 'Variables defined in a function are local to that function by default.'
    },
    {
      id: 72,
      category: 'python',
      difficulty: 'intermediate',
      topic: 'functions',
      question: 'What is: x = 5; def func(): global x; x = 10; func(); print(x)?',
      options: ['5', '10', 'Error', 'None'],
      correctAnswer: 1,
      explanation: 'The global keyword modifies the global x. func() changes it to 10.'
    },
    {
      id: 73,
      category: 'python',
      difficulty: 'advanced',
      topic: 'functions',
      question: 'What does *args allow?',
      options: ['Only one argument', 'Multiple positional arguments', 'Only keyword arguments', 'Error'],
      correctAnswer: 1,
      explanation: '*args allows a function to accept any number of positional arguments.'
    },
    {
      id: 74,
      category: 'python',
      difficulty: 'advanced',
      topic: 'functions',
      question: 'What does **kwargs allow?',
      options: ['Only positional arguments', 'Only one argument', 'Multiple keyword arguments', 'Error'],
      correctAnswer: 2,
      explanation: '**kwargs allows a function to accept any number of keyword arguments.'
    },
    {
      id: 75,
      category: 'python',
      difficulty: 'advanced',
      topic: 'functions',
      question: 'What is: def func(a, *args, **kwargs): return (a, args, kwargs); func(1, 2, 3, x=4)?',
      options: ['Error', '(1, (2, 3), {"x": 4})', '(1, 2, 3)', 'None'],
      correctAnswer: 1,
      explanation: 'a=1, args=(2,3), kwargs={"x":4}. The function returns all three.'
    },
  ];
}

function generatePythonDataStructures(): Question[] {
  return [
    {
      id: 76,
      category: 'python',
      difficulty: 'beginner',
      topic: 'list_dict',
      question: 'What is: [1, 2, 3][1]?',
      options: ['1', '2', '3', 'Error'],
      correctAnswer: 1,
      explanation: 'Lists are indexed starting at 0. Index 1 refers to the second element, which is 2.'
    },
    {
      id: 77,
      category: 'python',
      difficulty: 'beginner',
      topic: 'list_dict',
      question: 'What is: [1, 2, 3, 4, 5][1:3]?',
      options: ['[1, 2]', '[2, 3]', '[2, 3, 4]', 'Error'],
      correctAnswer: 1,
      explanation: 'Slicing [1:3] gets elements from index 1 to 2 (3 is exclusive).'
    },
    {
      id: 78,
      category: 'python',
      difficulty: 'beginner',
      topic: 'list_dict',
      question: 'What is: {"name": "John", "age": 30}["name"]?',
      options: ['"name"', '"John"', '"age"', 'Error'],
      correctAnswer: 1,
      explanation: 'Dicts use keys to access values. The key "name" has value "John".'
    },
    {
      id: 79,
      category: 'python',
      difficulty: 'beginner',
      topic: 'list_dict',
      question: 'What is: {"a": 1}.keys()?',
      options: ['[1]', 'dict_keys(["a"])', '"a"', 'Error'],
      correctAnswer: 1,
      explanation: '.keys() returns a dict_keys object containing all keys.'
    },
    {
      id: 80,
      category: 'python',
      difficulty: 'beginner',
      topic: 'list_dict',
      question: 'What is: {"a": 1}.values()?',
      options: ['["a"]', 'dict_values([1])', '1', 'Error'],
      correctAnswer: 1,
      explanation: '.values() returns a dict_values object containing all values.'
    },
    {
      id: 81,
      category: 'python',
      difficulty: 'beginner',
      topic: 'list_dict',
      question: 'What is: {"a": 1, "b": 2}.items()?',
      options: ['Error', 'dict_items([(\'a\', 1), (\'b\', 2)])', '[("a", 1), ("b", 2)]', 'None'],
      correctAnswer: 1,
      explanation: '.items() returns key-value pairs as tuples.'
    },
    {
      id: 82,
      category: 'python',
      difficulty: 'intermediate',
      topic: 'list_dict',
      question: 'What is: d = {"a": 1}; d["b"] = 2; d?',
      options: ["{'a': 1}", "{'a': 1, 'b': 2}", 'Error', 'None'],
      correctAnswer: 1,
      explanation: 'Adding a new key-value pair to a dict updates it.'
    },
    {
      id: 83,
      category: 'python',
      difficulty: 'intermediate',
      topic: 'list_dict',
      question: 'What is: [1, 2, 3][-2:]?',
      options: ['[2, 3]', '[1, 2]', '[3]', 'Error'],
      correctAnswer: 0,
      explanation: '[-2:] gets the last 2 elements: [2, 3].'
    },
    {
      id: 84,
      category: 'python',
      difficulty: 'intermediate',
      topic: 'list_dict',
      question: 'What is: [1, 2, 3][::-1]?',
      options: ['[1, 2, 3]', '[3, 2, 1]', 'Error', 'None'],
      correctAnswer: 1,
      explanation: '[::-1] reverses the list.'
    },
    {
      id: 85,
      category: 'python',
      difficulty: 'intermediate',
      topic: 'list_dict',
      question: 'What is: "hello"[::2]?',
      options: ['"hlo"', '"ello"', '"hel"', 'Error'],
      correctAnswer: 0,
      explanation: '[::2] gets every second character: h(0), l(2), o(4).'
    },
    {
      id: 86,
      category: 'python',
      difficulty: 'intermediate',
      topic: 'list_dict',
      question: 'What is: x = [1, 2, 3]; x.remove(2); x?',
      options: ['[1, 3]', '[1, 2, 3]', 'Error', '[2]'],
      correctAnswer: 0,
      explanation: 'remove() removes the first occurrence of the value 2.'
    },
    {
      id: 87,
      category: 'python',
      difficulty: 'intermediate',
      topic: 'list_dict',
      question: 'What is: x = [1, 2, 3]; x.pop(); x?',
      options: ['[1, 2]', '[1, 2, 3]', '[3]', 'Error'],
      correctAnswer: 0,
      explanation: 'pop() removes and returns the last element (3).'
    },
    {
      id: 88,
      category: 'python',
      difficulty: 'intermediate',
      topic: 'list_dict',
      question: 'What is: x = [1, 2, 3]; x.reverse(); x?',
      options: ['[3, 2, 1]', '[1, 2, 3]', 'Error', 'None'],
      correctAnswer: 0,
      explanation: 'reverse() reverses the list in place.'
    },
    {
      id: 89,
      category: 'python',
      difficulty: 'intermediate',
      topic: 'list_dict',
      question: 'What is: x = [3, 1, 2]; x.sort(); x?',
      options: ['[1, 2, 3]', '[3, 1, 2]', 'Error', 'None'],
      correctAnswer: 0,
      explanation: 'sort() sorts the list in place.'
    },
    {
      id: 90,
      category: 'python',
      difficulty: 'intermediate',
      topic: 'list_dict',
      question: 'What is: [1, 2, 3].index(2)?',
      options: ['1', '2', '3', 'Error'],
      correctAnswer: 0,
      explanation: 'index() returns the position of the value. 2 is at index 1.'
    },
    {
      id: 91,
      category: 'python',
      difficulty: 'intermediate',
      topic: 'list_dict',
      question: 'What is: [1, 2, 2, 3].count(2)?',
      options: ['1', '2', '3', 'Error'],
      correctAnswer: 1,
      explanation: 'count() returns how many times the value appears. 2 appears twice.'
    },
    {
      id: 92,
      category: 'python',
      difficulty: 'intermediate',
      topic: 'list_dict',
      question: 'What is: {"a": 1}.get("b")?',
      options: ['"b"', 'None', 'Error', '0'],
      correctAnswer: 1,
      explanation: 'get() returns None if key is not found (safe method).'
    },
    {
      id: 93,
      category: 'python',
      difficulty: 'intermediate',
      topic: 'list_dict',
      question: 'What is: {"a": 1}.get("b", "default")?',
      options: ['"b"', '"default"', 'None', 'Error'],
      correctAnswer: 1,
      explanation: 'get() returns the default value if key is not found.'
    },
    {
      id: 94,
      category: 'python',
      difficulty: 'intermediate',
      topic: 'list_dict',
      question: 'What is: "a" in {"a": 1, "b": 2}?',
      options: ['False', 'True', 'Error', 'None'],
      correctAnswer: 1,
      explanation: '"in" checks if the key exists in the dict.'
    },
    {
      id: 95,
      category: 'python',
      difficulty: 'advanced',
      topic: 'list_dict',
      question: 'What is: x = [1, 2]; y = x; y.append(3); x?',
      options: ['[1, 2]', '[1, 2, 3]', 'Error', '[3]'],
      correctAnswer: 1,
      explanation: 'y = x creates a reference, not a copy. Modifying y affects x.'
    },
    {
      id: 96,
      category: 'python',
      difficulty: 'advanced',
      topic: 'list_dict',
      question: 'What is: x = [1, 2]; y = x.copy(); y.append(3); x?',
      options: ['[1, 2]', '[1, 2, 3]', 'Error', 'None'],
      correctAnswer: 0,
      explanation: 'copy() creates a shallow copy. Modifying y does not affect x.'
    },
    {
      id: 97,
      category: 'python',
      difficulty: 'advanced',
      topic: 'list_dict',
      question: 'What is a shallow copy vs deep copy?',
      options: ['Both are identical', 'Shallow copies nested objects by reference, deep copies recursively', 'No difference', 'Error'],
      correctAnswer: 1,
      explanation: 'Shallow copy copies the outer list but references nested objects. Deep copy copies everything.'
    },
    {
      id: 98,
      category: 'python',
      difficulty: 'advanced',
      topic: 'list_dict',
      question: 'What is: {1, 2, 3} & {2, 3, 4}?',
      options: ['{1, 2, 3, 4}', '{2, 3}', 'Error', '{1, 4}'],
      correctAnswer: 1,
      explanation: '& is intersection. Common elements are {2, 3}.'
    },
    {
      id: 99,
      category: 'python',
      difficulty: 'advanced',
      topic: 'list_dict',
      question: 'What is: {1, 2, 3} | {2, 3, 4}?',
      options: ['{2, 3}', '{1, 2, 3, 4}', 'Error', '{1, 4}'],
      correctAnswer: 1,
      explanation: '| is union. All elements combined are {1, 2, 3, 4}.'
    },
    {
      id: 100,
      category: 'python',
      difficulty: 'advanced',
      topic: 'list_dict',
      question: 'What is: {1, 2, 3} - {2, 3, 4}?',
      options: ['{1, 2, 3, 4}', '{2, 3}', '{1}', '{4}'],
      correctAnswer: 2,
      explanation: '- is difference. Elements in first set but not in second: {1}.'
    },
  ];
}

function generatePythonOOP(): Question[] {
  return [
    {
      id: 101,
      category: 'python',
      difficulty: 'intermediate',
      topic: 'oop',
      question: 'What is a class in Python?',
      options: ['A function', 'A blueprint for creating objects', 'A variable', 'Error'],
      correctAnswer: 1,
      explanation: 'A class is a template that defines properties and methods for objects.'
    },
    {
      id: 102,
      category: 'python',
      difficulty: 'intermediate',
      topic: 'oop',
      question: 'What is an instance?',
      options: ['A class', 'An object created from a class', 'A function', 'Error'],
      correctAnswer: 1,
      explanation: 'An instance is a specific object created from a class.'
    },
    {
      id: 103,
      category: 'python',
      difficulty: 'intermediate',
      topic: 'oop',
      question: 'What is __init__?',
      options: ['A class', 'The constructor method', 'An attribute', 'Error'],
      correctAnswer: 1,
      explanation: '__init__ is the special method called when an instance is created.'
    },
    {
      id: 104,
      category: 'python',
      difficulty: 'intermediate',
      topic: 'oop',
      question: 'What is self?',
      options: ['A function', 'A reference to the instance', 'A global variable', 'Error'],
      correctAnswer: 1,
      explanation: 'self refers to the instance the method is being called on.'
    },
    {
      id: 105,
      category: 'python',
      difficulty: 'intermediate',
      topic: 'oop',
      question: 'What is: class Dog: def bark(self): print("woof"); d = Dog(); d.bark()?',
      options: ['Error', 'woof', 'None', '"woof"'],
      correctAnswer: 1,
      explanation: 'Creating an instance and calling its method prints "woof".'
    },
    {
      id: 106,
      category: 'python',
      difficulty: 'intermediate',
      topic: 'oop',
      question: 'What is: class Person: def __init__(self, name): self.name = name; p = Person("John"); p.name?',
      options: ['"John"', '"Person"', 'Error', 'None'],
      correctAnswer: 0,
      explanation: '__init__ sets self.name to "John".'
    },
    {
      id: 107,
      category: 'python',
      difficulty: 'intermediate',
      topic: 'oop',
      question: 'What is inheritance?',
      options: ['Creating an instance', 'A class inheriting from another class', 'A function call', 'Error'],
      correctAnswer: 1,
      explanation: 'Inheritance allows a class to inherit properties and methods from another class.'
    },
    {
      id: 108,
      category: 'python',
      difficulty: 'intermediate',
      topic: 'oop',
      question: 'What is: class Animal: pass; class Dog(Animal): pass; d = Dog(); isinstance(d, Animal)?',
      options: ['Error', 'True', 'False', 'None'],
      correctAnswer: 1,
      explanation: 'isinstance checks if d is an instance of Animal or its subclass Dog. It is True.'
    },
    {
      id: 109,
      category: 'python',
      difficulty: 'intermediate',
      topic: 'oop',
      question: 'What is method overriding?',
      options: ['Calling a method', 'Subclass redefining parent method', 'Creating a new class', 'Error'],
      correctAnswer: 1,
      explanation: 'Method overriding is when a subclass provides its own implementation of a parent method.'
    },
    {
      id: 110,
      category: 'python',
      difficulty: 'intermediate',
      topic: 'oop',
      question: 'What is super()?',
      options: ['A class', 'References the parent class', 'A function', 'Error'],
      correctAnswer: 1,
      explanation: 'super() gives access to methods in the parent class.'
    },
    {
      id: 111,
      category: 'python',
      difficulty: 'advanced',
      topic: 'oop',
      question: 'What is encapsulation?',
      options: ['Inheritance', 'Hiding internal details', 'Polymorphism', 'Error'],
      correctAnswer: 1,
      explanation: 'Encapsulation bundles data and methods together, hiding implementation details.'
    },
    {
      id: 112,
      category: 'python',
      difficulty: 'advanced',
      topic: 'oop',
      question: 'What is polymorphism?',
      options: ['Using one interface for different types', 'Inheriting from multiple classes', 'Overloading methods', 'Error'],
      correctAnswer: 0,
      explanation: 'Polymorphism allows objects of different types to be used through the same interface.'
    },
    {
      id: 113,
      category: 'python',
      difficulty: 'advanced',
      topic: 'oop',
      question: 'What is a private attribute (prefixed with __)?',
      options: ['Inherited from parent', 'Name-mangled, harder to access', 'Global variable', 'Error'],
      correctAnswer: 1,
      explanation: 'Double underscore causes name mangling, making the attribute harder to access from outside.'
    },
    {
      id: 114,
      category: 'python',
      difficulty: 'advanced',
      topic: 'oop',
      question: 'What is @staticmethod?',
      options: ['Decorator for instance methods', 'Method that doesn\'t need self or cls', 'A class method', 'Error'],
      correctAnswer: 1,
      explanation: '@staticmethod decorates methods that don\'t use self or cls and can be called on the class.'
    },
    {
      id: 115,
      category: 'python',
      difficulty: 'advanced',
      topic: 'oop',
      question: 'What is @classmethod?',
      options: ['Instance method', 'Method receiving cls instead of self', 'Static method', 'Error'],
      correctAnswer: 1,
      explanation: '@classmethod decorates methods that receive cls (the class) instead of self.'
    },
    {
      id: 116,
      category: 'python',
      difficulty: 'advanced',
      topic: 'oop',
      question: 'What is a dunder method?',
      options: ['A private method', 'Special method with __ prefix and suffix', 'A static method', 'Error'],
      correctAnswer: 1,
      explanation: 'Dunder methods (like __init__, __str__) have double underscores and provide special functionality.'
    },
    {
      id: 117,
      category: 'python',
      difficulty: 'advanced',
      topic: 'oop',
      question: 'What is __str__?',
      options: ['Static method', 'String representation of object', 'Inheritance', 'Error'],
      correctAnswer: 1,
      explanation: '__str__ returns a user-friendly string representation of an object.'
    },
    {
      id: 118,
      category: 'python',
      difficulty: 'advanced',
      topic: 'oop',
      question: 'What is __repr__?',
      options: ['Instance method', 'Official string representation', 'Inheritance', 'Error'],
      correctAnswer: 1,
      explanation: '__repr__ returns an official string representation, ideally evaluable to recreate the object.'
    },
    {
      id: 119,
      category: 'python',
      difficulty: 'advanced',
      topic: 'oop',
      question: 'What is multiple inheritance?',
      options: ['Inheriting from one class', 'A class inheriting from multiple classes', 'Interface', 'Error'],
      correctAnswer: 1,
      explanation: 'Multiple inheritance allows a class to inherit from multiple parent classes.'
    },
    {
      id: 120,
      category: 'python',
      difficulty: 'advanced',
      topic: 'oop',
      question: 'What is the MRO (Method Resolution Order)?',
      options: ['Method Representation Object', 'Order in which methods are searched in inheritance', 'Method Retrieval Operation', 'Error'],
      correctAnswer: 1,
      explanation: 'MRO determines the order in which parent classes are searched for methods.'
    },
  ];
}

function generatePythonModules(): Question[] {
  return [
    {
      id: 121,
      category: 'python',
      difficulty: 'beginner',
      topic: 'modules',
      question: 'What is an import statement?',
      options: ['A variable', 'A way to use code from other files/packages', 'A function', 'Error'],
      correctAnswer: 1,
      explanation: 'import allows you to use modules and packages from other files.'
    },
    {
      id: 122,
      category: 'python',
      difficulty: 'beginner',
      topic: 'modules',
      question: 'What is: import math; math.sqrt(16)?',
      options: ['Error', '4.0', '4', 'None'],
      correctAnswer: 1,
      explanation: 'The math module contains sqrt function. math.sqrt(16) = 4.0.'
    },
    {
      id: 123,
      category: 'python',
      difficulty: 'beginner',
      topic: 'modules',
      question: 'What is: from math import sqrt; sqrt(16)?',
      options: ['Error', '4.0', 'None', 'math.sqrt(16)'],
      correctAnswer: 1,
      explanation: 'from...import imports specific functions directly.'
    },
    {
      id: 124,
      category: 'python',
      difficulty: 'beginner',
      topic: 'modules',
      question: 'What is: import datetime; datetime.datetime.now()?',
      options: ['Error', 'Current date and time', 'None', 'a datetime object'],
      correctAnswer: 2,
      explanation: 'datetime.datetime.now() returns the current date and time as a datetime object.'
    },
    {
      id: 125,
      category: 'python',
      difficulty: 'beginner',
      topic: 'modules',
      question: 'What is: import random; random.randint(1, 10)?',
      options: ['Error', 'A random integer between 1 and 10', 'None', 'a float'],
      correctAnswer: 1,
      explanation: 'randint returns a random integer in the specified range (inclusive).'
    },
    {
      id: 126,
      category: 'python',
      difficulty: 'intermediate',
      topic: 'modules',
      question: 'What is a package in Python?',
      options: ['A module', 'A directory with __init__.py', 'A file', 'Error'],
      correctAnswer: 1,
      explanation: 'A package is a directory containing Python modules and an __init__.py file.'
    },
    {
      id: 127,
      category: 'python',
      difficulty: 'intermediate',
      topic: 'modules',
      question: 'What is __name__?',
      options: ['Module attribute', 'Identifier of the current module', 'Function name', 'Error'],
      correctAnswer: 1,
      explanation: '__name__ is "__main__" when the script runs directly, or the module name when imported.'
    },
    {
      id: 128,
      category: 'python',
      difficulty: 'intermediate',
      topic: 'modules',
      question: 'What is: if __name__ == "__main__": ... used for?',
      options: ['Import check', 'Check if module runs as main script', 'Function definition', 'Error'],
      correctAnswer: 1,
      explanation: 'This idiom runs code only when the script is executed directly, not when imported.'
    },
    {
      id: 129,
      category: 'python',
      difficulty: 'intermediate',
      topic: 'modules',
      question: 'What is: import os; os.getcwd()?',
      options: ['Error', 'Current working directory', 'None', 'a file path'],
      correctAnswer: 1,
      explanation: 'os.getcwd() returns the current working directory as a string.'
    },
    {
      id: 130,
      category: 'python',
      difficulty: 'intermediate',
      topic: 'modules',
      question: 'What is: import json; json.dumps({"a": 1})?',
      options: ['Error', '\'{"a": 1}\'', '{"a": 1}', 'None'],
      correctAnswer: 1,
      explanation: 'json.dumps converts a Python dict to a JSON string.'
    },
    {
      id: 131,
      category: 'python',
      difficulty: 'intermediate',
      topic: 'modules',
      question: 'What is: import json; json.loads(\'{"a": 1}\')?',
      options: ['Error', '{"a": 1}', '\'{"a": 1}\'', 'None'],
      correctAnswer: 1,
      explanation: 'json.loads converts a JSON string to a Python dict.'
    },
    {
      id: 132,
      category: 'python',
      difficulty: 'intermediate',
      topic: 'modules',
      question: 'What is: import sys; sys.version?',
      options: ['Error', 'Python version string', 'None', 'a module'],
      correctAnswer: 1,
      explanation: 'sys.version gives the Python version information.'
    },
    {
      id: 133,
      category: 'python',
      difficulty: 'intermediate',
      topic: 'modules',
      question: 'What is: import re; re.findall(r"\\d", "a1b2c3")?',
      options: ['Error', '[\'1\', \'2\', \'3\']', '["a", "b", "c"]', 'None'],
      correctAnswer: 1,
      explanation: 're.findall finds all digits in the string.'
    },
    {
      id: 134,
      category: 'python',
      difficulty: 'intermediate',
      topic: 'modules',
      question: 'What is: from collections import Counter; Counter([1, 1, 2])?',
      options: ['Error', 'Counter({1: 2, 2: 1})', '[1, 1, 2]', 'None'],
      correctAnswer: 1,
      explanation: 'Counter counts occurrences of elements.'
    },
    {
      id: 135,
      category: 'python',
      difficulty: 'intermediate',
      topic: 'modules',
      question: 'What is: import itertools; list(itertools.combinations([1, 2, 3], 2))?',
      options: ['Error', '[(1, 2), (1, 3), (2, 3)]', '[(1, 1), (2, 2), (3, 3)]', 'None'],
      correctAnswer: 1,
      explanation: 'combinations generates all possible pairs from the list.'
    },
    {
      id: 136,
      category: 'python',
      difficulty: 'advanced',
      topic: 'modules',
      question: 'What is __all__?',
      options: ['All variables', 'Defines public API of a module', 'Global variables', 'Error'],
      correctAnswer: 1,
      explanation: '__all__ specifies which names should be exported when using from module import *.'
    },
    {
      id: 137,
      category: 'python',
      difficulty: 'advanced',
      topic: 'modules',
      question: 'What is: import pickle; pickle.dumps({"a": 1})?',
      options: ['Error', 'Serialized binary data', '{"a": 1}', 'None'],
      correctAnswer: 1,
      explanation: 'pickle.dumps serializes a Python object into binary data.'
    },
    {
      id: 138,
      category: 'python',
      difficulty: 'advanced',
      topic: 'modules',
      question: 'What is a relative import?',
      options: ['Importing from current package', 'from . import module or from ..package import module', 'Importing anything', 'Error'],
      correctAnswer: 1,
      explanation: 'Relative imports use dots to import from the current or parent packages.'
    },
    {
      id: 139,
      category: 'python',
      difficulty: 'advanced',
      topic: 'modules',
      question: 'What is: import functools; functools.lru_cache used for?',
      options: ['Module management', 'Caching function results', 'Function timing', 'Error'],
      correctAnswer: 1,
      explanation: 'lru_cache is a decorator for caching function results.'
    },
    {
      id: 140,
      category: 'python',
      difficulty: 'advanced',
      topic: 'modules',
      question: 'What is: from typing import List; def func(x: List[int]): pass used for?',
      options: ['Module imports', 'Type hints for better code documentation', 'Function definition', 'Error'],
      correctAnswer: 1,
      explanation: 'Type hints specify expected types for parameters and returns.'
    },
  ];
}

function generatePythonFileIO(): Question[] {
  return [
    {
      id: 141,
      category: 'python',
      difficulty: 'intermediate',
      topic: 'file_io',
      question: 'What is: open("file.txt", "r")?',
      options: ['Error', 'Opens file in read mode', 'Returns file content', 'None'],
      correctAnswer: 1,
      explanation: 'open() returns a file object in the specified mode. "r" is read mode.'
    },
    {
      id: 142,
      category: 'python',
      difficulty: 'intermediate',
      topic: 'file_io',
      question: 'What does: f.read() do?',
      options: ['Opens a file', 'Reads entire file as a string', 'Writes to file', 'Error'],
      correctAnswer: 1,
      explanation: 'read() returns the entire file contents as a single string.'
    },
    {
      id: 143,
      category: 'python',
      difficulty: 'intermediate',
      topic: 'file_io',
      question: 'What does: f.readlines() do?',
      options: ['Opens a file', 'Reads entire file', 'Reads file as list of lines', 'Error'],
      correctAnswer: 2,
      explanation: 'readlines() returns a list where each element is a line.'
    },
    {
      id: 144,
      category: 'python',
      difficulty: 'intermediate',
      topic: 'file_io',
      question: 'What does: f.write("hello") do?',
      options: ['Reads file', 'Writes string to file', 'Closes file', 'Error'],
      correctAnswer: 1,
      explanation: 'write() writes a string to the file.'
    },
    {
      id: 145,
      category: 'python',
      difficulty: 'intermediate',
      topic: 'file_io',
      question: 'What does: f.close() do?',
      options: ['Opens file', 'Flushes data and closes file', 'Reads file', 'Error'],
      correctAnswer: 1,
      explanation: 'close() flushes buffered data and closes the file.'
    },
    {
      id: 146,
      category: 'python',
      difficulty: 'intermediate',
      topic: 'file_io',
      question: 'What is: with open("file.txt") as f: f.read() used for?',
      options: ['Error', 'Context manager to auto-close file', 'Manual file handling', 'None'],
      correctAnswer: 1,
      explanation: 'with statement automatically closes the file when done, even if an error occurs.'
    },
    {
      id: 147,
      category: 'python',
      difficulty: 'intermediate',
      topic: 'file_io',
      question: 'What modes can open() use?',
      options: ['"r" only', '"r", "w", "a", "b", "+"', '"r" and "w"', 'Error'],
      correctAnswer: 1,
      explanation: 'Common modes: "r" (read), "w" (write), "a" (append), "b" (binary), "+" (read/write).'
    },
    {
      id: 148,
      category: 'python',
      difficulty: 'intermediate',
      topic: 'file_io',
      question: 'What does "w" mode do?',
      options: ['Reads file', 'Writes and creates/overwrites file', 'Appends to file', 'Error'],
      correctAnswer: 1,
      explanation: '"w" mode opens for writing, creating the file if it doesn\'t exist or overwriting it.'
    },
    {
      id: 149,
      category: 'python',
      difficulty: 'intermediate',
      topic: 'file_io',
      question: 'What does "a" mode do?',
      options: ['Reads file', 'Writes from beginning', 'Appends to end of file', 'Error'],
      correctAnswer: 2,
      explanation: '"a" mode appends to the end of the file without overwriting.'
    },
    {
      id: 150,
      category: 'python',
      difficulty: 'intermediate',
      topic: 'file_io',
      question: 'What is: f.seek(0) used for?',
      options: ['Closes file', 'Moves pointer to beginning', 'Reads file', 'Error'],
      correctAnswer: 1,
      explanation: 'seek() moves the file pointer to a specific position. seek(0) goes to the start.'
    },
    {
      id: 151,
      category: 'python',
      difficulty: 'intermediate',
      topic: 'file_io',
      question: 'What is: f.tell() used for?',
      options: ['Closes file', 'Returns current file pointer position', 'Reads file', 'Error'],
      correctAnswer: 1,
      explanation: 'tell() returns the current position of the file pointer.'
    },
    {
      id: 152,
      category: 'python',
      difficulty: 'intermediate',
      topic: 'file_io',
      question: 'What is: import os; os.path.exists("file.txt") used for?',
      options: ['Opens file', 'Checks if file exists', 'Reads file', 'Error'],
      correctAnswer: 1,
      explanation: 'os.path.exists() returns True if the file or directory exists.'
    },
    {
      id: 153,
      category: 'python',
      difficulty: 'intermediate',
      topic: 'file_io',
      question: 'What is: import os; os.remove("file.txt") used for?',
      options: ['Opens file', 'Deletes file', 'Reads file', 'Error'],
      correctAnswer: 1,
      explanation: 'os.remove() deletes a file.'
    },
    {
      id: 154,
      category: 'python',
      difficulty: 'intermediate',
      topic: 'file_io',
      question: 'What is: import shutil; shutil.copy("src", "dst") used for?',
      options: ['Opens file', 'Deletes file', 'Copies file to new location', 'Error'],
      correctAnswer: 2,
      explanation: 'shutil.copy() copies a file from source to destination.'
    },
    {
      id: 155,
      category: 'python',
      difficulty: 'advanced',
      topic: 'file_io',
      question: 'What is: import csv; csv.reader() used for?',
      options: ['Open file', 'Reads CSV file', 'Writes JSON', 'Error'],
      correctAnswer: 1,
      explanation: 'csv.reader() reads CSV files and parses them into rows.'
    },
    {
      id: 156,
      category: 'python',
      difficulty: 'advanced',
      topic: 'file_io',
      question: 'What is encoding in file operations?',
      options: ['File mode', 'Character encoding like UTF-8', 'File path', 'Error'],
      correctAnswer: 1,
      explanation: 'Encoding specifies how characters are represented. UTF-8 is common.'
    },
    {
      id: 157,
      category: 'python',
      difficulty: 'advanced',
      topic: 'file_io',
      question: 'What is: open("file.txt", encoding="utf-8") used for?',
      options: ['Error', 'Opens file with UTF-8 encoding', 'Writes file', 'None'],
      correctAnswer: 1,
      explanation: 'Specifying encoding ensures correct character interpretation when reading/writing.'
    },
    {
      id: 158,
      category: 'python',
      difficulty: 'advanced',
      topic: 'file_io',
      question: 'What is: import pathlib; pathlib.Path("file.txt") used for?',
      options: ['String paths', 'Object-oriented path handling', 'File reading', 'Error'],
      correctAnswer: 1,
      explanation: 'pathlib.Path provides object-oriented file path manipulation, more robust than strings.'
    },
    {
      id: 159,
      category: 'python',
      difficulty: 'advanced',
      topic: 'file_io',
      question: 'What is: f.writelines(["a\\n", "b\\n"]) used for?',
      options: ['Reads file', 'Writes list of strings', 'Closes file', 'Error'],
      correctAnswer: 1,
      explanation: 'writelines() writes multiple strings from a list to the file.'
    },
    {
      id: 160,
      category: 'python',
      difficulty: 'advanced',
      topic: 'file_io',
      question: 'What is a buffer in file I/O?',
      options: ['File mode', 'Temporary storage for data', 'Encoding type', 'Error'],
      correctAnswer: 1,
      explanation: 'A buffer temporarily holds data before it\'s written to disk or read from disk.'
    },
  ];
}

function generatePythonAdvanced(): Question[] {
  return [
    {
      id: 161,
      category: 'python',
      difficulty: 'advanced',
      topic: 'oop',
      question: 'What is a generator?',
      options: ['A class', 'Function that yields values one at a time', 'A loop', 'Error'],
      correctAnswer: 1,
      explanation: 'A generator uses yield to return values lazily, saving memory.'
    },
    {
      id: 162,
      category: 'python',
      difficulty: 'advanced',
      topic: 'oop',
      question: 'What is: def gen(): yield 1; yield 2; list(gen())?',
      options: ['Error', '[1, 2]', '(1, 2)', 'None'],
      correctAnswer: 1,
      explanation: 'Generators can be converted to lists. list(gen()) = [1, 2].'
    },
    {
      id: 163,
      category: 'python',
      difficulty: 'advanced',
      topic: 'oop',
      question: 'What is a context manager?',
      options: ['A function', 'Object that manages resources via __enter__ and __exit__', 'A loop', 'Error'],
      correctAnswer: 1,
      explanation: 'Context managers handle setup and cleanup using with statements.'
    },
    {
      id: 164,
      category: 'python',
      difficulty: 'advanced',
      topic: 'oop',
      question: 'What is: from contextlib import contextmanager used for?',
      options: ['Error', 'Decorator to create context managers', 'File handling', 'None'],
      correctAnswer: 1,
      explanation: '@contextmanager is a decorator for easy context manager creation.'
    },
    {
      id: 165,
      category: 'python',
      difficulty: 'advanced',
      topic: 'oop',
      question: 'What is a descriptor?',
      options: ['Function', 'Object defining __get__, __set__, __delete__', 'Variable', 'Error'],
      correctAnswer: 1,
      explanation: 'Descriptors control how attributes are accessed, set, or deleted.'
    },
    {
      id: 166,
      category: 'python',
      difficulty: 'advanced',
      topic: 'oop',
      question: 'What is a metaclass?',
      options: ['A class', 'Class of a class', 'An instance', 'Error'],
      correctAnswer: 1,
      explanation: 'A metaclass is a class whose instances are classes.'
    },
    {
      id: 167,
      category: 'python',
      difficulty: 'advanced',
      topic: 'oop',
      question: 'What is __getattr__?',
      options: ['Get attribute', 'Called when attribute is not found', 'Property', 'Error'],
      correctAnswer: 1,
      explanation: '__getattr__ is called when an attribute lookup fails.'
    },
    {
      id: 168,
      category: 'python',
      difficulty: 'advanced',
      topic: 'oop',
      question: 'What is __getattribute__?',
      options: ['Get attribute', 'Called for all attribute access', 'Property', 'Error'],
      correctAnswer: 1,
      explanation: '__getattribute__ is called for every attribute access.'
    },
    {
      id: 169,
      category: 'python',
      difficulty: 'advanced',
      topic: 'oop',
      question: 'What is *args in function calls?',
      options: ['Single argument', 'Unpacks iterable into multiple arguments', 'Keyword args', 'Error'],
      correctAnswer: 1,
      explanation: '*args unpacks a sequence (list, tuple) into individual arguments.'
    },
    {
      id: 170,
      category: 'python',
      difficulty: 'advanced',
      topic: 'oop',
      question: 'What is **kwargs in function calls?',
      options: ['Single argument', 'Unpacks dict into keyword arguments', 'Positional args', 'Error'],
      correctAnswer: 1,
      explanation: '**kwargs unpacks a dictionary into keyword arguments.'
    },
    {
      id: 171,
      category: 'python',
      difficulty: 'advanced',
      topic: 'oop',
      question: 'What is a slice object?',
      options: ['String slice', 'Object representing slicing', 'Indexing', 'Error'],
      correctAnswer: 1,
      explanation: 'slice(start, stop, step) creates an object for slicing sequences.'
    },
    {
      id: 172,
      category: 'python',
      difficulty: 'advanced',
      topic: 'oop',
      question: 'What is: [1, 2, 3][slice(1, 3)]?',
      options: ['Error', '[2, 3]', '[1, 2]', 'None'],
      correctAnswer: 1,
      explanation: 'slice(1, 3) works like [1:3], returning [2, 3].'
    },
    {
      id: 173,
      category: 'python',
      difficulty: 'advanced',
      topic: 'oop',
      question: 'What is __call__?',
      options: ['Function call', 'Makes instance callable like a function', 'Property', 'Error'],
      correctAnswer: 1,
      explanation: '__call__ makes an instance callable like a function.'
    },
    {
      id: 174,
      category: 'python',
      difficulty: 'advanced',
      topic: 'oop',
      question: 'What is: class X: def __call__(self): return "hi"; X()() ?',
      options: ['Error', '"hi"', 'None', 'callable'],
      correctAnswer: 1,
      explanation: '__call__ allows calling an instance like a function.'
    },
    {
      id: 175,
      category: 'python',
      difficulty: 'advanced',
      topic: 'oop',
      question: 'What is *args unpacking?',
      options: ['Error', 'def func(*args): print(args)', 'Receives multiple args as tuple', 'All of above'],
      correctAnswer: 3,
      explanation: '*args in function definition receives multiple positional arguments as a tuple.'
    },
    {
      id: 176,
      category: 'python',
      difficulty: 'advanced',
      topic: 'oop',
      question: 'What is: [1, 2] + [3, 4] a form of?',
      options: ['Concatenation', 'Addition operator overloading', 'Method call', 'Error'],
      correctAnswer: 1,
      explanation: 'Lists implement __add__ for concatenation using the + operator.'
    },
    {
      id: 177,
      category: 'python',
      difficulty: 'advanced',
      topic: 'oop',
      question: 'What is __len__?',
      options: ['Length variable', 'Makes len() work on instance', 'Property', 'Error'],
      correctAnswer: 1,
      explanation: '__len__ is called by len() to return the length of an object.'
    },
    {
      id: 178,
      category: 'python',
      difficulty: 'advanced',
      topic: 'oop',
      question: 'What is __eq__?',
      options: ['Equality variable', 'Defines == comparison', 'Property', 'Error'],
      correctAnswer: 1,
      explanation: '__eq__ defines what == means for an object.'
    },
    {
      id: 179,
      category: 'python',
      difficulty: 'advanced',
      topic: 'oop',
      question: 'What is __lt__?',
      options: ['Less than variable', 'Defines < comparison', 'Property', 'Error'],
      correctAnswer: 1,
      explanation: '__lt__ defines what < means for an object.'
    },
    {
      id: 180,
      category: 'python',
      difficulty: 'advanced',
      topic: 'oop',
      question: 'What is the difference between is and ==?',
      options: ['Same thing', 'is checks identity, == checks equality', 'No difference', 'Error'],
      correctAnswer: 1,
      explanation: 'is checks if two variables reference the same object, == checks if values are equal.'
    },
  ];
}

function generatePythonBuiltins(): Question[] {
  return [
    {
      id: 181,
      category: 'python',
      difficulty: 'beginner',
      topic: 'modules',
      question: 'What is: abs(-5)?',
      options: ['Error', '5', '-5', 'None'],
      correctAnswer: 1,
      explanation: 'abs() returns the absolute value (magnitude without sign).'
    },
    {
      id: 182,
      category: 'python',
      difficulty: 'beginner',
      topic: 'modules',
      question: 'What is: round(3.7)?',
      options: ['3', '3.7', '4', 'Error'],
      correctAnswer: 2,
      explanation: 'round() rounds to the nearest integer. 3.7 rounds to 4.'
    },
    {
      id: 183,
      category: 'python',
      difficulty: 'beginner',
      topic: 'modules',
      question: 'What is: pow(2, 3)?',
      options: ['5', '6', '8', 'Error'],
      correctAnswer: 2,
      explanation: 'pow(2, 3) = 2^3 = 8.'
    },
    {
      id: 184,
      category: 'python',
      difficulty: 'beginner',
      topic: 'modules',
      question: 'What is: int("123")?',
      options: ['Error', '"123"', '123', 'None'],
      correctAnswer: 2,
      explanation: 'int() converts a string to an integer.'
    },
    {
      id: 185,
      category: 'python',
      difficulty: 'beginner',
      topic: 'modules',
      question: 'What is: str(123)?',
      options: ['123', '"123"', 'Error', 'None'],
      correctAnswer: 1,
      explanation: 'str() converts an integer to a string.'
    },
    {
      id: 186,
      category: 'python',
      difficulty: 'beginner',
      topic: 'modules',
      question: 'What is: float("3.14")?',
      options: ['Error', '3', '3.14', 'None'],
      correctAnswer: 2,
      explanation: 'float() converts a string to a floating-point number.'
    },
    {
      id: 187,
      category: 'python',
      difficulty: 'intermediate',
      topic: 'modules',
      question: 'What is: ord("A")?',
      options: ['Error', '65', '"A"', 'None'],
      correctAnswer: 1,
      explanation: 'ord() returns the Unicode code point of a character. "A" is 65.'
    },
    {
      id: 188,
      category: 'python',
      difficulty: 'intermediate',
      topic: 'modules',
      question: 'What is: chr(65)?',
      options: ['65', '"65"', '"A"', 'Error'],
      correctAnswer: 2,
      explanation: 'chr() returns the character for a given Unicode code point.'
    },
    {
      id: 189,
      category: 'python',
      difficulty: 'intermediate',
      topic: 'modules',
      question: 'What is: bin(8)?',
      options: ['8', '"8"', '"0b1000"', 'Error'],
      correctAnswer: 2,
      explanation: 'bin() returns the binary representation of an integer.'
    },
    {
      id: 190,
      category: 'python',
      difficulty: 'intermediate',
      topic: 'modules',
      question: 'What is: hex(255)?',
      options: ['255', '"255"', '"0xff"', 'Error'],
      correctAnswer: 2,
      explanation: 'hex() returns the hexadecimal representation of an integer.'
    },
    {
      id: 191,
      category: 'python',
      difficulty: 'intermediate',
      topic: 'modules',
      question: 'What is: oct(8)?',
      options: ['8', '"8"', '"0o10"', 'Error'],
      correctAnswer: 2,
      explanation: 'oct() returns the octal representation of an integer.'
    },
    {
      id: 192,
      category: 'python',
      difficulty: 'intermediate',
      topic: 'modules',
      question: 'What is: isinstance(5, int)?',
      options: ['Error', 'True', 'False', 'None'],
      correctAnswer: 1,
      explanation: 'isinstance() checks if an object is an instance of a class.'
    },
    {
      id: 193,
      category: 'python',
      difficulty: 'intermediate',
      topic: 'modules',
      question: 'What is: issubclass(bool, int)?',
      options: ['Error', 'True', 'False', 'None'],
      correctAnswer: 1,
      explanation: 'issubclass() checks if a class is a subclass of another. bool is a subclass of int.'
    },
    {
      id: 194,
      category: 'python',
      difficulty: 'intermediate',
      topic: 'modules',
      question: 'What is: callable(print)?',
      options: ['Error', 'True', 'False', 'None'],
      correctAnswer: 1,
      explanation: 'callable() checks if an object can be called like a function.'
    },
    {
      id: 195,
      category: 'python',
      difficulty: 'intermediate',
      topic: 'modules',
      question: 'What is: dir(5)?',
      options: ['Error', 'List of attributes and methods', '"5"', 'None'],
      correctAnswer: 1,
      explanation: 'dir() returns a list of valid attributes and methods for an object.'
    },
    {
      id: 196,
      category: 'python',
      difficulty: 'intermediate',
      topic: 'modules',
      question: 'What is: hasattr(5, "__add__")?',
      options: ['Error', 'True', 'False', 'None'],
      correctAnswer: 1,
      explanation: 'hasattr() checks if an object has an attribute. Integers have __add__.'
    },
    {
      id: 197,
      category: 'python',
      difficulty: 'intermediate',
      topic: 'modules',
      question: 'What is: getattr(5, "__add__")?',
      options: ['Error', 'None', 'The __add__ method', 'False'],
      correctAnswer: 2,
      explanation: 'getattr() returns the value of an attribute.'
    },
    {
      id: 198,
      category: 'python',
      difficulty: 'intermediate',
      topic: 'modules',
      question: 'What is: setattr(obj, "x", 5) used for?',
      options: ['Get attribute', 'Set an attribute on an object', 'Delete attribute', 'Error'],
      correctAnswer: 1,
      explanation: 'setattr() sets the value of an attribute on an object.'
    },
    {
      id: 199,
      category: 'python',
      difficulty: 'intermediate',
      topic: 'modules',
      question: 'What is: delattr(obj, "x") used for?',
      options: ['Get attribute', 'Set attribute', 'Delete an attribute from an object', 'Error'],
      correctAnswer: 2,
      explanation: 'delattr() removes an attribute from an object.'
    },
    {
      id: 200,
      category: 'python',
      difficulty: 'intermediate',
      topic: 'modules',
      question: 'What is: vars(obj) used for?',
      options: ['Variable types', 'Return __dict__ of an object', 'List variables', 'Error'],
      correctAnswer: 1,
      explanation: 'vars() returns the __dict__ attribute of an object, showing its attributes.'
    },
  ];
}

function generatePythonErrorHandling(): Question[] {
  return [
    {
      id: 201,
      category: 'python',
      difficulty: 'intermediate',
      topic: 'control_flow',
      question: 'What is: try: 1/0; except: print("error")?',
      options: ['Error', 'error', 'Traceback', 'None'],
      correctAnswer: 1,
      explanation: 'try-except catches errors. 1/0 raises an error, caught and handled by except.'
    },
    {
      id: 202,
      category: 'python',
      difficulty: 'intermediate',
      topic: 'control_flow',
      question: 'What is: try: 1/0; except ZeroDivisionError: print("cannot divide")?',
      options: ['Error', 'cannot divide', 'Traceback', 'None'],
      correctAnswer: 1,
      explanation: 'except can catch specific error types. ZeroDivisionError is raised by 1/0.'
    },
    {
      id: 203,
      category: 'python',
      difficulty: 'intermediate',
      topic: 'control_flow',
      question: 'What is the difference between except and except Exception?',
      options: ['Same thing', 'except catches BaseException, except Exception does not', 'except Exception is specific', 'Error'],
      correctAnswer: 2,
      explanation: 'except Exception catches most errors but not system-exiting ones like KeyboardInterrupt.'
    },
    {
      id: 204,
      category: 'python',
      difficulty: 'intermediate',
      topic: 'control_flow',
      question: 'What is: try: ... except Exception as e: print(e)?',
      options: ['Error', 'Prints the error message', 'None', 'Traceback'],
      correctAnswer: 1,
      explanation: 'as binds the exception to a variable for inspection.'
    },
    {
      id: 205,
      category: 'python',
      difficulty: 'intermediate',
      topic: 'control_flow',
      question: 'What does finally do?',
      options: ['Catches errors', 'Runs regardless of try/except outcome', 'Raises error', 'Error'],
      correctAnswer: 1,
      explanation: 'finally block always executes, used for cleanup code.'
    },
    {
      id: 206,
      category: 'python',
      difficulty: 'intermediate',
      topic: 'control_flow',
      question: 'What is: try: 1/0; finally: print("cleanup")?',
      options: ['Error', 'cleanup', 'Traceback', 'None'],
      correctAnswer: 1,
      explanation: 'finally runs even though an error occurs.'
    },
    {
      id: 207,
      category: 'python',
      difficulty: 'intermediate',
      topic: 'control_flow',
      question: 'What is: raise ValueError("invalid")?',
      options: ['Catches error', 'Raises an error', 'Prints message', 'Error'],
      correctAnswer: 1,
      explanation: 'raise creates and raises an exception.'
    },
    {
      id: 208,
      category: 'python',
      difficulty: 'intermediate',
      topic: 'control_flow',
      question: 'What is: try: raise ValueError("oops"); except ValueError: print("caught")?',
      options: ['Error', 'caught', 'oops', 'None'],
      correctAnswer: 1,
      explanation: 'Custom error is caught by the except clause.'
    },
    {
      id: 209,
      category: 'python',
      difficulty: 'intermediate',
      topic: 'control_flow',
      question: 'What is: try: ... except (TypeError, ValueError): ..?',
      options: ['Error', 'Catches multiple error types', 'Single error', 'None'],
      correctAnswer: 1,
      explanation: 'except can catch multiple error types using a tuple.'
    },
    {
      id: 210,
      category: 'python',
      difficulty: 'intermediate',
      topic: 'control_flow',
      question: 'What is: raise ValueError("msg") from e used for?',
      options: ['Error handling', 'Exception chaining to show cause', 'Simple error', 'None'],
      correctAnswer: 1,
      explanation: 'from shows the original exception that caused this one.'
    },
    {
      id: 211,
      category: 'python',
      difficulty: 'advanced',
      topic: 'control_flow',
      question: 'What is: class CustomError(Exception): pass used for?',
      options: ['Generic error', 'Define custom error type', 'Standard error', 'Error'],
      correctAnswer: 1,
      explanation: 'Creating custom exception classes for specific error conditions.'
    },
    {
      id: 212,
      category: 'python',
      difficulty: 'advanced',
      topic: 'control_flow',
      question: 'What is the exception hierarchy?',
      options: ['Flat structure', 'BaseException at top, Exception subclass', 'No hierarchy', 'Error'],
      correctAnswer: 1,
      explanation: 'BaseException is the root, Exception is subclass, other specific errors inherit.'
    },
    {
      id: 213,
      category: 'python',
      difficulty: 'advanced',
      topic: 'control_flow',
      question: 'What is: try: ...; except Exception: ...; else: print("success")?',
      options: ['Error', 'else runs if no error', 'Always runs', 'None'],
      correctAnswer: 1,
      explanation: 'else block runs only if try succeeds without errors.'
    },
    {
      id: 214,
      category: 'python',
      difficulty: 'advanced',
      topic: 'control_flow',
      question: 'What is: import traceback; traceback.print_exc() used for?',
      options: ['Error handling', 'Print detailed exception info', 'Catch error', 'None'],
      correctAnswer: 1,
      explanation: 'print_exc() prints the full traceback for debugging.'
    },
    {
      id: 215,
      category: 'python',
      difficulty: 'advanced',
      topic: 'control_flow',
      question: 'What is: assert x > 0, "x must be positive" used for?',
      options: ['Raise error', 'Test condition, raise AssertionError if false', 'Verify code', 'None'],
      correctAnswer: 1,
      explanation: 'assert tests a condition and raises AssertionError with a message if it fails.'
    },
    {
      id: 216,
      category: 'python',
      difficulty: 'advanced',
      topic: 'control_flow',
      question: 'What is a finally block executed before or after return?',
      options: ['Before', 'After return is prepared', 'Not executed', 'Error'],
      correctAnswer: 1,
      explanation: 'finally runs even if there\'s a return statement in try or except.'
    },
    {
      id: 217,
      category: 'python',
      difficulty: 'advanced',
      topic: 'control_flow',
      question: 'What are common exceptions?',
      options: ['ValueError, TypeError, KeyError, IndexError', 'All same', 'No common ones', 'Error'],
      correctAnswer: 0,
      explanation: 'Common exceptions indicate specific error conditions in Python.'
    },
    {
      id: 218,
      category: 'python',
      difficulty: 'advanced',
      topic: 'control_flow',
      question: 'What is: KeyError raised for?',
      options: ['Type error', 'Key not in dict', 'Index error', 'Error'],
      correctAnswer: 1,
      explanation: 'KeyError is raised when accessing a non-existent key in a dictionary.'
    },
    {
      id: 219,
      category: 'python',
      difficulty: 'advanced',
      topic: 'control_flow',
      question: 'What is: IndexError raised for?',
      options: ['Type error', 'Key error', 'Index out of range', 'Error'],
      correctAnswer: 2,
      explanation: 'IndexError is raised when accessing an invalid index in a sequence.'
    },
    {
      id: 220,
      category: 'python',
      difficulty: 'advanced',
      topic: 'control_flow',
      question: 'What is: TypeError raised for?',
      options: ['Wrong operation for type', 'Key error', 'Index error', 'Error'],
      correctAnswer: 0,
      explanation: 'TypeError is raised when an operation is applied to the wrong type.'
    },
  ];
}

// ============ PANDAS QUESTION GENERATORS ============

function generatePandasSeries(): Question[] {
  return [
    {
      id: 221,
      category: 'pandas',
      difficulty: 'beginner',
      topic: 'dataframes',
      question: 'What is a Pandas Series?',
      options: ['A table', '1D labeled array', '2D array', 'Error'],
      correctAnswer: 1,
      explanation: 'A Series is a 1-dimensional array with labels (index) for each value.'
    },
    {
      id: 222,
      category: 'pandas',
      difficulty: 'beginner',
      topic: 'dataframes',
      question: 'How to create a Series: pd.Series([1, 2, 3])?',
      options: ['Error', 'Creates a Series with values 1, 2, 3', 'Returns error', 'None'],
      correctAnswer: 1,
      explanation: 'pd.Series() creates a Series from a list.'
    },
    {
      id: 223,
      category: 'pandas',
      difficulty: 'beginner',
      topic: 'dataframes',
      question: 'What is: pd.Series([1, 2, 3], index=["a", "b", "c"])?',
      options: ['Error', 'Series with custom labels', '[1, 2, 3]', 'None'],
      correctAnswer: 1,
      explanation: 'index parameter sets custom labels for each value.'
    },
    {
      id: 224,
      category: 'pandas',
      difficulty: 'beginner',
      topic: 'dataframes',
      question: 'What is: s = pd.Series([1, 2, 3]); s[0]?',
      options: ['Error', '1', '0', 'None'],
      correctAnswer: 1,
      explanation: 'Accessing by integer position returns the value at that position.'
    },
    {
      id: 225,
      category: 'pandas',
      difficulty: 'beginner',
      topic: 'dataframes',
      question: 'What is: s = pd.Series([1, 2, 3], index=["a", "b", "c"]); s["a"]?',
      options: ['Error', '1', '"a"', 'None'],
      correctAnswer: 1,
      explanation: 'Accessing by label "a" returns the value at that label.'
    },
    {
      id: 226,
      category: 'pandas',
      difficulty: 'beginner',
      topic: 'dataframes',
      question: 'What is: s = pd.Series([1, 2, 3]); s.values?',
      options: ['Error', '[1 2 3]', '[1, 2, 3]', 'Index object'],
      correctAnswer: 1,
      explanation: 's.values returns a numpy array of the Series values.'
    },
    {
      id: 227,
      category: 'pandas',
      difficulty: 'beginner',
      topic: 'dataframes',
      question: 'What is: s = pd.Series([1, 2, 3]); s.index?',
      options: ['Error', 'Index([0, 1, 2])', '[0, 1, 2]', 'None'],
      correctAnswer: 1,
      explanation: 's.index returns the index (labels) of the Series.'
    },
    {
      id: 228,
      category: 'pandas',
      difficulty: 'beginner',
      topic: 'dataframes',
      question: 'What is: pd.Series({"a": 1, "b": 2})?',
      options: ['Error', 'Series from dict with keys as index', 'Returns error', 'None'],
      correctAnswer: 1,
      explanation: 'Creating a Series from a dict uses keys as index.'
    },
    {
      id: 229,
      category: 'pandas',
      difficulty: 'intermediate',
      topic: 'dataframes',
      question: 'What is: s = pd.Series([1, 2, 3]); s.dtype?',
      options: ['Error', 'int64', 'type', 'None'],
      correctAnswer: 1,
      explanation: 's.dtype returns the data type of Series values.'
    },
    {
      id: 230,
      category: 'pandas',
      difficulty: 'intermediate',
      topic: 'dataframes',
      question: 'What is: s = pd.Series([1, 2, 3]); s.shape?',
      options: ['Error', '(3,)', '[3]', 'None'],
      correctAnswer: 1,
      explanation: 's.shape returns a tuple with the Series dimension.'
    },
    {
      id: 231,
      category: 'pandas',
      difficulty: 'intermediate',
      topic: 'dataframes',
      question: 'What is: s = pd.Series([1, 2, 3]); s.size?',
      options: ['Error', '3', '1', 'None'],
      correctAnswer: 1,
      explanation: 's.size returns the number of elements in the Series.'
    },
    {
      id: 232,
      category: 'pandas',
      difficulty: 'intermediate',
      topic: 'dataframes',
      question: 'What is: s = pd.Series([1, 2, 3]); s.mean()?',
      options: ['Error', '2.0', '[1, 2, 3]', 'None'],
      correctAnswer: 1,
      explanation: 's.mean() calculates the average of Series values.'
    },
    {
      id: 233,
      category: 'pandas',
      difficulty: 'intermediate',
      topic: 'dataframes',
      question: 'What is: s = pd.Series([1, 2, 3]); s.sum()?',
      options: ['Error', '6', '[1, 2, 3]', 'None'],
      correctAnswer: 1,
      explanation: 's.sum() returns the sum of all values.'
    },
    {
      id: 234,
      category: 'pandas',
      difficulty: 'intermediate',
      topic: 'dataframes',
      question: 'What is: s = pd.Series([1, 2, 3]); s.min()?',
      options: ['Error', '1', '3', 'None'],
      correctAnswer: 1,
      explanation: 's.min() returns the minimum value.'
    },
    {
      id: 235,
      category: 'pandas',
      difficulty: 'intermediate',
      topic: 'dataframes',
      question: 'What is: s = pd.Series([1, 2, 3]); s.max()?',
      options: ['Error', '3', '1', 'None'],
      correctAnswer: 2,
      explanation: 's.max() returns the maximum value, which is 3.'
    },
    {
      id: 236,
      category: 'pandas',
      difficulty: 'intermediate',
      topic: 'dataframes',
      question: 'What is: s = pd.Series([1, 2, 3]); s.head(2)?',
      options: ['Error', 'Series([1, 2])', '[1, 2]', 'None'],
      correctAnswer: 1,
      explanation: 's.head(2) returns the first 2 elements as a Series.'
    },
    {
      id: 237,
      category: 'pandas',
      difficulty: 'intermediate',
      topic: 'dataframes',
      question: 'What is: s = pd.Series([1, 2, 3]); s.tail(2)?',
      options: ['Error', 'Series([2, 3])', '[2, 3]', 'None'],
      correctAnswer: 1,
      explanation: 's.tail(2) returns the last 2 elements as a Series.'
    },
    {
      id: 238,
      category: 'pandas',
      difficulty: 'intermediate',
      topic: 'dataframes',
      question: 'What is: s = pd.Series([1, 2, 2, 3]); s.unique()?',
      options: ['Error', '[1, 2, 3]', '[1, 2, 2, 3]', 'None'],
      correctAnswer: 1,
      explanation: 's.unique() returns array of unique values.'
    },
    {
      id: 239,
      category: 'pandas',
      difficulty: 'intermediate',
      topic: 'dataframes',
      question: 'What is: s = pd.Series([1, 2, 2, 3]); s.value_counts()?',
      options: ['Error', 'Series with counts', '[1, 2, 2, 3]', 'None'],
      correctAnswer: 1,
      explanation: 's.value_counts() returns frequency of each value.'
    },
    {
      id: 240,
      category: 'pandas',
      difficulty: 'intermediate',
      topic: 'dataframes',
      question: 'What is: s = pd.Series([1, 2, 3]); s * 2?',
      options: ['Error', 'Series([2, 4, 6])', '[1, 2, 3]', 'None'],
      correctAnswer: 1,
      explanation: 'Vectorized operations multiply each element by 2.'
    },
  ];
}

function generatePandasDataFrames(): Question[] {
  return [
    {
      id: 241,
      category: 'pandas',
      difficulty: 'beginner',
      topic: 'dataframes',
      question: 'What is a DataFrame?',
      options: ['1D array', '2D table with rows and columns', 'Function', 'Error'],
      correctAnswer: 1,
      explanation: 'A DataFrame is a 2-dimensional labeled data structure with rows and columns.'
    },
    {
      id: 242,
      category: 'pandas',
      difficulty: 'beginner',
      topic: 'dataframes',
      question: 'How to create a DataFrame: pd.DataFrame({"A": [1, 2], "B": [3, 4]})?',
      options: ['Error', 'Creates a DataFrame with columns A and B', 'Returns error', 'None'],
      correctAnswer: 1,
      explanation: 'pd.DataFrame() creates a DataFrame from a dictionary of lists.'
    },
    {
      id: 243,
      category: 'pandas',
      difficulty: 'beginner',
      topic: 'dataframes',
      question: 'What is: df = pd.DataFrame([[1, 2], [3, 4]]); df.shape?',
      options: ['Error', '(2, 2)', '[2, 2]', 'None'],
      correctAnswer: 1,
      explanation: 'df.shape returns (rows, columns). Here 2 rows and 2 columns.'
    },
    {
      id: 244,
      category: 'pandas',
      difficulty: 'beginner',
      topic: 'dataframes',
      question: 'What is: df = pd.DataFrame({"A": [1, 2]}); df["A"]?',
      options: ['Error', 'Series with column A values', '"A"', 'None'],
      correctAnswer: 1,
      explanation: 'Accessing a column by name returns a Series.'
    },
    {
      id: 245,
      category: 'pandas',
      difficulty: 'beginner',
      topic: 'dataframes',
      question: 'What is: df = pd.DataFrame([[1, 2], [3, 4]]); df.iloc[0]?',
      options: ['Error', 'First row as Series', '[[1, 2]]', 'None'],
      correctAnswer: 1,
      explanation: '.iloc[0] accesses the first row by integer position.'
    },
    {
      id: 246,
      category: 'pandas',
      difficulty: 'beginner',
      topic: 'dataframes',
      question: 'What is: df = pd.DataFrame([[1, 2], [3, 4]]); df.loc[0]?',
      options: ['Error', 'Row at label 0', '[[1, 2]]', 'None'],
      correctAnswer: 1,
      explanation: '.loc[0] accesses the row with label 0.'
    },
    {
      id: 247,
      category: 'pandas',
      difficulty: 'beginner',
      topic: 'dataframes',
      question: 'What is: df = pd.DataFrame([[1, 2], [3, 4]]); df.columns?',
      options: ['Error', 'Index([0, 1])', '[0, 1]', 'None'],
      correctAnswer: 1,
      explanation: 'df.columns returns the column labels.'
    },
    {
      id: 248,
      category: 'pandas',
      difficulty: 'beginner',
      topic: 'dataframes',
      question: 'What is: df = pd.DataFrame({"A": [1, 2]}); df.index?',
      options: ['Error', 'RangeIndex([0, 1])', '[0, 1]', 'None'],
      correctAnswer: 1,
      explanation: 'df.index returns the row labels (default is RangeIndex).'
    },
    {
      id: 249,
      category: 'pandas',
      difficulty: 'beginner',
      topic: 'dataframes',
      question: 'What is: df.info()?',
      options: ['Error', 'Summary of DataFrame structure', 'All data', 'None'],
      correctAnswer: 1,
      explanation: 'df.info() displays column names, types, and non-null counts.'
    },
    {
      id: 250,
      category: 'pandas',
      difficulty: 'beginner',
      topic: 'dataframes',
      question: 'What is: df.describe()?',
      options: ['Error', 'Statistical summary', 'All data', 'None'],
      correctAnswer: 1,
      explanation: 'df.describe() shows count, mean, std, min, max for numeric columns.'
    },
    {
      id: 251,
      category: 'pandas',
      difficulty: 'intermediate',
      topic: 'dataframes',
      question: 'What is: df.head()?',
      options: ['Error', 'First 5 rows', 'Last 5 rows', 'None'],
      correctAnswer: 1,
      explanation: 'df.head() displays the first 5 rows by default.'
    },
    {
      id: 252,
      category: 'pandas',
      difficulty: 'intermediate',
      topic: 'dataframes',
      question: 'What is: df.tail()?',
      options: ['Error', 'Last 5 rows', 'First 5 rows', 'None'],
      correctAnswer: 1,
      explanation: 'df.tail() displays the last 5 rows by default.'
    },
    {
      id: 253,
      category: 'pandas',
      difficulty: 'intermediate',
      topic: 'dataframes',
      question: 'What is: df = pd.DataFrame({"A": [1, 2], "B": [3, 4]}); df["C"] = [5, 6]?',
      options: ['Error', 'Adds column C', 'Modifies A', 'None'],
      correctAnswer: 1,
      explanation: 'Assigning to a non-existent column adds it to the DataFrame.'
    },
    {
      id: 254,
      category: 'pandas',
      difficulty: 'intermediate',
      topic: 'dataframes',
      question: 'What is: df.dtypes?',
      options: ['Error', 'Data type of each column', 'All dtypes', 'None'],
      correctAnswer: 1,
      explanation: 'df.dtypes shows the data type of each column.'
    },
    {
      id: 255,
      category: 'pandas',
      difficulty: 'intermediate',
      topic: 'dataframes',
      question: 'What is: df.T?',
      options: ['Error', 'Transposed DataFrame', 'Copy', 'None'],
      correctAnswer: 1,
      explanation: 'df.T transposes rows and columns.'
    },
    {
      id: 256,
      category: 'pandas',
      difficulty: 'intermediate',
      topic: 'dataframes',
      question: 'What is: df.copy()?',
      options: ['Error', 'Creates a copy of DataFrame', 'Reference', 'None'],
      correctAnswer: 1,
      explanation: 'df.copy() creates an independent copy of the DataFrame.'
    },
    {
      id: 257,
      category: 'pandas',
      difficulty: 'intermediate',
      topic: 'dataframes',
      question: 'What is: len(df)?',
      options: ['Error', 'Number of rows', 'Number of columns', 'None'],
      correctAnswer: 1,
      explanation: 'len(df) returns the number of rows.'
    },
    {
      id: 258,
      category: 'pandas',
      difficulty: 'intermediate',
      topic: 'dataframes',
      question: 'What is: df.select_dtypes(include=["int64"])?',
      options: ['Error', 'Select only int columns', 'All columns', 'None'],
      correctAnswer: 1,
      explanation: 'select_dtypes() filters columns by data type.'
    },
    {
      id: 259,
      category: 'pandas',
      difficulty: 'intermediate',
      topic: 'dataframes',
      question: 'What is: df.values?',
      options: ['Error', 'NumPy array of data', 'List of lists', 'None'],
      correctAnswer: 1,
      explanation: 'df.values returns the underlying NumPy array.'
    },
    {
      id: 260,
      category: 'pandas',
      difficulty: 'intermediate',
      topic: 'dataframes',
      question: 'What is: df.astype(str)?',
      options: ['Error', 'Converts all columns to string', 'String representation', 'None'],
      correctAnswer: 1,
      explanation: 'astype() converts DataFrame to specified data type.'
    },
  ];
}

function generatePandasIndexing(): Question[] {
  return [
    {
      id: 261,
      category: 'pandas',
      difficulty: 'beginner',
      topic: 'indexing',
      question: 'What is: df.loc[0, "A"]?',
      options: ['Error', 'Value at row label 0, column "A"', 'Row 0', 'None'],
      correctAnswer: 1,
      explanation: '.loc uses labels for both row and column selection.'
    },
    {
      id: 262,
      category: 'pandas',
      difficulty: 'beginner',
      topic: 'indexing',
      question: 'What is: df.iloc[0, 0]?',
      options: ['Error', 'Value at row 0, column 0 (position)', 'Label 0', 'None'],
      correctAnswer: 1,
      explanation: '.iloc uses integer positions for row and column selection.'
    },
    {
      id: 263,
      category: 'pandas',
      difficulty: 'beginner',
      topic: 'indexing',
      question: 'What is: df.loc[0:2]?',
      options: ['Error', 'Rows 0 to 2 (inclusive)', 'Rows 0 to 1', 'None'],
      correctAnswer: 1,
      explanation: '.loc slicing includes the end point.'
    },
    {
      id: 264,
      category: 'pandas',
      difficulty: 'beginner',
      topic: 'indexing',
      question: 'What is: df.iloc[0:2]?',
      options: ['Error', 'Rows 0 to 1 (exclusive end)', 'Rows 0 to 2', 'None'],
      correctAnswer: 1,
      explanation: '.iloc slicing excludes the end point.'
    },
    {
      id: 265,
      category: 'pandas',
      difficulty: 'beginner',
      topic: 'indexing',
      question: 'What is: df[df["A"] > 2]?',
      options: ['Error', 'Rows where column A > 2', 'All rows', 'None'],
      correctAnswer: 1,
      explanation: 'Boolean indexing filters rows based on conditions.'
    },
    {
      id: 266,
      category: 'pandas',
      difficulty: 'beginner',
      topic: 'indexing',
      question: 'What is: df[["A", "C"]]?',
      options: ['Error', 'Select columns A and C', 'Rows A and C', 'None'],
      correctAnswer: 1,
      explanation: 'Pass a list of column names to select multiple columns.'
    },
    {
      id: 267,
      category: 'pandas',
      difficulty: 'intermediate',
      topic: 'indexing',
      question: 'What is: df.at[0, "A"]?',
      options: ['Error', 'Single value at row 0, column A (fastest)', 'Row', 'None'],
      correctAnswer: 1,
      explanation: '.at is fastest for accessing a single value by label.'
    },
    {
      id: 268,
      category: 'pandas',
      difficulty: 'intermediate',
      topic: 'indexing',
      question: 'What is: df.iat[0, 0]?',
      options: ['Error', 'Single value at position 0, 0 (fastest)', 'Row', 'None'],
      correctAnswer: 1,
      explanation: '.iat is fastest for accessing a single value by position.'
    },
    {
      id: 269,
      category: 'pandas',
      difficulty: 'intermediate',
      topic: 'indexing',
      question: 'What is: df.loc[df["A"] > 2, "B"]?',
      options: ['Error', 'Column B where A > 2', 'Column A', 'None'],
      correctAnswer: 1,
      explanation: 'Combine row and column conditions.'
    },
    {
      id: 270,
      category: 'pandas',
      difficulty: 'intermediate',
      topic: 'indexing',
      question: 'What is: df.set_index("A")?',
      options: ['Error', 'Set column A as index', 'Return A', 'None'],
      correctAnswer: 1,
      explanation: 'set_index() makes a column the new index.'
    },
    {
      id: 271,
      category: 'pandas',
      difficulty: 'intermediate',
      topic: 'indexing',
      question: 'What is: df.reset_index()?',
      options: ['Error', 'Reset index to default 0,1,2...', 'Keep index', 'None'],
      correctAnswer: 1,
      explanation: 'reset_index() converts the current index into a column.'
    },
    {
      id: 272,
      category: 'pandas',
      difficulty: 'intermediate',
      topic: 'indexing',
      question: 'What is: df.index.names = ["idx"]?',
      options: ['Error', 'Set index name', 'Column name', 'None'],
      correctAnswer: 1,
      explanation: 'index.names assigns names to index levels.'
    },
    {
      id: 273,
      category: 'pandas',
      difficulty: 'intermediate',
      topic: 'indexing',
      question: 'What is: df.columns.names = ["col"]?',
      options: ['Error', 'Set column names', 'Index name', 'None'],
      correctAnswer: 1,
      explanation: 'columns.names assigns names to column levels.'
    },
    {
      id: 274,
      category: 'pandas',
      difficulty: 'intermediate',
      topic: 'indexing',
      question: 'What is: df.xs(0)?',
      options: ['Error', 'Get row with index label 0', 'All rows', 'None'],
      correctAnswer: 1,
      explanation: '.xs() is shorthand for cross-section selection.'
    },
    {
      id: 275,
      category: 'pandas',
      difficulty: 'intermediate',
      topic: 'indexing',
      question: 'What is: df.nlargest(2, "A")?',
      options: ['Error', '2 rows with largest A values', 'All rows', 'None'],
      correctAnswer: 1,
      explanation: 'nlargest() returns the largest n values from a column.'
    },
    {
      id: 276,
      category: 'pandas',
      difficulty: 'intermediate',
      topic: 'indexing',
      question: 'What is: df.nsmallest(2, "A")?',
      options: ['Error', '2 rows with smallest A values', 'All rows', 'None'],
      correctAnswer: 1,
      explanation: 'nsmallest() returns the smallest n values from a column.'
    },
    {
      id: 277,
      category: 'pandas',
      difficulty: 'intermediate',
      topic: 'indexing',
      question: 'What is: df.query("A > 2")?',
      options: ['Error', 'Rows where A > 2 using string query', 'All rows', 'None'],
      correctAnswer: 1,
      explanation: '.query() filters using a string expression.'
    },
    {
      id: 278,
      category: 'pandas',
      difficulty: 'intermediate',
      topic: 'indexing',
      question: 'What is: df.isin(["value1", "value2"])?',
      options: ['Error', 'Boolean mask for value presence', 'All rows', 'None'],
      correctAnswer: 1,
      explanation: '.isin() returns Boolean mask for membership.'
    },
    {
      id: 279,
      category: 'pandas',
      difficulty: 'advanced',
      topic: 'indexing',
      question: 'What is MultiIndex in Pandas?',
      options: ['Single index', 'Hierarchical index with multiple levels', 'Column index', 'Error'],
      correctAnswer: 1,
      explanation: 'MultiIndex allows hierarchical indexing with multiple levels.'
    },
    {
      id: 280,
      category: 'pandas',
      difficulty: 'advanced',
      topic: 'indexing',
      question: 'What is: pd.MultiIndex.from_product()?',
      options: ['Error', 'Create MultiIndex from product of levels', 'Single index', 'None'],
      correctAnswer: 1,
      explanation: 'from_product() creates a MultiIndex from Cartesian product.'
    },
  ];
}

function generatePandasCleaning(): Question[] {
  return [
    {
      id: 281,
      category: 'pandas',
      difficulty: 'intermediate',
      topic: 'cleaning',
      question: 'What is: df.dropna()?',
      options: ['Error', 'Remove rows with NaN', 'Keep NaN', 'None'],
      correctAnswer: 1,
      explanation: 'dropna() removes rows containing any NaN value.'
    },
    {
      id: 282,
      category: 'pandas',
      difficulty: 'intermediate',
      topic: 'cleaning',
      question: 'What is: df.fillna(0)?',
      options: ['Error', 'Replace NaN with 0', 'Remove NaN', 'None'],
      correctAnswer: 1,
      explanation: 'fillna() replaces NaN values with specified value.'
    },
    {
      id: 283,
      category: 'pandas',
      difficulty: 'intermediate',
      topic: 'cleaning',
      question: 'What is: df.isnull()?',
      options: ['Error', 'Boolean mask of NaN locations', 'Drop NaN', 'None'],
      correctAnswer: 1,
      explanation: 'isnull() returns a Boolean mask showing NaN locations.'
    },
    {
      id: 284,
      category: 'pandas',
      difficulty: 'intermediate',
      topic: 'cleaning',
      question: 'What is: df.notna()?',
      options: ['Error', 'Boolean mask of non-NaN locations', 'Drop NaN', 'None'],
      correctAnswer: 1,
      explanation: 'notna() returns a Boolean mask of non-NaN values.'
    },
    {
      id: 285,
      category: 'pandas',
      difficulty: 'intermediate',
      topic: 'cleaning',
      question: 'What is: df.duplicated()?',
      options: ['Error', 'Boolean mask of duplicate rows', 'Remove duplicates', 'None'],
      correctAnswer: 1,
      explanation: 'duplicated() identifies duplicate rows.'
    },
    {
      id: 286,
      category: 'pandas',
      difficulty: 'intermediate',
      topic: 'cleaning',
      question: 'What is: df.drop_duplicates()?',
      options: ['Error', 'Remove duplicate rows', 'Mark duplicates', 'None'],
      correctAnswer: 1,
      explanation: 'drop_duplicates() removes duplicate rows.'
    },
    {
      id: 287,
      category: 'pandas',
      difficulty: 'intermediate',
      topic: 'cleaning',
      question: 'What is: df.rename(columns={"A": "X"})?',
      options: ['Error', 'Rename column A to X', 'Drop column', 'None'],
      correctAnswer: 1,
      explanation: 'rename() changes column or index names.'
    },
    {
      id: 288,
      category: 'pandas',
      difficulty: 'intermediate',
      topic: 'cleaning',
      question: 'What is: df.drop(columns=["A"])?',
      options: ['Error', 'Remove column A', 'Drop rows', 'None'],
      correctAnswer: 1,
      explanation: 'drop() removes specified columns or rows.'
    },
    {
      id: 289,
      category: 'pandas',
      difficulty: 'intermediate',
      topic: 'cleaning',
      question: 'What is: df.sort_values("A")?',
      options: ['Error', 'Sort by column A ascending', 'Sort descending', 'None'],
      correctAnswer: 1,
      explanation: 'sort_values() sorts DataFrame by specified column.'
    },
    {
      id: 290,
      category: 'pandas',
      difficulty: 'intermediate',
      topic: 'cleaning',
      question: 'What is: df.sort_values("A", ascending=False)?',
      options: ['Error', 'Sort by column A descending', 'Sort ascending', 'None'],
      correctAnswer: 1,
      explanation: 'ascending=False sorts in descending order.'
    },
    {
      id: 291,
      category: 'pandas',
      difficulty: 'intermediate',
      topic: 'cleaning',
      question: 'What is: df.sort_index()?',
      options: ['Error', 'Sort by index', 'Sort by columns', 'None'],
      correctAnswer: 1,
      explanation: 'sort_index() sorts DataFrame by index.'
    },
    {
      id: 292,
      category: 'pandas',
      difficulty: 'intermediate',
      topic: 'cleaning',
      question: 'What is: df.astype({"A": "int"})?',
      options: ['Error', 'Convert column A to int', 'String conversion', 'None'],
      correctAnswer: 1,
      explanation: 'astype() changes data types of columns.'
    },
    {
      id: 293,
      category: 'pandas',
      difficulty: 'intermediate',
      topic: 'cleaning',
      question: 'What is: df.replace({"A": {1: 100}})?',
      options: ['Error', 'Replace value 1 with 100 in column A', 'All 1s', 'None'],
      correctAnswer: 1,
      explanation: 'replace() substitutes values in DataFrame.'
    },
    {
      id: 294,
      category: 'pandas',
      difficulty: 'intermediate',
      topic: 'cleaning',
      question: 'What is: df.drop_duplicates(subset=["A"])?',
      options: ['Error', 'Keep first duplicate in column A', 'All duplicates', 'None'],
      correctAnswer: 1,
      explanation: 'subset parameter checks duplicates in specific columns.'
    },
    {
      id: 295,
      category: 'pandas',
      difficulty: 'advanced',
      topic: 'cleaning',
      question: 'What is: df.fillna(method="ffill")?',
      options: ['Error', 'Forward fill NaN with previous value', 'Backward fill', 'None'],
      correctAnswer: 1,
      explanation: 'Forward fill propagates last valid value forward.'
    },
    {
      id: 296,
      category: 'pandas',
      difficulty: 'advanced',
      topic: 'cleaning',
      question: 'What is: df.fillna(method="bfill")?',
      options: ['Error', 'Backward fill NaN with next value', 'Forward fill', 'None'],
      correctAnswer: 1,
      explanation: 'Backward fill propagates next valid value backward.'
    },
    {
      id: 297,
      category: 'pandas',
      difficulty: 'advanced',
      topic: 'cleaning',
      question: 'What is: df.interpolate()?',
      options: ['Error', 'Interpolate NaN values', 'Drop NaN', 'None'],
      correctAnswer: 1,
      explanation: 'interpolate() estimates NaN values using surrounding data.'
    },
    {
      id: 298,
      category: 'pandas',
      difficulty: 'advanced',
      topic: 'cleaning',
      question: 'What is: df.apply(lambda x: x.max())?',
      options: ['Error', 'Apply function to each column', 'Get column', 'None'],
      correctAnswer: 1,
      explanation: 'apply() applies a function to each column or row.'
    },
    {
      id: 299,
      category: 'pandas',
      difficulty: 'advanced',
      topic: 'cleaning',
      question: 'What is: df.applymap(lambda x: x*2)?',
      options: ['Error', 'Apply function to each element', 'Each column', 'None'],
      correctAnswer: 1,
      explanation: 'applymap() applies a function element-wise to the DataFrame.'
    },
    {
      id: 300,
      category: 'pandas',
      difficulty: 'advanced',
      topic: 'cleaning',
      question: 'What is: df.transform(lambda x: (x - x.mean())/x.std())?',
      options: ['Error', 'Apply transformation to each column', 'Get mean', 'None'],
      correctAnswer: 1,
      explanation: 'transform() applies element-wise transformation, returning same shape.'
    },
  ];
}

function generatePandasGrouping(): Question[] {
  return [
    {
      id: 301,
      category: 'pandas',
      difficulty: 'intermediate',
      topic: 'aggregation',
      question: 'What is: df.groupby("A").sum()?',
      options: ['Error', 'Group by A, sum other columns', 'Sum all', 'None'],
      correctAnswer: 1,
      explanation: 'groupby() divides data into groups, then sum() aggregates each group.'
    },
    {
      id: 302,
      category: 'pandas',
      difficulty: 'intermediate',
      topic: 'aggregation',
      question: 'What is: df.groupby("A").mean()?',
      options: ['Error', 'Group by A, calculate mean', 'Get A', 'None'],
      correctAnswer: 1,
      explanation: 'Calculate mean for each group.'
    },
    {
      id: 303,
      category: 'pandas',
      difficulty: 'intermediate',
      topic: 'aggregation',
      question: 'What is: df.groupby("A").count()?',
      options: ['Error', 'Count rows in each group', 'Total count', 'None'],
      correctAnswer: 1,
      explanation: 'count() returns non-NaN count in each group.'
    },
    {
      id: 304,
      category: 'pandas',
      difficulty: 'intermediate',
      topic: 'aggregation',
      question: 'What is: df.groupby("A").size()?',
      options: ['Error', 'Size of each group', 'DataFrame size', 'None'],
      correctAnswer: 1,
      explanation: 'size() returns number of rows in each group.'
    },
    {
      id: 305,
      category: 'pandas',
      difficulty: 'intermediate',
      topic: 'aggregation',
      question: 'What is: df.groupby("A")["B"].sum()?',
      options: ['Error', 'Sum of column B per group A', 'Sum all', 'None'],
      correctAnswer: 1,
      explanation: 'Group by A and aggregate only column B.'
    },
    {
      id: 306,
      category: 'pandas',
      difficulty: 'intermediate',
      topic: 'aggregation',
      question: 'What is: df.groupby(["A", "B"]).sum()?',
      options: ['Error', 'Group by A and B together', 'Single group', 'None'],
      correctAnswer: 1,
      explanation: 'Group by multiple columns creates hierarchical grouping.'
    },
    {
      id: 307,
      category: 'pandas',
      difficulty: 'intermediate',
      topic: 'aggregation',
      question: 'What is: df.groupby("A").agg({"B": "sum", "C": "mean"})?',
      options: ['Error', 'Apply different aggregations per column', 'Same agg', 'None'],
      correctAnswer: 1,
      explanation: 'agg() allows specifying different functions for different columns.'
    },
    {
      id: 308,
      category: 'pandas',
      difficulty: 'intermediate',
      topic: 'aggregation',
      question: 'What is: df.groupby("A").first()?',
      options: ['Error', 'First row of each group', 'Last row', 'None'],
      correctAnswer: 1,
      explanation: 'first() returns the first value/row in each group.'
    },
    {
      id: 309,
      category: 'pandas',
      difficulty: 'intermediate',
      topic: 'aggregation',
      question: 'What is: df.groupby("A").last()?',
      options: ['Error', 'Last row of each group', 'First row', 'None'],
      correctAnswer: 1,
      explanation: 'last() returns the last value/row in each group.'
    },
    {
      id: 310,
      category: 'pandas',
      difficulty: 'intermediate',
      topic: 'aggregation',
      question: 'What is: df.groupby("A").max()?',
      options: ['Error', 'Maximum in each group', 'Minimum', 'None'],
      correctAnswer: 1,
      explanation: 'max() returns the maximum value in each group.'
    },
    {
      id: 311,
      category: 'pandas',
      difficulty: 'intermediate',
      topic: 'aggregation',
      question: 'What is: df.groupby("A").min()?',
      options: ['Error', 'Minimum in each group', 'Maximum', 'None'],
      correctAnswer: 1,
      explanation: 'min() returns the minimum value in each group.'
    },
    {
      id: 312,
      category: 'pandas',
      difficulty: 'intermediate',
      topic: 'aggregation',
      question: 'What is: df.groupby("A").std()?',
      options: ['Error', 'Standard deviation of each group', 'Mean', 'None'],
      correctAnswer: 1,
      explanation: 'std() calculates standard deviation per group.'
    },
    {
      id: 313,
      category: 'pandas',
      difficulty: 'intermediate',
      topic: 'aggregation',
      question: 'What is: df.groupby("A").var()?',
      options: ['Error', 'Variance of each group', 'Mean', 'None'],
      correctAnswer: 1,
      explanation: 'var() calculates variance per group.'
    },
    {
      id: 314,
      category: 'pandas',
      difficulty: 'intermediate',
      topic: 'aggregation',
      question: 'What is: df.groupby("A").apply(lambda x: x["B"].max())?',
      options: ['Error', 'Apply custom function to groups', 'Standard agg', 'None'],
      correctAnswer: 1,
      explanation: 'apply() allows custom aggregation functions on groups.'
    },
    {
      id: 315,
      category: 'pandas',
      difficulty: 'advanced',
      topic: 'aggregation',
      question: 'What is: df.groupby("A").transform(lambda x: x - x.mean())?',
      options: ['Error', 'Transform each group, keep shape', 'Aggregate', 'None'],
      correctAnswer: 1,
      explanation: 'transform() applies function to groups but returns same shape DataFrame.'
    },
    {
      id: 316,
      category: 'pandas',
      difficulty: 'advanced',
      topic: 'aggregation',
      question: 'What is: df.groupby("A", as_index=False).sum()?',
      options: ['Error', 'Group column becomes regular column', 'Index', 'None'],
      correctAnswer: 1,
      explanation: 'as_index=False keeps grouping column as regular column.'
    },
    {
      id: 317,
      category: 'pandas',
      difficulty: 'advanced',
      topic: 'aggregation',
      question: 'What is: df.groupby("A").get_group("value")?',
      options: ['Error', 'Get specific group by label', 'All groups', 'None'],
      correctAnswer: 1,
      explanation: 'get_group() retrieves a specific group by its label.'
    },
    {
      id: 318,
      category: 'pandas',
      difficulty: 'advanced',
      topic: 'aggregation',
      question: 'What is: df.groupby("A").ngroups?',
      options: ['Error', 'Number of groups', 'Group data', 'None'],
      correctAnswer: 1,
      explanation: 'ngroups returns the number of groups.'
    },
    {
      id: 319,
      category: 'pandas',
      difficulty: 'advanced',
      topic: 'aggregation',
      question: 'What is: df.groupby("A").groups?',
      options: ['Error', 'Dictionary of group indices', 'Group data', 'None'],
      correctAnswer: 1,
      explanation: 'groups returns a dict mapping group labels to indices.'
    },
    {
      id: 320,
      category: 'pandas',
      difficulty: 'advanced',
      topic: 'aggregation',
      question: 'What is: df.pivot_table(values="B", index="A", aggfunc="sum")?',
      options: ['Error', 'Create pivot table with aggregation', 'Simple groupby', 'None'],
      correctAnswer: 1,
      explanation: 'pivot_table() creates a table with aggregated values.'
    },
  ];
}

function generatePandasMerging(): Question[] {
  return [
    {
      id: 321,
      category: 'pandas',
      difficulty: 'intermediate',
      topic: 'merging',
      question: 'What is: pd.merge(df1, df2, on="key")?',
      options: ['Error', 'Inner join on key', 'Outer join', 'None'],
      correctAnswer: 1,
      explanation: 'merge() combines two DataFrames on a common column.'
    },
    {
      id: 322,
      category: 'pandas',
      difficulty: 'intermediate',
      topic: 'merging',
      question: 'What is: pd.merge(df1, df2, how="inner")?',
      options: ['Error', 'Keep only matching rows', 'All rows', 'None'],
      correctAnswer: 1,
      explanation: 'how="inner" keeps only rows with matches in both DataFrames.'
    },
    {
      id: 323,
      category: 'pandas',
      difficulty: 'intermediate',
      topic: 'merging',
      question: 'What is: pd.merge(df1, df2, how="outer")?',
      options: ['Error', 'Keep all rows, fill NaN for mismatches', 'Inner join', 'None'],
      correctAnswer: 1,
      explanation: 'how="outer" keeps all rows from both DataFrames.'
    },
    {
      id: 324,
      category: 'pandas',
      difficulty: 'intermediate',
      topic: 'merging',
      question: 'What is: pd.merge(df1, df2, how="left")?',
      options: ['Error', 'Keep all rows from left, match right', 'Right join', 'None'],
      correctAnswer: 1,
      explanation: 'how="left" keeps all rows from left DataFrame.'
    },
    {
      id: 325,
      category: 'pandas',
      difficulty: 'intermediate',
      topic: 'merging',
      question: 'What is: pd.merge(df1, df2, how="right")?',
      options: ['Error', 'Keep all rows from right, match left', 'Left join', 'None'],
      correctAnswer: 1,
      explanation: 'how="right" keeps all rows from right DataFrame.'
    },
    {
      id: 326,
      category: 'pandas',
      difficulty: 'intermediate',
      topic: 'merging',
      question: 'What is: pd.concat([df1, df2])?',
      options: ['Error', 'Concatenate vertically (rows)', 'Merge', 'None'],
      correctAnswer: 1,
      explanation: 'concat() combines DataFrames vertically by default.'
    },
    {
      id: 327,
      category: 'pandas',
      difficulty: 'intermediate',
      topic: 'merging',
      question: 'What is: pd.concat([df1, df2], axis=1)?',
      options: ['Error', 'Concatenate horizontally (columns)', 'Rows', 'None'],
      correctAnswer: 1,
      explanation: 'axis=1 concatenates horizontally by columns.'
    },
    {
      id: 328,
      category: 'pandas',
      difficulty: 'intermediate',
      topic: 'merging',
      question: 'What is: df1.join(df2)?',
      options: ['Error', 'Join by index', 'Merge on column', 'None'],
      correctAnswer: 1,
      explanation: 'join() combines DataFrames on index by default.'
    },
    {
      id: 329,
      category: 'pandas',
      difficulty: 'intermediate',
      topic: 'merging',
      question: 'What is: pd.merge(df1, df2, left_on="A", right_on="B")?',
      options: ['Error', 'Merge with different join columns', 'Same column', 'None'],
      correctAnswer: 1,
      explanation: 'left_on/right_on specify different columns for joining.'
    },
    {
      id: 330,
      category: 'pandas',
      difficulty: 'intermediate',
      topic: 'merging',
      question: 'What is: pd.merge(df1, df2, left_index=True, right_on="key")?',
      options: ['Error', 'Join left index to right column', 'Both columns', 'None'],
      correctAnswer: 1,
      explanation: 'left_index/right_index allow joining index to column or vice versa.'
    },
    {
      id: 331,
      category: 'pandas',
      difficulty: 'intermediate',
      topic: 'merging',
      question: 'What is: pd.concat([df1, df2], ignore_index=True)?',
      options: ['Error', 'Reset index after concat', 'Keep index', 'None'],
      correctAnswer: 1,
      explanation: 'ignore_index=True creates a new default index.'
    },
    {
      id: 332,
      category: 'pandas',
      difficulty: 'intermediate',
      topic: 'merging',
      question: 'What is: pd.merge(df1, df2, on="key", suffixes=("_x", "_y"))?',
      options: ['Error', 'Add suffixes to overlapping columns', 'Drop columns', 'None'],
      correctAnswer: 1,
      explanation: 'suffixes handle overlapping column names.'
    },
    {
      id: 333,
      category: 'pandas',
      difficulty: 'advanced',
      topic: 'merging',
      question: 'What is: pd.merge(df1, df2, indicator=True)?',
      options: ['Error', 'Add column showing merge origin', 'No indicator', 'None'],
      correctAnswer: 1,
      explanation: 'indicator=True adds "_merge" column showing which side matched.'
    },
    {
      id: 334,
      category: 'pandas',
      difficulty: 'advanced',
      topic: 'merging',
      question: 'What is: pd.merge_asof(df1, df2, on="time")?',
      options: ['Error', 'Merge on nearest key match', 'Exact merge', 'None'],
      correctAnswer: 1,
      explanation: 'merge_asof() merges on nearest key, useful for time series.'
    },
    {
      id: 335,
      category: 'pandas',
      difficulty: 'advanced',
      topic: 'merging',
      question: 'What is: df1.append(df2)?',
      options: ['Error', 'Deprecated, use concat()', 'Merge', 'None'],
      correctAnswer: 1,
      explanation: 'append() is deprecated; use pd.concat() instead.'
    },
    {
      id: 336,
      category: 'pandas',
      difficulty: 'advanced',
      topic: 'merging',
      question: 'What is difference between merge and join?',
      options: ['Same', 'merge on column, join on index', 'No difference', 'Error'],
      correctAnswer: 1,
      explanation: 'merge() joins on columns, join() joins on indices by default.'
    },
    {
      id: 337,
      category: 'pandas',
      difficulty: 'advanced',
      topic: 'merging',
      question: 'What is: pd.merge(df1, df2, on="key", validate="one_to_one")?',
      options: ['Error', 'Validate merge relationship', 'No validation', 'None'],
      correctAnswer: 1,
      explanation: 'validate checks the type of relationship (one_to_one, many_to_one, etc.).'
    },
    {
      id: 338,
      category: 'pandas',
      difficulty: 'advanced',
      topic: 'merging',
      question: 'What is: pd.concat([df1, df2], keys=["a", "b"])?',
      options: ['Error', 'Create MultiIndex with keys', 'Simple concat', 'None'],
      correctAnswer: 1,
      explanation: 'keys parameter creates a hierarchical index.'
    },
    {
      id: 339,
      category: 'pandas',
      difficulty: 'advanced',
      topic: 'merging',
      question: 'What is cross join in Pandas?',
      options: ['Error', 'Create all combinations via merge with helper', 'Regular join', 'None'],
      correctAnswer: 1,
      explanation: 'Cross join creates Cartesian product; use merge with key=1 approach.'
    },
    {
      id: 340,
      category: 'pandas',
      difficulty: 'advanced',
      topic: 'merging',
      question: 'What is: df1.combine_first(df2)?',
      options: ['Error', 'Fill NaN in df1 from df2', 'Replace', 'None'],
      correctAnswer: 1,
      explanation: 'combine_first() fills NaN values in df1 using df2.'
    },
  ];
}

function generatePandasTimeSeries(): Question[] {
  return [
    {
      id: 341,
      category: 'pandas',
      difficulty: 'intermediate',
      topic: 'cleaning',
      question: 'What is: pd.to_datetime("2024-01-01")?',
      options: ['Error', 'Convert to Timestamp', 'String', 'None'],
      correctAnswer: 1,
      explanation: 'to_datetime() converts strings to datetime objects.'
    },
    {
      id: 342,
      category: 'pandas',
      difficulty: 'intermediate',
      topic: 'cleaning',
      question: 'What is: pd.date_range("2024-01-01", periods=3)?',
      options: ['Error', 'Create DatetimeIndex', 'String', 'None'],
      correctAnswer: 1,
      explanation: 'date_range() creates a DatetimeIndex.'
    },
    {
      id: 343,
      category: 'pandas',
      difficulty: 'intermediate',
      topic: 'cleaning',
      question: 'What is: df["date"].dt.year?',
      options: ['Error', 'Extract year from datetime', 'All dates', 'None'],
      correctAnswer: 1,
      explanation: '.dt accessor provides datetime component access.'
    },
    {
      id: 344,
      category: 'pandas',
      difficulty: 'intermediate',
      topic: 'cleaning',
      question: 'What is: df["date"].dt.month?',
      options: ['Error', 'Extract month from datetime', 'All dates', 'None'],
      correctAnswer: 1,
      explanation: '.dt.month extracts the month component.'
    },
    {
      id: 345,
      category: 'pandas',
      difficulty: 'intermediate',
      topic: 'cleaning',
      question: 'What is: df["date"].dt.day?',
      options: ['Error', 'Extract day from datetime', 'All dates', 'None'],
      correctAnswer: 1,
      explanation: '.dt.day extracts the day component.'
    },
    {
      id: 346,
      category: 'pandas',
      difficulty: 'intermediate',
      topic: 'cleaning',
      question: 'What is: df.set_index("date").resample("D").sum()?',
      options: ['Error', 'Resample to daily frequency and sum', 'Hourly', 'None'],
      correctAnswer: 1,
      explanation: 'resample() changes time series frequency.'
    },
    {
      id: 347,
      category: 'pandas',
      difficulty: 'intermediate',
      topic: 'cleaning',
      question: 'What is: df.set_index("date").resample("M").mean()?',
      options: ['Error', 'Resample to monthly and average', 'Daily', 'None'],
      correctAnswer: 1,
      explanation: '"M" resamples to month-end frequency.'
    },
    {
      id: 348,
      category: 'pandas',
      difficulty: 'intermediate',
      topic: 'cleaning',
      question: 'What is: df.set_index("date").rolling(3).sum()?',
      options: ['Error', 'Calculate rolling 3-period sum', 'Moving average', 'None'],
      correctAnswer: 1,
      explanation: 'rolling() calculates window-based statistics.'
    },
    {
      id: 349,
      category: 'pandas',
      difficulty: 'intermediate',
      topic: 'cleaning',
      question: 'What is: df.set_index("date").rolling(3).mean()?',
      options: ['Error', 'Calculate rolling 3-period mean', 'Sum', 'None'],
      correctAnswer: 1,
      explanation: 'rolling().mean() computes moving average.'
    },
    {
      id: 350,
      category: 'pandas',
      difficulty: 'intermediate',
      topic: 'cleaning',
      question: 'What is: df["date"].dt.dayofweek?',
      options: ['Error', 'Day of week (0=Monday)', 'Month', 'None'],
      correctAnswer: 1,
      explanation: 'dayofweek returns 0-6 for Monday-Sunday.'
    },
    {
      id: 351,
      category: 'pandas',
      difficulty: 'intermediate',
      topic: 'cleaning',
      question: 'What is: df["date"].dt.strftime("%Y-%m-%d")?',
      options: ['Error', 'Format datetime as string', 'Datetime', 'None'],
      correctAnswer: 1,
      explanation: 'strftime() formats datetime to string.'
    },
    {
      id: 352,
      category: 'pandas',
      difficulty: 'advanced',
      topic: 'cleaning',
      question: 'What is: pd.period_range("2024-01", periods=3, freq="M")?',
      options: ['Error', 'Create PeriodIndex', 'DatetimeIndex', 'None'],
      correctAnswer: 1,
      explanation: 'period_range() creates a PeriodIndex for specific time periods.'
    },
    {
      id: 353,
      category: 'pandas',
      difficulty: 'advanced',
      topic: 'cleaning',
      question: 'What is: pd.timedelta_range("1 day", periods=3)?',
      options: ['Error', 'Create TimedeltaIndex', 'DatetimeIndex', 'None'],
      correctAnswer: 1,
      explanation: 'timedelta_range() creates a TimedeltaIndex.'
    },
    {
      id: 354,
      category: 'pandas',
      difficulty: 'advanced',
      topic: 'cleaning',
      question: 'What is: df.set_index("date").shift(1)?',
      options: ['Error', 'Shift time series by 1 period', 'All same', 'None'],
      correctAnswer: 1,
      explanation: 'shift() moves data up/down in time series.'
    },
    {
      id: 355,
      category: 'pandas',
      difficulty: 'advanced',
      topic: 'cleaning',
      question: 'What is: df.set_index("date").pct_change()?',
      options: ['Error', 'Calculate percentage change', 'Absolute change', 'None'],
      correctAnswer: 1,
      explanation: 'pct_change() computes percent change between consecutive values.'
    },
    {
      id: 356,
      category: 'pandas',
      difficulty: 'advanced',
      topic: 'cleaning',
      question: 'What is: df["date"].dt.tz_localize("UTC")?',
      options: ['Error', 'Add timezone info', 'Remove timezone', 'None'],
      correctAnswer: 1,
      explanation: 'tz_localize() adds timezone information to naive datetime.'
    },
    {
      id: 357,
      category: 'pandas',
      difficulty: 'advanced',
      topic: 'cleaning',
      question: 'What is: df["date"].dt.tz_convert("US/Eastern")?',
      options: ['Error', 'Convert to different timezone', 'Same timezone', 'None'],
      correctAnswer: 1,
      explanation: 'tz_convert() changes timezone of timezone-aware datetime.'
    },
    {
      id: 358,
      category: 'pandas',
      difficulty: 'advanced',
      topic: 'cleaning',
      question: 'What is: pd.Timestamp("2024-01-01")?',
      options: ['Error', 'Create Timestamp object', 'String', 'None'],
      correctAnswer: 1,
      explanation: 'Timestamp is Pandas datetime object similar to datetime.datetime.'
    },
    {
      id: 359,
      category: 'pandas',
      difficulty: 'advanced',
      topic: 'cleaning',
      question: 'What is: pd.Timedelta("1 days 2 hours")?',
      options: ['Error', 'Create Timedelta object', 'Datetime', 'None'],
      correctAnswer: 1,
      explanation: 'Timedelta represents a duration/difference between dates.'
    },
    {
      id: 360,
      category: 'pandas',
      difficulty: 'advanced',
      topic: 'cleaning',
      question: 'What is: df.set_index("date").asfreq("D")?',
      options: ['Error', 'Force frequency to daily', 'Resample', 'None'],
      correctAnswer: 1,
      explanation: 'asfreq() sets a specific frequency, filling gaps with NaN.'
    },
  ];
}

function generatePandasReshaping(): Question[] {
  return [
    {
      id: 361,
      category: 'pandas',
      difficulty: 'intermediate',
      topic: 'reshaping',
      question: 'What is: df.pivot(index="A", columns="B", values="C")?',
      options: ['Error', 'Reshape with A as rows, B as columns', 'Groupby', 'None'],
      correctAnswer: 1,
      explanation: 'pivot() reshapes data from long to wide format.'
    },
    {
      id: 362,
      category: 'pandas',
      difficulty: 'intermediate',
      topic: 'reshaping',
      question: 'What is: df.melt(id_vars=["A"], value_vars=["B", "C"])?',
      options: ['Error', 'Reshape from wide to long', 'Pivot', 'None'],
      correctAnswer: 1,
      explanation: 'melt() transforms from wide to long format.'
    },
    {
      id: 363,
      category: 'pandas',
      difficulty: 'intermediate',
      topic: 'reshaping',
      question: 'What is: df.stack()?',
      options: ['Error', 'Stack columns into index', 'Reshape', 'None'],
      correctAnswer: 1,
      explanation: 'stack() moves column level to index (compresses).'
    },
    {
      id: 364,
      category: 'pandas',
      difficulty: 'intermediate',
      topic: 'reshaping',
      question: 'What is: df.unstack()?',
      options: ['Error', 'Unstack index level to columns', 'Stack', 'None'],
      correctAnswer: 1,
      explanation: 'unstack() moves index level to columns (expands).'
    },
    {
      id: 365,
      category: 'pandas',
      difficulty: 'intermediate',
      topic: 'reshaping',
      question: 'What is: pd.crosstab(df["A"], df["B"])?',
      options: ['Error', 'Cross-tabulation (contingency table)', 'Pivot', 'None'],
      correctAnswer: 1,
      explanation: 'crosstab() creates a frequency cross-tabulation.'
    },
    {
      id: 366,
      category: 'pandas',
      difficulty: 'intermediate',
      topic: 'reshaping',
      question: 'What is: df.wide_to_long(stubnames="value", sep="_", i="A", j="B")?',
      options: ['Error', 'Reshape wide to long with pattern', 'Melt', 'None'],
      correctAnswer: 1,
      explanation: 'wide_to_long() reshapes with pattern matching.'
    },
    {
      id: 367,
      category: 'pandas',
      difficulty: 'intermediate',
      topic: 'reshaping',
      question: 'What is: df.explode("col")?',
      options: ['Error', 'Expand list in column to rows', 'Collapse', 'None'],
      correctAnswer: 1,
      explanation: 'explode() transforms each element in list to separate row.'
    },
    {
      id: 368,
      category: 'pandas',
      difficulty: 'advanced',
      topic: 'reshaping',
      question: 'What is: df.pivot_table(values="C", index="A", columns="B", margins=True)?',
      options: ['Error', 'Pivot table with row/column totals', 'Basic pivot', 'None'],
      correctAnswer: 1,
      explanation: 'margins=True adds totals as final row and column.'
    },
    {
      id: 369,
      category: 'pandas',
      difficulty: 'advanced',
      topic: 'reshaping',
      question: 'What is: df.melt(var_name="variable", value_name="value")?',
      options: ['Error', 'Melt with custom column names', 'Default names', 'None'],
      correctAnswer: 1,
      explanation: 'var_name/value_name customize column names in melted DataFrame.'
    },
    {
      id: 370,
      category: 'pandas',
      difficulty: 'advanced',
      topic: 'reshaping',
      question: 'What is: pd.get_dummies(df["category"])?',
      options: ['Error', 'Create binary columns for categories', 'One column', 'None'],
      correctAnswer: 1,
      explanation: 'get_dummies() performs one-hot encoding on categorical column.'
    },
  ];
}

function generatePandasAdvanced(): Question[] {
  return [
    {
      id: 371,
      category: 'pandas',
      difficulty: 'advanced',
      topic: 'aggregation',
      question: 'What is: df.eval("C = A + B")?',
      options: ['Error', 'Evaluate expression and add column', 'Direct calc', 'None'],
      correctAnswer: 1,
      explanation: 'eval() efficiently evaluates string expressions.'
    },
    {
      id: 372,
      category: 'pandas',
      difficulty: 'advanced',
      topic: 'aggregation',
      question: 'What is: df.query("A > 5 and B < 10")?',
      options: ['Error', 'Filter rows using string query', 'Groupby', 'None'],
      correctAnswer: 1,
      explanation: 'query() filters using a string expression.'
    },
    {
      id: 373,
      category: 'pandas',
      difficulty: 'advanced',
      topic: 'aggregation',
      question: 'What is: df.style.format("{:.2f}")?',
      options: ['Error', 'Format display with style', 'Regular format', 'None'],
      correctAnswer: 1,
      explanation: '.style provides formatting for displayed output.'
    },
    {
      id: 374,
      category: 'pandas',
      difficulty: 'advanced',
      topic: 'aggregation',
      question: 'What is: df.to_csv("file.csv")?',
      options: ['Error', 'Export DataFrame to CSV', 'Import CSV', 'None'],
      correctAnswer: 1,
      explanation: 'to_csv() exports DataFrame to CSV file.'
    },
    {
      id: 375,
      category: 'pandas',
      difficulty: 'advanced',
      topic: 'aggregation',
      question: 'What is: pd.read_csv("file.csv")?',
      options: ['Error', 'Read CSV file into DataFrame', 'Export to CSV', 'None'],
      correctAnswer: 1,
      explanation: 'read_csv() reads a CSV file into a DataFrame.'
    },
    {
      id: 376,
      category: 'pandas',
      difficulty: 'advanced',
      topic: 'aggregation',
      question: 'What is: df.to_excel("file.xlsx")?',
      options: ['Error', 'Export to Excel', 'Import Excel', 'None'],
      correctAnswer: 1,
      explanation: 'to_excel() exports DataFrame to Excel file.'
    },
    {
      id: 377,
      category: 'pandas',
      difficulty: 'advanced',
      topic: 'aggregation',
      question: 'What is: pd.read_excel("file.xlsx")?',
      options: ['Error', 'Read Excel file into DataFrame', 'Export to Excel', 'None'],
      correctAnswer: 1,
      explanation: 'read_excel() reads an Excel file into a DataFrame.'
    },
    {
      id: 378,
      category: 'pandas',
      difficulty: 'advanced',
      topic: 'aggregation',
      question: 'What is: df.to_json()?',
      options: ['Error', 'Export to JSON format', 'Import JSON', 'None'],
      correctAnswer: 1,
      explanation: 'to_json() exports DataFrame to JSON.'
    },
    {
      id: 379,
      category: 'pandas',
      difficulty: 'advanced',
      topic: 'aggregation',
      question: 'What is: pd.read_json("file.json")?',
      options: ['Error', 'Read JSON file into DataFrame', 'Export to JSON', 'None'],
      correctAnswer: 1,
      explanation: 'read_json() reads a JSON file into a DataFrame.'
    },
    {
      id: 380,
      category: 'pandas',
      difficulty: 'advanced',
      topic: 'aggregation',
      question: 'What is: df.memory_usage()?',
      options: ['Error', 'Memory consumed by each column', 'Total memory', 'None'],
      correctAnswer: 1,
      explanation: 'memory_usage() shows memory consumption per column.'
    },
  ];
}

function generatePandasPerformance(): Question[] {
  return [
    {
      id: 381,
      category: 'pandas',
      difficulty: 'advanced',
      topic: 'visualization',
      question: 'What is: df["col"].astype("category")?',
      options: ['Error', 'Convert to categorical for memory efficiency', 'String', 'None'],
      correctAnswer: 1,
      explanation: 'Categorical dtype reduces memory usage for repeated values.'
    },
    {
      id: 382,
      category: 'pandas',
      difficulty: 'advanced',
      topic: 'visualization',
      question: 'What is: df.to_numpy()?',
      options: ['Error', 'Convert to NumPy array', 'Dataframe', 'None'],
      correctAnswer: 1,
      explanation: 'to_numpy() converts DataFrame to NumPy array.'
    },
    {
      id: 383,
      category: 'pandas',
      difficulty: 'advanced',
      topic: 'visualization',
      question: 'What is: pd.options.mode.copy_on_write = True?',
      options: ['Error', 'Enable copy-on-write for memory efficiency', 'Copy', 'None'],
      correctAnswer: 1,
      explanation: 'CoW optimization reduces memory by using views instead of copies.'
    },
    {
      id: 384,
      category: 'pandas',
      difficulty: 'advanced',
      topic: 'visualization',
      question: 'What is: df.attrs?',
      options: ['Error', 'Dictionary to store DataFrame metadata', 'Columns', 'None'],
      correctAnswer: 1,
      explanation: 'attrs stores arbitrary metadata about the DataFrame.'
    },
    {
      id: 385,
      category: 'pandas',
      difficulty: 'advanced',
      topic: 'visualization',
      question: 'What is: df.flags?',
      options: ['Error', 'Information about DataFrame properties', 'Attributes', 'None'],
      correctAnswer: 1,
      explanation: 'flags contains metadata like writeable, owndata, alignment.'
    },
    {
      id: 386,
      category: 'pandas',
      difficulty: 'advanced',
      topic: 'visualization',
      question: 'What is: df.ndim?',
      options: ['Error', 'Number of dimensions (always 2 for DataFrame)', 'Columns', 'None'],
      correctAnswer: 1,
      explanation: 'ndim is the number of axes (2 for DataFrames).'
    },
    {
      id: 387,
      category: 'pandas',
      difficulty: 'advanced',
      topic: 'visualization',
      question: 'What is: df.empty?',
      options: ['Error', 'Boolean: True if DataFrame has no data', 'Rows', 'None'],
      correctAnswer: 1,
      explanation: 'empty returns True if DataFrame has no rows or columns.'
    },
    {
      id: 388,
      category: 'pandas',
      difficulty: 'advanced',
      topic: 'visualization',
      question: 'What is: df.itertuples()?',
      options: ['Error', 'Iterate rows as named tuples', 'Iterate columns', 'None'],
      correctAnswer: 1,
      explanation: 'itertuples() iterates rows as namedtuples (faster than iterrows).'
    },
    {
      id: 389,
      category: 'pandas',
      difficulty: 'advanced',
      topic: 'visualization',
      question: 'What is: df.iterrows()?',
      options: ['Error', 'Iterate rows as (index, Series) tuples', 'Columns', 'None'],
      correctAnswer: 1,
      explanation: 'iterrows() iterates over rows, slower than itertuples().'
    },
    {
      id: 390,
      category: 'pandas',
      difficulty: 'advanced',
      topic: 'visualization',
      question: 'What is difference between iterrows() and itertuples()?',
      options: ['Same', 'itertuples faster, iterrows returns Series', 'iterrows faster', 'Error'],
      correctAnswer: 1,
      explanation: 'itertuples is faster but less flexible; iterrows is slower but more flexible.'
    },
  ];
}
