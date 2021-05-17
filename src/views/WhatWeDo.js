import React from 'react'

export const WhatWeDo = (props) => {
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
                                <p id='news-feed-head'>WHAT WE DO</p>
                                <hr id='news-feed-line' />
                                    <ul>
                                        <li>Subrogation</li>
                                        <ul>
                                            <li>Property</li>
                                            <li>Workers Comp</li>
                                        </ul>
                                        <li>Litigation</li>
                                        <ul>
                                            <li>Appeliate</li>
                                            <li>Commercial</li>
                                            <li>Defense</li>
                                            <li>Labor/Employment</li>
                                        </ul>
                                        <li>Business</li>
                                        <ul>
                                            <li>Brokerage Agreement</li>
                                            <li>Business Formation</li>
                                            <li>Business Related</li>
                                            <li>Contracts</li>
                                            <li>Property</li>
                                            <li>Labor/Employment</li>
                                        </ul>
                                        <li>Transportation</li>
                                        <ul>
                                            <li>Brokerage Agreement</li>
                                            <li>Business Formation</li>
                                        </ul>
                                    </ul>
                                    {/* <img class="center" src='./static/images/content-navlink-attorneys.jpg'><br> */}
                                <h6>Attorneys</h6>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, atque.</p>
                            </div>
                        </div>
                        <div class="col-md-9 col-sm-9">
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora in repudiandae iste. Quisquam deserunt veniam,
                            aperiam quasi voluptatibus adipisci rerum nobis labore dicta fuga corrupti velit repudiandae aspernatur aliquam
                            ipsam, repellendus animi! Dolorem omnis veniam blanditiis vel nam dicta maiores dolorum qui. Atque dolores minus
                            magni debitis, rem adipisci placeat tenetur minima deserunt veritatis ipsum quis pariatur. Commodi explicabo quidem
                            veniam sint deleniti provident id praesentium fugiat, voluptates atque tenetur iste, consequatur obcaecati illo
                            maiores aperiam dicta, dignissimos neque tempora cupiditate consequuntur corrupti. Quo aperiam libero magni aliquam
                            nemo consequatur sapiente excepturi ab et! Harum, totam! Aliquam exercitationem sapiente quia!</p>
                            {/* <img class='what-do-images' src='./static/images/sub-02-subrogation.jpg'>
                            <img src='./static/images/sub-02-litigation.jpg'><br><br>
                            <img class='what-do-images' src='./static/images/sub-02-business.jpg'>
                            <img src='./static/images/sub-02-warehouse.jpg'> */}
                        </div>
                    </div>
                </div>
            </main>
        </React.Fragment>
    )
}
