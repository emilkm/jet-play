jet-play
=====


Branch **b4** illustrates the current problem in switching between sub-apps

The structure is a main app with sub-apps/modules (webpack chunks) that live in the *modules/<modulename>* folder.

Two sub-apps
* client
* system


## Issue 1: JetView.destructor this._root is undefined and cannot execute this._root.destructor() ##


Load app with /top/client/index by default

![](images/01.png)

Switch to /top/system/index

![](images/02.png)

Switch to /top/client/index

![](images/03.png)


The following code works around the issue. Not sure why this._root is undefined.

```
destructor(){
	this.destroy();
	this._destroyKids();

	// destroy actual UI
	if (!this._root) {
		console.log("JetView.destructor() this._root is undefined and cannot execute this._root.destructor()")
	} else {
		this._root.destructor();
	}
	super.destructor();
}
```


## Issue 2: Are JetApp instances destroyed properly? ##

Just starting to look at this one, and noticing that there are things left behind that I expect to be destroyed.
Could be faulty process on my part. Further investigation required.

JetApp instances seem to grow with every switch. In my dev project instances of other views and data objects related to should be destroyed apps continue to multiply.

Will flesh out the example once issue 1 is resolved.  




