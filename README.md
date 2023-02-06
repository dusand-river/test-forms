# test-forms

This sample has two actuall applications: 
1. React Native one
2. Node application

Both use same code for getting data, however results are completely different.
Note that it is working fine when api is called from Postman 

### Common code
In folder ./formService is common code. 
It is supposed to get all forms from my Wufoo account.

Both applications are calling function loadForms() that outputs results to console.

### Node application
*To run this execute npm run form in terminal. It executes correctly and returns data.*
*Output is:*

PS C:\aa_code\test-forms> npm run form

> test-forms@1.0.0 form
> ts-node ./src/test/form.ts

200
{
  Forms: [
    {
      Name: 'Test 01',
      Description: "This is my form. Please fill it out. It's awesome!",
      RedirectMessage: 'Great! Thanks for filling out my form!',
      Url: 'test-01',
      Email: '',
      IsPublic: '1',
      Language: 'english',
      StartDate: '2000-01-01 12:00:00',
      EndDate: '2030-01-01 12:00:00',
      EntryLimit: '0',
      DateCreated: '2023-01-15 14:37:53',
      DateUpdated: '2023-01-21 10:25:04',
      Hash: 'z2w7y1v0tpzni8',
      LinkFields: 'https://bhyctest.wufoo.com/api/v3/forms/z2w7y1v0tpzni8/fields.json',
      LinkEntries: 'https://bhyctest.wufoo.com/api/v3/forms/z2w7y1v0tpzni8/entries.json',
      LinkEntriesCount: 'https://bhyctest.wufoo.com/api/v3/forms/z2w7y1v0tpzni8/entries/count.json',
      Array: null
    },
    {
      Name: 'Test 02',
      Description: "This is my form. Please fill it out. It's awesome!",
      RedirectMessage: 'Great! Thanks for filling out my form!',
      Url: 'test-02',
      Email: '',
      IsPublic: '1',
      Language: 'english',
      StartDate: '2000-01-01 12:00:00',
      EndDate: '2030-01-01 12:00:00',
      EntryLimit: '0',
      DateCreated: '2023-01-26 16:05:26',
      DateUpdated: '2023-01-26 16:07:22',
      Hash: 'mb64ikc110s0vw',
      LinkFields: 'https://bhyctest.wufoo.com/api/v3/forms/mb64ikc110s0vw/fields.json',
      LinkEntries: 'https://bhyctest.wufoo.com/api/v3/forms/mb64ikc110s0vw/entries.json',
      LinkEntriesCount: 'https://bhyctest.wufoo.com/api/v3/forms/mb64ikc110s0vw/entries/count.json',
      Array: null
    }
  ]
}

### React-Native app
*To call execute expo start --web, which starts Metro Bundler and starts webpack on 19006.*
*Now when I call this from Chrome, this is the error that I am getting:*

Access to XMLHttpRequest at 'https://bhyctest.wufoo.com/api/v3/forms.json' from origin 'http://localhost:19006' has been blocked by CORS policy: 
Response to preflight request doesn't pass access control check: Redirect is not allowed for a preflight request.

*When opened by another Chrome window where cors is disabled, request is completed with status 200 but data looks like this:*

><!doctype html><html><head><title>Wufoo</title><meta charset="utf-8"/>
><meta name="viewport" content="width=device-width,height=device-height,minimum-scale=1,maximum-scale=1,user-scalable=no">
><link rel="shortcut icon" href="/usr/src/app/images/favicon.ico">
><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css"><title>Wufoo</title>
><link rel="icon" href="/favicon.ico"><link href="/app-a5fa4121e21a39c70041.css" rel="stylesheet"></head><body><div class="container">
></div><script src="/app-a5fa4121e21a39c70041.js"></script></body></html>

