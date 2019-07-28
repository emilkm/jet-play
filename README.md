jet-play
=====


Branch **b4** memory leak in login form with **password** field.

The structure is a main app with sub-apps/modules (webpack chunks) that live in the *modules/<modulename>* folder.

Two sub-apps
* client
* system


## Issue 1: JetView is retained in memory after destruction, due to password field. ##


After a fairly good chase, I think I have find one culprit. In a simplified two module app, with login page, the login page is retained when the form has a password field.

At login page.

![](images/01.png)

After login

![](images/02.png)



