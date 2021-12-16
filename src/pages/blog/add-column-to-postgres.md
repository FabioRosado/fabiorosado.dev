---
slug: add-column-to-postgres
title: Add column to postgres table
subtitle: How to manually add columns to a postgres database
author: "FabioRosado"
date:   2020-07-02 22:00:02 +0000
categories: Databases
category_icon: fas fa-database
tags: 
  - tips
  - backend
image: ../../images/postgres.jpg
excerpt: Using the command django makemigrations failed, so I had to figure out how to use psql on a docker container and add those columns manually.
---

While adding new fields to my Django models, running the command `manage.py makemigrations` didn’t create any migrations and I couldn’t do anything because the database table was missing those columns.

On [ThumbsUpNews](https://thumbsupnews.net) the whole project is being served through docker-compose and running `docker-compose exec db psql` didn’t work since I didn’t have my username on the database. 

After spending a few minutes searching, I’ve discovered that you could run the `sql` command with the `—username` flag to use a different user.

 `docker-compose exec db psql --username=<youruser>`

Inside the PostgreSQL interactive terminal, I figured that I could just add the columns that were missing on the table. But it seems that I couldn’t find that table.

Using the command `\l` allows us to list all databases available and I’ve noticed that I had a table named postgres which is the name of my docker container for the database.

Then we have to run the command `\c postgres` to connect to that database, then we can run the command `\d <table name>` to see the existing columns of that table.

Then all I had to do was to add new columns to the database.  

```sql
ALTER TABLE <name of table>
ADD COLUMN <name of colum> <colum type>;
```

We have to tell Postgres that we want to alter the table x and what kind of change we want to do, in this case, add a column. So let’s say that you want to add the column named  *description* and for type, we just want a text type with unlimited length.

You can do that by running the command:

```sql
ALTER TABLE <name of table>
ADD COLUMN description text;
```


Note that you need to finish the ADD COLUMN line with a `;`

That’s all there is to add columns to a Postgres database table.

_Reference_

- [PostgreSQL: Documentation: 9.5: Data Types](https://www.postgresql.org/docs/9.5/datatype.html)