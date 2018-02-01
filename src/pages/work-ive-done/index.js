import React from 'react'

import WorkTile from '../../page-assets/work-ive-done/components/work-tile'
import PhotoCredit from '../../page-assets/global/components/photo-credit'
//svg for the "Web Animation" tile
import NewtonsCradle from '../../page-assets/work-ive-done/images/newtons-cradle.svg'

import workIveDoneStyles from '../../page-assets/work-ive-done/styles/work-ive-done.sass'


class WorkIveDone extends React.Component {

    render() {

        return (
            <div>
                <section className="work__banner">
                    <div className="work__page-width">
                        <h1 className="site__banner-heading">
                            Work I've Done
                        </h1>
                        <PhotoCredit name="Michał Grosicki" image_url="http://unsplash.com/@groosheck?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge"/>
                    </div>
                </section>

                <section className="work-tiles">

                    <WorkTile link="web-animations" svg={<NewtonsCradle/>} heading="Web Animation" description="I love bringing the web to life!"/>
                    <WorkTile link="ui-components" heading="UI Components" description="My fun, reusable interface elements"/>
                    <WorkTile link="ux-design" heading="UX Design" description="A couple of examples of UX improvement ideas"/>
                    <WorkTile link="product-design" heading="Product Design" description="Some of my bright ideas"/>
                    <WorkTile link="visual-design" heading="Visual Design" description="Stickers, t-shirts, and logos I've designed"/>
                    <WorkTile link="writing" heading="Writing" description="Good writing makes good code"/>
                </section>
            </div>
        )
    }
}

export default WorkIveDone
