# Detailed Character Info 
A custom made FoundryVTT module designed to allow characters to input additional, custom data for their characters for increased role play. This module is not published, has no localization, and presently, is only to be used privately while questions and answers are rewritten to avoid copyright infringement. Please utilize the template as is, as the questions have been removed to avoid this copyright issue.

## How to use
1. Clone this repository to your local machine
2. Navigate to the "datatabbed.hbs" file in your favorite code / text editor. 
3. Modify the information in the tabs to reflect the questions and answers you'd like to provide to your players
  a. Utilize the following format for `<input>` tags:
  - name="flags.detailedcharinfo.YOURFLAGNAME" (replace YOURFLAGNAME with the name of the flag where the data will store)
  - value="{{flags.detailedcharinfo.YOURFLAGNAME}}" (YOURFLAGNAME must be identical to the 'name' flag. The curly-brackets are required)
4. Create a folder within your `%localappdata%/FoundryVTT/data/modules` folder named "detailedcharinfo" and copy the entire contents of your local copy of this repository into that folder.
5. Enable the module in Foundry and test.

When testing, locate / create a player actor (character sheet) that you want to use to test functionality, and locate the `Details` button that now exists on the left-hand side window-bar as shown here:
!['Details' button on the upper-left hand of a character sheet](https://user-images.githubusercontent.com/58367364/226686731-e82b63c7-8566-42e6-a759-de9c87cba703.png)

Once within the menu, you can see the various tabs and the information within them.

![Visualization of the module's interface](https://user-images.githubusercontent.com/58367364/226686955-6be2a3ee-6298-4f4f-a5b0-3013cbf3c9d7.png)

As this utilizies functionality built into foundry for inputting and saving data as "flags" to an actor / character sheet, they require these two attributes to be set before usage to allow foundry to both save and retrieve the data.

A sample question and answer input has been provided on the first tab in the "datatabbed.hbs" file.

## To Do
[] Implement UI functionality within Foundry to allow GM's to input their own questions, tabs, answers, and more without needing to clone the repository and modify the file manually.
[] Create an independent infrastructure for the GM to add and remove questions and automatically populate answers in an "achievement unlocked" style.
