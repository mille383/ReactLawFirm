import React from 'react'

export const Home = (props) => {
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
                    <div className="row align-items-start">
                        <div className="col-md-9 col-sm-9">
                            {/* <img style='height: 100%; width: 100%; object-fit:contain;' src='./static/images/nza_slideshow.jpg'/> */}
                        </div>
                        <div className="col-md-3 col-sm-3">
                            <div className="news-feed-container">
                                <p id='news-feed-head'>NEWS FEED</p>
                                <hr id='news-feed-line' />
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum ratione autem molestiae facere
                                inventore provident labore tempora fuga voluptates architecto ex id facilis, hic est, quibusdam
                                sit dolorem, quaerat ad laborum ea alias! Corrupti laudantium provident accusamus veritatis
                                natus veniam dolore a magni quis aperiam dolorum eaque modi nesciunt, maxime atque asperiores
                                animi. Quod quasi magni necessitatibus sint. Quos hic recusandae nam. Aspernatur optio
                                voluptatem porro quasi at a perspiciatis fugiat id tenetur perferendis doloremque, eveniet
                                    cumque dolorem nostrum recusandae?</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-9 col-sm-9">
                            <h6>Welcome to our website!</h6>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae explicabo mollitia eum sit voluptatem nobis facilis accusamus illo voluptas quo quae ut vero, nostrum aspernatur, atque quasi itaque, dicta modi dolore iste vitae molestiae fuga nisi? Nobis sapiente sequi quisquam?</p>
                        </div>
                        <div className="col-md-3 col-sm-3">
                            <h6>Bigshot, Zoo, & Adds, P.C.</h6>
                            <p>419 West South Street, Suite 4200<br/>
                                Houston, Texas 35983<br/>
                                555-555-5555 (Phone)<br/>
                                555-555-5555 (Fax)</p>
                        </div>
                    </div>
                </div>
            </main>
        </React.Fragment>
    )
}
