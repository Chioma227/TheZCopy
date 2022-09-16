import React from 'react'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import NewsLetter from './NewsLetter'

const NewsLetterSubscribe = () => {
    const MailChimpURL = "https://gmail.us14.list-manage.com/subscribe/post?u=e11458d72bbe7764111bf613e&amp;id=9bb304d967&amp;f_id=00ddfae0f0"
  return (
    <div>
      <MailchimpSubscribe
      url={MailChimpURL}
      render={(props) =>{
        const {subscribe} = props || {};
        return(
            <NewsLetter
            onVaidated={formdata => subscribe(formdata)}
            />
        )
      }}
      />
    </div>
  )
}

export default NewsLetterSubscribe
