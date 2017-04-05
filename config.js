
module.exports = {
  twitter: {
    consumer_key: "",
    consumer_secret: "",
    access_token_key: "",
    access_token_secret: "",
    username: "BW"
  },

  gmail: {
    user: "",
    pass: "",
    to: "\"Kevin\" <kevin.e.roark@gmail.com>"
  },

  subjects: [
    'I loved this story',
    'Awesome article',
    'Great work on this story',
    'Really cool stuff :)',
    'I actually genuinely relate to this article and want to talk to you',
    'Nice! Wanna schedule a meeting based on the contents of this article?'
  ],

  bodyMaker: (url, tweet) => {
    return `
    I really thought this article was really cool!
    Here's the article I'm talking about: <a href="${url}">${tweet.text}</a>.<br>
    I didn't expect something so cool haha!<br><br>
    Hope to work together soon! My astral photography is going great but
    I am still a portait photographer.<br><br>
    Please.<br><br>
    Cheers and Best,<br>
    Kevin Roark Jr
    `
  }
}
