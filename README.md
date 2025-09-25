# Project Name: 

## Project Description:  

## Live Site Link:

## Project Video:

## Features:

## What I Learned New while Building This Project:

1. How to add google fonts on react project:

```html
<!doctype html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <link rel="icon" type="image/svg+xml" href="knowledge.png" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Knowledge Cafe</title>

  <!-- google fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,100..900;1,100..900&display=swap"
    rel="stylesheet">

  <style>
    .exo-2 {
      font-family: "Exo 2", sans-serif;
      font-optical-sizing: auto;
      font-style: normal;
    }
  </style>
</head>

<body class="exo-2">
  <div id="root"></div>
  <script type="module" src="/src/main.jsx"></script>
</body>

</html>
```

## Challenges I faced while Building This Project:
1. I mistakenly add a comma on the very last object in my json data, so its give me error and it's take couple of minute to find: 

```json
[
    {
        "id": 1,
        "cover": "https: //i.ibb.co.com/zVXz2RgJ/conver1.png",
        "title": "How to get your first job as a self-taught programmer",
        "author_img": "https://i.ibb.co.com/JFvx4mYM/avatar2.png",
        "author": "Mr. Raju",
        "posted_date": "Mar 14 (4 Days ago)",
        "reading_time": 5,
        "hashtags": [
            "#beginners",
            "#programming"
        ]
    },
    {
        "id": 2,
        "cover": "https: //i.ibb.co.com/9HxCf4rc/cover2.png",
        "title": "JavaScript Objects for Absolute Beginners: A Fun Introduction",
        "author_img": "https://i.ibb.co.com/rKR1sRm1/avatar3.png",
        "author": "Mrs. Setara",
        "posted_date": "Mar 14 (4 Days ago)",
        "reading_time": 10,
        "hashtags": [
            "#javascript",
            "#coding",
            "#dev"
        ]
    },
    {
        "id": 3,
        "cover": "https: //i.ibb.co.com/B5M2SKYx/cover3.png",
        "title": "Component lifecycle in React — Class component vs Functional component",
        "author_img": "https://i.ibb.co.com/9kdp6P0d/avatar4.png",
        "author": "Mina Mostofa",
        "posted_date": "Mar 14 (4 Days ago)",
        "reading_time": 12,
        "hashtags": [
            "#mid_level",
            "#react"
        ]
    },
]
``` 

![image](./src/assets/images/readme-images/json-comma-error.png)

## Contact With Me: 

tamim.muhammad2005@gmail.com | +8801586090360 (WhatsApp)  

https://www.linkedin.com/in/tamim-muhammad
