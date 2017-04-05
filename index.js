
const Stream = require('user-stream')
const GmailSend = require('gmail-send')
const config = require('./config.json')

const stream = new Stream(config.twitter)

const sender = new GmailSend({
  user: config.gmail.user,
  pass: config.gmail.pass,
  to: config.gmail.to,
  subject: 'NO SUBJECT',
})

stream.stream()

stream.on('connected', () => {
  console.log('locked and dialed in to the stream...')
})

stream.on('data', data => {
  if (data.user && data.user.screen_name === config.twitter.username) {
    sendEmail(data)
  }
})

stream.on('error', err => {
  console.log(err)
})

function sendEmail (tweet) {
  let url = 'UNKNOWN_ARTICLE'
  if (data.entities && data.entities.urls.length > 0) {
    let obj = data.entities.urls[0]
    url = obj.expanded_url || obj.display_url || obj.url
  }

  const subject = config.subjects[Math.floor(Math.random() * config.subjects.length)]
  const html = config.bodyMaker(url, tweet)

  try {
    console.log('sending email for...', data.text)
    sender({ subject, html }, err => {
      if (err) {
        console.log('send error', err)
      }
    })
  } catch (err) {
    console.log('send error', err)
  }
}

module.exports = () => `Hello :)`
