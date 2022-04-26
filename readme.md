# Overview

This will be a blogging platform written in Node. It will allow users to create a homepage and blog posts. Bonus features might include the ability to create more pages (which are not actual blog posts).

# Homepage

To start, the only page that isn't blog posts will be a landing page which will always be at "/". This should be customizable through a template.

# Blog Posts

These will be saved in a database as html/mustache template string and other meta data. They will be accessible by URLs that correspond to the date they were first created: http://example.com/2022/04/23.

## Writing Blog Posts

There should be some simple interface for writing blog posts. Writers should be able to log in and see a list of their posts and see a way to create a new post. They should be able to edit old posts as well.

## Comments

Users should be able to comment on blog posts.

_should we require them to log in?_

Comments should be disable-able. There needs to be some kind of interface for adding them and that should include some kind of bot check or a way of adding a bot check.

Comments should only be editable by the comment writer, but they should be delete-able by editors and admins.

# Users

## Login

Users should be able to login at /login. Once logged in, the things they can do should be determined by their level of privilege in the system. There should be at least three roles: Admin, Writer and Editor. An admin should have full rights, an editor should have full control over blog posts, and a writer should be able to write new posts and should have control over only the posts that they themselves have written.

# Templates and Customization

Customization can be done through templates which should reside in some templates file. Those templates will be grabbed when a post or page is taken from the database and used to render the final page, so by updating those templates a user should be able to customize the site.

In order to make that easier and safer, you should be able to have separate template directories which can be switched between. This way, you can experiment with different sets up templates easily without having to move a lot of files back and forth.

To start there needs to be a homepage template, and a blog post template at the very least. It might make sense to break up the templates into smaller parts, though, so that you can play with different parts of the page separately.
