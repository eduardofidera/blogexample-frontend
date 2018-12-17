import React, { Fragment } from 'react'

class Home extends React.Component {
  state = {
    posts: [
      {
        category: 'politics',
        imageUrl:
          'https://cdn.am-online.com/media/1/kia-proceed-and-ceed-gt/1610288-kia-proceed-01a-rear-bg_w555_h555.jpg',
        title: 'didi kuaidi, the company beating uber in china, opens its API to third party apps',
        author: {
          avatarUrl: '/images/avatar.png',
          description: 'by alexandre henrique shaleish zetajones',
        },
      },
      {
        category: 'politics',
        imageUrl: 'http://www.mrhospitals.com/images/childcare_bg.jpg',
        title: 'didi kuaidi, the company beating uber in china, opens its API to third party apps',
        author: {
          avatarUrl: '/images/avatar.png',
          description: 'by alexandre henrique shaleish zetajones',
        },
        description:
          'Last Week, Nasa Announced A New Program Called The Planetary Defense Coordination Office (PDCO) Which Will Coordinate NASA`S Efforts For Detecting And Tracking Near-Earth-Objects (NEOs). If A Large Object Comes Hurting Toward Our Planet...',
      },
      {
        category: 'politics',
        imageUrl: 'http://www.mrhospitals.com/images/childcare_bg.jpg',
        title: 'didi kuaidi, the company beating uber in china, opens its API to third party apps',
        author: {
          avatarUrl: '/images/avatar.png',
          description: 'by alexandre henrique shaleish zetajones',
        },
        description:
          'Last Week, Nasa Announced A New Program Called The Planetary Defense Coordination Office (PDCO) Which Will Coordinate NASA`S Efforts For Detecting And Tracking Near-Earth-Objects (NEOs). If A Large Object Comes Hurting Toward Our Planet...',
      },
    ],

    filter: 'politics',
  }

  componentWillMount() {
    console.log(this.props)

    this.setState({
      filter: this.props.location.search,
    })
  }

  getValueFromParam = function(param) {
    return true
  }

  render() {
    console.log(this.state.filter)

    return (
      <Fragment>
        <section className="newsletter">
          <div className="main-content">
            <div className="container">
              <div className="row">
                {this.state.posts.map((post, i) => {
                  return post.category == getValueFromParam(this.state.filter) ? (
                    <div
                      className={
                        i == 0 ? `col-md-6 col-sm-12 col-xs-12` : 'col-md-3 col-sm-6 col-xs-12'
                      }
                    >
                      <div className={i == 0 ? `main-news` : ``}>
                        <span className="title -red">{post.category}</span>
                        <div className="main-img">
                          <img src={post.imageUrl} />
                        </div>
                        <h2 className="pt-10">{post.title}</h2>
                        <div className="avatar mt-10">
                          <img src={post.author.avatarUrl} alt="" />
                          <p>{post.author.description}</p>
                        </div>
                        <div class="description mt-20">
                          <p>{post.description}</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div>post not filtered</div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="newsletter-secondary pt-40">
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-sm-6  col-xs-12">
                <span className="title -orange">sports</span>
                <h2 className="pt-10">
                  didi kuaidi, the company beating uber in china, opens its API to third party apps
                </h2>
                <div className="avatar mt-20">
                  <img src="/images/avatar.png" alt="" />
                  <p>by alexandre henrique shaleish zetajones</p>
                </div>
                <div className="description mt-20">
                  <p>
                    last week, nasa announced a new program called the planetary defense
                    coordination office (PDCO) which will coordinate NASA`s efforts for detecting
                    and tracking near-earth-objects (NEOs). if a large object comes hurting toward
                    our planet...
                  </p>
                </div>
              </div>
              <div className="col-md-4 col-sm-6  col-xs-12">
                <span className="title -blue">tech</span>
                <h2 className="pt-10">
                  didi kuaidi, the company beating uber in china, opens its API to third party apps
                </h2>
                <div className="avatar mt-20">
                  <img src="/images/avatar.png" alt="" />
                  <p>by alexandre henrique shaleish zetajones</p>
                </div>
                <div className="description mt-20">
                  <p>
                    last week, nasa announced a new program called the planetary defense
                    coordination office (PDCO) which will coordinate NASA`s efforts for detecting
                    and tracking near-earth-objects (NEOs). if a large object comes hurting toward
                    our planet...
                  </p>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12">
                <span className="title -green">science</span>
                <h2 className="pt-10">
                  didi kuaidi, the company beating uber in china, opens its API to third party apps
                </h2>
                <div className="avatar mt-20">
                  <img src="/images/avatar.png" alt="" />
                  <p>by alexandre henrique shaleish zetajones</p>
                </div>
                <div className="description mt-20">
                  <p>
                    last week, nasa announced a new program called the planetary defense
                    coordination office (PDCO) which will coordinate NASA`s efforts for detecting
                    and tracking near-earth-objects (NEOs). if a large object comes hurting toward
                    our planet...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    )
  }
}

export default Home
