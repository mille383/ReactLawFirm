import React from 'react'

export const ContactUs = (props) => {
    const user = props.user;

    return (
        <React.Fragment>
            <h4>Hello, {user.name}</h4>
            {/* <hr />
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-12">
                        <form onSubmit={(e) => props.addPost(e)} id="post-form" className="form-inline">
                            <div className="flex-fill mr-2">
                                <input type="text" name="body" id="body" placeholder="What's on your mind?" className="form-control w-100" />
                            </div>
                            <input type="submit" value="Post" className="btn btn-primary" />
                        </form>
                    </div>
                </div>
            </div>

            <ul className="list-group">
                {props.posts.map(p => <Post deletePost={props.deletePost} key={p.id} p={p} />)}
            </ul> */}

            <main>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-3">
                            <div className='what-we-do-container'>
                                <p id='news-feed-head'>CONTACT US</p>
                                <hr id='news-feed-line'/>
                                    <ul>
                                        <li>Directions/Parking</li>
                                        <br/>
                                        <li>Career Opportunities</li>
                                    </ul>
                                        {/* <img class="center career-opp-img" src='./static/images/content-navlink-news.jpg'><br> */}
                                    <h6>News & Events</h6>
                                    <p>Join our magnificent firm and do more stuff with us.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            {/* <img src='/static/images/content-05-contact.jpg' style="width:100%"> */}
                            <br/>
                            <br/>
                            <br/>
                            <p>The office hours are 8am - 5pm Monday through Friday</p>
                            <br/>
                            <p>689 East South Street <br/>
                            Suite 4210 <br/>
                            Houston, Texas 09324 <br/>
                            <br/>
                            PH: 555.555.5555 <br/>
                            <br/>
                            FAX: 555.555.5555 <br/>
                            <br/>
                            Contact Rosemary Sage at <a href="mailto:rosemary@lawfirm.com">rosemary@lawfirm.com</a></p>
                        </div>
                        <div className="col-md-3 col-sm-3">
                            <div className='where-we-work-container'>
                                {/* <img src='/static/images/content-link-where.jpg' style="width:100%"> */}
                                {/* <p></p> */}
                                <h6>Where We Work</h6>
                                <p>Find out more about our work coverage area.</p>
                                <br/>
                                    {/* <img class="center career-opp-img" src='./static/images/content-link-reputation.jpg'><br> */}
                                <h6>News & Events</h6>
                                <p>Join our magnificent firm and do more stuff with us.</p>
                                <br/>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </React.Fragment>
    )
}
