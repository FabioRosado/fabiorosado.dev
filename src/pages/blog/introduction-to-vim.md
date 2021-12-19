---
slug: introduction-to-vim
title:  Introduction to Vim
subtitle: Learn how to get started with this editor  
author: "FabioRosado"
date:   2018-04-24 18:10:02
categories: Vim
category_icon: fa fa-terminal 
tags:
  - tutorial
  - terminal
image: ../../images/vim.png
excerpt: Vim is still one of the editors that confuse some developers. This introduction will keep you up to speed with this powerful editor.
---

Vim stands for vi improved and is a command-line text editor installed with every platform other than windows (unless you [install it](https://www.vim.org/download.php). It can be hard to figure out how to do things in this editor. This article aims to give you the basic knowledge of Vim and how to do something with it.

Let's start with the basics. How do you open Vim?

If you are running Linux or macOS, you most likely have Vim installed already, so you can open your terminal and run the command `vim <filename/path of file>` to edit that file. 

Don't forget to check the [vim cheatsheet](../cheatcheets/vim) so you can check the commands that this article mentions. You can also download an image with all these commands.

# Vim Modes

Vim comes with three different modes:

- Normal Mode (Default mode)
- Insert Mode (Press _i_ key)
- Visual Mode (Press _v_ key)

These modes are straightforward to understand. You can see which mode you are in on the bottom left corner of the terminal window.

The normal mode is the default mode, it's activated as soon as you open Vim. You can move around, read the text, copy, insert lines, etc. The only thing you can't do in this mode is edit the text.

## Editing text

If you want to edit the text, you can press the _i_ key on your keyboard. You can notice that the bottom left corner of the window now shows the text: `--INSERT--`.

You will now be able to use your terminal as a text editor. You can add, edit and delete text as you would do in any other text editor.

Once you are happy with the changes you have made, press the _esc_ key on your keyboard and return to the Normal mode.

## Visual Mode

There is nothing much to say about this mode. It allows you to select big chunks of text for you to copy or cut. When this mode is active, you can read the text: `--VISUAL--` in the bottom left corner of the window.

Another thing you can do in the visual mode is to highlight text and then make small changes to the highlighted text, such as changing to uppercase or indenting lines.

# Vim Commands

Vim is meant to help you do things reasonably quickly without the need for a mouse. Everything can be done with a keyboard, so learning some of the Vim commands will be helpful.

Things that you will learn:

- how to save a file
- how to quit Vim
- how to move around
- how to see line numbers

## Saving and quitting Vim

Now that you know how to edit a text in Vim, the most important thing you will learn will be how to save your changes and quit. If you are in normal mode, then by pressing the _:_ key of your keyboard, you will be able to enter commands to Vim.

All you need to do is type `:w` and then press the enter key to save a file.

To exit vim and go back to the command line, you must use `:q`.

Note that if you made changes to the file and didn't save them. Vim won't automatically exit. Instead, it will tell you to run the command `:q!`, which translates to force quit.

These two commands can be combined into one `:wq`. This will write the changes to the file and then quit Vim. If you want to be quicker, the key combination `shift+zz` will achieve the same results.

You can also use the command `:w <filename>` to save a new file with that name - this command is helpful if you didn't open a file with Vim.

## Line numbers

Showing line numbers can be useful when editing a file. Vim allows you to jump straight into a line if you know its number, so your editing can be done quicker if you know exactly where and what to edit.

You need to run the command `:set number` to show line numbers. Once you press enter, you can see that Vim will show the number of each line.

If you want to jump straight to a line, you can type the command `:<line number>`, and the cursor will jump to the beginning of that line.

## Moving around

To move around, all you need is to press a few keys to do different things. Moving around doesn't require entering the command mode by pressing the `:` key.

- `h` or `arrow left` - move the cursor one character to the left
- `l` or `arrow right` - move the cursor one character to the right
- `j` or `arrow down` - move the cursor one line down
- `k` or `arrow up` - move the cursor one line up
- `0` - move the cursor to the beginning of the line
- `$` - move the cursor to the end of the line
- `w` - move the cursor one word forward
- `b` - move the cursor one word back
- `gg` - move to the beginning of the file (line 1)
- `G` - move to the end of the line (last line)

These two commands can be used while moving/editing the file:

- `o` - adds an empty line below the cursor, moves the cursor to that line, enters edit mode
- `O` - adds an empty line above the cursor, moves the cursor to that line, enters edit mode

## Deleting things

You can delete things by pressing the `d` key. This will serve as the _cut_ command as well. Vim allows you to combine commands to achieve a purpose, so you can combine the moving around commands with the delete to improve your editing skills.

- `de` - delete from where the cursor is until the end of the current word
- `dw` - delete to next word
- `d2w` - delete two words from cursor
- `d$` or `D` - delete to the end of the line from where the cursor is
- `dd` - delete the whole line

## Other useful commands

Since we tend to delete the wrong things, Vim also comes with an undo and redo command that can come in handy in many situations.

- `u` - undo previous command/action
- `CTRL-u` - redo previous command/action
- `.` - repeats last command that modified something (such as 2dd - delete two lines)

You can also make vim search for a term in the whole file with the commands:

- `:?<term>` - searches for that term from the cursor down
- `:\<term>` - searches for that term from the cursor up
- `n` or `/` - go to the next searched term
- `N` or `?` - go to the previous searched term

## Conclusion

This concludes the introduction to Vim. Hopefully, you found it helpful. You still need to learn many things, but this should give you the basics to work around in this text editor.

If you would like to know more about Vim, you can run the Vim tutor by running this command on your terminal:

`$ Vimtutor`

This will open a text file with step-by-step instructions that cover all the basic commands in Vim.