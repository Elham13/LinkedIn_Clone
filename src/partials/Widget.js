import React from 'react';
import './Widget.css';
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widget() {
  const newsArticle = (heading, subtitle) => (
    <div className='widget_article'>
      <div className='widget_articleLeft'>
        <FiberManualRecordIcon />
      </div>
      <div className='widget_articleRight'>
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className='widget'>
      <div className='widget_header'>
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle(
        'Joe Biden welcomed Elon Musk',
        "Biden the new president of US warmly welcomed Tesla company's chief..."
      )}
      {newsArticle(
        'The Covid19 India update',
        "It's been a long time without you my friend, and I'll tell you all about it when I see again"
      )}
      {newsArticle(
        'Afghanistan is not gonna get better',
        "We've come a long way, from where we begin, and I'll tell you all about it when I see you agian"
      )}
      {newsArticle(
        'Freedom fighter took over the bridge',
        "When I get older I will be stronger they'll call me freedom just like a waving flag"
      )}
    </div>
  );
}

export default Widget;
