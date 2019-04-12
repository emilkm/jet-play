jet-play
=====

Just a bit of play in order see the problem clearly.

The webix-jet TypeScript code is included in the project directly to make it easier to debug.



Branch **b4** illustrates the current problem in loading sub-module after upgrading to webix-jet 2.0.5

The structure is a main app with sub-apps/modules (webpack chunks) that live in the *modules/<modulename>* folder.

Sub-apps use the updated SubRouter.

Currently /top/client fails to load.



