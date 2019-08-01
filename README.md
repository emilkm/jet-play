jet-play
=====


Branch **b5** memory leak related issues.

The structure is a main app with sub-apps/modules (webpack chunks) that live in the *modules/<modulename>* folder.

Two sub-apps
* mogule1
* module2



## Issue 2: JetView is retained in memory after destruction, when combo item selected "

To replicate:
1. Start the app
2. Navigate to module 2 /#!/top/module2/index/page1
3. Select an item from the combo
4. Navigate to module 1


![](images/03.png)


----------
# Resolved #


## Issue 1: JetView is retained in memory after destruction, due to password field. ##

> Maksim: This one is most probably caused by the bug in the Chrome https://bugs.chromium.org/p/chromium/issues/detail?id=967438



After a fairly good chase, I think I have find one culprit. In a simplified two module app, with login page, the login page is retained when the form has a password field.

At login page.

![](images/01.png)

After login

![](images/02.png)



