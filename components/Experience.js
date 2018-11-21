import React from 'react';

export default class Experience extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div class="container">

        	<div id="fixit" class="timeline-item" date-is='20-07-1990' >
        		<h1>Hello, 'Im a single div responsive timeline without mediaQueries!</h1>
        		<p>
        			I'm speaking with myself, number one, because I have a very good brain and I've said a lot of things. I write the best placeholder text, and I'm the biggest developer on the web by far... While that's mock-ups and this is politics, are they really so different? I think the only card she has is the Lorem card.
        		</p>
        	</div>

        	<div class="timeline-item" date-is='20-07-1990'>
        		<h1>Oeehhh, that's awesome.. Me too!</h1>
        		<p>
        			I'm speaking with myself, number one, because I have a very good brain and I've said a lot of things. I write the best placeholder text, and I'm the biggest developer on the web by far... While that's mock-ups and this is politics, are they really so different? I think the only card she has is the Lorem card.
        		</p>
        	</div>

        	<div class="timeline-item" date-is='20-07-1990'>
        		<h1>I'm ::last-child so my border fades ^__^</h1>
        		<p>
        			I'm speaking with myself, number one, because I have a very good brain and I've said a lot of things. I write the best placeholder text, and I'm the biggest developer on the web by far... While that's mock-ups and this is politics, are they really so different? I think the only card she has is the Lorem card.
        		</p>
        	</div>

        </div>
        <style jsx>{`
          #fixit {
              border-image: linear-gradient(to top, rgba(0, 0, 0, 0.3) 90%, rgba(0, 0, 0, 0)) 1 100%;
          }
          body {
            font-size: 14px;
            line-height: 1.5;
          }

          h1, h2, h3, h4, h5, h6 {
            font-family: 'Oswald', sans-serif;
          }

          h1 {
            font-size: 2rem;
            margin-bottom: .5em;
          }

          p {
            font-family: 'Roboto', sans-serif;
            font-size: .8rem;
          }

          .container {
            max-width: 1024px;
            width: 90%;
            margin: 0 auto;
          }

          .timeline-item {
            padding: 3em 2em 2em;
            position: relative;
            color: rgba(0, 0, 0, 0.7);
            border-left: 2px solid rgba(0, 0, 0, 0.3);
          }
          .timeline-item p {
            font-size: 1rem;
          }
          .timeline-item::before {
            content: attr(date-is);
            position: absolute;
            left: 2em;
            font-weight: bold;
            top: 1em;
            display: block;
            font-family: 'Roboto', sans-serif;
            font-weight: 700;
            font-size: .785rem;
          }
          .timeline-item::after {
            width: 10px;
            height: 10px;
            display: block;
            top: 1em;
            position: absolute;
            left: -7px;
            border-radius: 10px;
            content: '';
            border: 2px solid rgba(0, 0, 0, 0.3);
            background: white;
          }
          .timeline-item:last-child {
            -o-border-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 60%, rgba(0, 0, 0, 0)) 1 100%;
               border-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 60%, rgba(0, 0, 0, 0)) 1 100%;
          }
        `}</style>
      </>
    );
  }
}
