import React from "react"

const IndexPage = () => {
  return (
    <div>
      <center>
        <table width="600">
          <tr>
            <td width="20">&nbsp;</td>
            <td>
              <section className="ps-info">
                <hr />
                <p>
                  <a href="index.html">Home</a>     •     {" "}
                  <a href="photos.html">Photos</a>     •     {" "}
                  <a href="blogs.html">Dead Blogs</a>     •     {" "}
                  <a href="oldweb.html">Old Web</a>
                </p>
                <hr />
                <p>
                  Welcome! This is an in-progress homepage for Ben Corner.
                </p>
                <p>
                  I like photography.
                </p>
                <hr />
                <figure>
                  <img
                    src="images/home.jpg"
                    alt="trees, light, winter in St. Paul"
                  />
                  <figcaption aria-hidden="true">
                    trees, light, winter in St. Paul
                  </figcaption>
                </figure>
              </section>
            </td>
            <td width="20">&nbsp;</td>
          </tr>
        </table>
      </center>
    </div>
  )
}

export default IndexPage