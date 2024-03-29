---
slug: tweetnalytics
title:  Tweetnalytics
date:   2018-04-16 09:30:00 +0000
categories: Projects
tag: Sentiment Analysis
tag-icon: fas fa-chart-pie
image: ../../images/projects/tweetnalytics.jpg
source: https://github.com/FabioRosado/tweetnalytic
tech: Python NLTK Twython
excerpt: Does sentiment analysis on a subject depending of opinions shared on twitter by using the NLTK library.

---
NLTK is a powerful library that allows you to work with human language data. With it you can process text for classification, tokenization, stemming, tagging and parsing. Since I was taking the Datacamp course - _Natural Language Processing Fundamentals in Python_ and was learning about NLTK I decided to use this library to create a Tweet classification script to be used on a term.

# The Good

- Can deal with repeated tweets on a subject
- Once the classifier is trained the script can run the classification quickly
- It provides a good overall feeling about a subject
- It saves the searched tweets in a file so it can be used instead of querying the Twitter database again

# The Not So Good

- NLTK is a bit slow - training the classifier is a bit slow and could be improved further
- The method used for the classifier needs a large amount of data to increase the accuracy of the classifier
- Due to the data used only a rating of "Good" or "Bad" is returned
- Bag of words used - the classifier is unable to categorise sarcasm and double negatives properly

# How it all came to be

One of the Pybites challenges was to create a Twitter sentiment analysis to get a ratting about a subject. After the analysis is done the searched term would get a rating for Good, Bad, Neutral.

Pybites solution uses the textblob library, but since I was learning about NLTK at the time I have decided to use this library and implement my version of a classifier. Working on this exercise was extremely fun and made me learn a lot.

# Info

**GitHub repo:** [https://github.com/FabioRosado/tweetnalytic](https://github.com/FabioRosado/tweetnalytic)

**Pybites challenge 07:** [https://pybit.es/codechallenge07.html](https://pybit.es/codechallenge07.html)

**Image credits:** [Unsplash](https://unsplash.com/photos/FumjLlfuvhg)