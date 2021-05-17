import React from 'react'

export const NewsEvents = (props) => {
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
                                <p id='news-feed-head'>What announcements are we releasing?.</p>
                                <hr id='news-feed-line' />
                                    <ul>
                                        <li>United States</li>
                                        <li>International</li>
                                    </ul>
                                    {/* <img class="center" src='./static/images/content-navlink-career.jpg'><br> */}
                                    <h6>Human Resources</h6>
                                    <p>Discover how Nielsen, Zehe and Antas, P.C uses its innovative software solutions in the market. See what the industry has to say about us,
                                        read our latest announcements, and explore our upcoming events. You can catch several companies at events and expos throughout the U.S.</p>
                            </div>
                        </div>
                        <div className="col-md-9 col-sm-9">
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione odio distinctio unde sed, ipsum eum. Rem perspiciatis deserunt tempore praesentium. Et laudantium ullam ab aut vel quidem nemo exercitationem temporibus eligendi tempora facilis, perspiciatis porro magnam earum dolorum officia consequatur commodi natus iure non facere atque aliquam. Nisi accusantium quia a magnam quos accusamus quod veniam iusto alias est, nostrum minima? Sunt odit eum quidem veritatis similique quam molestiae sapiente dignissimos? Praesentium, voluptas sequi qui dolor quae provident voluptatum excepturi! </p>
                            <div className="row">
                                <div className="col-md-9 col-sm-9">
                                    <h6>United States</h6><hr/>
                                    <p>State</p>
                                </div>
                                <div className="col-md-3 col-sm-3">
                                    <h6>International</h6><hr/>
                                    <p>Thailand<br/>Peru<br/>Antartica<br/>Mexico</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </React.Fragment>
    )
}
