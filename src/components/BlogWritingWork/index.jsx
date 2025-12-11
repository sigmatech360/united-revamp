import React from 'react'

const BlogWritingWork = () => {
  return (
    <section className='blogwriting-work-sec'>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-10">
                    <div className="blogwriting-work-head">
                        <h6 className='minihead'>Our Writing Process</h6>
                        <h2 className='mainhead'>How We Make Your Blogs Effective</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6">
                    <div className="blogwriting-work-card wordcard-blog-one">
                        <h5>01</h5>
                        <h4>Outline Planning</h4>
                        <p>We begin by mapping your blog structure so every section has purpose, clarity, and flow that your audience instantly connects with.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="blogwriting-work-card wordcard-blog-two">
                        <h5>02</h5>
                        <h4>SEO Strategy</h4>
                        <p>We apply keywords, metadata, and ranking tactics that help your content show up exactly where your audience is searching.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="blogwriting-work-card wordcard-blog-three">
                        <h5>03</h5>
                        <h4>Creative Writing</h4>
                        <p>Then, finally, we turn your topic into a story that entertains, educates, and keeps readers scrolling without losing interest.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BlogWritingWork