import { Add } from '@material-ui/icons';
import React, { useState } from 'react';
import './Faq.css';

const data = [
  {
    name: 'Wen Mint?',
    id: 1,
    open: false
  },
  {
    name: 'What is the mint price?',
    id: 2,
    open: false
  },
  {
    name: 'How does the mint work?',
    id: 3,
    open: false
  },
  {
    name: 'What are the requirements to mint?',
    id: 4,
    open: false
  },
  {
    name: 'How many orderdeeds are available to mint?',
    id: 5,
    open: false
  },
  {
    name: 'What is the claim limit for blayc or mayc holders?',
    id: 6,
    open: false
  },
  {
    name: 'Where will secondary sales be orderdeed?',
    id: 7,
    open: false
  },
  {
    name: 'I kyced but didn\'t approve my wallet. Can i still mint?',
    id: 8,
    open: false
  },
  {
    name: 'I didn\'t kyced. Can i still mint an otherdeed?',
    id: 9,
    open: false
  },
  {
    name: 'Is this mint the only chance to get an otherdeed or participate in otherside?',
    id: 10,
    open: false
  },
  {
    name: 'How do i kn ow if something is an otherside scam?',
    id: 11,
    open: false
  },
  {
    name: 'How long do bayc and mayc holders have to claim otherdeed?',
    id: 12,
    open: false
  },
  {
    name: 'How many otherdeed can bayc and mayc holder claim?',
    id: 13,
    open: false
  },
  {
    name: 'I don\'t pre-approve my wallet. can i still claim or otherdeed?',
    id: 14,
    open: false
  },
  {
    name: 'Is ther an otherside discord?',
    id: 15,
    open: false
  },
  {
    name: 'What about twitter?',
    id: 16,
    open: false
  },
  {
    name: 'What do you get with an otherdeed?',
    id: 17,
    open: false
  },
  {
    name: 'Can i sell specific things in my land?',
    id: 18,
    open: false
  },
  {
    name: 'What is the difference between creating for otherside as a otherdeed holder using sdk?',
    id: 19,
    open: false
  },
  {
    name: 'Do you have to buy otherdeed to create with an otherside?',
    id: 20,
    open: false
  }
]

function Faq() {
  const [faqData, setFaqData] = useState(data)

  return (
    <div className='faq_main'>
      <h1 className='faq_header'>FREQUENTLY ASKED <br /> QUESTIONS</h1>
      <div className='faq_con'>
        {faqData.map(faq => (
          <div key={faq.id}>
            <span>{faq.name}</span>
            <Add/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Faq