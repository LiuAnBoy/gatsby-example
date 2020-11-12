import React from "react"
import Layout from "../component/layout"
import style from "../component/blog.module.css"

const blog = () => {
  return (
    <Layout>
      <div className={style.page}>
        <h1>this is our blog page</h1>
        <p className={style.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio
          vitae sit minima consequuntur amet reiciendis! Distinctio ullam
          laboriosam quibusdam cumque libero exercitationem voluptate rem
          maiores!
        </p>
      </div>
    </Layout>
  )
}

export default blog
