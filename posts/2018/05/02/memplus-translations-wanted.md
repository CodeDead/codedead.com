---
path: "/blog/2018/05/02/memplus-translations-wanted"
title: "MemPlus - Translations wanted"
author: "CodeDead"
date: "2018-05-02"
abstract: "Information MemPlus has gained a lot of popularity lately. Because of this, the need to make the application available in multiple languages has increased dramatically. Rest assured though, we’re working on a new update for MemPlus which will involve making the..."
categories: "C#, News"
---
## Information

MemPlus has gained a lot of popularity lately. Because of this, the need to make the application available in multiple languages has increased dramatically. Rest assured though, we’re working on a new update for MemPlus which will involve making the program multilingual. As it stands, the application has all the building blocks to add languages. However, our knowledge is limited to Dutch and English which is why we’re requesting your help. If you’d like to help us translate MemPlus, please take a look at our GitHub page.

### How does it work?
The file that needs to be translated is a simple XAML file. It looks almost identical to XML, so it should be readable for people who are used to working in XML files. The data that needs to be translated is located between two tags.

To make an example:

This is the tag for the word “Exit” (in English):
```
<system:String x:Key="Exit">Exit</system:String>
```

After translating this to Dutch, it would become:
```
<system:String x:Key="Exit">Sluiten</system:String>
```
For a full comparison between the available languages, click here.

Please be careful not to remove any percentage marks or underscores.

### How to submit translations?

#### Naming

It would be preferable if the name of the translation file followed the ISO 639-1 standard. Examples include:

* en_US
* nl_BE
* fr_BE
* etc.

For more information, please take a look here.

#### Git
If you’re familiar with Git and the way it works, simply create a pull request with your language included.

### E-mail
You can also email us your translations for MemPlus to: admin@codedead.com

### How to test translations?

If you’re a developer yourself with access to Visual Studio and the requirements in order to build MemPlus, simply running the application with the required adjustments will display the translations. In case you’re not a developer and would like to see how your translations add up, please send us an e-mail with your translations. We will then send a custom build of the software to you which you can use to test your translations. Rest assured, we’re not trying to infect you. Virus scans will also be made available to you using VirusTotal.

### Credits

If your translation has been accepted, you will automatically be credited in the help documentation. In case you don’t want any credits, please make sure you include this information on GitHub or in your e-mail. You can also choose to display a nickname. For companies helping us out: rest assured, we can also add a link to your services in the documentation. Please note that tracking links or links containing advertisements will be rejected! As a little side note: MemPlus has surpassed 30.000 downloads in less than three months.

#### List of contributors:

* shinmai_rookie (es_ES / gl_ES)
* James van der Moezel (de_DE)
* Ithuriel (ar_SA)
