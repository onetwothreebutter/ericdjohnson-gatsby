import React from 'react'

import WorkTile from '../../page-assets/work-ive-done/components/work-tile'
import workIveDoneStyles from '../../page-assets/work-ive-done/styles/work-ive-done.sass'

//Images for the tiles
import newtonscradle from '../../page-assets/work-ive-done/images/newtons-cradle.svg'

var photoCredit = `
    <a className="site__photo-credit" style="color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px;" href="http://unsplash.com/@groosheck?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Michał Grosicki"><span style="display:inline-block;padding:2px 3px;"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-1px;fill:white;" viewBox="0 0 32 32"><title></title><path d="M20.8 18.1c0 2.7-2.2 4.8-4.8 4.8s-4.8-2.1-4.8-4.8c0-2.7 2.2-4.8 4.8-4.8 2.7.1 4.8 2.2 4.8 4.8zm11.2-7.4v14.9c0 2.3-1.9 4.3-4.3 4.3h-23.4c-2.4 0-4.3-1.9-4.3-4.3v-15c0-2.3 1.9-4.3 4.3-4.3h3.7l.8-2.3c.4-1.1 1.7-2 2.9-2h8.6c1.2 0 2.5.9 2.9 2l.8 2.4h3.7c2.4 0 4.3 1.9 4.3 4.3zm-8.6 7.5c0-4.1-3.3-7.5-7.5-7.5-4.1 0-7.5 3.4-7.5 7.5s3.3 7.5 7.5 7.5c4.2-.1 7.5-3.4 7.5-7.5z"></path></svg></span><span style="display:inline-block;padding:2px 3px;">Michał Grosicki</span></a>
`


const WorkIveDone = () => (
  <div>
      <section className="work__banner">
          <div className="work__page-width">
              <h1 className="site__banner-heading">
                  Work I've Done
              </h1>
              <div dangerouslySetInnerHTML={{ __html: photoCredit }} />
          </div>
      </section>

      <section className="work-tiles">
          <WorkTile link="web-animations" img={newtonscradle} heading="Web Animation" description="I love bringing the web to life!"/>
          <WorkTile link="ui-components" heading="UI Components" description="My fun, reusable interface elements"/>
          <WorkTile link="ux-design" heading="UX Design" description="A couple of examples of UX improvement ideas"/>
          <WorkTile link="product-design" heading="Product Design" description="Some of my bright ideas"/>
          <WorkTile link="visual-design" heading="Visual Design" description="Stickers, t-shirts, and logos I've designed"/>
          <WorkTile link="writing" heading="Writing" description="Good writing makes good code"/>
      </section>
  </div>
)

export default WorkIveDone
