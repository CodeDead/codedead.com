---
path: "/blog/2015/08/24/5-software-project-ideas"
title: "5 software project ideas"
author: "CodeDead"
date: "2015-08-24"
abstract: "We’ve come up with a list of five software project ideas for you programmers out there that sometimes visit CodeDead and, like us, might sometimes be struggling with creativity. Let’s get right to it, shall we! 1. An intelligent chatbot Wouldn’t it..."
categories: "Inspiration"
---
We’ve come up with a list of five software project ideas for you programmers out there that sometimes visit CodeDead and, like us, might sometimes be struggling with creativity. Let’s get right to it, shall we!

## 1. An intelligent chatbot

![Robot](https://www.cqwen.com/wp-content/uploads/2014/11/chat-bot-e1311097656659.jpg)


Wouldn’t it be cool to actually talk to a computer and being able to have full conversations with them? Sure, sure, chatbots already exist, but it’s a great way to improve your programming skills and it’s really cool to show a friend.

It’s not actually that complicated to write a basic chatbot. Basic questions like ‘How are you?’, and ‘What time is it?’ can be easily coded into an if statement. The problem, however, lies in making a program understand what the person is actually saying. Let’s take a previous example: “How are you?”. I can think of so many different ways to ask someone how they’re doing. Are you going to write a massive if statement that includes all those possibilities? Are you going to use regex to filter things out? It’s up to you ! Good luck and remember to have fun.

## 2. Location-based alarm system

![GPS](https://cf.ltkcdn.net/cellphones/images/std/146340-425x425-cell_phone_tracking_GPS.jpg)


If you’re like me, you’ll probably forget a thing or two when you’re shopping for groceries. Trivial things like milk or sugar. Or perhaps you forgot the name of that ice cream brand your partner asked you to bring with you.

Wouldn’t it be amazing to have a location-based alarm system on your phone that could send out reminders? ‘Oh, you’re at the supermarket, remember to buy her/him that ice cream!’.

## 3. Webcam motion detector

![Webcam](https://www.lawyersandsettlements.com/blog/wp-content/uploads/2010/02/webcam.jpg)

Not sure who might secretly check out your browser history when you’re sitting on the toilet?

No worries, a webcam motion detector could, whenever it detects movements, take a picture of the room and store it in a safe location. It would be even better to store said pictures in some kind of cloud or online hard disk that you can consult whenever you want/where ever you are. That way, you’ll always know what’s going on around your computer when there’s movement.

On paper it sounds easy to make: all you’d have to do is take a picture every x seconds and compare it to the last one. If there are any significant changes to the new one, store the new one somewhere safe. Else, dump the old one.

But designing an algorithm that decides when and how to store the pictures is quite a different story.

```
if (changepercentage >= 20 (?) ) {
 storePicture();
}
```

## 4. Spam detector

![Spam](https://2.bp.blogspot.com/-RYu4yM8cixE/UD12lhq2jVI/AAAAAAAAA50/fhzhk4nIJoc/s1600/spam2.jpg)

If you’re operating a blog, I probably don’t have to tell you this but there are a lot of spam bots out there, making comments here and there and advertising links in the process. Mostly these are harmless advertisement bots, designed to take your visitors away.

But every now and then, there’s this one bot that essentially redirects visitors to a site that tries to infect visitors (without them even knowing it) with all kinds of malware.

This is why, it’s your duty as a site owner, to make sure that your visitors are safe and sound when they’re visiting your website.

In theorie, all you’d have to do is check every comment with a bot of your own, make sure there are no ads/links in them and approve or disapprove the comment. If the bot isn’t sure if it’s a spam comment or not, it could flag the comment for manual input.

## 5. Domain blocker

![Domains](https://namescon.com/wp-content/uploads/2017/11/ICANN%E2%80%99s-New-Domain-Name-Transfer-Policy-720x350.png)

Software like Malwarebytes is able to block certain websites. Note: malware.

Making a domain blocker of your own is quite a challenge, since you’re not just blocking a website, you’re also storing a database somewhere with ‘known bad domains’. You’ll have to maintain that database somehow, and make sure that not a single application on the user’s computer is able to contact that domain.

## Outro

There we go. This is basically all the inspiration I had today. Hmm, maybe I should be looking up some ideas myself.

Anyway, I hope you enjoyed this post !
