import React from 'react'

const courseData = {
  'machine-learning': {
    title: 'Machine Learning',
    description: 'Dive into the world of Machine Learning. Learn to build intelligent systems that can learn from data, make predictions, and improve automatically through experience.',
    modules: [
      {
        id: 'module1',
        title: 'Introduction to Machine Learning',
        topics: [
          {
            id: 'intro',
            title: 'What is Machine Learning?',
            duration: '25 min',
            content: {
              overview: 'Understanding the fundamentals of Machine Learning',
              objectives: [
                'Define Machine Learning and its importance',
                'Types of Machine Learning',
                'Real-world applications',
                'Machine Learning workflow'
              ],
              practice: 'Identify ML applications in daily life'
            }
          },
          {
            id: 'ml-pipeline',
            title: 'Machine Learning Pipeline',
            duration: '35 min',
            content: {
              overview: 'Learn the end-to-end ML process',
              objectives: [
                'Data collection and preprocessing',
                'Feature engineering',
                'Model selection and training',
                'Evaluation and deployment'
              ],
              practice: 'Build a simple ML pipeline'
            }
          },
          {
            id: 'supervised',
            title: 'Supervised Learning Basics',
            duration: '40 min',
            content: {
              overview: 'Introduction to supervised learning algorithms',
              objectives: [
                'Classification vs Regression',
                'Training and test sets',
                'Model selection criteria',
                'Bias-variance tradeoff'
              ],
              practice: 'Implement a basic classification model'
            }
          }
        ]
      },
      {
        id: 'module2',
        title: 'Supervised Learning',
        topics: [
          {
            id: 'linear-regression',
            title: 'Linear Regression',
            duration: '45 min',
            content: {
              overview: 'Master linear regression for predictive modeling',
              objectives: [
                'Simple linear regression',
                'Multiple linear regression',
                'Model assumptions',
                'Regularization techniques'
              ],
              practice: 'Predict house prices using linear regression'
            }
          },
          {
            id: 'logistic-regression',
            title: 'Logistic Regression',
            duration: '40 min',
            content: {
              overview: 'Learn binary classification with logistic regression',
              objectives: [
                'Logistic function',
                'Decision boundaries',
                'Maximum likelihood estimation',
                'Multi-class classification'
              ],
              practice: 'Build a spam classifier'
            }
          }
        ]
      }
    ]
  },
  'sql': {
    title: 'SQL for Data Science',
    description: 'Learn SQL from the ground up with a focus on data analysis and database management. Master essential SQL concepts and advanced techniques for working with large datasets.',
    modules: [
      {
        id: 'module1',
        title: 'SQL Fundamentals',
        topics: [
          {
            id: 'introduction',
            title: 'Introduction to Databases',
            duration: '30 min',
            content: {
              overview: 'Understanding database fundamentals and SQL',
              objectives: [
                'Database concepts and terminology',
                'Types of databases',
                'SQL overview',
                'Database management systems'
              ],
              practice: 'Create your first database'
            }
          },
          {
            id: 'basic-sql',
            title: 'Basic SQL Queries',
            duration: '45 min',
            content: {
              overview: 'Learn essential SQL query commands',
              objectives: [
                'SELECT statements',
                'WHERE clauses',
                'ORDER BY and GROUP BY',
                'Basic functions'
              ],
              practice: 'Write queries to analyze sample data'
            }
          },
          {
            id: 'filtering',
            title: 'Filtering and Sorting Data',
            duration: '35 min',
            content: {
              overview: 'Master data filtering techniques',
              objectives: [
                'Complex WHERE conditions',
                'IN and BETWEEN operators',
                'LIKE patterns',
                'NULL values handling'
              ],
              practice: 'Create filtered reports from data'
            }
          }
        ]
      },
      {
        id: 'module2',
        title: 'Joins and Relationships',
        topics: [
          {
            id: 'relationships',
            title: 'Understanding Table Relationships',
            duration: '40 min',
            content: {
              overview: 'Learn about database relationships',
              objectives: [
                'Primary and foreign keys',
                'Types of relationships',
                'Database normalization',
                'Entity relationship diagrams'
              ],
              practice: 'Design a database schema'
            }
          },
          {
            id: 'inner-outer',
            title: 'INNER and OUTER Joins',
            duration: '50 min',
            content: {
              overview: 'Master different types of SQL joins',
              objectives: [
                'INNER JOIN syntax',
                'LEFT and RIGHT OUTER JOINs',
                'FULL OUTER JOIN',
                'Multiple table joins'
              ],
              practice: 'Write complex queries with joins'
            }
          }
        ]
      }
    ]
  },
  'r-programming': {
    title: 'R Programming for Data Science',
    description: 'Master R programming language for statistical computing and data analysis. Learn to create powerful visualizations and perform complex statistical analyses.',
    modules: [
      {
        id: 'module1',
        title: 'R Fundamentals',
        topics: [
          {
            id: 'introduction',
            title: 'Introduction to R and RStudio',
            duration: '30 min',
            content: {
              overview: 'Get started with R programming and RStudio IDE',
              objectives: [
                'Understanding R and its ecosystem',
                'Setting up R and RStudio',
                'RStudio interface overview',
                'Basic R operations'
              ],
              practice: 'Perform basic calculations in R'
            }
          },
          {
            id: 'data-types',
            title: 'Data Types and Structures',
            duration: '40 min',
            content: {
              overview: 'Learn fundamental R data types and structures',
              objectives: [
                'Numeric, character, and logical types',
                'Vectors and factors',
                'Lists and arrays',
                'Type conversion and checking'
              ],
              practice: 'Create and manipulate different data types'
            }
          },
          {
            id: 'vectors',
            title: 'Working with Vectors and Matrices',
            duration: '45 min',
            content: {
              overview: 'Master vector operations and matrix manipulation',
              objectives: [
                'Vector creation and indexing',
                'Vector operations and functions',
                'Matrix creation and manipulation',
                'Matrix algebra'
              ],
              practice: 'Solve problems using vectors and matrices'
            }
          }
        ]
      },
      {
        id: 'module2',
        title: 'Data Manipulation',
        topics: [
          {
            id: 'dplyr',
            title: 'Data Cleaning with dplyr',
            duration: '50 min',
            content: {
              overview: 'Learn powerful data manipulation with dplyr',
              objectives: [
                'filter() and select() functions',
                'arrange() and mutate()',
                'group_by() and summarize()',
                'Pipe operator %>%'
              ],
              practice: 'Clean and transform real datasets'
            }
          },
          {
            id: 'tidyr',
            title: 'Data Reshaping with tidyr',
            duration: '45 min',
            content: {
              overview: 'Master data reshaping techniques',
              objectives: [
                'Wide vs Long format',
                'gather() and spread()',
                'separate() and unite()',
                'Handling missing values'
              ],
              practice: 'Reshape complex datasets'
            }
          }
        ]
      },
      {
        id: 'module3',
        title: 'Data Visualization',
        topics: [
          {
            id: 'ggplot2',
            title: 'ggplot2 Fundamentals',
            duration: '55 min',
            content: {
              overview: 'Create beautiful visualizations with ggplot2',
              objectives: [
                'Grammar of graphics',
                'Basic plot types',
                'Aesthetics and geometries',
                'Faceting and themes'
              ],
              practice: 'Create various types of plots'
            }
          },
          {
            id: 'advanced-plotting',
            title: 'Advanced Plotting Techniques',
            duration: '60 min',
            content: {
              overview: 'Master advanced visualization techniques',
              objectives: [
                'Custom themes and colors',
                'Multiple plots arrangement',
                'Interactive plots',
                'Animation with gganimate'
              ],
              practice: 'Build complex visualizations'
            }
          }
        ]
      }
    ]
  },
  'web-design': {
    title: 'Web Design for Data Science',
    description: 'Learn modern web development techniques to create interactive data visualizations and web applications. Master the skills needed to build beautiful and functional data-driven websites.',
    modules: [
      {
        id: 'module1',
        title: 'Web Design Fundamentals',
        topics: [
          {
            id: 'fundamentals',
            title: 'Web Design Fundamentals',
            duration: '35 min',
            content: {
              overview: 'Understanding web design principles',
              objectives: [
                'Web design principles and best practices',
                'Color theory and typography',
                'Layout and composition',
                'Responsive design principles'
              ],
              practice: 'Create a simple webpage layout'
            }
          },
          {
            id: 'html',
            title: 'HTML Basics',
            duration: '40 min',
            content: {
              overview: 'Learn HTML structure and elements',
              objectives: [
                'HTML document structure',
                'Common HTML elements',
                'Forms and input elements',
                'Semantic HTML'
              ],
              practice: 'Build a registration form'
            }
          },
          {
            id: 'css',
            title: 'CSS Fundamentals',
            duration: '45 min',
            content: {
              overview: 'Style web pages with CSS',
              objectives: [
                'CSS selectors and properties',
                'Box model and layout',
                'Flexbox and Grid',
                'CSS animations'
              ],
              practice: 'Style a responsive navbar'
            }
          }
        ]
      },
      {
        id: 'module2',
        title: 'JavaScript Essentials',
        topics: [
          {
            id: 'js-fundamentals',
            title: 'JavaScript Fundamentals',
            duration: '50 min',
            content: {
              overview: 'Master JavaScript basics',
              objectives: [
                'Variables and data types',
                'Functions and scope',
                'Arrays and objects',
                'Control flow'
              ],
              practice: 'Create interactive elements'
            }
          },
          {
            id: 'dom',
            title: 'DOM Manipulation',
            duration: '45 min',
            content: {
              overview: 'Learn to manipulate web page elements',
              objectives: [
                'DOM tree structure',
                'Selecting elements',
                'Modifying content and attributes',
                'Event handling'
              ],
              practice: 'Build an interactive todo list'
            }
          }
        ]
      },
      {
        id: 'module3',
        title: 'Data Visualization',
        topics: [
          {
            id: 'd3',
            title: 'D3.js Fundamentals',
            duration: '60 min',
            content: {
              overview: 'Create data visualizations with D3.js',
              objectives: [
                'D3.js basics',
                'SVG fundamentals',
                'Data binding',
                'Scales and axes'
              ],
              practice: 'Create a bar chart'
            }
          },
          {
            id: 'charts',
            title: 'Interactive Charts and Graphs',
            duration: '55 min',
            content: {
              overview: 'Build interactive data visualizations',
              objectives: [
                'Chart types and usage',
                'Adding interactivity',
                'Transitions and animations',
                'Responsive charts'
              ],
              practice: 'Build an interactive dashboard'
            }
          }
        ]
      }
    ]
  }
};

export default courseData;
 