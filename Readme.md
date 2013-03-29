
# api-stability-indicator

  Simple API stability indicator

  This component is used with **jekyll-based api doc website**.

## Usage

  In your `_posts` folder, you have your post. And at the beginning of each post, you just need to defined the status code like here `status: 'stab01`.

``` 
---
category: Login
path: '/login'
title: 'Login'
type: 'GET'
status: 'stab01'

layout: nil
---
```
  
  Then, in your root folder, find respected html template file, and includ `class= {{ post.status }}` in your code:

```
 <article class='{{ post.type }}'>
    <a name='{{ post.url }}' class='{{ post.status }}' href='#{{ post.url }}'><h2>{% if post.type %}<code><b>{{ post.type }}</b> {{ post.path }}</code> {% endif %}{{ post.title }}</h2></a>
    <section class='body'>
      {{ post.content }}
    </section>
  </article>
```

And then it's done.

## Installation

    $ component install xufeng123/api-stability-indicator

## API

	Sorry, there's no api here.	 

## License

  MIT
